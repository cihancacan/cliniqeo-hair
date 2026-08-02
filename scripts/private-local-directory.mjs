import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const directoryPaths = [
  '/greffe-cheveux-france',
  '/en/uk/hair-transplant-cities',
  '/en/us/hair-transplant-cities',
  '/en/hair-transplant-by-city',
];

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

const htmlFiles = await walk(dist);
let landingFilesUpdated = 0;
let directoryFilesUpdated = 0;

for (const file of htmlFiles) {
  let html = await readFile(file, 'utf8');
  const original = html;
  const normalized = file.replaceAll('\\', '/');
  const isDirectory = directoryPaths.some((path) => {
    const route = path.replace(/^\//, '');
    return normalized.endsWith(`/${route}.html`) || normalized.endsWith(`/${route}/index.html`);
  });

  if (isDirectory) {
    html = html.replace(
      /<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">/g,
      '<meta name="robots" content="noindex,follow">',
    );
    directoryFilesUpdated += 1;
  } else if (
    normalized.includes('/greffe-de-cheveux-') ||
    normalized.includes('/greffe-capillaire-') ||
    normalized.includes('/implant-capillaire-') ||
    normalized.includes('/prix-greffe-cheveux-') ||
    normalized.includes('/clinique-greffe-cheveux-') ||
    normalized.includes('/en/uk/hair-') ||
    normalized.includes('/en/us/hair-')
  ) {
    html = html
      .replace(/<nav([^>]*)><a href="\/greffe-cheveux-france">Guides par ville<\/a> › /g, '<nav$1><a href="/">Accueil</a> › ')
      .replace(/<nav([^>]*)><a href="\/en\/(?:uk|us)\/hair-transplant-cities">City guides<\/a> › /g, '<nav$1><a href="/en">Home</a> › ')
      .replace(/\{"@type":"ListItem","position":2,"name":"Villes","item":"https:\/\/cliniqeo-hair\.vercel\.app\/greffe-cheveux-france"\},/g, '')
      .replace(/\{"@type":"ListItem","position":2,"name":"Cities","item":"https:\/\/cliniqeo-hair\.vercel\.app\/en\/(?:uk|us)\/hair-transplant-cities"\},/g, '')
      .replace(/"position":3,"name":/g, '"position":2,"name":');
    landingFilesUpdated += 1;
  }

  if (html !== original) await writeFile(file, html, 'utf8');
}

const sitemapPath = join(dist, 'sitemap.xml');
let sitemap = await readFile(sitemapPath, 'utf8');
for (const path of directoryPaths) {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  sitemap = sitemap.replace(
    new RegExp(`\\s*<url><loc>https://cliniqeo-hair\\.vercel\\.app${escaped}<\\/loc>[\\s\\S]*?<\\/url>`, 'g'),
    '',
  );
}
await writeFile(sitemapPath, sitemap, 'utf8');

console.log(`Protected local directories: ${directoryFilesUpdated} directory files and ${landingFilesUpdated} landing files processed.`);
