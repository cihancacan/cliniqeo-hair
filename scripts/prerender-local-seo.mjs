import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const origin = 'https://cliniqeo-hair.vercel.app';
const source = await readFile(join(root, 'src', 'config', 'localSeoData.ts'), 'utf8');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

function extractArray(name) {
  const match = source.match(new RegExp(`export const ${name}:[^=]+=[\\s\\S]*?\\[([\\s\\S]*?)\\n\\];`));
  if (!match) throw new Error(`Unable to extract ${name}`);
  return Function(`"use strict"; return [${match[1]}];`)();
}

const frKeywords = extractArray('frLocalKeywords');
const enKeywords = extractArray('enLocalKeywords');
const frCities = extractArray('frLocalCities');
const ukCities = extractArray('ukLocalCities');
const usCities = extractArray('usLocalCities');

const frIntent = {
  complete: {
    title: 'Greffe de cheveux',
    angle: 'comparaison complète entre une solution locale et un séjour médical organisé à Istanbul',
    lead: 'Une greffe réussie dépend du diagnostic, de la zone donneuse, du dessin de la ligne frontale et du suivi, et non uniquement du nombre de greffons annoncé.',
  },
  technique: {
    title: 'Greffe capillaire',
    angle: 'comparaison des techniques FUE Saphir et DHI selon votre profil',
    lead: 'La technique doit être choisie après analyse de la surface à couvrir, du calibre des cheveux, de la densité donneuse et de la progression probable de la calvitie.',
  },
  implant: {
    title: 'Implant capillaire',
    angle: 'explication de l’extraction et de l’implantation de vos propres unités folliculaires',
    lead: 'Le naturel dépend de l’angle, de la direction, de la répartition des follicules simples et multiples et de la protection du capital donneur.',
  },
  price: {
    title: 'Prix greffe cheveux',
    angle: 'comparaison du coût total, des prestations incluses et du paiement en 10 fois',
    lead: 'Un prix doit être étudié à prestation équivalente : intervention, équipe médicale, technique, hôtel, transferts, médicaments et suivi.',
  },
  clinic: {
    title: 'Clinique greffe cheveux',
    angle: 'méthode pour comparer les équipes, les responsabilités médicales et le suivi',
    lead: 'La proximité ne remplace pas la transparence sur le médecin, le rôle de chaque intervenant, la gestion de la zone donneuse et les protocoles de suivi.',
  },
};

const enIntent = {
  complete: {
    title: 'Hair transplant',
    angle: 'a complete comparison between local treatment and a coordinated medical trip to Istanbul',
    lead: 'A responsible plan is based on donor capacity, future hair-loss progression, hairline design and realistic coverage rather than a headline graft number.',
  },
  technique: {
    title: 'Hair restoration',
    angle: 'a practical comparison of FUE, Sapphire FUE and DHI for an individual case',
    lead: 'Technique should follow diagnosis. Donor quality, recipient area, hair calibre, shaving preference and long-term planning all affect the recommendation.',
  },
  implant: {
    title: 'Hair implants',
    angle: 'an explanation of follicular extraction, placement and natural hairline planning',
    lead: 'Natural appearance depends on direction, angle, graft distribution and donor preservation. Artificially high graft promises should not replace assessment.',
  },
  price: {
    title: 'Hair transplant cost',
    angle: 'a like-for-like comparison of procedure, travel, accommodation, transfers and follow-up',
    lead: 'Headline prices are incomplete when they omit medical responsibility, hotel nights, medication, transfers, aftercare or the practical cost of travel.',
  },
  clinic: {
    title: 'Hair transplant clinic',
    angle: 'a framework for comparing clinicians, protocols, donor safety and aftercare',
    lead: 'Patients should know who diagnoses them, who designs the hairline, who performs each stage and who remains available during recovery.',
  },
};

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const hash = (value) => [...value].reduce((total, character) => total + character.charCodeAt(0), 0);
const pathFor = (country, keyword, city) => country === 'fr' ? `/${keyword.slug}-${city.slug}` : `/en/${country}/${keyword.slug}-${city.slug}`;
const cityLabel = (country, city) => country === 'us' ? `${city.name}, ${city.region}` : city.name;

