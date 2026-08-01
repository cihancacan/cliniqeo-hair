import { ArrowRight, BookOpen, Languages } from 'lucide-react';
import SEOHead from '../components/SEOHead';

type Lang = 'fr' | 'en';
type GuideLink = readonly [href: string, title: string, description: string];
type GuideCategory = readonly [title: string, links: readonly GuideLink[]];

interface GuidesPageProps {
  lang: Lang;
}

const frCategories: readonly GuideCategory[] = [
  ['Greffe de cheveux en Turquie et prix', [
    ['/greffe-de-cheveux-turquie', 'Greffe de cheveux en Turquie', 'Guide général sur le diagnostic, les techniques, le séjour et le suivi.'],
    ['/implant-capillaire-turquie', 'Implant capillaire en Turquie', 'Comprendre le terme implant capillaire et préparer son projet.'],
    ['/implant-cheveux-turquie', 'Implant de cheveux en Turquie', 'Indications, zones à traiter et organisation du séjour.'],
    ['/meilleure-clinique-greffe-cheveux-turquie', 'Meilleure clinique de greffe de cheveux', 'Critères médicaux, avis, transparence et sécurité.'],
    ['/meilleure-clinique-implant-cheveux-turquie', 'Meilleure clinique pour implant cheveux', 'Comment comparer les équipes et les résultats.'],
    ['/meilleure-clinique-implant-capillaire-turquie', 'Meilleure clinique d’implant capillaire', 'Points à vérifier avant de réserver.'],
    ['/prix-greffe-de-cheveux-turquie', 'Prix d’une greffe de cheveux en Turquie', 'Tarifs, devis, forfaits et prestations incluses.'],
    ['/greffe-cheveux-prix-turquie', 'Greffe cheveux Turquie : prix', 'Facteurs qui influencent le coût final.'],
    ['/prix-implant-capillaire-turquie', 'Prix d’un implant capillaire en Turquie', 'Comprendre le devis et les éventuels suppléments.'],
    ['/implant-cheveux-turquie-prix', 'Implant cheveux Turquie : prix', 'Prix, technique, greffons et séjour.'],
    ['/greffe-de-cheveux-turquie-prix-tout-compris', 'Prix tout compris en Turquie', 'Intervention, hôtel, transferts, médicaments et suivi.'],
    ['/greffe-cheveux-turquie-tout-compris', 'Forfait greffe cheveux tout compris', 'Contenu réel d’un forfait et exclusions à contrôler.'],
    ['/greffe-cheveux-istanbul', 'Greffe de cheveux à Istanbul', 'Choix de la clinique, voyage, sécurité et suivi francophone.'],
    ['/greffe-cheveux-turquie-avis', 'Avis greffe de cheveux Turquie', 'Lire les témoignages et reconnaître les signaux d’alerte.'],
    ['/greffe-de-cheveux-turquie-avis', 'Greffe de cheveux Turquie : avis', 'Avis, résultats documentés et choix de l’équipe.'],
    ['/greffe-cheveux-turquie-avant-apres', 'Greffe cheveux avant/après', 'Analyser correctement les photos et les délais de repousse.'],
  ]],
  ['Techniques et déroulement', [
    ['/greffe-de-cheveux-fue-turquie', 'Greffe FUE en Turquie', 'Extraction folliculaire, implantation et cicatrisation.'],
    ['/greffe-de-cheveux-dhi-turquie', 'Greffe DHI en Turquie', 'Stylo implanteur, indications, avantages et limites.'],
    ['/fue-saphir-turquie', 'FUE Saphir en Turquie', 'Lame saphir, ouverture des canaux et résultat.'],
    ['/greffe-cheveux-saphir-turquie', 'Greffe cheveux Saphir', 'Technique, récupération et critères de choix.'],
    ['/dhi-ou-fue', 'DHI ou FUE ?', 'Comparaison des techniques selon le profil.'],
    ['/difference-fue-dhi', 'Différence entre FUE et DHI', 'Extraction, implantation, rasage, durée et densité.'],
    ['/meilleure-technique-greffe-cheveux', 'Meilleure technique de greffe', 'Pourquoi le choix dépend du diagnostic individuel.'],
    ['/greffe-cheveux-sans-rasage-turquie', 'Greffe sans rasage en Turquie', 'FUE non rasée, rasage partiel et discrétion.'],
    ['/greffe-cheveux-femme-sans-rasage', 'Greffe femme sans rasage', 'Solutions adaptées aux cheveux longs et aux petites zones.'],
    ['/douleur-greffe-cheveux-anesthesie', 'Douleur et anesthésie', 'Sensations attendues, anesthésie locale et surveillance.'],
    ['/greffe-cheveux-indolore-turquie', 'Greffe de cheveux indolore', 'Ce que signifie réellement une procédure dite indolore.'],
    ['/anesthesie-sans-aiguille-greffe-cheveux', 'Anesthésie sans aiguille', 'Fonctionnement, limites et anesthésie complémentaire.'],
  ]],
  ['Profils et zones à traiter', [
    ['/greffe-cheveux-femme-turquie', 'Greffe de cheveux pour femme', 'Diagnostic de l’alopécie et options sans rasage.'],
    ['/greffe-cheveux-afro-turquie', 'Greffe cheveux afro', 'Prélèvement de follicules courbés et implantation naturelle.'],
    ['/greffe-cheveux-crepus-turquie', 'Greffe cheveux crépus', 'Particularités des cheveux bouclés et crépus.'],
    ['/greffe-barbe-turquie', 'Greffe de barbe en Turquie', 'Dessin, nombre de greffons et orientation.'],
    ['/greffe-de-barbe-turquie', 'Greffe barbe Turquie', 'FUE de barbe, cicatrisation et résultat.'],
    ['/greffe-ligne-frontale-turquie', 'Greffe de ligne frontale', 'Dessin naturel, hauteur, angles et greffons simples.'],
    ['/ligne-frontale-naturelle-greffe-cheveux', 'Ligne frontale naturelle', 'Principes de dessin selon le visage et l’âge.'],
    ['/greffe-golfes-cheveux', 'Greffe des golfes', 'Traitement des tempes et conservation à long terme.'],
    ['/greffe-vertex-turquie', 'Greffe du vertex', 'Spirale, surface, densité et priorité des greffons.'],
    ['/greffe-tonsure-turquie', 'Greffe de la tonsure', 'Planification du vertex et maturation plus lente.'],
    ['/greffe-sourcils-turquie', 'Greffe de sourcils', 'Dessin, orientation très basse et entretien.'],
    ['/greffe-sourcils-avant-apres', 'Greffe sourcils avant/après', 'Évaluer la direction, la densité et le résultat.'],
    ['/greffe-cheveux-cicatrice', 'Greffe sur cicatrice', 'Stabilité, vascularisation et densité prudente.'],
    ['/nombre-greffons-greffe-cheveux', 'Combien de greffons ?', 'Estimation selon la zone et la réserve donneuse.'],
  ]],
  ['Zone donneuse, risques, soins et corrections', [
    ['/zone-donneuse-greffe-cheveux', 'Zone donneuse', 'Densité, calibre, réserve et prélèvement durable.'],
    ['/zone-donneuse-abimee-greffe-cheveux', 'Zone donneuse abîmée', 'Signes de sur-prélèvement et solutions possibles.'],
    ['/surprelevement-zone-donneuse', 'Sur-prélèvement de la zone donneuse', 'Prévention, diagnostic et options de camouflage.'],
    ['/greffe-cheveux-turquie-risques', 'Risques d’une greffe en Turquie', 'Complications possibles et prévention.'],
    ['/greffe-cheveux-turquie-danger', 'Dangers d’une greffe de cheveux', 'Signaux d’alerte et critères de sécurité.'],
    ['/reparer-greffe-cheveux-ratee', 'Réparer une greffe ratée', 'Ligne frontale, densité, angles, cicatrices et correction.'],
    ['/greffe-cheveux-ratee-turquie', 'Greffe de cheveux ratée en Turquie', 'Diagnostic et possibilités de reprise.'],
    ['/soins-apres-greffe-cheveux', 'Soins après la greffe', 'Lavage, sommeil, médicaments et protection.'],
    ['/premier-lavage-apres-greffe-cheveux', 'Premier lavage après greffe', 'Étapes, gestes à éviter et élimination des croûtes.'],
    ['/sport-apres-greffe-cheveux', 'Sport après une greffe', 'Reprise progressive selon l’effort et la cicatrisation.'],
    ['/prendre-avion-apres-greffe-cheveux', 'Prendre l’avion après une greffe', 'Voyage, gonflement et précautions.'],
    ['/soleil-apres-greffe-cheveux', 'Soleil après une greffe', 'Protection de la peau et reprise de l’exposition.'],
    ['/apres-greffe-cheveux-mois-par-mois', 'Évolution mois par mois', 'Chute transitoire, repousse et maturation.'],
    ['/deuxieme-greffe-cheveux-turquie', 'Deuxième greffe de cheveux', 'Délai, densification et réserve restante.'],
  ]],
];

