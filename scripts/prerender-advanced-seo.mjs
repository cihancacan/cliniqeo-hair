import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://cliniqeo-hair.vercel.app';

const pages = [
  {p:'/fue-saphir-turquie',l:'fr',a:'/en/sapphire-fue-hair-transplant-turkey',t:'FUE Saphir en Turquie : technique, avantages et prix | Cliniqeo Hair',d:'Guide complet de la greffe FUE Saphir en Turquie : lame saphir, extraction, ouverture des canaux, indications, limites, cicatrisation et prix.',h:'Greffe de cheveux FUE Saphir en Turquie',s:'La FUE Saphir associe une extraction folliculaire individuelle à la création de sites receveurs avec une lame dite saphir. Le diagnostic et la gestion de la zone donneuse restent essentiels.',k:['FUE saphir turquie','greffe cheveux saphir turquie','prix FUE saphir turquie','greffe FUE istanbul']},
  {p:'/dhi-ou-fue',l:'fr',a:'/en/dhi-vs-fue-hair-transplant',t:'DHI ou FUE : différences et meilleure technique selon le cas | Cliniqeo Hair',d:'DHI ou FUE : comparez extraction, implantation, rasage, densité, durée, récupération, prix et indications avant une greffe de cheveux.',h:'DHI ou FUE : quelle technique choisir ?',s:'La DHI et la FUE partagent souvent le même principe d’extraction. La différence principale porte sur la création des sites receveurs et la façon d’implanter les greffons.',k:['DHI ou FUE','différence FUE DHI','meilleure technique greffe cheveux','greffe DHI turquie']},
  {p:'/greffe-cheveux-sans-rasage-turquie',l:'fr',a:'/en/no-shave-hair-transplant-turkey',t:'Greffe de cheveux sans rasage en Turquie : options et limites | Cliniqeo Hair',d:'Greffe de cheveux sans rasage en Turquie : FUE non rasée, rasage partiel, long hair FUE, indications, durée, discrétion, prix et limites.',h:'Greffe de cheveux sans rasage en Turquie',s:'Une greffe sans rasage peut préserver l’apparence pendant la récupération, mais elle demande davantage de temps et n’est pas adaptée à toutes les zones ni à tous les nombres de greffons.',k:['greffe cheveux sans rasage turquie','greffe cheveux femme sans rasage','FUE sans rasage','long hair FUE']},
  {p:'/douleur-greffe-cheveux-anesthesie',l:'fr',a:'/en/hair-transplant-pain-anesthesia',t:'Douleur et anesthésie lors d’une greffe de cheveux | Cliniqeo Hair',d:'La greffe de cheveux est-elle douloureuse ? Anesthésie locale, injections, sensations pendant et après, antalgiques, risques et signes d’alerte.',h:'Douleur et anesthésie pendant une greffe de cheveux',s:'La greffe est habituellement réalisée sous anesthésie locale. Les injections initiales peuvent être inconfortables ; pendant la procédure, le patient ressent surtout des pressions ou manipulations.',k:['douleur greffe cheveux','greffe cheveux indolore turquie','anesthésie greffe cheveux','anesthésie sans aiguille greffe cheveux']},
  {p:'/zone-donneuse-greffe-cheveux',l:'fr',a:'/en/hair-transplant-donor-area',t:'Zone donneuse greffe de cheveux : densité, limites et protection | Cliniqeo Hair',d:'Comprendre la zone donneuse : densité, cheveux disponibles, safe donor area, sur-prélèvement, cicatrices et faisabilité d’une deuxième intervention.',h:'Zone donneuse : la réserve essentielle de la greffe',s:'La zone donneuse constitue une réserve limitée. Une extraction excessive ou mal répartie peut créer un aspect clairsemé permanent et réduire les possibilités futures.',k:['zone donneuse greffe cheveux','zone donneuse abîmée','surprélèvement zone donneuse','densité zone donneuse']},
  {p:'/reparer-greffe-cheveux-ratee',l:'fr',a:'/en/hair-transplant-repair-turkey',t:'Réparer une greffe de cheveux ratée : diagnostic et solutions | Cliniqeo Hair',d:'Greffe de cheveux ratée : ligne frontale artificielle, mauvaise orientation, faible densité, cicatrices et zone donneuse abîmée. Solutions de correction.',h:'Comment réparer une greffe de cheveux ratée ?',s:'Une correction ne consiste pas toujours à ajouter des greffons. Il faut d’abord identifier la cause, évaluer les cicatrices et mesurer la réserve donneuse restante.',k:['greffe cheveux ratée turquie','réparer greffe cheveux ratée','correction greffe cheveux','ligne frontale artificielle']},
  {p:'/soins-apres-greffe-cheveux',l:'fr',a:'/en/hair-transplant-aftercare',t:'Soins après une greffe de cheveux : lavage, sport, avion et soleil | Cliniqeo Hair',d:'Guide des soins après une greffe : premier lavage, croûtes, sommeil, casquette, sport, avion, soleil, médicaments et signes d’alerte.',h:'Soins après une greffe de cheveux',s:'Les premiers jours visent surtout à protéger les greffons, limiter les frottements, suivre le protocole de lavage et surveiller les symptômes inhabituels.',k:['premier lavage après greffe cheveux','croûtes après greffe cheveux','sport après greffe cheveux','prendre avion après greffe cheveux','soleil après greffe cheveux']},
  {p:'/greffe-ligne-frontale-turquie',l:'fr',a:'/en/hairline-transplant-turkey',t:'Greffe de ligne frontale en Turquie : dessin naturel et greffons | Cliniqeo Hair',d:'Greffe de ligne frontale en Turquie : hauteur, forme, irrégularités naturelles, golfes, angles, greffons simples, âge et évolution de la calvitie.',h:'Greffe de ligne frontale naturelle en Turquie',s:'La ligne frontale est la partie la plus visible d’une greffe. Son dessin doit être adapté au visage, à l’âge, à la réserve donneuse et à l’évolution probable de la perte.',k:['greffe ligne frontale turquie','ligne frontale naturelle greffe cheveux','greffe golfes cheveux','nombre greffons ligne frontale']},
  {p:'/greffe-vertex-turquie',l:'fr',a:'/en/crown-hair-transplant-turkey',t:'Greffe du vertex en Turquie : tonsure, spirale et greffons | Cliniqeo Hair',d:'Greffe du vertex ou de la tonsure en Turquie : nombre de greffons, spirale naturelle, densité, priorité avec la ligne frontale et délai de résultat.',h:'Greffe du vertex et de la tonsure en Turquie',s:'Le vertex couvre une grande surface et présente une orientation en spirale. Il peut consommer beaucoup de greffons et doit être planifié selon les priorités globales.',k:['greffe vertex turquie','greffe tonsure turquie','greffe vertex nombre greffons','résultat vertex greffe cheveux']},
  {p:'/greffe-sourcils-turquie',l:'fr',a:'/en/eyebrow-transplant-turkey',t:'Greffe de sourcils en Turquie : technique, prix et résultats | Cliniqeo Hair',d:'Greffe de sourcils en Turquie : causes de perte, dessin, FUE, greffons simples, orientation, entretien, séances et résultats avant/après.',h:'Greffe de sourcils en Turquie',s:'La greffe de sourcils utilise généralement des follicules du cuir chevelu. Le résultat dépend du dessin, des greffons simples et d’angles d’implantation très couchés.',k:['greffe sourcils turquie','implant sourcils istanbul','greffe sourcils avant après','prix greffe sourcils turquie']},
  {p:'/greffe-cheveux-cicatrice',l:'fr',a:'/en/hair-transplant-on-scar',t:'Greffe de cheveux sur cicatrice : indications et résultats | Cliniqeo Hair',d:'Greffe de cheveux sur une cicatrice du cuir chevelu, de la barbe ou des sourcils : vascularisation, test, densité, stabilité et limites.',h:'Greffe de cheveux sur une cicatrice',s:'Une greffe peut camoufler certaines cicatrices. La survie des greffons dépend notamment de la stabilité, de l’épaisseur et de la vascularisation du tissu cicatriciel.',k:['greffe cheveux cicatrice','implant cheveux sur cicatrice','greffe cicatrice FUT','alopécie cicatricielle greffe']},
  {p:'/deuxieme-greffe-cheveux-turquie',l:'fr',a:'/en/second-hair-transplant-turkey',t:'Deuxième greffe de cheveux en Turquie : délai et faisabilité | Cliniqeo Hair',d:'Deuxième greffe de cheveux en Turquie : pourquoi, quand, analyse de la zone donneuse, densification, vertex, correction et nombre de greffons restant.',h:'Deuxième greffe de cheveux en Turquie',s:'Une deuxième intervention peut densifier une zone, traiter le vertex, suivre l’évolution de la calvitie ou corriger un résultat. Sa faisabilité dépend de la réserve restante.',k:['deuxième greffe cheveux turquie','seconde greffe capillaire','densification après greffe','retouche greffe cheveux']},

  {p:'/en/sapphire-fue-hair-transplant-turkey',l:'en',a:'/fue-saphir-turquie',t:'Sapphire FUE Hair Transplant in Turkey: Technique and Cost | Cliniqeo Hair',d:'Complete guide to Sapphire FUE in Turkey: extraction, sapphire blades, channel creation, indications, limitations, recovery and pricing.',h:'Sapphire FUE Hair Transplant in Turkey',s:'Sapphire FUE combines individual follicular harvesting with recipient-site creation using a sapphire-type blade. Diagnosis and donor management remain essential.',k:['sapphire FUE Turkey','sapphire hair transplant Turkey','FUE sapphire cost Turkey','FUE hair transplant Istanbul']},
  {p:'/en/dhi-vs-fue-hair-transplant',l:'en',a:'/dhi-ou-fue',t:'DHI vs FUE Hair Transplant: Differences and Selection | Cliniqeo Hair',d:'Compare DHI and FUE hair transplantation: extraction, implantation, shaving, density, duration, recovery, price and patient selection.',h:'DHI vs FUE: Which Hair Transplant Technique?',s:'DHI and FUE often share the same harvesting principle. The main difference concerns recipient-site creation and the method used to place grafts.',k:['DHI vs FUE','difference between FUE and DHI','best hair transplant technique','DHI Turkey']},
  {p:'/en/no-shave-hair-transplant-turkey',l:'en',a:'/greffe-cheveux-sans-rasage-turquie',t:'No-Shave Hair Transplant in Turkey: Options and Limits | Cliniqeo Hair',d:'No-shave hair transplant in Turkey: unshaven FUE, partial shaving, long-hair FUE, eligibility, discretion, duration, cost and limitations.',h:'No-Shave Hair Transplant in Turkey',s:'A no-shave procedure may preserve appearance during recovery, but it takes longer and is not suitable for every area or graft count.',k:['no shave hair transplant Turkey','unshaven FUE Turkey','female hair transplant no shave','long hair FUE']},
  {p:'/en/hair-transplant-pain-anesthesia',l:'en',a:'/douleur-greffe-cheveux-anesthesie',t:'Hair Transplant Pain and Anaesthesia: What to Expect | Cliniqeo Hair',d:'Is a hair transplant painful? Local anaesthesia, injections, sensations during and after surgery, pain relief, risks and warning signs.',h:'Pain and Anaesthesia During Hair Transplantation',s:'Hair transplantation is usually performed under local anaesthesia. Initial injections may be uncomfortable; during surgery, pressure or movement is more common than sharp pain.',k:['hair transplant pain','hair transplant anesthesia','painless hair transplant Turkey','needle free anesthesia hair transplant']},
  {p:'/en/hair-transplant-donor-area',l:'en',a:'/zone-donneuse-greffe-cheveux',t:'Hair Transplant Donor Area: Density, Limits and Protection | Cliniqeo Hair',d:'Understand the donor area: density, safe donor zone, available grafts, overharvesting, scarring, beard grafts and second procedures.',h:'The Hair Transplant Donor Area',s:'The donor area is a limited reserve. Excessive or uneven extraction can create permanent visible thinning and reduce future options.',k:['hair transplant donor area','overharvested donor area','donor density','safe donor area']},
  {p:'/en/hair-transplant-repair-turkey',l:'en',a:'/reparer-greffe-cheveux-ratee',t:'Hair Transplant Repair in Turkey: Diagnosis and Options | Cliniqeo Hair',d:'Repair a poor hair transplant: unnatural hairline, wrong angles, low density, plugs, scars and donor damage. Learn corrective options and limits.',h:'How Can a Poor Hair Transplant Be Repaired?',s:'Correction does not always mean adding grafts. The first step is identifying the cause, assessing scars and measuring the remaining donor reserve.',k:['hair transplant repair Turkey','bad hair transplant correction','unnatural hairline repair','hair transplant revision']},
  {p:'/en/hair-transplant-aftercare',l:'en',a:'/soins-apres-greffe-cheveux',t:'Hair Transplant Aftercare: Washing, Exercise, Flying and Sun | Cliniqeo Hair',d:'Hair transplant aftercare guide: first wash, crusts, sleeping, hats, exercise, flying, sun exposure, medicines and warning signs.',h:'Hair Transplant Aftercare',s:'During the first days, priorities include protecting grafts, avoiding friction, following the washing protocol and recognising unusual symptoms.',k:['first wash after hair transplant','crusts after hair transplant','exercise after hair transplant','flying after hair transplant','sun after hair transplant']},
  {p:'/en/hairline-transplant-turkey',l:'en',a:'/greffe-ligne-frontale-turquie',t:'Hairline Transplant in Turkey: Natural Design and Graft Planning | Cliniqeo Hair',d:'Hairline transplant in Turkey: height, shape, natural irregularities, temple recession, angles, single-hair grafts, age and future loss.',h:'Natural Hairline Transplant in Turkey',s:'The hairline is the most visible part of a transplant. Design should reflect facial proportions, age, donor capacity and likely future loss.',k:['hairline transplant Turkey','natural hairline hair transplant','temple hair transplant','hairline graft count']},
  {p:'/en/crown-hair-transplant-turkey',l:'en',a:'/greffe-vertex-turquie',t:'Crown Hair Transplant in Turkey: Whorl and Graft Planning | Cliniqeo Hair',d:'Crown or vertex hair transplant in Turkey: graft count, natural whorl, density, priority versus frontal hairline and result timeline.',h:'Crown and Vertex Hair Transplant in Turkey',s:'The crown covers a broad surface and follows a whorl pattern. It can consume many grafts, so priority must be balanced against frontal and mid-scalp needs.',k:['crown hair transplant Turkey','vertex hair transplant Turkey','crown graft count','crown hair transplant results']},
  {p:'/en/eyebrow-transplant-turkey',l:'en',a:'/greffe-sourcils-turquie',t:'Eyebrow Transplant in Turkey: Technique, Cost and Results | Cliniqeo Hair',d:'Eyebrow transplant in Turkey: causes of loss, design, FUE, single-hair grafts, direction, maintenance, sessions and before-after results.',h:'Eyebrow Transplant in Turkey',s:'Eyebrow transplantation usually uses scalp follicles. Results depend heavily on design, single-hair graft selection and very flat implantation angles.',k:['eyebrow transplant Turkey','eyebrow restoration Istanbul','eyebrow transplant before after','eyebrow transplant cost Turkey']},
  {p:'/en/hair-transplant-on-scar',l:'en',a:'/greffe-cheveux-cicatrice',t:'Hair Transplant on Scar Tissue: Eligibility and Results | Cliniqeo Hair',d:'Hair transplantation over scalp, beard or eyebrow scars: blood supply, test sessions, density, disease stability, graft survival and limitations.',h:'Hair Transplantation on Scar Tissue',s:'Transplantation can camouflage selected scars. Graft survival depends on scar stability, tissue thickness and blood supply.',k:['hair transplant on scar','hair transplant FUT scar','beard scar hair transplant','scarring alopecia transplant']},
  {p:'/en/second-hair-transplant-turkey',l:'en',a:'/deuxieme-greffe-cheveux-turquie',t:'Second Hair Transplant in Turkey: Timing and Feasibility | Cliniqeo Hair',d:'Second hair transplant in Turkey: reasons, timing, donor reassessment, density improvement, crown work, correction and remaining graft supply.',h:'Second Hair Transplant in Turkey',s:'A second procedure may increase density, treat the crown, address progressive loss or refine a previous result. Feasibility depends mainly on remaining donor capacity.',k:['second hair transplant Turkey','hair transplant touch up','hair transplant density session','remaining donor grafts']},
];

