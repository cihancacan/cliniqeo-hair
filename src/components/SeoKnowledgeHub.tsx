import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ClipboardCheck, Clock3, HelpCircle, Link2, ShieldCheck, Stethoscope } from 'lucide-react';

type Lang = 'fr' | 'en';
type Category = 'planning' | 'technique' | 'profile' | 'safety';

type Copy = {
  title: string;
  intro: string;
  assessmentTitle: string;
  assessment: string[];
  processTitle: string;
  process: { title: string; text: string }[];
  factorsTitle: string;
  factors: string[];
  questionsTitle: string;
  questions: string[];
  timelineTitle: string;
  timeline: { period: string; text: string }[];
};

const englishRootRoutes = new Set([
  '/hair-transplant-turkey', '/turkey-hair-transplant', '/hair-transplant-in-turkey',
  '/best-hair-transplant-turkey', '/fue-hair-transplant-turkey', '/dhi-hair-transplant-turkey',
  '/turkey-hair-transplant-cost', '/hair-transplant-turkey-cost', '/hair-transplant-turkey-price',
  '/turkey-hair-transplant-prices', '/how-much-hair-transplant-turkey', '/hair-transplant-turkey-reviews',
]);

function getCategory(pathname: string): Category | null {
  if (pathname.includes('guides-') || pathname.includes('/hair-transplant-guides')) return null;

  if (/fue|dhi|saphir|sapphire|sans-rasage|no-shave|pain|douleur|anesth/.test(pathname)) return 'technique';
  if (/femme|female|afro|barbe|beard|ligne-frontale|hairline|vertex|crown|sourcil|eyebrow|cicatrice|scar/.test(pathname)) return 'profile';
  if (/greffon|graft|donneuse|donor|risque|risk|ratee|repair|soins|aftercare|mois-par-mois|recovery|deuxieme|second/.test(pathname)) return 'safety';
  if (/greffe|hair-transplant|implant|turkey|turquie|istanbul|prix|cost|avis|review|avant-apres|before-after|tout-compris|all-inclusive/.test(pathname)) return 'planning';
  return null;
}

