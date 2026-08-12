import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const origin = 'https://cliniqeo.com';
const oldOrigin = 'https://cliniqeo-hair.vercel.app';
const hairFrBase = '/greffe-cheveux-turquie';
const hairEnBase = '/en/hair-transplant-turkey';
const dentalEnBase = '/en/dental-treatment-turkey';

const frCore = new Map([
  ['/', hairFrBase], ['/techniques', `${hairFrBase}/techniques`], ['/tarifs', `${hairFrBase}/tarifs`], ['/pricing', `${hairFrBase}/tarifs`],
  ['/turquie', `${hairFrBase}/turquie`], ['/a-propos', `${hairFrBase}/a-propos`], ['/about', `${hairFrBase}/a-propos`],
  ['/faq', `${hairFrBase}/faq`], ['/contact', `${hairFrBase}/contact`], ['/guides-greffe-cheveux', `${hairFrBase}/guides`],
  ['/greffe-cheveux/avant-apres', `${hairFrBase}/avant-apres`], ['/greffe-cheveux-france', `${hairFrBase}/villes`],
]);
const enCore = new Map([
  ['/en', hairEnBase], ['/en/techniques', `${hairEnBase}/techniques`], ['/en/pricing', `${hairEnBase}/pricing`],
  ['/en/why-turkey', `${hairEnBase}/why-turkey`], ['/en/about', `${hairEnBase}/about`], ['/en/faq', `${hairEnBase}/faq`],
  ['/en/contact', `${hairEnBase}/contact`], ['/en/before-after', `${hairEnBase}/before-after`],
  ['/en/hair-transplant-guides', `${hairEnBase}/guides`], ['/en/hair-transplant-by-city', `${hairEnBase}/cities`],
  ['/en/uk/hair-transplant-cities', `${hairEnBase}/uk/cities`], ['/en/us/hair-transplant-cities', `${hairEnBase}/us/cities`],
]);
const rootEnglish = new Set([
  '/hair-transplant-turkey', '/turkey-hair-transplant', '/hair-transplant-in-turkey', '/fue-hair-transplant-turkey',
  '/dhi-hair-transplant-turkey', '/turkey-hair-transplant-cost', '/hair-transplant-turkey-cost', '/hair-transplant-turkey-price',
  '/turkey-hair-transplant-prices', '/how-much-hair-transplant-turkey', '/best-hair-transplant-clinic-turkey',
  '/best-clinic-for-hair-transplant-turkey', '/best-hair-implant-clinic-turkey', '/best-hair-transplant-turkey',
  '/hair-transplant-turkey-reviews',
]);
const frenchLocalPrefixes = ['/greffe-de-cheveux-', '/greffe-capillaire-', '/implant-capillaire-', '/prix-greffe-cheveux-', '/clinique-greffe-cheveux-'];
const frenchLocalCitySlugs = new Set([
  'paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'nice', 'nantes', 'lille', 'strasbourg', 'montpellier',
  'rennes', 'grenoble', 'rouen', 'toulon', 'reims', 'dijon', 'angers', 'nimes',
  'clermont-ferrand', 'tours', 'metz', 'nancy', 'orleans', 'caen',
]);

