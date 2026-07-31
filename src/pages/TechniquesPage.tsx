import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Microscope, Ruler, Clock, Users } from 'lucide-react';

const TechniquesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Techniques FUE & DHI en Turquie
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Découvrez les deux techniques les plus avancées pour une greffe de cheveux moderne, rapide et naturelle avec des médecins experts à Istanbul.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-[#2f6bfc] text-white px-6 py-3 rounded-lg inline-block mb-6 font-bold text-lg">
                TECHNIQUE FUE
              </div>
              <h2 className="text-4xl font-bold text-[#224671] mb-6">
                Extraction Folliculaire Unitaire
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                La méthode FUE (Follicular Unit Extraction) est la technique de référence internationale pour la greffe de cheveux. Elle consiste à prélever les follicules pileux un par un depuis la zone donneuse à l'arrière du crâne, puis à les implanter dans les zones à densifier.
              </p>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Comment fonctionne la FUE ?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Extraction précise</h4>
                    <p className="text-gray-700">Les greffons sont prélevés un à un avec un micro-punch de 0,7 à 1 mm.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Conservation optimale</h4>
                    <p className="text-gray-700">Les follicules sont conservés dans une solution spéciale pour maximiser leur survie.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Implantation stratégique</h4>
                    <p className="text-gray-700">Les greffons sont implantés selon l'angle et la direction naturels des cheveux.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Avantages de la FUE
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Aucune cicatrice linéaire visible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Récupération rapide (5 à 7 jours)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Résultat naturel et dense</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Possibilité de couper les cheveux courts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Idéale pour les grandes surfaces à traiter</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-[#6EC1E4] text-white px-6 py-3 rounded-lg inline-block mb-6 font-bold text-lg">
                TECHNIQUE DHI
              </div>
              <h2 className="text-4xl font-bold text-[#224671] mb-6">
                Direct Hair Implantation
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                La méthode DHI (Direct Hair Implantation) est la technique la plus moderne et avancée. Elle utilise un stylo implanteur CHOI qui permet d'extraire et d'implanter les follicules directement, sans créer d'incisions préalables.
              </p>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Comment fonctionne la DHI ?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Extraction soignée</h4>
                    <p className="text-gray-700">Prélèvement des greffons avec la même précision que la FUE.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Chargement du stylo CHOI</h4>
                    <p className="text-gray-700">Chaque greffon est placé dans un stylo implanteur stérile.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Implantation directe</h4>
                    <p className="text-gray-700">Le greffon est implanté immédiatement avec un angle et une profondeur parfaits.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Avantages de la DHI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Précision maximale avec le stylo CHOI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Récupération ultra-rapide (3 à 5 jours)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Densité maximale garantie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Moins de traumatisme pour le cuir chevelu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Parfaite pour les zones sensibles et visibles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              FUE vs DHI : Quelle technique choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparaison détaillée pour vous aider à comprendre les différences
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-premium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Critère</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">FUE</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">DHI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Durée de l'intervention</td>
                    <td className="px-6 py-4 text-gray-700">6 à 8 heures</td>
                    <td className="px-6 py-4 text-gray-700">6 à 8 heures</td>
                  </tr>
                  <tr className="bg-[#f3f3f3]">
                    <td className="px-6 py-4 font-bold text-[#224671]">Cicatrisation</td>
                    <td className="px-6 py-4 text-gray-700">5 à 7 jours</td>
                    <td className="px-6 py-4 text-gray-700">3 à 5 jours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Précision</td>
                    <td className="px-6 py-4 text-gray-700">Excellente</td>
                    <td className="px-6 py-4 text-gray-700">Maximale</td>
                  </tr>
                  <tr className="bg-[#f3f3f3]">
                    <td className="px-6 py-4 font-bold text-[#224671]">Densité obtenue</td>
                    <td className="px-6 py-4 text-gray-700">Très bonne</td>
                    <td className="px-6 py-4 text-gray-700">Optimale</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-[#224671]">Idéale pour</td>
                    <td className="px-6 py-4 text-gray-700">Grandes surfaces, calvities avancées</td>
                    <td className="px-6 py-4 text-gray-700">Zones visibles, cheveux fins, retouches</td>
                  </tr>
                  <tr className="bg-[#f3f3f3]">
                    <td className="px-6 py-4 font-bold text-[#224671]">Prix</td>
                    <td className="px-6 py-4 text-gray-700">À partir de 1 990€</td>
                    <td className="px-6 py-4 text-gray-700">À partir de 2 490€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Microscope className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-2">Précision</h3>
              <p className="text-gray-600">Technologie de pointe</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Ruler className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-2">Personnalisé</h3>
              <p className="text-gray-600">Adapté à votre cas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Clock className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-2">Rapide</h3>
              <p className="text-gray-600">Récupération express</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#224671] mb-2">Experts</h3>
              <p className="text-gray-600">Chirurgiens certifiés</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Quelle technique pour votre cas ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nos médecins déterminent la meilleure technique selon votre densité donneuse, votre type de cheveux, votre stade de calvitie et le résultat recherché.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-[#2f6bfc] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Obtenir mon diagnostic gratuit
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Pourquoi la Turquie pour votre greffe FUE ou DHI ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-[#2f6bfc] mb-4">500 000+</div>
              <h3 className="text-xl font-bold text-[#224671] mb-2">Patients par an</h3>
              <p className="text-gray-700">La Turquie réalise plus de greffes que tout autre pays au monde.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-[#2f6bfc] mb-4">70%</div>
              <h3 className="text-xl font-bold text-[#224671] mb-2">Économies</h3>
              <p className="text-gray-700">Prix jusqu'à 70% moins chers qu'en France ou en Europe.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-[#2f6bfc] mb-4">+10 ans</div>
              <h3 className="text-xl font-bold text-[#224671] mb-2">Expérience</h3>
              <p className="text-gray-700">Nos chirurgiens partenaires ont plus de 10 ans d'expertise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechniquesPage;
