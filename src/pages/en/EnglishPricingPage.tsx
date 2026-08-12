import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle,
  Hotel,
  Languages,
  Plane,
  Shield,
  Stethoscope,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const packages = [
  {
    name: 'FUE HAIR TRANSPLANT',
    price: '€1,990',
    grafts: 'Up to 5,000 grafts, subject to medical confirmation',
    popular: false,
    items: [
      'Individual FUE extraction',
      'Personalised graft and hairline plan',
      'Hotel accommodation for 3 nights',
      'Private airport, hotel and clinic transfers',
      'English-speaking coordination',
      'Postoperative care kit',
      'PRP session when included in the written quotation',
      'Remote follow-up for 12 months',
      'Companion arrangements stated in the quotation',
    ],
  },
  {
    name: 'DHI HAIR TRANSPLANT',
    price: '€2,490',
    grafts: 'Up to 4,000 grafts, subject to medical confirmation',
    popular: true,
    items: [
      'Implanter-pen placement when clinically appropriate',
      'Personalised graft and recipient-area plan',
      'Hotel accommodation for 3 nights',
      'Private airport, hotel and clinic transfers',
      'English-speaking coordination',
      'Extended postoperative care kit',
      'PRP session when included in the written quotation',
      'Remote follow-up for 12 months',
      'Companion arrangements stated in the quotation',
    ],
  },
  {
    name: 'BEARD TRANSPLANT',
    price: '€1,990',
    grafts: 'Graft estimate confirmed after facial and donor assessment',
    popular: false,
    items: [
      'FUE extraction with FUE or DHI placement',
      'Beard-line and density planning',
      'Hotel accommodation for 3 nights',
      'Private airport, hotel and clinic transfers',
      'English-speaking coordination',
      'Postoperative care kit and written instructions',
      'Remote follow-up for 12 months',
    ],
  },
] as const;

const includedServices = [
  {
    icon: Stethoscope,
    title: 'Medical assessment',
    text: 'The treatment plan and graft estimate are confirmed after medical review and an on-site scalp examination.',
  },
  {
    icon: Hotel,
    title: 'Hotel accommodation',
    text: 'Three nights are included when stated in the final written quotation.',
  },
  {
    icon: Plane,
    title: 'Private transfers',
    text: 'Scheduled airport, hotel and clinic journeys are coordinated around the treatment plan.',
  },
  {
    icon: Languages,
    title: 'English-speaking support',
    text: 'English assistance is provided for appointments, instructions and practical organisation.',
  },
  {
    icon: Award,
    title: 'Postoperative care kit',
    text: 'The contents and duration of the care kit are listed in the quotation and postoperative instructions.',
  },
  {
    icon: Shield,
    title: '12-month follow-up',
    text: 'Healing, shedding and progressive growth are reviewed through scheduled remote updates.',
  },
] as const;

const marketCards = [
  {
    country: 'UNITED KINGDOM',
    price: '£1,000–£30,000',
    label: 'Broad UK range published by the NHS',
    notes: ['Procedure price varies widely', 'Hotel and travel normally separate', 'Clinic-specific aftercare'],
    featured: false,
  },
  {
    country: 'UNITED STATES',
    price: '$6,000–$15,000',
    label: 'ASPS examples from small to large cases',
    notes: ['Often priced by case size or graft count', 'Hotel and travel normally separate', 'Follow-up depends on the provider'],
    featured: false,
  },
  {
    country: 'CLINIQEO TURKEY',
    price: 'From €1,990',
    label: 'Organised package in Turkey',
    notes: ['Medical procedure according to the final plan', 'Hotel and private transfers listed in the quote', 'English-speaking coordination and remote follow-up'],
    featured: true,
  },
] as const;

const comparisonRows = [
  ['Indicative price', '£1,000–£30,000', '$6,000–$15,000', '€1,990 FUE / €2,490 DHI'],
  ['Medical assessment', 'Clinic dependent', 'Clinic dependent', 'Initial review plus on-site confirmation'],
  ['Hotel accommodation', 'Usually separate', 'Usually separate', '3 nights when stated in the quotation'],
  ['Airport and clinic transfers', 'Usually separate', 'Usually separate', 'Included according to the quotation'],
  ['English-speaking coordination', 'Provider dependent', 'Provider dependent', 'Included'],
  ['Postoperative kit', 'Provider dependent', 'Provider dependent', 'Included according to the package'],
  ['Remote follow-up', 'Provider dependent', 'Provider dependent', 'Planned for 12 months'],
  ['Flights', 'Not applicable', 'Not applicable', 'Booked and paid separately'],
] as const;

