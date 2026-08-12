import { ukLocalCities, usLocalCities, type LocalCity } from './localSeoData';
import { DENTAL_EN_BASE } from './siteRoutes';

export type DentalCountry = 'uk' | 'us';
export type DentalIntent = 'general' | 'clinic' | 'centre' | 'implants' | 'cosmetic' | 'veneers';

export interface DentalKeyword {
  key: string;
  label: string;
  slug: string;
  intent: DentalIntent;
}

const commonKeywords: DentalKeyword[] = [
  { key: 'dentist', label: 'dentist', slug: 'dentist', intent: 'general' },
  { key: 'dental-clinic', label: 'dental clinic', slug: 'dental-clinic', intent: 'clinic' },
  { key: 'dental-implants', label: 'dental implants', slug: 'dental-implants', intent: 'implants' },
  { key: 'cosmetic-dentist', label: 'cosmetic dentist', slug: 'cosmetic-dentist', intent: 'cosmetic' },
  { key: 'veneers', label: 'veneers', slug: 'veneers', intent: 'veneers' },
];

export const ukDentalKeywords: DentalKeyword[] = [
  ...commonKeywords.slice(0, 2),
  { key: 'dental-centre', label: 'dental centre', slug: 'dental-centre', intent: 'centre' },
  ...commonKeywords.slice(2),
];

export const usDentalKeywords: DentalKeyword[] = [
  ...commonKeywords.slice(0, 2),
  { key: 'dental-center', label: 'dental center', slug: 'dental-center', intent: 'centre' },
  ...commonKeywords.slice(2),
];

export function getDentalCities(country: DentalCountry): LocalCity[] {
  return country === 'uk' ? ukLocalCities : usLocalCities;
}

export function getDentalKeywords(country: DentalCountry): DentalKeyword[] {
  return country === 'uk' ? ukDentalKeywords : usDentalKeywords;
}

export function getDentalLocalPath(country: DentalCountry, keyword: DentalKeyword, city: LocalCity): string {
  return `${DENTAL_EN_BASE}/${country}/${keyword.slug}-${city.slug}`;
}

export function findDentalLocalPage(pathname: string) {
  const cleanPath = pathname.replace(/\/$/, '');
  const country: DentalCountry | null = cleanPath.startsWith(`${DENTAL_EN_BASE}/uk/`)
    ? 'uk'
    : cleanPath.startsWith(`${DENTAL_EN_BASE}/us/`)
      ? 'us'
      : null;

  if (!country) return null;
  const relative = cleanPath.slice(`${DENTAL_EN_BASE}/${country}/`.length);
  const keyword = getDentalKeywords(country).find((item) => relative.startsWith(`${item.slug}-`));
  if (!keyword) return null;
  const city = getDentalCities(country).find((item) => item.slug === relative.slice(keyword.slug.length + 1));
  if (!city) return null;
  return { country, keyword, city, path: getDentalLocalPath(country, keyword, city) };
}

export const dentalLocalRouteCount =
  ukLocalCities.length * ukDentalKeywords.length +
  usLocalCities.length * usDentalKeywords.length;
