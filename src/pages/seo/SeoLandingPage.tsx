import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, Stethoscope, Plane, Hotel, Languages, Clock3 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { mountHairPath } from '../../config/hostedPath';

type Lang = 'fr' | 'en';

type PageKey =
  | 'istanbul'
  | 'allInclusive'
  | 'reviews'
  | 'beforeAfter'
  | 'women'
  | 'afro'
  | 'beard'
  | 'grafts'
  | 'risks'
  | 'recovery';

interface PageContent {
  lang: Lang;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { q: string; a: string }[];
}

const IMAGE_ISTANBUL = 'https://images.pexels.com/photos/18120523/pexels-photo-18120523.jpeg?auto=compress&cs=tinysrgb&w=1600';
const IMAGE_CLINIC = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=82';
const IMAGE_CONSULTATION = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=82';

const frBase = {
  lang: 'fr' as const,
  cta: 'Recevoir mon diagnostic capillaire gratuit',
  disclaimer: "Les informations de cette page sont générales. L'indication, la technique et le nombre de greffons doivent être confirmés après analyse médicale de la zone donneuse et de la zone receveuse.",
};

const enBase = {
  lang: 'en' as const,
  cta: 'Get my free hair assessment',
  disclaimer: 'This page provides general information. Eligibility, technique and graft count must be confirmed after a medical assessment of the donor and recipient areas.',
};

