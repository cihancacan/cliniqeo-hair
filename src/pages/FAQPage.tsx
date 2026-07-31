import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const faqData: FAQItem[] = [
    {
      category: 'Principe',
      question: 'Comment fonctionne une greffe de cheveux FUE ?',
      answer: 'La technique FUE (Follicular Unit Extraction) consiste à prélever les follicules pileux un par un depuis la zone donneuse à l\'arrière du crâne avec un micro-punch de 0,7 à 1 mm, puis à les implanter dans les zones à densifier. Cette méthode ne laisse aucune cicatrice linéaire visible.'
    },
    {
      category: 'Principe',
      question: 'Quelle est la différence entre FUE et DHI ?',
      answer: 'La FUE prélève les greffons qui sont ensuite implantés manuellement. La DHI (Direct Hair Implantation) utilise un stylo implanteur CHOI qui permet d\'implanter directement le greffon sans créer d\'incisions préalables, offrant une précision maximale et une récupération plus rapide.'
    },
    {
      category: 'Principe',
      question: 'La greffe de cheveux est-elle douloureuse ?',
      answer: 'Non, l\'intervention se fait sous anesthésie locale. Vous ne ressentez aucune douleur pendant l\'opération. Après l\'intervention, des douleurs légères peuvent survenir mais sont facilement gérables avec les antalgiques prescrits.'
    },
    {
      category: 'Principe',
      question: 'Combien de greffons faut-il pour une calvitie avancée ?',
      answer: 'Pour une calvitie avancée (Norwood 5-6), il faut généralement entre 3500 et 5000 greffons. Le chirurgien évalue précisément vos besoins lors du diagnostic en fonction de votre densité donneuse et de la surface à couvrir.'
    },
    {
      category: 'Principe',
      question: 'Peut-on faire une greffe de cheveux à 50 ou 60 ans ?',
      answer: 'Oui, il n\'y a pas de limite d\'âge supérieure pour une greffe de cheveux. L\'important est d\'avoir une zone donneuse suffisante et une bonne santé générale. Beaucoup de patients de 50-60 ans obtiennent d\'excellents résultats.'
    },
    {
      category: 'Principe',
      question: 'Les résultats sont-ils permanents ?',
      answer: 'Oui, les cheveux greffés sont définitifs car ils proviennent de la zone donneuse résistante à la chute. Ils ne retomberont jamais. Vous gardez vos cheveux greffés toute votre vie.'
    },
    {
      category: 'Principe',
      question: 'Peut-on rattraper une ancienne greffe ratée ?',
      answer: 'Oui, nous réalisons régulièrement des greffes de correction. Le chirurgien évalue la zone donneuse restante et propose une stratégie pour corriger les imperfections et densifier les zones mal couvertes.'
    },
    {
      category: 'Principe',
      question: 'Combien de temps dure une séance de greffe ?',
      answer: 'Une intervention FUE ou DHI dure en moyenne 6 à 8 heures selon le nombre de greffons. Des pauses régulières sont prévues pour votre confort.'
    },
    {
      category: 'Turquie',
      question: 'Pourquoi faire une greffe de cheveux en Turquie ?',
      answer: 'La Turquie est leader mondial avec plus de 500 000 interventions par an. Les chirurgiens turcs ont une expertise exceptionnelle, les cliniques sont équipées des dernières technologies, et les prix sont 60 à 70% moins chers qu\'en France tout en maintenant des standards européens.'
    },
    {
      category: 'Turquie',
      question: 'La Turquie est-elle fiable pour un implant capillaire ?',
      answer: 'Oui, à condition de choisir une agence sérieuse comme Cliniqeo qui sélectionne des cliniques certifiées. La Turquie accueille des patients du monde entier grâce à son expertise reconnue internationalement.'
    },
    {
      category: 'Turquie',
      question: 'Comment sont formés les chirurgiens turcs ?',
      answer: 'Les chirurgiens turcs suivent une formation médicale complète de 6 ans plus une spécialisation en transplantation capillaire. Avec 500+ interventions par an, leur pratique intensive garantit une maîtrise technique exceptionnelle.'
    },
    {
      category: 'Turquie',
      question: 'Les prix en Turquie sont-ils vraiment moins chers ?',
      answer: 'Oui, une greffe FUE coûte 1 990€ en Turquie contre 6 000 à 8 000€ en France. Cette différence s\'explique par le coût de la vie plus bas, sans compromis sur la qualité médicale.'
    },
    {
      category: 'Sécurité',
      question: 'La greffe en Turquie est-elle sécurisée ?',
      answer: 'Oui, nos cliniques partenaires sont certifiées JCI et ISO, respectent les normes d\'hygiène européennes, et utilisent du matériel stérile à usage unique. Avec Cliniqeo, vous bénéficiez d\'un accompagnement français qui sécurise chaque étape.'
    },
    {
      category: 'Sécurité',
      question: 'Quels risques ou complications possibles ?',
      answer: 'Les complications sont rares (moins de 2%). Les effets secondaires temporaires peuvent inclure : gonflement du front (2-3 jours), rougeurs (1 semaine), chute de choc des cheveux existants (temporaire). Les infections sont exceptionnelles avec une bonne hygiène.'
    },
    {
      category: 'Sécurité',
      question: 'Est-ce stérile et conforme aux normes européennes ?',
      answer: 'Oui, nos cliniques partenaires respectent strictement les protocoles de stérilisation européens : blocs opératoires dédiés, matériel à usage unique, équipes en tenue stérile, contrôles réguliers du Ministère de la Santé turc.'
    },
    {
      category: 'Séjour',
      question: 'Combien de jours faut-il rester en Turquie ?',
      answer: 'Le séjour standard est de 3 nuits et 4 jours : J1 arrivée et analyses, J2 intervention, J3 premier lavage et contrôle, J4 retour. Ce format est optimal pour la greffe et la récupération initiale.'
    },
    {
      category: 'Séjour',
      question: 'L\'hôtel et les transferts sont-ils inclus ?',
      answer: 'Oui, tout est inclus dans nos forfaits : hôtel 4 ou 5 étoiles (3 nuits en chambre single), transferts VIP aéroport-hôtel-clinique-aéroport, petit-déjeuner. Seul le billet d\'avion reste à votre charge.'
    },
    {
      category: 'Séjour',
      question: 'Puis-je venir accompagné ?',
      answer: 'Oui, votre accompagnant peut séjourner avec vous moyennant un supplément de 350€ qui couvre l\'hôtel et les transferts. C\'est souvent rassurant d\'être accompagné.'
    },
    {
      category: 'Séjour',
      question: 'Dois-je prévoir un interprète ?',
      answer: 'Non, un traducteur francophone est inclus dans votre forfait. Il vous accompagne lors de tous les rendez-vous médicaux et reste disponible pendant votre séjour.'
    },
    {
      category: 'Prix',
      question: 'Combien coûte une greffe FUE en Turquie ?',
      answer: 'Notre forfait FUE tout compris est à 1 990€ (jusqu\'à 4000 greffons) incluant l\'intervention, l\'hôtel 4 étoiles 3 nuits, les transferts VIP, le traducteur, le kit post-opératoire et le suivi 12 mois.'
    },
    {
      category: 'Prix',
      question: 'Quel est le prix d\'une greffe DHI ?',
      answer: 'Notre forfait DHI premium est à 2 490€ (jusqu\'à 4000 greffons) incluant la technique DHI avec stylo CHOI, l\'hôtel 5 étoiles, le PRP capillaire, tous les services et le suivi 12 mois.'
    },
    {
      category: 'Prix',
      question: 'Que comprend le prix final ?',
      answer: 'Le prix inclut : consultation médicale, intervention complète (greffons illimités selon besoin), hôtel premium 3 nuits, transferts VIP, traducteur francophone, médicaments, kit post-opératoire, certificat médical, suivi 12 mois. Seul le vol n\'est pas inclus.'
    },
    {
      category: 'Prix',
      question: 'Existe-t-il un paiement en plusieurs fois ?',
      answer: 'Oui, nous proposons des facilités de paiement. Contactez-nous pour discuter d\'un échéancier adapté à votre situation. Un acompte est généralement demandé à la réservation.'
    },
    {
      category: 'Candidats',
      question: 'Faut-il avoir des cheveux pour faire une greffe ?',
      answer: 'Non, même en cas de calvitie totale, si vous avez une zone donneuse suffisante à l\'arrière et sur les côtés du crâne, une greffe est possible. Le chirurgien évalue votre densité donneuse lors du diagnostic.'
    },
    {
      category: 'Candidats',
      question: 'La greffe marche-t-elle pour les femmes ?',
      answer: 'Oui, la greffe de cheveux fonctionne très bien chez les femmes souffrant de perte de densité, d\'éclaircissement ou de calvitie féminine. Le diagnostic permet de vérifier que vous êtes candidate.'
    },
    {
      category: 'Candidats',
      question: 'Peut-on faire une greffe de barbe ?',
      answer: 'Oui, nous proposons la greffe de barbe à 1 790€. C\'est idéal pour densifier une barbe clairsemée, combler des trous, ou créer une barbe complète. Les greffons proviennent de votre cuir chevelu.'
    },
    {
      category: 'Candidats',
      question: 'Est-ce adapté aux cheveux crépus ?',
      answer: 'Oui, la greffe FUE et DHI fonctionnent parfaitement sur cheveux crépus, afro ou frisés. Nos chirurgiens ont l\'expertise nécessaire pour travailler avec tous les types de cheveux et adapter la technique.'
    },
    {
      category: 'Post-opératoire',
      question: 'Quels soins après une greffe de cheveux ?',
      answer: 'Vous recevez un kit complet avec shampoing spécial, lotion apaisante et médicaments. Le premier lavage se fait à la clinique. Ensuite, vous lavez délicatement vos cheveux chaque jour pendant 10 jours. Instructions détaillées fournies en français.'
    },
    {
      category: 'Post-opératoire',
      question: 'Quand repousse le cheveu greffé ?',
      answer: 'Timeline complète : J0-J15 croûtes tombent, Mois 1-3 chute des cheveux greffés (normal), Mois 3-4 début de repousse, Mois 6 résultat visible à 50%, Mois 12 résultat final à 100%.'
    },
    {
      category: 'Post-opératoire',
      question: 'Quand peut-on reprendre le sport ?',
      answer: 'Activités légères : après 1 semaine. Sports modérés : après 2 semaines. Sports intenses et piscine : après 1 mois. Évitez la transpiration excessive les premiers jours pour favoriser la cicatrisation.'
    },
    {
      category: 'Post-opératoire',
      question: 'Quand puis-je porter une casquette ?',
      answer: 'Vous pouvez porter une casquette large et souple après 10 jours, une fois les croûtes complètement tombées. Évitez les casquettes serrées pendant le premier mois pour ne pas comprimer les greffons.'
    },
    {
      category: 'Post-opératoire',
      question: 'Quand puis-je retourner au travail ?',
      answer: 'La plupart des patients reprennent le travail après 7 à 10 jours, une fois les croûtes tombées. Si votre travail n\'est pas physique, vous pouvez reprendre après 5 jours avec une casquette souple.'
    },
    {
      category: 'Résultats',
      question: 'À quoi ressemble le résultat à 1 mois ?',
      answer: 'À 1 mois, les croûtes sont tombées, la zone est cicatrisée, mais les cheveux greffés entrent en phase de chute (c\'est normal). Vous semblez revenir à l\'état initial, mais les follicules sont bien implantés.'
    },
    {
      category: 'Résultats',
      question: 'À quoi ressemble le résultat à 6 mois ?',
      answer: 'À 6 mois, vous voyez environ 50 à 60% du résultat final. Les cheveux commencent à avoir une bonne densité et longueur. C\'est le moment où vous commencez vraiment à apprécier le changement.'
    },
    {
      category: 'Résultats',
      question: 'Combien de temps pour un résultat final ?',
      answer: 'Le résultat final est visible à 12 mois. Les cheveux ont atteint leur densité maximale et leur texture définitive. Certains patients continuent d\'améliorer légèrement jusqu\'à 18 mois.'
    },
    {
      category: 'Résultats',
      question: 'La greffe donne-t-elle un résultat naturel ?',
      answer: 'Oui, avec la FUE et la DHI modernes, le résultat est totalement naturel. Les cheveux poussent dans le bon angle et la bonne direction. Personne ne peut deviner que vous avez fait une greffe.'
    },
    {
      category: 'Cliniqeo',
      question: 'Qui sont vos cliniques partenaires ?',
      answer: 'Nous travaillons exclusivement avec des cliniques certifiées JCI et ISO à Istanbul, équipées des dernières technologies FUE et DHI. Nos chirurgiens partenaires ont plus de 10 ans d\'expérience et réalisent plus de 500 interventions par an.'
    },
    {
      category: 'Cliniqeo',
      question: 'Êtes-vous une agence française ?',
      answer: 'Oui, Cliniqeo est une agence médicale française. Nous sommes basés en France avec une équipe francophone qui vous accompagne avant, pendant et après votre séjour en Turquie. Communication facile et transparence totale.'
    },
    {
      category: 'Cliniqeo',
      question: 'Comment envoyer mes photos pour un diagnostic ?',
      answer: 'Cliquez sur "Diagnostic Gratuit" et remplissez le formulaire. Envoyez 4 photos : face (0°), profil (45° gauche/droite), dessus (90°), zone donneuse arrière. Vous recevez une réponse sous 24h avec estimation greffons et devis.'
    },
    {
      category: 'Cliniqeo',
      question: 'Comment obtenir un devis pour ma greffe ?',
      answer: 'Le devis est gratuit et sans engagement. Envoyez vos photos via notre formulaire de contact, ou appelez-nous directement. Un conseiller analyse votre cas et vous envoie un devis détaillé personnalisé sous 24h.'
    },
  ];

  const categories = ['Tous', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = selectedCategory === 'Tous'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Toutes les réponses à vos questions sur la greffe de cheveux en Turquie
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#2f6bfc] text-white shadow-lg'
                    : 'bg-[#f3f3f3] text-[#224671] hover:bg-[#e0e0e0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#2f6bfc] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[#f3f3f3] transition-colors duration-300"
                >
                  <span className="text-xl font-bold text-[#224671] pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#2f6bfc] flex-shrink-0" size={28} />
                  ) : (
                    <ChevronDown className="text-[#2f6bfc] flex-shrink-0" size={28} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-8 py-6 bg-[#f3f3f3] border-t-2 border-gray-200">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#2f6bfc] to-[#6EC1E4] text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Notre équipe francophone est disponible pour répondre à toutes vos questions
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2f6bfc] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
