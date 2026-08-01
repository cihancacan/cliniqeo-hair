import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  HeartHandshake,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';

const EnglishHomePage = () => {
  const benefits = [
    ['English-speaking coordination', 'Support before travel, during the organised stay and throughout postoperative follow-up.'],
    ['Structured clinical pathway', 'Initial assessment, medical validation, procedure planning and written aftercare instructions.'],
    ['Organised travel package', 'Hotel, private transfers and interpreting support according to the selected package.'],
    ['Transparent quotation', 'Medical treatment and non-medical services are listed separately before booking.'],
  ];

  const included = [
    ['Personalised medical plan', 'FUE, Sapphire FUE or DHI is considered according to the donor area, recipient zones and existing hair.'],
    ['Graft estimate', 'The estimate is confirmed after photographs, medical information and an in-person scalp examination.'],
    ['Hotel accommodation', 'The number of nights and hotel category are stated in the quotation.'],
    ['Private transfers', 'Airport, hotel and clinic journeys are coordinated around the treatment schedule.'],
    ['English-speaking assistance', 'Support is available for appointments, instructions and practical questions.'],
    ['Postoperative follow-up', 'Healing, shedding and regrowth are followed through scheduled photo updates.'],
  ];

  const patientPriorities = [
    {
      flag: '🇬🇧',
      title: 'UK patients: clear English communication',
      text: 'Patients travelling from the United Kingdom commonly want one English-speaking contact, written instructions and a clear plan for follow-up after returning home.',
    },
    {
      flag: '🇺🇸',
      title: 'US patients: transparent treatment planning',
      text: 'Patients travelling from the United States often prioritise a detailed graft estimate, clear medical responsibilities and an itemised quotation before booking flights.',
    },
    {
      flag: '🇬🇧',
      title: 'UK patients: short, organised travel',
      text: 'A coordinated itinerary helps patients understand when the consultation, procedure, first wash and airport transfer will take place.',
    },
    {
      flag: '🇺🇸',
      title: 'US patients: long-distance aftercare',
      text: 'Because the return journey is longer, remote follow-up, warning signs and local medical escalation instructions must be explained in advance.',
    },
  ];

  const faqs = [
    ['What is the difference between FUE and DHI?', 'FUE describes the individual extraction of follicular units. DHI usually refers to implantation with an implanter pen. The best option depends on the donor area, recipient zones and treatment plan.'],
    ['How many grafts will I need?', 'The number depends on the surface to cover, donor density, hair calibre, future hair-loss pattern and the visual priority between the hairline, mid-scalp and crown.'],
    ['Is a hair transplant painful?', 'The procedure is generally performed under local anaesthesia. Temporary sensitivity, tightness or mild discomfort may occur during early recovery.'],
    ['When can I fly home?', 'Travel timing depends on the clinical protocol, swelling and the planned first wash. Patients should follow the medical team’s individual advice.'],
    ['When will I see the final result?', 'Early growth often starts after the third month. Density and hair calibre usually continue to mature over 9 to 15 months, sometimes longer in the crown.'],
  ];

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#1e3a5f] to-[#224671] text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-[#2f6bfc] blur-3xl" />
          <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#6EC1E4] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 mb-7">
              <Award className="mr-2 text-[#6EC1E4]" size={18} />
              <span className="text-sm font-semibold">Hair transplant coordination in Turkey with English-speaking support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hair transplant in Turkey with a clear medical and travel plan
            </h1>
            <p className="text-xl md:text-2xl text-[#6EC1E4] font-bold mb-5">
              FUE, Sapphire FUE and DHI options from €1,990
            </p>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-9">
              Receive an initial assessment, understand your donor-area limits and obtain a detailed quotation before deciding whether treatment in Istanbul is suitable for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link to="/en/contact" className="inline-flex items-center justify-center rounded-xl bg-[#6EC1E4] px-8 py-4 text-lg font-bold text-[#224671] hover:bg-white transition-colors">
                Request a free assessment <ArrowRight className="ml-2" size={20} />
              </Link>
              <a href="tel:+33188842222" className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold hover:bg-white/20 transition-colors">
                <Phone className="mr-2" size={20} /> Call +33 1 88 84 22 22
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-7 text-sm text-slate-300">
              <span className="flex items-center"><Shield className="mr-2 text-[#6EC1E4]" size={18} />No-obligation initial review</span>
              <span className="flex items-center"><Calendar className="mr-2 text-[#6EC1E4]" size={18} />Response usually within 24 hours</span>
              <span className="flex items-center"><HeartHandshake className="mr-2 text-[#6EC1E4]" size={18} />English-speaking support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-5">A coordinated patient journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The technique is only one part of a safe and realistic hair-transplant plan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {benefits.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <CheckCircle className="text-[#2f6bfc] mb-4" size={28} />
                <h3 className="text-2xl font-bold text-[#224671] mb-3">{title}</h3>
                <p className="text-slate-700 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <article className="rounded-3xl border-2 border-blue-100 p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#224671] mb-4">FUE hair transplant</h3>
              <p className="text-slate-700 leading-relaxed mb-6">Follicular units are extracted individually from the donor area and implanted into the planned recipient zones.</p>
              <ul className="space-y-3 mb-7 text-slate-700">
                <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />No linear donor scar</li>
                <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />Often considered for larger treatment areas</li>
                <li className="flex gap-3"><CheckCircle className="text-[#2f6bfc] flex-shrink-0" size={20} />Natural angle and distribution planning</li>
              </ul>
              <Link to="/fue-hair-transplant-turkey" className="inline-flex items-center font-bold text-[#2f6bfc] hover:text-[#224671]">Learn more about FUE <ArrowRight className="ml-2" size={18} /></Link>
            </article>

            <article className="rounded-3xl border-2 border-cyan-100 p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#224671] mb-4">DHI hair transplant</h3>
              <p className="text-slate-700 leading-relaxed mb-6">Extracted grafts are placed with an implanter pen, which may help control placement in selected recipient areas.</p>
              <ul className="space-y-3 mb-7 text-slate-700">
                <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />Controlled implantation graft by graft</li>
                <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />May suit implantation around existing hair</li>
                <li className="flex gap-3"><CheckCircle className="text-[#6EC1E4] flex-shrink-0" size={20} />Technique selected after assessment</li>
              </ul>
              <Link to="/dhi-hair-transplant-turkey" className="inline-flex items-center font-bold text-[#2f6bfc] hover:text-[#224671]">Learn more about DHI <ArrowRight className="ml-2" size={18} /></Link>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-[#224671] to-[#2f6bfc] p-8 text-white shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Not sure which method fits?</h3>
              <p className="text-blue-100 leading-relaxed mb-6">The donor area, hair-loss pattern, recipient zones and long-term plan are more important than the commercial name of a technique.</p>
              <Link to="/en/dhi-vs-fue-hair-transplant" className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-bold text-[#224671] hover:bg-blue-50">Compare DHI and FUE <ArrowRight className="ml-2" size={18} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">What may be included in a package</h2>
              <p className="text-xl text-slate-600 mb-8">Every quotation should state exactly what is included, excluded and medically optional.</p>
              <div className="space-y-5">
                {included.map(([title, text]) => (
                  <div key={title} className="flex items-start gap-4 rounded-xl bg-white p-5 border border-slate-200">
                    <CheckCircle className="text-[#2f6bfc] mt-1 flex-shrink-0" size={22} />
                    <div><h3 className="font-bold text-lg text-[#224671] mb-1">{title}</h3><p className="text-slate-700">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#224671] text-white p-9 sticky top-28">
              <p className="text-sm uppercase tracking-wide text-[#6EC1E4] font-bold mb-3">Indicative package price</p>
              <div className="text-6xl font-bold mb-3">€1,990</div>
              <p className="text-xl text-blue-100 mb-8">The final quotation depends on the medical plan and included services.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center"><CheckCircle className="mr-3 text-[#6EC1E4]" />Detailed quotation</div>
                <div className="flex items-center"><CheckCircle className="mr-3 text-[#6EC1E4]" />Medical assessment before confirmation</div>
                <div className="flex items-center"><CheckCircle className="mr-3 text-[#6EC1E4]" />Travel services listed separately</div>
              </div>
              <Link to="/en/pricing" className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-[#224671] hover:bg-blue-50">View prices and packages <ArrowRight className="ml-2" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-5">What UK and US patients commonly prioritise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">These are anonymised patient-priority summaries, not invented personal testimonials.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {patientPriorities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="text-3xl mb-4">{item.flag}</div>
                <h3 className="text-2xl font-bold text-[#224671] mb-3">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link to="/en/hair-transplant-turkey-reviews" className="inline-flex items-center rounded-xl bg-[#2f6bfc] px-8 py-4 text-lg font-bold text-white hover:bg-[#224671]">How to assess clinic reviews <ArrowRight className="ml-2" size={20} /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-5">Frequently asked questions</h2>
            <p className="text-xl text-slate-600">General information before requesting an individual medical assessment.</p>
          </div>
          <div className="space-y-5 mb-10">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-2xl bg-white p-7 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#224671] mb-3">{question}</h3>
                <p className="text-slate-700 leading-relaxed">{answer}</p>
              </article>
            ))}
          </div>
          <div className="text-center"><Link to="/en/faq" className="inline-flex items-center rounded-xl bg-[#2f6bfc] px-8 py-4 text-lg font-bold text-white hover:bg-[#224671]">View all questions <ArrowRight className="ml-2" size={20} /></Link></div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#224671] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="mx-auto mb-6 text-[#6EC1E4]" size={54} />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Start with a personalised assessment</h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-5">Send photographs of the front, top and donor area together with your age, medical history and expectations.</p>
          <p className="text-lg text-blue-100 mb-10">Free initial review • No obligation • Response usually within 24 hours</p>
          <Link to="/en/contact" className="inline-flex items-center rounded-2xl bg-[#6EC1E4] px-10 py-5 text-xl font-bold text-[#224671] hover:bg-white">Send my photographs <ArrowRight className="ml-3" size={24} /></Link>
          <div className="mt-12 flex justify-center items-center gap-2 text-sm text-blue-100">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="fill-yellow-400 text-yellow-400" size={17} />)}
            <span className="ml-2">English-speaking patient coordination</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishHomePage;