function faqItems(country, city) {
  if (country === 'fr') {
    return [
      [`Cliniqeo Hair possède-t-il une clinique à ${city.name} ?`, `Non. La page répond aux recherches effectuées autour de ${city.name}, mais l’intervention est réalisée à Istanbul par les professionnels de santé partenaires, avec accompagnement francophone.`],
      [`Comment obtenir un devis depuis ${city.name} ?`, 'Envoyez des photos de face, du dessus, des profils et de la zone donneuse. Une première analyse permet d’évaluer la faisabilité, la technique et une estimation de greffons.'],
      ['Le paiement en 10 fois est-il disponible ?', 'Un paiement en 10 fois peut être proposé aux patients en France, sous réserve d’acceptation du dossier et des conditions communiquées avant la réservation.'],
      [`Comment organiser le départ depuis ${city.name} ?`, `Le trajet peut être préparé autour de ${city.airport} (${city.airportCode}) ou d’un autre aéroport adapté au calendrier de traitement.`],
      ['Peut-on économiser jusqu’à 80 % ?', 'L’écart dépend du devis français, de la technique et des prestations comparées. Toute économie doit être calculée sur des offres détaillées et réellement équivalentes.'],
    ];
  }
  const label = cityLabel(country, city);
  return [
    [`Does Cliniqeo Hair operate a clinic in ${label}?`, `No. This page serves people researching treatment around ${label}, while the medical procedure takes place in Istanbul through partner healthcare professionals.`],
    [`How can I obtain an assessment from ${label}?`, 'Send clear front, top, side and donor-area photographs. The initial review considers donor capacity, hair-loss pattern, technique and an estimated graft range.'],
    ['What can an Istanbul package include?', 'The written proposal can include the procedure, accommodation, local transfers, English-speaking coordination, medication guidance and postoperative follow-up.'],
    [`How is travel planned from ${city.name}?`, `Travel can be organised around ${city.airport} (${city.airportCode}) or another airport offering a suitable itinerary.`],
    ['Is the cheapest clinic always the best option?', 'No. Compare medical responsibility, donor management, technique, inclusions, daily patient volume and access to follow-up.'],
  ];
}

