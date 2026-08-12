import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Languages, Plane, ShieldCheck, Stethoscope, WalletCards } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import LocalLeadForm from '../../components/LocalLeadForm';
import { findLocalPage, type LocalIntent } from '../../config/localSeoData';
import { HAIR_EN_BASE, HAIR_FR_BASE, PUBLIC_ORIGIN } from '../../config/siteRoutes';

interface IntentCopy {
  title: string;
  promise: string;
  intro: string;
  focus: string;
  sectionTitle: string;
  sectionText: string;
  points: string[];
}

const frIntent: Record<LocalIntent, IntentCopy> = {
  complete: {
    title: 'Greffe de cheveux',
    promise: 'Comparer une greffe locale avec une prise en charge organisée à Istanbul',
    intro: 'Vous recherchez une greffe de cheveux près de chez vous. Cette page compare une solution locale avec un séjour capillaire organisé à Istanbul, sans confondre proximité géographique et qualité médicale.',
    focus: 'Une greffe de cheveux ne se résume pas au nombre de greffons. La stratégie doit tenir compte de la zone donneuse, de la progression probable de la calvitie, de la ligne frontale et de la densité réellement réalisable.',
    sectionTitle: 'Ce qui détermine réellement la réussite d’une greffe',
    sectionText: 'Le résultat dépend de la qualité du diagnostic, de la conservation du capital donneur, du dessin de la ligne frontale et de la répartition des greffons selon les zones prioritaires.',
    points: ['Analyse de la zone donneuse', 'Plan adapté à l’évolution de la calvitie', 'Ligne frontale naturelle et suivi sur plusieurs mois'],
  },
  technique: {
    title: 'Greffe capillaire',
    promise: 'FUE Saphir, DHI et planification personnalisée depuis votre ville',
    intro: 'Une recherche de greffe capillaire traduit souvent un besoin de comprendre les techniques. La FUE Saphir et la DHI sont des outils opératoires : leur intérêt dépend du diagnostic et de la surface à traiter.',
    focus: 'La meilleure technique est celle qui répond à votre anatomie et à votre objectif. Une DHI n’est pas automatiquement supérieure à une FUE, et une forte densité ne doit jamais être obtenue au détriment de la zone donneuse.',
    sectionTitle: 'FUE Saphir ou DHI : comment décider ?',
    sectionText: 'Le choix dépend du nombre de greffons, du rasage accepté, de la densité existante, de la zone à traiter et de la manière dont l’équipe organise l’extraction puis l’implantation.',
    points: ['Technique choisie après diagnostic', 'Temps hors du corps limité pour les greffons', 'Orientation et angle respectant la pousse naturelle'],
  },
  implant: {
    title: 'Implant capillaire',
    promise: 'Comprendre l’implantation folliculaire et comparer les options',
    intro: 'Le terme implant capillaire désigne généralement le transfert de vos propres unités folliculaires. Les follicules sont prélevés dans une zone donneuse puis réimplantés selon un dessin médical.',
    focus: 'L’orientation, l’angle, la répartition des follicules simples et multiples et la gestion du stock donneur déterminent l’aspect naturel. Le diagnostic doit précéder toute promesse de résultat.',
    sectionTitle: 'Comment obtenir un rendu naturel ?',
    sectionText: 'Les follicules simples sont privilégiés sur la première ligne, tandis que les unités multiples servent à créer du volume derrière. La direction doit suivre les caractéristiques propres du patient.',
    points: ['Follicules simples sur la ligne frontale', 'Répartition progressive de la densité', 'Protection du stock donneur pour l’avenir'],
  },
  price: {
    title: 'Prix greffe cheveux',
    promise: 'Comparer le coût réel, les prestations incluses et le paiement en 10×',
    intro: 'Le prix d’une greffe de cheveux doit être comparé à prestation équivalente. Le devis doit distinguer l’intervention, la technique, l’équipe médicale, l’hôtel, les transferts, les médicaments et le suivi.',
    focus: 'Un prix attractif n’est pertinent que si le protocole médical, la protection de la zone donneuse et le suivi sont clairement définis. Le paiement en 10 fois peut être proposé sous réserve d’acceptation.',
    sectionTitle: 'Comparer deux devis sans se tromper',
    sectionText: 'Un prix d’appel n’est pas comparable à un forfait complet. Il faut vérifier les exclusions, le nombre de nuits, les transferts, le premier lavage, les médicaments et l’organisation du suivi.',
    points: ['Prix total écrit avant réservation', 'Prestations médicales et logistiques détaillées', 'Conditions du paiement en 10 fois clairement communiquées'],
  },
  clinic: {
    title: 'Clinique greffe cheveux',
    promise: 'Choisir une équipe à Istanbul avec accompagnement francophone',
    intro: 'Chercher une clinique de greffe de cheveux dans sa ville est logique. La comparaison doit toutefois porter sur l’identité du médecin, le rôle de chaque intervenant, les protocoles, les résultats documentés et le suivi.',
    focus: 'Cliniqeo Hair est une agence française d’accompagnement, pas une clinique locale. Les actes sont réalisés en Turquie par les professionnels de santé partenaires, avec coordination francophone.',
    sectionTitle: 'Les critères pour sélectionner une équipe médicale',
    sectionText: 'Le patient doit savoir qui établit le diagnostic, qui dessine la ligne frontale, qui réalise les étapes médicales et qui reste disponible pendant la cicatrisation.',
    points: ['Identité et rôle du médecin annoncés', 'Nombre de patients quotidiens raisonnable', 'Protocole de suivi écrit après le retour'],
  },
};

const enIntent: Record<LocalIntent, IntentCopy> = {
  complete: {
    title: 'Hair transplant',
    promise: 'Compare local treatment with a coordinated medical trip to Istanbul',
    intro: 'Searching for a hair transplant in your city usually means you want convenient access, clear medical responsibility and predictable follow-up. This page compares that local route with a coordinated treatment journey to Istanbul.',
    focus: 'A transplant plan should be based on donor capacity, future hair-loss progression, hairline design and the surface that can realistically be covered. Graft numbers alone do not define quality.',
    sectionTitle: 'What actually determines a successful transplant?',
    sectionText: 'Outcome quality depends on assessment, donor preservation, hairline planning, graft distribution and access to follow-up throughout the growth period.',
    points: ['Donor-area assessment', 'Planning for future hair loss', 'Natural hairline design and structured follow-up'],
  },
  technique: {
    title: 'Hair restoration',
    promise: 'Compare FUE, Sapphire FUE and DHI from your city',
    intro: 'Hair restoration covers diagnosis, medical planning, surgical options and long-term preservation. FUE and DHI are techniques within that wider plan rather than automatic guarantees of density.',
    focus: 'The suitable technique depends on donor quality, recipient area, shaving preference and the medical team’s plan. A responsible assessment explains both the benefits and the limits.',
    sectionTitle: 'FUE, Sapphire FUE or DHI?',
    sectionText: 'The recommendation should consider the number of grafts, existing hair, recipient-area size, shaving preference and the clinical workflow used for extraction and implantation.',
    points: ['Technique selected after assessment', 'Careful graft handling', 'Natural angle and direction of implantation'],
  },
  implant: {
    title: 'Hair implants',
    promise: 'Understand follicular implantation and treatment planning',
    intro: 'People searching for hair implants are usually referring to transplantation of their own follicular units. Follicles are extracted from a donor area and placed according to a natural direction and density plan.',
    focus: 'Natural appearance depends on hairline design, implantation angle, graft distribution and donor preservation. Artificially high graft promises should never replace an individual assessment.',
    sectionTitle: 'How is a natural result planned?',
    sectionText: 'Single-hair grafts are normally used along the frontal edge, while multi-hair units are distributed behind them to build visual density without creating an artificial line.',
    points: ['Single-hair grafts at the front', 'Progressive density behind the hairline', 'Long-term donor preservation'],
  },
  price: {
    title: 'Hair transplant cost',
    promise: 'Compare the complete cost of local care and treatment in Istanbul',
    intro: 'A useful cost comparison includes the procedure, medical team, technique, accommodation, transfers, medication, aftercare and the practical cost of travel. Headline prices alone can be misleading.',
    focus: 'Cliniqeo Hair provides a written treatment proposal after photo assessment. The aim is to compare like with like and identify what is included before a patient commits to travel.',
    sectionTitle: 'How to compare complete costs',
    sectionText: 'A headline procedure price should not be compared with a package that includes accommodation, Istanbul transfers, postoperative medication, first wash and follow-up.',
    points: ['Written total cost', 'Clear inclusions and exclusions', 'Travel and recovery budget considered'],
  },
  clinic: {
    title: 'Hair transplant clinic',
    promise: 'Assess medical responsibility, safety and aftercare before booking',
    intro: 'When comparing clinics, check who diagnoses the patient, who designs the hairline, who performs each stage and who remains available during recovery. Location should not be the only selection criterion.',
    focus: 'Cliniqeo Hair is a coordination agency rather than a clinic in your city. Medical procedures take place in Turkey through partner healthcare professionals, with English-speaking support.',
    sectionTitle: 'How to assess a clinic and medical team',
    sectionText: 'Patients should receive clear information about clinician identity, medical responsibilities, donor planning, daily patient volume and the postoperative communication process.',
    points: ['Named clinician and defined responsibilities', 'Documented medical protocol', 'Accessible postoperative follow-up'],
  },
};

