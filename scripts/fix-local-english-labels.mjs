import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = join(process.cwd(), 'dist', 'en');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

const files = await walk(root);
let updated = 0;

for (const file of files) {
  if (!file.includes('/uk/') && !file.includes('/us/') && !file.includes('\\uk\\') && !file.includes('\\us\\')) continue;

  let html = await readFile(file, 'utf8');
  const original = html;
  html = html
    .replaceAll('Cliniqeo Hair Turquie', 'Cliniqeo Hair Turkey')
    .replaceAll('Cliniqeo Turquie', 'Cliniqeo Turkey')
    .replaceAll('Cliniqeo en France', 'Cliniqeo France')
    .replaceAll('FUE ≈ 3 000 greffons', 'FUE ≈ 3,000 grafts')
    .replaceAll('DHI ≈ 3 000 greffons', 'DHI ≈ 3,000 grafts')
    .replaceAll(' avant après', ' before and after')
    .replaceAll(' résultat ', ' result ');

  if (html !== original) {
    await writeFile(file, html, 'utf8');
    updated += 1;
  }
}

console.log(`Corrected English labels in ${updated} local landing files.`);
