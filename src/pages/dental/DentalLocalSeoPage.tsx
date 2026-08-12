import { CheckCircle, CircleDollarSign, Languages, Plane, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LocalLeadForm from '../../components/LocalLeadForm';
import SEOHead from '../../components/SEOHead';
import { findDentalLocalPage, type DentalIntent } from '../../config/dentalSeoData';
import { DENTAL_EN_BASE, PUBLIC_ORIGIN } from '../../config/siteRoutes';

interface DentalIntentCopy {
  heading: string;
  answer: string;
  focusTitle: string;
  focus: string;
  checks: string[];
}

const intentCopy: Record<DentalIntent, DentalIntentCopy> = {
  general: {
    heading: 'Dentist',
    answer: 'Compare diagnosis, treatment scope, clinician responsibility, materials, total cost and follow-up—not location or headline price alone.',
    focusTitle: 'What makes a dental plan reliable?',
    focus: 'A responsible proposal starts with oral health, X-rays or scans when indicated, viable alternatives and the long-term prognosis of each tooth. The final plan must be confirmed by the treating dentist.',
    checks: ['Diagnosis and suitable alternatives', 'Named treating provider', 'Written stages, materials and follow-up'],
  },
  clinic: {
    heading: 'Dental clinic',
    answer: 'A clinic comparison should cover professional credentials, infection control, laboratory workflow, implant or restorative systems, complication planning and aftercare.',
    focusTitle: 'How to compare dental clinics',
    focus: 'Ask who will examine and treat you, how many visits are required, which records are included and what happens if the treatment plan changes after the in-person examination.',
    checks: ['Clinician identity and credentials', 'Documented materials and systems', 'Clear escalation and aftercare process'],
  },
  centre: {
    heading: 'Dental centre',
    answer: 'A multidisciplinary centre may coordinate restorative, implant and cosmetic care, but every procedure still needs an individual diagnosis and clearly assigned clinical responsibility.',
    focusTitle: 'Coordinating several dental procedures',
    focus: 'Complex cases may involve restorative dentists, implant clinicians, oral surgeons or laboratory technicians. The treatment sequence and responsibility for each stage should be written down.',
    checks: ['One coordinated treatment sequence', 'Responsibilities defined by stage', 'Laboratory and review dates confirmed'],
  },
  implants: {
    heading: 'Dental implants',
    answer: 'Implant suitability depends on bone, gum health, medical history, bite and restoration design. A price per implant is not a complete treatment plan.',
    focusTitle: 'What an implant proposal should explain',
    focus: 'The plan should state the implant system, whether grafting may be needed, the temporary-tooth strategy, healing time, final restoration and maintenance requirements.',
    checks: ['Imaging and bone assessment', 'Implant and restoration specifications', 'Healing, temporary teeth and maintenance'],
  },
  cosmetic: {
    heading: 'Cosmetic dentist',
    answer: 'Cosmetic planning should protect healthy tooth structure, gums and bite while defining achievable changes in shape, shade and alignment.',
    focusTitle: 'Aesthetic goals without overlooking health',
    focus: 'Ask whether whitening, bonding, orthodontics or limited restorative work could meet the goal before choosing extensive preparation. Photos or mock-ups do not replace a clinical examination.',
    checks: ['Conservative alternatives considered', 'Gum health and bite reviewed', 'Shape, shade and limitations agreed'],
  },
  veneers: {
    heading: 'Veneers',
    answer: 'Veneers can change visible tooth shape and colour, but preparation, material, margins, bite and maintenance determine whether treatment is appropriate.',
    focusTitle: 'Questions to ask before choosing veneers',
    focus: 'Confirm how much tooth preparation is expected, whether any teeth need a different treatment, which material is proposed and how provisional and final results will be reviewed.',
    checks: ['Preparation amount explained', 'Material and laboratory process stated', 'Final bite and maintenance reviewed'],
  },
};

function stringHash(value: string) {
  return Array.from(value).reduce((total, character) => total + character.charCodeAt(0), 0);
}

const DentalLocalSeoPage = () => {
  const { pathname } = useLocation();
  const page = findDentalLocalPage(pathname);

  if (!page) {
    return (
      <div className="mx-auto min-h-[60vh] max-w-4xl px-4 pb-24 pt-36 text-center">
        <h1 className="mb-5 text-4xl font-bold text-[#10284d]">Page not found</h1>
        <Link to={DENTAL_EN_BASE} className="font-bold text-[#087d87]">Return to dental treatment in Turkey</Link>
      </div>
    );
  }

  const { city, country, keyword, path } = page;
  const copy = intentCopy[keyword.intent];
  const cityLabel = country === 'us' ? `${city.name}, ${city.region}` : city.name;
  const countryName = country === 'uk' ? 'United Kingdom' : 'United States';
  const title = `${copy.heading} in ${cityLabel}: compare treatment in Turkey`;
  const description = `${keyword.label} in ${cityLabel}: compare a local dental plan with coordinated treatment in Turkey, including clinical responsibility, costs, travel and aftercare.`;
  const variant = stringHash(path) % 3;
  const localIntroductions = [
    `If you are researching a ${keyword.label} in ${cityLabel}, proximity may be important—but a safe comparison also needs diagnosis, written clinical responsibility and a complete treatment cost.`,
    `A search for a ${keyword.label} in ${cityLabel} often begins with convenience and price. The more useful next step is to compare the proposed treatment, alternatives, materials, timeline and aftercare.`,
    `Patients in ${city.region} can compare local care with a planned dental journey to Turkey, provided both options are assessed on the same clinical scope and not on headline prices alone.`,
  ];
  const faqs = [
    {
      q: `Does Cliniqeo operate a dental clinic in ${cityLabel}?`,
      a: `No. This page is information for people searching around ${cityLabel}. Cliniqeo coordinates treatment travel, while examinations and dental procedures are performed by partner dental professionals in Turkey.`,
    },
    {
      q: `How can I request an initial review from ${city.name}?`,
      a: 'Send your goals, relevant dental history and any recent X-rays or scans you already have. An initial orientation is not a final diagnosis; the treating dentist confirms the plan in person.',
    },
    {
      q: 'What should a written dental quotation include?',
      a: 'It should list each tooth or arch, planned procedures, materials or systems, temporary restorations, laboratory stages, visits, exclusions, payment terms and follow-up arrangements.',
    },
    {
      q: `How can travel be planned from ${cityLabel}?`,
      a: `Planning can start around ${city.airport} (${city.airportCode}) or another suitable airport. Dates should be confirmed only after the clinical stages and required time between appointments are understood.`,
    },
    {
      q: 'Is treatment in Turkey always cheaper?',
      a: 'Not necessarily. Compare clinically equivalent written plans and include travel, accommodation, possible return visits and long-term maintenance. Suitability and quality come before savings.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${PUBLIC_ORIGIN}${path}`,
      inLanguage: 'en',
      about: { '@type': 'Service', name: 'Dental treatment coordination in Turkey' },
      mainEntity: {
        '@type': 'Service',
        name: `${copy.heading} information for ${cityLabel}`,
        serviceType: 'Dental travel coordination',
        areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.region } },
        provider: { '@type': 'Organization', '@id': `${PUBLIC_ORIGIN}/#organization`, name: 'Cliniqeo', url: PUBLIC_ORIGIN },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cliniqeo', item: `${PUBLIC_ORIGIN}/en` },
        { '@type': 'ListItem', position: 2, name: 'Dental treatment in Turkey', item: `${PUBLIC_ORIGIN}${DENTAL_EN_BASE}` },
        { '@type': 'ListItem', position: 3, name: countryName, item: `${PUBLIC_ORIGIN}${DENTAL_EN_BASE}/${country}/cities` },
        { '@type': 'ListItem', position: 4, name: cityLabel, item: `${PUBLIC_ORIGIN}${path}` },
      ],
    },
  ];

  return (
    <div className="bg-white pt-20">
      <SEOHead
        title={title}
        description={description}
        path={path}
        lang="en"
        siteName="Cliniqeo Dental"
        canonicalizeHair={false}
        keywords={[`${keyword.label} ${cityLabel}`, `${keyword.label} near me`, 'dental treatment Turkey', 'dentist Turkey']}
        schema={schema}
      />

      <section className="bg-gradient-to-br from-[#e8fbfc] via-white to-[#f3f8fc] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link to="/en" className="hover:text-[#087d87]">Home</Link><span className="mx-2">›</span>
              <Link to={DENTAL_EN_BASE} className="hover:text-[#087d87]">Dental Turkey</Link><span className="mx-2">›</span><span>{cityLabel}</span>
            </nav>
            <p className="mb-5 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-[#087d87]">{countryName} · {city.region}</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#10284d] md:text-6xl">{copy.heading} in {cityLabel}</h1>
            <p className="mb-4 text-xl font-bold text-[#087d87]">Local comparison and coordinated dental treatment in Turkey</p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">{localIntroductions[variant]}</p>
            <a href="#dental-assessment" className="inline-flex rounded-xl bg-[#08a9b5] px-7 py-4 font-bold text-white hover:bg-[#087d87]">Request a free initial assessment</a>
          </div>
          <aside className="rounded-3xl bg-[#063f56] p-8 text-white shadow-xl md:p-10">
            <h2 className="mb-5 text-2xl font-bold">Direct answer</h2>
            <p className="mb-7 text-lg leading-relaxed text-cyan-50">{copy.answer}</p>
            <ul className="space-y-4">
              {copy.checks.map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 shrink-0 text-cyan-300" size={21} />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            [Stethoscope, 'Clinical plan', 'Diagnosis and final treatment are confirmed by the treating dental professional.'],
            [ShieldCheck, 'Written responsibility', 'Know who performs each procedure and who manages follow-up.'],
            [CircleDollarSign, 'Comparable total cost', 'Compare equivalent procedures, materials, visits and exclusions.'],
            [Languages, 'English coordination', 'Receive practical support before, during and after the trip.'],
          ].map(([Icon, heading, text]) => {
            const CardIcon = Icon as typeof Stethoscope;
            return (
              <article key={heading as string} className="rounded-2xl border border-slate-200 p-6">
                <CardIcon className="mb-4 text-[#08a9b5]" size={28} />
                <h2 className="mb-3 text-lg font-bold text-[#10284d]">{heading as string}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl space-y-14 px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="mb-5 text-3xl font-bold text-[#10284d]">{copy.focusTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-600">{copy.focus}</p>
          </article>

          <article className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-[#10284d]">Compare like for like</h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-600">A local quote and a Turkey quote can only be compared when both describe the same clinical scope. Request tooth-by-tooth or arch-by-arch details and keep a copy of all records.</p>
              <ul className="space-y-3 text-slate-700">
                {['Clinical findings and alternatives', 'Procedure by tooth or arch', 'Brand or material specifications', 'Temporary and final restorations', 'Number and timing of visits', 'Exclusions, guarantees and aftercare'].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 shrink-0 text-[#08a9b5]" size={20} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-[#10284d]">Important limitation</h2>
              <p className="mb-4 leading-relaxed text-slate-600">Photos and existing X-rays may support an initial orientation, but they cannot confirm every diagnosis. The proposal can change after examination, updated imaging, gum assessment or bite analysis.</p>
              <p className="leading-relaxed text-slate-600">Before paying a deposit, ask how changes are approved, priced and documented.</p>
            </div>
          </article>

          <article>
            <div className="mb-5 flex items-center gap-3"><Plane className="text-[#08a9b5]" size={30} /><h2 className="text-3xl font-bold text-[#10284d]">Planning travel from {cityLabel}</h2></div>
            <p className="mb-5 text-lg leading-relaxed text-slate-600">Travel can be organised around {city.airport} ({city.airportCode}) or another suitable airport. Do not book non-refundable travel until the likely number of clinical appointments, laboratory stages and recovery restrictions are clear.</p>
            <p className="text-lg leading-relaxed text-slate-600">For US patients especially, the plan should account for the longer return journey, time-zone difference and access to urgent local dental care after returning home.</p>
          </article>

          <article>
            <h2 className="mb-7 text-3xl font-bold text-[#10284d]">From enquiry to follow-up</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {['Share goals, history and available records', 'Receive initial orientation and information requests', 'Review provider, procedures, materials and quote', 'Confirm appointment sequence before travel', 'Complete in-person examination and consent', 'Proceed only with the confirmed clinical plan', 'Receive records and written aftercare', 'Continue remote and local follow-up as needed'].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#08a9b5] font-bold text-white">{index + 1}</span><p className="font-medium text-slate-700">{item}</p></div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#10284d]">Questions from patients in {cityLabel}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-slate-200 p-5 open:bg-cyan-50/40">
                <summary className="cursor-pointer text-lg font-bold text-[#10284d]">{faq.q}</summary>
                <p className="mt-4 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="dental-assessment" className="scroll-mt-24 bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <LocalLeadForm lang="en" cityLabel={cityLabel} pagePath={path} service="dental" />
        </div>
      </section>
    </div>
  );
};

export default DentalLocalSeoPage;
