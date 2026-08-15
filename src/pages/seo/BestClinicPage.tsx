import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  HeartPulse,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { getHairAssetUrl } from '../../config/hostedPath';

type Lang = 'fr' | 'en';
type Variant = 'bestClinic' | 'medicalTeam' | 'bookingChecklist';

type PageMeta = {
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  directAnswer: string;
  focusTitle: string;
  focusText: string;
  keywords: string[];
};

const meta: Record<Lang, Record<Variant, PageMeta>> = {
  fr: {
    bestClinic: {
      path: '/meilleure-clinique-greffe-cheveux-turquie',
      alternatePath: '/best-hair-transplant-clinic-turkey',
      title: 'Meilleure clinique greffe de cheveux Turquie : guide 2026',
      description: 'Comment choisir la meilleure clinique de greffe de cheveux en Turquie en 2026 : médecin, équipe, zone donneuse, FUE, DHI, avis, prix, sécurité et suivi.',
      h1: 'Meilleure clinique de greffe de cheveux en Turquie : comment choisir en 2026 ?',
      eyebrow: 'Guide de sélection médicale et pratique',
      intro: "La meilleure clinique de greffe de cheveux en Turquie n’est pas forcément la plus connue, la moins chère ou celle qui annonce le plus de greffons. C’est celle qui évalue correctement votre alopécie, protège votre zone donneuse, propose un dessin naturel et organise un suivi accessible après votre retour.",
      directAnswer: "Pour identifier la meilleure clinique de greffe de cheveux en Turquie, vérifiez l’identité et le rôle du médecin, l’expérience réelle de l’équipe, la protection de la zone donneuse, la cohérence du nombre de greffons, la qualité des avant/après, la transparence du devis et le suivi postopératoire. Aucun classement universel ne remplace un diagnostic individuel.",
      focusTitle: 'Ce que signifie réellement « meilleure clinique »',
      focusText: "Le terme « meilleure » doit décrire une adéquation entre votre situation médicale et une équipe compétente. Une clinique adaptée à une petite correction de ligne frontale peut ne pas être la meilleure pour une alopécie avancée, des cheveux crépus, une greffe réparatrice ou une zone donneuse fragile.",
      keywords: ['meilleure clinique greffe de cheveux turquie', 'meilleure clinique capillaire turquie', 'meilleure clinique greffe cheveux istanbul', 'clinique greffe cheveux turquie fiable', 'meilleure greffe de cheveux turquie'],
    },
    medicalTeam: {
      path: '/meilleure-clinique-implant-cheveux-turquie',
      alternatePath: '/best-clinic-for-hair-transplant-turkey',
      title: 'Meilleure clinique pour implant cheveux Turquie : comparer les équipes',
      description: 'Meilleure clinique pour implant cheveux en Turquie : comparez médecin, techniciens, protocole FUE ou DHI, greffons, résultats, hygiène et suivi.',
      h1: 'Meilleure clinique pour implant cheveux en Turquie : comparer les équipes et les protocoles',
      eyebrow: 'Médecin, équipe, technique et résultats',
      intro: "Pour comparer les cliniques d’implant cheveux en Turquie, il faut dépasser les slogans FUE, DHI ou Saphir. La qualité dépend surtout de l’examen médical, de la répartition des rôles, de la manipulation des follicules, du dessin et du contrôle de chaque étape.",
      directAnswer: "La meilleure clinique pour implant cheveux en Turquie est celle qui explique précisément qui réalise le diagnostic, le dessin, l’anesthésie, l’extraction, l’ouverture des sites receveurs et l’implantation. Une équipe transparente doit aussi justifier le nombre de greffons et présenter des résultats comparables à votre profil.",
      focusTitle: 'Comparer le médecin et l’équipe, pas seulement la technique',
      focusText: "Deux établissements peuvent proposer la même appellation commerciale tout en ayant des protocoles très différents. Demandez quels actes sont réalisés ou supervisés par le médecin, combien de patients l’équipe traite simultanément et comment les greffons sont comptés, triés, conservés et implantés.",
      keywords: ['meilleure clinique implant cheveux turquie', 'clinique implant cheveux turquie', 'meilleur implant cheveux turquie', 'équipe greffe cheveux istanbul', 'chirurgien implant cheveux turquie'],
    },
    bookingChecklist: {
      path: '/meilleure-clinique-implant-capillaire-turquie',
      alternatePath: '/best-hair-implant-clinic-turkey',
      title: 'Meilleure clinique implant capillaire Turquie : checklist avant réservation',
      description: 'Checklist 2026 pour choisir une clinique d’implant capillaire en Turquie : documents, médecin, diagnostic, zone donneuse, devis, sécurité, hôtel et suivi.',
      h1: 'Meilleure clinique d’implant capillaire en Turquie : les points à vérifier avant de réserver',
      eyebrow: 'Checklist complète avant acompte et voyage',
      intro: "Avant de réserver une greffe capillaire en Turquie, vérifiez les éléments médicaux, administratifs et logistiques par écrit. Une offre claire doit permettre de savoir qui intervient, ce qui est inclus, quelles sont les limites du plan proposé et qui contacter après le retour.",
      directAnswer: "Avant de réserver, exigez un diagnostic préliminaire, l’identité du professionnel responsable, une estimation prudente des greffons, un devis détaillé, les inclusions et exclusions du forfait, les consignes préopératoires, les conditions d’annulation et un protocole de suivi écrit.",
      focusTitle: 'La checklist qui évite les mauvaises surprises',
      focusText: "Le prix et l’hôtel ne doivent jamais occuper plus de place que le diagnostic et la sécurité. Conservez les échanges, le devis, le programme du séjour et les consignes. Le plan définitif doit être confirmé sur place après examen, car des photos seules ne permettent pas toujours d’évaluer précisément la densité et la miniaturisation.",
      keywords: ['meilleure clinique implant capillaire turquie', 'clinique implant capillaire turquie', 'choisir clinique greffe cheveux turquie', 'checklist greffe cheveux turquie', 'clinique capillaire istanbul fiable'],
    },
  },
  en: {
    bestClinic: {
      path: '/best-hair-transplant-clinic-turkey',
      alternatePath: '/meilleure-clinique-greffe-cheveux-turquie',
      title: 'Best Hair Transplant Clinic in Turkey: 2026 Selection Guide',
      description: 'How to choose the best hair transplant clinic in Turkey in 2026: doctor, team, donor area, FUE, DHI, reviews, cost, safety and aftercare.',
      h1: 'Best Hair Transplant Clinic in Turkey: How to Choose in 2026',
      eyebrow: 'Medical and practical clinic-selection guide',
      intro: 'The best hair transplant clinic in Turkey is not automatically the cheapest, the most advertised or the clinic promising the highest graft count. It should assess your hair loss correctly, protect the donor area, design a natural result and provide accessible aftercare after you return home.',
      directAnswer: 'To identify the best hair transplant clinic in Turkey, check the doctor’s identity and role, the team’s relevant experience, donor-area protection, realistic graft planning, comparable before-and-after evidence, quote transparency and postoperative follow-up. No universal ranking replaces an individual medical assessment.',
      focusTitle: 'What “best hair transplant clinic” should really mean',
      focusText: '“Best” should describe the match between your medical needs and a competent team. A clinic suited to a small hairline procedure may not be the best choice for advanced hair loss, Afro-textured hair, repair surgery or a limited donor area.',
      keywords: ['best hair transplant clinic turkey', 'best hair transplant clinic in turkey', 'best hair clinic turkey', 'best hair transplant clinic istanbul', 'reliable hair transplant clinic turkey'],
    },
    medicalTeam: {
      path: '/best-clinic-for-hair-transplant-turkey',
      alternatePath: '/meilleure-clinique-implant-cheveux-turquie',
      title: 'Best Clinic for Hair Transplant in Turkey: Compare Medical Teams',
      description: 'Compare the best clinics for hair transplant in Turkey by doctor involvement, FUE or DHI protocol, graft handling, results, safety and aftercare.',
      h1: 'Best Clinic for Hair Transplant in Turkey: Comparing Teams and Protocols',
      eyebrow: 'Doctor, team, technique and documented results',
      intro: 'Comparing hair transplant clinics in Turkey requires more than choosing FUE, DHI or Sapphire. Quality depends on assessment, clearly assigned responsibilities, graft handling, hairline design and control of every clinical step.',
      directAnswer: 'The best clinic for hair transplant in Turkey should explain who performs the assessment, design, anaesthesia, extraction, recipient-site creation and implantation. A transparent team should justify the graft estimate and show results that are genuinely comparable with your hair type and pattern of loss.',
      focusTitle: 'Compare the medical team, not only the technique name',
      focusText: 'Two clinics may advertise the same technique while using very different protocols. Ask which steps are performed or supervised by the doctor, how many patients are treated at the same time and how grafts are counted, sorted, stored and implanted.',
      keywords: ['best clinic for hair transplant turkey', 'best clinic for hair transplant in turkey', 'hair transplant medical team turkey', 'best fue clinic turkey', 'best dhi clinic turkey'],
    },
    bookingChecklist: {
      path: '/best-hair-implant-clinic-turkey',
      alternatePath: '/meilleure-clinique-implant-capillaire-turquie',
      title: 'Best Hair Implant Clinic in Turkey: Checklist Before Booking',
      description: '2026 checklist for choosing a hair implant clinic in Turkey: medical assessment, doctor, donor area, quote, safety, package, hotel and aftercare.',
      h1: 'Best Hair Implant Clinic in Turkey: What to Check Before Booking',
      eyebrow: 'Complete checklist before paying a deposit',
      intro: 'Before booking a hair implant procedure in Turkey, verify the medical, administrative and travel details in writing. A clear offer should identify who is responsible, what is included, the limits of the proposed plan and how follow-up will work after you travel home.',
      directAnswer: 'Before booking, request a preliminary assessment, the responsible practitioner’s identity, conservative graft planning, an itemised quote, package inclusions and exclusions, preoperative instructions, cancellation terms and a written follow-up protocol.',
      focusTitle: 'A booking checklist that prevents avoidable surprises',
      focusText: 'Price and hotel quality should never receive more attention than diagnosis and safety. Keep copies of messages, the quote, itinerary and instructions. The final plan should be confirmed after an in-person examination because photographs alone may not show donor density and miniaturisation accurately.',
      keywords: ['best hair implant clinic turkey', 'best hair restoration clinic turkey', 'choose hair transplant clinic turkey', 'hair transplant turkey checklist', 'safe hair transplant clinic istanbul'],
    },
  },
};

