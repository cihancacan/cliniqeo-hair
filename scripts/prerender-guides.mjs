import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://cliniqeo-hair.vercel.app';
const appSource = await readFile(join(process.cwd(), 'src', 'App.tsx'), 'utf8');

const excludedRoutes = new Set([
  '/', '/techniques', '/tarifs', '/turquie', '/a-propos', '/faq', '/contact',
  '/guides-greffe-cheveux', '/en/hair-transplant-guides',
]);

const directRoutes = [...appSource.matchAll(/<Route\s+path=["']([^"']+)["']/g)]
  .map((match) => match[1]);
const tupleRoutes = [...appSource.matchAll(/\[\s*["'](\/[^"']+)["']\s*,\s*["'][^"']+["']\s*\]/g)]
  .map((match) => match[1]);

const allRoutes = [...new Set([...directRoutes, ...tupleRoutes])]
  .filter((path) => path.startsWith('/') && !excludedRoutes.has(path));

const isEnglishRoute = (path) =>
  path.startsWith('/en/') ||
  path.startsWith('/hair-transplant') ||
  path.startsWith('/turkey-hair-transplant') ||
  path.startsWith('/best-hair-transplant') ||
  path.startsWith('/fue-hair-transplant') ||
  path.startsWith('/dhi-hair-transplant') ||
  path.startsWith('/how-much-hair-transplant');

