import { HAIR_EN_BASE, HAIR_FR_BASE } from './siteRoutes';

export type LocalCountry = 'fr' | 'uk' | 'us';
export type LocalIntent = 'complete' | 'technique' | 'implant' | 'price' | 'clinic';

export interface LocalKeyword {
  key: string;
  label: string;
  slug: string;
  intent: LocalIntent;
}

export interface LocalCity {
  name: string;
  slug: string;
  region: string;
  airport: string;
  airportCode: string;
  nearby?: string;
}

export const frLocalKeywords: LocalKeyword[] = [
  { key: 'greffe-de-cheveux', label: 'greffe de cheveux', slug: 'greffe-de-cheveux', intent: 'complete' },
  { key: 'greffe-capillaire', label: 'greffe capillaire', slug: 'greffe-capillaire', intent: 'technique' },
  { key: 'implant-capillaire', label: 'implant capillaire', slug: 'implant-capillaire', intent: 'implant' },
  { key: 'prix-greffe-cheveux', label: 'prix greffe cheveux', slug: 'prix-greffe-cheveux', intent: 'price' },
  { key: 'clinique-greffe-cheveux', label: 'clinique greffe cheveux', slug: 'clinique-greffe-cheveux', intent: 'clinic' },
];

export const enLocalKeywords: LocalKeyword[] = [
  { key: 'hair-transplant', label: 'hair transplant', slug: 'hair-transplant', intent: 'complete' },
  { key: 'hair-restoration', label: 'hair restoration', slug: 'hair-restoration', intent: 'technique' },
  { key: 'hair-implants', label: 'hair implants', slug: 'hair-implants', intent: 'implant' },
  { key: 'hair-transplant-cost', label: 'hair transplant cost', slug: 'hair-transplant-cost', intent: 'price' },
  { key: 'hair-transplant-clinic', label: 'hair transplant clinic', slug: 'hair-transplant-clinic', intent: 'clinic' },
];

