import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const ORIGIN = 'https://cliniqeo-hair.vercel.app';
const shell = await readFile(join(DIST, 'index.html'), 'utf8');

const pages = [
  {
    lang: 'fr', variant: 'best', path: '/meilleure-clinique-greffe-cheveux-turquie', alternate: '/best-hair-transplant-clinic-turkey',
    title: 'Meilleure clinique greffe de cheveux Turquie : guide 2026 | Cliniqeo Hair',
    description: 'Comment choisir la meilleure clinique de greffe de cheveux en Turquie en 2026 : médecin, équipe, zone donneuse, FUE, DHI, avis, prix, sécurité et suivi.',
    h1: 'Meilleure clinique de greffe de cheveux en Turquie : comment choisir en 2026 ?',
    intro: 'La meilleure clinique de greffe de cheveux en Turquie n’est pas forcément la plus connue, la moins chère ou celle qui annonce le plus de greffons. Elle doit évaluer correctement votre alopécie, protéger la zone donneuse, proposer un dessin naturel et organiser un suivi accessible après votre retour.',
    answer: 'Pour identifier la meilleure clinique de greffe de cheveux en Turquie, vérifiez l’identité et le rôle du médecin, l’expérience réelle de l’équipe, la protection de la zone donneuse, la cohérence du nombre de greffons, la qualité des avant/après, la transparence du devis et le suivi postopératoire. Aucun classement universel ne remplace un diagnostic individuel.',
    focusTitle: 'Ce que signifie réellement « meilleure clinique »',
    focus: 'Le terme « meilleure » doit décrire une adéquation entre votre situation médicale et une équipe compétente. Une clinique adaptée à une petite correction de ligne frontale peut ne pas convenir à une alopécie avancée, des cheveux crépus, une greffe réparatrice ou une zone donneuse fragile.',
    keywords: ['meilleure clinique greffe de cheveux turquie','meilleure clinique capillaire turquie','meilleure clinique greffe cheveux istanbul','clinique greffe cheveux turquie fiable','meilleure greffe de cheveux turquie'],
  },
  {
    lang: 'fr', variant: 'team', path: '/meilleure-clinique-implant-cheveux-turquie', alternate: '/best-clinic-for-hair-transplant-turkey',
    title: 'Meilleure clinique pour implant cheveux Turquie : comparer les équipes | Cliniqeo Hair',
    description: 'Meilleure clinique pour implant cheveux en Turquie : comparez médecin, techniciens, protocole FUE ou DHI, greffons, résultats, hygiène et suivi.',
    h1: 'Meilleure clinique pour implant cheveux en Turquie : comparer les équipes et les protocoles',
    intro: 'Pour comparer les cliniques d’implant cheveux en Turquie, il faut dépasser les slogans FUE, DHI ou Saphir. La qualité dépend surtout de l’examen médical, de la répartition des rôles, de la manipulation des follicules, du dessin et du contrôle de chaque étape.',
    answer: 'La meilleure clinique pour implant cheveux en Turquie est celle qui explique précisément qui réalise le diagnostic, le dessin, l’anesthésie, l’extraction, l’ouverture des sites receveurs et l’implantation. Une équipe transparente justifie le nombre de greffons et présente des résultats comparables à votre profil.',
    focusTitle: 'Comparer le médecin et l’équipe, pas seulement la technique',
    focus: 'Deux établissements peuvent proposer la même appellation commerciale tout en ayant des protocoles très différents. Demandez quels actes sont réalisés ou supervisés par le médecin, combien de patients sont traités simultanément et comment les greffons sont comptés, triés, conservés et implantés.',
    keywords: ['meilleure clinique implant cheveux turquie','clinique implant cheveux turquie','meilleur implant cheveux turquie','équipe greffe cheveux istanbul','chirurgien implant cheveux turquie'],
  },
  {
    lang: 'fr', variant: 'checklist', path: '/meilleure-clinique-implant-capillaire-turquie', alternate: '/best-hair-implant-clinic-turkey',
    title: 'Meilleure clinique implant capillaire Turquie : checklist 2026 | Cliniqeo Hair',
    description: 'Checklist 2026 pour choisir une clinique d’implant capillaire en Turquie : documents, médecin, diagnostic, zone donneuse, devis, sécurité, hôtel et suivi.',
    h1: 'Meilleure clinique d’implant capillaire en Turquie : les points à vérifier avant de réserver',
    intro: 'Avant de réserver une greffe capillaire en Turquie, vérifiez les éléments médicaux, administratifs et logistiques par écrit. Une offre claire doit permettre de savoir qui intervient, ce qui est inclus, quelles sont les limites du plan et qui contacter après le retour.',
    answer: 'Avant de réserver, exigez un diagnostic préliminaire, l’identité du professionnel responsable, une estimation prudente des greffons, un devis détaillé, les inclusions et exclusions du forfait, les consignes préopératoires, les conditions d’annulation et un protocole de suivi écrit.',
    focusTitle: 'La checklist qui évite les mauvaises surprises',
    focus: 'Le prix et l’hôtel ne doivent jamais occuper plus de place que le diagnostic et la sécurité. Conservez les échanges, le devis, le programme et les consignes. Le plan définitif doit être confirmé sur place, car des photos seules ne montrent pas toujours précisément la densité et la miniaturisation.',
    keywords: ['meilleure clinique implant capillaire turquie','clinique implant capillaire turquie','choisir clinique greffe cheveux turquie','checklist greffe cheveux turquie','clinique capillaire istanbul fiable'],
  },
  {
    lang: 'en', variant: 'best', path: '/best-hair-transplant-clinic-turkey', alternate: '/meilleure-clinique-greffe-cheveux-turquie',
    title: 'Best Hair Transplant Clinic in Turkey: 2026 Selection Guide | Cliniqeo Hair',
    description: 'How to choose the best hair transplant clinic in Turkey in 2026: doctor, team, donor area, FUE, DHI, reviews, cost, safety and aftercare.',
    h1: 'Best Hair Transplant Clinic in Turkey: How to Choose in 2026',
    intro: 'The best hair transplant clinic in Turkey is not automatically the cheapest, the most advertised or the clinic promising the highest graft count. It should assess hair loss correctly, protect the donor area, design a natural result and provide accessible aftercare after you return home.',
    answer: 'To identify the best hair transplant clinic in Turkey, check the doctor’s identity and role, the team’s relevant experience, donor-area protection, realistic graft planning, comparable before-and-after evidence, quote transparency and postoperative follow-up. No universal ranking replaces an individual medical assessment.',
    focusTitle: 'What “best hair transplant clinic” should really mean',
    focus: '“Best” should describe the match between your medical needs and a competent team. A clinic suited to a small hairline procedure may not be the best choice for advanced hair loss, Afro-textured hair, repair surgery or a limited donor area.',
    keywords: ['best hair transplant clinic turkey','best hair transplant clinic in turkey','best hair clinic turkey','best hair transplant clinic istanbul','reliable hair transplant clinic turkey'],
  },
  {
    lang: 'en', variant: 'team', path: '/best-clinic-for-hair-transplant-turkey', alternate: '/meilleure-clinique-implant-cheveux-turquie',
    title: 'Best Clinic for Hair Transplant in Turkey: Compare Medical Teams | Cliniqeo Hair',
    description: 'Compare the best clinics for hair transplant in Turkey by doctor involvement, FUE or DHI protocol, graft handling, results, safety and aftercare.',
    h1: 'Best Clinic for Hair Transplant in Turkey: Comparing Teams and Protocols',
    intro: 'Comparing hair transplant clinics in Turkey requires more than choosing FUE, DHI or Sapphire. Quality depends on assessment, clearly assigned responsibilities, graft handling, hairline design and control of every clinical step.',
    answer: 'The best clinic for hair transplant in Turkey should explain who performs the assessment, design, anaesthesia, extraction, recipient-site creation and implantation. A transparent team should justify the graft estimate and show results genuinely comparable with your hair type and pattern of loss.',
    focusTitle: 'Compare the medical team, not only the technique name',
    focus: 'Two clinics may advertise the same technique while using very different protocols. Ask which steps are performed or supervised by the doctor, how many patients are treated at the same time and how grafts are counted, sorted, stored and implanted.',
    keywords: ['best clinic for hair transplant turkey','best clinic for hair transplant in turkey','hair transplant medical team turkey','best fue clinic turkey','best dhi clinic turkey'],
  },
  {
    lang: 'en', variant: 'checklist', path: '/best-hair-implant-clinic-turkey', alternate: '/meilleure-clinique-implant-capillaire-turquie',
    title: 'Best Hair Implant Clinic in Turkey: Checklist Before Booking | Cliniqeo Hair',
    description: '2026 checklist for choosing a hair implant clinic in Turkey: medical assessment, doctor, donor area, quote, safety, package, hotel and aftercare.',
    h1: 'Best Hair Implant Clinic in Turkey: What to Check Before Booking',
    intro: 'Before booking a hair implant procedure in Turkey, verify the medical, administrative and travel details in writing. A clear offer should identify who is responsible, what is included, the limits of the proposed plan and how follow-up will work after you travel home.',
    answer: 'Before booking, request a preliminary assessment, the responsible practitioner’s identity, conservative graft planning, an itemised quote, package inclusions and exclusions, preoperative instructions, cancellation terms and a written follow-up protocol.',
    focusTitle: 'A booking checklist that prevents avoidable surprises',
    focus: 'Price and hotel quality should never receive more attention than diagnosis and safety. Keep copies of messages, the quote, itinerary and instructions. The final plan should follow an in-person examination because photographs alone may not show donor density and miniaturisation accurately.',
    keywords: ['best hair implant clinic turkey','best hair restoration clinic turkey','choose hair transplant clinic turkey','hair transplant turkey checklist','safe hair transplant clinic istanbul'],
  },
];

