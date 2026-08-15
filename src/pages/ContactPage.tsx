import { useState } from 'react';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { sendContactRequest } from '../lib/contactRequest';

const initialForm = { first_name: '', last_name: '', email: '', phone: '', age: '', message: '' };

const steps = [
  ['1', 'Remplissez le formulaire', 'Indiquez vos coordonnées et décrivez votre situation capillaire.'],
  ['2', 'Échangez avec un conseiller', 'Un conseiller vous contacte pour préciser vos besoins et répondre à vos premières questions.'],
  ['3', 'Recevez votre première orientation', 'Notre équipe étudie votre demande et vous présente les prochaines étapes ainsi qu’une estimation personnalisée.'],
  ['4', 'Planifiez votre séjour', 'Si la proposition vous convient, nous organisons ensemble votre séjour médical en Turquie.'],
];

export default function ContactPage() {
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
      await sendContactRequest({ ...formData, language: 'fr' });
      setFormData(initialForm);
      setIsSuccess(true);
    } catch (submitError) {
      console.error('Error submitting contact form:', submitError);
      setError("Votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous contacter sur WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Diagnostic Capillaire Gratuit</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Décrivez votre situation et recevez une première orientation personnalisée sous 24 heures.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-7">Comment ça marche ?</h2>
              <div className="space-y-6 mb-10">
                {steps.map(([number, title, text]) => (
                  <div key={number} className="flex items-start">
                    <div className="bg-[#2f6bfc] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">{number}</div>
                    <div><h3 className="text-xl font-bold text-[#224671] mb-2">{title}</h3><p className="text-gray-700 leading-relaxed">{text}</p></div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f3f3f3] p-7 md:p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#224671] mb-5">Coordonnées Cliniqeo Hair</h3>
                <div className="space-y-4">
                  <div className="flex items-start"><Phone className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">Téléphone</h4><a href="tel:0188842222" className="text-gray-700">+33 1 88 84 22 22</a></div></div>
                  <div className="flex items-start"><Mail className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">Email</h4><a href="mailto:info@cliniqeo.com" className="text-gray-700">info@cliniqeo.com</a></div></div>
                  <div className="flex items-start"><MapPin className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">Localisation</h4><p className="text-gray-700">Paris, France<br />Istanbul, Turquie</p></div></div>
                </div>
                <a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="block mt-7 bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600">Contacter sur WhatsApp</a>
              </div>
            </div>

            <div className="bg-[#f3f3f3] p-6 md:p-8 rounded-xl self-start">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="text-green-500" size={48} /></div>
                  <h2 className="text-3xl font-bold text-[#224671] mb-4">Demande envoyée !</h2>
                  <p className="text-lg text-gray-700 mb-7">Votre demande a bien été transmise. Notre équipe vous répondra sous 24 heures.</p>
                  <button onClick={() => setIsSuccess(false)} className="bg-[#2f6bfc] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#224671]">Faire une nouvelle demande</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><h2 className="text-3xl font-bold text-[#224671] mb-2">Formulaire de diagnostic gratuit</h2><p className="text-gray-600">Quelques informations suffisent pour être recontacté.</p></div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="font-bold text-[#224671]">Prénom *<input type="text" name="first_name" autoComplete="given-name" required value={formData.first_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                    <label className="font-bold text-[#224671]">Nom *<input type="text" name="last_name" autoComplete="family-name" required value={formData.last_name} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                  </div>
                  <label className="block font-bold text-[#224671]">Email *<input type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="font-bold text-[#224671]">WhatsApp / Téléphone *<input type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} placeholder="+33 6 12 34 56 78" className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                    <label className="font-bold text-[#224671]">Âge<input type="number" name="age" min="18" max="99" value={formData.age} onChange={handleChange} className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" /></label>
                  </div>
                  <label className="block font-bold text-[#224671]">Décrivez votre situation<textarea name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Votre situation capillaire, vos attentes et vos questions..." className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none resize-none" /></label>
                  {error && <div role="alert" className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">{error}</div>}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#2f6bfc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#224671] flex items-center justify-center disabled:opacity-60">{isSubmitting ? 'Envoi en cours...' : <><span>Envoyer ma demande</span><Send className="ml-2" size={20} /></>}</button>
                  <p className="text-xs text-gray-600 text-center">Vos informations sont utilisées uniquement pour traiter votre demande.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
