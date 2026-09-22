import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const UPSTREAM_ORIGIN = 'https://cliniqeo-hair.vercel.app';
const PUBLIC_ORIGIN = 'https://cliniqeo.com';
const FR_MOUNT = '/greffe-cheveux-turquie';
const EN_MOUNT = '/en/hair-transplant-turkey';
const TODAY = new Date().toISOString().slice(0, 10);

const aliases = new Map([
  ['/implant-capillaire-turquie', '/greffe-de-cheveux-turquie'],
  ['/implant-cheveux-turquie', '/greffe-de-cheveux-turquie'],
  ['/greffe-cheveux-prix-turquie', '/prix-greffe-de-cheveux-turquie'],
  ['/prix-implant-capillaire-turquie', '/prix-greffe-de-cheveux-turquie'],
  ['/implant-cheveux-turquie-prix', '/prix-greffe-de-cheveux-turquie'],
  ['/greffe-de-cheveux-turquie-prix-tout-compris', '/greffe-cheveux-turquie-tout-compris'],
  ['/greffe-de-cheveux-turquie-avis', '/greffe-cheveux-turquie-avis'],
  ['/greffe-cheveux-crepus-turquie', '/greffe-cheveux-afro-turquie'],
  ['/greffe-de-barbe-turquie', '/greffe-barbe-turquie'],
  ['/greffe-cheveux-turquie-danger', '/greffe-cheveux-turquie-risques'],
  ['/greffe-cheveux-saphir-turquie', '/fue-saphir-turquie'],
  ['/difference-fue-dhi', '/dhi-ou-fue'],
  ['/meilleure-technique-greffe-cheveux', '/dhi-ou-fue'],
  ['/greffe-cheveux-femme-sans-rasage', '/greffe-cheveux-sans-rasage-turquie'],
  ['/greffe-cheveux-indolore-turquie', '/douleur-greffe-cheveux-anesthesie'],
  ['/anesthesie-sans-aiguille-greffe-cheveux', '/douleur-greffe-cheveux-anesthesie'],
  ['/zone-donneuse-abimee-greffe-cheveux', '/zone-donneuse-greffe-cheveux'],
  ['/surprelevement-zone-donneuse', '/zone-donneuse-greffe-cheveux'],
  ['/greffe-cheveux-ratee-turquie', '/reparer-greffe-cheveux-ratee'],
  ['/premier-lavage-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/sport-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/prendre-avion-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/soleil-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/ligne-frontale-naturelle-greffe-cheveux', '/greffe-ligne-frontale-turquie'],
  ['/greffe-golfes-cheveux', '/greffe-ligne-frontale-turquie'],
  ['/greffe-tonsure-turquie', '/greffe-vertex-turquie'],
  ['/greffe-sourcils-avant-apres', '/greffe-sourcils-turquie'],
  ['/turkey-hair-transplant', '/hair-transplant-turkey'],
  ['/hair-transplant-in-turkey', '/hair-transplant-turkey'],
  ['/best-hair-transplant-turkey', '/best-hair-transplant-clinic-turkey'],
  ['/hair-transplant-turkey-cost', '/turkey-hair-transplant-cost'],
  ['/hair-transplant-turkey-price', '/turkey-hair-transplant-cost'],
  ['/turkey-hair-transplant-prices', '/turkey-hair-transplant-cost'],
  ['/how-much-hair-transplant-turkey', '/turkey-hair-transplant-cost'],
  ['/hair-transplant-turkey-reviews', '/en/hair-transplant-turkey-reviews'],
  ['/about', '/a-propos'],
  ['/pricing', '/tarifs'],
  ['/seo/greffe-cheveux-fue-turquie', '/greffe-de-cheveux-fue-turquie'],
  ['/seo/greffe-cheveux-dhi-turquie', '/greffe-de-cheveux-dhi-turquie'],
  ['/en/fue-hair-transplant-turkey', '/fue-hair-transplant-turkey'],
  ['/en/dhi-hair-transplant-turkey', '/dhi-hair-transplant-turkey'],
  ['/en/turkey-hair-transplant-cost', '/turkey-hair-transplant-cost'],
]);