function hashValue(value: string) {
  return Array.from(value).reduce((total, character) => total + character.charCodeAt(0), 0);
}

function LocalSeoPage() {
  const { pathname } = useLocation();
  const page = findLocalPage(pathname);

  if (!page) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-[#224671] mb-5">Page introuvable</h1>
        <Link to="/" className="text-[#2f6bfc] font-semibold">Retour à l’accueil</Link>
      </div>
    );
  }

  const { country, city, keyword, path } = page;
  const isFr = country === 'fr';
  const copy = isFr ? frIntent[keyword.intent] : enIntent[keyword.intent];
  const countryLabel = country === 'fr' ? 'France' : country === 'uk' ? 'United Kingdom' : 'United States';
  const cityLabel = country === 'us' ? `${city.name}, ${city.region}` : city.name;
  const imageNumber = (hashValue(path) % 6) + 1;
  const image = `/greffe.cheveux.avant.apres${imageNumber}.jpg`;
  const pricePath = isFr ? `${HAIR_FR_BASE}/tarifs` : `${HAIR_EN_BASE}/pricing`;
  const homePath = isFr ? HAIR_FR_BASE : HAIR_EN_BASE;
  const title = isFr
    ? `${copy.title} à ${city.name} : prix, clinique et alternative Istanbul`
    : `${copy.title} in ${cityLabel}: Cost, Clinic and Istanbul Option`;
  const description = isFr
    ? `${keyword.label} à ${city.name} : comparez les prix avec Istanbul, accompagnement français, hôtel, transferts, suivi et paiement en 10 fois.`
    : `${keyword.label} in ${cityLabel}: compare local options with a coordinated Istanbul package, medical assessment, hotel, transfers and English-speaking follow-up.`;

  const openingsFr = [
    `Pour une personne située à ${city.name}, en ${city.region}, la recherche locale répond généralement à trois priorités : comprendre le prix, identifier le responsable médical et conserver un suivi accessible.`,
    `Le bassin de ${city.name} permet de comparer plusieurs offres, mais une comparaison sérieuse doit aussi examiner le temps consacré au diagnostic, la gestion de la zone donneuse et la qualité du suivi.`,
    `Depuis ${city.name}, le choix ne se limite pas à « près de chez moi » ou « à l’étranger ». Il faut surtout comparer la qualité du plan médical, la transparence du devis et l’organisation sur douze mois.`,
    `Les patients de ${city.region} peuvent commencer par un diagnostic photo à distance avant tout déplacement, afin de vérifier la faisabilité du projet et la qualité de la zone donneuse.`,
  ];
  const openingsEn = [
    `For someone based in ${cityLabel}, a local search usually reflects three priorities: understanding cost, identifying medical responsibility and keeping follow-up accessible.`,
    `Patients in ${city.region} can compare local providers with an Istanbul route by examining diagnosis time, clinician involvement, donor preservation and postoperative access.`,
    `The decision is not simply “near me” versus “abroad”. It is a comparison of medical planning, written inclusions, travel organisation and follow-up quality.`,
    `A remote photo assessment can be completed from ${cityLabel} before travel, helping determine whether donor capacity and hair-loss pattern make surgery reasonable.`,
  ];
  const localOpening = (isFr ? openingsFr : openingsEn)[hashValue(path) % 4];

  const faqs = isFr
    ? [
        { q: `Cliniqeo Hair possède-t-il une clinique à ${city.name} ?`, a: `Non. Cette page répond aux recherches autour de ${city.name}, mais l’intervention est réalisée à Istanbul par les professionnels de santé partenaires. L’accompagnement et le suivi sont assurés en français.` },
        { q: `Comment obtenir un devis depuis ${city.name} ?`, a: 'Vous transmettez des photos de face, du dessus, des profils et de la zone donneuse. Une première analyse permet d’évaluer la faisabilité, la technique et une estimation de greffons.' },
        { q: 'Le paiement en 10 fois est-il disponible ?', a: 'Un paiement en 10 fois peut être proposé aux patients en France, sous réserve d’acceptation du dossier et des conditions communiquées avant la réservation.' },
        { q: `Comment organiser le départ depuis ${city.name} ?`, a: `Le trajet peut être préparé autour de ${city.airport} (${city.airportCode}) ou d’un autre aéroport adapté. Les transferts à Istanbul sont organisés selon le forfait confirmé.` },
        { q: 'Peut-on économiser jusqu’à 80 % ?', a: 'L’écart dépend du devis français, de la technique et des prestations comparées. Toute économie doit être calculée sur deux offres détaillées et réellement équivalentes.' },
      ]
    : [
        { q: `Does Cliniqeo Hair operate a clinic in ${cityLabel}?`, a: `No. This page serves people researching treatment around ${cityLabel}, while the medical procedure takes place in Istanbul through partner healthcare professionals.` },
        { q: `How can I obtain an assessment from ${cityLabel}?`, a: 'Send clear front, top, side and donor-area photographs. The initial review considers donor capacity, hair-loss pattern, possible technique and an estimated graft range.' },
        { q: 'What can the Istanbul package include?', a: 'The written proposal can include the procedure, accommodation, local transfers, English-speaking coordination, postoperative instructions and remote follow-up.' },
        { q: `How is travel arranged from ${city.name}?`, a: `Travel planning can be based around ${city.airport} (${city.airportCode}) or another suitable airport.` },
        { q: 'Is the lowest price the best option?', a: 'No. Compare medical responsibility, donor management, technique, inclusions and follow-up. A low headline price is not useful when essential services are unclear.' },
      ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      inLanguage: isFr ? 'fr-FR' : 'en',
      url: `${PUBLIC_ORIGIN}${path}`,
      about: { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' },
      provider: { '@type': 'Organization', name: 'Cliniqeo Hair', url: `${PUBLIC_ORIGIN}${homePath}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `${PUBLIC_ORIGIN}${homePath}` },
        { '@type': 'ListItem', position: 2, name: cityLabel, item: `${PUBLIC_ORIGIN}${path}` },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={title}
        description={description}
        path={path}
        lang={isFr ? 'fr' : 'en'}
        keywords={[`${keyword.label} ${city.name}`, `${keyword.label} near me`, `${keyword.label} Turkey`, `${keyword.label} Istanbul`]}
        image={image}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf3ff] via-white to-[#f7fbff] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link to={homePath} className="hover:text-[#2f6bfc]">{isFr ? 'Accueil' : 'Home'}</Link>
              <span className="mx-2">›</span><span>{cityLabel}</span>
            </nav>
            <p className="inline-flex items-center rounded-full bg-[#2f6bfc]/10 px-4 py-2 text-sm font-bold text-[#224671] mb-5">
              {isFr ? `PAIEMENT EN 10× • ${city.region}` : `${countryLabel} • ${city.region}`}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#224671] mb-6">
              {copy.title} {isFr ? 'à' : 'in'} {cityLabel}
            </h1>
            <p className="text-xl font-semibold text-[#2f6bfc] mb-4">{copy.promise}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{copy.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#diagnostic-form" className="inline-flex justify-center items-center rounded-xl bg-[#2f6bfc] px-7 py-4 text-white font-bold hover:bg-[#224671] transition-colors">
                {isFr ? 'Diagnostic et devis gratuits' : 'Free assessment and quote'}
              </a>
              <Link to={pricePath} className="inline-flex justify-center items-center rounded-xl border border-[#2f6bfc] px-7 py-4 text-[#224671] font-bold hover:bg-[#eaf3ff] transition-colors">
                {isFr ? 'Comparer les tarifs' : 'Compare pricing'}
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <img src={image} alt={`${keyword.label} ${cityLabel} - avant après greffe capillaire`} width="1448" height="1086" loading="eager" fetchPriority="high" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: WalletCards, title: isFr ? 'Paiement en 10 fois' : 'Written cost comparison', text: isFr ? 'Une solution prioritaire pour étaler le budget, sous réserve d’acceptation.' : 'A detailed proposal explaining treatment, accommodation, transfers and follow-up.' },
              { icon: Languages, title: isFr ? 'Accompagnement français' : 'English-speaking support', text: isFr ? 'Un interlocuteur francophone avant le départ, à Istanbul et pendant le suivi.' : 'One coordination contact before travel, in Istanbul and during recovery.' },
              { icon: ShieldCheck, title: isFr ? 'Parcours médical expliqué' : 'Medical planning first', text: isFr ? 'Diagnostic, technique, zone donneuse et responsabilités expliqués avant réservation.' : 'Donor assessment, technique, responsibilities and aftercare clarified before booking.' },
            ].map(({ icon: Icon, title: cardTitle, text }) => (
              <article key={cardTitle} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <Icon className="text-[#2f6bfc] mb-4" size={30} />
                <h2 className="text-xl font-bold text-[#224671] mb-3">{cardTitle}</h2>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <article>
            <h2 className="text-3xl font-bold text-[#224671] mb-5">
              {isFr ? `${copy.title} à ${city.name} ou Istanbul : que comparer ?` : `${copy.title} in ${cityLabel} or Istanbul: what should you compare?`}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">{localOpening}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{copy.focus}</p>
          </article>

          <article className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-5">{copy.sectionTitle}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">{copy.sectionText}</p>
              <ul className="space-y-3">
                {copy.points.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 text-lg"><CheckCircle className="text-[#2f6bfc] shrink-0 mt-1" size={20} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-blue-100 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#224671] mb-4">{isFr ? 'À vérifier dans chaque devis' : 'Check every written proposal'}</h3>
              <ul className="space-y-3">
                {(isFr
                  ? ['Identité et rôle du médecin', 'Technique et estimation des greffons', 'Hôtel et nombre de nuits', 'Transferts inclus', 'Médicaments et premier lavage', 'Suivi après le retour', 'Conditions du paiement en 10×']
                  : ['Named clinician and medical responsibilities', 'Technique and estimated graft range', 'Accommodation and number of nights', 'Included Istanbul transfers', 'Medication and first wash', 'Postoperative follow-up', 'Cancellation and payment conditions']).map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700"><CheckCircle className="text-[#2f6bfc] shrink-0 mt-0.5" size={20} />{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article>
            <h2 className="text-3xl font-bold text-[#224671] mb-5">{isFr ? `Prix depuis ${city.name} et paiement en 10×` : `Cost planning from ${cityLabel}`}</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              {isFr
                ? 'Le coût en France varie selon la clinique, la technique et le nombre de greffons. Istanbul peut offrir un écart important grâce à une structure de coûts différente. L’économie doit être vérifiée avec deux devis détaillés et comparables.'
                : 'Local prices vary by clinic, technique, graft requirement and aftercare. Istanbul may offer a substantial difference because of a different cost structure, but savings should be checked against detailed like-for-like proposals.'}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isFr
                ? 'Le paiement en 10 fois peut permettre d’organiser le traitement sans régler la totalité du forfait en une seule fois. Sa disponibilité dépend de l’acceptation du dossier et des conditions contractuelles communiquées avant la réservation.'
                : 'The complete budget should include flights, procedure, accommodation, local transport, medication and time away from work. Exclusions should be stated before a deposit is paid.'}
            </p>
          </article>

          <article>
            <div className="flex items-center gap-3 mb-5"><Plane className="text-[#2f6bfc]" size={30} /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? `Organiser le voyage depuis ${city.name}` : `Planning travel from ${cityLabel}`}</h2></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              {isFr
                ? `Le départ peut être organisé autour de ${city.airport} (${city.airportCode}). Le séjour doit laisser le temps nécessaire à la consultation, à l’intervention et au contrôle ou premier lavage avant le retour.`
                : `Travel can be planned around ${city.airport} (${city.airportCode}) or another suitable airport. The schedule should allow time for consultation, treatment and the first postoperative control before the return journey.`}
            </p>
            {city.nearby && <p className="text-lg text-slate-600 leading-relaxed">{isFr ? `Cette page concerne aussi les patients de ${city.nearby}.` : `The same planning information can help patients travelling from ${city.nearby}.`}</p>}
          </article>

          <article>
            <div className="flex items-center gap-3 mb-5"><Stethoscope className="text-[#2f6bfc]" size={30} /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? 'Du diagnostic au suivi : les étapes' : 'From assessment to follow-up'}</h2></div>
            <div className="grid md:grid-cols-2 gap-5">
              {(isFr
                ? ['Envoi des photos et informations médicales', 'Analyse de la zone donneuse et de la calvitie', 'Proposition écrite et paiement en 10× selon éligibilité', 'Confirmation du séjour et des transferts', 'Consultation médicale et dessin de la ligne frontale', 'Intervention, premier lavage et consignes', 'Suivi photo après le retour en France', 'Évaluation progressive jusqu’à la maturation']
                : ['Send photographs and relevant medical information', 'Review donor capacity and hair-loss pattern', 'Receive a written treatment and cost proposal', 'Confirm travel, accommodation and transfers', 'Attend the medical consultation and hairline planning', 'Complete treatment and first postoperative wash', 'Send follow-up photographs after returning home', 'Review progressive growth through the maturation period']).map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f6bfc] text-white font-bold">{index + 1}</span><p className="text-slate-700 font-medium">{item}</p></div>
                ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] text-center mb-10">{isFr ? `Questions sur la greffe capillaire depuis ${city.name}` : `Questions from patients in ${cityLabel}`}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-slate-200 p-5 open:bg-[#f7fbff]">
                <summary className="cursor-pointer font-bold text-[#224671] text-lg">{faq.q}</summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostic-form" className="scroll-mt-24 py-20 bg-gradient-to-br from-[#eaf3ff] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocalLeadForm lang={isFr ? 'fr' : 'en'} cityLabel={cityLabel} pagePath={path} />
        </div>
      </section>
    </div>
  );
}

export default LocalSeoPage;