export default function EnglishPricingPage() {
  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Hair Transplant Prices in Turkey: UK and USA Comparison | Cliniqeo Hair"
        description="Compare Cliniqeo Turkey hair transplant packages with indicative UK and USA market prices. Review FUE, DHI and beard transplant prices and included services."
        path="/en/pricing"
        lang="en"
        alternates={[
          { lang: 'en', path: '/en/pricing' },
          { lang: 'fr', path: '/tarifs' },
          { lang: 'x-default', path: '/tarifs' },
        ]}
      />

      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hair transplant prices in Turkey</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-50">
            Transparent FUE, DHI and beard-transplant packages with English-speaking coordination through Cliniqeo Turkey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">Our organised treatment packages</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              The final technique, graft estimate and package content are confirmed after assessment and written in the personalised quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((item) => (
              <article
                key={item.name}
                className={item.popular
                  ? 'bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white rounded-2xl p-8 relative lg:scale-105 shadow-2xl'
                  : 'bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow'}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#224671] text-white px-6 py-2 rounded-full font-bold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className={`text-center mb-6 ${item.popular ? 'mt-4' : ''}`}>
                  <div className={item.popular
                    ? 'bg-white/20 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold'
                    : 'bg-slate-100 text-[#224671] px-4 py-2 rounded-lg inline-block mb-4 font-bold'}
                  >
                    {item.name}
                  </div>
                  <div className={`text-5xl font-bold mb-3 ${item.popular ? '' : 'text-[#224671]'}`}>{item.price}</div>
                  <p className={item.popular ? 'text-blue-50' : 'text-slate-600'}>{item.grafts}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {item.items.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle className={item.popular ? 'text-white mr-3 flex-shrink-0 mt-1' : 'text-[#2f6bfc] mr-3 flex-shrink-0 mt-1'} size={20} />
                      <span className={item.popular ? 'text-white' : 'text-slate-700'}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/en/contact"
                  className={item.popular
                    ? 'block w-full bg-white text-[#2f6bfc] text-center px-6 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors'
                    : 'block w-full bg-[#2f6bfc] text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-[#224671] transition-colors'}
                >
                  Request a personalised quote
                </Link>
              </article>
            ))}
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">What the organised package can include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {includedServices.map(({ icon: Icon, title, text }) => (
                <article key={title} className="flex items-start bg-white rounded-xl p-5 border border-slate-200">
                  <Icon className="text-[#2f6bfc] mr-4 flex-shrink-0 mt-1" size={25} />
                  <div>
                    <h3 className="font-bold text-[#224671] mb-2">{title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">UK vs USA vs Cliniqeo Turkey</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              A practical comparison of published market references and the services listed in a Cliniqeo Turkey package.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mb-12">
            {marketCards.map((card) => (
              <article
                key={card.country}
                className={card.featured
                  ? 'rounded-2xl bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white p-8 shadow-xl'
                  : 'rounded-2xl bg-white border-2 border-slate-200 p-8 shadow-sm'}
              >
                <p className={card.featured ? 'font-bold text-[#6EC1E4] mb-3' : 'font-bold text-[#2f6bfc] mb-3'}>{card.country}</p>
                <div className={`text-4xl font-bold mb-3 ${card.featured ? 'text-white' : 'text-[#224671]'}`}>{card.price}</div>
                <p className={card.featured ? 'text-blue-100 mb-6' : 'text-slate-600 mb-6'}>{card.label}</p>
                <ul className="space-y-3">
                  {card.notes.map((note) => (
                    <li key={note} className="flex items-start gap-3">
                      <CheckCircle className={card.featured ? 'text-[#6EC1E4] mt-1 flex-shrink-0' : 'text-[#2f6bfc] mt-1 flex-shrink-0'} size={19} />
                      <span className={card.featured ? 'text-blue-50' : 'text-slate-700'}>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead className="bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white">
                  <tr>
                    <th className="px-6 py-5 text-left text-lg font-bold">Comparison point</th>
                    <th className="px-6 py-5 text-center text-lg font-bold">UK</th>
                    <th className="px-6 py-5 text-center text-lg font-bold">USA</th>
                    <th className="px-6 py-5 text-center text-lg font-bold">Cliniqeo Turkey</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, uk, usa, turkey], index) => (
                    <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <th className="px-6 py-5 text-left font-bold text-[#224671] border-b border-slate-200">{label}</th>
                      <td className="px-6 py-5 text-center text-slate-700 border-b border-slate-200">{uk}</td>
                      <td className="px-6 py-5 text-center text-slate-700 border-b border-slate-200">{usa}</td>
                      <td className="px-6 py-5 text-center font-semibold text-[#224671] border-b border-slate-200">{turkey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-[#224671] mb-2">Important price note</p>
            <p>
              UK and USA figures are indicative public market references, not quotations for identical cases. The NHS publishes a broad UK range of £1,000–£30,000. The American Society of Plastic Surgeons gives examples of approximately $6,000 for smaller cases and $12,000–$15,000 for larger cases. Currency, graft count, provider experience and included services can materially change the total cost.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/hair-transplant/" target="_blank" rel="noreferrer" className="font-bold text-[#2f6bfc] hover:underline">NHS UK price reference</a>
              <a href="https://www.plasticsurgery.org/news/blog/what-causes-hair-loss-and-what-hair-restoration-procedures-are-available" target="_blank" rel="noreferrer" className="font-bold text-[#2f6bfc] hover:underline">American Society of Plastic Surgeons reference</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">Receive your personalised Cliniqeo Turkey quotation</h2>
          <p className="text-xl text-blue-100 mb-8">
            Send clear photographs for an initial review of the donor area, recipient zones and likely treatment options.
          </p>
          <Link to="/en/contact" className="inline-block bg-white text-[#2f6bfc] px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-colors">
            Start my free assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
