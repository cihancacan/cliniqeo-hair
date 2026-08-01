import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const assetsDirectory = join(process.cwd(), 'dist', 'assets');
const imageSources = [
  '/greffe cheveux turquie avant apres.png',
  '/greffe cheveux turquie avant après copy.png',
  '/greffe cheveux turquie avant après copy copy.png',
  '/greffe cheveux turquie avant après, cliniqeo.png',
  '/greffe cheveux turquie avant après copy copy copy.png',
  '/greffe cheveux turquie avant après copy copy copy copy.png',
];

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const files = await readdir(assetsDirectory);
let replacements = 0;

for (const file of files) {
  if (!file.endsWith('.js')) continue;

  const path = join(assetsDirectory, file);
  let source = await readFile(path, 'utf8');
  const original = source;

  for (const imageSource of imageSources) {
    const pattern = new RegExp(
      `src:(['"])${escapeRegExp(imageSource)}\\1(?!,loading:)`,
      'g',
    );

    source = source.replace(pattern, (match) => {
      replacements += 1;
      return `${match},loading:"lazy",decoding:"async",fetchPriority:"low"`;
    });
  }

  if (source !== original) {
    await writeFile(path, source, 'utf8');
  }
}

console.log(`Deferred ${replacements} legacy homepage gallery images.`);
