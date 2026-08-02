import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Languages, Plane, ShieldCheck, Stethoscope, WalletCards } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { findLocalPage, getLocalCities, getLocalKeywords, getLocalPath, type LocalIntent } from '../../config/localSeoData';

const intentIndex: Record<LocalIntent, number> = {
  complete: 0,
  technique: 1,
  implant: 2,
  price: 3,
  clinic: 4,
};

const frIntent = {
  complete: {
    title: 'Greffe de cheveux',
    promise: 'Comparer une greffe locale avec une prise en charge organisée à Istanbul',
    intro: 'Vous recherchez une greffe de cheveux près de chez vous. Cette page vous aide à comparer une solution locale avec un séjour capillaire organisé à Istanbul, sans confondre proximité géographique et qualité médicale.',
    focus: 'Une greffe de cheveux ne se résume pas au nombre de greffons. La stratégie doit tenir compte de la zone donneuse, de la progression probable de la calvitie, de la ligne frontale et de la densité réalisable.',
  },
  technique: {
    title: 'Greffe capillaire',
    promise: 'FUE Saphir, DHI et planification personnalisée depuis votre ville',
    intro: 'Une recherche de greffe capillaire traduit souvent un besoin de comprendre les techniques. FUE Saphir et DHI sont des outils opératoires : le choix dépend du diagnostic, de la surface à couvrir et de la conservation de la zone donneuse.',
    focus: 'La meilleure technique est celle qui répond à votre anatomie et à votre objectif. Une DHI n’est pas automatiquement supérieure à une FUE, et une densité élevée ne doit jamais être obtenue au détriment de la zone donneuse.',
  },
  implant: {
    title: 'Implant capillaire',
    promise: 'Comprendre l’implantation folliculaire et comparer les options',
    intro: 'Le terme implant capillaire désigne généralement le transfert de vos propres unités folliculaires. Il ne s’agit pas d’implants artificiels : les follicules sont prélevés dans une zone donneuse puis réimplantés selon un dessin médical.',
    focus: 'L’orientation, l’angle, la répartition des follicules simples et multiples et la gestion du stock donneur déterminent l’aspect naturel. Le diagnostic doit précéder toute promesse de résultat.',
  },
  price: {
    title: 'Prix greffe cheveux',
    promise: 'Comparer le coût réel, les prestations incluses et le paiement en 10×',
    intro: 'Le prix d’une greffe de cheveux doit être comparé à prestation équivalente. Le devis doit distinguer l’intervention, la technique, l’équipe médicale, l’hôtel, les transferts, les médicaments et le suivi.',
    focus: 'Un prix attractif n’est pertinent que si le protocole médical, la protection de la zone donneuse et le suivi sont clairement définis. Cliniqeo Hair propose une organisation transparente et un paiement en 10 fois sous réserve d’acceptation.',
  },
  clinic: {
    title: 'Clinique greffe cheveux',
    promise: 'Choisir une équipe à Istanbul avec accompagnement francophone',
    intro: 'Chercher une clinique de greffe de cheveux dans sa ville est logique. La bonne comparaison doit toutefois porter sur l’identité du médecin, le rôle de chaque intervenant, les protocoles, les résultats documentés et le suivi.',
    focus: 'Cliniqeo Hair est une agence française d’accompagnement, pas une clinique locale. Les actes sont réalisés en Turquie par les professionnels de santé partenaires, avec coordination francophone avant, pendant et après le séjour.',
  },
} as const;

