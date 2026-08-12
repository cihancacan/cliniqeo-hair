import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { getDentalCities, getDentalKeywords, getDentalLocalPath, type DentalCountry } from '../../config/dentalSeoData';
import { DENTAL_EN_BASE } from '../../config/siteRoutes';

interface Props {
  country: DentalCountry;
}

const DentalLocalDirectoryPage = ({ country }: Props) => {
  const cities = getDentalCities(country);
  const keywords = getDentalKeywords(country);
  const countryName = country === 'uk' ? 'United Kingdom' : 'United States';
  const path = `${DENTAL_EN_BASE}/${country}/cities`;

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <SEOHead
        title={`Dental treatment guides by city — ${countryName}`}
        description={`Browse Cliniqeo dental treatment comparison guides for selected locations in the ${countryName}.`}
        path={path}
        lang="en"
        siteName="Cliniqeo Dental"
        canonicalizeHair={false}
        robots="noindex,follow"
      />
      <section className="bg-gradient-to-br from-[#063f56] to-[#0bb5bc] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to={DENTAL_EN_BASE} className="mb-5 inline-flex items-center text-cyan-100 hover:text-white">Dental treatment in Turkey <ArrowRight className="ml-2" size={17} /></Link>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{countryName} dental comparison guides</h1>
          <p className="max-w-3xl text-lg text-cyan-50">These pages answer local searches while clearly explaining that treatment is carried out by partner dental professionals in Turkey.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
          {cities.map((city) => (
            <article key={city.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-[#10284d]">{city.name}{country === 'us' ? `, ${city.region}` : ''}</h2>
                <p className="text-slate-500">{city.region} · {city.airportCode}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {keywords.map((keyword) => (
                  <Link key={keyword.key} to={getDentalLocalPath(country, keyword, city)} className="rounded-full border border-cyan-200 px-4 py-2 text-sm font-semibold text-[#087d87] hover:border-[#08a9b5] hover:bg-cyan-50">
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
};

export default DentalLocalDirectoryPage;