const enCategories: readonly GuideCategory[] = [
  ['Hair transplant in Turkey and cost', [
    ['/hair-transplant-turkey', 'Hair Transplant in Turkey', 'Complete guide to assessment, techniques, travel and follow-up.'],
    ['/turkey-hair-transplant', 'Turkey Hair Transplant', 'Treatment planning, donor area and expected timeline.'],
    ['/hair-transplant-in-turkey', 'Hair Transplant in Turkey Guide', 'Medical assessment, clinic selection and travel.'],
    ['/best-hair-transplant-turkey', 'Best Hair Transplant in Turkey', 'How to compare clinics, teams and documented results.'],
    ['/turkey-hair-transplant-cost', 'Turkey Hair Transplant Cost', 'Pricing, packages and quote verification.'],
    ['/hair-transplant-turkey-cost', 'Hair Transplant Turkey Cost', 'Factors that influence the final cost.'],
    ['/hair-transplant-turkey-price', 'Hair Transplant Turkey Price', 'Technique, graft planning and included services.'],
    ['/turkey-hair-transplant-prices', 'Turkey Hair Transplant Prices', 'Compare packages without overlooking medical quality.'],
    ['/how-much-hair-transplant-turkey', 'How Much Is a Hair Transplant in Turkey?', 'Understand cost ranges and possible extras.'],
    ['/en/hair-transplant-istanbul', 'Hair Transplant in Istanbul', 'Clinic selection, travel, safety and support.'],
    ['/en/all-inclusive-hair-transplant-turkey', 'All-Inclusive Hair Transplant', 'Procedure, hotel, transfers, medicines and follow-up.'],
    ['/en/hair-transplant-turkey-reviews', 'Hair Transplant Turkey Reviews', 'How to assess testimonials and warning signs.'],
    ['/hair-transplant-turkey-reviews', 'Turkey Hair Transplant Reviews', 'Reviews, documented results and clinic selection.'],
    ['/en/hair-transplant-turkey-before-after', 'Hair Transplant Before and After', 'How to compare photographs and growth timelines.'],
  ]],
  ['Techniques and procedure', [
    ['/fue-hair-transplant-turkey', 'FUE Hair Transplant Turkey', 'Follicular extraction, placement and healing.'],
    ['/dhi-hair-transplant-turkey', 'DHI Hair Transplant Turkey', 'Implanter pen, indications, advantages and limits.'],
    ['/en/sapphire-fue-hair-transplant-turkey', 'Sapphire FUE Turkey', 'Sapphire blades, channels, recovery and cost.'],
    ['/en/dhi-vs-fue-hair-transplant', 'DHI vs FUE', 'Compare placement, shaving, density and recovery.'],
    ['/en/no-shave-hair-transplant-turkey', 'No-Shave Hair Transplant', 'Unshaven FUE, partial shaving and discretion.'],
    ['/en/hair-transplant-pain-anesthesia', 'Hair Transplant Pain and Anaesthesia', 'Expected sensations, local anaesthesia and warning signs.'],
  ]],
  ['Patient profiles and treatment areas', [
    ['/en/female-hair-transplant-turkey', 'Female Hair Transplant', 'Diagnosis, no-shave options and indications.'],
    ['/en/afro-hair-transplant-turkey', 'Afro Hair Transplant', 'Curved follicles, extraction and natural placement.'],
    ['/en/beard-transplant-turkey', 'Beard Transplant Turkey', 'Design, graft count, angles and healing.'],
    ['/en/hairline-transplant-turkey', 'Hairline Transplant Turkey', 'Natural design, temples, angles and single-hair grafts.'],
    ['/en/crown-hair-transplant-turkey', 'Crown Hair Transplant Turkey', 'Whorl pattern, graft priorities and maturation.'],
    ['/en/eyebrow-transplant-turkey', 'Eyebrow Transplant Turkey', 'Design, very low angles and maintenance.'],
    ['/en/hair-transplant-on-scar', 'Hair Transplant on a Scar', 'Scar stability, blood supply and conservative density.'],
    ['/en/hair-transplant-graft-count', 'How Many Hair Grafts?', 'Estimate needs by treatment area and donor capacity.'],
  ]],
  ['Donor area, risks, aftercare and repair', [
    ['/en/hair-transplant-donor-area', 'Hair Transplant Donor Area', 'Density, reserve, overharvesting and protection.'],
    ['/en/hair-transplant-turkey-risks', 'Hair Transplant Turkey Risks', 'Potential complications and prevention.'],
    ['/en/hair-transplant-repair-turkey', 'Hair Transplant Repair Turkey', 'Assessment, hairline, scarring and corrective options.'],
    ['/en/hair-transplant-aftercare', 'Hair Transplant Aftercare', 'Washing, sleeping, exercise, flying and sun.'],
    ['/en/hair-transplant-recovery-timeline', 'Hair Transplant Recovery Timeline', 'Crusts, shedding, regrowth and maturation.'],
    ['/en/second-hair-transplant-turkey', 'Second Hair Transplant Turkey', 'Timing, donor reserve and density improvement.'],
  ]],
];