function renderLocalArticle(country, keyword, city, pagePath) {
  const isFr = country === 'fr';
  const intent = isFr ? frIntent[keyword.intent] : enIntent[keyword.intent];
  const label = cityLabel(country, city);
  const imageNumber = (hash(pagePath) % 6) + 1;
  const image = `/greffe.cheveux.avant.apres${imageNumber}.jpg`;
  const contact = isFr ? '/contact' : '/en/contact';
  const directory = country === 'fr' ? '/greffe-cheveux-france' : `/en/${country}/hair-transplant-cities`;
  const variant = hash(pagePath) % 4;
  const nearby = city.nearby ? (isFr ? `Cette analyse concerne également les patients de ${city.nearby}.` : `The same planning points can help patients travelling from ${city.nearby}.`) : '';
  const faqs = faqItems(country, city);

  const title = isFr
    ? `${intent.title} à ${city.name} : prix, clinique et alternative Istanbul`
    : `${intent.title} in ${label}: Cost, Clinic and Istanbul Option`;
  const description = isFr
    ? `${keyword.label} à ${city.name} : prix, paiement en 10 fois, accompagnement français, hôtel, transferts et comparaison avec Istanbul.`
    : `${keyword.label} in ${label}: compare local options with a coordinated Istanbul package, medical assessment, travel and English-speaking follow-up.`;

  const localParagraphsFr = [
    `Pour une personne située à ${city.name}, en ${city.region}, la recherche locale répond souvent à trois priorités : comprendre le prix, identifier le professionnel responsable et conserver un suivi accessible après l’intervention.`,
    `Le bassin de ${city.name} permet de comparer plusieurs offres françaises, mais une comparaison sérieuse doit aussi examiner le temps consacré au diagnostic, le nombre de patients pris en charge le même jour et la stratégie de conservation de la zone donneuse.`,
    `Depuis ${city.name}, le choix ne se limite pas à « près de chez moi » ou « à l’étranger ». Il s’agit surtout de comparer la qualité du plan médical, la transparence du devis et l’organisation du suivi sur douze mois.`,
    `Les patients de ${city.region} peuvent commencer par un diagnostic photo à distance avant tout déplacement. Cette étape évite de réserver un voyage sans savoir si la zone donneuse permet réellement le projet envisagé.`,
  ];
  const localParagraphsEn = [
    `For someone based in ${label}, a local search usually reflects three priorities: understanding cost, identifying medical responsibility and keeping follow-up accessible after treatment.`,
    `Patients in ${city.region} can compare local providers with an Istanbul route by examining diagnosis time, clinician involvement, donor preservation and the number of patients treated each day.`,
    `The decision is not simply “near me” versus “abroad”. It is a comparison of medical planning, written inclusions, travel organisation and the quality of follow-up over the full growth period.`,
    `A remote photo assessment can be completed from ${label} before travel. This helps determine whether donor capacity and hair-loss pattern make surgery a reasonable option.`
  ];

  const content = isFr ? `
    <p>${escapeHtml(localParagraphsFr[variant])}</p>
    <p>${escapeHtml(intent.lead)} La page est consacrée à une ${escapeHtml(intent.angle)}.</p>
    <h2>${escapeHtml(intent.title)} à ${escapeHtml(city.name)} ou Istanbul : les critères utiles</h2>
    <p>Une offre locale peut rassurer par sa proximité. Istanbul peut proposer un coût global plus accessible et une organisation concentrée sur quelques jours. Dans les deux cas, il faut vérifier l’identité du médecin, son rôle réel, la technique envisagée, l’estimation des greffons, le dessin de la ligne frontale, la gestion du vertex et les consignes postopératoires.</p>
    <p>Cliniqeo Hair n’exploite pas de clinique à ${escapeHtml(city.name)}. L’agence française coordonne le parcours avec ses partenaires médicaux en Turquie et assure un accompagnement francophone avant le départ, pendant le séjour et après le retour.</p>
    <h2>Prix depuis ${escapeHtml(city.name)} et paiement en 10 fois</h2>
    <p>Le tarif doit inclure clairement les actes médicaux, la technique, les analyses prévues, l’hôtel, le nombre de nuits, les transferts, les médicaments, le premier lavage et le suivi. Une différence de prix importante peut exister entre la France et la Turquie, mais le pourcentage d’économie dépend toujours des deux devis comparés.</p>
    <p><strong>Le paiement en 10 fois est un argument prioritaire pour les patients français.</strong> Il peut permettre d’étaler le budget sous réserve d’acceptation du dossier et des conditions contractuelles. Le patient doit recevoir le montant total, les échéances et les éventuels frais avant de confirmer.</p>
    <h2>Départ de ${escapeHtml(city.name)} vers Istanbul</h2>
    <p>Le voyage peut être organisé autour de ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)}), ou d’un autre aéroport selon les dates et les correspondances. Le programme doit laisser le temps nécessaire à la consultation, à l’intervention, au contrôle et au premier lavage avant le retour. ${escapeHtml(nearby)}</p>
    <h2>Diagnostic médical et nombre de greffons</h2>
    <p>Le diagnostic commence par des photographies nettes de la ligne frontale, du dessus, des profils et de la zone donneuse. L’âge, les antécédents, les traitements, l’évolution de la chute et les attentes doivent être pris en compte. Une estimation de greffons donnée sans ces informations reste imprécise.</p>
    <p>La FUE Saphir et la DHI peuvent toutes deux produire un résultat naturel lorsqu’elles sont correctement indiquées. La priorité reste la protection de la zone donneuse et un plan compatible avec une éventuelle progression de la calvitie.</p>
    <h2>Ce que doit contenir un devis complet</h2>
    <ul><li>Identité et rôle du médecin</li><li>Technique proposée et estimation de greffons</li><li>Actes et analyses inclus</li><li>Hôtel et transferts précisés</li><li>Médicaments et consignes</li><li>Organisation du suivi</li><li>Conditions du paiement en 10 fois</li></ul>
    <h2>Étapes du parcours depuis ${escapeHtml(city.name)}</h2>
    <ol><li>Envoi des photos et du questionnaire médical</li><li>Analyse de la zone donneuse et de la zone receveuse</li><li>Proposition écrite et comparaison des prestations</li><li>Choix du calendrier et organisation du voyage</li><li>Consultation médicale à Istanbul</li><li>Intervention et premier contrôle</li><li>Retour en France avec suivi photo</li><li>Évaluation progressive à 3, 6, 9 et 12 mois</li></ol>
  ` : `
    <p>${escapeHtml(localParagraphsEn[variant])}</p>
    <p>${escapeHtml(intent.lead)} This page focuses on ${escapeHtml(intent.angle)}.</p>
    <h2>${escapeHtml(intent.title)} in ${escapeHtml(label)} or Istanbul: useful comparison points</h2>
    <p>A local provider may offer convenience, while Istanbul may offer a more accessible complete package and a concentrated treatment schedule. In both cases, patients should verify clinician identity, medical roles, technique, donor planning, graft estimate, hairline design and postoperative access.</p>
    <p>Cliniqeo Hair does not operate a clinic in ${escapeHtml(label)}. It coordinates treatment with partner healthcare professionals in Turkey and provides English-speaking support before travel, during the stay and after the patient returns home.</p>
    <h2>Cost planning from ${escapeHtml(label)}</h2>
    <p>A complete comparison should include the medical procedure, technique, required tests, accommodation, number of nights, Istanbul transfers, medication, first wash and remote follow-up. Savings vary according to the local quote and the services included.</p>
    <p>Patients should calculate the full trip budget, including flights and time away from work. A written proposal should state exclusions, cancellation conditions and what happens when the medical assessment changes the initial plan.</p>
    <h2>Travel from ${escapeHtml(city.name)} to Istanbul</h2>
    <p>Travel can be planned around ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)}) or another suitable airport. The itinerary should allow time for consultation, treatment and the first postoperative control before the return journey. ${escapeHtml(nearby)}</p>
    <h2>Assessment and graft planning</h2>
    <p>The initial assessment requires clear photographs of the front, top, sides and donor area, together with relevant medical information and the history of hair loss. A graft number offered without this information is not a reliable treatment plan.</p>
    <p>FUE, Sapphire FUE and DHI can all be appropriate in selected cases. The main priorities are donor safety, natural direction, realistic density and a strategy that considers future hair-loss progression.</p>
    <h2>What a complete proposal should explain</h2>
    <ul><li>Named clinician and medical responsibilities</li><li>Technique and estimated graft range</li><li>Included procedure and tests</li><li>Accommodation and Istanbul transfers</li><li>Medication and first-wash instructions</li><li>Postoperative follow-up process</li><li>Payment and cancellation conditions</li></ul>
    <h2>Patient journey from ${escapeHtml(label)}</h2>
    <ol><li>Send photographs and medical information</li><li>Review donor and recipient areas</li><li>Receive a written treatment and cost proposal</li><li>Choose dates and organise travel</li><li>Attend the Istanbul medical consultation</li><li>Complete treatment and first control</li><li>Return home with written instructions</li><li>Submit progress photographs through the maturation period</li></ol>
  `;

  const faqHtml = faqs.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, inLanguage: isFr ? 'fr-FR' : 'en', url: `${origin}${pagePath}`, about: { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' }, provider: { '@type': 'Organization', name: 'Cliniqeo Hair', url: origin } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `${origin}${isFr ? '/' : '/en'}` },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Villes' : 'Cities', item: `${origin}${directory}` },
      { '@type': 'ListItem', position: 3, name: label, item: `${origin}${pagePath}` },
    ] },
  ];

  const body = `<main class="local-static-page" style="font-family:Arial,sans-serif;color:#243b53;line-height:1.75">
    <article style="max-width:1040px;margin:0 auto;padding:72px 24px">
      <nav style="font-size:14px;margin-bottom:24px"><a href="${directory}">${isFr ? 'Guides par ville' : 'City guides'}</a> › ${escapeHtml(label)}</nav>
      <p style="font-weight:700;color:#2f6bfc">${isFr ? `PAIEMENT EN 10× · ${escapeHtml(city.region)}` : `${escapeHtml(city.region)} · ${escapeHtml(city.airportCode)}`}</p>
      <h1 style="font-size:clamp(2.3rem,5vw,4rem);line-height:1.08;color:#224671">${escapeHtml(intent.title)} ${isFr ? 'à' : 'in'} ${escapeHtml(label)}</h1>
      <p style="font-size:1.25rem;color:#425466">${escapeHtml(description)}</p>
      <p><a href="${contact}" style="display:inline-block;background:#2f6bfc;color:#fff;padding:14px 22px;border-radius:10px;text-decoration:none;font-weight:700">${isFr ? 'Diagnostic et devis gratuits' : 'Free assessment and quote'}</a></p>
      <img src="${image}" alt="${escapeHtml(`${keyword.label} ${label}`)}" width="1448" height="1086" loading="eager" style="display:block;width:100%;height:auto;border-radius:18px;margin:36px 0" />
      ${content}
      <h2>${isFr ? `Questions fréquentes depuis ${escapeHtml(city.name)}` : `Frequently asked questions from ${escapeHtml(label)}`}</h2>
      ${faqHtml}
      <p style="margin-top:36px"><a href="${contact}">${isFr ? 'Recevoir mon diagnostic et les conditions du paiement en 10 fois' : 'Request my personalised assessment'}</a></p>
    </article>
  </main>`;

  return { title, description, body, schema, image };
}

