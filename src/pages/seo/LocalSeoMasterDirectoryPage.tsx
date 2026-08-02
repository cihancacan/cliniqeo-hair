import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

function LocalSeoMasterDirectoryPage() {
  const path = '/en/hair-transplant-by-city';
  const title = 'Hair Transplant by City: United Kingdom and United States';
  const description = 'Browse local hair transplant, hair restoration, hair implants, cost and clinic guides for major UK cities and every US state.';

  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEOHead
        title={title}
        description={description}
        path={path}
        lang="en"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: title,
          description,
          url: `https://cliniqeo-hair.vercel.app${path}`,
          inLanguage: 'en',
        }}
      />
      <section className="bg-gradient-to-br from-[#eaf3ff] via-white to-[#f7fbff] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2f6bfc] font-bold uppercase tracking-wider mb-4">Local hair transplant guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">{title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">{description}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Link to="/en/uk/hair-transplant-cities" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
            <p className="text-sm font-bold text-[#2f6bfc] uppercase tracking-wider mb-3">United Kingdom</p>
            <h2 className="text-3xl font-bold text-[#224671] mb-4">20 UK cities</h2>
            <p className="text-slate-600 leading-relaxed">Hair transplant, hair restoration, hair implants, hair transplant cost and hair transplant clinic pages for each city.</p>
          </Link>
          <Link to="/en/us/hair-transplant-cities" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
            <p className="text-sm font-bold text-[#2f6bfc] uppercase tracking-wider mb-3">United States</p>
            <h2 className="text-3xl font-bold text-[#224671] mb-4">Every US state</h2>
            <p className="text-slate-600 leading-relaxed">One principal city in each state, with five separate local search-intent pages and an Istanbul comparison.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LocalSeoMasterDirectoryPage;
