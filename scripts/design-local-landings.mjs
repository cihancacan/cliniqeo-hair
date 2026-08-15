import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const source = await readFile(join(root, 'src', 'config', 'localSeoData.ts'), 'utf8');

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

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const hash = (value) => [...value].reduce((total, character) => total + character.charCodeAt(0), 0);
const pathFor = (country, keyword, city) => country === 'fr' ? `/${keyword.slug}-${city.slug}` : `/en/${country}/${keyword.slug}-${city.slug}`;
const cityLabel = (country, city) => country === 'us' ? `${city.name}, ${city.region}` : city.name;

const intentCopy = {
  fr: {
    complete: {
      title: 'Greffe de cheveux',
      subtitle: 'Comparez une greffe près de chez vous avec une prise en charge complète à Istanbul',
      intro: 'Vous recherchez une greffe de cheveux près de chez vous. Avant de choisir, comparez le prix total, le rôle du médecin, la protection de la zone donneuse, le séjour et le suivi sur douze mois.',
      section: 'Ce qui détermine réellement la réussite d’une greffe de cheveux',
      answer: 'Le résultat dépend d’abord du diagnostic, du capital donneur, du dessin de la ligne frontale et de la répartition des greffons. Le nombre annoncé ne suffit jamais à juger la qualité d’un protocole.',
      points: ['Diagnostic de la zone donneuse', 'Plan adapté à l’évolution de la calvitie', 'Ligne frontale naturelle', 'Suivi photographique jusqu’à maturation'],
    },
    technique: {
      title: 'Greffe capillaire',
      subtitle: 'FUE Saphir ou DHI : une technique choisie selon votre profil, pas selon une publicité',
      intro: 'Une greffe capillaire doit commencer par une analyse de la surface à traiter, de la densité donneuse, du calibre des cheveux et de l’évolution probable de la chute.',
      section: 'FUE Saphir ou DHI : comment choisir la bonne technique ?',
      answer: 'La FUE Saphir et la DHI sont deux méthodes d’implantation possibles. Le choix dépend du nombre de greffons, de la zone à traiter, du rasage accepté et de la densité existante.',
      points: ['Technique décidée après diagnostic', 'Manipulation soigneuse des greffons', 'Angles et directions naturels', 'Protection du stock donneur'],
    },
    implant: {
      title: 'Implant capillaire',
      subtitle: 'Comprendre l’implantation folliculaire avant de comparer les offres',
      intro: 'Le terme implant capillaire désigne généralement le transfert de vos propres follicules depuis la zone donneuse vers les zones clairsemées ou dégarnies.',
      section: 'Comment obtenir un résultat d’implant capillaire naturel ?',
      answer: 'Les follicules simples sont placés sur la première ligne, les unités multiples derrière pour créer du volume. L’orientation, l’angle et la progression de densité doivent respecter la pousse naturelle.',
      points: ['Follicules simples en première ligne', 'Densité progressive', 'Orientation personnalisée', 'Plan conservateur pour l’avenir'],
    },
    price: {
      title: 'Prix greffe cheveux',
      subtitle: 'Comparez le vrai coût : intervention, hôtel, transferts, suivi et paiement en 10 fois',
      intro: 'Le prix d’une greffe de cheveux doit être comparé à prestation équivalente. Un prix d’appel sans hôtel, transferts, médicaments ou suivi n’est pas comparable à un forfait complet.',
      section: 'Comment comparer correctement le prix d’une greffe de cheveux ?',
      answer: 'Demandez le prix total écrit, le nombre de nuits, les transferts inclus, la technique, le rôle du médecin, les médicaments, le premier lavage et le suivi. Le paiement en 10 fois peut être proposé sous réserve d’acceptation.',
      points: ['Prix total avant réservation', 'Prestations détaillées par écrit', 'Aucun poste essentiel oublié', 'Paiement en 10 fois selon éligibilité'],
    },
    clinic: {
      title: 'Clinique greffe cheveux',
      subtitle: 'Comparez la responsabilité médicale, le protocole et le suivi avant de réserver',
      intro: 'Chercher une clinique de greffe de cheveux près de chez soi est logique. La proximité ne remplace toutefois pas la transparence sur le médecin, l’équipe, la zone donneuse et le suivi.',
      section: 'Comment reconnaître une clinique de greffe de cheveux sérieuse ?',
      answer: 'Une structure sérieuse explique qui diagnostique, qui dessine la ligne frontale, qui réalise chaque étape, combien de patients sont traités le même jour et comment le suivi est assuré.',
      points: ['Médecin et responsabilités identifiés', 'Protocole expliqué avant réservation', 'Nombre de patients quotidien raisonnable', 'Suivi accessible après le retour'],
    },
  },
  en: {
    complete: {
      title: 'Hair transplant',
      subtitle: 'Compare local treatment with a fully coordinated Istanbul medical journey',
      intro: 'Searching for a hair transplant near you usually means you want clear pricing, medical responsibility and accessible follow-up. Compare those points with a coordinated Istanbul option before booking.',
      section: 'What actually determines a successful hair transplant?',
      answer: 'A responsible outcome depends on donor capacity, future hair-loss progression, hairline design and realistic graft distribution. A headline graft number alone does not define quality.',
      points: ['Donor-area assessment', 'Planning for future hair loss', 'Natural hairline design', 'Structured follow-up through maturation'],
    },
    technique: {
      title: 'Hair restoration',
      subtitle: 'Compare FUE, Sapphire FUE and DHI according to your individual case',
      intro: 'Hair restoration should start with assessment of donor density, recipient area, hair calibre, shaving preference and the likely progression of hair loss.',
      section: 'FUE, Sapphire FUE or DHI: how should the technique be selected?',
      answer: 'Technique should follow diagnosis. The right approach depends on graft requirements, existing hair, the area to cover and the clinical workflow used by the team.',
      points: ['Technique selected after assessment', 'Careful graft handling', 'Natural angle and direction', 'Long-term donor preservation'],
    },
    implant: {
      title: 'Hair implants',
      subtitle: 'Understand follicular implantation before comparing providers',
      intro: 'Hair implants generally refers to transplantation of your own follicular units from the donor area to thinning or bald areas.',
      section: 'How is a natural hair implant result planned?',
      answer: 'Single-hair grafts are placed at the frontal edge, while multi-hair units build density behind. Direction, angle and density progression must follow the patient’s natural pattern.',
      points: ['Single-hair grafts at the front', 'Progressive density', 'Personalised direction', 'Conservative donor planning'],
    },
    price: {
      title: 'Hair transplant cost',
      subtitle: 'Compare the complete cost: procedure, hotel, transfers, aftercare and travel',
      intro: 'A useful hair transplant cost comparison includes the procedure, medical team, technique, accommodation, transfers, medication and postoperative follow-up.',
      section: 'How should complete hair transplant costs be compared?',
      answer: 'Ask for a written total, named medical responsibilities, accommodation nights, transfers, medication, first wash, aftercare and cancellation terms before paying a deposit.',
      points: ['Written total cost', 'Clear inclusions and exclusions', 'Travel budget considered', 'Aftercare process confirmed'],
    },
    clinic: {
      title: 'Hair transplant clinic',
      subtitle: 'Compare medical responsibility, donor safety and aftercare before booking',
      intro: 'A local clinic may offer convenience, but location should not be the only selection criterion. Check clinician identity, daily patient volume, donor planning and follow-up access.',
      section: 'How should a hair transplant clinic be assessed?',
      answer: 'Patients should know who diagnoses them, who designs the hairline, who performs each stage and who remains available during recovery.',
      points: ['Named clinician and responsibilities', 'Documented medical protocol', 'Reasonable daily patient volume', 'Accessible postoperative follow-up'],
    },
  },
};