const copy: Record<Lang, Record<Category, Copy>> = {
  fr: {
    planning: {
      title: 'Bien préparer une greffe de cheveux en Turquie',
      intro: 'Le choix d’une destination ou d’un forfait ne suffit pas. Un projet sérieux doit relier le diagnostic, la capacité de la zone donneuse, les objectifs esthétiques, le rôle de chaque professionnel et l’organisation du suivi après le retour.',
      assessmentTitle: 'Ce que l’analyse préalable doit confirmer',
      assessment: [
        'Le type et l’évolution de la perte de cheveux, ainsi que sa stabilité probable.',
        'La densité, le calibre, la miniaturisation et la surface exploitable de la zone donneuse.',
        'La surface à traiter, les priorités entre ligne frontale, dessus et vertex, et la densité réaliste.',
        'Les antécédents médicaux, traitements, allergies, tabagisme et facteurs pouvant influencer la cicatrisation.',
        'Une stratégie à long terme qui préserve des greffons pour une éventuelle évolution future de la calvitie.',
      ],
      processTitle: 'Déroulement d’un projet correctement organisé',
      process: [
        { title: '1. Diagnostic à distance', text: 'Photos standardisées, questionnaire médical et première estimation. Cette étape oriente le projet mais ne remplace pas l’examen sur place.' },
        { title: '2. Validation médicale', text: 'Le professionnel examine le cuir chevelu, mesure la zone donneuse, confirme l’indication et ajuste le nombre de greffons.' },
        { title: '3. Plan opératoire', text: 'La technique, le dessin, les zones prioritaires, le rasage, l’anesthésie et les responsabilités de l’équipe sont expliqués.' },
        { title: '4. Intervention et contrôle', text: 'Prélèvement, préparation et implantation sont suivis d’un contrôle, d’un protocole de lavage et de consignes écrites.' },
        { title: '5. Suivi après le retour', text: 'Des points réguliers permettent de surveiller la cicatrisation, la chute transitoire, la repousse et les éventuels signes d’alerte.' },
      ],
      factorsTitle: 'Ce qui influence réellement le résultat',
      factors: ['Qualité et conservation des greffons', 'Répartition prudente des prélèvements', 'Angle, direction et irrégularité naturelle de la ligne frontale', 'Adéquation entre surface à couvrir et réserve disponible', 'Respect du protocole postopératoire', 'Évolution future des cheveux non greffés'],
      questionsTitle: 'Questions à poser avant de réserver',
      questions: ['Qui réalise le diagnostic et le dessin ?', 'Qui effectue le prélèvement, les incisions et l’implantation ?', 'Comment le nombre de greffons a-t-il été calculé ?', 'Quelles prestations sont incluses et exclues du prix ?', 'Comment la zone donneuse sera-t-elle protégée ?', 'Que se passe-t-il en cas de complication après le retour ?', 'Quels contrôles sont prévus à 10 jours, 3 mois, 6 mois et 12 mois ?', 'Puis-je voir des cas comparables au mien, avec la zone donneuse visible ?'],
      timelineTitle: 'Repères dans le temps',
      timeline: [
        { period: 'Avant le départ', text: 'Bilan, arrêt ou adaptation éventuelle de certains traitements uniquement sur avis médical, et confirmation logistique.' },
        { period: 'Jours 1 à 10', text: 'Protection des greffons, lavage progressif, croûtes et rougeurs variables.' },
        { period: 'Semaines 2 à 8', text: 'Chute temporaire possible des cheveux implantés ; les follicules restent sous la peau.' },
        { period: 'Mois 3 à 6', text: 'Début de repousse puis amélioration progressive de la couverture.' },
        { period: 'Mois 9 à 15', text: 'Maturation de la densité, du calibre et de la texture, parfois plus lente au vertex.' },
      ],
    },
    technique: {
      title: 'Comprendre la technique au-delà de son nom commercial',
      intro: 'FUE, DHI, Saphir ou sans rasage décrivent surtout des outils et des façons de prélever ou d’implanter. La qualité dépend davantage de l’indication, de la planification, de la manipulation des follicules et de l’expérience de l’équipe.',
      assessmentTitle: 'Les critères qui déterminent le choix de la méthode',
      assessment: [
        'La taille et la localisation des zones à traiter.',
        'La densité donneuse, le calibre des cheveux et le nombre de follicules multiples.',
        'La présence de cheveux natifs dans lesquels il faut implanter sans les endommager.',
        'Le besoin ou non de conserver une coiffure longue et les contraintes liées au rasage.',
        'Le temps opératoire raisonnable et la capacité de l’équipe à limiter le temps hors du corps des greffons.',
      ],
      processTitle: 'Les étapes techniques à comprendre',
      process: [
        { title: 'Préparation de la zone donneuse', text: 'Repérage de la zone stable, répartition des prélèvements et choix du diamètre des instruments.' },
        { title: 'Extraction folliculaire', text: 'Les unités sont prélevées individuellement puis contrôlées pour limiter les traumatismes et la dessiccation.' },
        { title: 'Création des sites receveurs', text: 'Le dessin, l’angle, la profondeur et la densité sont adaptés à chaque zone.' },
        { title: 'Implantation', text: 'Les greffons simples sont privilégiés sur la première ligne ; les unités plus fournies sont placées en arrière pour créer du volume.' },
        { title: 'Contrôle postopératoire', text: 'L’équipe vérifie les zones traitées et remet des consignes adaptées à la méthode utilisée.' },
      ],
      factorsTitle: 'Facteurs techniques plus importants que le marketing',
      factors: ['Taux de transection lors du prélèvement', 'Hydratation et température de conservation', 'Temps passé hors du corps', 'Profondeur et orientation des sites', 'Densité compatible avec la vascularisation', 'Protection des cheveux natifs et de la zone donneuse'],
      questionsTitle: 'Questions techniques à poser',
      questions: ['Pourquoi cette technique est-elle recommandée dans mon cas ?', 'Quelles sont les alternatives ?', 'Le rasage sera-t-il total, partiel ou absent ?', 'Quelle étape sera réalisée par le médecin ?', 'Comment les greffons sont-ils triés et conservés ?', 'Quel diamètre de punch est envisagé ?', 'Comment évitez-vous le sur-prélèvement ?', 'Quelles limites spécifiques dois-je accepter ?'],
      timelineTitle: 'Récupération habituelle',
      timeline: [
        { period: 'Jour de l’intervention', text: 'Anesthésie locale, prélèvement, implantation et pauses selon la durée de la session.' },
        { period: 'Première semaine', text: 'Sensibilité, rougeurs, petites croûtes et gonflement variables.' },
        { period: 'Deuxième semaine', text: 'Les croûtes sont généralement éliminées selon le protocole de lavage.' },
        { period: 'Mois 1 à 3', text: 'Chute transitoire possible et période de faible activité visible.' },
        { period: 'Après le troisième mois', text: 'Repousse progressive, avec maturation sur plusieurs mois.' },
      ],
    },
    profile: {
      title: 'Adapter la greffe au profil et à la zone traitée',
      intro: 'Une ligne frontale, un vertex, une barbe, des sourcils, des cheveux afro ou une cicatrice ne se traitent pas de la même manière. Chaque zone possède une orientation, une densité, une vascularisation et un objectif esthétique spécifiques.',
      assessmentTitle: 'Éléments à analyser pour un résultat naturel',
      assessment: [
        'La forme du visage, l’âge, le sexe, les habitudes de coiffure et les attentes du patient.',
        'L’angle naturel de sortie des cheveux ou des poils dans la zone concernée.',
        'La texture, la courbure, le calibre et le contraste entre la peau et les cheveux.',
        'La stabilité de la perte, la qualité du tissu receveur et les éventuelles cicatrices.',
        'La quantité de greffons fins, doubles ou multiples disponible pour reproduire une transition naturelle.',
      ],
      processTitle: 'Comment se construit le plan esthétique',
      process: [
        { title: 'Analyse morphologique', text: 'La zone est étudiée de face, de profil et en mouvement, avec prise en compte des proportions.' },
        { title: 'Dessin provisoire', text: 'Le projet est tracé puis discuté. Une ligne trop basse ou une densité irréaliste peut compromettre l’avenir.' },
        { title: 'Sélection des greffons', text: 'Les unités les plus fines servent aux bordures ; les greffons plus fournis créent le volume derrière.' },
        { title: 'Orientation', text: 'L’angle et la direction doivent suivre la croissance naturelle propre à la zone.' },
        { title: 'Évaluation à long terme', text: 'Le plan anticipe le vieillissement, la poursuite éventuelle de la chute et les possibilités de retouche.' },
      ],
      factorsTitle: 'Critères de naturel',
      factors: ['Transition irrégulière et progressive', 'Angles très couchés sur les sourcils et la barbe', 'Respect de la spirale du vertex', 'Gestion spécifique des follicules afro courbés', 'Densité prudente sur une cicatrice', 'Cohérence avec l’âge et les traits du visage'],
      questionsTitle: 'Questions spécifiques à votre profil',
      questions: ['Avez-vous déjà traité des cas réellement comparables ?', 'Comment adaptez-vous les angles et le dessin ?', 'Quelle densité est réaliste dans cette zone ?', 'Quels greffons seront utilisés sur la bordure ?', 'Existe-t-il un risque de traumatiser les cheveux natifs ?', 'Une deuxième séance pourrait-elle être nécessaire ?', 'Comment entretenir les poils transplantés ?', 'Quelles photos permettront d’évaluer objectivement le résultat ?'],
      timelineTitle: 'Évolution et entretien',
      timeline: [
        { period: 'Premiers jours', text: 'Rougeurs, croûtes et aspect temporairement plus visible de la zone traitée.' },
        { period: 'Premières semaines', text: 'Chute possible des tiges implantées et poursuite de la cicatrisation.' },
        { period: 'Mois 3 à 6', text: 'Apparition progressive de nouveaux cheveux ou poils, souvent fins au début.' },
        { period: 'Mois 6 à 12', text: 'Augmentation du calibre et amélioration de l’intégration esthétique.' },
        { period: 'Après maturation', text: 'Une retouche ou un entretien particulier peut être discuté selon la zone.' },
      ],
    },
    safety: {
      title: 'Protéger la zone donneuse et réduire les risques',
      intro: 'La réserve donneuse est limitée et les résultats biologiques ne peuvent jamais être garantis à 100 %. La sécurité repose sur une sélection rigoureuse, un prélèvement conservateur, une bonne asepsie et un suivi accessible.',
      assessmentTitle: 'Points de sécurité à vérifier',
      assessment: [
        'La stabilité et la qualité de la zone donneuse, avec recherche de miniaturisation.',
        'Les maladies, traitements ou habitudes pouvant augmenter le risque de saignement ou de mauvaise cicatrisation.',
        'La cause d’un résultat antérieur insuffisant avant d’envisager une correction.',
        'L’état de la peau : inflammation, infection, cicatrice active ou maladie dermatologique.',
        'La capacité de l’équipe à gérer une complication et à organiser un avis médical après le retour.',
      ],
      processTitle: 'Prévention avant, pendant et après',
      process: [
        { title: 'Avant', text: 'Questionnaire complet, examen, consentement éclairé, objectifs réalistes et plan conservateur.' },
        { title: 'Pendant', text: 'Asepsie, surveillance, répartition homogène des prélèvements et manipulation délicate des greffons.' },
        { title: 'Après', text: 'Consignes écrites, médicaments prescrits, protocole de lavage et coordonnées en cas d’urgence.' },
        { title: 'Suivi', text: 'Photos standardisées et contrôles permettant de distinguer une évolution normale d’un signe inhabituel.' },
        { title: 'Correction', text: 'Une seconde intervention n’est discutée qu’après maturation suffisante et nouvelle mesure de la réserve.' },
      ],
      factorsTitle: 'Signes qui nécessitent un contact médical',
      factors: ['Douleur croissante ou inhabituelle', 'Fièvre ou malaise', 'Rougeur qui s’étend', 'Écoulement ou odeur anormale', 'Saignement persistant', 'Gonflement important ou réaction médicamenteuse'],
      questionsTitle: 'Questions de sécurité à poser',
      questions: ['Quel professionnel sera responsable en cas de complication ?', 'Comment évaluez-vous la miniaturisation donneuse ?', 'Combien de greffons ont déjà été prélevés lors des interventions précédentes ?', 'Quels risques sont spécifiques à mon cas ?', 'Quels médicaments seront prescrits et pourquoi ?', 'Quand dois-je envoyer mes premières photos de contrôle ?', 'Quels symptômes sont normaux et lesquels ne le sont pas ?', 'Comment joindre l’équipe le soir ou le week-end ?'],
      timelineTitle: 'Suivi recommandé',
      timeline: [
        { period: '24 à 72 heures', text: 'Contrôle initial, surveillance du gonflement, du saignement et de la douleur.' },
        { period: 'Jours 7 à 14', text: 'Vérification du lavage, des croûtes et de l’état des zones donneuse et receveuse.' },
        { period: 'Mois 1 à 3', text: 'Observation de la chute transitoire, des rougeurs persistantes ou d’un shock loss.' },
        { period: 'Mois 6', text: 'Évaluation intermédiaire de la repousse et de la couverture.' },
        { period: 'Mois 12 à 15', text: 'Bilan de maturation avant toute décision de retouche ou deuxième séance.' },
      ],
    },
  },
  en: {
    planning: {
      title: 'Preparing for a hair transplant in Turkey',
      intro: 'Choosing a destination or package is not enough. A sound plan connects diagnosis, donor capacity, aesthetic goals, professional responsibilities and follow-up after returning home.',
      assessmentTitle: 'What the preliminary assessment should confirm',
      assessment: ['Type and likely progression of hair loss.', 'Donor density, calibre, miniaturisation and usable surface.', 'Treatment priorities and realistic density.', 'Medical history, medication, allergies and healing factors.', 'A long-term strategy that preserves donor supply.'],
      processTitle: 'A properly organised treatment pathway',
      process: [
        { title: '1. Remote review', text: 'Standardised photographs and medical information provide an initial orientation.' },
        { title: '2. In-person validation', text: 'The scalp and donor area are examined and the indication is confirmed.' },
        { title: '3. Surgical plan', text: 'Technique, design, graft priorities, shaving and team responsibilities are explained.' },
        { title: '4. Procedure and control', text: 'Extraction and placement are followed by a check, washing protocol and written instructions.' },
        { title: '5. Remote follow-up', text: 'Regular reviews monitor healing, temporary shedding, growth and warning signs.' },
      ],
      factorsTitle: 'What truly influences the outcome',
      factors: ['Graft handling and storage', 'Conservative donor extraction', 'Natural hairline angle and direction', 'Balance between recipient area and donor supply', 'Postoperative care', 'Future loss of native hair'],
      questionsTitle: 'Questions to ask before booking',
      questions: ['Who performs the assessment and design?', 'Who carries out each surgical stage?', 'How was the graft estimate calculated?', 'What is included and excluded?', 'How will the donor area be protected?', 'What happens if a complication occurs?', 'Which follow-up reviews are planned?', 'Can I see comparable cases including donor photographs?'],
      timelineTitle: 'Typical timeline',
      timeline: [
        { period: 'Before travel', text: 'Assessment, medical instructions and logistical confirmation.' },
        { period: 'Days 1–10', text: 'Graft protection, progressive washing, crusts and variable redness.' },
        { period: 'Weeks 2–8', text: 'Temporary shedding may occur while follicles remain beneath the skin.' },
        { period: 'Months 3–6', text: 'Early growth and gradual improvement in coverage.' },
        { period: 'Months 9–15', text: 'Maturation of density, calibre and texture.' },
      ],
    },
    technique: {
      title: 'Understanding the technique beyond its marketing name',
      intro: 'FUE, DHI, Sapphire and no-shave procedures mainly describe tools and methods of extraction or placement. Results depend more on indication, planning, graft handling and team experience.',
      assessmentTitle: 'Criteria used to select a method',
      assessment: ['Size and location of the treatment area.', 'Donor density and hair calibre.', 'Existing native hair in the recipient area.', 'Shaving preferences and practical constraints.', 'Reasonable operating time and graft out-of-body time.'],
      processTitle: 'Technical stages to understand',
      process: [
        { title: 'Donor preparation', text: 'The stable zone is mapped and extraction is distributed.' },
        { title: 'Follicular extraction', text: 'Units are removed individually and checked.' },
        { title: 'Recipient-site creation', text: 'Angle, depth and density are adapted to the area.' },
        { title: 'Placement', text: 'Single-hair grafts form the border and larger units create volume behind it.' },
        { title: 'Postoperative control', text: 'The treated areas are reviewed and tailored instructions are provided.' },
      ],
      factorsTitle: 'Technical factors that matter more than marketing',
      factors: ['Transection rate', 'Graft hydration and temperature', 'Out-of-body time', 'Site depth and direction', 'Density compatible with blood supply', 'Protection of native hair and donor area'],
      questionsTitle: 'Technical questions to ask',
      questions: ['Why is this method recommended?', 'What are the alternatives?', 'Will shaving be full, partial or absent?', 'Which stage is performed by the doctor?', 'How are grafts sorted and stored?', 'Which punch diameter is planned?', 'How is overharvesting prevented?', 'Which limitations apply to my case?'],
      timelineTitle: 'Typical recovery',
      timeline: [
        { period: 'Procedure day', text: 'Local anaesthesia, extraction, placement and breaks.' },
        { period: 'First week', text: 'Tenderness, redness, crusts and swelling may occur.' },
        { period: 'Second week', text: 'Crusts are usually removed according to the washing protocol.' },
        { period: 'Months 1–3', text: 'Temporary shedding and little visible activity.' },
        { period: 'After month 3', text: 'Progressive growth and maturation.' },
      ],
    },
    profile: {
      title: 'Adapting treatment to the patient and recipient area',
      intro: 'Hairlines, crowns, beards, eyebrows, Afro hair and scars require different angles, density, blood supply considerations and aesthetic goals.',
      assessmentTitle: 'Elements required for a natural result',
      assessment: ['Facial proportions, age and styling habits.', 'Natural exit angle in the treatment area.', 'Texture, curl, calibre and skin–hair contrast.', 'Stability of loss and recipient-tissue quality.', 'Availability of single and multi-hair grafts.'],
      processTitle: 'How the aesthetic plan is built',
      process: [
        { title: 'Morphological assessment', text: 'The area is reviewed from several angles.' },
        { title: 'Provisional design', text: 'The design is discussed and adjusted.' },
        { title: 'Graft selection', text: 'Fine units form borders and larger units create volume.' },
        { title: 'Direction', text: 'Angle and direction reproduce local growth.' },
        { title: 'Long-term review', text: 'The plan anticipates ageing and future loss.' },
      ],
      factorsTitle: 'Naturalness criteria',
      factors: ['Irregular, gradual transition', 'Very flat angles for eyebrows and beard', 'Respect for the crown whorl', 'Specific handling of curved Afro follicles', 'Conservative density on scars', 'Age-appropriate design'],
      questionsTitle: 'Questions for your profile',
      questions: ['Have you treated comparable cases?', 'How will angles and design be adapted?', 'What density is realistic?', 'Which grafts form the border?', 'Could native hair be damaged?', 'Might a second session be needed?', 'Will transplanted hair require maintenance?', 'How will results be photographed?'],
      timelineTitle: 'Growth and maintenance',
      timeline: [
        { period: 'First days', text: 'Redness, crusts and temporary visibility.' },
        { period: 'First weeks', text: 'Shedding of transplanted shafts may occur.' },
        { period: 'Months 3–6', text: 'New growth begins and may initially be fine.' },
        { period: 'Months 6–12', text: 'Calibre and aesthetic integration improve.' },
        { period: 'After maturation', text: 'A touch-up or specific maintenance may be discussed.' },
      ],
    },
    safety: {
      title: 'Protecting the donor area and reducing risk',
      intro: 'Donor supply is limited and biological outcomes cannot be guaranteed. Safety depends on patient selection, conservative extraction, asepsis and accessible follow-up.',
      assessmentTitle: 'Safety points to verify',
      assessment: ['Donor stability and miniaturisation.', 'Medical conditions and medication.', 'Cause of a previous poor result.', 'Inflammation, infection or active skin disease.', 'Access to medical support after returning home.'],
      processTitle: 'Prevention before, during and after treatment',
      process: [
        { title: 'Before', text: 'Medical history, examination, consent and realistic planning.' },
        { title: 'During', text: 'Asepsis, monitoring and evenly distributed extraction.' },
        { title: 'After', text: 'Written instructions, prescribed medication and contact details.' },
        { title: 'Follow-up', text: 'Standardised photographs distinguish normal recovery from warning signs.' },
        { title: 'Revision', text: 'Further surgery is considered only after adequate maturation.' },
      ],
      factorsTitle: 'Symptoms requiring medical contact',
      factors: ['Increasing or unusual pain', 'Fever or malaise', 'Spreading redness', 'Discharge or unusual odour', 'Persistent bleeding', 'Severe swelling or drug reaction'],
      questionsTitle: 'Safety questions to ask',
      questions: ['Who is medically responsible?', 'How is donor miniaturisation assessed?', 'How many grafts were previously removed?', 'Which risks apply to me?', 'Which medicines will be prescribed?', 'When should I send follow-up photographs?', 'Which symptoms are normal?', 'How can I contact the team outside office hours?'],
      timelineTitle: 'Suggested follow-up',
      timeline: [
        { period: '24–72 hours', text: 'Initial review of swelling, bleeding and pain.' },
        { period: 'Days 7–14', text: 'Washing, crusts and donor/recipient healing.' },
        { period: 'Months 1–3', text: 'Temporary shedding and persistent redness are assessed.' },
        { period: 'Month 6', text: 'Intermediate growth review.' },
        { period: 'Months 12–15', text: 'Maturation review before considering revision.' },
      ],
    },
  },
};