export default function GuidesPage({ lang }: GuidesPageProps) {
  const isFr = lang === 'fr';
  const path = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';
  const alternate = isFr ? '/en/hair-transplant-guides' : '/guides-greffe-cheveux';
  const categories = isFr ? frCategories : enCategories;
  const pageCount = categories.reduce((total, [, links]) => total + links.length, 0);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEOHead
        title={isFr ? 'Guides sur la greffe de cheveux en Turquie' : 'Hair Transplant Turkey Guides'}
        description={isFr
          ? 'Bibliothèque complète des pages Cliniqeo Hair sur les prix, techniques, zones, risques, soins, résultats et corrections.'
          : 'Complete Cliniqeo Hair library covering prices, techniques, treatment areas, risks, aftercare, results and repair.'}
        path={path}
        lang={lang}
        alternates={[{ lang: isFr ? 'en' : 'fr', path: alternate }]}
      />

      <section className="bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5"><BookOpen size={34} /><span className="font-semibold">Cliniqeo Hair</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {isFr ? 'Guides et informations capillaires' : 'Hair transplant guides and information'}
          </h1>
          <p className="text-xl max-w-4xl text-blue-50">
            {isFr
              ? `${pageCount} pages d’information classées par thème pour préparer votre diagnostic, votre séjour et votre suivi.`
              : `${pageCount} information pages organised by topic to prepare your assessment, trip and follow-up.`}
          </p>
          <a href={alternate} className="inline-flex items-center gap-2 mt-7 bg-white/15 px-4 py-2 rounded-lg hover:bg-white/25">
            <Languages size={18} /> {isFr ? 'Read in English' : 'Lire en français'}
          </a>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {categories.map(([category, links]) => (
          <section key={category}>
            <h2 className="text-3xl font-bold text-[#224671] mb-7">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {links.map(([href, title, description]) => (
                <a key={href} href={href} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-[#224671] mb-3">{title}</h3>
                  <p className="text-slate-600 mb-5">{description}</p>
                  <span className="inline-flex items-center gap-2 text-[#2f6bfc] font-semibold">
                    {isFr ? 'Lire la page' : 'Read the page'} <ArrowRight size={18} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
