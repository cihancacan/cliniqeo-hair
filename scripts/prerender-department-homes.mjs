import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const origin = 'https://cliniqeo.com';
const shell = await readFile(join(dist, 'index.html'), 'utf8');

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

async function writeRoute(route, html) {
  if (route === '/') {
    await writeFile(join(dist, 'index.html'), html, 'utf8');
    return;
  }
  const clean = route.slice(1);
  for (const file of [join(dist, `${clean}.html`), join(dist, clean, 'index.html')]) {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, 'utf8');
  }
}

function render({ route, lang, title, description, siteName, body, schema, alternates = [] }) {
  let html = shell
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)} | ${siteName}</title>`)
    .replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+property=["']og:url["'][^>]*>/gi, '');
  const alternateLinks = alternates.map(({ hreflang, path }) => `<link rel="alternate" hreflang="${hreflang}" href="${origin}${path}">`).join('\n    ');
  return html.replace('</head>', `
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${origin}${route}">
    ${alternateLinks}
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(title)} | ${siteName}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${origin}${route}">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
  </head>`);
}

const organization = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Cliniqeo', url: origin, email: 'info@cliniqeo.com' };
const portalFrBody = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.65"><article style="max-width:1160px;margin:0 auto;padding:72px 24px"><p style="font-weight:700;color:#08a9b5">VOTRE PROJET, NOTRE ACCOMPAGNEMENT</p><h1 style="font-size:clamp(2.5rem,6vw,4.5rem);line-height:1.05;color:#10284d">Deux expertises. Un seul niveau d’exigence.</h1><p style="font-size:1.25rem">Choisissez votre parcours Cliniqeo en Turquie, avec accompagnement avant, pendant et après le séjour.</p><section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px"><div style="padding:32px;background:#e8fbfc;border-radius:24px"><h2>Soins dentaires en Turquie</h2><p>Implants, facettes, couronnes et réhabilitation complète.</p><a href="/soins-dentaires-turquie">Découvrir le dentaire</a></div><div style="padding:32px;background:#eaf3ff;border-radius:24px"><h2>Greffe de cheveux en Turquie</h2><p>FUE, DHI et diagnostic capillaire personnalisé.</p><a href="/greffe-cheveux-turquie">Découvrir la greffe de cheveux</a></div></section><h2 style="margin-top:56px">Un accompagnement de A à Z</h2><p>Cliniqeo est une agence d’accompagnement et d’organisation. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé et cliniques partenaires en Turquie.</p></article></main>`;
const portalEnBody = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.65"><article style="max-width:1160px;margin:0 auto;padding:72px 24px"><p style="font-weight:700;color:#08a9b5">YOUR PROJECT, OUR COORDINATION</p><h1 style="font-size:clamp(2.5rem,6vw,4.5rem);line-height:1.05;color:#10284d">Two areas of expertise. One standard of support.</h1><p style="font-size:1.25rem">Choose your Cliniqeo care pathway in Turkey, with coordination before, during and after travel.</p><section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px"><div style="padding:32px;background:#e8fbfc;border-radius:24px"><h2>Dental treatment in Turkey</h2><p>Dental implants, veneers, crowns and full-mouth rehabilitation.</p><a href="/en/dental-treatment-turkey">Explore dental treatment</a></div><div style="padding:32px;background:#eaf3ff;border-radius:24px"><h2>Hair transplant in Turkey</h2><p>FUE, DHI and a personalised hair assessment.</p><a href="/en/hair-transplant-turkey">Explore hair transplant</a></div></section><h2 style="margin-top:56px">Support from first contact to follow-up</h2><p>Cliniqeo is a coordination agency. Medical assessments and procedures are performed by partner healthcare professionals and clinics in Turkey.</p></article></main>`;