const enIntent = {
  complete: {
    title: 'Hair transplant',
    promise: 'Compare local treatment with a coordinated medical trip to Istanbul',
    intro: 'Searching for a hair transplant in your city usually means you want convenient access, clear medical responsibility and predictable follow-up. This guide compares that local route with a coordinated treatment journey to Istanbul.',
    focus: 'A transplant plan should be based on donor capacity, future hair-loss progression, hairline design and the surface that can realistically be covered. Graft numbers alone do not define quality.',
  },
  technique: {
    title: 'Hair restoration',
    promise: 'Compare FUE, Sapphire FUE and DHI from your city',
    intro: 'Hair restoration covers diagnosis, medical planning, surgical options and long-term preservation. FUE and DHI are techniques within that wider plan rather than automatic guarantees of density.',
    focus: 'The suitable technique depends on donor quality, recipient area, shaving preference and the medical team’s plan. A responsible assessment explains both the benefits and the limits.',
  },
  implant: {
    title: 'Hair implants',
    promise: 'Understand follicular implantation and treatment planning',
    intro: 'People searching for hair implants are usually referring to transplantation of their own follicular units. The follicles are extracted from a donor area and placed according to the natural direction and density plan.',
    focus: 'Natural appearance depends on hairline design, implantation angle, graft distribution and donor preservation. Artificially high graft promises should never replace an individual assessment.',
  },
  price: {
    title: 'Hair transplant cost',
    promise: 'Compare the complete cost of local care and treatment in Istanbul',
    intro: 'A useful cost comparison includes the procedure, medical team, technique, accommodation, transfers, medication, aftercare and the practical cost of travel. Headline prices alone can be misleading.',
    focus: 'Cliniqeo Hair provides a written treatment proposal after photo assessment. The aim is to compare like with like and identify what is included before a patient commits to travel.',
  },
  clinic: {
    title: 'Hair transplant clinic',
    promise: 'Assess medical responsibility, safety and aftercare before booking',
    intro: 'When comparing clinics, check who diagnoses the patient, who designs the hairline, who performs each stage and who remains available during recovery. Location should not be the only selection criterion.',
    focus: 'Cliniqeo Hair is a coordination agency rather than a clinic in your city. Medical procedures take place in Turkey through partner healthcare professionals, with English-speaking support throughout the journey.',
  },
} as const;

function hashValue(value: string) {
  return Array.from(value).reduce((total, character) => total + character.charCodeAt(0), 0);
}

