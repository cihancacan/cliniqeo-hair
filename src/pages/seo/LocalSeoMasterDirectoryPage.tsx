import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

function LocalSeoMasterDirectoryPage() {
  const path = '/en/hair-transplant-by-city';
  const title = 'Local landing pages';
  const description = 'Internal access to the UK and US local landing pages.';

  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEOHead title={title} description={description} path={path} lang="en" robots="noindex,follow" />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Link to="/en/uk/hair-transplant-cities" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h1 className="text-3xl font-bold text-[#224671] mb-4">United Kingdom</h1>
            <p className="text-slate-600">20 locations · 5 landing pages per location</p>
          </Link>
          <Link to="/en/us/hair-transplant-cities" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h1 className="text-3xl font-bold text-[#224671] mb-4">United States</h1>
            <p className="text-slate-600">50 states · 5 landing pages per state</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LocalSeoMasterDirectoryPage;