const pages = [
  {
    route: '/', lang: 'fr', title: 'Soins dentaires et greffe de cheveux en Turquie', siteName: 'Cliniqeo',
    description: 'Choisissez votre parcours Cliniqeo en Turquie : soins dentaires ou greffe de cheveux, avec accompagnement avant, pendant et après le séjour.', body: portalFrBody,
    alternates: [{ hreflang: 'fr', path: '/' }, { hreflang: 'en', path: '/en' }, { hreflang: 'x-default', path: '/' }],
    schema: [organization, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Cliniqeo', url: origin }, { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Soins dentaires en Turquie', url: `${origin}/soins-dentaires-turquie` }, { '@type': 'ListItem', position: 2, name: 'Greffe de cheveux en Turquie', url: `${origin}/greffe-cheveux-turquie` }] }],
  },
  {
    route: '/en', lang: 'en', title: 'Dental treatment and hair transplant in Turkey', siteName: 'Cliniqeo',
    description: 'Choose dental treatment or hair transplant in Turkey, with English-speaking coordination before, during and after travel.', body: portalEnBody,
    alternates: [{ hreflang: 'fr', path: '/' }, { hreflang: 'en', path: '/en' }, { hreflang: 'x-default', path: '/' }], schema: [organization, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Cliniqeo', url: origin }],
  },
  {
    route: '/greffe-cheveux-turquie', lang: 'fr', title: 'Greffe de cheveux en Turquie : FUE, DHI, prix et accompagnement', siteName: 'Cliniqeo Hair',
    description: 'Préparez votre greffe de cheveux en Turquie : diagnostic, FUE ou DHI, prix, hôtel, transferts, suivi et accompagnement francophone.',
    body: `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1040px;margin:0 auto;padding:72px 24px"><h1>Greffe de cheveux en Turquie avec accompagnement francophone</h1><p>Recevez une première évaluation, comprenez les limites de votre zone donneuse et comparez FUE, DHI, prix, séjour et suivi avant de prendre une décision.</p><h2>Un parcours préparé avant le départ</h2><ul><li>Analyse initiale de votre projet et de vos photos</li><li>Proposition écrite et responsabilités médicales expliquées</li><li>Hôtel et transferts selon le forfait confirmé</li><li>Consignes et suivi après le retour</li></ul><p><a href="/greffe-cheveux-turquie/contact">Demander un diagnostic gratuit</a></p></article></main>`,
    alternates: [{ hreflang: 'fr', path: '/greffe-cheveux-turquie' }, { hreflang: 'en', path: '/en/hair-transplant-turkey' }], schema: [organization, { '@context': 'https://schema.org', '@type': 'Service', name: 'Accompagnement pour greffe de cheveux en Turquie', url: `${origin}/greffe-cheveux-turquie`, provider: { '@id': `${origin}/#organization` } }],
  },
  {
    route: '/en/hair-transplant-turkey', lang: 'en', title: 'Hair transplant in Turkey: FUE, DHI, cost and support', siteName: 'Cliniqeo Hair',
    description: 'Plan a hair transplant in Turkey with English-speaking support: assessment, FUE or DHI, written cost, hotel, transfers and follow-up.',
    body: `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1040px;margin:0 auto;padding:72px 24px"><h1>Hair transplant in Turkey with a clear medical and travel plan</h1><p>Receive an initial assessment, understand donor-area limits and compare FUE, DHI, cost, travel and aftercare before deciding.</p><h2>A coordinated patient journey</h2><ul><li>Initial review of your goals and photographs</li><li>Written proposal and defined medical responsibilities</li><li>Hotel and transfers according to the confirmed package</li><li>Written instructions and follow-up after returning home</li></ul><p><a href="/en/hair-transplant-turkey/contact">Request a free assessment</a></p></article></main>`,
    alternates: [{ hreflang: 'fr', path: '/greffe-cheveux-turquie' }, { hreflang: 'en', path: '/en/hair-transplant-turkey' }], schema: [organization, { '@context': 'https://schema.org', '@type': 'Service', name: 'Hair transplant travel coordination in Turkey', url: `${origin}/en/hair-transplant-turkey`, provider: { '@id': `${origin}/#organization` } }],
  },
  {
    route: '/en/dental-treatment-turkey', lang: 'en', title: 'Dental treatment in Turkey for UK and US patients', siteName: 'Cliniqeo Dental',
    description: 'Plan dental treatment in Turkey with English-speaking coordination: implants, veneers, crowns, written quotations, travel and follow-up.',
    body: `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1040px;margin:0 auto;padding:72px 24px"><h1>Dental treatment in Turkey with a clear, written plan</h1><p>Compare dental implants, veneers, crowns and restorative treatment with named medical responsibility, itemised costs and English-speaking support.</p><h2>Treatment is considered after assessment</h2><p>A remote review can provide initial orientation. The treating dental professional confirms the diagnosis and final plan after the required clinical examination and imaging.</p><h2>Information for UK and US patients</h2><p><a href="/en/dental-treatment-turkey/uk/cities">View UK location guides</a> · <a href="/en/dental-treatment-turkey/us/cities">View US location guides</a></p></article></main>`,
    schema: [organization, { '@context': 'https://schema.org', '@type': 'Service', name: 'Dental treatment coordination in Turkey', url: `${origin}/en/dental-treatment-turkey`, areaServed: ['United Kingdom', 'United States'], provider: { '@id': `${origin}/#organization` } }],
  },
];