function localPriceData(country) {
  if (country === 'fr') {
    return {
      localTitle: 'Clinique locale en France',
      localPrimary: '6 000€ à 8 000€',
      localSecondary: '8 000€ à 12 000€',
      localNote: 'Fourchettes indicatives pour environ 3 000 greffons selon la technique et la clinique.',
      primaryLabel: 'FUE ≈ 3 000 greffons',
      secondaryLabel: 'DHI ≈ 3 000 greffons',
      sourceNote: 'Les tarifs locaux varient selon la ville, le nombre de greffons et le protocole. Un devis individuel reste indispensable.',
    };
  }
  if (country === 'uk') {
    return {
      localTitle: 'Local UK clinic',
      localPrimary: '£1,000 to £30,000',
      localSecondary: 'Case-dependent quote',
      localNote: 'The NHS states that UK hair transplant costs can vary widely according to hair loss, procedure and clinic.',
      primaryLabel: 'Published UK range',
      secondaryLabel: 'FUE or DHI plan',
      sourceNote: 'Local prices vary by graft requirement, procedure and provider. Always request a written personalised quotation.',
    };
  }
  return {
    localTitle: 'Local US clinic',
    localPrimary: '$6,000 to $10,000',
    localSecondary: '$12,000 to $15,000',
    localNote: 'Indicative US ranges for small-to-medium and larger cases, with final cost depending on graft requirements.',
    primaryLabel: 'Small or medium case',
    secondaryLabel: 'Larger case',
    sourceNote: 'Local prices vary by graft requirement, surgeon and region. Always request a written personalised quotation.',
  };
}

