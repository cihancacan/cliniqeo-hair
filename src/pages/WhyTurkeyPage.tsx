import { Link } from 'react-router-dom';
import { Globe, Award, DollarSign, Building2, Users, TrendingUp } from 'lucide-react';

const WhyTurkeyPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pourquoi la Turquie est n°1 ?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            La Turquie s'est imposée comme la destination mondiale de référence pour la greffe de cheveux. Découvrez pourquoi.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#224671] mb-6">
                Istanbul : Capitale mondiale de la greffe capillaire
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Avec plus de 500 000 interventions réalisées chaque année, la Turquie traite plus de patients que tous les autres pays européens réunis. Istanbul concentre à elle seule plus de 300 cliniques spécialisées.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cette expertise massive a permis aux chirurgiens turcs de perfectionner les techniques FUE et DHI, faisant d'eux des références mondiales dans le domaine de la transplantation capillaire.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f3f3f3] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2f6bfc] mb-2">500k+</div>
                <p className="text-gray-700 font-semibold">Patients par an</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2f6bfc] mb-2">5000+</div>
                <p className="text-gray-700 font-semibold">Cliniques certifiées</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2f6bfc] mb-2">70%</div>
                <p className="text-gray-700 font-semibold">Moins cher</p>
              </div>
              <div className="bg-[#f3f3f3] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2f6bfc] mb-2">98%</div>
                <p className="text-gray-700 font-semibold">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Les 6 Raisons du Leadership Turc
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Expertise Exceptionnelle
              </h3>
              <p className="text-gray-700">
                Les chirurgiens turcs réalisent en moyenne 10 à 20 interventions par semaine, soit plus de 500 greffes par an. Cette pratique intensive garantit une maîtrise technique incomparable.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Rapport Qualité-Prix Imbattable
              </h3>
              <p className="text-gray-700">
                Le coût de la vie en Turquie permet d'offrir des tarifs 60 à 70% moins chers qu'en France, tout en maintenant des standards médicaux de niveau européen.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Technologie de Pointe
              </h3>
              <p className="text-gray-700">
                Les cliniques turques investissent massivement dans les équipements dernière génération : micro-moteurs, stylos CHOI, microscopes stéréoscopiques.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Cadre Médical Strict
              </h3>
              <p className="text-gray-700">
                Toutes les cliniques sont soumises au contrôle du Ministère de la Santé turc. Les certifications JCI et ISO sont la norme pour les établissements sérieux.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Accompagnement International
              </h3>
              <p className="text-gray-700">
                Les cliniques turques ont développé une expertise unique dans l'accueil des patients internationaux avec traducteurs, coordinateurs et services dédiés.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl hover-lift">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#224671] mb-4">
                Résultats Prouvés
              </h3>
              <p className="text-gray-700">
                Avec des millions de patients satisfaits, les cliniques turques affichent des taux de réussite supérieurs à 95% et des résultats naturels reconnus mondialement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Pourquoi Choisir la Turquie avec Cliniqeo ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avec Cliniqeo Hair, vous bénéficiez de tous les avantages de la Turquie, sécurisés par un accompagnement français professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-premium">
              <h3 className="text-3xl font-bold text-[#224671] mb-6">
                Les Avantages Turquie
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Prix attractifs</h4>
                    <p className="text-gray-700">Économisez 4000€ à 8000€ par rapport à la France</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Chirurgiens experts</h4>
                    <p className="text-gray-700">Plus de 10 ans d'expérience, 500+ interventions/an</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Disponibilité immédiate</h4>
                    <p className="text-gray-700">Intervention possible en 2 à 4 semaines</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Techniques modernes</h4>
                    <p className="text-gray-700">FUE et DHI avec équipements dernière génération</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Tout compris</h4>
                    <p className="text-gray-700">Hôtel, transferts, traducteur inclus dans le prix</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-premium">
              <h3 className="text-3xl font-bold text-[#224671] mb-6">
                La Sécurité Cliniqeo
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Agence française</h4>
                    <p className="text-gray-700">Communication facile, interlocuteurs francophones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Cliniques vérifiées</h4>
                    <p className="text-gray-700">Partenariats exclusifs avec établissements certifiés</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Transparence totale</h4>
                    <p className="text-gray-700">Devis détaillé, pas de frais cachés</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Suivi post-opératoire</h4>
                    <p className="text-gray-700">Accompagnement 12 mois par équipe française</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#6EC1E4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#224671] mb-1">Assistance 24/7</h4>
                    <p className="text-gray-700">Disponible avant, pendant et après votre séjour</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à profiter de l'expertise turque ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Faites confiance à Cliniqeo Hair pour une greffe de cheveux en Turquie en toute sérénité
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2f6bfc] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Demander mon diagnostic gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyTurkeyPage;
