import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { sendContactRequest } from '../lib/contactRequest';

type Language = 'fr' | 'en';

type Props = {
  language: Language;
  className?: string;
};

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
};

export default function SimpleLeadForm({ language, className = '' }: Props) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const isFr = language === 'fr';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await sendContactRequest({
        ...formData,
        message: isFr ? formData.message : (formData.message ? `[English request] ${formData.message}` : '[English request]'),
        language,
      });
      setFormData(initialForm);
      setIsSuccess(true);
    } catch (submitError) {
      console.error('Lead form submission failed:', submitError);
      setError(
        isFr
          ? "Votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous contacter sur WhatsApp."
          : 'We could not send your request. Please try again or contact us on WhatsApp.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`rounded-2xl bg-white p-7 md:p-8 shadow-sm border border-slate-200 text-center ${className}`}>
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-green-600" size={42} />
        </div>
        <h3 className="text-3xl font-bold text-[#224671] mb-3">
          {isFr ? 'Demande envoyée !' : 'Request sent!'}
        </h3>
        <p className="text-slate-700 mb-6">
          {isFr
            ? "Votre demande a bien été transmise. Notre équipe vous répond dans l'heure."
            : 'Your request has been sent. Our team will reply within one hour.'}
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="bg-[#2f6bfc] text-white px-7 py-3 rounded-lg font-bold hover:bg-[#224671]"
        >
          {isFr ? 'Faire une nouvelle demande' : 'Send another request'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200 space-y-5 ${className}`}
    >
      <div>
        <h3 className="text-3xl font-bold text-[#224671] mb-2">
          {isFr ? 'Demandez votre diagnostic gratuit' : 'Request your free assessment'}
        </h3>
        <p className="text-slate-600">
          {isFr
            ? "Décrivez simplement votre situation, recevez une réponse dans l'heure."
            : 'Briefly describe your situation and receive a reply within one hour.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="font-semibold text-[#224671]">
          {isFr ? 'Prénom *' : 'First name *'}
          <input type="text" name="first_name" autoComplete="given-name" required value={formData.first_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
        </label>
        <label className="font-semibold text-[#224671]">
          {isFr ? 'Nom *' : 'Last name *'}
          <input type="text" name="last_name" autoComplete="family-name" required value={formData.last_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="font-semibold text-[#224671]">
          Email *
          <input type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
        </label>
        <label className="font-semibold text-[#224671]">
          {isFr ? 'WhatsApp / Téléphone *' : 'WhatsApp / Telephone *'}
          <input type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} placeholder={isFr ? '+33 6 12 34 56 78' : '+44 7700 900000'} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
        </label>
      </div>

      <label className="block font-semibold text-[#224671]">
        {isFr ? 'Message (facultatif)' : 'Message (optional)'}
        <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={isFr ? 'Votre situation ou votre question...' : 'Your situation or question...'} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none resize-none" />
      </label>

      {error && <div role="alert" className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">{error}</div>}

      <button type="submit" disabled={isSubmitting} className="w-full bg-[#2f6bfc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#224671] flex items-center justify-center disabled:opacity-60">
        {isSubmitting ? (isFr ? 'Envoi en cours...' : 'Sending...') : <><span>{isFr ? 'Envoyer ma demande' : 'Send my request'}</span><Send className="ml-2" size={20} /></>}
      </button>

      <p className="text-xs text-slate-500 text-center">
        {isFr ? 'Vos informations sont utilisées uniquement pour traiter votre demande.' : 'Your information is used only to process your request.'}
      </p>
    </form>
  );
}
