import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://cliniqeo-hair.vercel.app';

const pages = [
  {p:'/greffe-de-cheveux-turquie',l:'fr',a:'/hair-transplant-turkey',t:'Greffe de cheveux en Turquie : guide complet 2026 | Cliniqeo Hair',d:'Guide complet de la greffe de cheveux en Turquie : techniques FUE et DHI, prix, choix de la clinique, séjour, sécurité, résultats et suivi francophone.',h:'Greffe de cheveux en Turquie : guide complet',s:'Une greffe capillaire réussie repose sur un diagnostic médical précis, une zone donneuse suffisante, un dessin naturel de la ligne frontale et un protocole de suivi adapté.',k:['Évaluation de la zone donneuse et de la calvitie','Choix raisonné entre FUE Saphir et DHI','Planification réaliste du nombre de greffons','Séjour et accompagnement francophone','Suivi de la cicatrisation et de la repousse']},
  {p:'/prix-greffe-de-cheveux-turquie',l:'fr',a:'/turkey-hair-transplant-cost',t:'Prix d’une greffe de cheveux en Turquie : tarifs et forfaits | Cliniqeo Hair',d:'Comprendre le prix d’une greffe de cheveux en Turquie : technique, nombre de greffons, équipe médicale, hôtel, transferts, suivi et éléments à vérifier dans le devis.',h:'Prix d’une greffe de cheveux en Turquie',s:'Le tarif dépend de la technique, de la complexité, du nombre de greffons, de l’organisation médicale et des prestations incluses. Un devis sérieux détaille chaque poste.',k:['Technique FUE Saphir ou DHI','Nombre estimé de greffons','Rôle du médecin et de l’équipe','Hôtel et transferts inclus ou non','Médicaments, kit et suivi postopératoire']},
  {p:'/greffe-de-cheveux-fue-turquie',l:'fr',a:'/fue-hair-transplant-turkey',t:'Greffe FUE en Turquie : technique, étapes et récupération | Cliniqeo Hair',d:'Tout savoir sur la greffe FUE en Turquie : extraction folliculaire, ouverture des canaux, implantation, cicatrisation, résultats, indications et limites.',h:'Greffe de cheveux FUE en Turquie',s:'La FUE consiste à prélever les unités folliculaires une à une dans la zone donneuse avant de les implanter dans les zones dégarnies selon un dessin personnalisé.',k:['Prélèvement folliculaire individuel','Gestion prudente de la zone donneuse','Angle et direction naturels d’implantation','Cicatrisation progressive','Résultat évalué sur plusieurs mois']},
  {p:'/greffe-de-cheveux-dhi-turquie',l:'fr',a:'/dhi-hair-transplant-turkey',t:'Greffe DHI en Turquie : stylo implanteur, avantages et limites | Cliniqeo Hair',d:'Guide de la greffe DHI en Turquie : utilisation du stylo implanteur, indications, densité, rasage, récupération, différence avec la FUE et critères de choix.',h:'Greffe de cheveux DHI en Turquie',s:'La DHI utilise un stylo implanteur pour placer les follicules directement dans la zone receveuse. Elle n’est pas automatiquement supérieure à la FUE et doit être choisie selon le cas.',k:['Implantation avec stylo de type Choi','Contrôle de l’angle et de la profondeur','Rasage partiel possible selon les cas','Adaptée à certaines zones','Équipe expérimentée indispensable']},
  {p:'/greffe-cheveux-istanbul',l:'fr',a:'/en/hair-transplant-istanbul',t:'Greffe de cheveux à Istanbul : clinique, prix et séjour | Cliniqeo Hair',d:'Guide de la greffe de cheveux à Istanbul : choix de la clinique, FUE et DHI, prix, sécurité, organisation du séjour et suivi francophone.',h:'Greffe de cheveux à Istanbul',s:'Istanbul concentre une forte activité de restauration capillaire, mais la réussite dépend d’abord du diagnostic, de l’équipe médicale et de la protection de la zone donneuse.',k:['Vérifier l’identité et le rôle du médecin','Comparer des résultats à plusieurs mois','Demander un plan de greffons réaliste','Confirmer les transferts et le suivi']},
  {p:'/greffe-cheveux-turquie-tout-compris',l:'fr',a:'/en/all-inclusive-hair-transplant-turkey',t:'Greffe cheveux Turquie tout compris : contenu du forfait | Cliniqeo Hair',d:'Ce qu’un forfait de greffe de cheveux en Turquie tout compris doit inclure : intervention, hôtel, transferts, interprète, médicaments et suivi.',h:'Greffe de cheveux en Turquie tout compris',s:'Un forfait tout compris doit séparer clairement les soins médicaux des prestations de voyage et préciser les exclusions.',k:['Intervention et consultation','Hôtel et nombre de nuits','Transferts aéroport–hôtel–clinique','Interprétariat et kit postopératoire','Suivi à distance']},
  {p:'/greffe-cheveux-turquie-avis',l:'fr',a:'/en/hair-transplant-turkey-reviews',t:'Greffe de cheveux Turquie : avis et critères de confiance | Cliniqeo Hair',d:'Comment analyser les avis sur une greffe de cheveux en Turquie, vérifier les résultats, reconnaître les signaux d’alerte et choisir une clinique fiable.',h:'Greffe de cheveux en Turquie : analyser les avis',s:'Les avis sont utiles seulement s’ils sont recoupés avec des informations médicales vérifiables et des résultats photographiés de manière comparable.',k:['Photos datées et non retouchées','Évolution à 3, 6 et 12 mois','État de la zone donneuse','Réponse de la clinique en cas de difficulté','Identité du praticien']},
  {p:'/greffe-cheveux-turquie-avant-apres',l:'fr',a:'/en/hair-transplant-turkey-before-after',t:'Greffe cheveux Turquie avant après : analyser les résultats | Cliniqeo Hair',d:'Comment lire les photos avant/après d’une greffe de cheveux : angles, lumière, densité, ligne frontale, zone donneuse et délai de repousse.',h:'Greffe de cheveux Turquie : avant et après',s:'Une comparaison fiable utilise le même angle, la même lumière et une longueur de cheveux comparable, avec une date postopératoire indiquée.',k:['Comparer la ligne frontale et le dessus','Observer aussi la zone donneuse','Vérifier l’absence de fibres densifiantes','Attendre la maturation complète','Tenir compte du calibre des cheveux']},
  {p:'/greffe-cheveux-femme-turquie',l:'fr',a:'/en/female-hair-transplant-turkey',t:'Greffe de cheveux femme en Turquie : indications et techniques | Cliniqeo Hair',d:'Greffe de cheveux pour femme en Turquie : diagnostic de l’alopécie, ligne frontale, FUE ou DHI, sans rasage, récupération et limites.',h:'Greffe de cheveux pour femme en Turquie',s:'Chez la femme, une chute diffuse doit être diagnostiquée avant toute chirurgie afin d’écarter une cause médicale et d’évaluer la stabilité de la perte.',k:['Diagnostic médical préalable','Analyse de la zone donneuse','Correction de ligne frontale ou des tempes','Rasage partiel selon les cas','Suivi individualisé']},
  {p:'/greffe-cheveux-afro-turquie',l:'fr',a:'/en/afro-hair-transplant-turkey',t:'Greffe cheveux afro et crépus en Turquie : expertise spécifique | Cliniqeo Hair',d:'Greffe de cheveux afro ou crépus en Turquie : courbure folliculaire, extraction FUE, ligne frontale, densité, barbe et choix d’une équipe expérimentée.',h:'Greffe de cheveux afro en Turquie',s:'Les cheveux afro nécessitent une expertise spécifique car le follicule peut être courbé sous la peau, ce qui modifie l’extraction et le risque de transection.',k:['Expérience avec les follicules courbés','Choix prudent du punch','Conception adaptée de la ligne frontale','Protection de la zone donneuse','Photos de cas comparables']},
  {p:'/greffe-barbe-turquie',l:'fr',a:'/en/beard-transplant-turkey',t:'Greffe de barbe en Turquie : prix, FUE et résultats | Cliniqeo Hair',d:'Guide de la greffe de barbe en Turquie : zones traitées, technique FUE, dessin, nombre de greffons, cicatrisation, prix et résultat naturel.',h:'Greffe de barbe en Turquie',s:'La greffe de barbe permet de densifier les joues, la moustache ou le bouc, à condition de respecter l’angle très couché des poils du visage.',k:['Dessin personnalisé de la barbe','Prélèvement généralement occipital','Implantation selon l’angle naturel','Rougeurs et croûtes temporaires','Résultat progressif']},
  {p:'/nombre-greffons-greffe-cheveux',l:'fr',a:'/en/hair-transplant-graft-count',t:'Nombre de greffons pour une greffe de cheveux : estimation | Cliniqeo Hair',d:'Estimer le nombre de greffons pour une greffe de cheveux selon la ligne frontale, les golfes, le dessus, le vertex, la classification Norwood et la zone donneuse.',h:'Combien de greffons pour une greffe de cheveux ?',s:'Le nombre de greffons n’est pas une promesse commerciale : il doit être calculé selon la surface, la densité cible et la capacité durable de la zone donneuse.',k:['Surface réelle à couvrir','Calibre et couleur des cheveux','Densité donneuse disponible','Priorité entre ligne frontale et vertex','Évolution future de la calvitie']},
  {p:'/greffe-cheveux-turquie-risques',l:'fr',a:'/en/hair-transplant-turkey-risks',t:'Greffe cheveux Turquie : risques, complications et prévention | Cliniqeo Hair',d:'Risques d’une greffe de cheveux en Turquie : infection, sur-prélèvement, mauvaise ligne frontale, faible repousse, shock loss et moyens de prévention.',h:'Greffe de cheveux en Turquie : risques et prévention',s:'Comme toute intervention, la greffe capillaire comporte des risques. Une bonne sélection du patient, l’asepsie et un plan conservateur les réduisent.',k:['Sur-prélèvement de la zone donneuse','Infection ou inflammation','Ligne frontale artificielle','Faible survie folliculaire','Shock loss temporaire']},
  {p:'/apres-greffe-cheveux-mois-par-mois',l:'fr',a:'/en/hair-transplant-recovery-timeline',t:'Après une greffe de cheveux : évolution mois par mois | Cliniqeo Hair',d:'Évolution après une greffe de cheveux : premiers jours, croûtes, chute transitoire, repousse à 3, 6, 9 et 12 mois, soins et signes d’alerte.',h:'Après une greffe de cheveux : évolution mois par mois',s:'La cicatrisation visible est rapide, mais la repousse folliculaire demande plusieurs mois. Les étapes varient d’un patient à l’autre.',k:['Jours 1 à 10 : protection et croûtes','Mois 1 à 2 : chute transitoire possible','Mois 3 à 4 : début de repousse','Mois 6 à 9 : densification','Mois 12 et plus : maturation']},

  {p:'/hair-transplant-turkey',l:'en',a:'/greffe-de-cheveux-turquie',t:'Hair Transplant in Turkey: Complete 2026 Guide | Cliniqeo Hair',d:'Complete guide to hair transplantation in Turkey: FUE, DHI, prices, clinic selection, safety, travel planning, results and aftercare.',h:'Hair Transplant in Turkey: Complete Guide',s:'A successful transplant depends on medical assessment, donor-area capacity, natural hairline design and structured follow-up.',k:['Donor and recipient area assessment','FUE Sapphire or DHI selection','Realistic graft planning','Travel and hotel coordination','Long-term aftercare']},
  {p:'/turkey-hair-transplant-cost',l:'en',a:'/prix-greffe-de-cheveux-turquie',t:'Turkey Hair Transplant Cost: Prices and Packages | Cliniqeo Hair',d:'Understand hair transplant costs in Turkey, including technique, graft count, medical team, hotel, transfers, medication and aftercare.',h:'Hair Transplant Cost in Turkey',s:'The final cost depends on technique, complexity, graft planning and included services. A transparent quote lists each item.',k:['FUE Sapphire or DHI technique','Estimated graft count','Medical team involvement','Hotel and transfers','Medication and follow-up']},
  {p:'/fue-hair-transplant-turkey',l:'en',a:'/greffe-de-cheveux-fue-turquie',t:'FUE Hair Transplant in Turkey: Procedure and Recovery | Cliniqeo Hair',d:'Learn how FUE hair transplantation works in Turkey, including extraction, implantation, donor management, recovery, results and limitations.',h:'FUE Hair Transplant in Turkey',s:'FUE removes follicular units individually from the donor area before implanting them in thinning areas according to a personalised plan.',k:['Individual follicular extraction','Careful donor management','Natural angle and direction','Progressive healing','Results assessed over months']},
  {p:'/dhi-hair-transplant-turkey',l:'en',a:'/greffe-de-cheveux-dhi-turquie',t:'DHI Hair Transplant in Turkey: Benefits and Limits | Cliniqeo Hair',d:'Guide to DHI hair transplantation in Turkey: implanter pen, density, shaving, recovery, differences from FUE and patient selection.',h:'DHI Hair Transplant in Turkey',s:'DHI uses an implanter pen to place grafts directly. It is not automatically better than FUE and should be selected according to the case.',k:['Implanter-pen placement','Control of angle and depth','Partial shaving in selected cases','Useful for specific areas','Experienced team required']},
  {p:'/en/hair-transplant-istanbul',l:'en',a:'/greffe-cheveux-istanbul',t:'Hair Transplant in Istanbul: Clinics, Cost and Travel | Cliniqeo Hair',d:'Guide to hair transplantation in Istanbul: clinic selection, FUE and DHI, pricing, safety, travel organisation and English-speaking support.',h:'Hair Transplant in Istanbul',s:'Istanbul has a large hair-restoration ecosystem, but outcomes depend primarily on diagnosis, the medical team and donor-area protection.',k:['Confirm the doctor’s role','Review comparable long-term results','Request realistic graft planning','Confirm transfers and aftercare']},
  {p:'/en/all-inclusive-hair-transplant-turkey',l:'en',a:'/greffe-cheveux-turquie-tout-compris',t:'All-Inclusive Hair Transplant Turkey: Package Details | Cliniqeo Hair',d:'What an all-inclusive hair transplant package in Turkey should cover: procedure, hotel, transfers, interpreter, medication and follow-up.',h:'All-Inclusive Hair Transplant in Turkey',s:'An all-inclusive package should clearly separate medical care from travel services and list every exclusion.',k:['Consultation and procedure','Hotel and number of nights','Airport, hotel and clinic transfers','Interpreter and aftercare kit','Remote follow-up']},
  {p:'/en/hair-transplant-turkey-reviews',l:'en',a:'/greffe-cheveux-turquie-avis',t:'Hair Transplant Turkey Reviews: How to Check a Clinic | Cliniqeo Hair',d:'How to evaluate hair transplant reviews in Turkey, verify results, recognise warning signs and select a reliable clinic.',h:'Hair Transplant Turkey Reviews',s:'Reviews are useful only when matched with verifiable medical information and consistently photographed results.',k:['Dated unedited photos','Progress at 3, 6 and 12 months','Donor-area appearance','Clinic response to problems','Practitioner identity']},
  {p:'/en/hair-transplant-turkey-before-after',l:'en',a:'/greffe-cheveux-turquie-avant-apres',t:'Hair Transplant Turkey Before and After: Read Results | Cliniqeo Hair',d:'How to assess hair transplant before-and-after photos: lighting, angles, density, hairline, donor area and growth timeline.',h:'Hair Transplant Turkey: Before and After',s:'Reliable comparisons use the same lighting, angle and hair length and identify the postoperative date.',k:['Compare hairline and top view','Check the donor area','Look for no concealing fibres','Allow full maturation','Consider hair calibre']},
  {p:'/en/female-hair-transplant-turkey',l:'en',a:'/greffe-cheveux-femme-turquie',t:'Female Hair Transplant Turkey: Indications and Methods | Cliniqeo Hair',d:'Female hair transplantation in Turkey: alopecia diagnosis, hairline lowering, FUE or DHI, no-shave options, recovery and limits.',h:'Female Hair Transplant in Turkey',s:'Diffuse female hair loss should be diagnosed before surgery to identify causes and confirm stability.',k:['Medical diagnosis first','Donor-area assessment','Hairline or temple correction','Partial shaving when suitable','Individual follow-up']},
  {p:'/en/afro-hair-transplant-turkey',l:'en',a:'/greffe-cheveux-afro-turquie',t:'Afro Hair Transplant Turkey: Curly and Coily Hair Expertise | Cliniqeo Hair',d:'Afro and coily hair transplantation in Turkey: curved follicles, FUE extraction, hairline design, density and specialist selection.',h:'Afro Hair Transplant in Turkey',s:'Afro hair requires specific expertise because follicles may curve beneath the skin, affecting extraction and transection risk.',k:['Experience with curved follicles','Careful punch selection','Appropriate hairline design','Donor-area protection','Comparable case photos']},
  {p:'/en/beard-transplant-turkey',l:'en',a:'/greffe-barbe-turquie',t:'Beard Transplant Turkey: FUE, Cost and Results | Cliniqeo Hair',d:'Guide to beard transplantation in Turkey: treated areas, FUE method, design, graft count, healing, cost and natural results.',h:'Beard Transplant in Turkey',s:'A beard transplant can fill cheeks, moustache or goatee areas while respecting the very flat natural angle of facial hair.',k:['Personalised beard design','Usually scalp donor follicles','Low-angle implantation','Temporary redness and crusting','Gradual results']},
  {p:'/en/hair-transplant-graft-count',l:'en',a:'/nombre-greffons-greffe-cheveux',t:'Hair Transplant Graft Count: How Many Do You Need? | Cliniqeo Hair',d:'Estimate hair transplant graft count for hairline, temples, mid-scalp and crown according to Norwood stage and donor capacity.',h:'How Many Grafts for a Hair Transplant?',s:'Graft count must be based on surface, target density and long-term donor capacity, not used as a marketing promise.',k:['Surface to cover','Hair calibre and colour','Available donor density','Frontal versus crown priority','Future hair-loss progression']},
  {p:'/en/hair-transplant-turkey-risks',l:'en',a:'/greffe-cheveux-turquie-risques',t:'Hair Transplant Turkey Risks and Prevention | Cliniqeo Hair',d:'Hair transplant risks in Turkey: infection, donor overharvesting, unnatural hairline, poor growth, shock loss and prevention.',h:'Hair Transplant in Turkey: Risks',s:'Hair transplantation has risks like any procedure. Appropriate selection, hygiene and conservative planning reduce them.',k:['Donor overharvesting','Infection or inflammation','Unnatural hairline','Low graft survival','Temporary shock loss']},
  {p:'/en/hair-transplant-recovery-timeline',l:'en',a:'/apres-greffe-cheveux-mois-par-mois',t:'Hair Transplant Recovery Timeline Month by Month | Cliniqeo Hair',d:'Hair transplant recovery timeline: first days, crusts, temporary shedding, growth at 3, 6, 9 and 12 months, care and warning signs.',h:'Hair Transplant Recovery Month by Month',s:'Visible healing is relatively quick, but follicular growth develops over many months and varies between patients.',k:['Days 1–10: protection and crusting','Months 1–2: possible shedding','Months 3–4: early growth','Months 6–9: increasing density','Month 12+: maturation']}
];