const criteria = {
  fr: [
    ['Diagnostic médical individualisé','Recherche de la cause et de la stabilité de la chute, examen des zones donneuse et receveuse et revue des antécédents.'],
    ['Identité et rôle du médecin','Nom du professionnel responsable, étapes qu’il réalise ou supervise et disponibilité pour le suivi médical.'],
    ['Protection de la zone donneuse','Prélèvement réparti de manière prudente afin d’éviter un éclaircissement durable et de conserver des options futures.'],
    ['Nombre de greffons réaliste','Estimation reliée à la surface, au calibre, à la densité disponible et à la progression probable de la calvitie.'],
    ['Dessin naturel et durable','Hauteur, forme, irrégularités et angles adaptés au visage, à l’âge et à la réserve donneuse.'],
    ['Choix raisonné entre FUE et DHI','La technique est sélectionnée selon le cas et non présentée comme une solution universellement supérieure.'],
    ['Résultats comparables','Avant/après de patients proches de votre profil, avec dates, angles, lumière et longueur cohérents.'],
    ['Hygiène et sécurité','Questionnaire médical, protocole d’asepsie, analyses prévues, médicaments et consignes clairement organisés.'],
    ['Devis transparent','Actes, hôtel, nuits, transferts, interprétariat, produits, suivi, exclusions et conditions écrits.'],
    ['Communication compréhensible','Consentement, limites, risques, soins et signes d’alerte expliqués dans une langue maîtrisée.'],
    ['Suivi après le retour','Calendrier de photos, contact accessible et procédure claire en cas de symptôme inhabituel.'],
    ['Absence de promesse absolue','Explication des probabilités, limites biologiques et alternatives sans garantir une densité impossible à assurer.'],
  ],
  en: [
    ['Individual medical assessment','Investigation of the cause and stability of hair loss, donor and recipient examination and relevant medical history.'],
    ['Doctor identity and role','Named responsible practitioner, steps performed or supervised and availability for medical follow-up.'],
    ['Donor-area protection','Conservative, evenly distributed harvesting to avoid lasting thinning and preserve future options.'],
    ['Realistic graft planning','An estimate linked to surface area, hair calibre, donor density and likely progression of hair loss.'],
    ['Natural, durable design','Hairline height, shape, irregularities and angles adapted to the face, age and donor supply.'],
    ['Reasoned FUE or DHI selection','Technique selected for the case rather than marketed as universally superior.'],
    ['Comparable results','Before-and-after cases similar to your profile with consistent dates, angles, lighting and hair length.'],
    ['Hygiene and safety','Medical questionnaire, asepsis, planned tests, medicines and instructions organised clearly.'],
    ['Transparent quotation','Treatment, hotel, nights, transfers, interpreting, products, follow-up, exclusions and terms in writing.'],
    ['Communication you understand','Consent, limitations, risks, aftercare and warning signs explained in a language you understand.'],
    ['Follow-up after returning home','A planned photo schedule, accessible contact and clear process for unusual symptoms.'],
    ['No absolute promises','Probability, biological limits and alternatives explained without guaranteeing an outcome that cannot be assured.'],
  ],
};

