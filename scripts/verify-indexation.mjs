import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const origin = 'https://cliniqeo.com/greffe-cheveux-turquie';
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const route of ['contact', 'tarifs', 'a-propos', 'faq', 'techniques', 'turquie', 'greffe-cheveux/avant-apres']) {
  const html = await readFile(`dist/${route}.html`, 'utf8');
  assert.match(html, /data-prerender="core-fr"/);
  assert.match(html, /<h1\b/);
  assert.ok(!html.includes('<div id="root"></div>'));
  assert.ok(html.includes(`rel="canonical" href="${origin}/${route}"`));
  assert.ok(sitemap.includes(`<loc>${origin}/${route}</loc>`));
  assert.ok(!html.includes('<title>Greffe de cheveux Turquie – Diagnostic offert'));
  assert.ok(html.includes('https://cliniqeo.com/greffe-cheveux-turquie/contact'));
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(match[1]);
}
for (const route of ['fue-saphir-turquie', 'dhi-ou-fue']) {
  const html = await readFile(`dist/${route}.html`, 'utf8');
  assert.match(html, /<html lang="fr"/);
  assert.ok(html.includes(`rel="canonical" href="${origin}/${route}"`));
  assert.ok(!sitemap.includes(`<loc>https://cliniqeo.com/en/hair-transplant-turkey/${route}</loc>`));
}
assert.match(await readFile('dist/404.html', 'utf8'), /name="robots" content="noindex,follow"/);
assert.ok(!sitemap.includes('/404</loc>'));
assert.equal(JSON.parse(await readFile('vercel.json', 'utf8')).routes.at(-1).status, 404);
const contact = await readFile('dist/contact.html', 'utf8');
assert.match(contact, /<form\b/);
assert.match(contact, /name="email"/);
assert.match(contact, /type="module"[^>]+src=/);
const pricing = await readFile('dist/en/pricing.html', 'utf8');
const pricingSource = await readFile('src/pages/en/EnglishPricingPage.tsx', 'utf8');
for (const match of [...pricingSource.matchAll(/price: '([^']+)'/g)].slice(0, 3)) assert.ok(pricing.includes(match[1]), 'English snapshot must match current displayed package prices');
assert.ok(!pricing.includes('€1,990') && !pricing.includes('€2,490'));
const faq = await readFile('dist/faq.html', 'utf8');
assert.ok(faq.includes('La greffe ne garantit pas un résultat à vie.'));
assert.ok(!faq.includes('Ils ne retomberont jamais.'));
console.log('Verified seven French prerenders, public canonicals, French FUE/DHI routes, contact form markup and the noindex 404 fallback.');
