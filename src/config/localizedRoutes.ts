export type SiteLanguage = 'fr' | 'en';

interface RouteGroup {
  fr: string[];
  en: string[];
}

const routeGroups: RouteGroup[] = [
  { fr: ['/'], en: ['/en'] },
  { fr: ['/techniques'], en: ['/en/techniques'] },
  { fr: ['/tarifs'], en: ['/en/pricing'] },
  { fr: ['/turquie'], en: ['/en/why-turkey'] },
  { fr: ['/a-propos'], en: ['/en/about'] },
  { fr: ['/faq'], en: ['/en/faq'] },
  { fr: ['/contact'], en: ['/en/contact'] },
  { fr: ['/greffe-cheveux/avant-apres'], en: ['/en/before-after'] },
  { fr: ['/guides-greffe-cheveux'], en: ['/en/hair-transplant-guides'] },

  {
    fr: ['/greffe-de-cheveux-turquie', '/implant-capillaire-turquie', '/implant-cheveux-turquie'],
    en: ['/hair-transplant-turkey', '/turkey-hair-transplant', '/hair-transplant-in-turkey'],
  },
  {
    fr: ['/meilleure-clinique-greffe-cheveux-turquie'],
    en: ['/best-hair-transplant-clinic-turkey', '/best-hair-transplant-turkey'],
  },
  {
    fr: ['/meilleure-clinique-implant-cheveux-turquie'],
    en: ['/best-clinic-for-hair-transplant-turkey'],
  },
  {
    fr: ['/meilleure-clinique-implant-capillaire-turquie'],
    en: ['/best-hair-implant-clinic-turkey'],
  },
  {
    fr: ['/greffe-cheveux-turquie-avis', '/greffe-de-cheveux-turquie-avis'],
    en: ['/en/hair-transplant-turkey-reviews', '/hair-transplant-turkey-reviews'],
  },
  { fr: ['/greffe-de-cheveux-fue-turquie'], en: ['/fue-hair-transplant-turkey'] },
  { fr: ['/greffe-de-cheveux-dhi-turquie'], en: ['/dhi-hair-transplant-turkey'] },
  {
    fr: [
      '/prix-greffe-de-cheveux-turquie',
      '/greffe-cheveux-prix-turquie',
      '/prix-implant-capillaire-turquie',
      '/implant-cheveux-turquie-prix',
    ],
    en: [
      '/turkey-hair-transplant-cost',
      '/hair-transplant-turkey-cost',
      '/hair-transplant-turkey-price',
      '/turkey-hair-transplant-prices',
      '/how-much-hair-transplant-turkey',
    ],
  },
  {
    fr: ['/greffe-cheveux-turquie-tout-compris', '/greffe-de-cheveux-turquie-prix-tout-compris'],
    en: ['/en/all-inclusive-hair-transplant-turkey'],
  },
  { fr: ['/greffe-cheveux-istanbul'], en: ['/en/hair-transplant-istanbul'] },
  { fr: ['/greffe-cheveux-turquie-avant-apres'], en: ['/en/hair-transplant-turkey-before-after'] },
  { fr: ['/greffe-cheveux-femme-turquie'], en: ['/en/female-hair-transplant-turkey'] },
  { fr: ['/greffe-cheveux-afro-turquie', '/greffe-cheveux-crepus-turquie'], en: ['/en/afro-hair-transplant-turkey'] },
  { fr: ['/greffe-barbe-turquie', '/greffe-de-barbe-turquie'], en: ['/en/beard-transplant-turkey'] },
  { fr: ['/nombre-greffons-greffe-cheveux'], en: ['/en/hair-transplant-graft-count'] },
  { fr: ['/greffe-cheveux-turquie-risques', '/greffe-cheveux-turquie-danger'], en: ['/en/hair-transplant-turkey-risks'] },
  { fr: ['/apres-greffe-cheveux-mois-par-mois'], en: ['/en/hair-transplant-recovery-timeline'] },

  { fr: ['/fue-saphir-turquie', '/greffe-cheveux-saphir-turquie'], en: ['/en/sapphire-fue-hair-transplant-turkey'] },
  { fr: ['/dhi-ou-fue', '/difference-fue-dhi', '/meilleure-technique-greffe-cheveux'], en: ['/en/dhi-vs-fue-hair-transplant'] },
  { fr: ['/greffe-cheveux-sans-rasage-turquie', '/greffe-cheveux-femme-sans-rasage'], en: ['/en/no-shave-hair-transplant-turkey'] },
  {
    fr: ['/douleur-greffe-cheveux-anesthesie', '/greffe-cheveux-indolore-turquie', '/anesthesie-sans-aiguille-greffe-cheveux'],
    en: ['/en/hair-transplant-pain-anesthesia'],
  },
  {
    fr: ['/zone-donneuse-greffe-cheveux', '/zone-donneuse-abimee-greffe-cheveux', '/surprelevement-zone-donneuse'],
    en: ['/en/hair-transplant-donor-area'],
  },
  { fr: ['/reparer-greffe-cheveux-ratee', '/greffe-cheveux-ratee-turquie'], en: ['/en/hair-transplant-repair-turkey'] },
  {
    fr: ['/soins-apres-greffe-cheveux', '/premier-lavage-apres-greffe-cheveux', '/sport-apres-greffe-cheveux', '/prendre-avion-apres-greffe-cheveux', '/soleil-apres-greffe-cheveux'],
    en: ['/en/hair-transplant-aftercare'],
  },
  {
    fr: ['/greffe-ligne-frontale-turquie', '/ligne-frontale-naturelle-greffe-cheveux', '/greffe-golfes-cheveux'],
    en: ['/en/hairline-transplant-turkey'],
  },
  { fr: ['/greffe-vertex-turquie', '/greffe-tonsure-turquie'], en: ['/en/crown-hair-transplant-turkey'] },
  { fr: ['/greffe-sourcils-turquie', '/greffe-sourcils-avant-apres'], en: ['/en/eyebrow-transplant-turkey'] },
  { fr: ['/greffe-cheveux-cicatrice'], en: ['/en/hair-transplant-on-scar'] },
  { fr: ['/deuxieme-greffe-cheveux-turquie'], en: ['/en/second-hair-transplant-turkey'] },
];

