import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const currentYear = String(new Date().getUTCFullYear());
const staleYears = ['2025'];
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt', '.map']);

let changedFiles = 0;
let replacements = 0;

async function updateDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateDirectory(path);
      continue;
    }

    if (!textExtensions.has(extname(entry.name))) continue;

    const original = await readFile(path, 'utf8');
    let updated = original;

    for (const staleYear of staleYears) {
      const occurrences = updated.split(staleYear).length - 1;
      if (occurrences > 0) {
        replacements += occurrences;
        updated = updated.replaceAll(staleYear, currentYear);
      }
    }

    if (updated !== original) {
      await writeFile(path, updated, 'utf8');
      changedFiles += 1;
    }
  }
}

await updateDirectory(dist);
console.log(`Updated ${replacements} stale year references to ${currentYear} in ${changedFiles} built files.`);