const criteria = {
  fr: [
    ['Diagnostic médical individualisé', "L’équipe doit rechercher la cause et la stabilité de la chute, examiner les zones donneuse et receveuse et vérifier les antécédents médicaux."],
    ['Identité et rôle du médecin', "Le patient doit savoir qui valide l’indication, dessine la ligne frontale, supervise le protocole et reste responsable du suivi médical."],
    ['Protection de la zone donneuse', "La réserve donneuse est limitée. Une extraction trop dense ou mal répartie peut créer un éclaircissement durable et réduire les possibilités futures."],
    ['Nombre de greffons réaliste', "Le chiffre doit correspondre à la surface, au calibre des cheveux, à la densité disponible et à une stratégie à long terme."],
    ['Dessin naturel et durable', "La hauteur, la forme, les irrégularités et les angles doivent être adaptés au visage, à l’âge et à l’évolution probable de la calvitie."],
    ['Maîtrise de la FUE et de la DHI', "La technique est un outil. Elle doit être choisie selon le cas, et non imposée parce qu’elle est plus facile à vendre."],
    ['Résultats comparables', "Les avant/après utiles montrent des cas proches du vôtre, avec dates, lumière, angles et longueur de cheveux comparables."],
    ['Hygiène et protocole de sécurité', "Le dossier médical, l’asepsie, les analyses prévues, les médicaments et les consignes doivent être clairement organisés."],
    ['Devis transparent', "Le prix doit préciser les actes, le nombre de nuits, les transferts, l’interprétariat, les produits, le suivi et les exclusions."],
    ['Communication dans votre langue', "Vous devez comprendre le consentement, les limites, les risques, les soins et les signes qui nécessitent un avis médical."],
    ['Suivi après le retour', "Un calendrier de photos et un contact accessible permettent de surveiller la cicatrisation, la chute transitoire et la repousse."],
    ['Absence de promesse absolue', "Une équipe sérieuse explique les probabilités, les limites biologiques et les alternatives sans garantir une densité ou un résultat impossible à assurer."],
  ],
  en: [
    ['Individual medical assessment', 'The team should investigate the cause and stability of hair loss, examine donor and recipient areas and review relevant medical history.'],
    ['Doctor identity and role', 'Patients should know who confirms eligibility, designs the hairline, supervises the protocol and remains responsible for medical follow-up.'],
    ['Donor-area protection', 'Donor supply is finite. Excessive or uneven extraction can create lasting thinning and reduce future treatment options.'],
    ['Realistic graft planning', 'The estimate should reflect surface area, hair calibre, donor density and a long-term strategy rather than a sales target.'],
    ['Natural and age-appropriate design', 'Hairline height, shape, irregularities and angles should suit the face, age and likely future progression of hair loss.'],
    ['Appropriate use of FUE and DHI', 'Technique is a tool. It should be selected for the patient rather than promoted as universally superior.'],
    ['Comparable results', 'Useful before-and-after cases resemble your profile and use consistent dates, lighting, angles and hair length.'],
    ['Hygiene and safety protocol', 'Medical history, asepsis, planned tests, medicines and postoperative instructions should be clearly organised.'],
    ['Transparent quotation', 'The quote should list treatment, hotel nights, transfers, interpreting, products, follow-up and exclusions.'],
    ['Communication you understand', 'You should understand consent, limitations, risks, aftercare and symptoms that require medical advice.'],
    ['Follow-up after returning home', 'A photo schedule and accessible contact help monitor healing, temporary shedding and regrowth.'],
    ['No absolute promises', 'A responsible team explains probability, biological limits and alternatives without guaranteeing a result that cannot be assured.'],
  ],
};

