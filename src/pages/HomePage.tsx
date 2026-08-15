import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Users, Award, Heart, ArrowRight, Calendar, HeartHandshake, Star, Phone } from 'lucide-react';
import { getHairAssetUrl } from '../config/hostedPath';

const HomePage = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-[#224671] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900/90"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#2f6bfc] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6EC1E4] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-6 md:mb-8 inline-flex items-center bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20">
                <Award className="mr-2 text-[#6EC1E4]" size={18} />
                <span className="text-xs md:text-sm font-semibold">Clinique certifiée • +15 000 patients accompagnés</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Votre greffe de cheveux en Turquie dès <span className="text-[#6EC1E4]">199€/mois</span>
              </h1>

              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#6EC1E4]">
                Et si votre vie changeait aujourd'hui ?
              </p>

              <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
                La perte de cheveux n'est pas une fatalité. Votre confiance peut revenir plus vite que vous ne l'imaginez.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center mr-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                  </div>
                  <div className="text-[#224671]">
                    <span className="font-bold text-sm">4,9/5</span>
                    <span className="text-xs text-gray-600 ml-1">+2300 avis</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center bg-[#6EC1E4] text-[#224671] px-8 py-3 rounded-full text-base font-bold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
                </Link>
              </div>
            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-10 max-w-6xl mx-auto mb-8 md:mb-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start text-left">
                <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold text-lg mb-1">Accompagnement complet 100% francophone</div>
                  <p className="text-gray-300 text-sm">De la consultation au suivi post-op, en français</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold text-lg mb-1">Clinique certifiée internationale</div>
                  <p className="text-gray-300 text-sm">Standards d'excellence, équipement dernière génération</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold text-lg mb-1">Séjour tout compris organisé</div>
                  <p className="text-gray-300 text-sm">Hôtel 5*, transferts VIP, traducteur personnel</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-bold text-lg mb-1">Paiement flexible en 10 fois</div>
                  <p className="text-gray-300 text-sm">Seulement 199€/mois, tout compris sans frais cachés</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2f6bfc] to-[#6EC1E4] rounded-2xl p-6 text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">199€/mois</div>
              <div className="text-xl mb-4">Paiement en 10 fois • Greffe complète jusqu'à 5000 greffons</div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-[#224671] px-6 py-3 rounded-xl text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className="mb-12 text-center">
            <p className="text-xl md:text-2xl font-bold mb-4">
              Obtenez votre diagnostic gratuit en 30 secondes
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Décrivez simplement votre situation, recevez une réponse sous 24h
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-[#6EC1E4] text-[#224671] px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <span>Demander mon diagnostic</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
              </Link>
              <a
                href="tel:+33188842222"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
              >
                <Phone className="mr-2 flex-shrink-0" size={20} />
                <span>Appel gratuit 01 88 84 22 22</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="mr-2 text-[#6EC1E4]" size={18} />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 text-[#6EC1E4]" size={18} />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center">
              <HeartHandshake className="mr-2 text-[#6EC1E4]" size={18} />
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">
              Pourquoi Cliniqeo Hair transforme des vies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus qu'une greffe capillaire, c'est une renaissance personnelle que nous vous offrons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#2f6bfc] transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2f6bfc] opacity-5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-[#224671] mb-4">
                  Accompagnement francophone total
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  De votre premier message jusqu'à votre dernier rendez-vous de suivi, vous êtes pris en charge par une équipe française dédiée. Zéro stress, zéro incompréhension.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Consultation vidéo en français</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Assistance 24/7 par WhatsApp</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Traducteur personnel sur place</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#2f6bfc] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#224671] transition-all duration-300"
                >
                  Réserver ma consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#2f6bfc] transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2f6bfc] opacity-5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-[#224671] mb-4">
                  Clinique d'excellence internationale
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Partenariat exclusif avec une clinique de renommée internationale, dirigée par des standards européens. Technologie de pointe, hygiène irréprochable, résultats exceptionnels.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Certification JCI internationale</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Chirurgiens +15 ans d'expérience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Équipement dernière génération</span>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#2f6bfc] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#224671] transition-all duration-300"
                >
                  Découvrir notre clinique
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-[#2f6bfc] transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2f6bfc] opacity-5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-[#224671] mb-4">
                  Prix accessible, qualité premium
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Dès 199€/mois en 10 fois sans frais. La même qualité qu'en France ou en Allemagne pour jusqu'à 70% moins cher. Aucun frais caché, transparence totale.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Paiement en 10 fois sans frais</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Devis transparent et détaillé</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="text-[#2f6bfc] mr-2 flex-shrink-0" size={16} />
                    <span>Garantie satisfaction</span>
                  </div>
                </div>
                <Link
                  to="/pricing"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#2f6bfc] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#224671] transition-all duration-300"
                >
                  Voir nos tarifs
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#224671] to-[#2f6bfc] rounded-3xl p-10 md:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">
                  Tout est inclus dans votre forfait
                </h3>
                <p className="text-xl text-blue-100 mb-8">
                  Un séjour clé en main pensé pour votre confort et votre tranquillité d'esprit
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Greffe FUE ou DHI jusqu'à 5000 greffons</div>
                      <p className="text-blue-100 text-sm">Technique choisie selon votre profil</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Hôtel 5 étoiles 3 nuits avec petit-déjeuner</div>
                      <p className="text-blue-100 text-sm">Confort et bien-être garantis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Transferts VIP privés (aéroport-hôtel-clinique)</div>
                      <p className="text-blue-100 text-sm">Véhicule confortable à disposition</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Traducteur francophone personnel</div>
                      <p className="text-blue-100 text-sm">Communication fluide garantie</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Analyses sanguines et médicaments</div>
                      <p className="text-blue-100 text-sm">Kit post-opératoire complet</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1">Suivi médical personnalisé 12 mois</div>
                      <p className="text-blue-100 text-sm">Accompagnement jusqu'au résultat final</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold mb-4">1 990€</div>
                    <div className="text-2xl mb-2">Ou seulement</div>
                    <div className="text-5xl font-bold text-[#6EC1E4] mb-2">199€/mois</div>
                    <div className="text-lg text-blue-100">Paiement en 10 fois sans frais</div>
                  </div>

                  <div className="h-px bg-white/20 mb-8"></div>

                  <div className="space-y-4 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-1">0€</div>
                      <div className="text-sm text-blue-100">Frais cachés</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">24h</div>
                      <div className="text-sm text-blue-100">Réponse diagnostic</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">98%</div>
                      <div className="text-sm text-blue-100">Satisfaction client</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">
              Photos Avant Après Greffe de Cheveux Turquie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Résultats naturels et durables obtenus par nos patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant apres.png')}
                alt="greffe de cheveux avant après homme résultat naturel"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">12 mois • 3500 greffons • Technique DHI</p>
                <p className="text-xs text-gray-500 mt-1">Résultat naturel avec densité optimale en zone frontale</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant après copy.png')}
                alt="greffe cheveux FUE avant après résultat"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">10 mois • 4000 greffons • Technique FUE</p>
                <p className="text-xs text-gray-500 mt-1">Transformation complète avec ligne frontale redéfinie</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant après copy copy.png')}
                alt="implant capillaire turquie avant après"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">9 mois • 3200 greffons • Technique DHI</p>
                <p className="text-xs text-gray-500 mt-1">Densité remarquable et aspect totalement naturel</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant après, cliniqeo.png')}
                alt="greffe cheveux turquie cliniqeo résultat"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">11 mois • 4500 greffons • Technique FUE</p>
                <p className="text-xs text-gray-500 mt-1">Couverture maximale des zones dégarnies</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant après copy copy copy.png')}
                alt="DHI implantation directe résultat avant après"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">8 mois • 3000 greffons • Technique DHI</p>
                <p className="text-xs text-gray-500 mt-1">Récupération rapide et résultat harmonieux</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img
                src={getHairAssetUrl('/greffe cheveux turquie avant après copy copy copy copy.png')}
                alt="greffe capillaire turquie avant après"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 font-semibold">12 mois • 3800 greffons • Technique FUE</p>
                <p className="text-xs text-gray-500 mt-1">Résultat final dense et naturel</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/greffe-cheveux/avant-apres"
              className="inline-flex items-center justify-center bg-[#2f6bfc] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#224671] transition-all duration-300 shadow-lg"
            >
              Voir plus de résultats
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">
              FUE ou DHI : la technique adaptée à votre profil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos experts vous conseillent la méthode la plus efficace selon votre situation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 hover:border-[#2f6bfc] transition-all duration-300">
              <div className="bg-gradient-to-br from-[#2f6bfc] to-[#1e50d4] p-6 md:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide mb-2 opacity-80">Technique</div>
                    <h3 className="text-4xl font-bold mb-2">FUE</h3>
                    <p className="text-base md:text-lg opacity-90">Follicular Unit Extraction</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/30 whitespace-nowrap">
                    <div className="text-xs md:text-sm opacity-80 mb-1">À partir de</div>
                    <div className="text-2xl md:text-3xl font-bold">1 990€</div>
                    <div className="text-xs md:text-sm opacity-80">ou 199€/mois</div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  La technique de référence mondiale, éprouvée et documentée. Extraction précise follicule par follicule pour un rendu ultra-naturel.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Cicatrisation invisible</div>
                      <p className="text-sm text-gray-600">Aucune cicatrice visible, récupération rapide</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Idéale pour grandes surfaces</div>
                      <p className="text-sm text-gray-600">Traite efficacement les calvities étendues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Résultat très naturel</div>
                      <p className="text-sm text-gray-600">Densité homogène et harmonieuse</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/seo/greffe-cheveux-fue-turquie"
                    className="mt-8 flex items-center justify-center w-full bg-[#2f6bfc] text-white py-4 rounded-xl font-bold hover:bg-[#224671] transition-all duration-300"
                  >
                    En savoir plus sur la FUE
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full bg-white text-[#2f6bfc] py-4 rounded-xl font-bold border-2 border-[#2f6bfc] hover:bg-blue-50 transition-all duration-300"
                  >
                    Demander un devis FUE
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 hover:border-[#6EC1E4] transition-all duration-300">
              <div className="bg-gradient-to-br from-[#6EC1E4] to-[#4da8cc] p-6 md:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide mb-2 opacity-80">Technique</div>
                    <h3 className="text-4xl font-bold mb-2">DHI</h3>
                    <p className="text-base md:text-lg opacity-90">Direct Hair Implantation</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-white/30 whitespace-nowrap">
                    <div className="text-xs md:text-sm opacity-80 mb-1">À partir de</div>
                    <div className="text-2xl md:text-3xl font-bold">2 490€</div>
                    <div className="text-xs md:text-sm opacity-80">ou 249€/mois</div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  La technique la plus moderne avec stylo implanteur CHOI. Précision maximale et récupération express pour un résultat optimal.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Stylo implanteur CHOI</div>
                      <p className="text-sm text-gray-600">Précision chirurgicale au millimètre</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Récupération ultra-rapide</div>
                      <p className="text-sm text-gray-600">Retour à la vie normale immédiat</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-[#224671]">Densité maximale garantie</div>
                      <p className="text-sm text-gray-600">Contrôle parfait angle et profondeur</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/seo/greffe-cheveux-dhi-turquie"
                    className="mt-8 flex items-center justify-center w-full bg-[#6EC1E4] text-white py-4 rounded-xl font-bold hover:bg-[#4da8cc] transition-all duration-300"
                  >
                    En savoir plus sur la DHI
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full bg-white text-[#6EC1E4] py-4 rounded-xl font-bold border-2 border-[#6EC1E4] hover:bg-blue-50 transition-all duration-300"
                  >
                    Demander un devis DHI
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">
              Ce que disent nos patients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 15 000 patients nous ont fait confiance pour retrouver leur confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Résultat incroyable après 10 mois. L'équipe française m'a rassuré du début à la fin !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JM
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Jean-Marc P.</div>
                  <div className="text-xs text-gray-600">Paris • FUE</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Organisation parfaite : hôtel 5*, transferts, traducteur. Prix imbattable pour cette qualité !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  TD
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Thomas D.</div>
                  <div className="text-xs text-gray-600">Lyon • DHI</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "À 45 ans j'ai franchi le pas. Le suivi 12 mois est rassurant, résultat ultra naturel !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  AL
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Antoine L.</div>
                  <div className="text-xs text-gray-600">Marseille • FUE</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Clinique impeccable, chirurgien expert. 6 mois après je retrouve ma jeunesse !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  PM
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Pierre M.</div>
                  <div className="text-xs text-gray-600">Toulouse • FUE</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Meilleur investissement de ma vie. Confiance retrouvée, aucune cicatrice visible !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  NB
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Nicolas B.</div>
                  <div className="text-xs text-gray-600">Bordeaux • DHI</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Accompagnement exceptionnel, tout était prévu. Mes collègues n'ont rien remarqué !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  FB
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Fabien B.</div>
                  <div className="text-xs text-gray-600">Nantes • FUE</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Opération sans douleur, récupération rapide. 8 mois après le résultat est bluffant !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MD
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Maxime D.</div>
                  <div className="text-xs text-gray-600">Lille • DHI</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                  <Star className="fill-yellow-400" size={16} />
                </div>
                <span className="ml-2 text-xs text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                "Tarif transparent sans surprise. Le paiement en 10 fois m'a permis de me lancer !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  RG
                </div>
                <div className="ml-2">
                  <div className="font-bold text-[#224671] text-sm">Romain G.</div>
                  <div className="text-xs text-gray-600">Nice • FUE</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border-2 border-blue-100">
              <div className="flex items-center mr-3">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
              </div>
              <div className="text-[#224671]">
                <span className="font-bold text-lg">4,9/5</span>
                <span className="text-sm text-gray-600 ml-2">sur +2 300 avis Google vérifiés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir avant de vous lancer
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-[#2f6bfc] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">
                  Comment fonctionne une greffe de cheveux FUE ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  La technique FUE (Follicular Unit Extraction) consiste à prélever les follicules pileux un par un depuis la zone donneuse à l'arrière du crâne avec un micro-punch de 0,7 à 1 mm, puis à les implanter dans les zones à densifier. Cette méthode ne laisse aucune cicatrice linéaire visible.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-[#2f6bfc] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">
                  Quelle est la différence entre FUE et DHI ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  La FUE prélève les greffons qui sont ensuite implantés manuellement. La DHI (Direct Hair Implantation) utilise un stylo implanteur CHOI qui permet d'implanter directement le greffon sans créer d'incisions préalables, offrant une précision maximale et une récupération plus rapide.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-[#2f6bfc] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">
                  La greffe de cheveux est-elle douloureuse ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Non, l'intervention se fait sous anesthésie locale. Vous ne ressentez aucune douleur pendant l'opération. Après l'intervention, des douleurs légères peuvent survenir mais sont facilement gérables avec les antalgiques prescrits.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-[#2f6bfc] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">
                  Les résultats sont-ils permanents ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Oui, les cheveux greffés sont définitifs car ils proviennent de la zone donneuse résistante à la chute. Ils ne retomberont jamais. Vous gardez vos cheveux greffés toute votre vie.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-[#2f6bfc] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#224671] mb-3">
                  Combien coûte une greffe de cheveux en Turquie ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos forfaits all-inclusive commencent à 1 990€ (199€/mois sur 10 mois) pour une greffe FUE complète jusqu'à 5 000 greffons. Ce prix inclut l'intervention, l'hôtel 5*, tous les transferts, le traducteur, et le suivi 12 mois.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center bg-[#2f6bfc] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#224671] transition-all duration-300 shadow-lg"
            >
              Voir toutes les questions
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#224671] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Votre transformation commence maintenant
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Décrivez votre situation et recevez une première orientation personnalisée sous 24h
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Gratuit • Sans engagement • Réponse garantie en 24h par nos chirurgiens experts
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center bg-[#6EC1E4] text-[#224671] px-16 py-7 rounded-2xl text-2xl font-bold hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 mb-12"
          >
            Envoyer ma demande maintenant
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15 000+</div>
              <div className="text-blue-100">Patients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Réponse garantie</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">199€</div>
              <div className="text-blue-100">Par mois seulement</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
