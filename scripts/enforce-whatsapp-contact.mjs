import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const whatsappUrl = 'https://wa.me/33756872961';
const whatsappDisplay = '+33 7 56 87 29 61';
const allowedExtensions = new Set(['.html', '.js']);

const replacements = [
  ['tel:+33188842222', whatsappUrl],
  ['tel:0188842222', whatsappUrl],
  ['tel:+33 1 88 84 22 22', whatsappUrl],
  ['+33 1 88 84 22 22', whatsappDisplay],
  ['01 88 84 22 22', whatsappDisplay],
  ['Appel gratuit', 'Appel via WhatsApp'],
  ['Numéro gratuit', 'Appel WhatsApp'],
  ['Free number', 'WhatsApp call'],
  ['Telephone *', 'WhatsApp number *'],
  ['Téléphone *', 'Numéro WhatsApp *'],
  ['être rappelé', 'être appelé via WhatsApp'],
  ['be called back', 'receive a WhatsApp call'],
];

let changedFiles = 0;
let replacementCount = 0;

async function processDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(path);
      continue;
    }

    if (!allowedExtensions.has(extname(entry.name))) continue;

    const original = await readFile(path, 'utf8');
    let updated = original;

    for (const [from, to] of replacements) {
      const count = updated.split(from).length - 1;
      if (count > 0) {
        replacementCount += count;
        updated = updated.replaceAll(from, to);
      }
    }

    if (updated !== original) {
      await writeFile(path, updated, 'utf8');
      changedFiles += 1;
    }
  }
}

await processDirectory(dist);
console.log(`Enforced WhatsApp-only contact: ${replacementCount} replacements in ${changedFiles} built files.`);