const pages: Record<Lang, Record<PageKey, PageContent>> = {
  fr: {
    istanbul: {
      lang: 'fr', path: '/greffe-cheveux-istanbul', alternatePath: '/en/hair-transplant-istanbul',
      title: 'Greffe de cheveux à Istanbul : guide complet, prix et techniques',
      description: 'Guide complet de la greffe de cheveux à Istanbul : FUE Saphir, DHI, séjour, prix, choix de la clinique, sécurité, résultats et suivi francophone.',
      h1: 'Greffe de cheveux à Istanbul : le guide complet',
      intro: "Istanbul concentre une forte expertise en restauration capillaire. Une greffe réussie dépend cependant moins de la destination que de l'évaluation médicale, de la qualité de la zone donneuse, du dessin de la ligne frontale, du protocole opératoire et du suivi.",
      image: IMAGE_ISTANBUL, imageAlt: 'Vue du Bosphore et d’Istanbul pour un séjour de greffe de cheveux',
      keywords: ['greffe cheveux istanbul','greffe de cheveux istanbul','clinique greffe cheveux istanbul','implant capillaire istanbul','chirurgien capillaire istanbul'],
      sections: [
        { title: 'Pourquoi Istanbul attire les patients internationaux ?', paragraphs: ["La ville dispose d'un écosystème médical, hôtelier et logistique adapté aux séjours courts. Les équipes habituées aux patients étrangers proposent généralement coordination, transferts et interprétariat."], bullets: ['Volume important de consultations capillaires','Accès aux techniques FUE Saphir et DHI','Séjours organisés sur quelques jours','Accompagnement francophone possible'] },
        { title: 'Comment choisir une clinique de greffe capillaire à Istanbul ?', paragraphs: ["Vérifiez qui réalise le diagnostic, qui dessine la ligne frontale, qui effectue les étapes médicales et comment le suivi est organisé. Un prix bas ne compense jamais une mauvaise gestion de la zone donneuse."], bullets: ['Diagnostic individualisé','Identité et rôle du médecin clairement indiqués','Explication réaliste du nombre de greffons','Photos avant/après comparables','Protocole de suivi écrit'] },
        { title: 'Déroulement type du séjour', paragraphs: ["Le parcours comprend habituellement une consultation préopératoire, l'intervention, le premier lavage ou contrôle, puis le retour avec des consignes détaillées. La durée exacte dépend de la technique et de la situation du patient."] }
      ],
      faq: [
        { q: 'Combien de jours rester à Istanbul ?', a: 'Un séjour de trois à quatre jours est fréquent, mais le programme exact dépend de la clinique, des vols et du contrôle postopératoire.' },
        { q: 'FUE ou DHI à Istanbul ?', a: 'La meilleure technique dépend de la zone à traiter, de la densité recherchée, du rasage accepté et de la stratégie médicale. La DHI n’est pas automatiquement supérieure à la FUE.' },
        { q: 'Peut-on être accompagné en français ?', a: 'Oui, une coordination et un interprétariat francophones peuvent être prévus pendant le séjour et le suivi.' }
      ]
    },
    allInclusive: {
      lang: 'fr', path: '/greffe-cheveux-turquie-tout-compris', alternatePath: '/en/all-inclusive-hair-transplant-turkey',
      title: 'Greffe cheveux Turquie tout compris : contenu du forfait',
      description: 'Découvrez ce qu’un forfait de greffe de cheveux en Turquie tout compris doit inclure : intervention, hôtel, transferts, médicaments, interprète et suivi.',
      h1: 'Greffe de cheveux en Turquie tout compris',
      intro: "Un forfait tout compris simplifie le séjour, mais son contenu doit être détaillé ligne par ligne. Le patient doit savoir ce qui relève du soin médical et ce qui relève de l'organisation du voyage.",
      image: IMAGE_CLINIC, imageAlt: 'Environnement médical moderne pour une greffe de cheveux en Turquie',
      keywords: ['greffe cheveux turquie tout compris','forfait greffe cheveux turquie','pack greffe cheveux turquie','greffe cheveux hôtel inclus','transfert inclus greffe cheveux turquie'],
      sections: [
        { title: 'Ce que le forfait peut inclure', paragraphs: ['Le contenu varie selon les établissements. Un devis transparent distingue les actes médicaux, les prestations logistiques et les éventuelles options.'], bullets: ['Consultation et intervention','Analyses préopératoires prévues au protocole','Hôtel selon le nombre de nuits annoncé','Transferts aéroport–hôtel–clinique','Interprétariat','Kit et consignes postopératoires','Suivi à distance'] },
        { title: 'Ce qui doit être vérifié avant de réserver', paragraphs: ["Demandez le nombre de nuits, la catégorie d'hôtel, les trajets inclus, la technique envisagée, les exclusions, les conditions d'annulation et le professionnel responsable de l'acte médical."] },
        { title: 'Vol compris ou non ?', paragraphs: ["La majorité des offres séparent le billet d'avion du forfait médical. Cette séparation doit être explicite pour éviter toute ambiguïté sur le prix final."] }
      ],
      faq: [
        { q: 'Le billet d’avion est-il inclus ?', a: 'Il est souvent exclu. Le devis doit préciser clairement si le vol reste à la charge du patient.' },
        { q: 'L’hôtel est-il proche de la clinique ?', a: 'La distance et les transferts doivent être confirmés avant la réservation.' },
        { q: 'Le prix dépend-il du nombre de greffons ?', a: 'Selon les cliniques, le prix peut être forfaitaire ou évoluer selon la technique, la durée et la complexité.' }
      ]
    },
    reviews: {
      lang: 'fr', path: '/greffe-cheveux-turquie-avis', alternatePath: '/en/hair-transplant-turkey-reviews',
      title: 'Greffe de cheveux Turquie : avis, critères et signaux d’alerte',
      description: 'Comment lire les avis sur une greffe de cheveux en Turquie, vérifier une clinique, analyser les résultats et reconnaître les signaux d’alerte.',
      h1: 'Greffe de cheveux en Turquie : comment analyser les avis',
      intro: "Les avis sont utiles lorsqu'ils sont recoupés avec des éléments médicaux vérifiables. Une note élevée ne suffit pas : il faut regarder la cohérence des résultats, la transparence de l'équipe et la qualité du suivi.",
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation médicale avant une greffe de cheveux',
      keywords: ['greffe cheveux turquie avis','avis clinique greffe cheveux istanbul','greffe cheveux témoignage','clinique greffe cheveux fiable','meilleure clinique greffe cheveux turquie'],
      sections: [
        { title: 'Les avis réellement utiles', paragraphs: ['Privilégiez les témoignages détaillés qui décrivent le diagnostic, le déroulement, la cicatrisation et le résultat à plusieurs mois.'], bullets: ['Photos datées et comparables','Évolution à 3, 6 et 12 mois','Description de la zone donneuse','Réponse de la clinique en cas de difficulté','Avis publiés sur plusieurs plateformes'] },
        { title: 'Les signaux d’alerte', paragraphs: ['Méfiez-vous des promesses absolues, du nombre de greffons annoncé sans diagnostic, des garanties irréalistes et de l’absence d’information sur le médecin.'] },
        { title: 'Meilleure clinique : une réponse individuelle', paragraphs: ["La meilleure clinique est celle qui convient au profil du patient, protège sa zone donneuse et propose un plan réaliste à long terme."] }
      ],
      faq: [
        { q: 'Peut-on se fier uniquement aux avis Google ?', a: 'Non. Ils doivent être recoupés avec des résultats documentés, l’identité des praticiens et les explications médicales.' },
        { q: 'Une garantie de résultat est-elle fiable ?', a: 'Un professionnel sérieux explique les probabilités et les limites. Aucun résultat biologique ne peut être promis de manière absolue.' },
        { q: 'Que demander lors du diagnostic ?', a: 'Demandez l’état de la zone donneuse, le plan de ligne frontale, le nombre estimé de greffons et les alternatives.' }
      ]
    },
    beforeAfter: {
      lang: 'fr', path: '/greffe-cheveux-turquie-avant-apres', alternatePath: '/en/hair-transplant-turkey-before-after',
      title: 'Greffe cheveux Turquie avant après : lire les résultats',
      description: 'Guide pour analyser les photos avant après d’une greffe de cheveux en Turquie : lumière, angle, densité, ligne frontale, délai et zone donneuse.',
      h1: 'Greffe de cheveux Turquie : comprendre les avant/après',
      intro: "Une comparaison fiable utilise le même angle, la même lumière, une longueur de cheveux comparable et un délai suffisant. Le résultat esthétique doit aussi être évalué avec l'état de la zone donneuse.",
      image: IMAGE_CONSULTATION, imageAlt: 'Analyse personnalisée de résultats de greffe capillaire',
      keywords: ['greffe cheveux turquie avant après','résultat greffe cheveux turquie','3000 greffons avant après','4000 greffons avant après','résultat greffe mois par mois'],
      sections: [
        { title: 'Les critères d’une comparaison honnête', paragraphs: ['Les photos doivent montrer la ligne frontale, le dessus, le vertex et la zone donneuse lorsque cela est pertinent.'], bullets: ['Angle identique','Lumière identique','Cheveux secs sans fibres densifiantes','Date postopératoire indiquée','Absence de retouche'] },
        { title: 'Quand évaluer le résultat ?', paragraphs: ["La repousse est progressive. Une chute transitoire peut survenir après l'intervention, puis la croissance reprend sur plusieurs mois. L'évaluation finale se fait généralement autour de douze mois, parfois plus tard pour le vertex."] },
        { title: 'Densité visuelle et nombre de greffons', paragraphs: ["Deux patients ayant reçu le même nombre de greffons peuvent avoir des résultats différents selon le calibre des cheveux, le contraste peau-cheveux, la surface à couvrir et la survie folliculaire."] }
      ],
      faq: [
        { q: 'À trois mois, le résultat est-il définitif ?', a: 'Non. À trois mois, la repousse débute seulement chez de nombreux patients.' },
        { q: 'Pourquoi les résultats varient-ils ?', a: 'Le résultat dépend de la zone donneuse, du calibre des cheveux, de la technique, de la cicatrisation et du plan d’implantation.' },
        { q: 'Le vertex pousse-t-il plus lentement ?', a: 'La maturation du vertex peut demander davantage de temps que la ligne frontale.' }
      ]
    },
    women: {
      lang: 'fr', path: '/greffe-cheveux-femme-turquie', alternatePath: '/en/female-hair-transplant-turkey',
      title: 'Greffe de cheveux femme en Turquie : indications et techniques',
      description: 'Greffe de cheveux pour femme en Turquie : diagnostic de l’alopécie, FUE ou DHI, greffe sans rasage, ligne frontale, récupération et prix.',
      h1: 'Greffe de cheveux pour femme en Turquie',
      intro: "Chez la femme, une chute diffuse doit être diagnostiquée avant toute chirurgie. Une greffe peut être indiquée pour certaines alopécies stables, une ligne frontale haute, des tempes clairsemées ou une cicatrice.",
      image: IMAGE_CONSULTATION, imageAlt: 'Consultation capillaire personnalisée pour une femme',
      keywords: ['greffe cheveux femme turquie','implant capillaire femme turquie','greffe femme sans rasage','greffe cheveux femme istanbul','alopécie femme greffe cheveux'],
      sections: [
        { title: 'Le diagnostic avant la greffe', paragraphs: ["Une alopécie hormonale, carentielle ou inflammatoire peut nécessiter une prise en charge médicale. La stabilité de la chute et la qualité de la zone donneuse sont essentielles."] },
        { title: 'Greffe sans rasage ou rasage partiel', paragraphs: ["Certaines patientes peuvent bénéficier d'un prélèvement avec rasage discret ou d'une implantation entre les cheveux existants. La faisabilité dépend de la technique et du nombre de greffons."] },
        { title: 'Objectifs esthétiques', paragraphs: ["Le dessin doit respecter les proportions du visage, la direction naturelle des cheveux et la densité disponible."] }
      ],
      faq: [
        { q: 'Toutes les chutes de cheveux féminines se greffent-elles ?', a: 'Non. La cause doit être identifiée et certaines alopécies diffuses ne sont pas de bonnes indications chirurgicales.' },
        { q: 'Doit-on raser toute la tête ?', a: 'Pas toujours. Un rasage partiel ou discret peut être possible selon la technique et le projet.' },
        { q: 'La DHI est-elle adaptée aux femmes ?', a: 'Elle peut être proposée pour implanter entre des cheveux existants, mais le choix dépend du diagnostic.' }
      ]
    },
    afro: {
      lang: 'fr', path: '/greffe-cheveux-afro-turquie', alternatePath: '/en/afro-hair-transplant-turkey',
      title: 'Greffe cheveux afro et crépus en Turquie : guide spécialisé',
      description: 'Greffe de cheveux afro ou crépus en Turquie : spécificités du follicule courbé, extraction FUE, ligne frontale, barbe, risques et choix de l’équipe.',
      h1: 'Greffe de cheveux afro et crépus en Turquie',
      intro: "Le cheveu afro nécessite une expérience spécifique : le follicule peut être courbé sous la peau, ce qui rend l'extraction plus technique. Une équipe adaptée doit limiter la transection et préserver la zone donneuse.",
      image: IMAGE_CLINIC, imageAlt: 'Salle clinique moderne pour une greffe capillaire spécialisée',
      keywords: ['greffe cheveux afro turquie','greffe cheveux crépus turquie','implant cheveux afro','greffe barbe afro turquie','FUE cheveux crépus'],
      sections: [
        { title: 'Pourquoi l’extraction est différente', paragraphs: ["La courbure sous-cutanée du follicule n'est pas toujours visible depuis la surface. Le choix du punch et la maîtrise du geste influencent le taux de follicules intacts."] },
        { title: 'Densité et ligne frontale', paragraphs: ["Le cheveu crépu offre souvent une bonne couverture visuelle. Le dessin doit néanmoins respecter l'implantation naturelle et les attentes du patient."] },
        { title: 'Choisir une équipe expérimentée', paragraphs: ["Demandez des cas comparables, des images de la zone donneuse cicatrisée et une explication du protocole d'extraction."] }
      ],
      faq: [
        { q: 'La FUE est-elle possible sur cheveux afro ?', a: 'Oui, mais elle exige une technique adaptée à la courbure folliculaire.' },
        { q: 'Le risque de cicatrice est-il différent ?', a: 'La cicatrisation varie selon les personnes. Les antécédents de cicatrices hypertrophiques ou chéloïdes doivent être signalés.' },
        { q: 'Combien de greffons sont nécessaires ?', a: 'Le nombre dépend de la surface, de la densité donneuse et de l’objectif esthétique.' }
      ]
    },
    beard: {
      lang: 'fr', path: '/greffe-barbe-turquie', alternatePath: '/en/beard-transplant-turkey',
      title: 'Greffe de barbe en Turquie : technique, résultat et prix',
      description: 'Guide complet de la greffe de barbe en Turquie : zones traitées, prélèvement FUE, implantation, récupération, résultat naturel et diagnostic.',
      h1: 'Greffe de barbe en Turquie',
      intro: "La greffe de barbe utilise généralement des follicules prélevés sur le cuir chevelu pour densifier les joues, le bouc, la moustache ou masquer certaines cicatrices.",
      image: IMAGE_CLINIC, imageAlt: 'Clinique pour une greffe de barbe en Turquie',
      keywords: ['greffe barbe turquie','implant barbe istanbul','greffe barbe avant après','prix greffe barbe turquie','greffe moustache turquie'],
      sections: [
        { title: 'Planifier une barbe naturelle', paragraphs: ["L'angle d'implantation est essentiel. Les poils doivent suivre les directions naturelles propres aux joues, à la moustache et au menton."] },
        { title: 'Zone donneuse et choix des follicules', paragraphs: ["Les unités folliculaires simples sont souvent privilégiées pour les contours. Les caractéristiques des cheveux doivent être compatibles avec l'aspect recherché."] },
        { title: 'Après l’intervention', paragraphs: ["De petites croûtes sont habituelles les premiers jours. Les consignes de lavage et de protection doivent être respectées."] }
      ],
      faq: [
        { q: 'Les cheveux greffés se comportent-ils comme des poils de barbe ?', a: 'Ils conservent certaines caractéristiques de la zone donneuse et nécessitent parfois une taille régulière.' },
        { q: 'Peut-on remplir une barbe clairsemée ?', a: 'Oui, si la zone donneuse est suffisante et si la cause de la rareté ne contre-indique pas la greffe.' },
        { q: 'Quand voit-on le résultat ?', a: 'La croissance est progressive et se juge sur plusieurs mois.' }
      ]
    },
    grafts: {
      lang: 'fr', path: '/nombre-greffons-greffe-cheveux', alternatePath: '/en/hair-transplant-graft-count',
      title: 'Combien de greffons pour une greffe de cheveux ?',
      description: 'Estimation de 2000, 3000, 4000 ou 5000 greffons selon la calvitie, la ligne frontale, le vertex, la densité donneuse et l’échelle Norwood.',
      h1: 'Combien de greffons faut-il pour une greffe de cheveux ?',
      intro: "Le nombre de greffons n'est pas un objectif isolé. Il doit être calculé selon la surface à couvrir, la densité disponible, le calibre des cheveux et la nécessité de conserver une réserve pour l'avenir.",
      image: IMAGE_CONSULTATION, imageAlt: 'Analyse de la zone donneuse et estimation du nombre de greffons',
      keywords: ['2000 greffons prix turquie','3000 greffons avant après','4000 greffons prix turquie','5000 greffons','nombre greffons calvitie'],
      sections: [
        { title: 'Repères indicatifs', paragraphs: ['Les besoins varient fortement et ces fourchettes ne remplacent pas un diagnostic.'], bullets: ['Golfes et ligne frontale limitée : souvent 1 500 à 2 500 greffons','Zone frontale plus large : souvent 2 500 à 3 500 greffons','Avant + milieu du cuir chevelu : souvent 3 000 à 4 500 greffons','Calvitie avancée : stratégie en une ou plusieurs séances'] },
        { title: 'Pourquoi ne pas chercher le maximum ?', paragraphs: ["Un prélèvement excessif peut clairsemer la zone donneuse de manière définitive. La qualité, la répartition et la survie des greffons comptent davantage qu'un chiffre commercial élevé."] },
        { title: 'Greffon et cheveu : ce n’est pas la même chose', paragraphs: ["Un greffon peut contenir un, deux, trois cheveux ou davantage. Le nombre total de cheveux implantés est donc supérieur au nombre de greffons."] }
      ],
      faq: [
        { q: '4000 greffons conviennent-ils à tout le monde ?', a: 'Non. La capacité donneuse et la surface à traiter déterminent ce qui est raisonnable.' },
        { q: 'Peut-on greffer 5000 greffons en une séance ?', a: 'Cela dépend de la zone donneuse, du temps opératoire et de la sécurité du protocole.' },
        { q: 'Comment obtenir une estimation ?', a: 'Des photos standardisées et, idéalement, un examen médical permettent une première estimation.' }
      ]
    },
    risks: {
      lang: 'fr', path: '/greffe-cheveux-turquie-risques', alternatePath: '/en/hair-transplant-turkey-risks',
      title: 'Greffe cheveux Turquie : risques, complications et prévention',
      description: 'Risques d’une greffe de cheveux en Turquie : infection, œdème, shock loss, cicatrices, surprélèvement, résultat artificiel et prévention.',
      h1: 'Greffe de cheveux en Turquie : risques et prévention',
      intro: "La greffe capillaire est une intervention médicale. Les complications graves sont peu fréquentes lorsque l'indication, l'asepsie et le suivi sont adaptés, mais aucun acte n'est sans risque.",
      image: IMAGE_CLINIC, imageAlt: 'Environnement médical et prévention des risques en greffe capillaire',
      keywords: ['greffe cheveux turquie danger','greffe cheveux turquie risques','greffe cheveux ratée','zone donneuse abîmée','shock loss greffe cheveux'],
      sections: [
        { title: 'Effets postopératoires fréquents', paragraphs: ["Rougeurs, croûtes, sensibilité, démangeaisons et œdème temporaire peuvent survenir. Les consignes reçues doivent préciser ce qui est attendu et quand contacter l'équipe."] },
        { title: 'Complications à prévenir', paragraphs: ['Une mauvaise sélection ou une technique inadaptée peut entraîner infection, cicatrices visibles, faible repousse, ligne frontale artificielle ou surprélèvement.'], bullets: ['Évaluation des antécédents','Protocole d’asepsie','Prélèvement conservateur','Plan esthétique à long terme','Suivi médical accessible'] },
        { title: 'Quand consulter rapidement ?', paragraphs: ["Une douleur croissante, une fièvre, un écoulement, une rougeur qui s'étend ou tout symptôme inquiétant nécessitent un avis médical rapide."] }
      ],
      faq: [
        { q: 'Le shock loss est-il définitif ?', a: 'Il est souvent temporaire, mais la situation doit être évaluée, surtout lorsque des cheveux fragiles existaient avant l’intervention.' },
        { q: 'Une zone donneuse abîmée peut-elle être réparée ?', a: 'Certaines améliorations sont possibles, mais la prévention du surprélèvement reste essentielle.' },
        { q: 'Comment réduire les risques ?', a: 'Choisissez une équipe transparente, transmettez vos antécédents et suivez strictement les consignes.' }
      ]
    },
    recovery: {
      lang: 'fr', path: '/apres-greffe-cheveux-mois-par-mois', alternatePath: '/en/hair-transplant-recovery-timeline',
      title: 'Après greffe de cheveux : évolution jour par jour et mois par mois',
      description: 'Évolution après une greffe de cheveux : lavage, croûtes, chute, repousse à 3, 6 et 12 mois, sport, casquette, soleil, sommeil et avion.',
      h1: 'Après une greffe de cheveux : calendrier de récupération',
      intro: "La cicatrisation visible se déroule sur quelques jours, tandis que la repousse demande plusieurs mois. Les délais varient selon les personnes et les consignes de l'équipe médicale restent prioritaires.",
      image: IMAGE_CONSULTATION, imageAlt: 'Suivi médical après une greffe de cheveux',
      keywords: ['greffe cheveux après 10 jours','greffe cheveux après 1 mois','greffe cheveux 3 mois','greffe cheveux 6 mois','résultat greffe cheveux 1 an'],
      sections: [
        { title: 'Premiers jours', paragraphs: ["La zone implantée doit être protégée des frottements. Le lavage commence selon le protocole transmis. Les croûtes se détachent progressivement sans être arrachées."] },
        { title: 'De 1 à 3 mois', paragraphs: ["Les cheveux implantés peuvent tomber tandis que les follicules restent en place. Cette phase peut donner l'impression d'un retour en arrière avant le début de la repousse."] },
        { title: 'De 4 à 12 mois', paragraphs: ["La densité augmente progressivement. Les cheveux gagnent en longueur, en calibre et en maturité. Le résultat complet demande généralement environ douze mois, parfois davantage au vertex."] },
        { title: 'Sport, casquette, soleil et avion', paragraphs: ["La reprise dépend du type d'activité et du protocole. Évitez pression, transpiration intense, exposition solaire et accessoires serrés pendant la période indiquée par l'équipe."] }
      ],
      faq: [
        { q: 'Quand les croûtes tombent-elles ?', a: 'Elles disparaissent souvent au cours des dix premiers jours avec le lavage recommandé.' },
        { q: 'Pourquoi les cheveux greffés tombent-ils ?', a: 'Une chute transitoire des tiges peut survenir avant la repousse depuis les follicules implantés.' },
        { q: 'Quand reprendre le sport ?', a: 'La reprise doit être progressive et validée selon le protocole de la clinique.' }
      ]
    }
  },
  en: {} as Record<PageKey, PageContent>
};

