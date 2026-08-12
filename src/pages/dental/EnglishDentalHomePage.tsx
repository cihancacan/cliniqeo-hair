import { ArrowRight, CheckCircle, HeartHandshake, Languages, Plane, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocalLeadForm from '../../components/LocalLeadForm';
import SEOHead from '../../components/SEOHead';
import { DENTAL_EN_BASE, PUBLIC_ORIGIN } from '../../config/siteRoutes';

const treatments = [
  ['Dental implants', 'Replace one or more missing teeth after clinical and radiographic assessment.'],
  ['Veneers', 'Review tooth preparation, material, shade, bite and long-term maintenance before deciding.'],
  ['Crowns and bridges', 'Restore damaged or missing teeth with a plan based on tooth and gum health.'],
  ['Full-mouth rehabilitation', 'Coordinate phased treatment when several teeth, the bite or both arches require care.'],
];

const EnglishDentalHomePage = () => {
  const title = 'Dental treatment in Turkey for UK and US patients';
  const description = 'Plan dental treatment in Turkey with English-speaking coordination: implants, veneers, crowns, written quotations, travel planning and follow-up.';
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Dental treatment coordination in Turkey',
      description,
      url: `${PUBLIC_ORIGIN}${DENTAL_EN_BASE}`,
      provider: { '@type': 'Organization', '@id': `${PUBLIC_ORIGIN}/#organization`, name: 'Cliniqeo', url: PUBLIC_ORIGIN },
      areaServed: ['United Kingdom', 'United States'],
      serviceType: 'Dental travel coordination',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cliniqeo', item: `${PUBLIC_ORIGIN}/en` },
        { '@type': 'ListItem', position: 2, name: 'Dental treatment in Turkey', item: `${PUBLIC_ORIGIN}${DENTAL_EN_BASE}` },
      ],
    },
  ];

  return (
    <div className="bg-white pt-20">
      <SEOHead
        title={title}
        description={description}
        path={DENTAL_EN_BASE}
        lang="en"
        siteName="Cliniqeo Dental"
        contentType="website"
        canonicalizeHair={false}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#063f56] via-[#087d87] to-[#0bb5bc] py-20 text-white md:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-extrabold tracking-[0.14em] text-cyan-100">DENTAL CARE COORDINATION IN TURKEY</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Dental treatment in Turkey with a clear, written plan</h1>
            <p className="mb-8 text-xl leading-relaxed text-cyan-50">Compare implants, veneers, crowns and restorative options with named medical responsibility, itemised costs and English-speaking support.</p>
            <a href="#dental-assessment" className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-[#087d87] hover:bg-cyan-50">
              Request a free assessment <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl">
            <img src="/cliniqeo.apropos.jpg" alt="Cliniqeo English-speaking patient coordination team" className="h-[420px] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-[#10284d]">Treatments considered after assessment</h2>
            <p className="text-lg text-slate-600">A remote review can provide initial orientation. A dentist must confirm the diagnosis and final treatment after the required clinical examination and imaging.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map(([name, text]) => (
              <article key={name} className="rounded-2xl border border-cyan-100 bg-[#f7feff] p-7">
                <CheckCircle className="mb-4 text-[#08a9b5]" size={28} />
                <h3 className="mb-3 text-2xl font-bold text-[#10284d]">{name}</h3>
                <p className="leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-3">
            {[
              [ShieldCheck, 'Medical responsibility explained', 'The proposal should identify the treating provider, planned procedures, material choices, alternatives and limitations.'],
              [Languages, 'English-speaking coordination', 'Practical communication is coordinated before travel, during appointments and after returning home.'],
              [Plane, 'Travel built around treatment', 'The itinerary accounts for examinations, laboratory stages, fitting, checks and the time required between visits.'],
            ].map(([Icon, heading, text]) => {
              const CardIcon = Icon as typeof ShieldCheck;
              return (
                <article key={heading as string} className="rounded-2xl bg-white p-7 shadow-sm">
                  <CardIcon className="mb-5 text-[#08a9b5]" size={30} />
                  <h2 className="mb-3 text-xl font-bold text-[#10284d]">{heading as string}</h2>
                  <p className="leading-relaxed text-slate-600">{text as string}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link to={`${DENTAL_EN_BASE}/uk/cities`} className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-bold text-[#10284d]">Information for UK patients</h2>
              <p className="mb-5 text-slate-600">Explore the selected UK location guides and compare a local search with coordinated treatment in Turkey.</p>
              <span className="inline-flex items-center font-bold text-[#087d87]">View UK locations <ArrowRight className="ml-2" size={18} /></span>
            </Link>
            <Link to={`${DENTAL_EN_BASE}/us/cities`} className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-bold text-[#10284d]">Information for US patients</h2>
              <p className="mb-5 text-slate-600">Explore one selected city in each state and prepare a like-for-like treatment and travel comparison.</p>
              <span className="inline-flex items-center font-bold text-[#087d87]">View US locations <ArrowRight className="ml-2" size={18} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="dental-assessment" className="scroll-mt-24 bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-3 text-[#087d87]"><HeartHandshake size={26} /><span className="font-bold">No-obligation first orientation</span></div>
          <LocalLeadForm lang="en" cityLabel="UK or US" pagePath={DENTAL_EN_BASE} service="dental" />
        </div>
      </section>
    </div>
  );
};

export default EnglishDentalHomePage;