export const frLocalCities: LocalCity[] = [
  { name: 'Paris', slug: 'paris', region: 'Île-de-France', airport: 'Paris-Charles de Gaulle', airportCode: 'CDG', nearby: 'Boulogne-Billancourt, Saint-Denis et Versailles' },
  { name: 'Lyon', slug: 'lyon', region: 'Auvergne-Rhône-Alpes', airport: 'Lyon-Saint-Exupéry', airportCode: 'LYS', nearby: 'Villeurbanne, Vénissieux et Saint-Étienne' },
  { name: 'Marseille', slug: 'marseille', region: 'Provence-Alpes-Côte d’Azur', airport: 'Marseille-Provence', airportCode: 'MRS', nearby: 'Aix-en-Provence, Toulon et Avignon' },
  { name: 'Toulouse', slug: 'toulouse', region: 'Occitanie', airport: 'Toulouse-Blagnac', airportCode: 'TLS', nearby: 'Montauban, Albi et Carcassonne' },
  { name: 'Bordeaux', slug: 'bordeaux', region: 'Nouvelle-Aquitaine', airport: 'Bordeaux-Mérignac', airportCode: 'BOD', nearby: 'Mérignac, Arcachon et Libourne' },
  { name: 'Nice', slug: 'nice', region: 'Provence-Alpes-Côte d’Azur', airport: 'Nice-Côte d’Azur', airportCode: 'NCE', nearby: 'Cannes, Antibes et Monaco' },
  { name: 'Nantes', slug: 'nantes', region: 'Pays de la Loire', airport: 'Nantes-Atlantique', airportCode: 'NTE', nearby: 'Saint-Nazaire, Angers et La Roche-sur-Yon' },
  { name: 'Lille', slug: 'lille', region: 'Hauts-de-France', airport: 'Lille-Lesquin', airportCode: 'LIL', nearby: 'Roubaix, Tourcoing et Arras' },
  { name: 'Strasbourg', slug: 'strasbourg', region: 'Grand Est', airport: 'Strasbourg-Entzheim', airportCode: 'SXB', nearby: 'Colmar, Mulhouse et Haguenau' },
  { name: 'Montpellier', slug: 'montpellier', region: 'Occitanie', airport: 'Montpellier-Méditerranée', airportCode: 'MPL', nearby: 'Nîmes, Béziers et Sète' },
  { name: 'Rennes', slug: 'rennes', region: 'Bretagne', airport: 'Rennes-Bretagne', airportCode: 'RNS', nearby: 'Saint-Malo, Vannes et Laval' },
  { name: 'Grenoble', slug: 'grenoble', region: 'Auvergne-Rhône-Alpes', airport: 'Lyon-Saint-Exupéry', airportCode: 'LYS', nearby: 'Chambéry, Annecy et Valence' },
  { name: 'Rouen', slug: 'rouen', region: 'Normandie', airport: 'Paris-Charles de Gaulle', airportCode: 'CDG', nearby: 'Le Havre, Évreux et Dieppe' },
  { name: 'Toulon', slug: 'toulon', region: 'Provence-Alpes-Côte d’Azur', airport: 'Marseille-Provence', airportCode: 'MRS', nearby: 'Hyères, La Seyne-sur-Mer et Draguignan' },
  { name: 'Reims', slug: 'reims', region: 'Grand Est', airport: 'Paris-Charles de Gaulle', airportCode: 'CDG', nearby: 'Épernay, Châlons-en-Champagne et Charleville-Mézières' },
  { name: 'Dijon', slug: 'dijon', region: 'Bourgogne-Franche-Comté', airport: 'Lyon-Saint-Exupéry', airportCode: 'LYS', nearby: 'Beaune, Besançon et Chalon-sur-Saône' },
  { name: 'Angers', slug: 'angers', region: 'Pays de la Loire', airport: 'Nantes-Atlantique', airportCode: 'NTE', nearby: 'Cholet, Saumur et Le Mans' },
  { name: 'Nîmes', slug: 'nimes', region: 'Occitanie', airport: 'Montpellier-Méditerranée', airportCode: 'MPL', nearby: 'Alès, Arles et Avignon' },
  { name: 'Clermont-Ferrand', slug: 'clermont-ferrand', region: 'Auvergne-Rhône-Alpes', airport: 'Lyon-Saint-Exupéry', airportCode: 'LYS', nearby: 'Vichy, Issoire et Roanne' },
  { name: 'Tours', slug: 'tours', region: 'Centre-Val de Loire', airport: 'Paris-Orly', airportCode: 'ORY', nearby: 'Orléans, Blois et Poitiers' },
  { name: 'Metz', slug: 'metz', region: 'Grand Est', airport: 'Luxembourg', airportCode: 'LUX', nearby: 'Thionville, Nancy et Verdun' },
  { name: 'Nancy', slug: 'nancy', region: 'Grand Est', airport: 'Luxembourg', airportCode: 'LUX', nearby: 'Metz, Épinal et Lunéville' },
  { name: 'Orléans', slug: 'orleans', region: 'Centre-Val de Loire', airport: 'Paris-Orly', airportCode: 'ORY', nearby: 'Blois, Chartres et Montargis' },
  { name: 'Caen', slug: 'caen', region: 'Normandie', airport: 'Paris-Charles de Gaulle', airportCode: 'CDG', nearby: 'Bayeux, Lisieux et Cherbourg' },
];

