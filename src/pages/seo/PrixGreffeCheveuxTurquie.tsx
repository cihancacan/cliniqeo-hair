import { Link } from 'react-router-dom';
import { DollarSign, CheckCircle, TrendingDown, Award } from 'lucide-react';

const PrixGreffeCheveuxTurquie = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prix Greffe de Cheveux Turquie 2025 - Tarifs Transparents
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Découvrez nos tarifs tout compris pour votre greffe de cheveux en Turquie. Prix fixes, transparents, sans surprise.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Obtenir Mon Devis Gratuit
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Prix Greffe de Cheveux Turquie - Tableau Complet 2025
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#224671] mb-2">Greffe FUE</h3>
              <div className="text-5xl font-bold text-[#2f6bfc] mb-4">1 990€</div>
              <p className="text-gray-600 mb-6">Jusqu'à 4000 greffons</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Intervention FUE complète</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Hôtel 4* - 3 nuits</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Transferts VIP + Traducteur</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Suivi médical 12 mois</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#224671] px-6 py-2 rounded-full text-sm font-bold">
                PLUS POPULAIRE
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2">Greffe DHI</h3>
              <div className="text-5xl font-bold mb-4">2 490€</div>
              <p className="opacity-90 mb-6">Jusqu'à 4000 greffons</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Technique DHI Premium</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Hôtel 5* - 3 nuits</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>PRP capillaire inclus</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Garantie résultats</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#224671] mb-2">Greffe Barbe</h3>
              <div className="text-5xl font-bold text-[#2f6bfc] mb-4">1 990€</div>
              <p className="text-gray-600 mb-6">Jusqu'à 3000 greffons</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Greffe barbe FUE/DHI</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Hôtel 4* - 3 nuits</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Suivi médical 12 mois</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f3f3f3] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#224671] mb-6 text-center">
              Comparaison Prix France vs Turquie
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-gray-600 mb-2">Greffe FUE France</div>
                <div className="text-3xl font-bold text-gray-400 line-through">6 000€</div>
                <div className="text-2xl font-bold text-[#2f6bfc] mt-2">1 990€</div>
                <div className="text-green-600 font-bold mt-2">Économie: 75%</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-gray-600 mb-2">Greffe DHI France</div>
                <div className="text-3xl font-bold text-gray-400 line-through">10 000€</div>
                <div className="text-2xl font-bold text-[#2f6bfc] mt-2">2 490€</div>
                <div className="text-green-600 font-bold mt-2">Économie: 75%</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-gray-600 mb-2">Greffe Barbe France</div>
                <div className="text-3xl font-bold text-gray-400 line-through">5 000€</div>
                <div className="text-2xl font-bold text-[#2f6bfc] mt-2">1 990€</div>
                <div className="text-green-600 font-bold mt-2">Économie: 60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Pourquoi ces Prix en Turquie ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingDown className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-3">Coût de la Vie</h3>
              <p className="text-gray-700">Le coût de la vie en Turquie permet des prix 60-70% moins chers</p>
            </div>
            <div className="text-center">
              <DollarSign className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-3">Volume Important</h3>
              <p className="text-gray-700">500 000+ interventions/an = économies d'échelle</p>
            </div>
            <div className="text-center">
              <Award className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-3">Même Qualité</h3>
              <p className="text-gray-700">Cliniques certifiées JCI/ISO, standards européens</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Obtenez Votre Devis Personnalisé</h2>
          <p className="text-xl mb-8">Estimation gratuite en 24h avec nombre exact de greffons</p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300">
            Demander Mon Devis Gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrixGreffeCheveuxTurquie;
