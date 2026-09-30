import { readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const upstreamOrigin = 'https://cliniqeo-hair.vercel.app';

const homePages = [
  { file: join(dist, 'index.html'), routeChunk: 'HomePage-' },
  { file: join(dist, 'en', 'index.html'), routeChunk: 'EnglishHomePage-' },
  { file: join(dist, 'en.html'), routeChunk: 'EnglishHomePage-' },
];

function assetPathFromUrl(url) {
  const parsed = new URL(url, upstreamOrigin);
  return join(dist, parsed.pathname.replace(/^\/+/, ''));
}

function dynamicChunk(entrySource, prefix) {
  const match = entrySource.match(new RegExp(`import\\(\\"\\./(${prefix}[^\\"]+\\.js)\\"\\)`));
  return match?.[1] ?? null;
}

for (const page of homePages) {
  let html;
  try {
    html = await readFile(page.file, 'utf8');
  } catch {
    continue;
  }

  const entryUrl = html.match(/<script\s+type=["']module["'][^>]*src=["']([^"']+)["'][^>]*><\/script>/i)?.[1];
  const stylesheet = html.match(/<link\s+rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (!entryUrl || !stylesheet) {
    throw new Error(`Unable to find the app entry and stylesheet in ${page.file}`);
  }

  const entrySource = await readFile(assetPathFromUrl(entryUrl), 'utf8');
  const css = await readFile(assetPathFromUrl(stylesheet[1]), 'utf8');
  const mainChunk = dynamicChunk(entrySource, 'main-');
  const routeChunk = dynamicChunk(entrySource, page.routeChunk);
  if (!mainChunk || !routeChunk) {
    throw new Error(`Unable to identify initial chunks for ${page.file}`);
  }

  const preloads = [mainChunk, routeChunk]
    .map((chunk) => `<link rel="modulepreload" crossorigin href="${upstreamOrigin}/assets/${basename(chunk)}">`)
    .join('\n    ');
  const inlineStyles = `<style data-cliniqeo-critical-styles>${css}</style>`;

  html = html.replace(stylesheet[0], inlineStyles);
  html = html.replace('</head>', `    ${preloads}\n  </head>`);
  await writeFile(page.file, html, 'utf8');
}

console.log('Inlined home styles and preloaded the initial application chunks.');