export const ukLocalCities: LocalCity[] = [
  { name: 'London', slug: 'london', region: 'England', airport: 'Heathrow', airportCode: 'LHR', nearby: 'Croydon, Watford and Reading' },
  { name: 'Birmingham', slug: 'birmingham', region: 'England', airport: 'Birmingham Airport', airportCode: 'BHX', nearby: 'Coventry, Wolverhampton and Solihull' },
  { name: 'Manchester', slug: 'manchester', region: 'England', airport: 'Manchester Airport', airportCode: 'MAN', nearby: 'Salford, Stockport and Bolton' },
  { name: 'Glasgow', slug: 'glasgow', region: 'Scotland', airport: 'Glasgow Airport', airportCode: 'GLA', nearby: 'Paisley, East Kilbride and Stirling' },
  { name: 'Leeds', slug: 'leeds', region: 'England', airport: 'Leeds Bradford Airport', airportCode: 'LBA', nearby: 'Bradford, Wakefield and Harrogate' },
  { name: 'Liverpool', slug: 'liverpool', region: 'England', airport: 'Liverpool John Lennon Airport', airportCode: 'LPL', nearby: 'Wirral, St Helens and Warrington' },
  { name: 'Newcastle', slug: 'newcastle', region: 'England', airport: 'Newcastle International Airport', airportCode: 'NCL', nearby: 'Gateshead, Sunderland and Durham' },
  { name: 'Sheffield', slug: 'sheffield', region: 'England', airport: 'Manchester Airport', airportCode: 'MAN', nearby: 'Rotherham, Barnsley and Chesterfield' },
  { name: 'Bristol', slug: 'bristol', region: 'England', airport: 'Bristol Airport', airportCode: 'BRS', nearby: 'Bath, Weston-super-Mare and Gloucester' },
  { name: 'Edinburgh', slug: 'edinburgh', region: 'Scotland', airport: 'Edinburgh Airport', airportCode: 'EDI', nearby: 'Livingston, Falkirk and Dunfermline' },
  { name: 'Cardiff', slug: 'cardiff', region: 'Wales', airport: 'Cardiff Airport', airportCode: 'CWL', nearby: 'Newport, Bridgend and Swansea' },
  { name: 'Belfast', slug: 'belfast', region: 'Northern Ireland', airport: 'Belfast International Airport', airportCode: 'BFS', nearby: 'Lisburn, Bangor and Newtownabbey' },
  { name: 'Nottingham', slug: 'nottingham', region: 'England', airport: 'East Midlands Airport', airportCode: 'EMA', nearby: 'Derby, Mansfield and Loughborough' },
  { name: 'Leicester', slug: 'leicester', region: 'England', airport: 'East Midlands Airport', airportCode: 'EMA', nearby: 'Loughborough, Hinckley and Nuneaton' },
  { name: 'Southampton', slug: 'southampton', region: 'England', airport: 'London Gatwick', airportCode: 'LGW', nearby: 'Portsmouth, Winchester and Bournemouth' },
  { name: 'Brighton', slug: 'brighton', region: 'England', airport: 'London Gatwick', airportCode: 'LGW', nearby: 'Hove, Worthing and Eastbourne' },
  { name: 'Cambridge', slug: 'cambridge', region: 'England', airport: 'London Stansted', airportCode: 'STN', nearby: 'Ely, Peterborough and Newmarket' },
  { name: 'Oxford', slug: 'oxford', region: 'England', airport: 'London Heathrow', airportCode: 'LHR', nearby: 'Banbury, Reading and Aylesbury' },
  { name: 'Coventry', slug: 'coventry', region: 'England', airport: 'Birmingham Airport', airportCode: 'BHX', nearby: 'Warwick, Rugby and Solihull' },
  { name: 'Reading', slug: 'reading', region: 'England', airport: 'London Heathrow', airportCode: 'LHR', nearby: 'Bracknell, Wokingham and Slough' },
];

