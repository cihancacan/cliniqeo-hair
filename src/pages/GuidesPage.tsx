import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Languages } from 'lucide-react';
import SEOHead from '../components/SEOHead';

type Lang = 'fr' | 'en';

interface GuidesPageProps {
  lang: Lang;
}

const guides = {
  fr: [
    ['/greffe-de-cheveux-turquie', 'Greffe de cheveux en Turquie', 'Guide général : techniques, sécurité, séjour et résultats.'],
    ['/prix-greffe-de-cheveux-turquie', 'Prix d’une greffe de cheveux en Turquie', 'Tarifs, forfaits et points à contrôler dans le devis.'],
    ['/greffe-de-cheveux-fue-turquie', 'Greffe FUE en Turquie', 'Extraction folliculaire, cicatrisation et indications.'],
    ['/greffe-de-cheveux-dhi-turquie', 'Greffe DHI en Turquie', 'Stylo implanteur, densité, avantages et limites.'],
    ['/greffe-cheveux-istanbul', 'Greffe de cheveux à Istanbul', 'Choisir une clinique et organiser le séjour.'],
    ['/greffe-cheveux-turquie-tout-compris', 'Forfait tout compris', 'Intervention, hôtel, transferts et suivi.'],
    ['/greffe-cheveux-turquie-avis', 'Avis et choix d’une clinique', 'Lire les avis et reconnaître les signaux d’alerte.'],
    ['/greffe-cheveux-turquie-avant-apres', 'Avant et après', 'Analyser correctement les résultats photographiques.'],
    ['/greffe-cheveux-femme-turquie', 'Greffe de cheveux pour femme', 'Diagnostic, sans rasage et indications féminines.'],
    ['/greffe-cheveux-afro-turquie', 'Greffe cheveux afro et crépus', 'Expertise liée aux follicules courbés.'],
    ['/greffe-barbe-turquie', 'Greffe de barbe en Turquie', 'Dessin, FUE, greffons et cicatrisation.'],
    ['/nombre-greffons-greffe-cheveux', 'Combien de greffons ?', 'Estimation selon les zones et la capacité donneuse.'],
    ['/greffe-cheveux-turquie-risques', 'Risques et prévention', 'Complications possibles et critères de sécurité.'],
    ['/apres-greffe-cheveux-mois-par-mois', 'Évolution mois par mois', 'Croûtes, chute transitoire et étapes de repousse.'],
    ['/fue-saphir-turquie', 'FUE Saphir en Turquie', 'Lame saphir, canaux, indications, limites et prix.'],
    ['/dhi-ou-fue', 'DHI ou FUE ?', 'Comparer implantation, rasage, densité et récupération.'],
    ['/greffe-cheveux-sans-rasage-turquie', 'Greffe sans rasage', 'FUE non rasée, rasage partiel et long hair FUE.'],
    ['/douleur-greffe-cheveux-anesthesie', 'Douleur et anesthésie', 'Sensations, anesthésie locale et signes d’alerte.'],
    ['/zone-donneuse-greffe-cheveux', 'Zone donneuse', 'Densité, réserve, sur-prélèvement et protection.'],
    ['/reparer-greffe-cheveux-ratee', 'Réparer une greffe ratée', 'Diagnostic, ligne frontale, cicatrices et correction.'],
    ['/soins-apres-greffe-cheveux', 'Soins après la greffe', 'Lavage, sommeil, sport, avion et soleil.'],
    ['/greffe-ligne-frontale-turquie', 'Greffe de ligne frontale', 'Dessin naturel, golfes, angles et greffons simples.'],
    ['/greffe-vertex-turquie', 'Greffe du vertex', 'Tonsure, spirale, priorité et nombre de greffons.'],
    ['/greffe-sourcils-turquie', 'Greffe de sourcils', 'Dessin, orientation, entretien et résultats.'],
    ['/greffe-cheveux-cicatrice', 'Greffe sur cicatrice', 'Vascularisation, stabilité, densité et limites.'],
    ['/deuxieme-greffe-cheveux-turquie', 'Deuxième greffe', 'Délai, réserve donneuse et densification.'],
  ],
  en: [
    ['/hair-transplant-turkey', 'Hair Transplant in Turkey', 'Complete guide to techniques, safety, travel and results.'],
    ['/turkey-hair-transplant-cost', 'Hair Transplant Cost in Turkey', 'Pricing, packages and quote verification.'],
    ['/fue-hair-transplant-turkey', 'FUE Hair Transplant in Turkey', 'Follicular extraction, healing and indications.'],
    ['/dhi-hair-transplant-turkey', 'DHI Hair Transplant in Turkey', 'Implanter pen, density, benefits and limits.'],
    ['/en/hair-transplant-istanbul', 'Hair Transplant in Istanbul', 'Clinic selection and travel planning.'],
    ['/en/all-inclusive-hair-transplant-turkey', 'All-Inclusive Package', 'Procedure, hotel, transfers and follow-up.'],
    ['/en/hair-transplant-turkey-reviews', 'Reviews and Clinic Selection', 'How to assess reviews and warning signs.'],
    ['/en/hair-transplant-turkey-before-after', 'Before and After Results', 'How to compare hair transplant outcomes.'],
    ['/en/female-hair-transplant-turkey', 'Female Hair Transplant', 'Diagnosis, no-shave options and indications.'],
    ['/en/afro-hair-transplant-turkey', 'Afro Hair Transplant', 'Expertise for curved and coily follicles.'],
    ['/en/beard-transplant-turkey', 'Beard Transplant in Turkey', 'Design, FUE, graft planning and healing.'],
    ['/en/hair-transplant-graft-count', 'How Many Grafts?', 'Estimate by treatment area and donor capacity.'],
    ['/en/hair-transplant-turkey-risks', 'Risks and Prevention', 'Possible complications and safety criteria.'],
    ['/en/hair-transplant-recovery-timeline', 'Recovery Timeline', 'Crusts, temporary shedding and monthly growth.'],
    ['/en/sapphire-fue-hair-transplant-turkey', 'Sapphire FUE in Turkey', 'Sapphire blades, channels, indications and cost.'],
    ['/en/dhi-vs-fue-hair-transplant', 'DHI vs FUE', 'Compare placement, shaving, density and recovery.'],
    ['/en/no-shave-hair-transplant-turkey', 'No-Shave Hair Transplant', 'Unshaven FUE, partial shaving and long-hair FUE.'],
    ['/en/hair-transplant-pain-anesthesia', 'Pain and Anaesthesia', 'Expected sensations, local anaesthesia and warning signs.'],
    ['/en/hair-transplant-donor-area', 'Donor Area', 'Density, reserve, overharvesting and protection.'],
    ['/en/hair-transplant-repair-turkey', 'Hair Transplant Repair', 'Assessment, hairline, scarring and corrective options.'],
    ['/en/hair-transplant-aftercare', 'Hair Transplant Aftercare', 'Washing, sleeping, exercise, flying and sun.'],
    ['/en/hairline-transplant-turkey', 'Hairline Transplant', 'Natural design, temples, angles and single-hair grafts.'],
    ['/en/crown-hair-transplant-turkey', 'Crown Hair Transplant', 'Whorl design, priorities and graft planning.'],
    ['/en/eyebrow-transplant-turkey', 'Eyebrow Transplant', 'Design, direction, maintenance and results.'],
    ['/en/hair-transplant-on-scar', 'Hair Transplant on Scar', 'Blood supply, stability, density and limitations.'],
    ['/en/second-hair-transplant-turkey', 'Second Hair Transplant', 'Timing, donor reserve and density improvement.'],
  ],
} as const;