const redFlags = {
  fr: [
    'Nombre très élevé de greffons annoncé uniquement à partir de quelques photos',
    'Identité du médecin absente ou réponses vagues sur la répartition des actes',
    'Garantie absolue de repousse, de densité ou de résultat',
    'Pression pour verser rapidement un acompte ou offre valable seulement quelques heures',
    'Photos avant/après avec lumière, angle, coiffage ou longueur différents',
    'Refus d’expliquer la capacité de la zone donneuse et les options futures',
    'Forfait dit tout compris sans liste écrite des inclusions et exclusions',
    'Aucun protocole clair de suivi après le retour dans votre pays',
  ],
  en: [
    'A very high graft count promised from only a few photographs',
    'No named doctor or vague answers about who performs each step',
    'Absolute guarantees of growth, density or cosmetic outcome',
    'Pressure to pay a deposit immediately or a deal that expires within hours',
    'Before-and-after images using different lighting, angles, styling or hair length',
    'Refusal to discuss donor capacity and possible future procedures',
    'An “all-inclusive” package without written inclusions and exclusions',
    'No clear follow-up protocol after the patient returns home',
  ],
};

const faq = {
  fr: [
    ['Quelle est la meilleure clinique de greffe de cheveux en Turquie ?', "Il n’existe pas de réponse universelle. La meilleure clinique pour un patient est celle qui répond à son diagnostic, protège sa zone donneuse, présente une équipe transparente et propose un suivi réaliste."],
    ['Comment vérifier une clinique de greffe de cheveux en Turquie ?', "Vérifiez le nom du professionnel responsable, les rôles de l’équipe, le diagnostic, le protocole, les résultats comparables, le devis, les documents médicaux et le suivi."],
    ['FUE Saphir ou DHI : quelle technique est la meilleure ?', "Aucune n’est meilleure dans tous les cas. Le choix dépend de la zone, du rasage, du nombre de greffons, des cheveux existants et de l’expérience de l’équipe."],
    ['Un grand nombre de greffons signifie-t-il un meilleur résultat ?', "Non. Un prélèvement excessif peut abîmer la zone donneuse. La répartition, la survie folliculaire, le dessin et les caractéristiques des cheveux sont tout aussi importants."],
    ['Peut-on choisir une clinique uniquement avec les avis ?', "Non. Les avis doivent être recoupés avec des résultats documentés, l’identité des praticiens, la transparence du protocole et la qualité du suivi."],
    ['Que doit contenir un devis tout compris ?', "Il doit préciser les soins, la technique prévue, l’hôtel et les nuits, les transferts, l’interprétariat, les médicaments ou produits, le contrôle et les exclusions."],
    ['Le diagnostic par photos est-il définitif ?', "Non. Les photos permettent une première estimation. Le plan définitif doit être confirmé après examen direct de la densité, du calibre, de la miniaturisation et de la peau."],
    ['Quand voit-on le résultat final ?', "La repousse commence progressivement après une phase possible de chute transitoire. Une évaluation se fait souvent vers douze mois, parfois plus tard pour le vertex."],
    ['Une clinique peut-elle garantir le résultat ?', "Une clinique peut s’engager sur son protocole et son suivi, mais elle ne peut pas garantir de manière absolue une réponse biologique ou une densité précise."],
    ['Pourquoi le suivi est-il important ?', "Il permet de vérifier la cicatrisation, répondre aux questions, adapter les soins et distinguer une évolution habituelle d’un signe nécessitant un avis médical."],
  ],
  en: [
    ['What is the best hair transplant clinic in Turkey?', 'There is no universal answer. The best clinic for an individual patient is one that matches the diagnosis, protects the donor area, uses a transparent team and provides realistic follow-up.'],
    ['How can I verify a hair transplant clinic in Turkey?', 'Check the responsible practitioner, team roles, assessment process, clinical protocol, comparable results, quotation, medical documents and aftercare.'],
    ['Is Sapphire FUE or DHI better?', 'Neither is best in every case. Selection depends on the treatment area, shaving preference, graft plan, existing hair and team experience.'],
    ['Does a higher graft count mean a better result?', 'No. Excessive harvesting may damage the donor area. Distribution, follicle survival, design and hair characteristics are equally important.'],
    ['Can I choose a clinic from reviews alone?', 'No. Reviews should be cross-checked with documented results, practitioner identity, protocol transparency and follow-up quality.'],
    ['What should an all-inclusive quote contain?', 'It should state treatment, planned technique, hotel nights, transfers, interpreting, medicines or products, postoperative review and exclusions.'],
    ['Is a photographic assessment final?', 'No. Photographs support a preliminary estimate. The final plan should follow direct examination of density, calibre, miniaturisation and scalp condition.'],
    ['When is the final result visible?', 'Growth develops gradually after possible temporary shedding. Assessment is often made around twelve months and may take longer for the crown.'],
    ['Can a clinic guarantee the result?', 'A clinic may commit to its protocol and follow-up, but it cannot absolutely guarantee a biological response or precise density.'],
    ['Why is aftercare important?', 'It helps monitor healing, answer questions, adjust care and distinguish normal recovery from symptoms requiring medical advice.'],
  ],
};

