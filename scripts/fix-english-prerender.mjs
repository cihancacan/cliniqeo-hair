import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

const routeReplacements = [
  ['href="/contact"', 'href="/en/contact"'],
  ['href="/faq"', 'href="/en/faq"'],
  ['href="/tarifs"', 'href="/en/pricing"'],
  ['href="/pricing"', 'href="/en/pricing"'],
  ['href="/a-propos"', 'href="/en/about"'],
  ['href="/about"', 'href="/en/about"'],
  ['href="/techniques"', 'href="/en/techniques"'],
  ['href="/turquie"', 'href="/en/why-turkey"'],
  ['href="/greffe-cheveux/avant-apres"', 'href="/en/before-after"'],
  ['href="/seo/greffe-cheveux-fue-turquie"', 'href="/fue-hair-transplant-turkey"'],
  ['href="/seo/greffe-cheveux-dhi-turquie"', 'href="/dhi-hair-transplant-turkey"'],
];

let updated = 0;
for (const filePath of await walk(dist)) {
  let html = await readFile(filePath, 'utf8');
  if (!/<html\s+lang=["']en["']>/i.test(html)) continue;

  const original = html;
  html = html
    .replace(/(<p[^>]*>)Pour\s+/g, '$1For ')
    .replace(/\bfUE\b/g, 'FUE')
    .replace(/\bdHI\b/g, 'DHI');

  for (const [source, destination] of routeReplacements) {
    html = html.split(source).join(destination);
  }

  if (html !== original) {
    await writeFile(filePath, html, 'utf8');
    updated += 1;
  }
}

console.log(`Cleaned ${updated} English prerendered HTML files.`);