const englishMap: Record<PageKey, Omit<PageContent, 'lang'>> = {
  istanbul: { path: '/en/hair-transplant-istanbul', alternatePath: '/greffe-cheveux-istanbul', title: 'Hair Transplant in Istanbul: Complete Guide', description: 'Complete guide to hair transplant in Istanbul: FUE, DHI, prices, clinic selection, travel, safety and aftercare.', h1: 'Hair Transplant in Istanbul: A Complete Patient Guide', intro: 'Istanbul offers a large hair-restoration ecosystem, but outcomes depend on proper diagnosis, donor management, hairline design, medical standards and aftercare rather than destination alone.', image: IMAGE_ISTANBUL, imageAlt: 'Bosphorus and Istanbul skyline for a hair transplant trip', keywords: ['hair transplant Istanbul','Istanbul hair transplant clinic','best hair transplant Istanbul','FUE Istanbul','DHI Istanbul'], sections: [{ title: 'Why patients choose Istanbul', paragraphs: ['The city combines specialised clinics, international travel infrastructure and short-stay logistics.'], bullets: ['FUE Sapphire and DHI options','International patient coordination','Hotel and transfer packages','English-speaking support'] },{ title: 'How to choose a clinic', paragraphs: ['Confirm who assesses you, who designs the hairline, who performs each medical step and how complications are managed.'] },{ title: 'Typical treatment journey', paragraphs: ['A typical plan includes pre-operative assessment, surgery, first wash or review and remote follow-up.'] }], faq: [{ q: 'How long should I stay in Istanbul?', a: 'Three to four days is common, although the exact plan depends on the clinic and flights.' },{ q: 'Is FUE or DHI better?', a: 'Neither is universally better. The choice depends on the treatment area, graft plan and donor characteristics.' },{ q: 'Is aftercare available in English?', a: 'Yes, international coordination and remote follow-up can be arranged.' }] },
  allInclusive: { path: '/en/all-inclusive-hair-transplant-turkey', alternatePath: '/greffe-cheveux-turquie-tout-compris', title: 'All-Inclusive Hair Transplant Turkey Packages', description: 'What an all-inclusive Turkey hair transplant package should include: procedure, hotel, transfers, medication, interpreter and aftercare.', h1: 'All-Inclusive Hair Transplant in Turkey', intro: 'An all-inclusive package makes travel easier, but every medical and non-medical service should be itemised clearly before booking.', image: IMAGE_CLINIC, imageAlt: 'Modern medical setting for a Turkey hair transplant package', keywords: ['all inclusive hair transplant Turkey','Turkey hair transplant package','hair transplant Turkey hotel included','hair transplant Turkey transfers'], sections: [{ title: 'What may be included', paragraphs: ['Packages vary and should separate medical care from travel logistics.'], bullets: ['Procedure and assessment','Hotel accommodation','Airport and clinic transfers','Interpreter','Post-operative kit','Remote aftercare'] },{ title: 'What to check before payment', paragraphs: ['Check hotel nights, exclusions, technique, cancellation terms and the identity of the medical professional responsible.'] },{ title: 'Are flights included?', paragraphs: ['Flights are commonly excluded and should be confirmed separately.'] }], faq: [{ q: 'Are flights included?', a: 'Usually not. The quotation must state this clearly.' },{ q: 'Does price depend on graft count?', a: 'Some clinics use a package price, while others price by technique or complexity.' },{ q: 'Is the hotel close to the clinic?', a: 'Ask for the exact hotel and transfer plan before booking.' }] },
  reviews: { path: '/en/hair-transplant-turkey-reviews', alternatePath: '/greffe-cheveux-turquie-avis', title: 'Hair Transplant Turkey Reviews: How to Evaluate Clinics', description: 'How to read Turkey hair transplant reviews, verify results, compare clinics and identify warning signs before booking.', h1: 'Hair Transplant Turkey Reviews: What Really Matters', intro: 'Reviews are most useful when supported by comparable photos, clear medical information and transparent aftercare.', image: IMAGE_CONSULTATION, imageAlt: 'Medical consultation before a hair transplant', keywords: ['hair transplant Turkey reviews','best hair transplant clinic Turkey','Turkey hair transplant testimonials','reliable hair transplant clinic Turkey'], sections: [{ title: 'Useful review evidence', paragraphs: ['Look for detailed treatment timelines rather than star ratings alone.'], bullets: ['Comparable before and after photos','Three, six and twelve-month updates','Donor-area images','Clinic response to concerns','Reviews across several platforms'] },{ title: 'Red flags', paragraphs: ['Avoid guaranteed outcomes, graft promises without assessment and unclear medical responsibility.'] },{ title: 'What “best clinic” should mean', paragraphs: ['The best provider is the one that matches your case, protects the donor area and offers a realistic long-term plan.'] }], faq: [{ q: 'Are Google reviews enough?', a: 'No. Cross-check documented results, practitioner identity and medical explanations.' },{ q: 'Can a result be guaranteed?', a: 'No biological result can be guaranteed absolutely.' },{ q: 'What should I ask during assessment?', a: 'Ask about donor capacity, hairline plan, graft estimate and alternatives.' }] },
  beforeAfter: { path: '/en/hair-transplant-turkey-before-after', alternatePath: '/greffe-cheveux-turquie-avant-apres', title: 'Hair Transplant Turkey Before and After Results', description: 'How to assess Turkey hair transplant before and after photos: angles, lighting, density, donor area and recovery timeline.', h1: 'Hair Transplant Turkey Before and After: Reading Results', intro: 'Reliable comparisons use the same lighting, angles, hair length and an adequate time interval. The donor area matters as much as the recipient area.', image: IMAGE_CONSULTATION, imageAlt: 'Reviewing hair transplant before and after results', keywords: ['hair transplant Turkey before after','3000 grafts before after','4000 grafts before after','hair transplant results timeline'], sections: [{ title: 'Fair comparison criteria', paragraphs: ['Images should show the frontal area, top, crown and donor region when relevant.'], bullets: ['Same angle','Same lighting','No concealer fibres','Post-op date stated','No retouching'] },{ title: 'When is the final result?', paragraphs: ['Growth develops gradually and is commonly assessed around twelve months, sometimes later for the crown.'] },{ title: 'Graft count and visual density', paragraphs: ['Hair calibre, contrast, area size and graft survival influence visible density.'] }], faq: [{ q: 'Is three months the final result?', a: 'No. Growth is often only beginning.' },{ q: 'Why do outcomes vary?', a: 'Donor quality, hair characteristics, technique and healing all matter.' },{ q: 'Does the crown take longer?', a: 'Crown maturation may take longer than the hairline.' }] },
  women: { path: '/en/female-hair-transplant-turkey', alternatePath: '/greffe-cheveux-femme-turquie', title: 'Female Hair Transplant Turkey: Guide for Women', description: 'Female hair transplant in Turkey: diagnosis, FUE, DHI, no-shave options, hairline lowering, recovery and eligibility.', h1: 'Female Hair Transplant in Turkey', intro: 'Diffuse female hair loss requires diagnosis before surgery. Transplantation may suit stable patterned loss, a high hairline, thinning temples or selected scars.', image: IMAGE_CONSULTATION, imageAlt: 'Female hair-loss consultation', keywords: ['female hair transplant Turkey','women hair transplant Istanbul','no shave hair transplant women','female DHI Turkey'], sections: [{ title: 'Diagnosis before surgery', paragraphs: ['Hormonal, nutritional and inflammatory causes may require medical treatment first.'] },{ title: 'No-shave and partial-shave options', paragraphs: ['Selected patients may be treated with discreet donor shaving or implantation between existing hairs.'] },{ title: 'Natural aesthetic planning', paragraphs: ['Hairline design should respect facial proportions and available donor density.'] }], faq: [{ q: 'Can all female hair loss be transplanted?', a: 'No. The cause and stability of hair loss must be assessed.' },{ q: 'Is full shaving required?', a: 'Not always. Partial or hidden shaving may be possible.' },{ q: 'Is DHI suitable for women?', a: 'It may be useful for implantation between existing hairs, depending on diagnosis.' }] },
  afro: { path: '/en/afro-hair-transplant-turkey', alternatePath: '/greffe-cheveux-afro-turquie', title: 'Afro Hair Transplant Turkey: Curly Hair Expertise', description: 'Afro and curly hair transplant in Turkey: curved follicles, FUE extraction, donor safety, hairline design and clinic selection.', h1: 'Afro and Curly Hair Transplant in Turkey', intro: 'Afro-textured hair requires specific extraction experience because follicles may curve beneath the skin. Technique should minimise transection and protect donor density.', image: IMAGE_CLINIC, imageAlt: 'Modern clinic for specialist afro hair transplantation', keywords: ['afro hair transplant Turkey','curly hair transplant Turkey','black hair transplant Istanbul','afro FUE Turkey'], sections: [{ title: 'Why extraction differs', paragraphs: ['Subcutaneous follicle curvature may not match the visible hair direction.'] },{ title: 'Density and hairline design', paragraphs: ['Curly hair can provide strong visual coverage, but placement must remain natural.'] },{ title: 'Choosing an experienced team', paragraphs: ['Request comparable cases and healed donor-area images.'] }], faq: [{ q: 'Can FUE be used for afro hair?', a: 'Yes, with tools and technique adapted to curved follicles.' },{ q: 'What about keloid risk?', a: 'Personal and family scarring history should be discussed during assessment.' },{ q: 'How many grafts are needed?', a: 'This depends on the area, donor density and goal.' }] },
  beard: { path: '/en/beard-transplant-turkey', alternatePath: '/greffe-barbe-turquie', title: 'Beard Transplant Turkey: Technique, Cost and Results', description: 'Complete guide to beard transplant in Turkey: FUE donor extraction, natural angles, recovery, results and eligibility.', h1: 'Beard Transplant in Turkey', intro: 'A beard transplant usually uses scalp follicles to add density to the cheeks, goatee, moustache or selected scars.', image: IMAGE_CLINIC, imageAlt: 'Clinic setting for beard transplant in Turkey', keywords: ['beard transplant Turkey','beard transplant Istanbul','beard implants Turkey','beard transplant before after'], sections: [{ title: 'Creating a natural beard', paragraphs: ['Implantation angles must follow the natural direction of each facial zone.'] },{ title: 'Donor selection', paragraphs: ['Single-hair follicular units are often preferred near borders.'] },{ title: 'Recovery', paragraphs: ['Small crusts are common and aftercare instructions must be followed carefully.'] }], faq: [{ q: 'Do transplanted hairs behave like beard hair?', a: 'They retain donor characteristics and may need regular trimming.' },{ q: 'Can patchy beard growth be treated?', a: 'It may be possible if donor supply is adequate.' },{ q: 'When are results visible?', a: 'Growth develops gradually over several months.' }] },
  grafts: { path: '/en/hair-transplant-graft-count', alternatePath: '/nombre-greffons-greffe-cheveux', title: 'How Many Grafts Do I Need for a Hair Transplant?', description: 'Guide to 2000, 3000, 4000 or 5000 hair grafts based on Norwood stage, treatment area, donor density and long-term planning.', h1: 'How Many Hair Grafts Do You Need?', intro: 'Graft count should be based on treatment area, donor capacity, hair calibre and future hair-loss planning, not on the highest number offered.', image: IMAGE_CONSULTATION, imageAlt: 'Donor-area assessment and graft-count planning', keywords: ['2000 graft hair transplant','3000 grafts before after','4000 graft hair transplant Turkey','5000 grafts Turkey'], sections: [{ title: 'Indicative ranges', paragraphs: ['Ranges vary and never replace a medical assessment.'], bullets: ['Limited temples or hairline: often 1,500–2,500 grafts','Wider frontal area: often 2,500–3,500 grafts','Front and mid-scalp: often 3,000–4,500 grafts','Advanced loss: staged planning may be needed'] },{ title: 'Why more is not always better', paragraphs: ['Overharvesting can permanently thin the donor region.'] },{ title: 'Grafts are not hairs', paragraphs: ['One graft may contain one, two, three or more hairs.'] }], faq: [{ q: 'Are 4000 grafts suitable for everyone?', a: 'No. Donor capacity determines what is safe.' },{ q: 'Can 5000 grafts be transplanted in one session?', a: 'It depends on donor supply, surgical time and protocol.' },{ q: 'How is an estimate made?', a: 'Standardised photos and medical examination provide the best estimate.' }] },
  risks: { path: '/en/hair-transplant-turkey-risks', alternatePath: '/greffe-cheveux-turquie-risques', title: 'Hair Transplant Turkey Risks and Safety', description: 'Hair transplant risks in Turkey: infection, swelling, shock loss, scarring, overharvesting, poor growth and prevention.', h1: 'Hair Transplant in Turkey: Risks and Prevention', intro: 'Hair transplantation is a medical procedure. Serious complications are uncommon with proper selection, hygiene and follow-up, but no procedure is risk-free.', image: IMAGE_CLINIC, imageAlt: 'Medical environment and hair transplant safety', keywords: ['hair transplant Turkey risks','hair transplant Turkey gone wrong','overharvested donor area','hair transplant shock loss'], sections: [{ title: 'Common temporary effects', paragraphs: ['Redness, crusting, sensitivity, itching and temporary swelling may occur.'] },{ title: 'Complications to prevent', paragraphs: ['Poor planning may cause infection, visible scarring, weak growth, an artificial hairline or donor overharvesting.'], bullets: ['Medical-history review','Aseptic protocol','Conservative extraction','Long-term planning','Accessible follow-up'] },{ title: 'When to seek medical help', paragraphs: ['Increasing pain, fever, discharge or spreading redness require prompt medical advice.'] }], faq: [{ q: 'Is shock loss permanent?', a: 'It is often temporary, but should be assessed.' },{ q: 'Can an overharvested donor area be repaired?', a: 'Some improvement may be possible, but prevention is essential.' },{ q: 'How can risks be reduced?', a: 'Choose a transparent medical team and follow instructions carefully.' }] },
  recovery: { path: '/en/hair-transplant-recovery-timeline', alternatePath: '/apres-greffe-cheveux-mois-par-mois', title: 'Hair Transplant Recovery Timeline: Day by Day and Month by Month', description: 'Hair transplant recovery timeline covering washing, crusts, shedding, growth at 3, 6 and 12 months, sport, hats, sun and flying.', h1: 'Hair Transplant Recovery Timeline', intro: 'Visible healing occurs over days, while new growth develops over months. Individual timelines vary and your medical team’s instructions take priority.', image: IMAGE_CONSULTATION, imageAlt: 'Hair transplant follow-up and recovery', keywords: ['hair transplant after 10 days','hair transplant 3 months','hair transplant 6 months','hair transplant 1 year','hair transplant recovery timeline'], sections: [{ title: 'First days', paragraphs: ['Protect grafts from friction and follow the prescribed washing protocol.'] },{ title: 'One to three months', paragraphs: ['Transplanted shafts may shed before new growth begins.'] },{ title: 'Four to twelve months', paragraphs: ['Density, length and calibre improve progressively.'] },{ title: 'Exercise, hats, sun and flying', paragraphs: ['Restrictions vary by activity and should follow the clinic protocol.'] }], faq: [{ q: 'When do crusts fall off?', a: 'They commonly clear during the first ten days with appropriate washing.' },{ q: 'Why do transplanted hairs shed?', a: 'Temporary shaft shedding may occur while follicles remain in place.' },{ q: 'When can I exercise?', a: 'Return gradually according to your medical instructions.' }] }
};