const escapeHtml = (value = '') => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function cleanHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']robots["'][^>]*>/gi, '')
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<link\s+rel=["']alternate["'][^>]*>/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');
}

function schemaFor(page) {
  const question = page.l === 'fr' ? `Que faut-il savoir sur : ${page.h} ?` : `What should patients know about: ${page.h}?`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: page.h,
      headline: page.h,
      description: page.d,
      url: `${ORIGIN}${page.p}`,
      inLanguage: page.l,
      dateModified: '2026-07-31',
      about: {'@type':'MedicalProcedure',name:page.l === 'fr' ? 'Greffe de cheveux' : 'Hair transplantation'},
      publisher: {'@type':'Organization',name:'Cliniqeo Hair',url:ORIGIN}
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: question,
        acceptedAnswer: {'@type':'Answer',text:page.s}
      }]
    }
  ];
}

function headMarkup(page) {
  const alternateLang = page.l === 'fr' ? 'en' : 'fr';
  const canonical = `${ORIGIN}${page.p}`;
  const image = page.l === 'fr'
    ? 'https://images.pexels.com/photos/18120523/pexels-photo-18120523.jpeg?auto=compress&cs=tinysrgb&w=1600'
    : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=82';
  return `
    <title>${escapeHtml(page.t)}</title>
    <meta name="description" content="${escapeHtml(page.d)}">
    <meta name="keywords" content="${escapeHtml(page.k.join(', '))}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${page.l}" href="${canonical}">
    <link rel="alternate" hreflang="${alternateLang}" href="${ORIGIN}${page.a}">
    <link rel="alternate" hreflang="x-default" href="${ORIGIN}${page.l === 'fr' ? page.p : page.a}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Cliniqeo Hair">
    <meta property="og:title" content="${escapeHtml(page.t)}">
    <meta property="og:description" content="${escapeHtml(page.d)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.t)}">
    <meta name="twitter:description" content="${escapeHtml(page.d)}">
    <meta name="twitter:image" content="${image}">
    <script type="application/ld+json">${JSON.stringify(schemaFor(page)).replace(/</g, '\\u003c')}</script>`;
}