function navigation(isFr, whatsappUrl) {
  const base = isFr ? '' : '/en';
  const items = isFr
    ? [['Accueil', '/'], ['Techniques', '/techniques'], ['Tarifs', '/tarifs'], ['Pourquoi la Turquie', '/turquie'], ['Avant / Après', '/greffe-cheveux/avant-apres'], ['À propos', '/a-propos'], ['FAQ', '/faq']]
    : [['Home', '/en'], ['Techniques', '/en/techniques'], ['Pricing', '/en/pricing'], ['Why Turkey', '/en/why-turkey'], ['Before / After', '/en/before-after'], ['About', '/en/about'], ['FAQ', '/en/faq']];
  return `
    <header class="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="${base || '/'}" class="flex items-baseline no-underline" aria-label="Cliniqeo Hair">
          <span class="text-2xl font-bold lowercase text-[#224671]">cliniqeo</span><span class="ml-1 text-base font-semibold uppercase text-[#2f6bfc]">Hair</span>
        </a>
        <nav class="hidden items-center gap-5 lg:flex" aria-label="${isFr ? 'Navigation principale' : 'Main navigation'}">
          ${items.map(([label, href]) => `<a href="${href}" class="font-medium text-[#224671] no-underline transition-colors hover:text-[#2f6bfc]">${label}</a>`).join('')}
        </nav>
        <div class="hidden items-center gap-4 lg:flex">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-[#224671] no-underline"><span class="text-[#25D366]">●</span> WhatsApp<br><span class="text-xs font-normal text-slate-500">+33 7 56 97 85 83</span></a>
          <a href="#diagnostic-form" class="rounded-lg bg-[#2f6bfc] px-5 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#224671]">${isFr ? 'Diagnostic gratuit' : 'Free assessment'}</a>
        </div>
        <button id="local-menu-button" type="button" class="rounded-lg p-2 text-[#224671] lg:hidden" aria-expanded="false" aria-controls="local-mobile-menu" aria-label="Menu">
          <span class="block h-0.5 w-7 bg-current"></span><span class="mt-1.5 block h-0.5 w-7 bg-current"></span><span class="mt-1.5 block h-0.5 w-7 bg-current"></span>
        </button>
      </div>
      <div id="local-mobile-menu" class="hidden border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
        <nav class="space-y-1">${items.map(([label, href]) => `<a href="${href}" class="block rounded-lg px-3 py-2 font-medium text-[#224671] no-underline hover:bg-blue-50">${label}</a>`).join('')}</nav>
        <div class="mt-4 grid gap-2"><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="rounded-lg bg-[#25D366] px-5 py-3 text-center font-bold text-white no-underline">WhatsApp</a><a href="#diagnostic-form" class="rounded-lg bg-[#2f6bfc] px-5 py-3 text-center font-bold text-white no-underline">${isFr ? 'Diagnostic gratuit' : 'Free assessment'}</a></div>
      </div>
    </header>`;
}

function footer(isFr, whatsappUrl) {
  return `
    <footer class="bg-[#224671] text-white">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-3">
          <div><div class="mb-4 flex items-baseline"><span class="text-2xl font-bold lowercase">cliniqeo</span><span class="ml-1 text-base font-semibold uppercase text-[#6EC1E4]">Hair</span></div><p class="leading-relaxed text-slate-300">${isFr ? 'Organisation de séjours pour greffe de cheveux en Turquie, avec accompagnement francophone avant, pendant et après le traitement.' : 'Hair transplant travel coordination in Turkey, with English-speaking support before, during and after treatment.'}</p></div>
          <div><h2 class="mb-4 text-xl font-bold">${isFr ? 'Liens rapides' : 'Quick links'}</h2><ul class="space-y-2 text-slate-300"><li><a href="${isFr ? '/' : '/en'}" class="hover:text-[#6EC1E4]">${isFr ? 'Accueil' : 'Home'}</a></li><li><a href="${isFr ? '/techniques' : '/en/techniques'}" class="hover:text-[#6EC1E4]">Techniques</a></li><li><a href="${isFr ? '/tarifs' : '/en/pricing'}" class="hover:text-[#6EC1E4]">${isFr ? 'Tarifs' : 'Pricing'}</a></li><li><a href="${isFr ? '/faq' : '/en/faq'}" class="hover:text-[#6EC1E4]">FAQ</a></li><li><a href="#diagnostic-form" class="hover:text-[#6EC1E4]">${isFr ? 'Diagnostic gratuit' : 'Free assessment'}</a></li></ul></div>
          <div><h2 class="mb-4 text-xl font-bold">Contact</h2><ul class="space-y-3 text-slate-300"><li><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="font-semibold hover:text-white">+33 7 56 97 85 83</a><p class="mt-1 text-xs text-slate-400">${isFr ? 'Appels uniquement via WhatsApp' : 'Calls available only through WhatsApp'}</p></li><li><a href="mailto:info@cliniqeo.com" class="hover:text-white">info@cliniqeo.com</a></li><li>Paris, France<br>Istanbul, Türkiye</li></ul></div>
        </div>
        <div class="mt-9 border-t border-slate-500 pt-7 text-center"><p class="mx-auto mb-4 max-w-4xl text-sm text-slate-300">${isFr ? 'Cliniqeo est une agence d’accompagnement et d’organisation. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé et cliniques partenaires en Turquie.' : 'Cliniqeo is a care coordination agency. Medical assessments and procedures are performed by partner healthcare professionals and clinics in Turkey.'}</p><div class="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400"><span>© 2026 cliniqeo Hair</span><span>•</span><a href="${isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides'}" class="hover:text-[#6EC1E4]">Guides</a><a href="${isFr ? '/greffe-cheveux-france' : '/en/hair-transplant-by-city'}" rel="nofollow" aria-label="Private access" class="px-1 text-slate-500">·</a><span>•</span><a href="https://cliniqeo.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#6EC1E4]">${isFr ? 'Soins dentaires en Turquie' : 'Dental treatment in Turkey'}</a></div></div>
      </div>
    </footer>`;
}

