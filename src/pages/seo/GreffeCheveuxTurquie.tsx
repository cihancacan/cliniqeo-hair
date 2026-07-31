import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Users, Phone, ArrowRight } from 'lucide-react';

const GreffeCheveuxTurquie = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Greffe de Cheveux Turquie - Solution Premium avec Cliniqeo Hair
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Découvrez pourquoi la Turquie est la destination n°1 mondiale pour la greffe de cheveux. Expertise, technologie et prix accessibles.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Diagnostic Gratuit
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-6">
                Greffe de Cheveux en Turquie : Le Choix de l'Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                La <strong>greffe de cheveux en Turquie</strong> s'est imposée comme la référence mondiale en matière de transplantation capillaire. Avec plus de 500 000 interventions réalisées chaque année, Istanbul est devenue la capitale mondiale de la greffe capillaire.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Cliniqeo Hair vous accompagne dans votre projet de <strong>greffe de cheveux Turquie</strong> avec un service complet, francophone et transparent. Notre partenariat exclusif avec les meilleures cliniques certifiées d'Istanbul garantit votre sécurité et votre satisfaction.
              </p>
              <h3 className="text-2xl font-bold text-[#224671] mb-4 mt-8">
                Pourquoi Choisir la Turquie pour Votre Greffe de Cheveux ?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Prix 70% moins chers</strong> qu'en France sans compromis sur la qualité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Chirurgiens experts</strong> avec plus de 10 ans d'expérience et 500+ greffes/an</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Techniques modernes</strong> FUE et DHI avec équipements dernière génération</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Forfaits tout compris</strong> : hôtel, transferts, traducteur francophone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Résultats naturels</strong> garantis avec suivi médical 12 mois</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-[#224671] mb-4">
                  Prix Greffe de Cheveux Turquie
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="font-semibold text-[#224671]">Greffe FUE</span>
                    <span className="text-2xl font-bold text-[#2f6bfc]">1 990€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <span className="font-semibold text-[#224671]">Greffe DHI</span>
                    <span className="text-2xl font-bold text-[#2f6bfc]">2 490€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#224671]">Greffe Barbe</span>
                    <span className="text-2xl font-bold text-[#2f6bfc]">1 990€</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Prix tout compris : intervention + hôtel + transferts + suivi
                </p>
                <Link
                  to="/tarifs"
                  className="block mt-6 bg-[#2f6bfc] text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-[#224671] transition-all duration-300"
                >
                  Voir tous les tarifs
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="mr-3" size={20} />
                    <span>01 88 84 22 22</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Disponible du lundi au vendredi, 9h-19h
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="block mt-6 bg-white text-[#2f6bfc] text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Demander un diagnostic gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Les Techniques de Greffe de Cheveux en Turquie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Greffe FUE Turquie
              </h3>
              <p className="text-gray-700 mb-4">
                La technique <strong>FUE (Follicular Unit Extraction)</strong> est la méthode la plus utilisée pour la greffe de cheveux en Turquie. Les follicules sont prélevés un par un depuis la zone donneuse pour être implantés dans les zones dégarnies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Aucune cicatrice visible</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Récupération rapide (5-7 jours)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Résultat naturel garanti</span>
                </li>
              </ul>
              <Link
                to="/techniques"
                className="inline-block mt-6 text-[#2f6bfc] font-bold hover:text-[#224671]"
              >
                En savoir plus sur la FUE →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Greffe DHI Turquie
              </h3>
              <p className="text-gray-700 mb-4">
                La technique <strong>DHI (Direct Hair Implantation)</strong> utilise un stylo implanteur CHOI pour une précision maximale. Cette méthode moderne offre la meilleure densité capillaire possible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Précision maximale</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Récupération ultra-rapide (3-5 jours)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Densité optimale</span>
                </li>
              </ul>
              <Link
                to="/techniques"
                className="inline-block mt-6 text-[#2f6bfc] font-bold hover:text-[#224671]"
              >
                En savoir plus sur la DHI →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Pourquoi Cliniqeo Hair pour Votre Greffe en Turquie ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">Sécurité Maximale</h3>
              <p className="text-gray-700">
                Cliniques certifiées JCI et ISO, protocoles stricts, accompagnement français complet
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">Expertise Reconnue</h3>
              <p className="text-gray-700">
                Chirurgiens avec +10 ans d'expérience, 6000+ interventions réussies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">Accompagnement 100% Français</h3>
              <p className="text-gray-700">
                Équipe francophone disponible avant, pendant et après votre séjour
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt pour Votre Greffe de Cheveux en Turquie ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenez votre diagnostic capillaire gratuit et un devis personnalisé en 24h
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Commencer Mon Diagnostic Gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GreffeCheveuxTurquie;