function LocalSeoPage() {
  const { pathname } = useLocation();
  const page = findLocalPage(pathname);

  if (!page) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-[#224671] mb-5">Page locale introuvable</h1>
        <Link to="/" className="text-[#2f6bfc] font-semibold">Retour à l’accueil</Link>
      </div>
    );
  }

  const { country, city, keyword, path } = page;
  const isFr = country === 'fr';
  const copy = isFr ? frIntent[keyword.intent] : enIntent[keyword.intent];
  const countryLabel = country === 'fr' ? 'France' : country === 'uk' ? 'United Kingdom' : 'United States';
  const imageNumber = (hashValue(path) % 6) + 1;
  const image = `/greffe.cheveux.avant.apres${imageNumber}.jpg`;
  const directoryPath = country === 'fr' ? '/greffe-cheveux-france' : `/en/${country}/hair-transplant-cities`;
  const contactPath = isFr ? '/contact' : '/en/contact';
  const pricePath = isFr ? '/tarifs' : '/en/pricing';
  const cityLabel = country === 'us' ? `${city.name}, ${city.region}` : city.name;
  const title = isFr
    ? `${copy.title} à ${city.name} : prix, clinique et alternative Istanbul`
    : `${copy.title} in ${cityLabel}: Cost, Clinic and Istanbul Option`;
  const description = isFr
    ? `${keyword.label} à ${city.name} : comparez les prix avec Istanbul, accompagnement français, hôtel, transferts, suivi et paiement en 10 fois.`
    : `${keyword.label} in ${cityLabel}: compare local options with a coordinated Istanbul package, medical assessment, hotel, transfers and English-speaking follow-up.`;

  const allCities = getLocalCities(country);
  const relatedCities = allCities
    .filter((item) => item.slug !== city.slug)
    .sort((a, b) => Math.abs(hashValue(a.slug) - hashValue(city.slug)) - Math.abs(hashValue(b.slug) - hashValue(city.slug)))
    .slice(0, 4);
  const allKeywords = getLocalKeywords(country);

  const faqs = isFr
    ? [
        { q: `Cliniqeo Hair possède-t-il une clinique à ${city.name} ?`, a: `Non. Cette page répond aux recherches locales autour de ${city.name}, mais l’intervention est réalisée à Istanbul par les professionnels de santé partenaires. L’accompagnement et le suivi sont assurés en français.` },
        { q: `Comment obtenir un devis depuis ${city.name} ?`, a: 'Vous transmettez des photos de face, du dessus, des profils et de la zone donneuse. Une première analyse permet d’évaluer la faisabilité, la technique et une estimation de greffons avant le devis.' },
        { q: 'Le paiement en 10 fois est-il disponible ?', a: 'Oui, un paiement en 10 fois peut être proposé aux patients en France, sous réserve d’acceptation du dossier et des conditions communiquées avant la réservation.' },
        { q: `Comment organiser le départ depuis ${city.name} ?`, a: `Le trajet peut être préparé autour de ${city.airport} (${city.airportCode}) ou d’un autre aéroport adapté. Les transferts à Istanbul sont organisés selon le forfait confirmé.` },
        { q: 'Peut-on économiser 80 % par rapport à la France ?', a: 'L’écart dépend du devis français, de la technique et des prestations comparées. Certains dossiers présentent un écart très important, mais l’économie doit toujours être calculée sur des prestations équivalentes.' },
      ]
    : [
        { q: `Does Cliniqeo Hair operate a clinic in ${cityLabel}?`, a: `No. This page serves people researching treatment around ${cityLabel}, while the medical procedure takes place in Istanbul through partner healthcare professionals.` },
        { q: `How can I obtain an assessment from ${cityLabel}?`, a: 'Send clear front, top, side and donor-area photographs. The initial review considers donor capacity, hair-loss pattern, possible technique and an estimated graft range.' },
        { q: 'What is included in the Istanbul package?', a: 'The written proposal can include the procedure, accommodation, local transfers, interpretation or English-speaking coordination, postoperative instructions and remote follow-up.' },
        { q: `How is travel arranged from ${city.name}?`, a: `Travel planning can be based around ${city.airport} (${city.airportCode}) or another suitable airport. Confirmed Istanbul transfers are coordinated around the treatment schedule.` },
        { q: 'Is the lowest price the best option?', a: 'No. Compare medical responsibility, donor management, technique, inclusions and follow-up. A low headline price is not useful when essential services or safety information are unclear.' },
      ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      inLanguage: isFr ? 'fr-FR' : 'en',
      url: `https://cliniqeo-hair.vercel.app${path}`,
      about: { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' },
      provider: { '@type': 'Organization', name: 'Cliniqeo Hair', url: 'https://cliniqeo-hair.vercel.app' },
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
        { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `https://cliniqeo-hair.vercel.app${isFr ? '/' : '/en'}` },
        { '@type': 'ListItem', position: 2, name: isFr ? 'Villes' : 'Cities', item: `https://cliniqeo-hair.vercel.app${directoryPath}` },
        { '@type': 'ListItem', position: 3, name: cityLabel, item: `https://cliniqeo-hair.vercel.app${path}` },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <SEOHead title={title} description={description} path={path} lang={isFr ? 'fr' : 'en'} keywords={[`${keyword.label} ${city.name}`, `${keyword.label} near me`, `${keyword.label} Turkey`, `${keyword.label} Istanbul`]} image={image} schema={schema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf3ff] via-white to-[#f7fbff] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link to={isFr ? '/' : '/en'} className="hover:text-[#2f6bfc]">{isFr ? 'Accueil' : 'Home'}</Link>
              <span className="mx-2">›</span>
              <Link to={directoryPath} className="hover:text-[#2f6bfc]">{isFr ? 'Villes' : 'Cities'}</Link>
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
              <Link to={contactPath} className="inline-flex justify-center items-center rounded-xl bg-[#2f6bfc] px-7 py-4 text-white font-bold hover:bg-[#224671] transition-colors">
                {isFr ? 'Diagnostic et devis gratuits' : 'Free assessment and quote'}
              </Link>
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
              { icon: ShieldCheck, title: isFr ? 'Parcours médical vérifié' : 'Medical planning first', text: isFr ? 'Diagnostic, technique, zone donneuse et responsabilités expliqués avant réservation.' : 'Donor assessment, technique, responsibilities and aftercare clarified before booking.' },
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
            <h2 className="text-3xl font-bold text-[#224671] mb-5">{isFr ? `${copy.title} à ${city.name} ou Istanbul : que comparer ?` : `${copy.title} in ${cityLabel} or Istanbul: what should you compare?`}</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">{copy.focus}</p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isFr
                ? `Pour un patient de ${city.name} et plus largement de ${city.region}, la comparaison utile porte sur la qualification des intervenants, le temps médical consacré au diagnostic, le nombre de patients traités le même jour, le protocole d’extraction et d’implantation, puis la disponibilité du suivi après le retour.`
                : `For a patient based in ${cityLabel}, the useful comparison covers clinician responsibility, time allocated to assessment, daily patient volume, extraction and implantation protocols, donor preservation and access to follow-up after returning home.`}
            </p>
          </article>

          <article className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-5">{isFr ? `Prix depuis ${city.name} et paiement en 10×` : `Cost planning from ${cityLabel}`}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                {isFr
                  ? `Le coût en France varie selon la clinique, la technique et le nombre de greffons. Istanbul peut offrir un écart important grâce à une structure de coûts différente. L’économie annoncée doit toujours être vérifiée avec deux devis détaillés et des prestations comparables.`
                  : `Local prices vary by clinic, technique, graft requirement and aftercare. Istanbul may offer a substantial difference because of a different cost structure, but savings should be checked against detailed like-for-like proposals.`}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {isFr
                  ? 'Le paiement en 10 fois constitue un argument prioritaire pour les patients français : il peut permettre d’organiser le traitement sans régler la totalité du forfait en une seule fois. La disponibilité dépend de l’acceptation du dossier et des conditions contractuelles.'
                  : 'The complete budget should include flights, procedure, accommodation, local transport, medication and any time away from work. The written quote should state exclusions before a deposit is paid.'}
              </p>
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
            <div className="flex items-center gap-3 mb-5"><Plane className="text-[#2f6bfc]" size={30} /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? `Organiser le voyage depuis ${city.name}` : `Planning travel from ${cityLabel}`}</h2></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              {isFr
                ? `Le départ peut être organisé autour de ${city.airport} (${city.airportCode}). Pour certains calendriers, un aéroport voisin ou une correspondance peut être plus pratique. Le séjour médical doit laisser le temps nécessaire à la consultation, à l’intervention et au contrôle ou premier lavage avant le retour.`
                : `Travel can be planned around ${city.airport} (${city.airportCode}) or another airport offering a suitable itinerary. The schedule should allow time for consultation, treatment and the first postoperative control before the return journey.`}
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

      <section className="py-16 bg-[#224671] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{isFr ? `Votre diagnostic depuis ${city.name}` : `Start your assessment from ${cityLabel}`}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">{isFr ? 'Recevez une première analyse, un devis détaillé et les informations sur le paiement en 10 fois avant de décider.' : 'Receive an initial assessment, a detailed written proposal and a clear explanation of the treatment journey before deciding.'}</p>
          <Link to={contactPath} className="inline-flex rounded-xl bg-white px-8 py-4 text-[#224671] font-bold hover:bg-blue-50">{isFr ? 'Demander mon diagnostic gratuit' : 'Request my free assessment'}</Link>
        </div>
      </section>

      <section className="py-14 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#224671] mb-6">{isFr ? `Autres recherches à ${city.name}` : `Other searches in ${cityLabel}`}</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {allKeywords.filter((item) => item.key !== keyword.key).map((item) => (
              <Link key={item.key} to={getLocalPath(country, item, city)} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-[#224671] hover:border-[#2f6bfc]">{item.label} {city.name}</Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-[#224671] mb-6">{isFr ? 'Villes proches et autres zones' : 'Other city guides'}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCities.map((relatedCity) => (
              <Link key={relatedCity.slug} to={getLocalPath(country, keyword, relatedCity)} className="rounded-xl bg-white border border-slate-200 p-4 font-semibold text-[#224671] hover:shadow-md">{keyword.label} {relatedCity.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LocalSeoPage;
