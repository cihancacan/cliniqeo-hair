import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const titles = new Set();
let pages = 0;
for (const country of ['uk', 'us']) {
  for (const filename of await readdir(`dist/en/${country}`)) {
    if (!filename.endsWith('.html') || filename === 'hair-transplant-cities.html') continue;
    const html = await readFile(`dist/en/${country}/${filename}`, 'utf8');
    const route = filename.slice(0, -5);
    const canonical = `https://cliniqeo.com/en/hair-transplant-turkey/${country}/${route}`;
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), route);
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), route);
    assert.ok(!/content="noindex/.test(html), route);
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
    for (const required of ['id="city-travel-guide"', 'Flights are not included', 'FUE from $3,490 USD', 'DHI from $3,999 USD', 'id="local-native-form"', 'name="email"', 'name="phone"', 'US &amp; UK city guides', '33756872961', 'bzrcdn.openai.com/sdk/oaiq.min.js']) {
      assert.ok(html.includes(required), `${route}: missing ${required}`);
    }
    assert.ok(!html.includes('BEST VALUE'), route);
    assert.ok(!/\d[\d ]*€/.test(html), `${route}: mixed euro price`);
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      assert.ok(!href.startsWith('/en/'), `${route}: noncanonical internal link ${href}`);
      if (href.startsWith('https://cliniqeo.com/en/hair-transplant-turkey/')) {
        const path = new URL(href).pathname.replace('/en/hair-transplant-turkey', '/en');
        if (/^\/en\/(uk|us)\//.test(path)) await readFile(`dist${path}.html`);
      }
    }
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const schema = JSON.parse(json);
      const faq = schema.find(item => item['@type'] === 'FAQPage');
      assert.equal(faq.mainEntity.length, 5, route);
      assert.ok(faq.mainEntity.some(item => item.acceptedAnswer.text.includes('Flights are not included')), route);
    }
    assert.equal(html, await readFile(`dist/en/${country}/${route}/index.html`, 'utf8'), route);
    pages++;
  }
}
assert.equal(pages, 350);
console.log(`Verified ${pages} city pages and their directory copies: metadata, sitemap, links, prices, forms and measurement pixel.`);
