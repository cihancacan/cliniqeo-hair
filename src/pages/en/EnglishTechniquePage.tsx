import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, HelpCircle, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type Method = 'fue' | 'dhi';

const content = {
  fue: {
    path: '/fue-hair-transplant-turkey',
    alternate: '/greffe-de-cheveux-fue-turquie',
    title: 'FUE Hair Transplant in Turkey: Procedure, Recovery and Cost | Cliniqeo Hair',
    description: 'Understand FUE hair transplantation in Turkey: donor extraction, graft handling, implantation, recovery, candidacy, risks and package pricing.',
    h1: 'FUE hair transplant in Turkey',
    intro: 'Follicular Unit Extraction removes follicular units individually from a planned donor area before they are prepared and implanted into thinning zones.',
    stages: [
      ['Donor-area assessment', 'Density, hair calibre, miniaturisation and safe extraction limits are assessed before a graft estimate is confirmed.'],
      ['Individual extraction', 'Follicular units are released with a small punch and removed individually while preserving surrounding donor hair.'],
      ['Graft preparation', 'Grafts are inspected, sorted by hair count and kept hydrated in a controlled solution.'],
      ['Recipient-site planning', 'The hairline, angles, direction and density are planned for each zone.'],
      ['Implantation and control', 'Single-hair grafts are generally used at the front, while larger units help create volume behind the hairline.'],
    ],
    suitable: [
      'Patients requiring coverage over a relatively broad area',
      'Patients who accept full or partial donor-area shaving',
      'Cases where individual extraction can be distributed safely',
      'Patients with a stable and measurable donor reserve',
    ],
    limits: [
      'The donor supply is finite and cannot replace unlimited hair.',
      'Overharvesting can produce visible thinning in the donor area.',
      'The final density depends on graft survival, hair calibre and the surface treated.',
      'Native non-transplanted hair may continue to thin over time.',
    ],
    timeline: [
      ['Days 1–10', 'Redness, small crusts, tenderness and temporary swelling may occur.'],
      ['Weeks 2–8', 'The implanted hair shafts may shed while the follicles remain beneath the skin.'],
      ['Months 3–6', 'New growth usually begins gradually and may initially appear fine.'],
      ['Months 6–12', 'Coverage, calibre and styling options generally improve.'],
      ['Months 12–15', 'The result continues to mature, particularly in the crown.'],
    ],
    faqs: [
      ['Does FUE leave scars?', 'FUE leaves many small extraction sites rather than one linear scar. Their visibility depends on punch size, healing and extraction distribution.'],
      ['How many grafts can be extracted?', 'There is no safe universal number. The limit depends on donor density, scalp characteristics, hair calibre and future needs.'],
      ['Is Sapphire FUE different?', 'Sapphire commonly describes the blade material used to create recipient sites. It does not replace careful diagnosis, donor management or graft handling.'],
    ],
    compareLabel: 'Compare FUE with DHI',
    comparePath: '/en/dhi-vs-fue-hair-transplant',
  },
  dhi: {
    path: '/dhi-hair-transplant-turkey',
    alternate: '/greffe-de-cheveux-dhi-turquie',
    title: 'DHI Hair Transplant in Turkey: Implanter Pen, Recovery and Cost | Cliniqeo Hair',
    description: 'Understand DHI hair transplantation in Turkey: graft extraction, implanter-pen placement, candidacy, recovery, risks, limitations and pricing.',
    h1: 'DHI hair transplant in Turkey',
    intro: 'Direct Hair Implantation generally combines individual follicular extraction with placement using an implanter pen. It is an implantation approach, not a guarantee of higher quality.',
    stages: [
      ['Donor-area assessment', 'The team measures the donor reserve and confirms whether the planned extraction is sustainable.'],
      ['Follicular extraction', 'Grafts are extracted individually, commonly using the same basic extraction principle as FUE.'],
      ['Graft loading', 'Prepared follicular units are loaded carefully into implanter pens.'],
      ['Direct placement', 'The pen is used to control the entry angle, direction and depth in selected recipient areas.'],
      ['Postoperative review', 'The treated zones and donor area are checked before washing and aftercare instructions are provided.'],
    ],
    suitable: [
      'Selected cases requiring placement between existing hairs',
      'Smaller or strategically defined recipient areas',
      'Patients for whom partial or limited shaving may be appropriate',
      'Cases where implanter-assisted placement supports the medical plan',
    ],
    limits: [
      'DHI is not automatically denser or more successful than FUE.',
      'Long sessions and very high graft counts may not suit every patient.',
      'Poor graft loading or excessive handling can damage follicles.',
      'The donor area remains the principal biological limit.',
    ],
    timeline: [
      ['Days 1–10', 'Redness, crusting and temporary swelling vary according to the treated area and individual healing.'],
      ['Weeks 2–8', 'Temporary shedding of the implanted hair shafts is common.'],
      ['Months 3–6', 'Early growth begins progressively.'],
      ['Months 6–12', 'Hair calibre and visible coverage continue to improve.'],
      ['Months 12–15', 'Maturation may continue, especially in the crown.'],
    ],
    faqs: [
      ['Is DHI better than FUE?', 'Not in every case. The best method depends on the donor area, recipient zone, existing hair, graft count and medical plan.'],
      ['Does DHI avoid shaving?', 'Some selected cases can use partial or no-shave approaches, but shaving requirements must be confirmed individually.'],
      ['Does the implanter pen guarantee density?', 'No. Density depends on donor supply, recipient-area vascularity, graft survival and responsible planning.'],
    ],
    compareLabel: 'Compare DHI with FUE',
    comparePath: '/en/dhi-vs-fue-hair-transplant',
  },
} as const;

