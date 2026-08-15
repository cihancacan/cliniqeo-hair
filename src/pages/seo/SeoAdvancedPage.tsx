import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, Languages, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { mountHairPath } from '../../config/hostedPath';

type Lang = 'fr' | 'en';

type AdvancedPageKey =
  | 'sapphireFue'
  | 'dhiVsFue'
  | 'noShave'
  | 'pain'
  | 'donorArea'
  | 'repair'
  | 'aftercare'
  | 'hairline'
  | 'crown'
  | 'eyebrows'
  | 'scar'
  | 'secondTransplant';

interface Section {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface Source {
  label: string;
  url: string;
}

interface PageContent {
  lang: Lang;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: Source[];
}

const IMAGE_CLINIC = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=82';
const IMAGE_CONSULTATION = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=82';
const IMAGE_MEDICAL = 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=82';
const IMAGE_ISTANBUL = 'https://images.pexels.com/photos/18120523/pexels-photo-18120523.jpeg?auto=compress&cs=tinysrgb&w=1600';

const SOURCE_GUIDELINES = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8611706/';
const SOURCE_COMPLICATIONS = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8719980/';
const SOURCE_FUE_REVIEW = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12909172/';
const SOURCE_HAIRLINE = 'https://pubmed.ncbi.nlm.nih.gov/24017977/';
const SOURCE_EYEBROW = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6011870/';
const SOURCE_SCAR = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8719951/';
const SOURCE_NOSHAVE = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/';
const SOURCE_REPAIR = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2884704/';

const sharedSources = {
  guidelines: { label: 'Hair Transplant Practice Guidelines', url: SOURCE_GUIDELINES },
  complications: { label: 'Complications of Hair Transplant Procedures', url: SOURCE_COMPLICATIONS },
  fue: { label: 'Current evidence on FUE complications', url: SOURCE_FUE_REVIEW },
};

const pages: Record<Lang, Record<AdvancedPageKey, PageContent>> = {
  fr: {
    sapphireFue: {
      lang: 'fr', path: '/fue-saphir-turquie', alternatePath: '/en/sapphire-fue-hair-transplant-turkey',
      title: 'FUE Saphir en Turquie : technique, avantages et prix',
      description: 'Guide complet de la greffe FUE Saphir en Turquie : lame saphir, extraction, ouverture des canaux, indications, limites, cicatrisation et prix.',
      h1: 'Greffe de cheveux FUE Saphir en Turquie',
      intro: "La FUE Saphir désigne une greffe où les follicules sont extraits individuellement puis implantés dans des micro-canaux ouverts avec une lame dite saphir. La qualité du résultat dépend surtout du diagnostic, du dessin, de la gestion de la zone donneuse et de l’équipe.",
      keywords: ['FUE saphir turquie','greffe cheveux saphir turquie','prix FUE saphir turquie','greffe FUE istanbul','implant capillaire FUE'],
      image: IMAGE_CLINIC, imageAlt: 'Salle médicale moderne pour une greffe FUE Saphir en Turquie',
      sections: [
        { title: 'Que signifie réellement FUE Saphir ?', paragraphs: ["FUE décrit le prélèvement individuel des unités folliculaires. Le terme saphir concerne l’instrument utilisé pour créer les sites receveurs ; il ne remplace ni l’expertise médicale ni la planification."], bullets: ['Extraction folliculaire individuelle','Ouverture de sites receveurs','Implantation selon angle et direction','Protection de la réserve donneuse'] },
        { title: 'Avantages possibles et limites', paragraphs: ["Des incisions fines et régulières peuvent faciliter une implantation précise. Il n’existe cependant pas de technique universellement supérieure : le calibre des cheveux, la peau, la zone à traiter et l’expérience de l’équipe restent déterminants."] },
        { title: 'Prix et choix de la clinique', paragraphs: ["Le devis doit préciser la technique, le rôle du médecin, le nombre de greffons estimé, l’hôtel, les transferts, les médicaments et le suivi. Une appellation commerciale ne suffit pas à évaluer la qualité."] }
      ],
      faq: [
        { q: 'La FUE Saphir est-elle meilleure que la DHI ?', a: 'Pas dans tous les cas. Le choix dépend du besoin de rasage, de la surface à couvrir, de la densité recherchée et de la stratégie médicale.' },
        { q: 'La lame saphir accélère-t-elle forcément la guérison ?', a: 'La cicatrisation dépend de nombreux facteurs, notamment la technique, la densité des sites, la peau et le respect des soins postopératoires.' },
        { q: 'Combien de greffons peut-on implanter ?', a: 'Le nombre doit être limité par la capacité durable de la zone donneuse et non par un objectif commercial.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    },
    dhiVsFue: {
      lang: 'fr', path: '/dhi-ou-fue', alternatePath: '/en/dhi-vs-fue-hair-transplant',
      title: 'DHI ou FUE : différences et meilleure technique selon le cas',
      description: 'DHI ou FUE : comparez extraction, implantation, rasage, densité, durée, récupération, prix et indications avant une greffe de cheveux.',
      h1: 'DHI ou FUE : quelle technique choisir ?',
      intro: "La DHI et la FUE partagent généralement le même principe d’extraction folliculaire. La différence principale porte sur la création des sites receveurs et la façon d’implanter les greffons.",
      keywords: ['DHI ou FUE','différence FUE DHI','meilleure technique greffe cheveux','greffe DHI turquie','greffe FUE turquie'],
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation pour choisir entre une greffe DHI et FUE',
      sections: [
        { title: 'Comparaison pratique', paragraphs: ["En FUE avec canaux préalables, les sites receveurs sont ouverts avant l’implantation. En DHI, un stylo implanteur peut créer le site et déposer le follicule dans le même geste."], bullets: ['Extraction souvent similaire','Implantation différente','Rasage variable selon le protocole','Temps opératoire dépendant du cas'] },
        { title: 'Quand privilégier l’une ou l’autre ?', paragraphs: ["La DHI peut être intéressante pour certaines petites zones ou une implantation entre des cheveux existants. La FUE Saphir peut être adaptée aux surfaces plus larges. Ces indications ne sont pas absolues."] },
        { title: 'Les critères plus importants que le nom', paragraphs: ["La qualification de l’équipe, le dessin, la manipulation des greffons, leur temps hors du corps et la gestion de la zone donneuse influencent davantage le résultat que le marketing autour d’une technique."] }
      ],
      faq: [
        { q: 'La DHI donne-t-elle toujours plus de densité ?', a: 'Non. La densité dépend du nombre de greffons viables, de la surface, de la vascularisation et du plan d’implantation.' },
        { q: 'La FUE laisse-t-elle des cicatrices ?', a: 'Elle évite la cicatrice linéaire de la FUT, mais peut laisser de petits points hypopigmentés, surtout en cas de prélèvement agressif.' },
        { q: 'Peut-on choisir soi-même la technique ?', a: 'Le patient peut exprimer ses préférences, mais l’indication doit être confirmée après analyse médicale.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    },
    noShave: {
      lang: 'fr', path: '/greffe-cheveux-sans-rasage-turquie', alternatePath: '/en/no-shave-hair-transplant-turkey',
      title: 'Greffe de cheveux sans rasage en Turquie : options et limites',
      description: 'Greffe de cheveux sans rasage en Turquie : FUE non rasée, rasage partiel, long hair FUE, indications, durée, discrétion, prix et limites.',
      h1: 'Greffe de cheveux sans rasage en Turquie',
      intro: "Une greffe sans rasage peut préserver l’apparence pendant la période postopératoire, mais elle demande davantage de temps et n’est pas adaptée à toutes les zones ni à tous les nombres de greffons.",
      keywords: ['greffe cheveux sans rasage turquie','greffe cheveux femme sans rasage','FUE sans rasage','long hair FUE','greffe cheveux discrète'],
      image: IMAGE_CONSULTATION, imageAlt: 'Diagnostic avant une greffe de cheveux sans rasage',
      sections: [
        { title: 'Trois approches possibles', paragraphs: ["Selon le cas, l’équipe peut proposer un rasage total, un rasage partiel caché par les cheveux longs ou une extraction non rasée. La zone receveuse peut elle aussi être rasée ou conservée."], bullets: ['Rasage partiel de la zone donneuse','FUE non rasée','Long hair FUE','Implantation entre cheveux existants'] },
        { title: 'Pour quels patients ?', paragraphs: ["Cette option peut convenir aux femmes, aux patients traitant une petite zone ou à ceux qui souhaitent une reprise sociale discrète. Une grande session peut être plus difficile et plus longue sans rasage."] },
        { title: 'Limites et prix', paragraphs: ["La complexité, le temps opératoire et la sélection des follicules peuvent augmenter le prix. L’objectif esthétique immédiat ne doit jamais conduire à compromettre la qualité du prélèvement."] }
      ],
      faq: [
        { q: 'Sans rasage signifie-t-il invisible ?', a: 'Non. Rougeurs, petites croûtes et gonflement peuvent rester visibles pendant plusieurs jours.' },
        { q: 'Peut-on faire 4 000 greffons sans rasage ?', a: 'Cela dépend de la zone donneuse et de l’organisation de l’équipe, mais les grandes sessions sont souvent moins pratiques sans rasage.' },
        { q: 'Les résultats sont-ils identiques ?', a: 'Avec une équipe expérimentée et une bonne indication, la survie des greffons peut être comparable, mais la procédure est plus exigeante.' }
      ],
      sources: [{ label: 'Nonshaven Follicular Unit Extraction', url: SOURCE_NOSHAVE }, sharedSources.guidelines]
    },
    pain: {
      lang: 'fr', path: '/douleur-greffe-cheveux-anesthesie', alternatePath: '/en/hair-transplant-pain-anesthesia',
      title: 'Douleur et anesthésie lors d’une greffe de cheveux',
      description: 'La greffe de cheveux est-elle douloureuse ? Anesthésie locale, injections, sensations pendant et après, antalgiques, risques et signes d’alerte.',
      h1: 'Douleur et anesthésie pendant une greffe de cheveux',
      intro: "La greffe est habituellement réalisée sous anesthésie locale. Les injections initiales peuvent être inconfortables ; pendant l’intervention, le patient ressent surtout des pressions ou des manipulations plutôt qu’une douleur vive.",
      keywords: ['douleur greffe cheveux','greffe cheveux indolore turquie','anesthésie greffe cheveux','anesthésie sans aiguille greffe cheveux','douleur zone donneuse'],
      image: IMAGE_MEDICAL, imageAlt: 'Équipe médicale préparant une anesthésie locale',
      sections: [
        { title: 'Avant et pendant l’intervention', paragraphs: ["Le protocole doit tenir compte des allergies, traitements, antécédents et de l’anxiété. Une anesthésie locale est injectée dans les zones donneuse et receveuse, avec surveillance pendant la procédure."] },
        { title: 'Après la greffe', paragraphs: ["Une sensibilité, une tension, des démangeaisons ou un engourdissement temporaire peuvent survenir. Les médicaments doivent être pris uniquement selon l’ordonnance de l’équipe médicale."], bullets: ['Ne pas ajouter de médicament sans avis','Signaler une douleur croissante','Surveiller rougeur diffuse, fièvre ou écoulement','Respecter les consignes de lavage'] },
        { title: 'Anesthésie dite sans aiguille', paragraphs: ["Certains dispositifs utilisent une pression pour faire pénétrer un anesthésique, mais une anesthésie complémentaire peut rester nécessaire. Le terme « sans aiguille » ne signifie pas automatiquement absence totale de sensation."] }
      ],
      faq: [
        { q: 'Combien de temps dure l’engourdissement ?', a: 'La durée varie. Une baisse de sensibilité temporaire peut persister au-delà de l’effet anesthésique et doit être signalée si elle s’aggrave.' },
        { q: 'Peut-on dormir pendant la procédure ?', a: 'Une sédation légère peut parfois être proposée, mais elle nécessite une évaluation et une surveillance adaptées.' },
        { q: 'Quand consulter rapidement ?', a: 'Une douleur intense ou croissante, une fièvre, un saignement persistant ou un écoulement justifient un contact médical rapide.' }
      ],
      sources: [sharedSources.complications, sharedSources.fue]
    },
    donorArea: {
      lang: 'fr', path: '/zone-donneuse-greffe-cheveux', alternatePath: '/en/hair-transplant-donor-area',
      title: 'Zone donneuse greffe de cheveux : densité, limites et protection',
      description: 'Comprendre la zone donneuse d’une greffe de cheveux : densité, cheveux disponibles, safe donor area, sur-prélèvement, cicatrices et deuxième intervention.',
      h1: 'Zone donneuse : la réserve essentielle de la greffe de cheveux',
      intro: "La zone donneuse, située le plus souvent à l’arrière et sur les côtés du cuir chevelu, constitue une réserve limitée. Une extraction excessive ou mal répartie peut créer un aspect clairsemé permanent.",
      keywords: ['zone donneuse greffe cheveux','zone donneuse abîmée','surprélèvement zone donneuse','densité zone donneuse','réserve greffons'],
      image: IMAGE_CONSULTATION, imageAlt: 'Analyse médicale de la zone donneuse avant une greffe',
      sections: [
        { title: 'Ce qui doit être mesuré', paragraphs: ["L’analyse porte sur la densité folliculaire, le nombre de cheveux par unité, le calibre, la miniaturisation, la surface sûre et les cicatrices antérieures."], bullets: ['Densité par zone','Calibre et contraste peau-cheveux','Miniaturisation éventuelle','Répartition des prélèvements','Projection des besoins futurs'] },
        { title: 'Éviter le sur-prélèvement', paragraphs: ["Prélever trop de follicules, trop proches les uns des autres ou hors de la zone stable peut donner un aspect mité et réduire les possibilités de correction future."] },
        { title: 'Barbe et corps comme zones complémentaires', paragraphs: ["Dans certains cas sélectionnés, des poils de barbe peuvent compléter la réserve du cuir chevelu, notamment pour créer du volume derrière la ligne frontale. Leur texture différente doit être prise en compte."] }
      ],
      faq: [
        { q: 'La zone donneuse repousse-t-elle ?', a: 'Les follicules prélevés ne repoussent pas à leur emplacement d’origine. Les cheveux restants masquent les petits sites d’extraction.' },
        { q: 'Comment savoir si ma zone donneuse est suffisante ?', a: 'Une estimation visuelle ne suffit pas ; une analyse de densité et de miniaturisation est nécessaire.' },
        { q: 'Peut-on réparer une zone donneuse abîmée ?', a: 'Certaines corrections sont possibles selon la gravité : redistribution, micropigmentation ou greffes ciblées, après diagnostic.' }
      ],
      sources: [sharedSources.fue, sharedSources.complications]
    },
    repair: {
      lang: 'fr', path: '/reparer-greffe-cheveux-ratee', alternatePath: '/en/hair-transplant-repair-turkey',
      title: 'Réparer une greffe de cheveux ratée : diagnostic et solutions',
      description: 'Greffe de cheveux ratée : ligne frontale artificielle, mauvaise orientation, faible densité, plugs, cicatrices et zone donneuse abîmée. Solutions de correction.',
      h1: 'Comment réparer une greffe de cheveux ratée ?',
      intro: "Une correction ne consiste pas toujours à ajouter des greffons. Il faut d’abord identifier la cause : dessin trop bas, orientation incorrecte, greffons multiples en première ligne, faible repousse, cicatrices ou réserve donneuse épuisée.",
      keywords: ['greffe cheveux ratée turquie','réparer greffe cheveux ratée','correction greffe cheveux','zone donneuse abîmée','ligne frontale artificielle'],
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation de correction après une greffe de cheveux insatisfaisante',
      sections: [
        { title: 'Diagnostic avant correction', paragraphs: ["L’équipe doit attendre une maturation suffisante du résultat, analyser la zone donneuse et comparer le projet initial avec la situation actuelle."], bullets: ['Densité et orientation des greffons','Hauteur et forme de la ligne frontale','Cicatrices receveuses et donneuses','Réserve disponible','Stabilité de la chute native'] },
        { title: 'Solutions possibles', paragraphs: ["Selon le problème, les options comprennent l’ajout de greffons fins, l’extraction de greffons mal placés, leur redistribution, le laser ou l’électrolyse dans certains cas, et la micropigmentation pour certaines cicatrices."] },
        { title: 'Objectifs réalistes', paragraphs: ["Une correction doit préserver la réserve restante. Il peut être préférable d’améliorer l’harmonie et la perception de densité plutôt que de rechercher une transformation impossible."] }
      ],
      faq: [
        { q: 'Quand peut-on corriger une greffe ?', a: 'Le délai dépend du problème. Pour juger la repousse, plusieurs mois sont nécessaires ; une urgence médicale doit toutefois être évaluée immédiatement.' },
        { q: 'Peut-on remonter une ligne frontale trop basse ?', a: 'Oui dans certains cas, par extraction sélective ou destruction ciblée de greffons, parfois associée à une nouvelle implantation.' },
        { q: 'Une deuxième clinique peut-elle garantir la correction ?', a: 'Non. Elle doit expliquer les limites liées aux cicatrices et à la réserve donneuse restante.' }
      ],
      sources: [{ label: 'Revision of Unfavorable Hair Transplant Results', url: SOURCE_REPAIR }, sharedSources.complications]
    },
    aftercare: {
      lang: 'fr', path: '/soins-apres-greffe-cheveux', alternatePath: '/en/hair-transplant-aftercare',
      title: 'Soins après une greffe de cheveux : lavage, sport, avion et soleil',
      description: 'Guide des soins après une greffe de cheveux : premier lavage, croûtes, sommeil, casquette, sport, avion, soleil, médicaments et signes d’alerte.',
      h1: 'Soins après une greffe de cheveux',
      intro: "Les consignes exactes varient selon la technique et le protocole de la clinique. Les premiers jours visent surtout à protéger les greffons, limiter les frottements et surveiller les signes inhabituels.",
      keywords: ['premier lavage après greffe cheveux','croûtes après greffe cheveux','dormir après greffe cheveux','sport après greffe cheveux','prendre avion après greffe cheveux','soleil après greffe cheveux'],
      image: IMAGE_CLINIC, imageAlt: 'Suivi médical et soins après une greffe de cheveux',
      sections: [
        { title: 'Les premiers jours', paragraphs: ["Évitez de toucher ou gratter la zone receveuse. Dormez selon la position recommandée et utilisez seulement les produits prescrits."], bullets: ['Protéger des chocs et frottements','Suivre le protocole de lavage','Ne pas retirer les croûtes de force','Prendre les médicaments prescrits','Contacter l’équipe en cas de doute'] },
        { title: 'Sport, casquette, avion et soleil', paragraphs: ["La reprise dépend de l’intensité et de la cicatrisation. Une casquette ne doit pas frotter les greffons. Le vol est souvent possible rapidement, mais l’œdème et le confort doivent être anticipés. L’exposition solaire directe doit être limitée selon les consignes médicales."] },
        { title: 'Signes nécessitant un avis médical', paragraphs: ["Une douleur qui augmente, une fièvre, un saignement persistant, une rougeur qui s’étend, un écoulement ou un gonflement inhabituel doivent être signalés rapidement."] }
      ],
      faq: [
        { q: 'Quand faire le premier lavage ?', a: 'Le jour exact dépend du protocole. La clinique doit montrer la méthode, la pression autorisée et les produits à utiliser.' },
        { q: 'Quand reprendre le sport ?', a: 'La reprise est progressive. Les efforts intenses, la transpiration importante et les sports de contact nécessitent généralement davantage d’attente.' },
        { q: 'Peut-on prendre l’avion après la greffe ?', a: 'Souvent oui, mais il faut suivre les instructions de la clinique, prévoir le gonflement et protéger la tête pendant le trajet.' }
      ],
      sources: [sharedSources.fue, sharedSources.complications]
    },
    hairline: {
      lang: 'fr', path: '/greffe-ligne-frontale-turquie', alternatePath: '/en/hairline-transplant-turkey',
      title: 'Greffe de ligne frontale en Turquie : dessin naturel et greffons',
      description: 'Greffe de ligne frontale en Turquie : hauteur, forme, irrégularités naturelles, golfes, angles, greffons simples, âge et évolution de la calvitie.',
      h1: 'Greffe de ligne frontale naturelle en Turquie',
      intro: "La ligne frontale est la partie la plus visible d’une greffe. Son dessin doit être adapté au visage, à l’âge, aux golfes, à la densité donneuse et à l’évolution probable de la perte de cheveux.",
      keywords: ['greffe ligne frontale turquie','ligne frontale naturelle greffe cheveux','greffe golfes cheveux','abaisser ligne frontale','nombre greffons ligne frontale'],
      image: IMAGE_CONSULTATION, imageAlt: 'Dessin personnalisé de la ligne frontale avant une greffe',
      sections: [
        { title: 'Principes d’un dessin naturel', paragraphs: ["Une ligne trop droite, trop basse ou trop dense peut paraître artificielle et consommer trop de greffons. Les micro-irregularités et l’utilisation de follicules simples en première ligne contribuent au naturel."], bullets: ['Hauteur conservatrice','Forme adaptée au visage','Follicules simples en bordure','Angles très précis','Transition progressive vers la densité'] },
        { title: 'Golfes et tempes', paragraphs: ["La reconstruction des golfes doit préserver une apparence crédible dans le temps. Les tempes exigent des cheveux fins et une orientation particulièrement couchée."] },
        { title: 'Planifier l’avenir', paragraphs: ["Chez un patient jeune ou dont la calvitie évolue, le dessin doit anticiper la perte future pour éviter une ligne isolée devant une zone devenue chauve."] }
      ],
      faq: [
        { q: 'Combien de greffons pour la ligne frontale ?', a: 'Cela dépend de la largeur, du recul, du calibre des cheveux et de la densité souhaitée. Une estimation nécessite des photos et une mesure.' },
        { q: 'Peut-on choisir une ligne très basse ?', a: 'Techniquement parfois, mais une ligne conservatrice est souvent plus naturelle et protège la réserve pour le futur.' },
        { q: 'Pourquoi utiliser des greffons d’un cheveu ?', a: 'Ils créent une bordure plus fine et évitent l’aspect en touffes.' }
      ],
      sources: [{ label: 'Hairline Design and Frontal Restoration', url: SOURCE_HAIRLINE }, sharedSources.guidelines]
    },
    crown: {
      lang: 'fr', path: '/greffe-vertex-turquie', alternatePath: '/en/crown-hair-transplant-turkey',
      title: 'Greffe du vertex en Turquie : tonsure, spirale et greffons',
      description: 'Greffe du vertex ou de la tonsure en Turquie : nombre de greffons, spirale naturelle, densité, priorité avec la ligne frontale et délai de résultat.',
      h1: 'Greffe du vertex et de la tonsure en Turquie',
      intro: "Le vertex couvre une grande surface et présente une orientation en spirale. Il peut consommer beaucoup de greffons ; sa priorité doit donc être mise en balance avec la ligne frontale et la zone centrale.",
      keywords: ['greffe vertex turquie','greffe tonsure turquie','greffe vertex nombre greffons','implant vertex','résultat vertex greffe cheveux'],
      image: IMAGE_CLINIC, imageAlt: 'Planification médicale d’une greffe du vertex',
      sections: [
        { title: 'Pourquoi le vertex est particulier', paragraphs: ["La spirale change de direction autour d’un point central. Reproduire ce mouvement avec une densité visuelle suffisante demande une planification précise."] },
        { title: 'Priorité et nombre de greffons', paragraphs: ["Une grande tonsure peut nécessiter une réserve importante. Chez les calvities avancées, il est parfois préférable de concentrer les greffons sur l’avant et le milieu pour encadrer le visage."], bullets: ['Surface à couvrir','Calibre des cheveux','Contraste peau-cheveux','Réserve donneuse','Perte future probable'] },
        { title: 'Délai du résultat', paragraphs: ["La maturation du vertex peut sembler plus lente que celle de la ligne frontale. Le résultat doit être évalué à distance et dans des conditions photographiques comparables."] }
      ],
      faq: [
        { q: 'Combien de greffons pour une tonsure ?', a: 'La plage est très variable ; seule une mesure de la surface et de la réserve donneuse permet une estimation sérieuse.' },
        { q: 'Peut-on traiter l’avant et le vertex en une fois ?', a: 'Oui dans certains cas, mais la réserve doit être suffisante et les priorités doivent être clairement définies.' },
        { q: 'Pourquoi la repousse semble-t-elle plus lente ?', a: 'La perception est influencée par la spirale, la grande surface et l’éclairage vertical.' }
      ],
      sources: [sharedSources.guidelines, { label: 'Hair Transplantation – StatPearls', url: 'https://www.ncbi.nlm.nih.gov/books/NBK547740/' }]
    },
    eyebrows: {
      lang: 'fr', path: '/greffe-sourcils-turquie', alternatePath: '/en/eyebrow-transplant-turkey',
      title: 'Greffe de sourcils en Turquie : technique, prix et résultats',
      description: 'Greffe de sourcils en Turquie : causes de perte, dessin, FUE, greffons simples, orientation, entretien, séances et résultats avant/après.',
      h1: 'Greffe de sourcils en Turquie',
      intro: "La greffe de sourcils utilise généralement des follicules du cuir chevelu. Le résultat dépend fortement du dessin, de l’utilisation de greffons simples et d’un angle d’implantation très couché.",
      keywords: ['greffe sourcils turquie','implant sourcils istanbul','greffe sourcils avant après','prix greffe sourcils turquie','restauration sourcils'],
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation et dessin avant une greffe de sourcils',
      sections: [
        { title: 'Avant la chirurgie', paragraphs: ["La cause de la perte doit être recherchée : épilation répétée, cicatrice, traumatisme, trouble hormonal ou maladie inflammatoire. Une cause active doit être prise en charge avant d’envisager la greffe."] },
        { title: 'Technique et dessin', paragraphs: ["Des follicules d’un cheveu sont privilégiés. Leur courbure et leur orientation doivent suivre les différentes zones du sourcil."], bullets: ['Tête du sourcil plus verticale','Corps progressivement incliné','Queue fine et couchée','Symétrie adaptée au visage'] },
        { title: 'Entretien et résultat', paragraphs: ["Les cheveux du cuir chevelu transplantés dans le sourcil peuvent continuer à pousser plus longtemps que les poils naturels et nécessiter une coupe régulière. Une séance complémentaire peut parfois être nécessaire."] }
      ],
      faq: [
        { q: 'Les sourcils greffés doivent-ils être coupés ?', a: 'Souvent oui, car les cheveux conservent en partie leurs caractéristiques de croissance d’origine.' },
        { q: 'Combien de séances faut-il ?', a: 'Cela dépend du défaut et de la densité souhaitée ; certains patients nécessitent une retouche.' },
        { q: 'Peut-on greffer sur une cicatrice ?', a: 'Parfois, si la cicatrice est stable, suffisamment vascularisée et évaluée par le médecin.' }
      ],
      sources: [{ label: 'Systematic Review of Eyebrow Hair Transplantation', url: SOURCE_EYEBROW }, sharedSources.guidelines]
    },
    scar: {
      lang: 'fr', path: '/greffe-cheveux-cicatrice', alternatePath: '/en/hair-transplant-on-scar',
      title: 'Greffe de cheveux sur cicatrice : indications et résultats',
      description: 'Greffe de cheveux sur une cicatrice du cuir chevelu, de la barbe ou des sourcils : vascularisation, test, densité, stabilité et limites.',
      h1: 'Greffe de cheveux sur une cicatrice',
      intro: "Une greffe peut camoufler certaines cicatrices après chirurgie, traumatisme ou brûlure. La survie des greffons peut être moins prévisible que sur une peau non cicatricielle, selon l’épaisseur et la vascularisation du tissu.",
      keywords: ['greffe cheveux cicatrice','implant cheveux sur cicatrice','greffe cicatrice FUT','greffe barbe cicatrice','alopécie cicatricielle greffe'],
      image: IMAGE_MEDICAL, imageAlt: 'Évaluation médicale d’une cicatrice avant une greffe capillaire',
      sections: [
        { title: 'Cicatrice stable ou maladie active ?', paragraphs: ["Une cicatrice traumatique stable n’est pas évaluée comme une alopécie inflammatoire active. En cas d’alopécie cicatricielle, une période de stabilité et parfois un avis dermatologique sont nécessaires."] },
        { title: 'Évaluer le tissu receveur', paragraphs: ["Le médecin examine la souplesse, l’épaisseur, la couleur, la vascularisation et les traitements antérieurs. Un test sur une petite zone peut être proposé."], bullets: ['Stabilité de la cicatrice','Qualité de la circulation','Épaisseur du tissu','Objectif de camouflage','Densité prudente'] },
        { title: 'Résultat et retouches', paragraphs: ["Une densité modérée peut être choisie pour protéger la vascularisation. Une seconde séance est parfois nécessaire après évaluation de la première repousse."] }
      ],
      faq: [
        { q: 'Les cheveux poussent-ils normalement sur une cicatrice ?', a: 'Ils peuvent pousser, mais le taux de survie dépend de la qualité du tissu cicatriciel.' },
        { q: 'Peut-on cacher une cicatrice FUT ?', a: 'Des greffons FUE ou une micropigmentation peuvent parfois réduire sa visibilité, selon sa largeur et la réserve disponible.' },
        { q: 'Une alopécie cicatricielle peut-elle être greffée ?', a: 'Seulement après évaluation spécialisée et lorsque la maladie est jugée suffisamment stable.' }
      ],
      sources: [{ label: 'Hair Transplantation in Scarring Alopecia', url: SOURCE_SCAR }, sharedSources.guidelines]
    },
    secondTransplant: {
      lang: 'fr', path: '/deuxieme-greffe-cheveux-turquie', alternatePath: '/en/second-hair-transplant-turkey',
      title: 'Deuxième greffe de cheveux en Turquie : délai et faisabilité',
      description: 'Deuxième greffe de cheveux en Turquie : pourquoi, quand, analyse de la zone donneuse, densification, vertex, correction et nombre de greffons restant.',
      h1: 'Deuxième greffe de cheveux en Turquie',
      intro: "Une deuxième intervention peut densifier une première zone, traiter le vertex, suivre l’évolution de la calvitie ou corriger un résultat. Sa faisabilité dépend surtout de la réserve donneuse restante.",
      keywords: ['deuxième greffe cheveux turquie','seconde greffe capillaire','densification après greffe','retouche greffe cheveux','greffons restants zone donneuse'],
      image: IMAGE_ISTANBUL, imageAlt: 'Préparation d’un deuxième séjour de greffe de cheveux en Turquie',
      sections: [
        { title: 'Pourquoi envisager une deuxième greffe ?', paragraphs: ["Les raisons fréquentes sont une calvitie qui progresse, une couverture volontairement réalisée en plusieurs étapes, une densité insuffisante ou un besoin de correction."], bullets: ['Densification de la ligne frontale','Traitement du dessus ou du vertex','Évolution de la perte native','Correction d’angles ou de cicatrices'] },
        { title: 'Quand la planifier ?', paragraphs: ["Il faut généralement attendre la maturation du premier résultat afin d’évaluer la repousse, les cicatrices et les besoins réels. Le délai exact doit être défini par le médecin."] },
        { title: 'Nouvelle analyse de la zone donneuse', paragraphs: ["Le nombre extrait lors de la première intervention, la répartition, la densité actuelle et la miniaturisation doivent être réévalués. Les photos ou le rapport opératoire initial sont utiles."] }
      ],
      faq: [
        { q: 'Combien de temps attendre entre deux greffes ?', a: 'Il faut laisser suffisamment de temps à la première greffe pour mûrir ; le médecin fixe le délai selon la zone et le résultat.' },
        { q: 'Peut-on prélever au même endroit ?', a: 'Oui parfois, mais uniquement après mesure de la densité restante et avec une répartition prudente.' },
        { q: 'La barbe peut-elle compléter la zone donneuse ?', a: 'Dans certains profils, elle peut servir de source complémentaire, surtout derrière la ligne frontale.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    }
  },
  en: {
    sapphireFue: {
      lang: 'en', path: '/en/sapphire-fue-hair-transplant-turkey', alternatePath: '/fue-saphir-turquie',
      title: 'Sapphire FUE Hair Transplant in Turkey: Technique and Cost',
      description: 'Complete guide to Sapphire FUE in Turkey: extraction, sapphire blades, channel creation, indications, limitations, recovery and pricing.',
      h1: 'Sapphire FUE Hair Transplant in Turkey',
      intro: 'Sapphire FUE refers to individual follicular extraction followed by recipient-site creation with a sapphire-type blade. Outcome quality still depends primarily on diagnosis, design, donor management and the team.',
      keywords: ['sapphire FUE Turkey','sapphire hair transplant Turkey','FUE sapphire cost Turkey','FUE hair transplant Istanbul','follicular unit extraction Turkey'],
      image: IMAGE_CLINIC, imageAlt: 'Modern medical room for Sapphire FUE in Turkey',
      sections: [
        { title: 'What does Sapphire FUE mean?', paragraphs: ['FUE describes the harvesting method. Sapphire refers to the instrument used to create recipient sites; it does not replace medical planning or surgical skill.'], bullets: ['Individual follicular harvesting','Recipient-site creation','Angle and direction planning','Conservative donor management'] },
        { title: 'Potential benefits and limitations', paragraphs: ['Fine, consistent incisions may support precise placement. No single technique is best for every patient; hair calibre, skin, treatment area and team experience remain decisive.'] },
        { title: 'Cost and clinic selection', paragraphs: ['A transparent quote should state the technique, doctor involvement, estimated graft count, hotel, transfers, medicines and follow-up.'] }
      ],
      faq: [
        { q: 'Is Sapphire FUE better than DHI?', a: 'Not universally. The choice depends on shaving preferences, treatment size, density goals and medical planning.' },
        { q: 'Does sapphire guarantee faster healing?', a: 'Healing depends on many factors, including incision density, skin characteristics and aftercare.' },
        { q: 'How many grafts can be implanted?', a: 'The safe number is limited by long-term donor capacity rather than a sales target.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    },
    dhiVsFue: {
      lang: 'en', path: '/en/dhi-vs-fue-hair-transplant', alternatePath: '/dhi-ou-fue',
      title: 'DHI vs FUE Hair Transplant: Differences and Selection',
      description: 'Compare DHI and FUE hair transplantation: extraction, implantation, shaving, density, duration, recovery, price and patient selection.',
      h1: 'DHI vs FUE: Which Hair Transplant Technique?',
      intro: 'DHI and FUE commonly share a similar follicular extraction principle. The main difference concerns recipient-site creation and graft placement.',
      keywords: ['DHI vs FUE','difference between FUE and DHI','best hair transplant technique','DHI Turkey','FUE Turkey'],
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation comparing DHI and FUE hair transplant methods',
      sections: [
        { title: 'Practical comparison', paragraphs: ['With pre-made-channel FUE, recipient sites are created before placement. With DHI, an implanter pen may create the site and place the graft in one motion.'], bullets: ['Often similar extraction','Different placement workflow','Variable shaving protocols','Case-dependent operating time'] },
        { title: 'When might each be used?', paragraphs: ['DHI may suit selected smaller areas or placement among existing hair. Sapphire FUE may suit larger surfaces. These are not absolute rules.'] },
        { title: 'Factors that matter more than the label', paragraphs: ['Team qualifications, design, graft handling, out-of-body time and donor management usually matter more than marketing terminology.'] }
      ],
      faq: [
        { q: 'Does DHI always provide higher density?', a: 'No. Density depends on viable grafts, surface area, blood supply and planning.' },
        { q: 'Is FUE scarless?', a: 'It avoids a linear FUT scar but can leave tiny hypopigmented dots, especially after aggressive harvesting.' },
        { q: 'Can the patient choose the method?', a: 'Preferences matter, but the indication should be confirmed after assessment.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    },
    noShave: {
      lang: 'en', path: '/en/no-shave-hair-transplant-turkey', alternatePath: '/greffe-cheveux-sans-rasage-turquie',
      title: 'No-Shave Hair Transplant in Turkey: Options and Limits',
      description: 'No-shave hair transplant in Turkey: unshaven FUE, partial shaving, long-hair FUE, eligibility, discretion, duration, cost and limitations.',
      h1: 'No-Shave Hair Transplant in Turkey',
      intro: 'A no-shave procedure may preserve appearance during recovery, but it takes longer and is not suitable for every area or graft count.',
      keywords: ['no shave hair transplant Turkey','unshaven FUE Turkey','female hair transplant no shave','long hair FUE','discreet hair transplant'],
      image: IMAGE_CONSULTATION, imageAlt: 'Assessment before an unshaven hair transplant',
      sections: [
        { title: 'Three possible approaches', paragraphs: ['Depending on the case, the team may propose full shaving, a concealed partial shave or non-shaven extraction. The recipient area may also be shaved or preserved.'], bullets: ['Concealed donor shaving','Non-shaven FUE','Long-hair FUE','Placement among existing hair'] },
        { title: 'Who may be suitable?', paragraphs: ['It may suit women, patients treating a small area or those seeking discreet social recovery. Large sessions can be more difficult and time-consuming.'] },
        { title: 'Limits and cost', paragraphs: ['Extra time and technical complexity may increase the price. Immediate discretion should not compromise harvesting quality.'] }
      ],
      faq: [
        { q: 'Does no-shave mean invisible?', a: 'No. Redness, crusts and swelling may still be visible for several days.' },
        { q: 'Can 4,000 grafts be done without shaving?', a: 'It depends on donor characteristics and team logistics, but very large sessions are less practical.' },
        { q: 'Are results comparable?', a: 'With proper selection and an experienced team, graft survival can be comparable, although the procedure is more demanding.' }
      ],
      sources: [{ label: 'Nonshaven Follicular Unit Extraction', url: SOURCE_NOSHAVE }, sharedSources.guidelines]
    },
    pain: {
      lang: 'en', path: '/en/hair-transplant-pain-anesthesia', alternatePath: '/douleur-greffe-cheveux-anesthesie',
      title: 'Hair Transplant Pain and Anaesthesia: What to Expect',
      description: 'Is a hair transplant painful? Local anaesthesia, injections, sensations during and after surgery, pain relief, risks and warning signs.',
      h1: 'Pain and Anaesthesia During Hair Transplantation',
      intro: 'Hair transplantation is usually performed under local anaesthesia. Initial injections may be uncomfortable; during surgery, patients commonly feel pressure or movement rather than sharp pain.',
      keywords: ['hair transplant pain','hair transplant anesthesia','painless hair transplant Turkey','needle free anesthesia hair transplant','donor area pain'],
      image: IMAGE_MEDICAL, imageAlt: 'Medical team preparing local anaesthesia',
      sections: [
        { title: 'Before and during the procedure', paragraphs: ['The protocol should account for allergies, medicines, medical history and anxiety. Local anaesthetic is applied to donor and recipient areas with monitoring.'] },
        { title: 'After surgery', paragraphs: ['Temporary tenderness, tightness, itching or numbness may occur. Medicines should be taken only as prescribed.'], bullets: ['Do not add medicines without advice','Report increasing pain','Watch for spreading redness or fever','Follow washing instructions'] },
        { title: 'So-called needle-free anaesthesia', paragraphs: ['Pressure devices may deliver an anaesthetic, but supplementary injections can still be required. The term does not guarantee complete absence of sensation.'] }
      ],
      faq: [
        { q: 'How long does numbness last?', a: 'Duration varies. Temporary reduced sensation may outlast the anaesthetic and should be reported if worsening.' },
        { q: 'Can patients sleep during surgery?', a: 'Light sedation may sometimes be considered, but it requires appropriate assessment and monitoring.' },
        { q: 'When should I seek urgent advice?', a: 'Severe increasing pain, fever, persistent bleeding or discharge warrant prompt medical contact.' }
      ],
      sources: [sharedSources.complications, sharedSources.fue]
    },
    donorArea: {
      lang: 'en', path: '/en/hair-transplant-donor-area', alternatePath: '/zone-donneuse-greffe-cheveux',
      title: 'Hair Transplant Donor Area: Density, Limits and Protection',
      description: 'Understand the donor area: density, safe donor zone, available grafts, overharvesting, scarring, beard grafts and second procedures.',
      h1: 'The Hair Transplant Donor Area',
      intro: 'The donor area, usually at the back and sides of the scalp, is a limited reserve. Excessive or uneven extraction can create permanent visible thinning.',
      keywords: ['hair transplant donor area','overharvested donor area','donor density','safe donor area','available hair grafts'],
      image: IMAGE_CONSULTATION, imageAlt: 'Medical analysis of the donor area before hair transplantation',
      sections: [
        { title: 'What should be measured?', paragraphs: ['Assessment includes follicular density, hairs per unit, calibre, miniaturisation, stable surface and previous scarring.'], bullets: ['Density by region','Hair calibre and contrast','Miniaturisation','Harvest distribution','Future needs'] },
        { title: 'Preventing overharvesting', paragraphs: ['Taking too many follicles, clustering extraction or harvesting outside the stable zone can create a moth-eaten appearance and reduce future options.'] },
        { title: 'Beard and body hair', paragraphs: ['In selected patients, beard hair may supplement scalp grafts, often for volume behind the frontal zone. Texture differences must be considered.'] }
      ],
      faq: [
        { q: 'Does the donor area grow back?', a: 'Extracted follicles do not regrow at the original site; remaining hair conceals the small extraction sites.' },
        { q: 'How can donor capacity be assessed?', a: 'Visual inspection alone is insufficient; density and miniaturisation should be measured.' },
        { q: 'Can an overharvested donor area be repaired?', a: 'Options may include targeted redistribution, scalp micropigmentation or selected grafting after diagnosis.' }
      ],
      sources: [sharedSources.fue, sharedSources.complications]
    },
    repair: {
      lang: 'en', path: '/en/hair-transplant-repair-turkey', alternatePath: '/reparer-greffe-cheveux-ratee',
      title: 'Hair Transplant Repair in Turkey: Diagnosis and Options',
      description: 'Repair a poor hair transplant: unnatural hairline, wrong angles, low density, plugs, scars and donor damage. Learn corrective options and limits.',
      h1: 'How Can a Poor Hair Transplant Be Repaired?',
      intro: 'Correction does not always mean adding grafts. The first step is identifying the cause: a low hairline, wrong direction, multi-hair grafts at the front, poor growth, scarring or depleted donor supply.',
      keywords: ['hair transplant repair Turkey','bad hair transplant correction','unnatural hairline repair','overharvested donor area repair','hair transplant revision'],
      image: IMAGE_CONSULTATION, imageAlt: 'Corrective consultation after an unsatisfactory hair transplant',
      sections: [
        { title: 'Assessment before repair', paragraphs: ['The team should allow adequate maturation, assess donor capacity and compare the original plan with the current result.'], bullets: ['Graft density and direction','Hairline height and shape','Recipient and donor scars','Remaining reserve','Progression of native loss'] },
        { title: 'Possible solutions', paragraphs: ['Options may include adding fine grafts, extracting misplaced grafts, redistributing them, selected laser or electrolysis, and micropigmentation for certain scars.'] },
        { title: 'Realistic objectives', paragraphs: ['The remaining donor supply must be protected. Improving harmony and visual density may be safer than pursuing an impossible transformation.'] }
      ],
      faq: [
        { q: 'When can repair be performed?', a: 'Timing depends on the problem. Growth needs months to mature, while urgent medical complications require immediate assessment.' },
        { q: 'Can a very low hairline be raised?', a: 'In selected cases, grafts can be selectively removed or destroyed, sometimes followed by refined placement.' },
        { q: 'Can a repair clinic guarantee success?', a: 'No. It should explain limitations caused by scarring and remaining donor capacity.' }
      ],
      sources: [{ label: 'Revision of Unfavorable Hair Transplant Results', url: SOURCE_REPAIR }, sharedSources.complications]
    },
    aftercare: {
      lang: 'en', path: '/en/hair-transplant-aftercare', alternatePath: '/soins-apres-greffe-cheveux',
      title: 'Hair Transplant Aftercare: Washing, Exercise, Flying and Sun',
      description: 'Hair transplant aftercare guide: first wash, crusts, sleeping, hats, exercise, flying, sun exposure, medicines and warning signs.',
      h1: 'Hair Transplant Aftercare',
      intro: 'Exact instructions vary by technique and clinic protocol. During the first days, the priorities are protecting grafts, avoiding friction and recognising unusual symptoms.',
      keywords: ['first wash after hair transplant','crusts after hair transplant','sleep after hair transplant','exercise after hair transplant','flying after hair transplant','sun after hair transplant'],
      image: IMAGE_CLINIC, imageAlt: 'Medical follow-up and aftercare after hair transplantation',
      sections: [
        { title: 'The first days', paragraphs: ['Avoid touching or scratching the recipient area. Sleep as instructed and use only prescribed products.'], bullets: ['Protect from impact and friction','Follow the washing protocol','Do not force crust removal','Take prescribed medicines','Contact the team when unsure'] },
        { title: 'Exercise, hats, flights and sun', paragraphs: ['Return depends on intensity and healing. Hats must not rub grafts. Flying is often possible soon, but swelling and comfort should be planned. Direct sun exposure should be limited according to medical advice.'] },
        { title: 'Warning signs', paragraphs: ['Increasing pain, fever, persistent bleeding, spreading redness, discharge or unusual swelling should be reported promptly.'] }
      ],
      faq: [
        { q: 'When is the first wash?', a: 'The exact day depends on the protocol. The clinic should demonstrate the method, pressure and products.' },
        { q: 'When can I exercise?', a: 'Return is progressive. Intense exercise, heavy sweating and contact sports generally need more time.' },
        { q: 'Can I fly after surgery?', a: 'Often yes, but follow clinic instructions, expect possible swelling and protect the scalp during travel.' }
      ],
      sources: [sharedSources.fue, sharedSources.complications]
    },
    hairline: {
      lang: 'en', path: '/en/hairline-transplant-turkey', alternatePath: '/greffe-ligne-frontale-turquie',
      title: 'Hairline Transplant in Turkey: Natural Design and Graft Planning',
      description: 'Hairline transplant in Turkey: height, shape, natural irregularities, temple recession, angles, single-hair grafts, age and future loss.',
      h1: 'Natural Hairline Transplant in Turkey',
      intro: 'The hairline is the most visible part of a transplant. Design should reflect facial proportions, age, temples, donor capacity and likely future loss.',
      keywords: ['hairline transplant Turkey','natural hairline hair transplant','temple hair transplant','lower hairline Turkey','hairline graft count'],
      image: IMAGE_CONSULTATION, imageAlt: 'Personalised hairline design before transplantation',
      sections: [
        { title: 'Principles of natural design', paragraphs: ['A hairline that is too straight, low or dense can appear artificial and consume excessive grafts. Micro-irregularities and single-hair grafts at the edge support a natural result.'], bullets: ['Conservative height','Face-appropriate shape','Single-hair leading edge','Precise angles','Progressive density transition'] },
        { title: 'Temples and recession', paragraphs: ['Temple restoration requires fine hairs and a particularly flat direction. The plan should remain believable over time.'] },
        { title: 'Planning for the future', paragraphs: ['In younger patients or progressive loss, design should anticipate future thinning to avoid an isolated frontal band.'] }
      ],
      faq: [
        { q: 'How many grafts are needed for a hairline?', a: 'It depends on width, recession, hair calibre and desired density. Photos and measurements are needed.' },
        { q: 'Can the hairline be very low?', a: 'Sometimes technically, but a conservative line is often more natural and preserves donor supply.' },
        { q: 'Why are single-hair grafts used?', a: 'They create a softer leading edge and avoid a plug-like appearance.' }
      ],
      sources: [{ label: 'Hairline Design and Frontal Restoration', url: SOURCE_HAIRLINE }, sharedSources.guidelines]
    },
    crown: {
      lang: 'en', path: '/en/crown-hair-transplant-turkey', alternatePath: '/greffe-vertex-turquie',
      title: 'Crown Hair Transplant in Turkey: Whorl and Graft Planning',
      description: 'Crown or vertex hair transplant in Turkey: graft count, natural whorl, density, priority versus frontal hairline and result timeline.',
      h1: 'Crown and Vertex Hair Transplant in Turkey',
      intro: 'The crown covers a broad surface and follows a whorl pattern. It can consume many grafts, so its priority must be balanced against frontal and mid-scalp needs.',
      keywords: ['crown hair transplant Turkey','vertex hair transplant Turkey','crown graft count','bald spot transplant','crown hair transplant results'],
      image: IMAGE_CLINIC, imageAlt: 'Medical planning for a crown hair transplant',
      sections: [
        { title: 'Why the crown is different', paragraphs: ['Hair changes direction around a central whorl. Recreating this pattern with useful visual density requires precise planning.'] },
        { title: 'Priority and graft count', paragraphs: ['A large crown may require substantial donor supply. In advanced loss, focusing on the front and mid-scalp can frame the face more effectively.'], bullets: ['Treatment surface','Hair calibre','Skin–hair contrast','Donor reserve','Likely future loss'] },
        { title: 'Result timeline', paragraphs: ['Crown maturation may appear slower than frontal growth. Results should be judged later and under comparable lighting.'] }
      ],
      faq: [
        { q: 'How many grafts does the crown need?', a: 'The range is wide; surface measurement and donor analysis are required.' },
        { q: 'Can front and crown be treated together?', a: 'In selected cases, provided donor capacity is adequate and priorities are clear.' },
        { q: 'Why can crown growth look slower?', a: 'The whorl pattern, broad surface and overhead lighting influence visual perception.' }
      ],
      sources: [sharedSources.guidelines, { label: 'Hair Transplantation – StatPearls', url: 'https://www.ncbi.nlm.nih.gov/books/NBK547740/' }]
    },
    eyebrows: {
      lang: 'en', path: '/en/eyebrow-transplant-turkey', alternatePath: '/greffe-sourcils-turquie',
      title: 'Eyebrow Transplant in Turkey: Technique, Cost and Results',
      description: 'Eyebrow transplant in Turkey: causes of loss, design, FUE, single-hair grafts, direction, maintenance, sessions and before-after results.',
      h1: 'Eyebrow Transplant in Turkey',
      intro: 'Eyebrow transplantation usually uses scalp follicles. Results depend heavily on design, single-hair graft selection and very flat implantation angles.',
      keywords: ['eyebrow transplant Turkey','eyebrow restoration Istanbul','eyebrow transplant before after','eyebrow transplant cost Turkey','FUE eyebrow transplant'],
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation and design before eyebrow transplantation',
      sections: [
        { title: 'Before surgery', paragraphs: ['The cause of loss should be investigated, including overplucking, scars, trauma, hormonal conditions or inflammatory disease. Active causes should be managed first.'] },
        { title: 'Technique and design', paragraphs: ['Single-hair follicles are preferred. Curl and direction must match each eyebrow zone.'], bullets: ['More upright medial brow','Gradually angled body','Fine, flat tail','Face-appropriate symmetry'] },
        { title: 'Maintenance and results', paragraphs: ['Scalp hairs transplanted to eyebrows may grow longer than native eyebrow hair and require trimming. A touch-up session may be needed.'] }
      ],
      faq: [
        { q: 'Do transplanted eyebrows need trimming?', a: 'Often yes, because scalp hairs retain some of their original growth characteristics.' },
        { q: 'How many sessions are required?', a: 'It depends on the defect and density goal; some patients need refinement.' },
        { q: 'Can eyebrows be transplanted over a scar?', a: 'Sometimes, if the scar is stable, adequately vascularised and medically assessed.' }
      ],
      sources: [{ label: 'Systematic Review of Eyebrow Hair Transplantation', url: SOURCE_EYEBROW }, sharedSources.guidelines]
    },
    scar: {
      lang: 'en', path: '/en/hair-transplant-on-scar', alternatePath: '/greffe-cheveux-cicatrice',
      title: 'Hair Transplant on Scar Tissue: Eligibility and Results',
      description: 'Hair transplantation over scalp, beard or eyebrow scars: blood supply, test sessions, density, disease stability, graft survival and limitations.',
      h1: 'Hair Transplantation on Scar Tissue',
      intro: 'Transplantation can camouflage selected scars after surgery, trauma or burns. Graft survival may be less predictable than in normal skin depending on tissue thickness and blood supply.',
      keywords: ['hair transplant on scar','hair transplant FUT scar','beard scar hair transplant','scarring alopecia transplant','FUE into scar tissue'],
      image: IMAGE_MEDICAL, imageAlt: 'Medical assessment of scar tissue before hair transplantation',
      sections: [
        { title: 'Stable scar or active disease?', paragraphs: ['A stable traumatic scar is not assessed like active inflammatory scarring alopecia. In the latter, disease stability and dermatology input may be required.'] },
        { title: 'Assessing recipient tissue', paragraphs: ['The doctor evaluates flexibility, thickness, colour, blood supply and previous treatments. A small test session may be considered.'], bullets: ['Scar stability','Tissue perfusion','Thickness','Camouflage goal','Conservative density'] },
        { title: 'Results and touch-ups', paragraphs: ['Moderate density may be selected to protect blood supply. A second session can be considered after observing initial growth.'] }
      ],
      faq: [
        { q: 'Will hair grow normally in scar tissue?', a: 'It may grow, but survival depends on scar quality and vascularity.' },
        { q: 'Can a FUT scar be concealed?', a: 'FUE grafting or scalp micropigmentation may reduce visibility depending on scar width and donor supply.' },
        { q: 'Can scarring alopecia be transplanted?', a: 'Only after specialist assessment and sufficient disease stability.' }
      ],
      sources: [{ label: 'Hair Transplantation in Scarring Alopecia', url: SOURCE_SCAR }, sharedSources.guidelines]
    },
    secondTransplant: {
      lang: 'en', path: '/en/second-hair-transplant-turkey', alternatePath: '/deuxieme-greffe-cheveux-turquie',
      title: 'Second Hair Transplant in Turkey: Timing and Feasibility',
      description: 'Second hair transplant in Turkey: reasons, timing, donor reassessment, density improvement, crown work, correction and remaining graft supply.',
      h1: 'Second Hair Transplant in Turkey',
      intro: 'A second procedure may increase density, treat the crown, address progressive loss or refine a previous result. Feasibility depends mainly on remaining donor capacity.',
      keywords: ['second hair transplant Turkey','hair transplant touch up','hair transplant density session','remaining donor grafts','repeat FUE Turkey'],
      image: IMAGE_ISTANBUL, imageAlt: 'Planning a second hair transplant trip to Turkey',
      sections: [
        { title: 'Why consider a second transplant?', paragraphs: ['Common reasons include progressive loss, deliberately staged coverage, insufficient density or corrective needs.'], bullets: ['Frontal density refinement','Mid-scalp or crown treatment','Progressive native loss','Correction of angles or scars'] },
        { title: 'When should it be planned?', paragraphs: ['The first result needs enough time to mature so growth, scarring and actual needs can be assessed. The doctor determines the exact interval.'] },
        { title: 'Reassessing the donor area', paragraphs: ['The number previously extracted, distribution, current density and miniaturisation should be reviewed. Initial operative records and photographs are useful.'] }
      ],
      faq: [
        { q: 'How long between two transplants?', a: 'Enough time is needed for the first result to mature; timing is set according to the treated area and outcome.' },
        { q: 'Can the same donor area be used?', a: 'Sometimes, after measuring remaining density and planning a conservative distribution.' },
        { q: 'Can beard hair supplement the donor area?', a: 'In selected patients, it may provide additional grafts, especially behind the frontal zone.' }
      ],
      sources: [sharedSources.guidelines, sharedSources.fue]
    }
  }
};

export interface SeoAdvancedPageProps {
  lang: Lang;
  pageKey: AdvancedPageKey;
}

export default function SeoAdvancedPage({ lang, pageKey }: SeoAdvancedPageProps) {
  const page = pages[lang][pageKey];
  const isFr = lang === 'fr';
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://cliniqeo-hair.vercel.app';
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: page.h1,
    headline: page.h1,
    description: page.description,
    url: `${origin}${mountHairPath(page.path)}`,
    inLanguage: lang,
    dateModified: '2026-07-31',
    about: { '@type': 'MedicalProcedure', name: isFr ? 'Greffe de cheveux' : 'Hair transplantation' },
    publisher: { '@type': 'Organization', name: 'Cliniqeo Hair', url: `${origin}${mountHairPath('/')}` },
  };

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        lang={lang}
        keywords={page.keywords}
        alternates={[
          { lang, path: page.path },
          { lang: isFr ? 'en' : 'fr', path: page.alternatePath },
          { lang: 'x-default', path: isFr ? page.path : page.alternatePath },
        ]}
        image={page.image}
        schema={[medicalSchema, faqSchema]}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-100 font-semibold mb-4"><ShieldCheck size={22} /> Cliniqeo Hair</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{page.h1}</h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#2f6bfc] px-7 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                {isFr ? 'Diagnostic capillaire gratuit' : 'Free hair assessment'}
              </Link>
              <Link to={page.alternatePath} className="inline-flex items-center gap-2 border border-white/50 px-5 py-4 rounded-lg hover:bg-white/10">
                <Languages size={18} /> {isFr ? 'English version' : 'Version française'}
              </Link>
            </div>
          </div>
          <img src={page.image} alt={page.imageAlt} className="w-full h-[360px] object-cover rounded-2xl shadow-2xl" loading="eager" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-12">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-bold text-[#224671] mb-5">{section.title}</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="grid md:grid-cols-2 gap-3 mt-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                      <CheckCircle2 className="text-[#2f6bfc] mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8">{isFr ? 'Questions fréquentes' : 'Frequently asked questions'}</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <details key={item.q} className="bg-white border border-slate-200 rounded-xl p-6 group">
                <summary className="font-bold text-lg text-[#224671] cursor-pointer">{item.q}</summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#224671] mb-5">{isFr ? 'Sources médicales consultées' : 'Medical references reviewed'}</h2>
        <div className="flex flex-wrap gap-3">
          {page.sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-slate-300 rounded-lg px-4 py-3 text-[#224671] hover:border-[#2f6bfc] hover:text-[#2f6bfc]">
              {source.label} <ExternalLink size={16} />
            </a>
          ))}
        </div>
        <p className="mt-7 text-sm text-slate-500">
          {isFr
            ? 'Ces informations sont générales et ne remplacent pas une consultation ni un diagnostic médical individuel.'
            : 'This general information does not replace an individual medical consultation or diagnosis.'}
        </p>
      </section>

      <section className="bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{isFr ? 'Obtenez une analyse personnalisée' : 'Get a personalised assessment'}</h2>
          <p className="text-xl text-blue-100 mb-8">{isFr ? 'Décrivez votre situation pour recevoir une première orientation personnalisée.' : 'Tell us about your situation for personalised initial guidance.'}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-blue-50">
            {isFr ? 'Commencer le diagnostic' : 'Start the assessment'} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
