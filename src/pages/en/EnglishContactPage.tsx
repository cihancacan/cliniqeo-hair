import { useState } from 'react';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { sendContactRequest } from '../../lib/contactRequest';

const initialForm = { first_name: '', last_name: '', email: '', phone: '', age: '', message: '' };

const steps = [
  ['1', 'Complete the form', 'Tell us about your hair loss, relevant history and treatment goals.'],
  ['2', 'Speak with an adviser', 'An adviser contacts you to clarify your needs and answer your initial questions.'],
  ['3', 'Receive initial guidance', 'Our team reviews your request and explains the next steps with a personalised estimate.'],
  ['4', 'Plan your stay', 'If the proposal suits you, we coordinate your medical stay in Türkiye.'],
];

export default function EnglishContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await sendContactRequest({ ...formData, message: `[English request] ${formData.message}`.trim(), language: 'en' });
      setFormData(initialForm);
      setIsSuccess(true);
    } catch (submitError) {
      console.error('Error submitting English contact form:', submitError);
      setError('We could not send your request. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Free Hair Transplant Assessment | Cliniqeo Hair"
        description="Send your details for a free initial hair transplant assessment and personalised quotation within 24 hours."
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Free hair transplant assessment</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">Tell us about your situation and receive personalised initial guidance within 24 hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
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
                <div className="flex items-start gap-3"><Phone className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Telephone</strong><br /><a href="tel:0188842222">+33 1 88 84 22 22</a></div></div>
                <div className="flex items-start gap-3"><Mail className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Email</strong><br /><a href="mailto:info@cliniqeo.com">info@cliniqeo.com</a></div></div>
                <div className="flex items-start gap-3"><MapPin className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Locations</strong><br />Paris, France<br />Istanbul, Türkiye</div></div>
              </div>
              <a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="block mt-6 bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600">Contact us on WhatsApp</a>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 md:p-8 self-start">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5"><CheckCircle className="text-green-600" size={42} /></div>
                <h2 className="text-3xl font-bold text-[#224671] mb-4">Request sent</h2>
                <p className="text-lg text-slate-700 mb-7">Your request has been received. Our team will contact you within 24 hours.</p>
                <button onClick={() => setIsSuccess(false)} className="bg-[#2f6bfc] text-white px-7 py-3 rounded-lg font-bold hover:bg-[#224671]">Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div><h2 className="text-3xl font-bold text-[#224671] mb-2">Free assessment form</h2><p className="text-slate-600">A few details are enough for our team to contact you.</p></div>
                <div className="grid md:grid-cols-2 gap-5">
                  <label className="font-semibold text-[#224671]">First name *<input type="text" name="first_name" autoComplete="given-name" required value={formData.first_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                  <label className="font-semibold text-[#224671]">Last name *<input type="text" name="last_name" autoComplete="family-name" required value={formData.last_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                </div>
                <label className="block font-semibold text-[#224671]">Email *<input type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                <div className="grid md:grid-cols-2 gap-5">
                  <label className="font-semibold text-[#224671]">WhatsApp / Telephone *<input type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                  <label className="font-semibold text-[#224671]">Age<input type="number" name="age" min="18" max="99" value={formData.age} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                </div>
                <label className="block font-semibold text-[#224671]">Describe your situation<textarea name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Hair-loss pattern, previous treatments, expectations and questions..." className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none resize-none" /></label>
                {error && <div role="alert" className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">{error}</div>}
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#2f6bfc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#224671] flex items-center justify-center disabled:opacity-60">{isSubmitting ? 'Sending...' : <><span>Send my request</span><Send className="ml-2" size={20} /></>}</button>
                <p className="text-xs text-slate-500 text-center">Your information is used only to process your request.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