function normaliseRoute(route = '/') {
  let value = route || '/';
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.replace(/\/+$/, '') || '/';
  return value;
}

function isEnglishRoute(route) {
  return route === '/en' ||
    route.startsWith('/en/') ||
    route.startsWith('/hair-') ||
    route.startsWith('/turkey-hair-') ||
    route.startsWith('/best-hair-') ||
    route.startsWith('/best-clinic-') ||
    route.startsWith('/best-') ||
    route.startsWith('/fue-') ||
    route.startsWith('/dhi-') ||
    route.startsWith('/how-much-');
}

function publicPathForRoute(inputRoute) {
  const route = normaliseRoute(inputRoute);

  if (route === '/') return FR_MOUNT;
  if (route === '/en' || route === '/hair-transplant-turkey') return EN_MOUNT;

  if (route.startsWith('/en/')) {
    const suffix = route.slice(3);
    if (!suffix || suffix === '/hair-transplant-turkey') return EN_MOUNT;
    return `${EN_MOUNT}${suffix}`;
  }

  if (isEnglishRoute(route)) return `${EN_MOUNT}${route}`;
  return `${FR_MOUNT}${route}`;
}

function publicUrlForRoute(route) {
  return `${PUBLIC_ORIGIN}${publicPathForRoute(route)}`;
}

function routeFromAbsoluteUrl(value) {
  if (!value) return null;
  try {
    const parsed = new URL(value);
    if (parsed.origin === UPSTREAM_ORIGIN) return normaliseRoute(parsed.pathname);
    if (parsed.origin === PUBLIC_ORIGIN) {
      const path = normaliseRoute(parsed.pathname);
      if (path === FR_MOUNT) return '/';
      if (path.startsWith(`${FR_MOUNT}/`)) return normaliseRoute(path.slice(FR_MOUNT.length));
      if (path === EN_MOUNT) return '/hair-transplant-turkey';
      if (path.startsWith(`${EN_MOUNT}/`)) {
        const suffix = normaliseRoute(path.slice(EN_MOUNT.length));
        if (suffix.startsWith('/uk/') || suffix.startsWith('/us/')) return `/en${suffix}`;
        if (suffix === '/pricing' || suffix === '/about' || suffix === '/faq' || suffix === '/contact' || suffix === '/why-turkey' || suffix === '/before-after' || suffix === '/hair-transplant-guides' || suffix === '/hair-transplant-by-city') return `/en${suffix}`;
        return suffix;
      }
    }
  } catch {
    return null;
  }
  return null;
}

function rewriteAbsoluteSeoUrl(value) {
  const route = routeFromAbsoluteUrl(value);
  return route ? publicUrlForRoute(route) : value;
}

async function walk(directory, suffix) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file, suffix));
    else if (entry.name.endsWith(suffix)) files.push(file);
  }
  return files;
}

