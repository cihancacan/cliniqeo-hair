import { Link } from 'react-router-dom';
import { CheckCircle, Plane, Hotel, Languages, Stethoscope, Award, Shield } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Prix greffe de cheveux Turquie
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Tarifs transparents tout compris pour une greffe FUE & DHI. Le meilleur rapport qualité-prix d'Europe avec accompagnement français.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Nos Tarifs Tout Compris
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prix transparents incluant l'intervention, l'hôtel, les transferts, le traducteur et le suivi médical
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover-lift">
              <div className="text-center mb-6">
                <div className="bg-[#f3f3f3] text-[#224671] px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                  GREFFE FUE
                </div>
                <div className="text-5xl font-bold text-[#224671] mb-2">1 990€</div>
                <p className="text-gray-600">Jusqu'à 5000 greffons</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Technique FUE moderne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Greffons illimités selon besoin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Hôtel 4 étoiles 3 nuits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Transferts VIP inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Traducteur francophone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Kit post-opératoire 1 mois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">PRP capillaire inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Accompagnant inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suivi médical 12 mois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Certificat médical</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#2f6bfc] text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-[#224671] transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white rounded-2xl p-8 relative transform lg:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#224671] text-white px-6 py-2 rounded-full font-bold">
                LE PLUS POPULAIRE
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                  GREFFE DHI
                </div>
                <div className="text-5xl font-bold mb-2">2 490€</div>
                <p className="opacity-90">Jusqu'à 4000 greffons</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Technique DHI premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Implantation directe stylo CHOI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Greffons illimités selon besoin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Hôtel 5 étoiles 3 nuits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Transferts VIP inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Traducteur francophone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Kit post-opératoire 3 mois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>PRP capillaire inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Accompagnant inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Suivi médical 12 mois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Garantie résultats</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-white text-[#2f6bfc] text-center px-6 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover-lift">
              <div className="text-center mb-6">
                <div className="bg-[#f3f3f3] text-[#224671] px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                  GREFFE BARBE
                </div>
                <div className="text-5xl font-bold text-[#224671] mb-2">1 990€</div>
                <p className="text-gray-600">Jusqu'à 5000 greffons</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Technique FUE ou DHI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Densification barbe complète</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Hôtel 4 étoiles 3 nuits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Transferts VIP inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Traducteur francophone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Kit post-opératoire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suivi médical 12 mois</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#2f6bfc] text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-[#224671] transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="bg-[#f3f3f3] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#224671] mb-6 text-center">
              Tous nos tarifs incluent
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Stethoscope className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Consultation médicale</h4>
                  <p className="text-gray-700 text-sm">Diagnostic complet par le chirurgien</p>
                </div>
              </div>
              <div className="flex items-start">
                <Hotel className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Hôtel premium</h4>
                  <p className="text-gray-700 text-sm">3 nuits en chambre single avec petit-déjeuner</p>
                </div>
              </div>
              <div className="flex items-start">
                <Plane className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Transferts VIP</h4>
                  <p className="text-gray-700 text-sm">Aéroport - Hôtel - Clinique - Aéroport</p>
                </div>
              </div>
              <div className="flex items-start">
                <Languages className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Traducteur</h4>
                  <p className="text-gray-700 text-sm">Accompagnement francophone permanent</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Kit post-opératoire</h4>
                  <p className="text-gray-700 text-sm">Shampoing, lotion, médicaments</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-[#224671] mb-1">Suivi 12 mois</h4>
                  <p className="text-gray-700 text-sm">Accompagnement médical complet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Comparaison France vs Turquie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pourquoi des milliers de Français choisissent la Turquie chaque année
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-premium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Prestation</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">France</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Turquie (Cliniqeo)</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Cliniqeo en France</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Greffe FUE 3000 greffons</td>
                    <td className="px-6 py-4 text-center text-gray-700">6 000€ - 8 000€</td>
                    <td className="px-6 py-4 text-center text-[#2f6bfc] font-bold">1 990€</td>
                    <td className="px-6 py-4 text-center text-gray-700">3 490€</td>
                  </tr>
                  <tr className="bg-[#f3f3f3]">
                    <td className="px-6 py-4 font-bold text-[#224671]">Greffe DHI 3000 greffons</td>
                    <td className="px-6 py-4 text-center text-gray-700">8 000€ - 12 000€</td>
                    <td className="px-6 py-4 text-center text-[#2f6bfc] font-bold">2 490€</td>
                    <td className="px-6 py-4 text-center text-gray-700">3 690€</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Greffe de barbe</td>
                    <td className="px-6 py-4 text-center text-gray-700">4 000€ - 6 000€</td>
                    <td className="px-6 py-4 text-center text-[#2f6bfc] font-bold">1 990€</td>
                    <td className="px-6 py-4 text-center text-gray-700">3 490€</td>
                  </tr>
                  <tr className="bg-[#f3f3f3]">
                    <td className="px-6 py-4 font-bold text-[#224671]">Hôtel</td>
                    <td className="px-6 py-4 text-center text-gray-700">Non inclus</td>
                    <td className="px-6 py-4 text-center text-[#2f6bfc] font-bold">Inclus</td>
                    <td className="px-6 py-4 text-center text-gray-700">Non inclus</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Suivi post-opératoire</td>
                    <td className="px-6 py-4 text-center text-gray-700">Limité</td>
                    <td className="px-6 py-4 text-center text-[#2f6bfc] font-bold">12 mois</td>
                    <td className="px-6 py-4 text-center text-gray-700">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#2f6bfc] to-[#6EC1E4] text-white rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Économisez jusqu'à 6 000€
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Sans compromis sur la qualité médicale, le suivi ou le confort
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Obtenir mon devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Options et Compléments
            </h2>
            <p className="text-xl text-gray-600">
              Personnalisez votre séjour selon vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-[#224671] mb-2">PRP Capillaire</h3>
              <div className="text-3xl font-bold text-[#2f6bfc] mb-2">+290€</div>
              <p className="text-gray-600 text-sm">Stimulation de la repousse</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-[#224671] mb-2">Nuit supplémentaire</h3>
              <div className="text-3xl font-bold text-[#2f6bfc] mb-2">+80€</div>
              <p className="text-gray-600 text-sm">Hôtel 4 ou 5 étoiles</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-[#224671] mb-2">Accompagnant</h3>
              <div className="text-3xl font-bold text-[#2f6bfc] mb-2">Inclus</div>
              <p className="text-gray-600 text-sm">Hôtel + transferts inclus</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-[#224671] mb-2">Greffe sourcils</h3>
              <div className="text-3xl font-bold text-[#2f6bfc] mb-2">+690€</div>
              <p className="text-gray-600 text-sm">Densification sourcils</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