const titleCase = (path, lang) => {
  const clean = path.replace(/^\/en\//, '').replace(/^\//, '').replaceAll('-', ' ');
  const replacements = lang === 'fr'
    ? {
        fue: 'FUE', dhi: 'DHI', turquie: 'Turquie', istanbul: 'Istanbul',
        apres: 'après', anesthesie: 'anesthésie', ratee: 'ratée', abimee: 'abîmée',
        deuxieme: 'deuxième', cheveux: 'cheveux', greffe: 'greffe',
      }
    : { fue: 'FUE', dhi: 'DHI', turkey: 'Turkey', istanbul: 'Istanbul', afro: 'Afro' };

  const words = clean.split(' ').map((word) => replacements[word] ?? word);
  const sentence = words.join(' ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

const categorizeFr = (path) => {
  if (/(prix|tout-compris|istanbul|avis|implant|meilleure-clinique|avant-apres|greffe-de-cheveux-turquie$)/.test(path)) return 0;
  if (/(fue|dhi|saphir|rasage|douleur|anesthesie|indolore|technique)/.test(path)) return 1;
  if (/(femme|afro|crepus|barbe|ligne-frontale|golfes|vertex|tonsure|sourcils|cicatrice|greffons)/.test(path)) return 2;
  return 3;
};

const categorizeEn = (path) => {
  if (/(cost|price|prices|istanbul|reviews|all-inclusive|before-after|best-hair|hair-transplant-turkey$|turkey-hair-transplant$|hair-transplant-in-turkey$)/.test(path)) return 0;
  if (/(fue|dhi|sapphire|no-shave|pain|anesthesia)/.test(path)) return 1;
  if (/(female|afro|beard|hairline|crown|eyebrow|scar|graft-count)/.test(path)) return 2;
  return 3;
};

const frTitles = [
  'Greffe de cheveux en Turquie et prix',
  'Techniques et déroulement',
  'Profils et zones à traiter',
  'Zone donneuse, risques, soins et corrections',
];
const enTitles = [
  'Hair transplant in Turkey and cost',
  'Techniques and procedure',
  'Patient profiles and treatment areas',
  'Donor area, risks, aftercare and repair',
];

const buildCategories = (lang) => {
  const routes = allRoutes.filter((path) => (lang === 'en' ? isEnglishRoute(path) : !isEnglishRoute(path)));
  const groups = [[], [], [], []];
  for (const path of routes) {
    const index = lang === 'fr' ? categorizeFr(path) : categorizeEn(path);
    groups[index].push([path, titleCase(path, lang)]);
  }
  const titles = lang === 'fr' ? frTitles : enTitles;
  return titles.map((title, index) => [title, groups[index].sort((a, b) => a[1].localeCompare(b[1], lang))]);
};

const pages = [
  {
    path: '/guides-greffe-cheveux', lang: 'fr', alternate: '/en/hair-transplant-guides',
    title: 'Guides et informations sur la greffe de cheveux | Cliniqeo Hair',
    description: 'Toutes les pages Cliniqeo Hair sur les prix, techniques, zones, risques, soins, résultats et corrections d’une greffe de cheveux en Turquie.',
    h1: 'Guides et informations capillaires',
    intro: 'Une bibliothèque complète organisée par thème pour comprendre les techniques, préparer le séjour et suivre la récupération.',
    categories: buildCategories('fr'),
  },
  {
    path: '/en/hair-transplant-guides', lang: 'en', alternate: '/guides-greffe-cheveux',
    title: 'Hair Transplant Guides and Information | Cliniqeo Hair',
    description: 'Every Cliniqeo Hair page covering prices, techniques, treatment areas, risks, aftercare, results and hair transplant repair in Turkey.',
    h1: 'Hair transplant guides and information',
    intro: 'A complete topic-based library to understand techniques, prepare for travel and follow the recovery process.',
    categories: buildCategories('en'),
  },
];

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const templatePath = join(process.cwd(), 'dist', 'index.html');
const original = await readFile(templatePath, 'utf8');

for (const page of pages) {
  const canonical = `${ORIGIN}${page.path}`;
  const alternateLang = page.lang === 'fr' ? 'en' : 'fr';
  const pageCount = page.categories.reduce((total, [, links]) => total + links.length, 0);
  const categories = page.categories.map(([title, links]) => `
    <section style="margin:0 0 42px">
      <h2 style="font-size:28px;color:#224671;margin-bottom:18px">${escapeHtml(title)}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px">
        ${links.map(([href, label]) => `<a href="${href}" style="display:block;border:1px solid #d9e2ec;border-radius:12px;padding:18px;text-decoration:none;color:#224671;background:white;font-weight:700">${escapeHtml(label)}</a>`).join('')}
      </div>
    </section>`).join('');

  const head = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${page.lang}" href="${canonical}">
    <link rel="alternate" hreflang="${alternateLang}" href="${ORIGIN}${page.alternate}">
    <link rel="alternate" hreflang="x-default" href="${ORIGIN}/guides-greffe-cheveux">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">`;

  const body = `<div id="root">
    <main style="font-family:Arial,sans-serif;background:#f8fafc;color:#334155;min-height:100vh;padding:64px 24px">
      <article style="max-width:1120px;margin:0 auto">
        <header style="margin-bottom:48px">
          <p style="font-weight:700;color:#2f6bfc">Cliniqeo Hair</p>
          <h1 style="font-size:clamp(2.2rem,5vw,4rem);line-height:1.05;color:#224671;margin:12px 0 20px">${escapeHtml(page.h1)}</h1>
          <p style="font-size:1.2rem;line-height:1.7;max-width:850px">${escapeHtml(page.intro)}</p>
          <p><strong>${pageCount}</strong> ${page.lang === 'fr' ? 'pages disponibles' : 'pages available'}</p>
          <p><a href="${page.alternate}" style="color:#2f6bfc;font-weight:700">${page.lang === 'fr' ? 'English version' : 'Version française'}</a></p>
        </header>
        ${categories}
      </article>
    </main>
  </div>`;

  const html = original
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${page.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '')
    .replace('</head>', `${head}\n  </head>`)
    .replace(/<div\s+id=["']root["']><\/div>/i, body);

  const route = page.path.replace(/^\//, '');
  const flatPath = join(process.cwd(), 'dist', `${route}.html`);
  const indexPath = join(process.cwd(), 'dist', route, 'index.html');
  await mkdir(dirname(flatPath), { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Prerendered ${pages.length} complete guide pages from ${allRoutes.length} SEO routes.`);