function routeFromHtmlFile(file) {
  let path = relative(dist, file).replaceAll('\\', '/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) path = path.slice(0, -'/index.html'.length);
  else path = path.slice(0, -'.html'.length);
  return normaliseRoute(path);
}

function upsertCanonical(html, url) {
  const tag = `<link rel="canonical" href="${url}">`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function upsertOgUrl(html, url) {
  const tag = `<meta property="og:url" content="${url}">`;
  if (/<meta\s+property=["']og:url["'][^>]*>/i.test(html)) {
    return html.replace(/<meta\s+property=["']og:url["'][^>]*>/i, tag);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

let htmlCount = 0;
const htmlFiles = await walk(dist, '.html');
for (const file of htmlFiles) {
  const route = routeFromHtmlFile(file);
  const canonicalRoute = aliases.get(route) || route;
  const canonicalUrl = publicUrlForRoute(canonicalRoute);
  const original = await readFile(file, 'utf8');
  let html = upsertCanonical(original, canonicalUrl);
  html = upsertOgUrl(html, canonicalUrl);

  html = html.replace(/(<link\s+rel=["']alternate["'][^>]*href=["'])(https?:\/\/[^"']+)(["'][^>]*>)/gi, (match, before, href, after) => {
    return `${before}${rewriteAbsoluteSeoUrl(href)}${after}`;
  });

  html = html.replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, (script) => {
    return script.replace(/https:\/\/cliniqeo-hair\.vercel\.app(?:\/[A-Za-z0-9._~!$&'()*+,;=:@%\/-]*)?/g, (url) => rewriteAbsoluteSeoUrl(url));
  });

  // Crawlable links must agree with the canonical English mount, including old aliases.
  html = html.replace(/(<a\b[^>]*\bhref=["'])([^"']+)(["'])/gi, (match, before, href, after) => {
    if (!/^(?:\/en(?:\/|$)|https:\/\/(?:cliniqeo-hair\.vercel\.app|cliniqeo\.com)\/)/.test(href)) return match;
    const parsed = new URL(href, UPSTREAM_ORIGIN);
    const target = routeFromAbsoluteUrl(parsed.href);
    if (!target || !isEnglishRoute(target)) return match;
    return `${before}${publicUrlForRoute(aliases.get(target) || target)}${parsed.search}${parsed.hash}${after}`;
  });

  if (html !== original) {
    await writeFile(file, html, 'utf8');
    htmlCount += 1;
  }
}

let sitemapCount = 0;
const xmlFiles = (await walk(dist, '.xml')).filter((file) => /sitemap/i.test(file));
for (const file of xmlFiles) {
  const original = await readFile(file, 'utf8');
  if (!/<urlset\b/i.test(original)) continue;

  const opening = original.match(/^[\s\S]*?<urlset[^>]*>/)?.[0];
  if (!opening) continue;

  const seen = new Set();
  const blocks = [];
  for (const match of original.matchAll(/<url>[\s\S]*?<\/url>/g)) {
    let block = match[0];
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;

    const route = routeFromAbsoluteUrl(loc);
    if (!route || aliases.has(route)) continue;

    const canonicalUrl = publicUrlForRoute(route);
    if (seen.has(canonicalUrl)) continue;
    seen.add(canonicalUrl);

    block = block.replace(/<loc>[^<]+<\/loc>/, `<loc>${canonicalUrl}</loc>`);
    block = block.replace(/(href=["'])(https?:\/\/[^"']+)(["'])/gi, (full, before, href, after) => `${before}${rewriteAbsoluteSeoUrl(href)}${after}`);
    if (!/<lastmod>/.test(block)) block = block.replace('</url>', `<lastmod>${TODAY}</lastmod></url>`);
    blocks.push(block);
  }

  const updated = `${opening}\n${blocks.join('\n')}\n</urlset>\n`;
  if (updated !== original) {
    await writeFile(file, updated, 'utf8');
    sitemapCount += 1;
  }
}

const robotsPath = join(dist, 'robots.txt');
try {
  const original = await readFile(robotsPath, 'utf8');
  const updated = original
    .replace(/^Sitemap:.*sitemap\.xml.*$/gmi, `Sitemap: ${PUBLIC_ORIGIN}${FR_MOUNT}/sitemap.xml`)
    .replace(/^Sitemap:.*sitemap-advanced\.xml.*$/gmi, `Sitemap: ${PUBLIC_ORIGIN}${FR_MOUNT}/sitemap-advanced.xml`)
    .replace(/^Sitemap:.*sitemap-core-en\.xml.*$/gmi, `Sitemap: ${PUBLIC_ORIGIN}${FR_MOUNT}/sitemap-core-en.xml`);
  if (updated !== original) await writeFile(robotsPath, updated, 'utf8');
} catch {
  // robots.txt is optional in the upstream build.
}

console.log(`Rewrote public SEO URLs for cliniqeo.com: ${htmlCount} HTML files and ${sitemapCount} sitemap files updated.`);
