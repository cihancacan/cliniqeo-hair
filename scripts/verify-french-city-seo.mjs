import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const source = await readFile('src/config/localSeoData.ts', 'utf8');
const array = name => Function(`return [${source.match(new RegExp(`export const ${name}:[^=]+=[\\s\\S]*?\\[([\\s\\S]*?)\\n\\];`))[1]}]`)();
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const titles = new Set();
let count = 0;
for (const city of array('frLocalCities')) for (const keyword of array('frLocalKeywords')) {
  const route = `${keyword.slug}-${city.slug}`;
  const html = await readFile(`dist/${route}.html`, 'utf8');
  const canonical = `https://cliniqeo.com/greffe-cheveux-turquie/${route}`;
  assert.equal((html.match(/<h1\b/g)||[]).length, 1, route);
  assert.equal((html.match(/rel="canonical"/g)||[]).length, 1, route);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), route);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), route);
  assert.ok(!html.includes('content="noindex'), route);
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title), route); titles.add(title);
  for (const content of ['id="city-travel-guide"', 'Les vols ne sont pas inclus', 'FUE à partir de 2 490 €', 'DHI à partir de 2 990 €', 'dès 249 € par mois', 'id="local-native-form"', 'name="email"', 'name="phone"', '33756872961', 'Guides par ville en France', 'bzrcdn.openai.com/sdk/oaiq.min.js']) assert.ok(html.includes(content), `${route}: ${content}`);
  assert.ok(!html.includes('LE PLUS AVANTAGEUX'), route);
  assert.ok(!html.includes('Cliniqeo en France'), route);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1]));
  assert.equal(schemas.find(s=>s['@type']==='WebPage').inLanguage, 'fr-FR');
  assert.equal(schemas.find(s=>s['@type']==='FAQPage').mainEntity.length, 5);
  for (const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (!href.startsWith('https://cliniqeo.com/greffe-cheveux-turquie/')) continue;
    const target = new URL(href).pathname.replace('/greffe-cheveux-turquie/', '');
    if (/^(greffe-de-cheveux-|greffe-capillaire-|implant-capillaire-|prix-greffe-cheveux-|clinique-greffe-cheveux-|greffe-cheveux-france)/.test(target)) await readFile(`dist/${target}.html`);
  }
  assert.equal(html, await readFile(`dist/${route}/index.html`, 'utf8'));
  count++;
}
assert.equal(count,120);
console.log(`Verified ${count} French city pages: content, links, metadata, sitemap, prices, forms and tracking pixel.`);
