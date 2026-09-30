import { Mail, MapPin, Phone } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import SimpleLeadForm from '../../components/SimpleLeadForm';

const steps = [
  ['1', 'Complete the form', 'Add your contact details and an optional message.'],
  ['2', 'Speak with an adviser', 'An adviser contacts you to clarify your needs and answer your initial questions.'],
  ['3', 'Receive initial guidance', 'Our team reviews your request and explains the next steps with a personalised estimate.'],
  ['4', 'Plan your stay', 'If the proposal suits you, we coordinate your medical stay in Türkiye.'],
];

export default function EnglishContactPage() {
  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Free Hair Transplant Assessment | Cliniqeo Hair"
        description="Send your details for a free initial hair transplant assessment and receive a reply within one hour."
        path="/en/contact"
        lang="en"
        alternates={[
          { lang: 'en', path: '/en/contact' },
          { lang: 'fr', path: '/contact' },
          { lang: 'x-default', path: '/contact' },
        ]}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Request your free assessment</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
            Briefly describe your situation and receive a reply within one hour.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#224671] mb-7">How the assessment works</h2>
            <div className="space-y-5">
              {steps.map(([number, title, text]) => (
                <div key={number} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#2f6bfc] text-white font-bold flex items-center justify-center flex-shrink-0">{number}</div>
                  <div><h3 className="text-xl font-bold text-[#224671] mb-1">{title}</h3><p className="text-slate-700 leading-relaxed">{text}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-xl p-7 mt-10">
              <h2 className="text-2xl font-bold text-[#224671] mb-5">Contact Cliniqeo Hair</h2>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3"><Phone className="text-[#2f6bfc] mt-1" size={21} /><div><strong>WhatsApp</strong><br /><a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer">+33 7 56 87 29 61</a></div></div>
                <div className="flex items-start gap-3"><Mail className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Email</strong><br /><a href="mailto:info@cliniqeo.com">info@cliniqeo.com</a></div></div>
                <div className="flex items-start gap-3"><MapPin className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Locations</strong><br />Paris, France<br />Istanbul, Türkiye</div></div>
              </div>
              <a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="block mt-6 bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600">Contact us on WhatsApp</a>
            </div>
          </div>

          <div className="order-1 lg:order-2 self-start">
            <SimpleLeadForm language="en" className="bg-slate-50" />
          </div>
        </div>
      </section>
    </div>
  );
}
