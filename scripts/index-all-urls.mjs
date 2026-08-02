import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const origin = 'https://cliniqeo-hair.vercel.app';
const indexDirective = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

const standaloneAliases = new Map([
  ['/about', {
    target: '/a-propos',
    lang: 'fr',
    title: 'À propos de Cliniqeo Hair',
    description: 'Découvrez Cliniqeo Hair, son accompagnement français et l’organisation des parcours de greffe de cheveux en Turquie.',
  }],
  ['/pricing', {
    target: '/tarifs',
    lang: 'fr',
    title: 'Tarifs greffe de cheveux Cliniqeo Hair',
    description: 'Consultez les tarifs Cliniqeo Hair, les techniques proposées, les prestations incluses et les solutions de paiement.',
  }],
  ['/seo/greffe-cheveux-fue-turquie', {
    target: '/greffe-de-cheveux-fue-turquie',
    lang: 'fr',
    title: 'Greffe de cheveux FUE en Turquie',
    description: 'Guide complet sur la greffe de cheveux FUE en Turquie : technique, prix, organisation, hôtel, transferts et suivi.',
  }],
  ['/seo/greffe-cheveux-dhi-turquie', {
    target: '/greffe-de-cheveux-dhi-turquie',
    lang: 'fr',
    title: 'Greffe de cheveux DHI en Turquie',
    description: 'Guide complet sur la greffe de cheveux DHI en Turquie : technique, prix, organisation, hôtel, transferts et suivi.',
  }],
  ['/en/fue-hair-transplant-turkey', {
    target: '/fue-hair-transplant-turkey',
    lang: 'en',
    title: 'FUE Hair Transplant in Turkey',
    description: 'Complete guide to FUE hair transplantation in Turkey, including assessment, cost, accommodation, transfers and follow-up.',
  }],
  ['/en/dhi-hair-transplant-turkey', {
    target: '/dhi-hair-transplant-turkey',
    lang: 'en',
    title: 'DHI Hair Transplant in Turkey',
    description: 'Complete guide to DHI hair transplantation in Turkey, including assessment, cost, accommodation, transfers and follow-up.',
  }],
  ['/en/turkey-hair-transplant-cost', {
    target: '/turkey-hair-transplant-cost',
    lang: 'en',
    title: 'Turkey Hair Transplant Cost',
    description: 'Compare hair transplant costs in Turkey, package inclusions, FUE and DHI options, travel planning and follow-up.',
  }],
  ['/best-hair-transplant-turkey', {
    target: '/best-hair-transplant-clinic-turkey',
    lang: 'en',
    title: 'Best Hair Transplant in Turkey',
    description: 'How to compare hair transplant clinics in Turkey by medical responsibility, donor safety, technique, pricing and aftercare.',
  }],
]);

const routeFiles = (route) => {
  if (route === '/') return [join(dist, 'index.html')];
  const clean = route.replace(/^\//, '');
  return [join(dist, `${clean}.html`), join(dist, clean, 'index.html')];
};

async function readRoute(route) {
  for (const file of routeFiles(route)) {
    try {
      await access(file);
      return await readFile(file, 'utf8');
    } catch {
      // Try the next physical representation.
    }
  }
  return null;
}

async function writeRoute(route, html) {
  for (const file of routeFiles(route)) {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, 'utf8');
  }
}

function setMeta(html, selectorPattern, replacement, insertion) {
  if (selectorPattern.test(html)) return html.replace(selectorPattern, replacement);
  return html.replace('</head>', `${insertion}\n  </head>`);
}

