import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type PageKey = 'techniques' | 'pricing' | 'whyTurkey' | 'about' | 'faq' | 'beforeAfter';

interface PageSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface PageContent {
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  faq?: Array<{ q: string; a: string }>;
}

const pages: Record<PageKey, PageContent> = {
  techniques: {
    path: '/en/techniques',
    alternatePath: '/techniques',
    title: 'FUE and DHI Hair Transplant Techniques in Turkey | Cliniqeo Hair',
    description: 'Understand FUE, Sapphire FUE and DHI hair transplantation, including extraction, implantation, recovery, indications and limitations.',
    h1: 'FUE and DHI hair transplant techniques',
    intro: 'FUE and DHI are not competing promises of quality. They describe different ways to extract and implant follicular units. The best choice depends on the donor area, the recipient zone, existing hair and the surgical plan.',
    sections: [
      {
        title: 'How FUE works',
        paragraphs: ['Follicular units are extracted individually from a planned donor area. They are then sorted, preserved and implanted into recipient sites created according to the required angle, direction and density.'],
        bullets: ['Individual follicular-unit extraction', 'Suitable for larger treatment areas', 'No linear donor scar', 'Donor management remains essential'],
      },
      {
        title: 'How DHI works',
        paragraphs: ['DHI generally uses an implanter pen to place prepared grafts. It can be useful when working between existing hairs or when precise control of placement is required. It does not automatically produce a better result than FUE.'],
        bullets: ['Implanter-assisted placement', 'Useful for selected dense or unshaven cases', 'Precise control of angle and direction', 'Long sessions may not suit every patient'],
      },
      {
        title: 'What determines the result',
        paragraphs: ['The quality of the diagnosis, donor-area planning, graft handling, hairline design and postoperative care matter more than the commercial name of a technique.'],
      },
    ],
    faq: [
      { q: 'Is DHI better than FUE?', a: 'Not in every case. The appropriate method depends on the treatment area, graft count, existing hair and the medical team’s plan.' },
      { q: 'Does FUE leave scars?', a: 'FUE creates many small extraction sites rather than one linear scar. Their visibility depends on punch size, healing and extraction distribution.' },
    ],
  },
  pricing: {
    path: '/en/pricing',
    alternatePath: '/tarifs',
    title: 'Hair Transplant Prices in Turkey and Package Details | Cliniqeo Hair',
    description: 'Review Cliniqeo Hair package prices, included services, FUE and DHI options, hotel, transfers, medication and follow-up.',
    h1: 'Hair transplant prices and packages',
    intro: 'A useful quotation should separate the medical procedure from travel-related services and clearly state what is included, excluded or subject to medical confirmation.',
    sections: [
      {
        title: 'FUE package — from €1,990',
        paragraphs: ['The final treatment plan is confirmed after donor-area and recipient-area assessment.'],
        bullets: ['FUE procedure according to medical indication', 'Hotel accommodation stated in the quotation', 'Airport, hotel and clinic transfers', 'Postoperative kit and instructions', 'Remote follow-up'],
      },
      {
        title: 'DHI package — from €2,490',
        paragraphs: ['DHI may be proposed for selected cases, especially when the implantation strategy or existing hair makes implanter-assisted placement useful.'],
        bullets: ['DHI procedure when clinically appropriate', 'Personalised graft planning', 'Hotel and scheduled transfers', 'Interpreter support', 'Postoperative monitoring'],
      },
      {
        title: 'What can change the final price?',
        paragraphs: ['Technique, complexity, duration, donor limitations, additional examinations and the exact package content can affect the final quotation. Flights are normally booked separately unless explicitly stated.'],
      },
    ],
    faq: [
      { q: 'Are flights included?', a: 'Flights are normally not included unless the quotation specifically says otherwise.' },
      { q: 'Is the price based only on graft count?', a: 'Not necessarily. Technique, complexity, duration and included services may also influence the price.' },
    ],
  },
  whyTurkey: {
    path: '/en/why-turkey',
    alternatePath: '/turquie',
    title: 'Why Choose Turkey for a Hair Transplant? | Cliniqeo Hair',
    description: 'Understand the advantages and precautions of travelling to Turkey for a hair transplant, including expertise, logistics, clinic selection and follow-up.',
    h1: 'Why consider Turkey for a hair transplant?',
    intro: 'Turkey has developed a large medical-tourism ecosystem around hair restoration. The destination can offer experienced teams and organised logistics, but clinic selection and medical oversight remain decisive.',
    sections: [
      {
        title: 'A mature international-care ecosystem',
        paragraphs: ['Istanbul has clinics, hotels, transfer services and multilingual coordinators accustomed to short medical stays. This can make organisation easier for international patients.'],
      },
      {
        title: 'What patients should verify',
        paragraphs: ['Patients should know who performs the diagnosis, hairline design, extraction and implantation, and how to contact the team after returning home.'],
        bullets: ['Named healthcare professionals', 'Clear division of medical roles', 'Realistic graft estimate', 'Written aftercare protocol', 'Accessible follow-up'],
      },
      {
        title: 'Price should not be the only criterion',
        paragraphs: ['A lower price cannot compensate for overharvesting, an unsuitable hairline or weak postoperative support. Long-term donor preservation should remain part of the plan.'],
      },
    ],
  },
  about: {
    path: '/en/about',
    alternatePath: '/a-propos',
    title: 'About Cliniqeo Hair | Hair Transplant Coordination',
    description: 'Learn how Cliniqeo Hair coordinates hair transplant stays in Turkey, from initial assessment and travel organisation to postoperative follow-up.',
    h1: 'About Cliniqeo Hair',
    intro: 'Cliniqeo Hair coordinates treatment journeys for patients travelling to Turkey. Medical assessments and procedures are carried out by partner healthcare professionals and clinics.',
    sections: [
      {
        title: 'Before the trip',
        paragraphs: ['We collect the information required for initial guidance, explain the proposed journey and clarify the services included in the quotation. The medical plan is confirmed after examination.'],
      },
      {
        title: 'During the stay',
        paragraphs: ['The coordination team assists with scheduled transfers, communication and practical organisation. The partner medical team confirms the diagnosis and treatment plan on site.'],
      },
      {
        title: 'After the procedure',
        paragraphs: ['Patients receive postoperative instructions and a remote follow-up pathway for healing, washing, temporary shedding and progressive growth.'],
      },
    ],
  },
  faq: {
    path: '/en/faq',
    alternatePath: '/faq',
    title: 'Hair Transplant FAQ: Turkey, FUE, DHI and Recovery | Cliniqeo Hair',
    description: 'Answers to common questions about hair transplantation in Turkey, FUE, DHI, graft counts, pain, travel, aftercare and results.',
    h1: 'Frequently asked questions',
    intro: 'These answers provide general guidance. The final indication, technique and graft count require an individual assessment.',
    sections: [
      { title: 'How long does the procedure take?', paragraphs: ['A session can last several hours depending on graft count, technique, team organisation and the complexity of the recipient area.'] },
      { title: 'Is a hair transplant painful?', paragraphs: ['Local anaesthesia is normally used. The anaesthetic injections can be uncomfortable, while the procedure itself is generally described as pressure or pulling rather than sharp pain.'] },
      { title: 'When does new hair grow?', paragraphs: ['Temporary shedding may occur during the first weeks. Visible growth often starts gradually after a few months, with maturation continuing for roughly a year or longer in some areas.'] },
      { title: 'How many grafts will I need?', paragraphs: ['The estimate depends on the surface to cover, donor density, hair calibre, contrast, future hair loss and the desired priority areas.'] },
      { title: 'Can I fly after the procedure?', paragraphs: ['Many patients fly after the first postoperative control, but the treating team should confirm the timing and provide instructions for swelling, sun exposure and graft protection.'] },
    ],
  },
  beforeAfter: {
    path: '/en/before-after',
    alternatePath: '/greffe-cheveux/avant-apres',
    title: 'Hair Transplant Before and After Results | Cliniqeo Hair',
    description: 'Learn how to assess hair transplant before-and-after photos, including lighting, angles, timing, density, hairline design and donor-area condition.',
    h1: 'Understanding hair transplant before-and-after results',
    intro: 'Reliable comparisons use similar lighting, angles, hair length and styling. The recipient result should also be considered together with the condition of the donor area.',
    sections: [
      {
        title: 'How to compare photographs fairly',
        paragraphs: ['Look for matching camera angles, dry hair without concealing fibres and a clearly stated postoperative date.'],
        bullets: ['Same angle and distance', 'Comparable lighting', 'Similar hair length', 'No concealing fibres', 'Donor area shown when relevant'],
      },
      {
        title: 'When is the result mature?',
        paragraphs: ['Three-month photographs are too early for a final judgement. Density and calibre generally develop progressively, and crown areas may mature later than the frontal zone.'],
      },
      {
        title: 'Why results vary',
        paragraphs: ['Hair calibre, curl, colour contrast, donor supply, treated surface, graft survival and future native-hair loss all influence the visual result.'],
      },
    ],
  },
};

export default function EnglishGeneralPage({ pageKey }: { pageKey: PageKey }) {
  const page = pages[pageKey];
  const faqSchema = page.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : undefined;

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={page.title}
        description={page.description}
        path={page.path}
        lang="en"
        alternates={[
          { lang: 'en', path: page.path },
          { lang: 'fr', path: page.alternatePath },
          { lang: 'x-default', path: page.alternatePath },
        ]}
        schema={faqSchema}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-100 font-semibold mb-4">
            <ShieldCheck size={22} /> Cliniqeo Hair
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.h1}</h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-4xl">{page.intro}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-12">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-bold text-[#224671] mb-5">{section.title}</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="grid md:grid-cols-2 gap-3 mt-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                      <CheckCircle2 className="text-[#2f6bfc] mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>

      {page.faq && (
        <section className="bg-slate-50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#224671] mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <details key={item.q} className="bg-white border border-slate-200 rounded-xl p-6">
                  <summary className="font-bold text-lg text-[#224671] cursor-pointer">{item.q}</summary>
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Request a personalised assessment</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us about your situation for personalised initial guidance on the next steps.</p>
          <Link to="/en/contact" className="inline-flex items-center gap-2 bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-blue-50">
            Start my free assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