const sections = {
  fr: [
    ['Le diagnostic passe avant le forfait', [
      'Une greffe ne consiste pas seulement à remplir une zone dégarnie. L’équipe doit identifier le type d’alopécie, sa progression, la miniaturisation des cheveux existants et les causes médicales éventuelles. Chez certains patients, un traitement ou une période d’observation peut être préférable avant la chirurgie.',
      'Les photographies permettent une première estimation, mais l’examen sur place reste important pour apprécier la densité, le calibre, la peau et les caractéristiques de la zone donneuse. Une équipe sérieuse peut modifier ou refuser le plan initial si l’examen révèle un risque.'
    ]],
    ['Qui réalise réellement chaque étape ?', [
      'Le parcours comprend consultation, dessin, anesthésie, extraction, préparation des greffons, création des sites receveurs, implantation et contrôle. Le patient doit connaître la répartition des tâches et le niveau de supervision.',
      'Le volume quotidien est également pertinent. Une organisation qui traite trop de patients simultanément peut réduire le temps consacré au diagnostic, au dessin et au contrôle. L’essentiel est qu’une équipe compétente reste disponible pour chaque patient.'
    ]],
    ['La zone donneuse est une réserve limitée', [
      'Les follicules prélevés ne repoussent pas dans la zone donneuse. La sécurité dépend donc du nombre prélevé, de la répartition, du diamètre du punch, de l’espacement et des caractéristiques individuelles.',
      'Une stratégie prudente conserve des ressources pour l’évolution future de la calvitie. Le vertex peut consommer beaucoup de greffons ; il faut parfois prioriser la ligne frontale et le dessus plutôt que promettre une couverture complète en une séance.'
    ]],
    ['Prix, forfait tout compris et transparence', [
      'Un forfait peut simplifier le séjour, mais il ne doit pas masquer le contenu médical. Vérifiez les nuits, la chambre, les transferts, l’interprète, les analyses, les médicaments, le kit, le premier lavage et le suivi. Le vol est généralement séparé sauf mention écrite.',
      'Le prix final doit correspondre à un devis et à une confirmation médicale. Les conditions d’une éventuelle modification doivent être expliquées avant le voyage afin d’éviter toute pression commerciale le jour de l’intervention.'
    ]],
    ['Sécurité, consentement et suivi', [
      'Le questionnaire médical doit couvrir traitements, allergies, antécédents, tabac, coagulation et maladies pertinentes. Le consentement doit expliquer les effets temporaires, les complications possibles, les limites et les alternatives.',
      'Après le retour, un suivi structuré prévoit des photos à des étapes définies et une procédure en cas de douleur croissante, fièvre, écoulement, rougeur étendue ou symptôme inhabituel. Les consignes de l’équipe médicale priment sur les guides généraux.'
    ]],
  ],
  en: [
    ['Assessment comes before the package', [
      'A transplant is not simply a matter of filling an empty area. The team should identify the pattern and progression of hair loss, miniaturisation of existing hair and possible medical causes. For some patients, treatment or observation may be preferable before surgery.',
      'Photographs support a preliminary estimate, but in-person examination remains important for evaluating density, calibre, skin and donor characteristics. A responsible team may modify or decline the initial plan if examination identifies a risk.'
    ]],
    ['Who actually performs each stage?', [
      'The pathway includes consultation, design, anaesthesia, extraction, graft preparation, recipient-site creation, implantation and review. Patients should understand how responsibilities are assigned and supervised.',
      'Daily patient volume also matters. Treating too many patients simultaneously may reduce time for assessment, design and quality control. The key issue is whether a competent team remains available for every patient.'
    ]],
    ['The donor area is a limited resource', [
      'Extracted follicles do not regrow in the donor area. Safety therefore depends on the number removed, distribution, punch size, spacing and individual characteristics.',
      'Conservative planning preserves resources for future progression. The crown may require many grafts, so it may be wiser to prioritise the hairline and mid-scalp rather than promise complete coverage in one session.'
    ]],
    ['Price, all-inclusive packages and transparency', [
      'A package can simplify travel, but it should not hide the medical content. Confirm hotel nights, room, transfers, interpreting, tests, medicines, care kit, first wash and follow-up. Flights are generally separate unless included in writing.',
      'The final price should correspond to a written quote and medical confirmation. Conditions for any change should be explained before travel to avoid commercial pressure on the day of treatment.'
    ]],
    ['Safety, consent and follow-up', [
      'Medical screening should cover medicines, allergies, relevant conditions, smoking and bleeding risks. Consent should explain temporary effects, possible complications, limitations and alternatives.',
      'After returning home, structured follow-up uses photographs at planned intervals and a process for increasing pain, fever, discharge, spreading redness or unusual symptoms. Instructions from the medical team take priority over general guides.'
    ]],
  ],
};