function bodyMarkup(page) {
  const isFr = page.l === 'fr';
  const pointsTitle = isFr ? 'Points essentiels' : 'Key points';
  const faqTitle = isFr ? 'Réponse claire' : 'Clear answer';
  const cta = isFr ? 'Demander un diagnostic capillaire gratuit' : 'Request a free hair assessment';
  const notice = isFr
    ? 'Ces informations sont générales et ne remplacent pas un diagnostic médical individuel.'
    : 'This general information does not replace an individual medical assessment.';
  return `<div id="root">
    <main style="font-family:Arial,sans-serif;color:#17324d;max-width:1080px;margin:0 auto;padding:48px 24px;line-height:1.65">
      <article>
        <header><p style="font-weight:700;color:#2f6bfc">Cliniqeo Hair</p><h1 style="font-size:clamp(2rem,5vw,3.6rem);line-height:1.1">${escapeHtml(page.h)}</h1><p style="font-size:1.2rem;color:#425466">${escapeHtml(page.s)}</p></header>
        <section><h2>${pointsTitle}</h2><ul>${page.k.map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul><p>${escapeHtml(page.d)}</p></section>
        <section><h2>${faqTitle}</h2><p>${escapeHtml(page.s)}</p></section>
        <p><a href="/contact" style="display:inline-block;background:#2f6bfc;color:white;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700">${cta}</a></p>
        <p style="font-size:.9rem;color:#667085">${notice}</p>
      </article>
    </main>
  </div>`;
}

const templatePath = join(process.cwd(), 'dist', 'index.html');
const original = await readFile(templatePath, 'utf8');

for (const page of pages) {
  let html = cleanHead(original);
  html = html.replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${page.l}">`);
  html = html.replace('</head>', `${headMarkup(page)}\n  </head>`);
  html = html.replace(/<div\s+id=["']root["']><\/div>/i, bodyMarkup(page));

  const route = page.p.replace(/^\//, '');
  const flatPath = join(process.cwd(), 'dist', `${route}.html`);
  const indexPath = join(process.cwd(), 'dist', route, 'index.html');
  await mkdir(dirname(flatPath), {recursive:true});
  await mkdir(dirname(indexPath), {recursive:true});
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Prerendered ${pages.length} canonical SEO pages.`);
