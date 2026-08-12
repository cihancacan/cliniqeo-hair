import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const origin = 'https://cliniqeo.com';
const basePath = '/en/dental-treatment-turkey';
const source = await readFile(join(root, 'src', 'config', 'localSeoData.ts'), 'utf8');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

function extractArray(name) {
  const match = source.match(new RegExp(`export const ${name}:[^=]+=[\\s\\S]*?\\[([\\s\\S]*?)\\n\\];`));
  if (!match) throw new Error(`Unable to extract ${name}`);
  return Function(`"use strict"; return [${match[1]}];`)();
}

const ukCities = extractArray('ukLocalCities');
const usCities = extractArray('usLocalCities');
const ukKeywords = [
  ['dentist', 'dentist', 'Compare diagnosis, clinical responsibility, treatment scope, materials, total cost and follow-up.'],
  ['dental-clinic', 'dental clinic', 'Compare professional credentials, infection control, laboratory workflow, materials and aftercare.'],
  ['dental-centre', 'dental centre', 'Understand how multidisciplinary restorative, implant and cosmetic stages are coordinated.'],
  ['dental-implants', 'dental implants', 'Review bone assessment, implant system, temporary teeth, healing, restoration and maintenance.'],
  ['cosmetic-dentist', 'cosmetic dentist', 'Compare conservative options, gum health, bite, materials and achievable aesthetic goals.'],
  ['veneers', 'veneers', 'Review preparation, material, margins, shade, bite, laboratory stages and maintenance.'],
];
const usKeywords = ukKeywords.map(([slug, ...rest]) => [slug === 'dental-centre' ? 'dental-center' : slug, ...rest.map((value) => value === 'dental centre' ? 'dental center' : value)]);

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

async function writeRoute(route, html) {
  const clean = route.replace(/^\//, '');
  for (const file of [join(dist, `${clean}.html`), join(dist, clean, 'index.html')]) {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, 'utf8');
  }
}

