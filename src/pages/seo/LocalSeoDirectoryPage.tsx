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
    ? 'Greffe de cheveux en France par ville : prix et alternative Istanbul'
    : country === 'uk'
      ? 'Hair Transplant by UK City: Cost and Istanbul Alternative'
      : 'Hair Transplant by US State and City: Cost and Istanbul Alternative';
  const description = country === 'fr'
    ? 'Retrouvez les pages locales Cliniqeo Hair pour comparer greffe de cheveux, greffe capillaire, implant capillaire, prix et clinique dans 24 villes françaises.'
    : country === 'uk'
      ? 'Local hair transplant, restoration, implants, cost and clinic guides for 20 major UK cities, with an Istanbul comparison.'
      : 'Local hair transplant, restoration, implants, cost and clinic guides covering a principal city in every US state.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    inLanguage: isFr ? 'fr-FR' : 'en',
    url: `https://cliniqeo-hair.vercel.app${path}`,
    hasPart: cities.flatMap((city) => keywords.map((keyword) => ({
      '@type': 'WebPage',
      name: `${keyword.label} ${city.name}`,
      url: `https://cliniqeo-hair.vercel.app${getLocalPath(country, keyword, city)}`,
    }))),
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEOHead title={title} description={description} path={path} lang={isFr ? 'fr' : 'en'} schema={schema} />
      <section className="bg-gradient-to-br from-[#eaf3ff] via-white to-[#f7fbff] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2f6bfc] font-bold uppercase tracking-wider mb-4">{isFr ? 'Guides locaux' : 'Local guides'}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">{title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">{description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {cities.map((city) => (
            <article key={city.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-[#224671]">{city.name}{country === 'us' ? `, ${city.region}` : ''}</h2>
                  <p className="text-slate-500">{city.region} · {city.airport} ({city.airportCode})</p>
                </div>
                {isFr && <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#2f6bfc]">Paiement en 10× selon éligibilité</span>}
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