const frenchHairCorePages = [
  ['techniques', 'Techniques de greffe de cheveux : FUE Saphir et DHI', 'Comparez la FUE Saphir et la DHI, leurs indications, leurs limites et les critères médicaux qui déterminent le choix de la technique.', 'FUE Saphir ou DHI : comprendre les techniques'],
  ['tarifs', 'Prix d’une greffe de cheveux en Turquie et prestations incluses', 'Consultez les tarifs de greffe capillaire en Turquie, les prestations incluses, les conditions et les éléments à comparer dans chaque devis.', 'Prix et prestations d’une greffe de cheveux en Turquie'],
  ['turquie', 'Pourquoi choisir la Turquie pour une greffe de cheveux ?', 'Comprenez les avantages, les limites et les critères de sécurité à vérifier avant d’organiser une greffe de cheveux en Turquie.', 'Greffe de cheveux en Turquie : avantages et points à vérifier'],
  ['a-propos', 'À propos de Cliniqeo Hair', 'Découvrez le rôle de Cliniqeo Hair dans l’accompagnement et l’organisation des parcours de greffe de cheveux en Turquie.', 'Cliniqeo Hair : accompagnement et organisation'],
  ['faq', 'Questions fréquentes sur la greffe de cheveux en Turquie', 'Réponses sur la FUE, la DHI, la douleur, les greffons, le séjour, le suivi, les risques et les résultats d’une greffe capillaire.', 'Questions fréquentes sur la greffe de cheveux'],
  ['contact', 'Diagnostic capillaire et devis personnalisé', 'Contactez Cliniqeo Hair pour une première évaluation de votre projet de greffe de cheveux en Turquie et un devis détaillé.', 'Demander un diagnostic capillaire personnalisé'],
  ['avant-apres', 'Greffe de cheveux avant après : résultats et évolution', 'Consultez des résultats avant après et comprenez l’évolution d’une greffe de cheveux au fil des mois, de la cicatrisation à la repousse.', 'Greffe de cheveux avant après : comprendre l’évolution'],
];

pages.push(...frenchHairCorePages.map(([slug, title, description, h1]) => {
  const route = `/greffe-cheveux-turquie/${slug}`;
  return {
    route,
    lang: 'fr',
    title,
    description,
    siteName: 'Cliniqeo Hair',
    body: `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1040px;margin:0 auto;padding:72px 24px"><nav><a href="/greffe-cheveux-turquie">Greffe de cheveux en Turquie</a></nav><h1>${escapeHtml(h1)}</h1><p style="font-size:1.2rem">${escapeHtml(description)}</p><p>Cliniqeo Hair coordonne le parcours avant le départ, pendant le séjour en Turquie et après le retour. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé partenaires.</p><p><a href="/greffe-cheveux-turquie/contact">Recevoir une première évaluation</a></p></article></main>`,
    schema: [organization, { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: `${origin}${route}`, inLanguage: 'fr-FR' }],
  };
}));

for (const page of pages) await writeRoute(page.route, render(page));
console.log(`Prerendered ${pages.length} portal and department home routes.`);
