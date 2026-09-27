import { Link } from 'react-router-dom';
import { Shield, Heart, Users, Award, CheckCircle } from 'lucide-react';
import { getHairAssetUrl } from '../config/hostedPath';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            À propos de Cliniqeo Hair
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Agence médicale française spécialisée dans la greffe de cheveux en Turquie. Votre confiance, notre priorité.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#224671] mb-6">
              Qui sommes-nous ?
            </h2>
          </div>

          <div className="mb-16">
            <img
              src={getHairAssetUrl('/IMAGE ACCEUIL CLINIQEO PARIS.png')}
              alt="Équipe Cliniqeo"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Cliniqeo Hair est la branche capillaire de Cliniqeo, agence médicale française spécialisée dans l'accompagnement de patients vers la Turquie pour des soins dentaires et capillaires de qualité.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Forte de plusieurs années d'expérience dans le tourisme médical, notre équipe francophone vous offre un accompagnement complet, transparent et sécurisé pour votre greffe de cheveux à Istanbul.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous travaillons exclusivement avec des cliniques partenaires certifiées, des chirurgiens expérimentés et des équipes médicales de renommée internationale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <div className="text-5xl font-semibold text-[#2f6bfc] mb-2">1000+</div>
                <p className="text-gray-700 font-semibold">Patients accompagnés</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <div className="text-5xl font-semibold text-[#2f6bfc] mb-2">98%</div>
                <p className="text-gray-700 font-semibold">Satisfaction client</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <div className="text-5xl font-semibold text-[#2f6bfc] mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Francophone</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <div className="text-5xl font-semibold text-[#2f6bfc] mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Assistance disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#224671] mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui guide notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl text-center hover-lift">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Sécurité</h3>
              <p className="text-gray-700">
                Cliniques certifiées, protocoles stricts, accompagnement professionnel à chaque étape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center hover-lift">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Transparence</h3>
              <p className="text-gray-700">
                Devis détaillé, communication claire, zéro frais caché. Vous savez tout dès le départ.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center hover-lift">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Proximité</h3>
              <p className="text-gray-700">
                Équipe française disponible, écoute active, réponses rapides, suivi personnalisé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center hover-lift">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Excellence</h3>
              <p className="text-gray-700">
                Partenaires sélectionnés, informations vérifiables et parcours coordonné avec transparence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2f6bfc] font-bold tracking-wider text-sm mb-3">CLINIQUE PARTENAIRE & MÉDECIN</p>
            <h2 className="text-4xl font-semibold text-[#224671] mb-5">
              Une prise en charge plus transparente à Istanbul
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l’Özel Oktay Tüney Polikliniği à Beşiktaş, le Dr Ersun Çobanoğlu, les espaces de prise en charge et les autorisations officielles de tourisme international de santé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <div
                className="aspect-[4/3] bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url("${getHairAssetUrl('/clinic/clinic-doctor-atlas.webp')}")`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: '0% 0%',
                }}
                role="img"
                aria-label="Façade de l’Özel Oktay Tüney Polikliniği à Istanbul"
              />
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#224671] mb-3">Özel Oktay Tüney Polikliniği</h3>
                <p className="text-gray-700 leading-relaxed">
                  Établissement partenaire situé à Beşiktaş, Istanbul, disposant d’une autorisation de tourisme international de santé.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <div
                className="aspect-[4/3] bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url("${getHairAssetUrl('/clinic/clinic-doctor-atlas.webp')}")`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: '0% 100%',
                }}
                role="img"
                aria-label="Dr Ersun Çobanoğlu"
              />
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#224671] mb-1">Dr Ersun Çobanoğlu</h3>
                <p className="font-semibold text-[#2f6bfc] mb-3">Médecin · Esthétique médicale</p>
                <p className="text-gray-700 leading-relaxed">
                  Diplômé de la Faculté de médecine de l’Université de Trakya, avec un parcours en milieu hospitalier public puis privé en Turquie.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-9">
            <Link
              to="/clinique-medecin"
              className="inline-flex items-center justify-center rounded-lg bg-[#224671] text-white px-7 py-4 font-semibold hover:bg-[#173a63] transition-colors"
            >
              Découvrir la clinique, le médecin et les autorisations
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#224671] mb-6">
              Notre Accompagnement Complet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la première consultation au suivi post-opératoire, nous sommes là à chaque étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#2f6bfc] text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                AVANT
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Préparation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Diagnostic capillaire gratuit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Analyse personnalisée par le chirurgien</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Devis détaillé transparent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Organisation complète du séjour</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Guide de préparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#6EC1E4] text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                PENDANT
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Séjour</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Accueil à l'aéroport</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Installation hôtel premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Traducteur francophone dédié</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Intervention avec chirurgien expert</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#6EC1E4] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Assistance 24/7 pendant le séjour</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#224671] text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                APRÈS
              </div>
              <h3 className="text-2xl font-semibold text-[#224671] mb-4">Suivi</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#224671] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Kit post-opératoire inclus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#224671] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Instructions détaillées en français</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#224671] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suivi médical à distance 12 mois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#224671] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Conseiller dédié disponible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#224671] mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suivi de la repousse</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Rejoignez nos patients satisfaits
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Plus de 1000 patients nous ont fait confiance pour leur greffe de cheveux en Turquie
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Commencer mon diagnostic gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