(Object.keys(englishMap) as PageKey[]).forEach((key) => {
  pages.en[key] = { ...englishMap[key], lang: 'en' };
});

const related: Record<Lang, { label: string; path: string }[]> = {
  fr: [
    { label: 'Prix greffe cheveux Turquie', path: '/prix-greffe-de-cheveux-turquie' },
    { label: 'Technique FUE en Turquie', path: '/greffe-de-cheveux-fue-turquie' },
    { label: 'Technique DHI en Turquie', path: '/greffe-de-cheveux-dhi-turquie' },
    { label: 'Diagnostic gratuit', path: '/contact' },
  ],
  en: [
    { label: 'Hair transplant Turkey', path: '/hair-transplant-turkey' },
    { label: 'Turkey hair transplant cost', path: '/turkey-hair-transplant-cost' },
    { label: 'Free assessment', path: '/contact' },
  ],
};

export default function SeoLandingPage({ pageKey, lang }: { pageKey: PageKey; lang: Lang }) {
  const page = pages[lang][pageKey];
  const base = lang === 'fr' ? frBase : enBase;
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
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: page.h1,
    description: page.description,
    url: `${origin}${mountHairPath(page.path)}`,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: 'Cliniqeo Hair', url: `${origin}${mountHairPath('/')}` },
    about: { '@type': 'MedicalProcedure', name: lang === 'fr' ? 'Greffe de cheveux' : 'Hair transplantation' },
  };

  return (
    <div className="pt-20">
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        lang={lang}
        keywords={page.keywords}
        image={page.image}
        alternates={[
          { lang: lang, path: page.path },
          { lang: lang === 'fr' ? 'en' : 'fr', path: page.alternatePath },
          { lang: 'x-default', path: lang === 'fr' ? page.path : page.alternatePath },
        ]}
        schema={[articleSchema, faqSchema]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#16365d] via-[#224671] to-[#2f6bfc] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src={page.image} alt="" className="h-full w-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-blue-100 mb-4">Cliniqeo Hair · {lang === 'fr' ? 'Guide patient' : 'Patient guide'}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.h1}</h1>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#224671] px-7 py-4 rounded-lg font-bold hover:bg-blue-50 transition">{base.cta}</Link>
              <Link to={page.alternatePath} className="border border-white/70 px-7 py-4 rounded-lg font-bold hover:bg-white/10 transition">{lang === 'fr' ? 'Read in English' : 'Lire en français'}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            [ShieldCheck, lang === 'fr' ? 'Sécurité et transparence' : 'Safety and transparency'],
            [Stethoscope, lang === 'fr' ? 'Diagnostic personnalisé' : 'Personal assessment'],
            [Languages, lang === 'fr' ? 'Accompagnement francophone' : 'International support'],
            [Clock3, lang === 'fr' ? 'Suivi postopératoire' : 'Post-op follow-up'],
          ].map(([Icon, label], index) => {
            const IconComponent = Icon as typeof ShieldCheck;
            return <div key={index} className="flex items-center gap-3 text-[#224671]"><IconComponent size={27} /><span className="font-semibold">{label as string}</span></div>;
          })}
        </div>
      </section>

      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_330px] gap-12">
          <article className="space-y-14">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-bold text-[#224671] mb-5">{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-lg text-gray-700 leading-relaxed mb-4">{paragraph}</p>)}
                {section.bullets && <ul className="grid sm:grid-cols-2 gap-3 mt-6">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 bg-[#f5f8ff] rounded-lg p-4 text-gray-700"><CheckCircle className="text-[#2f6bfc] shrink-0 mt-0.5" size={21}/><span>{bullet}</span></li>)}</ul>}
              </section>
            ))}

            <section>
              <h2 className="text-3xl font-bold text-[#224671] mb-6">{lang === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}</h2>
              <div className="space-y-4">
                {page.faq.map((item) => <details key={item.q} className="group border border-gray-200 rounded-xl p-5 open:bg-[#f8faff]"><summary className="cursor-pointer font-bold text-lg text-[#224671]">{item.q}</summary><p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p></details>)}
              </div>
            </section>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-950">{base.disclaimer}</div>
          </article>

          <aside className="space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="bg-[#f3f7ff] rounded-2xl p-6 border border-blue-100">
                <h2 className="text-xl font-bold text-[#224671] mb-4">{lang === 'fr' ? 'Votre parcours organisé' : 'Your organised journey'}</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-3"><Stethoscope className="text-[#2f6bfc] shrink-0"/><span>{lang === 'fr' ? 'Analyse préalable de votre situation' : 'Preliminary case assessment'}</span></div>
                  <div className="flex gap-3"><Plane className="text-[#2f6bfc] shrink-0"/><span>{lang === 'fr' ? 'Coordination des transferts' : 'Transfer coordination'}</span></div>
                  <div className="flex gap-3"><Hotel className="text-[#2f6bfc] shrink-0"/><span>{lang === 'fr' ? 'Organisation de l’hébergement' : 'Hotel coordination'}</span></div>
                  <div className="flex gap-3"><Languages className="text-[#2f6bfc] shrink-0"/><span>{lang === 'fr' ? 'Assistance linguistique' : 'Language assistance'}</span></div>
                </div>
                <Link to="/contact" className="mt-6 block text-center bg-[#2f6bfc] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#224671] transition">{base.cta}</Link>
              </div>

              <nav aria-label={lang === 'fr' ? 'Guides associés' : 'Related guides'} className="border rounded-2xl p-6">
                <h2 className="font-bold text-[#224671] mb-4">{lang === 'fr' ? 'Guides associés' : 'Related guides'}</h2>
                <div className="space-y-3">{related[lang].map((item) => <Link key={item.path} to={item.path} className="flex items-center justify-between gap-3 text-[#2f6bfc] hover:text-[#224671] font-semibold"><span>{item.label}</span><ArrowRight size={18}/></Link>)}</div>
              </nav>
            </div>
          </aside>
        </div>
      </main>

      <section className="py-16 bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{lang === 'fr' ? 'Obtenez une évaluation adaptée à votre zone donneuse' : 'Get an assessment tailored to your donor area'}</h2>
          <p className="text-lg text-blue-100 mb-8">{lang === 'fr' ? 'Envoyez vos photos pour recevoir une première orientation personnalisée.' : 'Send your photos for a preliminary personalised review.'}</p>
          <Link to="/contact" className="inline-block bg-white text-[#224671] px-9 py-4 rounded-lg font-bold hover:bg-blue-50 transition">{base.cta}</Link>
        </div>
      </section>
    </div>
  );
}

export type { PageKey };