const escapeHtml = (value) => value
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
    ? 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=82'
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
  const pointsTitle = isFr ? 'Recherches couvertes' : 'Search topics covered';
  const answerTitle = isFr ? 'Réponse essentielle' : 'Essential answer';
  const cta = isFr ? 'Demander un diagnostic capillaire gratuit' : 'Request a free hair assessment';
  const notice = isFr
    ? 'Ces informations sont générales et ne remplacent pas un diagnostic médical individuel.'
    : 'This general information does not replace an individual medical assessment.';
  return `<div id="root">
    <main style="font-family:Arial,sans-serif;color:#17324d;max-width:1080px;margin:0 auto;padding:48px 24px;line-height:1.65">
      <article>
        <header><p style="font-weight:700;color:#2f6bfc">Cliniqeo Hair</p><h1 style="font-size:clamp(2rem,5vw,3.6rem);line-height:1.1">${escapeHtml(page.h)}</h1><p style="font-size:1.2rem;color:#425466">${escapeHtml(page.s)}</p></header>
        <section><h2>${pointsTitle}</h2><ul>${page.k.map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul><p>${escapeHtml(page.d)}</p></section>
        <section><h2>${answerTitle}</h2><p>${escapeHtml(page.s)}</p></section>
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

console.log(`Prerendered ${pages.length} advanced SEO pages.`);