export default function GuidesPage({ lang }: GuidesPageProps) {
  const isFr = lang === 'fr';
  const path = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';
  const alternate = isFr ? '/en/hair-transplant-guides' : '/guides-greffe-cheveux';

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEOHead
        title={isFr ? 'Guides sur la greffe de cheveux en Turquie' : 'Hair Transplant Turkey Guides'}
        description={isFr
          ? 'Tous les guides Cliniqeo Hair sur la greffe de cheveux en Turquie : prix, techniques, zones, sécurité, soins, réparations et récupération.'
          : 'All Cliniqeo Hair guides about hair transplantation in Turkey: prices, techniques, treatment areas, safety, aftercare, repair and recovery.'}
        path={path}
        lang={lang}
        alternates={[{ lang: isFr ? 'en' : 'fr', path: alternate }]}
      />

      <section className="bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5"><BookOpen size={34} /><span className="font-semibold">Cliniqeo Hair</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {isFr ? 'Guides sur la greffe de cheveux en Turquie' : 'Hair Transplant Turkey Guides'}
          </h1>
          <p className="text-xl max-w-4xl text-blue-50">
            {isFr
              ? 'Retrouvez toutes nos pages d’information par sujet, avec des réponses structurées pour préparer votre diagnostic et votre séjour.'
              : 'Browse all our topic-based information pages with structured answers to prepare your assessment and medical trip.'}
          </p>
          <Link to={alternate} className="inline-flex items-center gap-2 mt-7 bg-white/15 px-4 py-2 rounded-lg hover:bg-white/25">
            <Languages size={18} /> {isFr ? 'Read in English' : 'Lire en français'}
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides[lang].map(([href, title, description]) => (
            <Link key={href} to={href} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <h2 className="text-xl font-bold text-[#224671] mb-3">{title}</h2>
              <p className="text-slate-600 mb-5">{description}</p>
              <span className="inline-flex items-center gap-2 text-[#2f6bfc] font-semibold">
                {isFr ? 'Lire le guide' : 'Read the guide'} <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
