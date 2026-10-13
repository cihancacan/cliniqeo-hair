
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const data = await readFile('src/config/localSeoData.ts', 'utf8');
const readArray = (name) => {
  const match = data.match(new RegExp('export const ' + name + ':[^=]+=[\\s\\S]*?\\[([\\s\\S]*?)\\n\\];'));
  assert.ok(match, 'missing local city list: ' + name);
  return Function('"use strict"; return [' + match[1] + '];')();
};
const variants = [
  ['fr', readArray('frLocalCities'), readArray('frLocalKeywords')],
  ['uk', readArray('ukLocalCities'), readArray('enLocalKeywords')],
  ['us', readArray('usLocalCities'), readArray('enLocalKeywords')],
];
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const titles = new Set();
const descriptions = new Set();
let count = 0;
for (const [country, cities, keywords] of variants) {
  for (const city of cities) {
    for (const keyword of keywords) {
      const route = country === 'fr' ? keyword.slug + '-' + city.slug : 'en/' + country + '/' + keyword.slug + '-' + city.slug;
      const html = await readFile(join(dist, route, 'index.html'), 'utf8');
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
      const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
      const url = 'https://cliniqeo.com/' + (country === 'fr' ? 'greffe-cheveux-turquie/' : 'en/hair-transplant-turkey/') + (country === 'fr' ? route : route.slice(3));
      assert.ok(title?.includes(city.name), 'wrong city title: ' + route);
      assert.ok(description?.includes(city.name), 'wrong city description: ' + route);
      assert.ok(html.includes('id="city-editorial-guide"'), 'missing source-backed editorial: ' + route);
      assert.ok(html.includes('https://ishrs.org/patients/consumer-advocacy/'), 'missing independent patient resource: ' + route);
      assert.ok(html.includes('id="local-native-form"'), 'missing lead form: ' + route);
      assert.ok(html.includes('type="application/ld+json"'), 'missing structured data: ' + route);
      assert.ok(html.includes('BreadcrumbList'), 'missing breadcrumbs: ' + route);
      assert.ok(html.includes('rel="canonical" href="' + url + '"'), 'wrong canonical: ' + route);
      assert.ok(sitemap.includes('<loc>' + url + '</loc>'), 'missing sitemap URL: ' + route);
      assert.ok(!html.includes('dès 1 990€'), 'stale advertised price: ' + route);
      assert.ok(!html.includes('from €1,990'), 'stale English price: ' + route);
      assert.ok(!titles.has(title), 'duplicate title: ' + title);
      assert.ok(!descriptions.has(description), 'duplicate meta description: ' + description);
      titles.add(title);
      descriptions.add(description);
      count++;
    }
  }
}
assert.equal(count, 470);
console.log('Validated ' + count + ' city SEO landings: intent-specific metadata, unique titles/descriptions, editorial guidance, sources, canonical URLs, sitemap entries, visible lead forms and JSON-LD.');