function normalizePath(value) {
  const path = value.split(/[?#]/, 1)[0] || '/';
  if (path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

function canonicalHairPath(value) {
  const path = normalizePath(value);
  if (path === hairFrBase || path.startsWith(`${hairFrBase}/`) || path === hairEnBase || path.startsWith(`${hairEnBase}/`)) return path;
  if (path === dentalEnBase || path.startsWith(`${dentalEnBase}/`)) return path;
  if (frCore.has(path)) return frCore.get(path);
  if (enCore.has(path)) return enCore.get(path);
  if (path.startsWith('/en/uk/') || path.startsWith('/en/us/')) return `${hairEnBase}${path.slice(3)}`;
  if (frenchLocalPrefixes.some((prefix) => path.startsWith(prefix) && frenchLocalCitySlugs.has(path.slice(prefix.length)))) return `${hairFrBase}${path}`;
  if (path.startsWith('/en/')) return `${hairEnBase}/guides/${path.slice(4)}`;
  if (rootEnglish.has(path)) return `${hairEnBase}/guides${path}`;
  return `${hairFrBase}/guides${path}`;
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
  let route = relative(dist, file).replaceAll('\\', '/');
  if (route === 'index.html') return '/';
  if (route.endsWith('/index.html')) route = route.slice(0, -'/index.html'.length);
  else route = route.slice(0, -'.html'.length);
  return `/${route}`.replace(/\/{2,}/g, '/');
}

async function writeRoute(route, html) {
  if (route === '/') {
    await writeFile(join(dist, 'index.html'), html, 'utf8');
    return;
  }
  const clean = route.replace(/^\//, '');
  for (const file of [join(dist, `${clean}.html`), join(dist, clean, 'index.html')]) {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, 'utf8');
  }
}

function canonicalizeAbsoluteUrls(html) {
  return html.replace(/https:\/\/cliniqeo\.com(\/[^\s"'<>]*)/g, (url, pathWithSuffix) => {
    const suffixMatch = pathWithSuffix.match(/^([^?#]*)([?#].*)?$/);
    const path = suffixMatch?.[1] || '/';
    const suffix = suffixMatch?.[2] || '';
    if (path.startsWith('/assets/') || /\.[a-z0-9]{2,5}$/i.test(path)) return url;
    if (path === '/' || path === '/en' || path.startsWith(dentalEnBase) || path.startsWith(hairFrBase) || path.startsWith(hairEnBase)) return url;
    return `${origin}${canonicalHairPath(path)}${suffix}`;
  });
}

function canonicalizeHtml(input, canonicalRoute) {
  let html = input.replaceAll(oldOrigin, origin);
  html = html.replace(
    /https:\/\/cliniqeo\.com\/(?:greffe-cheveux-turquie|en\/hair-transplant-turkey)\/guides\/([^/"'?#]+\.(?:jpg|jpeg|png|webp|svg|js|css))/gi,
    `${origin}/$1`,
  );
  html = canonicalizeAbsoluteUrls(html);
  if (!(canonicalRoute === dentalEnBase || canonicalRoute.startsWith(`${dentalEnBase}/`))) {
    html = html.replace(/href=(["'])(\/[^"']*)\1/gi, (full, quote, value) => {
      const match = value.match(/^([^?#]*)([?#].*)?$/);
      const path = match?.[1] || '/';
      const suffix = match?.[2] || '';
      if (path.startsWith('/assets/') || /\.[a-z0-9]{2,5}$/i.test(path)) return full;
      return `href=${quote}${canonicalHairPath(path)}${suffix}${quote}`;
    });
  }
  html = html
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+property=["']og:url["'][^>]*>/gi, '')
    .replace('</head>', `\n    <link rel="canonical" href="${origin}${canonicalRoute}">\n    <meta property="og:url" content="${origin}${canonicalRoute}">\n  </head>`);
  return html;
}

const htmlFiles = await walk(dist);
const sourceByRoute = new Map();
for (const file of htmlFiles) {
  const route = routeFromFile(file);
  if (!sourceByRoute.has(route)) sourceByRoute.set(route, await readFile(file, 'utf8'));
}

const canonicalRoutes = new Set();
let written = 0;
for (const [legacyRoute, sourceHtml] of sourceByRoute) {
  if (legacyRoute.includes(':') || legacyRoute.includes('*')) continue;
  const canonicalRoute = legacyRoute === '/' || legacyRoute === '/en'
    ? canonicalHairPath(legacyRoute)
    : canonicalHairPath(legacyRoute);
  const canonicalHtml = canonicalizeHtml(sourceHtml, canonicalRoute);
  await writeRoute(canonicalRoute, canonicalHtml);
  if (legacyRoute !== canonicalRoute) await writeRoute(legacyRoute, canonicalHtml);
  canonicalRoutes.add(canonicalRoute);
  written += 1;
}

// The public portal owns these two roots; its final static HTML is written by the next build step.
canonicalRoutes.add('/');
canonicalRoutes.add('/en');
canonicalRoutes.add(hairFrBase);
canonicalRoutes.add(hairEnBase);
canonicalRoutes.add(dentalEnBase);

const sitemapEntries = [];
for (const route of [...canonicalRoutes].sort((a, b) => a.localeCompare(b))) {
  const candidates = route === '/' ? [join(dist, 'index.html')] : [join(dist, `${route.slice(1)}.html`), join(dist, route.slice(1), 'index.html')];
  let html = '';
  for (const candidate of candidates) {
    try { html = await readFile(candidate, 'utf8'); break; } catch { /* try next */ }
  }
  if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) continue;
  const priority = route === '/' || route === '/en' ? '1.0'
    : route === hairFrBase || route === hairEnBase || route === dentalEnBase ? '0.9'
      : route.includes('/uk/') || route.includes('/us/') ? '0.7' : '0.6';
  sitemapEntries.push(`  <url><loc>${origin}${route}</loc><lastmod>2026-08-12</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`;
await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8');
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${origin}/sitemap.xml</loc><lastmod>2026-08-12</lastmod></sitemap>\n</sitemapindex>\n`;
await writeFile(join(dist, 'sitemap-advanced.xml'), sitemapIndex, 'utf8');
await writeFile(join(dist, 'sitemap-core-en.xml'), sitemapIndex, 'utf8');
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, 'utf8');

console.log(`Applied canonical URL policy to ${written} routes; ${sitemapEntries.length} indexable canonical URLs written to sitemap.xml.`);
