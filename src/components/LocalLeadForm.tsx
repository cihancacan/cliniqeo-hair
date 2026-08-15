import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getHairApiUrl } from '../config/hostedPath';


interface LocalLeadFormProps {
  lang: 'fr' | 'en';
  cityLabel: string;
  pagePath: string;
}

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

const emptyForm: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
};

export default function LocalLeadForm({ lang, cityLabel, pagePath }: LocalLeadFormProps) {
  const isFr = lang === 'fr';
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const sourceMessage = isFr
      ? `[Landing locale : ${cityLabel} | ${pagePath}] ${form.message || 'Demande de diagnostic capillaire.'}`
      : `[Local landing page: ${cityLabel} | ${pagePath}] ${form.message || 'Hair assessment request.'}`;

    try {
      const { error: submitError } = await supabase
        .from('diagnostic_requests')
        .insert([
          {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone: form.phone,
            age: null,
            message: sourceMessage,
            status: 'pending',
            photo_front_url: null,
            photo_top_url: null,
            photo_donor_url: null,
          },
        ]);

      if (submitError) throw submitError;

      void fetch(getHairApiUrl('/api/contact-email'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: lang,
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          message: sourceMessage,
          photo_count: 0,
        }),
      }).catch(() => undefined);

      setForm(emptyForm);
      setIsSuccess(true);
    } catch (submissionError) {
      console.error('Local lead submission failed:', submissionError);
      setError(
        isFr
          ? 'Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.'
          : 'Something went wrong. Please try again or contact us on WhatsApp.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl bg-white p-8 md:p-10 text-center shadow-xl border border-blue-100">
        <CheckCircle className="mx-auto mb-5 text-green-500" size={58} />
        <h2 className="text-3xl font-bold text-[#224671] mb-4">
          {isFr ? 'Votre demande a bien été envoyée' : 'Your request has been sent'}
        </h2>
        <p className="text-slate-600 text-lg">
          {isFr
            ? 'Notre équipe vous contactera pour compléter le diagnostic et vous expliquer le paiement en 10 fois.'
            : 'Our team will contact you to complete the assessment and explain the next steps.'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xl border border-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-3">
        {isFr ? `Diagnostic gratuit depuis ${cityLabel}` : `Free assessment from ${cityLabel}`}
      </h2>
      <p className="text-slate-600 mb-7 leading-relaxed">
        {isFr
          ? 'Remplissez le formulaire maintenant. Les photos sont facultatives à cette étape et pourront être envoyées plus tard par WhatsApp ou par email.'
          : 'Submit the form now. Photos are optional at this stage and can be sent later by WhatsApp or email.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="local-first-name" className="block text-[#224671] font-bold mb-2">
              {isFr ? 'Prénom' : 'First name'} *
            </label>
            <input
              id="local-first-name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              value={form.first_name}
              onChange={updateField}
              required
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-[#2f6bfc] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="local-last-name" className="block text-[#224671] font-bold mb-2">
              {isFr ? 'Nom' : 'Last name'} *
            </label>
            <input
              id="local-last-name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              value={form.last_name}
              onChange={updateField}
              required
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-[#2f6bfc] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="local-email" className="block text-[#224671] font-bold mb-2">Email *</label>
            <input
              id="local-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={updateField}
              required
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-[#2f6bfc] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="local-phone" className="block text-[#224671] font-bold mb-2">
              {isFr ? 'Numéro WhatsApp' : 'WhatsApp number'} *
            </label>
            <input
              id="local-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={updateField}
              required
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-[#2f6bfc] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="local-message" className="block text-[#224671] font-bold mb-2">
            {isFr ? 'Votre situation ou votre question' : 'Your situation or question'}
          </label>
          <textarea
            id="local-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={updateField}
            className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-[#2f6bfc] focus:outline-none resize-y"
          />
        </div>

        {error && <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f6bfc] px-7 py-4 text-white font-bold hover:bg-[#224671] disabled:opacity-60 transition-colors"
        >
          <Send size={20} />
          {isSubmitting
            ? isFr ? 'Envoi en cours…' : 'Sending…'
            : isFr ? 'Recevoir mon diagnostic gratuit' : 'Get my free assessment'}
        </button>
      </form>
    </div>
  );
}