export const usLocalCities: LocalCity[] = [
  { name: 'Birmingham', slug: 'birmingham-alabama', region: 'Alabama', airport: 'Birmingham-Shuttlesworth International Airport', airportCode: 'BHM' },
  { name: 'Anchorage', slug: 'anchorage-alaska', region: 'Alaska', airport: 'Ted Stevens Anchorage International Airport', airportCode: 'ANC' },
  { name: 'Phoenix', slug: 'phoenix-arizona', region: 'Arizona', airport: 'Phoenix Sky Harbor International Airport', airportCode: 'PHX' },
  { name: 'Little Rock', slug: 'little-rock-arkansas', region: 'Arkansas', airport: 'Bill and Hillary Clinton National Airport', airportCode: 'LIT' },
  { name: 'Los Angeles', slug: 'los-angeles-california', region: 'California', airport: 'Los Angeles International Airport', airportCode: 'LAX' },
  { name: 'Denver', slug: 'denver-colorado', region: 'Colorado', airport: 'Denver International Airport', airportCode: 'DEN' },
  { name: 'Hartford', slug: 'hartford-connecticut', region: 'Connecticut', airport: 'Bradley International Airport', airportCode: 'BDL' },
  { name: 'Wilmington', slug: 'wilmington-delaware', region: 'Delaware', airport: 'Philadelphia International Airport', airportCode: 'PHL' },
  { name: 'Miami', slug: 'miami-florida', region: 'Florida', airport: 'Miami International Airport', airportCode: 'MIA' },
  { name: 'Atlanta', slug: 'atlanta-georgia', region: 'Georgia', airport: 'Hartsfield-Jackson Atlanta International Airport', airportCode: 'ATL' },
  { name: 'Honolulu', slug: 'honolulu-hawaii', region: 'Hawaii', airport: 'Daniel K. Inouye International Airport', airportCode: 'HNL' },
  { name: 'Boise', slug: 'boise-idaho', region: 'Idaho', airport: 'Boise Airport', airportCode: 'BOI' },
  { name: 'Chicago', slug: 'chicago-illinois', region: 'Illinois', airport: "O'Hare International Airport", airportCode: 'ORD' },
  { name: 'Indianapolis', slug: 'indianapolis-indiana', region: 'Indiana', airport: 'Indianapolis International Airport', airportCode: 'IND' },
  { name: 'Des Moines', slug: 'des-moines-iowa', region: 'Iowa', airport: 'Des Moines International Airport', airportCode: 'DSM' },
  { name: 'Wichita', slug: 'wichita-kansas', region: 'Kansas', airport: 'Wichita Dwight D. Eisenhower National Airport', airportCode: 'ICT' },
  { name: 'Louisville', slug: 'louisville-kentucky', region: 'Kentucky', airport: 'Louisville Muhammad Ali International Airport', airportCode: 'SDF' },
  { name: 'New Orleans', slug: 'new-orleans-louisiana', region: 'Louisiana', airport: 'Louis Armstrong New Orleans International Airport', airportCode: 'MSY' },
  { name: 'Portland', slug: 'portland-maine', region: 'Maine', airport: 'Portland International Jetport', airportCode: 'PWM' },
  { name: 'Baltimore', slug: 'baltimore-maryland', region: 'Maryland', airport: 'Baltimore/Washington International Airport', airportCode: 'BWI' },
  { name: 'Boston', slug: 'boston-massachusetts', region: 'Massachusetts', airport: 'Boston Logan International Airport', airportCode: 'BOS' },
  { name: 'Detroit', slug: 'detroit-michigan', region: 'Michigan', airport: 'Detroit Metropolitan Airport', airportCode: 'DTW' },
  { name: 'Minneapolis', slug: 'minneapolis-minnesota', region: 'Minnesota', airport: 'Minneapolis-Saint Paul International Airport', airportCode: 'MSP' },
  { name: 'Jackson', slug: 'jackson-mississippi', region: 'Mississippi', airport: 'Jackson-Medgar Wiley Evers International Airport', airportCode: 'JAN' },
  { name: 'St. Louis', slug: 'st-louis-missouri', region: 'Missouri', airport: 'St. Louis Lambert International Airport', airportCode: 'STL' },
  { name: 'Billings', slug: 'billings-montana', region: 'Montana', airport: 'Billings Logan International Airport', airportCode: 'BIL' },
  { name: 'Omaha', slug: 'omaha-nebraska', region: 'Nebraska', airport: 'Eppley Airfield', airportCode: 'OMA' },
  { name: 'Las Vegas', slug: 'las-vegas-nevada', region: 'Nevada', airport: 'Harry Reid International Airport', airportCode: 'LAS' },
  { name: 'Manchester', slug: 'manchester-new-hampshire', region: 'New Hampshire', airport: 'Manchester-Boston Regional Airport', airportCode: 'MHT' },
  { name: 'Newark', slug: 'newark-new-jersey', region: 'New Jersey', airport: 'Newark Liberty International Airport', airportCode: 'EWR' },
  { name: 'Albuquerque', slug: 'albuquerque-new-mexico', region: 'New Mexico', airport: 'Albuquerque International Sunport', airportCode: 'ABQ' },
  { name: 'New York City', slug: 'new-york-city-new-york', region: 'New York', airport: 'John F. Kennedy International Airport', airportCode: 'JFK' },
  { name: 'Charlotte', slug: 'charlotte-north-carolina', region: 'North Carolina', airport: 'Charlotte Douglas International Airport', airportCode: 'CLT' },
  { name: 'Fargo', slug: 'fargo-north-dakota', region: 'North Dakota', airport: 'Hector International Airport', airportCode: 'FAR' },
  { name: 'Columbus', slug: 'columbus-ohio', region: 'Ohio', airport: 'John Glenn Columbus International Airport', airportCode: 'CMH' },
  { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma', region: 'Oklahoma', airport: 'Will Rogers World Airport', airportCode: 'OKC' },
  { name: 'Portland', slug: 'portland-oregon', region: 'Oregon', airport: 'Portland International Airport', airportCode: 'PDX' },
  { name: 'Philadelphia', slug: 'philadelphia-pennsylvania', region: 'Pennsylvania', airport: 'Philadelphia International Airport', airportCode: 'PHL' },
  { name: 'Providence', slug: 'providence-rhode-island', region: 'Rhode Island', airport: 'Rhode Island T. F. Green International Airport', airportCode: 'PVD' },
  { name: 'Charleston', slug: 'charleston-south-carolina', region: 'South Carolina', airport: 'Charleston International Airport', airportCode: 'CHS' },
  { name: 'Sioux Falls', slug: 'sioux-falls-south-dakota', region: 'South Dakota', airport: 'Sioux Falls Regional Airport', airportCode: 'FSD' },
  { name: 'Nashville', slug: 'nashville-tennessee', region: 'Tennessee', airport: 'Nashville International Airport', airportCode: 'BNA' },
  { name: 'Houston', slug: 'houston-texas', region: 'Texas', airport: 'George Bush Intercontinental Airport', airportCode: 'IAH' },
  { name: 'Salt Lake City', slug: 'salt-lake-city-utah', region: 'Utah', airport: 'Salt Lake City International Airport', airportCode: 'SLC' },
  { name: 'Burlington', slug: 'burlington-vermont', region: 'Vermont', airport: 'Patrick Leahy Burlington International Airport', airportCode: 'BTV' },
  { name: 'Virginia Beach', slug: 'virginia-beach-virginia', region: 'Virginia', airport: 'Norfolk International Airport', airportCode: 'ORF' },
  { name: 'Seattle', slug: 'seattle-washington', region: 'Washington', airport: 'Seattle-Tacoma International Airport', airportCode: 'SEA' },
  { name: 'Charleston', slug: 'charleston-west-virginia', region: 'West Virginia', airport: 'West Virginia International Yeager Airport', airportCode: 'CRW' },
  { name: 'Milwaukee', slug: 'milwaukee-wisconsin', region: 'Wisconsin', airport: 'Milwaukee Mitchell International Airport', airportCode: 'MKE' },
  { name: 'Cheyenne', slug: 'cheyenne-wyoming', region: 'Wyoming', airport: 'Denver International Airport', airportCode: 'DEN' },
];

export function getLocalPath(country: LocalCountry, keyword: LocalKeyword, city: LocalCity) {
  if (country === 'fr') return `${HAIR_FR_BASE}/${keyword.slug}-${city.slug}`;
  return `${HAIR_EN_BASE}/${country}/${keyword.slug}-${city.slug}`;
}

export function getLocalCities(country: LocalCountry) {
  if (country === 'fr') return frLocalCities;
  if (country === 'uk') return ukLocalCities;
  return usLocalCities;
}

export function getLocalKeywords(country: LocalCountry) {
  return country === 'fr' ? frLocalKeywords : enLocalKeywords;
}

export function findLocalPage(pathname: string) {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const canonicalUkPrefix = `${HAIR_EN_BASE}/uk/`;
  const canonicalUsPrefix = `${HAIR_EN_BASE}/us/`;
  const country: LocalCountry = cleanPath.startsWith(canonicalUkPrefix) || cleanPath.startsWith('/en/uk/')
    ? 'uk'
    : cleanPath.startsWith(canonicalUsPrefix) || cleanPath.startsWith('/en/us/')
      ? 'us'
      : 'fr';
  const relative = country === 'fr'
    ? cleanPath.replace(`${HAIR_FR_BASE}/`, '').replace(/^\//, '')
    : cleanPath
      .replace(`${HAIR_EN_BASE}/${country}/`, '')
      .replace(`/en/${country}/`, '');
  const keywords = getLocalKeywords(country);
  const cities = getLocalCities(country);
  const keyword = keywords.find((item) => relative.startsWith(`${item.slug}-`));
  if (!keyword) return null;
  const citySlug = relative.slice(keyword.slug.length + 1);
  const city = cities.find((item) => item.slug === citySlug);
  if (!city) return null;
  return { country, keyword, city, path: getLocalPath(country, keyword, city) };
}

export const localSeoRouteCount =
  frLocalCities.length * frLocalKeywords.length +
  ukLocalCities.length * enLocalKeywords.length +
  usLocalCities.length * enLocalKeywords.length;
