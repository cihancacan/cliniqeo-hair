import { Mail, MapPin, Phone } from 'lucide-react';
import SimpleLeadForm from '../components/SimpleLeadForm';

const steps = [
  ['1', 'Remplissez le formulaire', 'Indiquez vos coordonnées et, si vous le souhaitez, ajoutez un message.'],
  ['2', 'Échangez avec un conseiller', 'Un conseiller vous contacte pour préciser vos besoins et répondre à vos premières questions.'],
  ['3', 'Recevez votre première orientation', 'Notre équipe étudie votre demande et vous présente les prochaines étapes ainsi qu’une estimation personnalisée.'],
  ['4', 'Planifiez votre séjour', 'Si la proposition vous convient, nous organisons ensemble votre séjour médical en Turquie.'],
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Demandez votre diagnostic gratuit</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Décrivez simplement votre situation, recevez une réponse dans l'heure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="order-2 lg:order-1">
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
                  <div className="flex items-start"><Phone className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">WhatsApp</h4><a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="text-gray-700">+33 7 56 87 29 61</a></div></div>
                  <div className="flex items-start"><Mail className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">Email</h4><a href="mailto:info@cliniqeo.com" className="text-gray-700">info@cliniqeo.com</a></div></div>
                  <div className="flex items-start"><MapPin className="text-[#2f6bfc] mr-4 mt-1" size={24} /><div><h4 className="font-bold text-[#224671]">Localisation</h4><p className="text-gray-700">Paris, France<br />Istanbul, Turquie</p></div></div>
                </div>
                <a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="block mt-7 bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600">Contacter sur WhatsApp</a>
              </div>
            </div>

            <div className="order-1 lg:order-2 self-start">
              <SimpleLeadForm language="fr" className="bg-[#f8fafc]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