function injectSeo(base, { lang, title, description, path, body, schema, image }) {
  let html = base
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)} | Cliniqeo Hair</title>`)
    .replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  html = html.replace('</head>', `
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${origin}${path}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(title)} | Cliniqeo Hair">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${origin}${path}">
    <meta property="og:image" content="${origin}${image}">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
  </head>`);
  return html;
}

async function writeRoute(route, html) {
  const flat = join(dist, `${route.replace(/^\//, '')}.html`);
  const index = join(dist, route.replace(/^\//, ''), 'index.html');
  await mkdir(dirname(flat), { recursive: true });
  await mkdir(dirname(index), { recursive: true });
  await writeFile(flat, html, 'utf8');
  await writeFile(index, html, 'utf8');
}

const routes = [];
for (const [country, cities, keywords] of [
  ['fr', frCities, frKeywords],
  ['uk', ukCities, enKeywords],
  ['us', usCities, enKeywords],
]) {
  for (const city of cities) {
    for (const keyword of keywords) {
      const pagePath = pathFor(country, keyword, city);
      const rendered = renderLocalArticle(country, keyword, city, pagePath);
      const html = injectSeo(shell, { lang: country === 'fr' ? 'fr' : 'en', path: pagePath, ...rendered });
      await writeRoute(pagePath, html);
      routes.push(pagePath);
    }
  }
}

function renderDirectory(country, cities, keywords) {
  const isFr = country === 'fr';
  const path = country === 'fr' ? '/greffe-cheveux-france' : `/en/${country}/hair-transplant-cities`;
  const title = country === 'fr' ? 'Greffe de cheveux en France par ville' : country === 'uk' ? 'Hair Transplant Guides by UK City' : 'Hair Transplant Guides by US State and City';
  const description = country === 'fr' ? 'Pages locales sur la greffe de cheveux, la greffe capillaire, les implants, les prix et les cliniques dans 24 villes françaises.' : `Local hair transplant, restoration, implants, cost and clinic pages for ${cities.length} major ${country === 'uk' ? 'UK cities' : 'US states and cities'}.`;
  const cards = cities.map((city) => `<section><h2>${escapeHtml(cityLabel(country, city))}</h2><p>${escapeHtml(city.region)} · ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)})</p><ul>${keywords.map((keyword) => `<li><a href="${pathFor(country, keyword, city)}">${escapeHtml(keyword.label)} ${escapeHtml(city.name)}</a></li>`).join('')}</ul></section>`).join('');
  const body = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:1100px;margin:0 auto;padding:72px 24px"><h1 style="font-size:clamp(2.3rem,5vw,4rem);color:#224671">${escapeHtml(title)}</h1><p style="font-size:1.2rem">${escapeHtml(description)}</p>${cards}</article></main>`;
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description, url: `${origin}${path}`, inLanguage: isFr ? 'fr-FR' : 'en' };
  return { path, html: injectSeo(shell, { lang: isFr ? 'fr' : 'en', title, description, path, body, schema, image: '/greffe.cheveux.avant.apres1.jpg' }) };
}

for (const [country, cities, keywords] of [['fr', frCities, frKeywords], ['uk', ukCities, enKeywords], ['us', usCities, enKeywords]]) {
  const directory = renderDirectory(country, cities, keywords);
  await writeRoute(directory.path, directory.html);
  routes.push(directory.path);
}

const masterPath = '/en/hair-transplant-by-city';
const masterTitle = 'Hair Transplant by City: United Kingdom and United States';
const masterDescription = 'Browse local hair transplant, hair restoration, hair implants, cost and clinic guides for major UK cities and every US state.';
const masterBody = `<main style="font-family:Arial,sans-serif;color:#243b53;line-height:1.7"><article style="max-width:900px;margin:0 auto;padding:72px 24px"><h1 style="font-size:clamp(2.3rem,5vw,4rem);color:#224671">${masterTitle}</h1><p style="font-size:1.2rem">${masterDescription}</p><h2>United Kingdom</h2><p><a href="/en/uk/hair-transplant-cities">Browse 20 UK city guides</a></p><h2>United States</h2><p><a href="/en/us/hair-transplant-cities">Browse one principal city in every US state</a></p></article></main>`;
const masterHtml = injectSeo(shell, { lang: 'en', title: masterTitle, description: masterDescription, path: masterPath, body: masterBody, schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: masterTitle, description: masterDescription, url: `${origin}${masterPath}` }, image: '/greffe.cheveux.avant.apres1.jpg' });
await writeRoute(masterPath, masterHtml);
routes.push(masterPath);

const sitemapPath = join(dist, 'sitemap.xml');
let sitemap = await readFile(sitemapPath, 'utf8');
const entries = routes.map((route) => `  <url><loc>${origin}${route}</loc><changefreq>monthly</changefreq><priority>${route.includes('cities') || route.includes('by-city') || route === '/greffe-cheveux-france' ? '0.7' : '0.6'}</priority></url>`).join('\n');
sitemap = sitemap.replace('</urlset>', `${entries}\n</urlset>`);
await writeFile(sitemapPath, sitemap, 'utf8');

console.log(`Prerendered ${routes.length} local SEO routes (${frCities.length * frKeywords.length} FR, ${ukCities.length * enKeywords.length} UK, ${usCities.length * enKeywords.length} US).`);
