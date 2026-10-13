import {
  getLocalCities,
  getLocalKeywords,
  getLocalPath,
  type LocalCountry,
} from './localSeoData';

/**
 * Resolves a local SEO route by testing the longest keyword slug first.
 * This prevents `hair-transplant` from incorrectly consuming routes such as
 * `hair-transplant-cost-birmingham` and `hair-transplant-clinic-birmingham`.
 */
export function findLocalSeoPage(pathname: string) {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  // The public English mount strips /en before client-side route matching.
  const normalizedPath = /^\/(uk|us)\//.test(cleanPath) ? `/en${cleanPath}` : cleanPath;
  const country: LocalCountry = normalizedPath.startsWith('/en/uk/')
    ? 'uk'
    : normalizedPath.startsWith('/en/us/')
      ? 'us'
      : 'fr';

  const relative = country === 'fr'
    ? normalizedPath.slice(1)
    : normalizedPath.replace(`/en/${country}/`, '');

  const keywords = [...getLocalKeywords(country)].sort(
    (left, right) => right.slug.length - left.slug.length,
  );
  const cities = getLocalCities(country);
  const keyword = keywords.find((item) => relative.startsWith(`${item.slug}-`));

  if (!keyword) return null;

  const citySlug = relative.slice(keyword.slug.length + 1);
  const city = cities.find((item) => item.slug === citySlug);

  if (!city) return null;

  return {
    country,
    keyword,
    city,
    path: getLocalPath(country, keyword, city),
  };
}
