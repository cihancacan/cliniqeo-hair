import { Link } from 'react-router-dom';
import { CheckCircle, Award, TrendingUp, Clock } from 'lucide-react';

const GreffeCheveuxFUETurquie = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Greffe de Cheveux FUE Turquie - Technique de Référence Mondiale
          </h1>
          <p className="text-xl mb-6 opacity-90">
            La méthode FUE (Follicular Unit Extraction) pratiquée par les meilleurs chirurgiens turcs. Résultats naturels garantis à partir de 1 990€ tout compris.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Diagnostic Gratuit FUE
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-6">
                Qu'est-ce que la Greffe FUE en Turquie ?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                La <strong>greffe de cheveux FUE en Turquie</strong> est la technique la plus avancée et la plus demandée mondialement. FUE signifie Follicular Unit Extraction, une méthode qui consiste à prélever les follicules pileux individuellement depuis la zone donneuse.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Les chirurgiens turcs maîtrisent parfaitement cette technique grâce à leur expérience exceptionnelle (500+ interventions par an). Istanbul est devenue la capitale mondiale de la <strong>greffe FUE</strong>.
              </p>

              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Comment se Déroule la Greffe FUE ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-[#224671]">Extraction des Greffons</h4>
                    <p className="text-gray-700">Les follicules sont prélevés un par un avec un micro-punch de 0,7-1mm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-[#224671]">Conservation Optimale</h4>
                    <p className="text-gray-700">Les greffons sont placés dans une solution spéciale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-[#224671]">Implantation Précise</h4>
                    <p className="text-gray-700">Les follicules sont implantés selon l'angle naturel des cheveux</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-[#224671] mb-4">Prix Greffe FUE Turquie</h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-[#2f6bfc] mb-2">1 990€</div>
                  <p className="text-gray-700">Forfait tout compris jusqu'à 4000 greffons</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Intervention FUE complète</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Hôtel 4* (3 nuits)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Transferts VIP</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Traducteur francophone</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Kit post-opératoire</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-[#2f6bfc] mr-2" size={18} />
                    <span>Suivi 12 mois</span>
                  </li>
                </ul>
                <Link to="/tarifs" className="block bg-[#2f6bfc] text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-[#224671] transition-all duration-300">
                  Voir Tous les Prix
                </Link>
              </div>

              <div className="bg-white border-2 border-[#2f6bfc] p-6 rounded-xl">
                <h4 className="font-bold text-[#224671] mb-3">💡 Bon à Savoir</h4>
                <p className="text-gray-700 text-sm">
                  En France, une greffe FUE coûte entre 6 000€ et 8 000€ (sans l'hébergement). Avec Cliniqeo Hair en Turquie, économisez jusqu'à 75% tout en bénéficiant d'une qualité médicale équivalente voire supérieure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Avantages de la Greffe FUE en Turquie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <Award className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Aucune Cicatrice Visible</h3>
              <p className="text-gray-700 text-sm">La FUE ne laisse aucune cicatrice linéaire, contrairement à la FUT</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <Clock className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Récupération Rapide</h3>
              <p className="text-gray-700 text-sm">Retour au travail après 5-7 jours seulement</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <TrendingUp className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Résultat Naturel</h3>
              <p className="text-gray-700 text-sm">Cheveux poussent dans leur direction naturelle</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <CheckCircle className="text-[#2f6bfc] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-[#224671] mb-2">Définitif</h3>
              <p className="text-gray-700 text-sm">Les cheveux greffés ne retombent jamais</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-6">
            FAQ - Greffe FUE Turquie
          </h2>
          <div className="space-y-4">
            <div className="bg-[#f3f3f3] p-6 rounded-xl">
              <h3 className="font-bold text-[#224671] mb-2">Combien coûte une greffe FUE en Turquie ?</h3>
              <p className="text-gray-700">Le prix d'une greffe FUE en Turquie avec Cliniqeo est de 1 990€ tout compris (jusqu'à 4000 greffons), incluant l'intervention, l'hôtel, les transferts et le suivi.</p>
            </div>
            <div className="bg-[#f3f3f3] p-6 rounded-xl">
              <h3 className="font-bold text-[#224671] mb-2">La greffe FUE est-elle douloureuse ?</h3>
              <p className="text-gray-700">Non, l'intervention se fait sous anesthésie locale. Vous ne ressentez aucune douleur pendant la greffe FUE.</p>
            </div>
            <div className="bg-[#f3f3f3] p-6 rounded-xl">
              <h3 className="font-bold text-[#224671] mb-2">Combien de greffons pour une calvitie complète ?</h3>
              <p className="text-gray-700">Pour une calvitie avancée, il faut généralement entre 3500 et 5000 greffons FUE. Le diagnostic précis est réalisé par le chirurgien.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Votre Greffe FUE en Turquie avec Cliniqeo</h2>
          <p className="text-xl mb-8">Diagnostic gratuit + Devis personnalisé en 24h</p>
          <Link to="/contact" className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300">
            Demander Mon Diagnostic FUE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GreffeCheveuxFUETurquie;