const related: Record<Lang, { href: string; label: string }[]> = {
  fr: [
    { href: '/guides-greffe-cheveux', label: 'Tous les guides capillaires' },
    { href: '/nombre-greffons-greffe-cheveux', label: 'Estimer le nombre de greffons' },
    { href: '/zone-donneuse-greffe-cheveux', label: 'Comprendre la zone donneuse' },
    { href: '/soins-apres-greffe-cheveux', label: 'Soins après la greffe' },
  ],
  en: [
    { href: '/en/hair-transplant-guides', label: 'All hair transplant guides' },
    { href: '/en/hair-transplant-graft-count', label: 'Estimate graft requirements' },
    { href: '/en/hair-transplant-donor-area', label: 'Understand the donor area' },
    { href: '/en/hair-transplant-aftercare', label: 'Hair transplant aftercare' },
  ],
};

export default function SeoKnowledgeHub() {
  const { pathname } = useLocation();
  const category = getCategory(pathname);
  if (!category) return null;

  const lang: Lang = pathname.startsWith('/en/') || englishRootRoutes.has(pathname) ? 'en' : 'fr';
  const isFr = lang === 'fr';
  const page = copy[lang][category];

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <header className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-[#2f6bfc] font-semibold mb-4"><Stethoscope size={22} /> {isFr ? 'Guide pratique approfondi' : 'In-depth practical guide'}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-5">{page.title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{page.intro}</p>
        </header>

        <section>
          <h3 className="text-2xl font-bold text-[#224671] mb-6 flex items-center gap-3"><ClipboardCheck className="text-[#2f6bfc]" />{page.assessmentTitle}</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {page.assessment.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-5"><CheckCircle2 className="text-[#2f6bfc] mt-0.5 flex-shrink-0" size={20} /><span className="text-slate-700 leading-relaxed">{item}</span></li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#224671] mb-6">{page.processTitle}</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {page.process.map((step) => (
              <article key={step.title} className="border border-slate-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-[#224671] mb-3">{step.title}</h4>
                <p className="text-slate-700 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#224671] text-white rounded-2xl p-7">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-3"><ShieldCheck />{page.factorsTitle}</h3>
            <ul className="space-y-3">
              {page.factors.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="text-[#6EC1E4] mt-0.5 flex-shrink-0" size={19} /><span className="text-blue-50">{item}</span></li>)}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
            <h3 className="text-2xl font-bold text-[#224671] mb-5 flex items-center gap-3"><HelpCircle className="text-[#2f6bfc]" />{page.questionsTitle}</h3>
            <ol className="space-y-3 list-decimal list-inside text-slate-700">
              {page.questions.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}
            </ol>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#224671] mb-6 flex items-center gap-3"><Clock3 className="text-[#2f6bfc]" />{page.timelineTitle}</h3>
          <div className="space-y-4">
            {page.timeline.map((item) => (
              <div key={item.period} className="grid md:grid-cols-[180px_1fr] gap-3 border-l-4 border-[#2f6bfc] bg-slate-50 rounded-r-xl p-5">
                <strong className="text-[#224671]">{item.period}</strong><p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#224671] mb-5 flex items-center gap-3"><Link2 className="text-[#2f6bfc]" />{isFr ? 'Pour approfondir' : 'Related information'}</h3>
          <div className="flex flex-wrap gap-3">
            {related[lang].map((item) => <Link key={item.href} to={item.href} className="border border-slate-300 rounded-lg px-4 py-3 text-[#224671] font-semibold hover:border-[#2f6bfc] hover:text-[#2f6bfc]">{item.label}</Link>)}
          </div>
        </section>
      </div>
    </section>
  );
}
