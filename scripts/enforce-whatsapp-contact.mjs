import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const whatsappDisplay = '+33 7 56 87 29 61';
const allowedExtensions = new Set(['.html', '.js']);

// Do not rewrite phone links to WhatsApp: both channels use the same number.
const replacements = [
  ['tel:+33188842222', 'tel:+33756872961'],
  ['tel:0188842222', 'tel:+33756872961'],
  ['tel:+33 1 88 84 22 22', 'tel:+33756872961'],
  ['tel:+33756978583', 'tel:+33756872961'],
  ['wa.me/33756978583', 'wa.me/33756872961'],
  ['+33 7 56 97 85 83', whatsappDisplay],
  ['+33 1 88 84 22 22', whatsappDisplay],
  ['01 88 84 22 22', whatsappDisplay],
  ['Appels uniquement via WhatsApp', 'Appel classique et WhatsApp disponibles'],
  ['Calls available only through WhatsApp', 'Phone calls and WhatsApp available'],
  ['WhatsApp call only', 'Phone call or WhatsApp'],
  ['Appel gratuit', 'Appeler'],
  ['Numéro gratuit', 'Téléphone'],
  ['Free number', 'Phone number'],
  ['être appelé via WhatsApp', 'être recontacté'],
  ['receive a WhatsApp call', 'receive a call'],
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
console.log(`Normalized phone and WhatsApp contact: ${replacementCount} replacements in ${changedFiles} built files.`);
