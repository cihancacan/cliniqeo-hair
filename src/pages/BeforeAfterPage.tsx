import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { getHairAssetUrl } from '../config/hostedPath';

const BeforeAfterPage = () => {
  const results = [
    {
      image: '/greffe cheveux turquie avant apres.png',
      alt: 'greffe de cheveux avant après homme résultat naturel',
      duration: '12 mois',
      grafts: '3500 greffons',
      technique: 'DHI',
      description: 'Résultat naturel avec densité optimale en zone frontale',
      context: 'Patient de 35 ans présentant une calvitie de type III sur l\'échelle de Norwood. La technique DHI a permis une implantation précise avec un angle naturel, créant une ligne frontale harmonieuse et une densité remarquable.'
    },
    {
      image: '/greffe cheveux turquie avant après copy.png',
      alt: 'greffe cheveux FUE avant après résultat',
      duration: '10 mois',
      grafts: '4000 greffons',
      technique: 'FUE',
      description: 'Transformation complète avec ligne frontale redéfinie',
      context: 'Patient de 42 ans avec calvitie avancée. La technique FUE a permis de traiter une large surface avec 4000 greffons, offrant une couverture homogène et un résultat d\'apparence totalement naturelle.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy.png',
      alt: 'implant capillaire turquie avant après',
      duration: '9 mois',
      grafts: '3200 greffons',
      technique: 'DHI',
      description: 'Densité remarquable et aspect totalement naturel',
      context: 'Patient de 29 ans souhaitant densifier sa zone frontale. La méthode DHI a permis d\'atteindre une densité maximale tout en respectant l\'orientation naturelle des cheveux existants.'
    },
    {
      image: '/greffe cheveux turquie avant après, cliniqeo.png',
      alt: 'greffe cheveux turquie cliniqeo résultat',
      duration: '11 mois',
      grafts: '4500 greffons',
      technique: 'FUE',
      description: 'Couverture maximale des zones dégarnies',
      context: 'Patient de 48 ans avec une calvitie extensive. Notre équipe a réalisé une greffe de 4500 greffons en technique FUE pour restaurer l\'ensemble des zones affectées avec un résultat final très satisfaisant.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy.png',
      alt: 'DHI implantation directe résultat avant après',
      duration: '8 mois',
      grafts: '3000 greffons',
      technique: 'DHI',
      description: 'Récupération rapide et résultat harmonieux',
      context: 'Patient de 37 ans ayant opté pour la technique DHI. La récupération post-opératoire a été particulièrement rapide, avec un retour au travail après seulement 5 jours et des résultats visibles dès le 6ème mois.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy copy.png',
      alt: 'greffe capillaire turquie avant après',
      duration: '12 mois',
      grafts: '3800 greffons',
      technique: 'FUE',
      description: 'Résultat final dense et naturel',
      context: 'Patient de 40 ans ayant bénéficié d\'une greffe FUE complète. Après 12 mois, le résultat final montre une densité optimale avec un aspect parfaitement naturel, indétectable même de près.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy copy copy.png',
      alt: 'résultat greffe FUE turquie homme',
      duration: '10 mois',
      grafts: '3600 greffons',
      technique: 'FUE',
      description: 'Restauration complète de la ligne frontale',
      context: 'Patient de 33 ans souhaitant retrouver sa ligne capillaire de jeunesse. La technique FUE a permis de recréer une ligne frontale naturelle avec une transition progressive vers l\'arrière.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy copy copy copy.png',
      alt: 'avant après implant cheveux DHI',
      duration: '9 mois',
      grafts: '3400 greffons',
      technique: 'DHI',
      description: 'Densification maximale avec stylo CHOI',
      context: 'Patient de 31 ans ayant choisi la technique DHI pour son potentiel de densité supérieure. Le stylo implanteur CHOI a permis un contrôle précis de l\'angle et de la profondeur pour un rendu optimal.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy copy copy copy copy.png',
      alt: 'greffe cheveux homme avant après turquie',
      duration: '11 mois',
      grafts: '4200 greffons',
      technique: 'FUE',
      description: 'Transformation radicale et durable',
      context: 'Patient de 45 ans avec calvitie avancée de type IV-V. Une greffe FUE extensive de 4200 greffons a permis une transformation remarquable, restaurant l\'ensemble de la zone frontale et du vertex.'
    },
    {
      image: '/greffe cheveux turquie avant après copy copy copy copy copy copy copy copy.png',
      alt: 'résultat final greffe capillaire turquie',
      duration: '12 mois',
      grafts: '3900 greffons',
      technique: 'DHI',
      description: 'Résultat exceptionnel technique premium',
      context: 'Patient de 38 ans ayant opté pour notre forfait premium DHI. Après 12 mois, le résultat dépasse les attentes avec une densité exceptionnelle et un aspect totalement naturel, validé par notre garantie satisfaction.'
    },
    {
      image: '/greffe cheveux turquie avant apres copy.png',
      alt: 'greffe cheveux FUE résultat naturel',
      duration: '10 mois',
      grafts: '3700 greffons',
      technique: 'FUE',
      description: 'Couverture homogène et naturelle',
      context: 'Patient de 36 ans présentant un début de calvitie. La greffe FUE de 3700 greffons a permis de densifier l\'ensemble de la zone tout en préservant un aspect totalement naturel, imperceptible même par un professionnel.'
    },
    {
      image: '/greffe cheveux turquie avant après, cliniqeo copy.png',
      alt: 'avant après greffe cheveux cliniqeo paris',
      duration: '11 mois',
      grafts: '4100 greffons',
      technique: 'FUE',
      description: 'Excellence médicale et résultat optimal',
      context: 'Patient de 44 ans accompagné par notre équipe parisienne. Ce cas illustre parfaitement notre engagement qualité : diagnostic précis, intervention experte et suivi rigoureux pour un résultat qui dépasse les attentes.'
    }
  ].map((result) => ({ ...result, image: getHairAssetUrl(result.image) }));

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Photos Avant Après Greffe de Cheveux Turquie
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Découvrez les transformations réelles de nos patients. Résultats naturels et durables garantis.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-[#2f6bfc] transition-all duration-300">
                <img
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-[#2f6bfc]">{result.duration}</span>
                    <span className="text-sm font-bold text-gray-700">{result.technique}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">{result.grafts}</p>
                  <p className="text-sm text-gray-700 mb-4 font-medium">{result.description}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{result.context}</p>
                </div>
              </div>
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
                Envoyez 3 photos de votre cuir chevelu et recevez votre diagnostic personnalisé sous 24h
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
