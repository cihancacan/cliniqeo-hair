export const PUBLIC_ORIGIN = 'https://cliniqeo.com';

export const HAIR_FR_BASE = '/greffe-cheveux-turquie';
export const HAIR_EN_BASE = '/en/hair-transplant-turkey';
export const DENTAL_FR_BASE = '/soins-dentaires-turquie';
export const DENTAL_EN_BASE = '/en/dental-treatment-turkey';

const normalizePath = (value: string) => {
  const path = value.split(/[?#]/, 1)[0] || '/';
  if (path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
};

const frCoreRoutes = new Map<string, string>([
  ['/', HAIR_FR_BASE],
  ['/techniques', `${HAIR_FR_BASE}/techniques`],
  ['/tarifs', `${HAIR_FR_BASE}/tarifs`],
  ['/pricing', `${HAIR_FR_BASE}/tarifs`],
  ['/turquie', `${HAIR_FR_BASE}/turquie`],
  ['/a-propos', `${HAIR_FR_BASE}/a-propos`],
  ['/about', `${HAIR_FR_BASE}/a-propos`],
  ['/faq', `${HAIR_FR_BASE}/faq`],
  ['/contact', `${HAIR_FR_BASE}/contact`],
  ['/guides-greffe-cheveux', `${HAIR_FR_BASE}/guides`],
  ['/greffe-cheveux/avant-apres', `${HAIR_FR_BASE}/avant-apres`],
  ['/greffe-cheveux-france', `${HAIR_FR_BASE}/villes`],
]);

const enCoreRoutes = new Map<string, string>([
  ['/en', HAIR_EN_BASE],
  ['/en/techniques', `${HAIR_EN_BASE}/techniques`],
  ['/en/pricing', `${HAIR_EN_BASE}/pricing`],
  ['/en/why-turkey', `${HAIR_EN_BASE}/why-turkey`],
  ['/en/about', `${HAIR_EN_BASE}/about`],
  ['/en/faq', `${HAIR_EN_BASE}/faq`],
  ['/en/contact', `${HAIR_EN_BASE}/contact`],
  ['/en/before-after', `${HAIR_EN_BASE}/before-after`],
  ['/en/hair-transplant-guides', `${HAIR_EN_BASE}/guides`],
  ['/en/hair-transplant-by-city', `${HAIR_EN_BASE}/cities`],
  ['/en/uk/hair-transplant-cities', `${HAIR_EN_BASE}/uk/cities`],
  ['/en/us/hair-transplant-cities', `${HAIR_EN_BASE}/us/cities`],
]);

const rootEnglishGuidePaths = new Set([
  '/hair-transplant-turkey',
  '/turkey-hair-transplant',
  '/hair-transplant-in-turkey',
  '/fue-hair-transplant-turkey',
  '/dhi-hair-transplant-turkey',
  '/turkey-hair-transplant-cost',
  '/hair-transplant-turkey-cost',
  '/hair-transplant-turkey-price',
  '/turkey-hair-transplant-prices',
  '/how-much-hair-transplant-turkey',
  '/best-hair-transplant-clinic-turkey',
  '/best-clinic-for-hair-transplant-turkey',
  '/best-hair-implant-clinic-turkey',
  '/best-hair-transplant-turkey',
  '/hair-transplant-turkey-reviews',
]);

const frenchLocalCitySlugs = new Set([
  'paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'nice', 'nantes', 'lille', 'strasbourg', 'montpellier',
  'rennes', 'grenoble', 'rouen', 'toulon', 'reims', 'dijon', 'angers', 'nimes',
  'clermont-ferrand', 'tours', 'metz', 'nancy', 'orleans', 'caen',
]);

const isFrenchLocalPath = (path: string) => [
  '/greffe-de-cheveux-',
  '/greffe-capillaire-',
  '/implant-capillaire-',
  '/prix-greffe-cheveux-',
  '/clinique-greffe-cheveux-',
].some((prefix) => path.startsWith(prefix) && frenchLocalCitySlugs.has(path.slice(prefix.length)));

export function canonicalHairPath(value: string): string {
  const path = normalizePath(value);

  if (path === HAIR_FR_BASE || path.startsWith(`${HAIR_FR_BASE}/`)) return path;
  if (path === HAIR_EN_BASE || path.startsWith(`${HAIR_EN_BASE}/`)) return path;
  if (path === DENTAL_FR_BASE || path.startsWith(`${DENTAL_FR_BASE}/`)) return path;
  if (path === DENTAL_EN_BASE || path.startsWith(`${DENTAL_EN_BASE}/`)) return path;

  const frCore = frCoreRoutes.get(path);
  if (frCore) return frCore;

  const enCore = enCoreRoutes.get(path);
  if (enCore) return enCore;

  if (path.startsWith('/en/uk/') || path.startsWith('/en/us/')) {
    return `${HAIR_EN_BASE}${path.slice(3)}`;
  }

  if (isFrenchLocalPath(path)) return `${HAIR_FR_BASE}${path}`;

  if (path.startsWith('/en/')) {
    return `${HAIR_EN_BASE}/guides/${path.slice('/en/'.length)}`;
  }

  if (rootEnglishGuidePaths.has(path)) {
    return `${HAIR_EN_BASE}/guides${path}`;
  }

  return `${HAIR_FR_BASE}/guides${path}`;
}

export function publicUrl(path: string): string {
  return `${PUBLIC_ORIGIN}${normalizePath(path)}`;
}

export function isPortalPath(path: string): boolean {
  const normalized = normalizePath(path);
  return normalized === '/' || normalized === '/en';
}
