import { Link } from 'react-router-dom';
import { CheckCircle, Award, Zap, Target } from 'lucide-react';

const GreffeCheveuxDHITurquie = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Greffe de Cheveux DHI Turquie - Technique Premium Stylo CHOI
          </h1>
          <p className="text-xl mb-6 opacity-90">
            La méthode DHI (Direct Hair Implantation) avec stylo CHOI pour une précision maximale. Résultats denses et naturels à partir de 2 490€.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Diagnostic Gratuit DHI
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-6">
                Greffe DHI Turquie : La Technique la Plus Avancée
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                La <strong>greffe de cheveux DHI en Turquie</strong> représente le summum de la technologie capillaire moderne. DHI signifie Direct Hair Implantation, une technique utilisant le stylo implanteur CHOI pour une précision chirurgicale inégalée.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Istanbul concentre les meilleurs spécialistes DHI au monde. Avec Cliniqeo Hair, bénéficiez de cette expertise exceptionnelle à des tarifs 75% moins chers qu'en France.
              </p>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Pourquoi Choisir la DHI ?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Précision maximale</strong> avec le stylo CHOI pour un angle et une profondeur parfaits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Densité optimale</strong> jusqu'à 80 greffons par cm²</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Récupération ultra-rapide</strong> seulement 3-5 jours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Moins de traumatisme</strong> pour le cuir chevelu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700"><strong>Résultat immédiatement visible</strong> dès la sortie de clinique</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white p-8 rounded-xl mb-6">
                <h3 className="text-2xl font-bold mb-4">Forfait DHI Premium</h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold mb-2">2 490€</div>
                  <p className="opacity-90">Jusqu'à 4000 greffons</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>Technique DHI stylo CHOI</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>Hôtel 5* (3 nuits)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>Transferts VIP</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>Traducteur francophone</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>PRP capillaire inclus</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="mr-2" size={18} />
                    <span>Garantie résultats</span>
                  </li>
                </ul>
                <Link to="/tarifs" className="block bg-white text-[#2f6bfc] text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
                  Voir Tous les Prix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Avantages de la Greffe DHI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <Zap className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Implantation Directe</h3>
              <p className="text-gray-700 text-sm">Pas d'incision préalable, implantation immédiate</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <Target className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Contrôle Total</h3>
              <p className="text-gray-700 text-sm">Angle, direction et profondeur parfaitement contrôlés</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <Award className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Taux de Survie 98%</h3>
              <p className="text-gray-700 text-sm">Meilleur taux de réussite des greffons</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <CheckCircle className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Sans Rasage Total</h3>
              <p className="text-gray-700 text-sm">Possible sans raser toute la tête</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Votre Greffe DHI en Turquie</h2>
          <p className="text-xl mb-8">Diagnostic personnalisé gratuit en 24h</p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300">
            Demander Mon Diagnostic DHI
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GreffeCheveuxDHITurquie;