export default function EnglishTechniquePage({ method }: { method: Method }) {
  const page = content[method];
  const otherPath = method === 'fue' ? '/dhi-hair-transplant-turkey' : '/fue-hair-transplant-turkey';
  const otherLabel = method === 'fue' ? 'Read the DHI guide' : 'Read the FUE guide';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        lang="en"
        alternates={[
          { lang: 'en', path: page.path },
          { lang: 'fr', path: page.alternate },
          { lang: 'x-default', path: page.alternate },
        ]}
        schema={faqSchema}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-100 font-semibold mb-5"><ShieldCheck size={22} /> Cliniqeo Hair technique guide</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.h1}</h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-4xl leading-relaxed">{page.intro}</p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link to="/en/contact" className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-[#224671] hover:bg-blue-50">Request a free assessment <ArrowRight className="ml-2" size={19} /></Link>
            <Link to={page.comparePath} className="inline-flex items-center rounded-xl border-2 border-white/40 bg-white/10 px-7 py-4 font-bold text-white hover:bg-white/20">{page.compareLabel}</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-8">How the procedure is organised</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {page.stages.map(([title, text], index) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#2f6bfc] text-white flex items-center justify-center font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">{title}</h3>
              <p className="text-slate-700 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-8">
            <h2 className="text-3xl font-bold text-[#224671] mb-6">When this approach may be considered</h2>
            <ul className="space-y-4">
              {page.suitable.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="text-[#2f6bfc] mt-1 flex-shrink-0" size={21} /><span className="text-slate-700 leading-relaxed">{item}</span></li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#224671] text-white p-8">
            <h2 className="text-3xl font-bold mb-6">Limits and risks to understand</h2>
            <ul className="space-y-4">
              {page.limits.map((item) => <li key={item} className="flex items-start gap-3"><ShieldCheck className="text-[#6EC1E4] mt-1 flex-shrink-0" size={21} /><span className="text-blue-50 leading-relaxed">{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-8 flex items-center gap-3"><Clock3 className="text-[#2f6bfc]" />Recovery and growth timeline</h2>
        <div className="space-y-4">
          {page.timeline.map(([period, text]) => (
            <div key={period} className="grid md:grid-cols-[170px_1fr] gap-3 rounded-r-xl border-l-4 border-[#2f6bfc] bg-slate-50 p-5">
              <strong className="text-[#224671]">{period}</strong><p className="text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-8 flex items-center gap-3"><HelpCircle className="text-[#2f6bfc]" />Frequently asked questions</h2>
          <div className="space-y-4">
            {page.faqs.map(([question, answer]) => (
              <details key={question} className="rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer text-lg font-bold text-[#224671]">{question}</summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link to={otherPath} className="inline-flex items-center rounded-xl border-2 border-[#2f6bfc] px-6 py-3 font-bold text-[#2f6bfc] hover:bg-blue-50">{otherLabel}</Link>
            <Link to="/en/contact" className="inline-flex items-center rounded-xl bg-[#2f6bfc] px-6 py-3 font-bold text-white hover:bg-[#224671]">Request an assessment <ArrowRight className="ml-2" size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
