import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { getHairAssetUrl } from '../config/hostedPath';

const BeforeAfterPage = () => {
  const results = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    return {
      image: getHairAssetUrl(`/greffe_cheveux_turquie_hair_transplant_turkey_${number}.jpg`),
      alt: `Avant après greffe de cheveux Turquie - patient ${number}`,
    };
  });

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Photos Avant Après Greffe de Cheveux Turquie
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Découvrez une sélection de résultats réels de patients pris en charge par notre partenaire médical.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Obtenir votre diagnostic gratuit
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#224671] mb-4">
              Résultats Authentiques de Nos Patients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chaque photo représente un parcours unique. Nos patients retrouvent confiance et satisfaction avec des résultats naturels et permanents.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {results.map((result, index) => (
              <figure
                key={result.image}
                className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={result.image}
                  alt={result.alt}
                  className="block w-full h-auto"
                  loading={index < 8 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#224671] mb-6">
                Pourquoi nos résultats sont exceptionnels ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#224671] mb-1">Chirurgiens expérimentés</h3>
                    <p className="text-gray-600">Plus de 15 ans d'expérience et 6000+ interventions réussies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#224671] mb-1">Techniques de pointe</h3>
                    <p className="text-gray-600">FUE et DHI avec équipement dernière génération</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#224671] mb-1">Suivi personnalisé</h3>
                    <p className="text-gray-600">Accompagnement 12 mois pour garantir le meilleur résultat</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#224671] mb-1">Résultats naturels</h3>
                    <p className="text-gray-600">Approche artistique pour un rendu indétectable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">À votre tour de transformer votre vie</h3>
              <p className="text-lg mb-8 opacity-90">
                Décrivez votre situation et recevez une première orientation personnalisée sous 24h
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>Diagnostic gratuit et sans engagement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>Réponse garantie en 24h</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>Devis transparent et détaillé</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>Paiement en 10 fois sans frais</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block bg-white text-[#2f6bfc] text-center px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Commencer mon diagnostic
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#224671] mb-8 text-center">
            Comprendre les Photos Avant Après
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold text-[#224671] mb-4">Délai de résultat</h3>
              <p className="text-gray-700 leading-relaxed">
                Les photos présentées montrent les résultats entre 8 et 12 mois après l'intervention. C'est le temps nécessaire pour que les cheveux greffés poussent complètement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold text-[#224671] mb-4">Nombre de greffons</h3>
              <p className="text-gray-700 leading-relaxed">
                Chaque cas est unique. Le nombre de greffons nécessaires dépend de votre degré de calvitie, de la qualité de votre zone donneuse et du résultat souhaité.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="text-xl font-bold text-[#224671] mb-4">Technique adaptée</h3>
              <p className="text-gray-700 leading-relaxed">
                FUE ou DHI, nos chirurgiens recommandent la technique la plus appropriée selon votre profil pour obtenir le meilleur résultat possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour votre transformation ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les milliers de patients satisfaits qui ont retrouvé confiance grâce à Cliniqeo Hair
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Obtenir mon diagnostic gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterPage;