function nativeForm(isFr, label) {
  return `
    <section id="diagnostic-form" class="scroll-mt-24 bg-gradient-to-br from-[#eaf3ff] to-white py-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl md:p-10">
          <p class="mb-3 text-sm font-bold uppercase tracking-wider text-[#2f6bfc]">${isFr ? 'Réponse sous 24 heures' : 'Response within 24 hours'}</p>
          <h2 class="mb-3 text-3xl font-bold text-[#224671] md:text-4xl">${isFr ? `Diagnostic gratuit depuis ${label}` : `Free assessment from ${label}`}</h2>
          <p class="mb-8 text-lg leading-relaxed text-slate-600">${isFr ? 'Remplissez ce formulaire simple. Un conseiller vous recontactera pour étudier votre demande et répondre à vos questions.' : 'Complete this simple form. An adviser will contact you to review your request and answer your questions.'}</p>
          <form id="local-native-form" class="space-y-5">
            <div class="grid gap-5 md:grid-cols-2"><label class="block font-bold text-[#224671]">${isFr ? 'Prénom' : 'First name'} *<input name="first_name" required autocomplete="given-name" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></label><label class="block font-bold text-[#224671]">${isFr ? 'Nom' : 'Last name'} *<input name="last_name" required autocomplete="family-name" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></label></div>
            <div class="grid gap-5 md:grid-cols-2"><label class="block font-bold text-[#224671]">Email *<input name="email" type="email" required autocomplete="email" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></label><label class="block font-bold text-[#224671]">${isFr ? 'Numéro WhatsApp' : 'WhatsApp number'} *<input name="phone" type="tel" required autocomplete="tel" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></label></div>
            <label class="block font-bold text-[#224671]">${isFr ? 'Votre situation ou votre question' : 'Your situation or question'}<textarea name="message" rows="4" class="mt-2 w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></textarea></label>
            <p id="local-form-error" class="hidden rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700"></p>
            <button type="submit" class="flex w-full items-center justify-center rounded-xl bg-[#2f6bfc] px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-[#224671] disabled:opacity-60">${isFr ? 'Recevoir mon diagnostic gratuit' : 'Get my free assessment'}</button>
          </form>
        </div>
      </div>
    </section>`;
}