const redFlags = {
  fr: ['Nombre très élevé de greffons annoncé avec quelques photos','Identité du médecin absente ou rôle de l’équipe vague','Garantie absolue de repousse ou de densité','Pression pour payer immédiatement un acompte','Avant/après non comparables','Refus d’expliquer la réserve donneuse','Forfait sans inclusions et exclusions écrites','Aucun protocole clair de suivi après le retour'],
  en: ['A very high graft count promised from a few photographs','No named doctor or vague team responsibilities','Absolute guarantees of growth or density','Pressure to pay a deposit immediately','Non-comparable before-and-after images','Refusal to discuss donor reserve','Package without written inclusions and exclusions','No clear follow-up protocol after returning home'],
};

const faq = {
  fr: [
    ['Quelle est la meilleure clinique de greffe de cheveux en Turquie ?','Il n’existe pas de réponse universelle. La meilleure clinique pour un patient est celle qui répond à son diagnostic, protège sa zone donneuse, présente une équipe transparente et propose un suivi réaliste.'],
    ['Comment vérifier une clinique de greffe de cheveux en Turquie ?','Vérifiez le nom du professionnel responsable, les rôles de l’équipe, le diagnostic, le protocole, les résultats comparables, le devis, les documents médicaux et le suivi.'],
    ['FUE Saphir ou DHI : quelle technique est la meilleure ?','Aucune n’est meilleure dans tous les cas. Le choix dépend de la zone, du rasage, du plan de greffons, des cheveux existants et de l’expérience de l’équipe.'],
    ['Un grand nombre de greffons signifie-t-il un meilleur résultat ?','Non. Un prélèvement excessif peut abîmer la zone donneuse. La répartition, la survie folliculaire, le dessin et les caractéristiques des cheveux comptent aussi.'],
    ['Peut-on choisir une clinique uniquement avec les avis ?','Non. Les avis doivent être recoupés avec des résultats documentés, l’identité des praticiens, la transparence du protocole et la qualité du suivi.'],
    ['Le diagnostic par photos est-il définitif ?','Non. Les photos permettent une première estimation. Le plan définitif doit être confirmé après examen direct de la densité, du calibre, de la miniaturisation et de la peau.'],
    ['Quand voit-on le résultat final ?','La repousse commence progressivement après une possible chute transitoire. Une évaluation se fait souvent vers douze mois, parfois plus tard pour le vertex.'],
    ['Une clinique peut-elle garantir le résultat ?','Une clinique peut s’engager sur son protocole et son suivi, mais pas garantir de manière absolue une réponse biologique ou une densité précise.'],
  ],
  en: [
    ['What is the best hair transplant clinic in Turkey?','There is no universal answer. The best clinic for an individual patient matches the diagnosis, protects the donor area, uses a transparent team and provides realistic follow-up.'],
    ['How can I verify a hair transplant clinic in Turkey?','Check the responsible practitioner, team roles, assessment process, clinical protocol, comparable results, quotation, medical documents and aftercare.'],
    ['Is Sapphire FUE or DHI better?','Neither is best in every case. Selection depends on the treatment area, shaving preference, graft plan, existing hair and team experience.'],
    ['Does a higher graft count mean a better result?','No. Excessive harvesting may damage the donor area. Distribution, follicle survival, design and hair characteristics also matter.'],
    ['Can I choose a clinic from reviews alone?','No. Reviews should be cross-checked with documented results, practitioner identity, protocol transparency and follow-up quality.'],
    ['Is a photographic assessment final?','No. Photographs support a preliminary estimate. The final plan should follow direct examination of density, calibre, miniaturisation and scalp condition.'],
    ['When is the final result visible?','Growth develops gradually after possible temporary shedding. Assessment is often made around twelve months and may take longer for the crown.'],
    ['Can a clinic guarantee the result?','A clinic may commit to its protocol and follow-up, but it cannot absolutely guarantee a biological response or precise density.'],
  ],
};

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const relatedFor = (page) => pages
  .filter((item) => item.lang === page.lang && item.path !== page.path)
  .map((item) => `<a href="${item.path}" style="display:block;background:white;border:1px solid #dbe5f0;border-radius:14px;padding:20px;text-decoration:none;color:#224671"><strong>${escapeHtml(item.h1)}</strong><br><span style="color:#52667a">${escapeHtml(item.description)}</span></a>`)
  .join('');

