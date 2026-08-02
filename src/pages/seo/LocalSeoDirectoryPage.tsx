import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { enLocalKeywords, frLocalCities, frLocalKeywords, getLocalPath, ukLocalCities, usLocalCities, type LocalCountry } from '../../config/localSeoData';

interface Props {
  country: LocalCountry;
}

function LocalSeoDirectoryPage({ country }: Props) {
  const isFr = country === 'fr';
  const cities = country === 'fr' ? frLocalCities : country === 'uk' ? ukLocalCities : usLocalCities;
  const keywords = isFr ? frLocalKeywords : enLocalKeywords;
  const path = country === 'fr' ? '/greffe-cheveux-france' : `/en/${country}/hair-transplant-cities`;
  const title = country === 'fr'
    ? 'Accès aux pages locales françaises'
    : country === 'uk'
      ? 'UK local landing pages'
      : 'US local landing pages';
  const description = isFr
    ? 'Accès interne aux landing pages locales françaises de Cliniqeo Hair.'
    : 'Internal access to Cliniqeo Hair local landing pages.';

  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEOHead title={title} description={description} path={path} lang={isFr ? 'fr' : 'en'} robots="noindex,follow" />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {cities.map((city) => (
            <article key={city.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5">
                <h1 className="text-2xl font-bold text-[#224671]">{city.name}{country === 'us' ? `, ${city.region}` : ''}</h1>
                <p className="text-slate-500">{city.region} · {city.airportCode}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {keywords.map((keyword) => (
                  <Link key={keyword.key} to={getLocalPath(country, keyword, city)} className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-[#224671] hover:border-[#2f6bfc] hover:bg-blue-50 transition-colors">
                    {keyword.label} {city.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LocalSeoDirectoryPage;
