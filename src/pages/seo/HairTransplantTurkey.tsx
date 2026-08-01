import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, ShieldCheck } from 'lucide-react';
import EnglishTechniquePage from '../en/EnglishTechniquePage';
import SEOHead from '../../components/SEOHead';

const HairTransplantTurkey = () => {
  const { pathname } = useLocation();

  if (pathname === '/fue-hair-transplant-turkey') {
    return <EnglishTechniquePage method="fue" />;
  }

  if (pathname === '/dhi-hair-transplant-turkey') {
    return <EnglishTechniquePage method="dhi" />;
  }

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Hair Transplant in Turkey: FUE, DHI, Prices and Planning | Cliniqeo Hair"
        description="Plan a hair transplant in Turkey with English-speaking support. Compare FUE and DHI, understand prices, donor-area assessment, travel and follow-up."
        path="/hair-transplant-turkey"
        lang="en"
        alternates={[
          { lang: 'en', path: '/hair-transplant-turkey' },
          { lang: 'fr', path: '/greffe-de-cheveux-turquie' },
          { lang: 'x-default', path: '/greffe-de-cheveux-turquie' },
        ]}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-100 font-semibold mb-5"><ShieldCheck size={22} /> Cliniqeo Hair</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Hair transplant in Turkey with English-speaking support</h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-4xl leading-relaxed mb-9">
            Compare FUE and DHI, understand your donor-area limits and receive a detailed treatment and travel quotation before booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/en/contact" className="inline-flex items-center justify-center bg-white text-[#224671] px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50">
              Request a free assessment <ArrowRight className="ml-2" size={20} />
            </Link>
            <a href="tel:+33188842222" className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20">
              <Phone className="mr-2" size={20} /> Call +33 1 88 84 22 22
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="rounded-3xl border-2 border-blue-100 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#224671] mb-4">FUE hair transplant</h2>
            <p className="text-slate-700 leading-relaxed mb-6">Follicular units are extracted individually and implanted according to the planned hairline, direction and density.</p>
            <ul className="space-y-3 mb-7">
              <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />No linear donor scar</li>
              <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />Often suitable for larger areas</li>
              <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />Donor management remains essential</li>
            </ul>
            <Link to="/fue-hair-transplant-turkey" className="inline-flex items-center font-bold text-[#2f6bfc]">Read the FUE guide <ArrowRight className="ml-2" size={18} /></Link>
          </article>

          <article className="rounded-3xl border-2 border-cyan-100 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#224671] mb-4">DHI hair transplant</h2>
            <p className="text-slate-700 leading-relaxed mb-6">Prepared grafts are placed using an implanter pen in selected recipient areas.</p>
            <ul className="space-y-3 mb-7">
              <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />Controlled graft placement</li>
              <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />May suit work around existing hair</li>
              <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />Not automatically better than FUE</li>
            </ul>
            <Link to="/dhi-hair-transplant-turkey" className="inline-flex items-center font-bold text-[#2f6bfc]">Read the DHI guide <ArrowRight className="ml-2" size={18} /></Link>
          </article>

          <article className="rounded-3xl bg-[#224671] text-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Choosing safely</h2>
            <p className="text-blue-100 leading-relaxed mb-6">The technique name matters less than diagnosis, donor preservation, graft handling, hairline planning and accessible follow-up.</p>
            <Link to="/en/dhi-vs-fue-hair-transplant" className="inline-flex items-center rounded-xl bg-white text-[#224671] px-6 py-3 font-bold">Compare DHI and FUE <ArrowRight className="ml-2" size={18} /></Link>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#224671] mb-8">What a complete plan should explain</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              ['Diagnosis and candidacy', 'Cause and stability of hair loss, donor density, scalp health and realistic priorities.'],
              ['Graft planning', 'Estimated graft count, extraction distribution and long-term donor preservation.'],
              ['Medical responsibilities', 'Who performs the assessment, design, extraction, recipient sites and implantation.'],
              ['Package details', 'Procedure, hotel, transfers, interpreting, medication and optional services listed separately.'],
              ['Recovery guidance', 'Washing, sleeping, exercise, sun, flying and signs requiring medical advice.'],
              ['Long-term follow-up', 'Scheduled reviews during healing, shedding, early growth and final maturation.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-xl bg-white border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">{title}</h3>
                <p className="text-slate-700 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/en/contact" className="inline-flex items-center rounded-xl bg-[#2f6bfc] text-white px-8 py-4 text-lg font-bold hover:bg-[#224671]">Start my assessment <ArrowRight className="ml-2" size={20} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairTransplantTurkey;