const frToEn = new Map<string, string>();
const enToFr = new Map<string, string>();
const englishPaths = new Set<string>();

for (const group of routeGroups) {
  const canonicalFr = group.fr[0];
  const canonicalEn = group.en[0];

  group.fr.forEach((path) => frToEn.set(path, canonicalEn));
  group.en.forEach((path) => {
    enToFr.set(path, canonicalFr);
    englishPaths.add(path);
  });
}

export const getSiteLanguage = (pathname: string): SiteLanguage => {
  if (pathname === '/en' || pathname.startsWith('/en/') || englishPaths.has(pathname)) {
    return 'en';
  }
  return 'fr';
};

export const getAlternateRoute = (pathname: string, target: SiteLanguage): string => {
  const currentLanguage = getSiteLanguage(pathname);
  if (currentLanguage === target) return pathname;

  if (target === 'en') return frToEn.get(pathname) ?? '/en';
  return enToFr.get(pathname) ?? '/';
};

export const localizeInternalPath = (pathname: string, language: SiteLanguage): string => {
  if (language === 'en') return frToEn.get(pathname) ?? pathname;
  return enToFr.get(pathname) ?? pathname;
};

export const getNavigationItems = (language: SiteLanguage) => {
  if (language === 'en') {
    return [
      { key: 'nav.home', href: '/en' },
      { key: 'nav.techniques', href: '/en/techniques' },
      { key: 'nav.pricing', href: '/en/pricing' },
      { key: 'nav.why_turkey', href: '/en/why-turkey' },
      { key: 'nav.about', href: '/en/about' },
      { key: 'nav.faq', href: '/en/faq' },
      { key: 'nav.contact', href: '/en/contact' },
    ];
  }

  return [
    { key: 'nav.home', href: '/' },
    { key: 'nav.techniques', href: '/techniques' },
    { key: 'nav.pricing', href: '/tarifs' },
    { key: 'nav.why_turkey', href: '/turquie' },
    { key: 'nav.about', href: '/a-propos' },
    { key: 'nav.faq', href: '/faq' },
    { key: 'nav.contact', href: '/contact' },
  ];
};

export const getLocalizedContactPath = (language: SiteLanguage) =>
  language === 'en' ? '/en/contact' : '/contact';

export const getLocalizedHomePath = (language: SiteLanguage) =>
  language === 'en' ? '/en' : '/';

export const getLocalizedGuidesPath = (language: SiteLanguage) =>
  language === 'en' ? '/en/hair-transplant-guides' : '/guides-greffe-cheveux';