function inject({ route, title, description, body, schema, robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }) {
  let html = shell
    .replace(/<html\s+lang=["'][^"']*["']>/i, '<html lang="en">')
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)} | Cliniqeo Dental</title>`)
    .replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  html = html.replace('</head>', `
    <meta name="robots" content="${robots}">
    <link rel="canonical" href="${origin}${route}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(title)} | Cliniqeo Dental">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${origin}${route}">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
  </head>`);
  return html;
}

function renderPage(country, city, keyword) {
  const [slug, label, directAnswer] = keyword;
  const cityLabel = country === 'us' ? `${city.name}, ${city.region}` : city.name;
  const countryName = country === 'uk' ? 'United Kingdom' : 'United States';
  const route = `${basePath}/${country}/${slug}-${city.slug}`;
  const title = `${label[0].toUpperCase()}${label.slice(1)} in ${cityLabel}: compare treatment in Turkey`;
  const description = `${label} in ${cityLabel}: compare local dental care with coordinated treatment in Turkey, including clinical responsibility, costs, travel and aftercare.`;
  const faq = [
    [`Does Cliniqeo operate a dental clinic in ${cityLabel}?`, `No. This page answers searches around ${cityLabel}. Dental examinations and procedures take place through partner professionals in Turkey.`],
    [`How can I request an initial review from ${city.name}?`, 'Share your goals, history and recent dental records if available. The treating dentist confirms the final diagnosis and plan in person.'],
    ['What should a written quotation include?', 'It should list the planned procedure by tooth or arch, materials, temporary restorations, visits, exclusions, payment terms and follow-up.'],
    [`How is travel planned from ${cityLabel}?`, `Planning can start around ${city.airport} (${city.airportCode}) or another suitable airport after the clinical stages are understood.`],
    ['Is treatment in Turkey always cheaper?', 'Not necessarily. Compare clinically equivalent plans and include travel, possible return visits and long-term maintenance.'],
  ];
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: `${origin}${route}`, inLanguage: 'en',
      mainEntity: { '@type': 'Service', name: `${label} information for ${cityLabel}`, serviceType: 'Dental travel coordination', areaServed: { '@type': 'City', name: city.name }, provider: { '@type': 'Organization', name: 'Cliniqeo', url: origin } },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const body = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.75">
    <article style="max-width:1040px;margin:0 auto;padding:72px 24px">
      <nav style="font-size:14px;margin-bottom:24px"><a href="${basePath}">Dental treatment in Turkey</a> › ${escapeHtml(cityLabel)}</nav>
      <p style="font-weight:700;color:#087d87">${countryName} · ${escapeHtml(city.region)}</p>
      <h1 style="font-size:clamp(2.3rem,5vw,4rem);line-height:1.08;color:#10284d">${escapeHtml(label)} in ${escapeHtml(cityLabel)}</h1>
      <p style="font-size:1.25rem">Local comparison and coordinated dental treatment in Turkey.</p>
      <p style="padding:24px;background:#e8fbfc;border-radius:14px"><strong>Direct answer:</strong> ${escapeHtml(directAnswer)}</p>
      <p><a href="#dental-assessment" style="display:inline-block;background:#08a9b5;color:#fff;padding:14px 22px;border-radius:10px;text-decoration:none;font-weight:700">Request a free initial assessment</a></p>
      <h2>How to compare a local plan with treatment in Turkey</h2>
      <p>If you are researching a ${escapeHtml(label)} in ${escapeHtml(cityLabel)}, convenience may be important. A safe comparison must also cover the diagnosis, suitable alternatives, named treating professional, clinical stages, materials, total cost and access to follow-up.</p>
      <p>Cliniqeo is a coordination agency and does not present itself as a clinic in ${escapeHtml(cityLabel)}. Examinations and procedures are carried out by partner dental professionals in Turkey. Remote records can support an initial orientation, but the final plan must be confirmed after the required in-person examination and imaging.</p>
      <h2>What a complete dental quotation should contain</h2>
      <ul><li>Clinical findings and reasonable alternatives</li><li>Procedure listed by tooth or arch</li><li>Material, implant or restoration specifications</li><li>Temporary and final restorations</li><li>Number and timing of appointments</li><li>Exclusions, payment terms and aftercare</li></ul>
      <h2>Planning travel from ${escapeHtml(cityLabel)}</h2>
      <p>Travel can be organised around ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)}) or another suitable airport. Do not book non-refundable travel until the likely number of visits, laboratory stages and time needed between appointments are clear.</p>
      <p>The full comparison should include flights, accommodation, possible return visits, time away from work and access to urgent care after returning home. A lower headline price is not useful when the clinical scope or material specifications differ.</p>
      <h2>From enquiry to follow-up</h2>
      <ol><li>Share goals, health history and available records.</li><li>Receive an initial orientation and requests for missing information.</li><li>Review provider identity, treatment stages, materials and quotation.</li><li>Confirm the appointment sequence before travel.</li><li>Complete the in-person examination and informed consent.</li><li>Proceed only with the confirmed clinical plan.</li><li>Receive records and written aftercare instructions.</li><li>Continue remote and local follow-up as required.</li></ol>
      <h2>Questions from patients in ${escapeHtml(cityLabel)}</h2>
      ${faq.map(([q, a]) => `<details><summary><strong>${escapeHtml(q)}</strong></summary><p>${escapeHtml(a)}</p></details>`).join('')}
      <div id="dental-assessment"><h2>Request an initial dental assessment</h2><p>Use the secure form on this page to explain your project. Photos and existing records can be shared during the next step.</p></div>
    </article>
  </main>`;
  return { route, html: inject({ route, title, description, body, schema }) };
}

const routes = [];
for (const [country, cities, keywords] of [['uk', ukCities, ukKeywords], ['us', usCities, usKeywords]]) {
  for (const city of cities) {
    for (const keyword of keywords) {
      const page = renderPage(country, city, keyword);
      await writeRoute(page.route, page.html);
      routes.push(page.route);
    }
  }

  const directoryRoute = `${basePath}/${country}/cities`;
  const countryName = country === 'uk' ? 'United Kingdom' : 'United States';
  const directoryTitle = `${countryName} dental comparison guides`;
  const cards = cities.map((city) => `<section><h2>${escapeHtml(city.name)}${country === 'us' ? `, ${escapeHtml(city.region)}` : ''}</h2><ul>${keywords.map(([slug, label]) => `<li><a href="${basePath}/${country}/${slug}-${city.slug}">${escapeHtml(label)} ${escapeHtml(city.name)}</a></li>`).join('')}</ul></section>`).join('');
  const directoryBody = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1100px;margin:0 auto;padding:72px 24px"><h1>${directoryTitle}</h1><p>Selected local search guides that compare dental care with coordinated treatment in Turkey.</p>${cards}</article></main>`;
  await writeRoute(directoryRoute, inject({ route: directoryRoute, title: directoryTitle, description: `Browse dental treatment comparison guides for selected locations in the ${countryName}.`, body: directoryBody, schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: directoryTitle, url: `${origin}${directoryRoute}` }, robots: 'noindex,follow' }));
  routes.push(directoryRoute);
}

console.log(`Prerendered ${routes.length} dental routes (${ukCities.length * ukKeywords.length} UK, ${usCities.length * usKeywords.length} US).`);
