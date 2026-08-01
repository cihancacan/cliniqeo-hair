import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const sitemapPath = join(process.cwd(), 'dist', 'sitemap.xml');
const origin = 'https://cliniqeo-hair.vercel.app';

const pairs = [
  ['/meilleure-clinique-greffe-cheveux-turquie', '/best-hair-transplant-clinic-turkey'],
  ['/meilleure-clinique-implant-cheveux-turquie', '/best-clinic-for-hair-transplant-turkey'],
  ['/meilleure-clinique-implant-capillaire-turquie', '/best-hair-implant-clinic-turkey'],
];

let sitemap = await readFile(sitemapPath, 'utf8');
let added = 0;

for (const [fr, en] of pairs) {
  for (const [path, lang, alternateLang, alternate] of [
    [fr, 'fr', 'en', en],
    [en, 'en', 'fr', fr],
  ]) {
    const loc = `${origin}${path}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;

    const entry = `
  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${origin}${alternate}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${en}"/>
    <lastmod>2026-08-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;

    sitemap = sitemap.replace('</urlset>', `${entry}\n</urlset>`);
    added += 1;
  }
}

await writeFile(sitemapPath, sitemap, 'utf8');
console.log(`Added ${added} best-clinic URLs to sitemap.xml.`);