for (const page of pages) {
  const isFr = page.lang === 'fr';
  const canonical = `${ORIGIN}${page.path}`;
  const alternateUrl = `${ORIGIN}${page.alternate}`;
  const guide = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';
  const contact = isFr ? '/contact' : '/en/contact';

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faq[page.lang].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  const pageSchema = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: page.h1, headline: page.h1,
    description: page.description, url: canonical, inLanguage: page.lang, dateModified: '2026-08-01',
    about: { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' },
    publisher: { '@type': 'Organization', name: 'Cliniqeo Hair', url: ORIGIN },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `${ORIGIN}${isFr ? '/' : '/en'}` },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Guides greffe de cheveux' : 'Hair transplant guides', item: `${ORIGIN}${guide}` },
      { '@type': 'ListItem', position: 3, name: page.h1, item: canonical },
    ],
  };

  const head = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="keywords" content="${escapeHtml(page.keywords.join(', '))}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${page.lang}" href="${canonical}">
    <link rel="alternate" hreflang="${isFr ? 'en' : 'fr'}" href="${alternateUrl}">
    <link rel="alternate" hreflang="x-default" href="${isFr ? alternateUrl : canonical}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Cliniqeo Hair">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${ORIGIN}/home.cliniqeo.hair.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="${ORIGIN}/home.cliniqeo.hair.jpg">
    <script type="application/ld+json">${JSON.stringify([pageSchema, faqSchema, breadcrumbSchema])}</script>`;

  const criteriaHtml = criteria[page.lang].map(([title, text], index) => `
    <section style="background:#f8fafc;border:1px solid #dbe5f0;border-radius:14px;padding:20px">
      <p style="margin:0 0 8px;color:#2f6bfc;font-weight:800">${index + 1}</p>
      <h3 style="margin:0 0 10px;font-size:20px;color:#224671">${escapeHtml(title)}</h3>
      <p style="margin:0;color:#475569">${escapeHtml(text)}</p>
    </section>`).join('');

  const sectionsHtml = sections[page.lang].map(([title, paragraphs], index) => `
    <section id="section-${index + 1}" style="margin-top:48px">
      <h2 style="font-size:30px;color:#224671;margin-bottom:14px">${index + 1}. ${escapeHtml(title)}</h2>
      ${paragraphs.map((paragraph) => `<p style="font-size:18px;line-height:1.8;color:#475569">${escapeHtml(paragraph)}</p>`).join('')}
    </section>`).join('');

  const redFlagsHtml = redFlags[page.lang].map((item) => `<li style="background:white;border:1px solid #fecaca;border-radius:12px;padding:15px">${escapeHtml(item)}</li>`).join('');
  const faqHtml = faq[page.lang].map(([q, a]) => `<section style="border-bottom:1px solid #dbe5f0;padding:20px 0"><h3 style="font-size:21px;color:#224671;margin:0 0 8px">${escapeHtml(q)}</h3><p style="margin:0;color:#475569;line-height:1.75">${escapeHtml(a)}</p></section>`).join('');

  const body = `<div id="root">
    <main style="font-family:Arial,sans-serif;color:#17324d;background:white;line-height:1.65">
      <article>
        <header style="position:relative;background:#0f172a;color:white;padding:88px 24px;overflow:hidden">
          <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,23,42,.98),rgba(15,23,42,.82),rgba(15,23,42,.45)),url('/home.cliniqeo.hair.jpg') center/cover no-repeat"></div>
          <div style="position:relative;max-width:1120px;margin:0 auto">
            <p style="font-weight:800;color:#6EC1E4;text-transform:uppercase;letter-spacing:.14em">${isFr ? 'Guide de sélection médicale et pratique' : 'Medical and practical clinic-selection guide'}</p>
            <h1 style="font-size:clamp(2.4rem,6vw,4.2rem);line-height:1.08;max-width:1000px;margin:14px 0 22px">${escapeHtml(page.h1)}</h1>
            <p style="font-size:20px;line-height:1.75;max-width:900px;color:#e2e8f0">${escapeHtml(page.intro)}</p>
            <p><a href="${contact}" style="display:inline-block;background:#6EC1E4;color:#17324d;text-decoration:none;padding:15px 22px;border-radius:10px;font-weight:800">${isFr ? 'Demander une analyse capillaire' : 'Request a hair assessment'}</a></p>
          </div>
        </header>

        <section style="background:#eff6ff;border-bottom:1px solid #dbeafe;padding:42px 24px">
          <div style="max-width:980px;margin:0 auto;background:white;border:1px solid #bfdbfe;border-radius:16px;padding:28px">
            <h2 style="font-size:28px;color:#224671;margin:0 0 12px">${isFr ? 'Réponse directe' : 'Direct answer'}</h2>
            <p style="font-size:19px;line-height:1.8;color:#334155;margin:0">${escapeHtml(page.answer)}</p>
          </div>
        </section>

        <div style="max-width:1120px;margin:0 auto;padding:60px 24px">
          <nav aria-label="${isFr ? 'Sommaire' : 'Contents'}" style="background:#f8fafc;border:1px solid #dbe5f0;border-radius:14px;padding:22px;margin-bottom:48px">
            <strong>${isFr ? 'Dans ce guide' : 'In this guide'}</strong>
            <ol style="columns:2;line-height:2;margin-bottom:0">
              ${sections[page.lang].map(([title], index) => `<li><a href="#section-${index + 1}" style="color:#2f6bfc">${escapeHtml(title)}</a></li>`).join('')}
            </ol>
          </nav>

          <section>
            <h2 style="font-size:34px;color:#224671;margin-bottom:14px">${escapeHtml(page.focusTitle)}</h2>
            <p style="font-size:19px;line-height:1.8;color:#475569">${escapeHtml(page.focus)}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:30px">${criteriaHtml}</div>
          </section>

          <section style="margin-top:58px">
            <h2 style="font-size:34px;color:#224671">${isFr ? 'Comment comparer deux cliniques ?' : 'How should two clinics be compared?'}</h2>
            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;min-width:760px;background:white;border:1px solid #dbe5f0">
                <thead style="background:#224671;color:white"><tr><th style="padding:14px;text-align:left">${isFr ? 'Point' : 'Point'}</th><th style="padding:14px;text-align:left">${isFr ? 'Réponse insuffisante' : 'Weak answer'}</th><th style="padding:14px;text-align:left">${isFr ? 'Réponse rassurante' : 'Reassuring answer'}</th></tr></thead>
                <tbody>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Greffons' : 'Grafts'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Même chiffre pour tous' : 'Same number for everyone'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Estimation liée au diagnostic' : 'Estimate linked to assessment'}</td></tr>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Médecin' : 'Doctor'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Identité et rôle vagues' : 'Identity and role unclear'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Nom et étapes précis' : 'Named practitioner and defined steps'}</td></tr>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Technique' : 'Technique'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'DHI toujours supérieure' : 'DHI always superior'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Choix selon le cas' : 'Selection according to case'}</td></tr>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Résultats' : 'Results'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Photos marketing' : 'Marketing images'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Cas comparables et datés' : 'Comparable, dated cases'}</td></tr>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Prix' : 'Price'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Total sans détail' : 'Total with no detail'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Devis avec exclusions' : 'Quote with exclusions'}</td></tr>
                  <tr><th style="padding:14px;border-top:1px solid #dbe5f0;text-align:left">${isFr ? 'Suivi' : 'Aftercare'}</th><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Contact non défini' : 'Undefined contact'}</td><td style="padding:14px;border-top:1px solid #dbe5f0">${isFr ? 'Calendrier et procédure' : 'Schedule and escalation process'}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          ${sectionsHtml}
        </div>

        <section style="background:#fef2f2;border-top:1px solid #fecaca;border-bottom:1px solid #fecaca;padding:55px 24px">
          <div style="max-width:1120px;margin:0 auto"><h2 style="font-size:34px;color:#7f1d1d">${isFr ? 'Signaux d’alerte avant de réserver' : 'Warning signs before booking'}</h2><ul style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;padding:0;list-style:none">${redFlagsHtml}</ul></div>
        </section>

        <section style="max-width:980px;margin:0 auto;padding:60px 24px">
          <h2 style="font-size:34px;color:#224671">${isFr ? 'Questions fréquentes' : 'Frequently asked questions'}</h2>
          ${faqHtml}
        </section>

        <section style="background:#f8fafc;padding:55px 24px">
          <div style="max-width:1120px;margin:0 auto"><h2 style="font-size:32px;color:#224671">${isFr ? 'Guides complémentaires' : 'Related guides'}</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px">${relatedFor(page)}</div><p style="margin-top:26px"><a href="${guide}" style="color:#2f6bfc;font-weight:800">${isFr ? 'Voir tous les guides' : 'View all guides'}</a></p></div>
        </section>

        <footer style="background:linear-gradient(135deg,#224671,#2f6bfc);color:white;padding:60px 24px;text-align:center">
          <div style="max-width:800px;margin:0 auto"><h2 style="font-size:36px">${isFr ? 'Recevez une première analyse de votre situation' : 'Request an initial assessment of your case'}</h2><p style="font-size:19px;color:#e0f2fe">${isFr ? 'La faisabilité, la technique et le nombre de greffons restent soumis à confirmation médicale.' : 'Eligibility, technique and graft count remain subject to medical confirmation.'}</p><a href="${contact}" style="display:inline-block;background:white;color:#224671;text-decoration:none;padding:16px 24px;border-radius:10px;font-weight:800">${isFr ? 'Demander mon analyse' : 'Request my assessment'}</a></div>
        </footer>
      </article>
    </main>
  </div>`;

  const html = shell
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${page.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '')
    .replace('</head>', `${head}\n  </head>`)
    .replace(/<div\s+id=["']root["']><\/div>/i, body);

  const route = page.path.replace(/^\//, '');
  const flatPath = join(DIST, `${route}.html`);
  const indexPath = join(DIST, route, 'index.html');
  await mkdir(dirname(flatPath), { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Prerendered ${pages.length} dedicated best-clinic pages in French and English.`);