export default function BestClinicPage({ lang, variant }: { lang: Lang; variant: Variant }) {
  const page = meta[lang][variant];
  const isFr = lang === 'fr';
  const contactPath = isFr ? '/contact' : '/en/contact';
  const guidePath = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';
  const siblingPages = Object.entries(meta[lang]).filter(([key]) => key !== variant) as [Variant, PageMeta][];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq[lang].map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: page.h1,
    headline: page.h1,
    description: page.description,
    inLanguage: lang,
    dateModified: '2026-08-01',
    about: [
      { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' },
      { '@type': 'Thing', name: isFr ? 'Choix d’une clinique en Turquie' : 'Choosing a clinic in Turkey' },
    ],
    publisher: { '@type': 'Organization', name: 'Cliniqeo Hair' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: isFr ? '/' : '/en' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Guides greffe de cheveux' : 'Hair transplant guides', item: guidePath },
      { '@type': 'ListItem', position: 3, name: page.h1, item: page.path },
    ],
  };

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        lang={lang}
        keywords={page.keywords}
        image={getHairAssetUrl('/home.cliniqeo.hair.jpg')}
        alternates={[
          { lang, path: page.path },
          { lang: isFr ? 'en' : 'fr', path: page.alternatePath },
          { lang: 'x-default', path: meta.en[variant].path },
        ]}
        schema={[pageSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img src={getHairAssetUrl('/home.cliniqeo.hair.jpg')} alt="" className="h-full w-full object-cover object-center opacity-30" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.18em] text-sm font-bold text-[#6EC1E4] mb-5">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.h1}</h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-100 mb-8">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={contactPath} className="inline-flex items-center justify-center rounded-xl bg-[#6EC1E4] px-7 py-4 font-bold text-[#17324d] hover:bg-white transition">
                {isFr ? 'Demander une analyse capillaire' : 'Request a hair assessment'}
                <ArrowRight className="ml-2" size={19} />
              </Link>
              <Link to={page.alternatePath} className="inline-flex items-center justify-center rounded-xl border border-white/60 px-7 py-4 font-bold hover:bg-white/10 transition">
                {isFr ? 'Read in English' : 'Lire en français'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article>
        <section className="py-12 bg-blue-50 border-b border-blue-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white border border-blue-200 p-7 md:p-9 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <SearchCheck className="text-[#2f6bfc]" size={30} />
                <h2 className="text-2xl md:text-3xl font-bold text-[#224671]">{isFr ? 'Réponse directe' : 'Direct answer'}</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-700">{page.directAnswer}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-5">{page.focusTitle}</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{page.focusText}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {criteria[lang].map(([title, text], index) => (
                <section key={title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f6bfc] text-white font-bold">{index + 1}</span>
                    <h3 className="text-xl font-bold text-[#224671]">{title}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-8">{isFr ? 'Comment comparer deux cliniques de greffe capillaire ?' : 'How should two hair transplant clinics be compared?'}</h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-[#224671] text-white">
                  <tr>
                    <th className="p-4">{isFr ? 'Point comparé' : 'Comparison point'}</th>
                    <th className="p-4">{isFr ? 'Réponse insuffisante' : 'Weak answer'}</th>
                    <th className="p-4">{isFr ? 'Réponse rassurante' : 'Reassuring answer'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {[
                    [isFr ? 'Nombre de greffons' : 'Graft count', isFr ? '« Jusqu’à 5 000 pour tout le monde »' : '“Up to 5,000 for everyone”', isFr ? 'Estimation reliée à la surface, la densité et la réserve' : 'Estimate linked to surface area, density and donor reserve'],
                    [isFr ? 'Rôle du médecin' : 'Doctor involvement', isFr ? '« Une équipe s’en occupe »' : '“A team handles it”', isFr ? 'Nom, qualification et étapes réalisées ou supervisées' : 'Name, qualification and steps performed or supervised'],
                    [isFr ? 'Technique' : 'Technique', isFr ? 'DHI présentée comme toujours supérieure' : 'DHI presented as always superior', isFr ? 'Choix argumenté selon le diagnostic' : 'Selection explained according to assessment'],
                    [isFr ? 'Avant/après' : 'Before and after', isFr ? 'Photos marketing non comparables' : 'Non-comparable marketing images', isFr ? 'Cas similaires, dates et angles cohérents' : 'Similar cases with consistent dates and angles'],
                    [isFr ? 'Prix' : 'Price', isFr ? 'Montant global sans détail' : 'One total with no detail', isFr ? 'Devis écrit avec inclusions et exclusions' : 'Written quote with inclusions and exclusions'],
                    [isFr ? 'Suivi' : 'Aftercare', isFr ? '« Écrivez-nous si besoin »' : '“Message us if needed”', isFr ? 'Calendrier, contact et procédure en cas de problème' : 'Schedule, contact and escalation process'],
                  ].map(([label, weak, strong]) => (
                    <tr key={label}>
                      <th className="p-4 font-bold text-[#224671]">{label}</th>
                      <td className="p-4">{weak}</td>
                      <td className="p-4">{strong}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div>
              <div className="flex items-center gap-3 mb-4"><Stethoscope className="text-[#2f6bfc]" /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? '1. Le diagnostic passe avant le forfait' : '1. Assessment comes before the package'}</h2></div>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">{isFr ? "Une greffe ne se résume pas à remplir une zone vide. L’équipe doit identifier le type d’alopécie, sa progression, la miniaturisation des cheveux existants et les éventuelles causes médicales. Chez certains patients, un traitement ou une période d’observation peut être préférable avant une intervention." : 'A transplant is not simply a matter of filling an empty area. The team should identify the pattern and progression of hair loss, miniaturisation of existing hair and possible medical causes. For some patients, treatment or observation may be preferable before surgery.'}</p>
              <p className="text-lg leading-relaxed text-slate-700">{isFr ? "L’analyse par photos sert au premier tri, mais l’examen sur place reste important pour mesurer la densité, le calibre, la souplesse du cuir chevelu et la qualité de la peau. Une clinique sérieuse peut modifier ou refuser le plan initial si l’examen révèle un risque." : 'Photographs support preliminary screening, but in-person examination remains important for evaluating density, calibre, scalp characteristics and skin condition. A responsible clinic may modify or decline the initial plan if examination identifies a risk.'}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4"><Users className="text-[#2f6bfc]" /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? '2. Qui réalise réellement chaque étape ?' : '2. Who actually performs each stage?'}</h2></div>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">{isFr ? "La greffe comprend plusieurs étapes : consultation, dessin, anesthésie, extraction, préparation des greffons, création des sites receveurs, implantation et contrôle. Le patient doit connaître la répartition des tâches et le niveau de supervision." : 'Hair transplantation includes consultation, design, anaesthesia, extraction, graft preparation, recipient-site creation, implantation and review. Patients should know how responsibilities are assigned and supervised.'}</p>
              <p className="text-lg leading-relaxed text-slate-700">{isFr ? "Le volume quotidien est également pertinent. Une organisation qui traite trop de patients simultanément peut réduire le temps consacré au diagnostic, au dessin ou au contrôle. Le nombre de salles n’est pas en soi un problème ; l’essentiel est la disponibilité d’une équipe compétente pour chaque patient." : 'Daily patient volume also matters. Treating too many patients simultaneously may reduce time for assessment, design and quality control. Multiple rooms are not inherently problematic; the key issue is whether a competent team is available for every patient.'}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4"><HeartPulse className="text-[#2f6bfc]" /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? '3. La zone donneuse est une réserve limitée' : '3. The donor area is a limited resource'}</h2></div>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">{isFr ? "Les follicules prélevés ne repoussent pas dans la zone donneuse. La sécurité dépend donc du nombre prélevé, de leur répartition, du diamètre du punch, de l’espacement et des caractéristiques individuelles. Un aspect homogène après cicatrisation est aussi important que la densité obtenue devant." : 'Extracted follicles do not regrow in the donor area. Safety therefore depends on the number removed, distribution, punch size, spacing and individual characteristics. A uniform healed donor appearance is as important as recipient-area density.'}</p>
              <p className="text-lg leading-relaxed text-slate-700">{isFr ? "Une stratégie prudente conserve des ressources pour l’évolution future de la calvitie. Le vertex peut demander beaucoup de greffons ; il faut parfois prioriser la ligne frontale et le dessus plutôt que promettre une couverture complète en une seule séance." : 'Conservative planning preserves resources for future progression. The crown may require many grafts, so it can be wiser to prioritise the hairline and mid-scalp rather than promise complete coverage in one session.'}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4"><ClipboardCheck className="text-[#2f6bfc]" /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? '4. Prix, forfait tout compris et transparence' : '4. Price, all-inclusive packages and transparency'}</h2></div>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">{isFr ? "Un forfait peut faciliter l’organisation, mais il ne doit pas masquer le contenu médical. Vérifiez le nombre de nuits, la catégorie de chambre, les transferts, l’interprète, les analyses, les médicaments, le kit, le premier lavage et le suivi. Le billet d’avion est généralement séparé, sauf mention contraire écrite." : 'A package can simplify travel, but it should not hide the medical content. Confirm hotel nights, room category, transfers, interpreting, tests, medicines, care kit, first wash and follow-up. Flights are generally separate unless explicitly included in writing.'}</p>
              <p className="text-lg leading-relaxed text-slate-700">{isFr ? "Le prix final doit être lié à un devis et à une confirmation médicale. Une variation peut être légitime si le diagnostic sur place diffère, mais les conditions doivent être expliquées avant le voyage afin d’éviter une pression commerciale le jour de l’intervention." : 'The final price should be linked to a written quote and medical confirmation. A change may be legitimate if the in-person assessment differs, but the conditions should be explained before travel to avoid commercial pressure on the day of treatment.'}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4"><ShieldCheck className="text-[#2f6bfc]" /><h2 className="text-3xl font-bold text-[#224671]">{isFr ? '5. Sécurité, consentement et suivi' : '5. Safety, consent and follow-up'}</h2></div>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">{isFr ? "Le questionnaire médical doit couvrir traitements, allergies, antécédents, tabac, troubles de coagulation et maladies pertinentes. Le consentement doit expliquer les effets temporaires, les complications possibles, les limites esthétiques et les alternatives." : 'Medical screening should cover medicines, allergies, relevant conditions, smoking and bleeding risks. Consent should explain temporary effects, possible complications, aesthetic limitations and alternatives.'}</p>
              <p className="text-lg leading-relaxed text-slate-700">{isFr ? "Après le retour, un suivi structuré prévoit des photos à des étapes définies et une procédure en cas de douleur croissante, fièvre, écoulement, rougeur étendue ou autre symptôme inhabituel. Les consignes de votre équipe médicale priment toujours sur un guide général." : 'After returning home, structured follow-up uses photographs at planned intervals and a process for increasing pain, fever, discharge, spreading redness or other unusual symptoms. Instructions from your medical team always take priority over general online guidance.'}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-50 border-y border-red-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7f1d1d] mb-8">{isFr ? 'Signaux d’alerte avant de réserver' : 'Warning signs before booking'}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {redFlags[lang].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white border border-red-200 p-5">
                  <span className="mt-1 text-red-600 font-bold">✕</span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-8">{isFr ? 'Questions fréquentes sur la meilleure clinique en Turquie' : 'Frequently asked questions about the best clinic in Turkey'}</h2>
            <div className="space-y-4">
              {faq[lang].map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-slate-200 p-5 open:bg-slate-50">
                  <summary className="cursor-pointer list-none font-bold text-lg text-[#224671] flex justify-between gap-4">
                    {question}<span aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 text-slate-700 leading-relaxed">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#224671] mb-7">{isFr ? 'Guides complémentaires' : 'Related guides'}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {siblingPages.map(([, sibling]) => (
                <Link key={sibling.path} to={sibling.path} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#2f6bfc] transition">
                  <h3 className="text-xl font-bold text-[#224671] mb-3">{sibling.h1}</h3>
                  <p className="text-slate-600 mb-4">{sibling.description}</p>
                  <span className="inline-flex items-center font-bold text-[#2f6bfc]">{isFr ? 'Lire le guide' : 'Read the guide'}<ArrowRight className="ml-2" size={18} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="mx-auto mb-5 text-[#6EC1E4]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{isFr ? 'Recevez une première analyse de votre situation' : 'Request an initial assessment of your case'}</h2>
            <p className="text-lg text-blue-50 mb-8">{isFr ? "Décrivez votre situation et vos objectifs. La faisabilité, la technique et le nombre de greffons resteront soumis à confirmation médicale." : 'Describe your situation and goals. Eligibility, technique and graft count remain subject to medical confirmation.'}</p>
            <Link to={contactPath} className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-bold text-[#224671] hover:bg-blue-50 transition">
              {isFr ? 'Demander mon analyse' : 'Request my assessment'}<ArrowRight className="ml-2" size={19} />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
