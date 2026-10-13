import { readFile } from 'node:fs/promises';

// These two wording/technique variants substantially repeat the complete city
// guide. Keep their URLs accessible, but consolidate discovery and ranking
// signals into that guide. Cost and clinic selection retain distinct intents.
export const consolidatedIntents = new Set(['technique', 'implant']);
export async function localGroups() {
  const source = await readFile('src/config/localSeoData.ts', 'utf8');
  const array = name => {
    const match = source.match(new RegExp(`export const ${name}:[^=]+=[\\s\\S]*?\\[([\\s\\S]*?)\\n\\];`));
    if (!match) throw new Error(`Missing ${name}`);
    return Function(`"use strict"; return [${match[1]}];`)();
  };
  return [
    ['fr', array('frLocalCities'), array('frLocalKeywords')],
    ['uk', array('ukLocalCities'), array('enLocalKeywords')],
    ['us', array('usLocalCities'), array('enLocalKeywords')],
  ];
}
export function localRoute(country, city, keyword) {
  return `${country === 'fr' ? '' : '/en/' + country}/${keyword.slug}-${city.slug}`;
}
export async function localAliases() {
  const aliases = new Map();
  for (const [country, cities, keywords] of await localGroups()) {
    const complete = keywords.find(k => k.intent === 'complete');
    for (const city of cities) {
      for (const keyword of keywords.filter(k => consolidatedIntents.has(k.intent))) {
        aliases.set(localRoute(country, city, keyword), localRoute(country, city, complete));
      }
    }
  }
  return aliases;
}