function buildPage(country, keyword, city, pagePath) {
  const isFr = country === 'fr';
  const lang = isFr ? 'fr' : 'en';
  const label = cityLabel(country, city);
  const copy = intentCopy[lang][keyword.intent];
  const price = localPriceData(country);
  const imageNumber = (hash(pagePath) % 6) + 1;
  const image = `/greffe.cheveux.avant.apres${imageNumber}.jpg`;
  const images = [1, 2, 3].map((offset) => `/greffe.cheveux.avant.apres${((imageNumber + offset - 1) % 6) + 1}.jpg`);
  const home = isFr ? '/' : '/en';
  const whatsappUrl = `https://wa.me/33756978583?text=${encodeURIComponent(isFr ? `Bonjour, je souhaite un diagnostic pour une greffe de cheveux depuis ${label}.` : `Hello, I would like a hair transplant assessment from ${label}.`)}`;
  const localOpeningVariants = isFr ? [
    `Depuis ${label}, la recherche d’une solution locale répond souvent à trois priorités : comprendre le prix, identifier le responsable médical et conserver un suivi accessible.`,
    `Le bassin de ${label} permet de comparer plusieurs offres. Une comparaison sérieuse doit aussi mesurer le temps consacré au diagnostic et la stratégie de préservation de la zone donneuse.`,
    `Le choix ne se résume pas à « près de chez moi » ou « à l’étranger ». Il faut comparer le plan médical, le prix total, les responsabilités et le suivi sur douze mois.`,
    `Les patients de ${city.region} peuvent demander une première orientation à distance avant de réserver un déplacement. Le plan médical définitif reste confirmé après examen.`,
  ] : [
    `For patients in ${label}, a local search usually reflects three priorities: clear cost, named medical responsibility and accessible follow-up.`,
    `The ${label} area offers local options, but a serious comparison should also examine donor preservation, clinician involvement and postoperative access.`,
    `The decision is not simply “near me” versus “abroad”. It is a comparison of medical planning, total cost, written responsibilities and long-term follow-up.`,
    `Patients in ${city.region} can request initial guidance before arranging travel. The final medical plan remains subject to an in-person examination.`,
  ];
  const localOpening = localOpeningVariants[hash(pagePath) % localOpeningVariants.length];
  const faq = isFr ? [
    [`Cliniqeo Hair possède-t-il une clinique à ${city.name} ?`, `Non. Cette page répond aux recherches effectuées autour de ${city.name}. L’intervention est réalisée à Istanbul par les professionnels de santé partenaires, avec accompagnement francophone par Cliniqeo.`],
    [`Quel est le prix d’une greffe de cheveux à ${city.name} ?`, `Les tarifs locaux varient selon le nombre de greffons, la technique et la clinique. La comparaison présentée sur cette page utilise les fourchettes indicatives publiées sur le site Cliniqeo et doit être confirmée par un devis personnalisé.`],
    ['Que comprend le forfait Cliniqeo Turquie ?', 'Selon la formule confirmée : intervention, hôtel, transferts à Istanbul, accompagnement francophone, consignes postopératoires et suivi sur douze mois. Le devis précise chaque inclusion.'],
    ['Le paiement en 10 fois est-il disponible ?', 'Oui, il peut être proposé aux patients en France sous réserve d’acceptation du dossier et des conditions contractuelles communiquées avant la réservation.'],
    [`Comment organiser le départ depuis ${city.name} ?`, `Le voyage peut être préparé autour de ${city.airport} (${city.airportCode}) ou d’un autre aéroport adapté au calendrier de traitement.`],
  ] : [
    [`Does Cliniqeo Hair operate a clinic in ${label}?`, `No. This page serves people researching treatment around ${label}. The medical procedure takes place in Istanbul through partner healthcare professionals, with English-speaking coordination.`],
    [`How much does a hair transplant cost in ${label}?`, 'Local prices depend on graft requirements, technique and provider. The comparison on this page is indicative and a personalised written quotation is still required.'],
    ['What can the Cliniqeo Turkey package include?', 'Depending on the confirmed plan: procedure, accommodation, Istanbul transfers, English-speaking coordination, postoperative instructions and twelve-month follow-up.'],
    ['How do I obtain an assessment?', 'Complete the contact form and describe your situation. An adviser will explain the next steps and the information required for a medical review.'],
    [`How is travel planned from ${city.name}?`, `Travel can be organised around ${city.airport} (${city.airportCode}) or another suitable airport.`],
  ];

  const trustCards = isFr ? [
    ['Paiement en 10 fois', 'Une solution prioritaire pour étaler le budget, sous réserve d’acceptation.'],
    ['Accompagnement français', 'Un interlocuteur francophone avant le départ, à Istanbul et pendant le suivi.'],
    ['Hôtel et transferts', 'Une organisation écrite qui précise les nuits et les trajets inclus.'],
    ['Suivi pendant 12 mois', 'Des contrôles photographiques après le retour et jusqu’à la maturation.'],
  ] : [
    ['Written cost proposal', 'Procedure, accommodation, transfers and aftercare explained before booking.'],
    ['English-speaking support', 'One coordination contact before travel, in Istanbul and during follow-up.'],
    ['Hotel and transfers', 'A written package specifying accommodation nights and included Istanbul journeys.'],
    ['Twelve-month follow-up', 'Progress photographs reviewed after the patient returns home.'],
  ];

  return `
    ${navigation(isFr, whatsappUrl)}
    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl font-bold text-white shadow-2xl no-underline">W</a>
    <main class="pt-20 bg-white">
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#1e3a5f] to-[#224671] text-white">
        <div class="absolute inset-0"><div class="absolute right-10 top-20 h-80 w-80 rounded-full bg-[#2f6bfc] opacity-20 blur-3xl"></div><div class="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#6EC1E4] opacity-20 blur-3xl"></div></div>
        <div class="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <nav class="mb-6 text-sm text-blue-100" aria-label="Breadcrumb"><a href="${home}" class="text-blue-100 no-underline hover:text-white">${isFr ? 'Accueil' : 'Home'}</a><span class="mx-2">›</span><span>${escapeHtml(label)}</span></nav>
            <p class="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">${isFr ? `PAIEMENT EN 10× • ${escapeHtml(city.region)}` : `${escapeHtml(city.region)} • ${escapeHtml(city.airportCode)}`}</p>
            <h1 class="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">${escapeHtml(copy.title)} ${isFr ? 'à' : 'in'} <span class="text-[#6EC1E4]">${escapeHtml(label)}</span></h1>
            <p class="mb-5 text-2xl font-bold text-[#6EC1E4]">${escapeHtml(copy.subtitle)}</p>
            <p class="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200">${escapeHtml(copy.intro)}</p>
            <div class="flex flex-col gap-4 sm:flex-row"><a href="#diagnostic-form" class="rounded-xl bg-[#6EC1E4] px-7 py-4 text-center font-bold text-[#224671] no-underline transition hover:bg-white">${isFr ? 'Recevoir mon diagnostic gratuit' : 'Get my free assessment'}</a><a href="#price-comparison" class="rounded-xl border-2 border-white/40 bg-white/10 px-7 py-4 text-center font-bold text-white no-underline backdrop-blur transition hover:bg-white/20">${isFr ? 'Comparer les prix' : 'Compare prices'}</a></div>
            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"><span>✓ ${isFr ? 'Sans engagement' : 'No obligation'}</span><span>✓ ${isFr ? 'Formulaire rapide' : 'Quick form'}</span><span>✓ ${isFr ? 'Réponse sous 24 h' : 'Response within 24h'}</span></div>
          </div>
          <div class="relative"><div class="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur"><img src="${image}" alt="${escapeHtml(`${keyword.label} ${label} avant après`)}" width="1448" height="1086" loading="eager" fetchpriority="high" class="h-auto w-full rounded-2xl"></div><div class="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 text-[#224671] shadow-xl"><p class="text-sm font-bold uppercase tracking-wide text-[#2f6bfc]">${isFr ? 'Cliniqeo Hair Turquie' : 'Cliniqeo Hair Turkey'}</p><p class="mt-1 text-3xl font-bold">${isFr ? 'dès 1 990€' : 'from €1,990'}</p><p class="text-sm text-slate-600">${isFr ? 'FUE jusqu’à 5 000 greffons selon diagnostic' : 'FUE up to 5,000 grafts subject to assessment'}</p></div></div>
        </div>
      </section>

      <section class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">${trustCards.map(([title, text]) => `<article class="rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-xl font-bold text-white">✓</div><h2 class="mb-2 text-xl font-bold text-[#224671]">${escapeHtml(title)}</h2><p class="leading-relaxed text-slate-600">${escapeHtml(text)}</p></article>`).join('')}</div></div></section>

      <section id="price-comparison" class="scroll-mt-24 bg-[#f7fbff] py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto mb-12 max-w-3xl text-center"><p class="mb-3 font-bold uppercase tracking-wider text-[#2f6bfc]">${isFr ? `PRIX À ${escapeHtml(city.name)} ET ALTERNATIVES` : `LOCAL PRICE AND ALTERNATIVES`}</p><h2 class="mb-5 text-4xl font-bold text-[#224671] md:text-5xl">${isFr ? `Comparer les prix à ${escapeHtml(city.name)}, en Turquie et avec Cliniqeo France` : `Compare local prices, Cliniqeo Turkey and Cliniqeo France`}</h2><p class="text-lg leading-relaxed text-slate-600">${escapeHtml(price.sourceNote)}</p></div>
        <div class="grid gap-8 lg:grid-cols-3">
          <article class="rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-lg"><p class="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">${escapeHtml(label)}</p><h3 class="mb-5 text-2xl font-bold text-[#224671]">${escapeHtml(price.localTitle)}</h3><div class="space-y-4"><div class="rounded-xl bg-slate-50 p-4"><p class="text-sm text-slate-500">${escapeHtml(price.primaryLabel)}</p><p class="text-2xl font-bold text-[#224671]">${escapeHtml(price.localPrimary)}</p></div><div class="rounded-xl bg-slate-50 p-4"><p class="text-sm text-slate-500">${escapeHtml(price.secondaryLabel)}</p><p class="text-2xl font-bold text-[#224671]">${escapeHtml(price.localSecondary)}</p></div></div><p class="mt-5 text-sm leading-relaxed text-slate-500">${escapeHtml(price.localNote)}</p></article>
          <article class="relative rounded-3xl bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] p-7 text-white shadow-2xl lg:-translate-y-3"><span class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#224671] px-5 py-2 text-sm font-bold">${isFr ? 'LE PLUS AVANTAGEUX' : 'BEST VALUE'}</span><p class="mb-3 mt-3 text-sm font-bold uppercase tracking-wide text-blue-100">Istanbul</p><h3 class="mb-5 text-2xl font-bold">Cliniqeo Hair Turquie</h3><div class="space-y-4"><div class="rounded-xl bg-white/15 p-4 backdrop-blur"><p class="text-sm text-blue-100">FUE • ${isFr ? 'jusqu’à 5 000 greffons' : 'up to 5,000 grafts'}</p><p class="text-3xl font-bold">1 990€</p></div><div class="rounded-xl bg-white/15 p-4 backdrop-blur"><p class="text-sm text-blue-100">DHI • ${isFr ? 'jusqu’à 4 000 greffons' : 'up to 4,000 grafts'}</p><p class="text-3xl font-bold">2 490€</p></div></div><ul class="mt-6 space-y-2 text-sm"><li>✓ ${isFr ? 'Hôtel 3 nuits selon la formule' : 'Three hotel nights depending on package'}</li><li>✓ ${isFr ? 'Transferts à Istanbul' : 'Istanbul transfers'}</li><li>✓ ${isFr ? 'Accompagnement francophone' : 'English-speaking coordination'}</li><li>✓ ${isFr ? 'Suivi pendant 12 mois' : 'Twelve-month follow-up'}</li></ul></article>
          <article class="rounded-3xl border-2 border-blue-100 bg-white p-7 shadow-lg"><p class="mb-3 text-sm font-bold uppercase tracking-wide text-[#2f6bfc]">France</p><h3 class="mb-5 text-2xl font-bold text-[#224671]">Cliniqeo en France</h3><div class="space-y-4"><div class="rounded-xl bg-blue-50 p-4"><p class="text-sm text-slate-500">FUE ≈ 3 000 greffons</p><p class="text-3xl font-bold text-[#224671]">3 490€</p></div><div class="rounded-xl bg-blue-50 p-4"><p class="text-sm text-slate-500">DHI ≈ 3 000 greffons</p><p class="text-3xl font-bold text-[#224671]">3 690€</p></div></div><ul class="mt-6 space-y-2 text-sm text-slate-600"><li>✓ ${isFr ? 'Parcours coordonné en France' : 'France-based coordinated option'}</li><li>✓ ${isFr ? 'Suivi pendant 12 mois' : 'Twelve-month follow-up'}</li><li>✓ ${isFr ? 'Devis personnalisé' : 'Personalised written quote'}</li><li>✓ ${isFr ? 'Pas d’hôtel inclus' : 'Accommodation not included'}</li></ul></article>
        </div>
        <div class="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"><div class="overflow-x-auto"><table class="w-full min-w-[760px] text-left"><thead class="bg-[#224671] text-white"><tr><th class="px-6 py-4">${isFr ? 'Élément comparé' : 'Comparison point'}</th><th class="px-6 py-4 text-center">${escapeHtml(label)}</th><th class="px-6 py-4 text-center">Cliniqeo Turquie</th><th class="px-6 py-4 text-center">Cliniqeo France</th></tr></thead><tbody class="divide-y divide-slate-200"><tr><td class="px-6 py-4 font-bold text-[#224671]">${isFr ? 'Prix FUE indicatif' : 'Indicative FUE cost'}</td><td class="px-6 py-4 text-center">${escapeHtml(price.localPrimary)}</td><td class="px-6 py-4 text-center font-bold text-[#2f6bfc]">1 990€</td><td class="px-6 py-4 text-center">3 490€</td></tr><tr class="bg-slate-50"><td class="px-6 py-4 font-bold text-[#224671]">${isFr ? 'Prix DHI / grand cas' : 'DHI / larger case cost'}</td><td class="px-6 py-4 text-center">${escapeHtml(price.localSecondary)}</td><td class="px-6 py-4 text-center font-bold text-[#2f6bfc]">2 490€</td><td class="px-6 py-4 text-center">3 690€</td></tr><tr><td class="px-6 py-4 font-bold text-[#224671]">${isFr ? 'Hôtel' : 'Hotel'}</td><td class="px-6 py-4 text-center">${isFr ? 'Non inclus' : 'Not included'}</td><td class="px-6 py-4 text-center font-bold text-[#2f6bfc]">${isFr ? 'Inclus selon formule' : 'Included by package'}</td><td class="px-6 py-4 text-center">${isFr ? 'Non inclus' : 'Not included'}</td></tr><tr class="bg-slate-50"><td class="px-6 py-4 font-bold text-[#224671]">${isFr ? 'Suivi' : 'Follow-up'}</td><td class="px-6 py-4 text-center">${isFr ? 'Selon la clinique' : 'Provider-dependent'}</td><td class="px-6 py-4 text-center font-bold text-[#2f6bfc]">12 ${isFr ? 'mois' : 'months'}</td><td class="px-6 py-4 text-center">12 ${isFr ? 'mois' : 'months'}</td></tr></tbody></table></div></div>
        ${isFr ? '<div class="mt-10 rounded-2xl bg-gradient-to-r from-[#2f6bfc] to-[#6EC1E4] p-8 text-center text-white"><h3 class="mb-3 text-3xl font-bold">Paiement en 10 fois : dès 199€/mois</h3><p class="mx-auto mb-6 max-w-2xl text-lg text-blue-50">Sous réserve d’acceptation du dossier et des conditions communiquées avant la réservation.</p><a href="#diagnostic-form" class="inline-block rounded-xl bg-white px-7 py-4 font-bold text-[#224671] no-underline">Vérifier mon éligibilité</a></div>' : ''}
      </div></section>

      <section class="bg-white py-20"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-2 lg:items-center"><div><p class="mb-3 font-bold uppercase tracking-wider text-[#2f6bfc]">${isFr ? 'RÉPONSE CLAIRE' : 'CLEAR ANSWER'}</p><h2 class="mb-6 text-4xl font-bold text-[#224671]">${escapeHtml(copy.section)}</h2><p class="mb-5 text-lg leading-relaxed text-slate-600">${escapeHtml(localOpening)}</p><p class="mb-7 text-lg leading-relaxed text-slate-600">${escapeHtml(copy.answer)}</p><ul class="grid gap-3 sm:grid-cols-2">${copy.points.map((point) => `<li class="flex gap-3 rounded-xl bg-blue-50 p-4 font-medium text-[#224671]"><span class="text-[#2f6bfc]">✓</span>${escapeHtml(point)}</li>`).join('')}</ul></div><div class="overflow-hidden rounded-3xl shadow-2xl"><img src="${images[0]}" alt="${escapeHtml(`${copy.title} ${label}`)}" width="1448" height="1086" loading="lazy" class="h-auto w-full"></div></div></div></section>

      <section class="bg-[#f7fbff] py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto mb-12 max-w-3xl text-center"><h2 class="mb-5 text-4xl font-bold text-[#224671]">${isFr ? `Pourquoi envisager Istanbul depuis ${escapeHtml(city.name)} ?` : `Why consider Istanbul from ${escapeHtml(label)}?`}</h2><p class="text-lg leading-relaxed text-slate-600">${isFr ? 'L’objectif n’est pas de choisir uniquement le prix le plus bas, mais de comparer une organisation complète, la responsabilité médicale, la zone donneuse et le suivi.' : 'The aim is not simply to select the lowest price, but to compare complete organisation, medical responsibility, donor safety and follow-up.'}</p></div><div class="grid gap-7 md:grid-cols-3"><article class="rounded-2xl bg-white p-7 shadow-lg"><h3 class="mb-4 text-2xl font-bold text-[#224671]">${isFr ? 'Diagnostic avant le voyage' : 'Assessment before travel'}</h3><p class="leading-relaxed text-slate-600">${isFr ? 'Photos de face, du dessus, des profils et de la zone donneuse, avec vos informations médicales.' : 'Front, top, side and donor-area photographs reviewed with relevant medical information.'}</p></article><article class="rounded-2xl bg-white p-7 shadow-lg"><h3 class="mb-4 text-2xl font-bold text-[#224671]">${isFr ? 'Organisation du séjour' : 'Coordinated stay'}</h3><p class="leading-relaxed text-slate-600">${isFr ? `Départ possible autour de ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)}), hôtel et transferts à Istanbul selon le devis.` : `Travel can be planned around ${escapeHtml(city.airport)} (${escapeHtml(city.airportCode)}), with hotel and Istanbul transfers according to the written proposal.`}</p></article><article class="rounded-2xl bg-white p-7 shadow-lg"><h3 class="mb-4 text-2xl font-bold text-[#224671]">${isFr ? 'Suivi après le retour' : 'Follow-up after returning home'}</h3><p class="leading-relaxed text-slate-600">${isFr ? 'Consignes écrites, photos de contrôle et accompagnement pendant les différentes phases de cicatrisation et de repousse.' : 'Written instructions, progress photographs and support through healing and regrowth phases.'}</p></article></div></div></section>

      <section class="bg-white py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-12 text-center"><h2 class="mb-4 text-4xl font-bold text-[#224671]">${isFr ? 'Exemples Avant / Après' : 'Before-and-after examples'}</h2><p class="text-lg text-slate-600">${isFr ? 'Différents profils de calvitie et différentes stratégies de restauration capillaire.' : 'Different hair-loss patterns and restoration approaches.'}</p></div><div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-7">${images.map((src, index) => `<figure class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"><img src="${src}" alt="${escapeHtml(`${keyword.label} ${label} résultat ${index + 1}`)}" width="1448" height="1086" loading="lazy" class="aspect-[4/3] h-auto w-full object-cover"><figcaption class="p-3 text-center text-sm font-semibold text-[#224671] md:p-4">${isFr ? `Cas ${index + 1} — résultat selon le profil` : `Case ${index + 1} — outcome depends on profile`}</figcaption></figure>`).join('')}</div></div></section>

      <section class="bg-[#f7fbff] py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 class="mb-12 text-center text-4xl font-bold text-[#224671]">${isFr ? `Questions fréquentes depuis ${escapeHtml(city.name)}` : `Frequently asked questions from ${escapeHtml(label)}`}</h2><div class="space-y-4">${faq.map(([question, answer]) => `<details class="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-200 open:shadow-lg"><summary class="cursor-pointer text-lg font-bold text-[#224671]">${escapeHtml(question)}</summary><p class="mt-4 leading-relaxed text-slate-600">${escapeHtml(answer)}</p></details>`).join('')}</div></div></section>

      ${nativeForm(isFr, label)}
    </main>
    ${footer(isFr, whatsappUrl)}`;
}

let updated = 0;
for (const [country, cities, keywords] of [
  ['fr', frCities, frKeywords],
  ['uk', ukCities, enKeywords],
  ['us', usCities, enKeywords],
]) {
  for (const city of cities) {
    for (const keyword of keywords) {
      const route = pathFor(country, keyword, city);
      const page = buildPage(country, keyword, city, route);
      const files = [
        join(dist, `${route.replace(/^\//, '')}.html`),
        join(dist, route.replace(/^\//, ''), 'index.html'),
      ];
      for (const file of files) {
        let html = await readFile(file, 'utf8');
        html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script)/, `<div id="root">${page}</div>\n    `);
        await writeFile(file, html, 'utf8');
        updated += 1;
      }
    }
  }
}

console.log(`Designed ${updated} local landing HTML files with the complete Cliniqeo layout.`);