function makeIndexable(html, route, options = {}) {
  const pageUrl = `${origin}${route}`;
  const targetUrl = options.target ? `${origin}${options.target}` : null;

  if (targetUrl) html = html.replaceAll(targetUrl, pageUrl);

  html = html
    .replace(/<meta\s+http-equiv=["']refresh["'][^>]*>/gi, '')
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${options.lang || 'fr'}">`);

  if (options.removeApplication) {
    html = html.replace(/\s*<script\s+type=["']module["'][^>]*src=["'][^"']+["'][^>]*><\/script>/gi, '');
  }

  if (options.title) {
    html = /<title>[\s\S]*?<\/title>/i.test(html)
      ? html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${options.title} | Cliniqeo Hair</title>`)
      : html.replace('</head>', `  <title>${options.title} | Cliniqeo Hair</title>\n  </head>`);
  }

  if (options.description) {
    html = setMeta(
      html,
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?\s*>/i,
      `<meta name="description" content="${options.description}">`,
      `  <meta name="description" content="${options.description}">`,
    );
  }

  html = setMeta(
    html,
    /<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?\s*>/i,
    `<meta name="robots" content="${indexDirective}">`,
    `  <meta name="robots" content="${indexDirective}">`,
  );

  html = setMeta(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?\s*>/i,
    `<link rel="canonical" href="${pageUrl}">`,
    `  <link rel="canonical" href="${pageUrl}">`,
  );

  html = setMeta(
    html,
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?\s*>/i,
    `<meta property="og:url" content="${pageUrl}">`,
    `  <meta property="og:url" content="${pageUrl}">`,
  );

  if (options.title) {
    html = setMeta(
      html,
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?\s*>/i,
      `<meta property="og:title" content="${options.title} | Cliniqeo Hair">`,
      `  <meta property="og:title" content="${options.title} | Cliniqeo Hair">`,
    );
  }

  if (options.description) {
    html = setMeta(
      html,
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?\s*>/i,
      `<meta property="og:description" content="${options.description}">`,
      `  <meta property="og:description" content="${options.description}">`,
    );
  }

  return html;
}

for (const [route, options] of standaloneAliases) {
  const source = await readRoute(options.target);
  if (!source) throw new Error(`Unable to create ${route}: source ${options.target} was not found.`);
  const html = makeIndexable(source, route, { ...options, removeApplication: true });
  await writeRoute(route, html);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else if (entry.name.endsWith('.html')) files.push(file);
  }
  return files;
}

function routeFromFile(file) {
  let path = relative(dist, file).replaceAll('\\', '/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) path = path.slice(0, -'/index.html'.length);
  else path = path.slice(0, -'.html'.length);
  return `/${path}`.replace(/\/{2,}/g, '/');
}

const htmlFiles = await walk(dist);
const filesByRoute = new Map();

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  if (route.includes(':') || route.includes('*')) continue;
  if (!filesByRoute.has(route)) filesByRoute.set(route, []);
  filesByRoute.get(route).push(file);
}

let htmlUpdated = 0;
for (const [route, files] of filesByRoute) {
  for (const file of files) {
    const original = await readFile(file, 'utf8');
    const updated = makeIndexable(original, route, {
      lang: route.startsWith('/en/') || route.startsWith('/hair-') || route.startsWith('/turkey-') || route.startsWith('/best-') || route.startsWith('/fue-') || route.startsWith('/dhi-') || route.startsWith('/how-much-') ? 'en' : 'fr',
    });
    if (updated !== original) {
      await writeFile(file, updated, 'utf8');
      htmlUpdated += 1;
    }
  }
}

const sitemapPath = join(dist, 'sitemap.xml');
const sitemap = await readFile(sitemapPath, 'utf8');
const opening = sitemap.match(/^[\s\S]*?<urlset[^>]*>/)?.[0];
if (!opening) throw new Error('Invalid sitemap.xml: opening urlset tag was not found.');

const blocks = [...sitemap.matchAll(/<url>[\s\S]*?<\/url>/g)].map((match) => match[0]);
const seen = new Set();
const uniqueBlocks = [];

for (const block of blocks) {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!loc || seen.has(loc)) continue;
  seen.add(loc);
  uniqueBlocks.push(block);
}

const routes = [...filesByRoute.keys()].sort((a, b) => {
  if (a === '/') return -1;
  if (b === '/') return 1;
  return a.localeCompare(b);
});

let sitemapAdded = 0;
for (const route of routes) {
  const url = `${origin}${route}`;
  if (seen.has(url)) continue;
  seen.add(url);
  sitemapAdded += 1;
  uniqueBlocks.push(`  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
}

await writeFile(sitemapPath, `${opening}\n${uniqueBlocks.join('\n')}\n</urlset>\n`, 'utf8');

console.log(`All URLs indexable: ${routes.length} concrete routes, ${htmlUpdated} HTML files updated, ${sitemapAdded} sitemap entries added.`);
