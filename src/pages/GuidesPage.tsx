import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Languages } from 'lucide-react';
import SEOHead from '../components/SEOHead';

type Lang = 'fr' | 'en';

type Guide = {
  href: string;
  title: string;
  description: string;
};

type GuideCategory = {
  title: string;
  introduction: string;
  guides: Guide[];
};

interface GuidesPageProps {
  lang: Lang;
}

const categories: Record<Lang, GuideCategory[]> = {
  fr: [
    {
      title: 'Préparer son projet en Turquie',
      introduction: 'Les pages essentielles pour comprendre le séjour, le prix, le choix de la clinique et les résultats attendus.',
      guides: [
        { href: '/greffe-de-cheveux-turquie', title: 'Greffe de cheveux en Turquie', description: 'Guide général sur le diagnostic, les techniques, le séjour, la sécurité et le suivi.' },
        { href: '/prix-greffe-de-cheveux-turquie', title: 'Prix d’une greffe de cheveux', description: 'Comprendre les tarifs, les forfaits, les prestations incluses et les éléments du devis.' },
        { href: '/greffe-cheveux-istanbul', title: 'Greffe de cheveux à Istanbul', description: 'Choisir une équipe, organiser le déplacement et vérifier la prise en charge.' },
        { href: '/greffe-cheveux-turquie-tout-compris', title: 'Forfait tout compris', description: 'Intervention, hôtel, transferts, médicaments, interprétariat et suivi.' },
        { href: '/greffe-cheveux-turquie-avis', title: 'Avis et choix d’une clinique', description: 'Analyser les témoignages, les photos et les signaux d’alerte.' },
        { href: '/greffe-cheveux-turquie-avant-apres', title: 'Résultats avant et après', description: 'Comparer correctement la lumière, la densité, la ligne frontale et la zone donneuse.' },
      ],
    },
    {
      title: 'Techniques de greffe capillaire',
      introduction: 'Les différences entre les méthodes, leurs indications, leurs limites et leur récupération.',
      guides: [
        { href: '/greffe-de-cheveux-fue-turquie', title: 'Greffe FUE en Turquie', description: 'Prélèvement folliculaire, implantation, cicatrisation et résultats.' },
        { href: '/greffe-de-cheveux-dhi-turquie', title: 'Greffe DHI en Turquie', description: 'Stylo implanteur, densité, rasage, avantages et limites.' },
        { href: '/fue-saphir-turquie', title: 'FUE Saphir', description: 'Lame saphir, ouverture des canaux, indications et précautions.' },
        { href: '/dhi-ou-fue', title: 'DHI ou FUE ?', description: 'Comparer implantation, durée, rasage, densité et récupération.' },
        { href: '/greffe-cheveux-sans-rasage-turquie', title: 'Greffe sans rasage', description: 'Rasage partiel, FUE non rasée et long hair FUE.' },
        { href: '/douleur-greffe-cheveux-anesthesie', title: 'Douleur et anesthésie', description: 'Sensations pendant l’intervention, anesthésie locale et signes d’alerte.' },
      ],
    },
    {
      title: 'Profils et zones à traiter',
      introduction: 'Des informations adaptées aux caractéristiques du patient et à la zone receveuse.',
      guides: [
        { href: '/greffe-cheveux-femme-turquie', title: 'Greffe de cheveux pour femme', description: 'Diagnostic de l’alopécie, ligne frontale, rasage et indications.' },
        { href: '/greffe-cheveux-afro-turquie', title: 'Cheveux afro et crépus', description: 'Extraction des follicules courbés et protection de la zone donneuse.' },
        { href: '/greffe-barbe-turquie', title: 'Greffe de barbe', description: 'Dessin, angles d’implantation, greffons et cicatrisation.' },
        { href: '/greffe-ligne-frontale-turquie', title: 'Ligne frontale et golfes', description: 'Hauteur, irrégularité naturelle, greffons simples et orientation.' },
        { href: '/greffe-vertex-turquie', title: 'Vertex et tonsure', description: 'Spirale naturelle, priorité de traitement et consommation de greffons.' },
        { href: '/greffe-sourcils-turquie', title: 'Greffe de sourcils', description: 'Dessin, direction très couchée des poils, entretien et résultat.' },
        { href: '/greffe-cheveux-cicatrice', title: 'Greffe sur cicatrice', description: 'Vascularisation, stabilité de la cicatrice, densité et limites.' },
      ],
    },
    {
      title: 'Planification, sécurité et suivi',
      introduction: 'Les sujets importants pour protéger la zone donneuse, prévenir les complications et suivre la repousse.',
      guides: [
        { href: '/nombre-greffons-greffe-cheveux', title: 'Combien de greffons ?', description: 'Estimation selon la surface, le calibre des cheveux et la réserve disponible.' },
        { href: '/zone-donneuse-greffe-cheveux', title: 'Zone donneuse', description: 'Densité, miniaturisation, prélèvement raisonnable et réserve future.' },
        { href: '/greffe-cheveux-turquie-risques', title: 'Risques et prévention', description: 'Infection, faible repousse, sur-prélèvement, cicatrices et shock loss.' },
        { href: '/reparer-greffe-cheveux-ratee', title: 'Réparer une greffe ratée', description: 'Diagnostic, greffons mal placés, ligne artificielle et solutions de correction.' },
        { href: '/soins-apres-greffe-cheveux', title: 'Soins après la greffe', description: 'Lavage, sommeil, sport, avion, soleil et médicaments.' },
        { href: '/apres-greffe-cheveux-mois-par-mois', title: 'Évolution mois par mois', description: 'Croûtes, chute transitoire, début de repousse et maturation.' },
        { href: '/deuxieme-greffe-cheveux-turquie', title: 'Deuxième greffe de cheveux', description: 'Délai, état de la zone donneuse et objectifs réalistes.' },
      ],
    },
  ],
  en: [
    {
      title: 'Planning treatment in Turkey',
      introduction: 'Essential information about travel, prices, clinic selection and expected outcomes.',
      guides: [
        { href: '/hair-transplant-turkey', title: 'Hair Transplant in Turkey', description: 'General guide to assessment, techniques, travel, safety and aftercare.' },
        { href: '/turkey-hair-transplant-cost', title: 'Hair Transplant Cost', description: 'Understand prices, packages, included services and quote details.' },
        { href: '/en/hair-transplant-istanbul', title: 'Hair Transplant in Istanbul', description: 'Select a team, organise travel and verify patient support.' },
        { href: '/en/all-inclusive-hair-transplant-turkey', title: 'All-Inclusive Package', description: 'Procedure, hotel, transfers, medicines, interpretation and follow-up.' },
        { href: '/en/hair-transplant-turkey-reviews', title: 'Reviews and Clinic Selection', description: 'Assess testimonials, photographs and warning signs.' },
        { href: '/en/hair-transplant-turkey-before-after', title: 'Before and After Results', description: 'Compare lighting, density, hairline design and donor-area appearance.' },
      ],
    },
    {
      title: 'Hair transplant techniques',
      introduction: 'Differences between methods, patient selection, limitations and recovery.',
      guides: [
        { href: '/fue-hair-transplant-turkey', title: 'FUE Hair Transplant', description: 'Follicular extraction, placement, healing and results.' },
        { href: '/dhi-hair-transplant-turkey', title: 'DHI Hair Transplant', description: 'Implanter pen, density, shaving, advantages and limitations.' },
        { href: '/en/sapphire-fue-hair-transplant-turkey', title: 'Sapphire FUE', description: 'Sapphire blades, recipient sites, indications and precautions.' },
        { href: '/en/dhi-vs-fue-hair-transplant', title: 'DHI vs FUE', description: 'Compare placement, duration, shaving, density and recovery.' },
        { href: '/en/no-shave-hair-transplant-turkey', title: 'No-Shave Hair Transplant', description: 'Partial shaving, unshaven FUE and long-hair FUE.' },
        { href: '/en/hair-transplant-pain-anesthesia', title: 'Pain and Anaesthesia', description: 'Expected sensations, local anaesthesia and warning signs.' },
      ],
    },
    {
      title: 'Patient profiles and treatment areas',
      introduction: 'Information adapted to the patient’s characteristics and recipient area.',
      guides: [
        { href: '/en/female-hair-transplant-turkey', title: 'Female Hair Transplant', description: 'Hair-loss diagnosis, hairline design, shaving and indications.' },
        { href: '/en/afro-hair-transplant-turkey', title: 'Afro and Coily Hair', description: 'Extraction of curved follicles and donor-area protection.' },
        { href: '/en/beard-transplant-turkey', title: 'Beard Transplant', description: 'Design, placement angles, graft count and healing.' },
        { href: '/en/hairline-transplant-turkey', title: 'Hairline and Temples', description: 'Height, natural irregularity, single-hair grafts and direction.' },
        { href: '/en/crown-hair-transplant-turkey', title: 'Crown Hair Transplant', description: 'Natural whorl, treatment priority and graft requirements.' },
        { href: '/en/eyebrow-transplant-turkey', title: 'Eyebrow Transplant', description: 'Design, flat hair direction, maintenance and results.' },
        { href: '/en/hair-transplant-on-scar', title: 'Hair Transplant on a Scar', description: 'Blood supply, scar stability, density and limitations.' },
      ],
    },
    {
      title: 'Planning, safety and aftercare',
      introduction: 'Important topics for protecting the donor area, preventing complications and monitoring growth.',
      guides: [
        { href: '/en/hair-transplant-graft-count', title: 'How Many Grafts?', description: 'Estimate by surface area, hair calibre and available donor reserve.' },
        { href: '/en/hair-transplant-donor-area', title: 'Donor Area', description: 'Density, miniaturisation, conservative extraction and future reserve.' },
        { href: '/en/hair-transplant-turkey-risks', title: 'Risks and Prevention', description: 'Infection, poor growth, overharvesting, scarring and shock loss.' },
        { href: '/en/hair-transplant-repair-turkey', title: 'Hair Transplant Repair', description: 'Assessment, misplaced grafts, unnatural hairlines and corrective options.' },
        { href: '/en/hair-transplant-aftercare', title: 'Hair Transplant Aftercare', description: 'Washing, sleeping, exercise, flying, sun and medication.' },
        { href: '/en/hair-transplant-recovery-timeline', title: 'Recovery Timeline', description: 'Crusts, temporary shedding, early growth and maturation.' },
        { href: '/en/second-hair-transplant-turkey', title: 'Second Hair Transplant', description: 'Timing, donor-area status and realistic objectives.' },
      ],
    },
  ],
};

export default function GuidesPage({ lang }: GuidesPageProps) {
  const isFr = lang === 'fr';
  const path = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';
  const alternate = isFr ? '/en/hair-transplant-guides' : '/guides-greffe-cheveux';

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEOHead
        title={isFr ? 'Guides sur la greffe de cheveux en Turquie' : 'Hair Transplant Turkey Guides'}
        description={isFr
          ? 'Tous les guides Cliniqeo Hair sur les prix, techniques, zones, risques, soins et résultats d’une greffe de cheveux en Turquie.'
          : 'All Cliniqeo Hair guides about prices, techniques, treatment areas, risks, aftercare and hair transplant results in Turkey.'}
        path={path}
        lang={lang}
        alternates={[{ lang: isFr ? 'en' : 'fr', path: alternate }]}
      />

      <section className="bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5"><BookOpen size={32} /><span className="font-semibold">Cliniqeo Hair</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {isFr ? 'Guides et informations capillaires' : 'Hair transplant guides and information'}
          </h1>
          <p className="text-xl max-w-4xl text-blue-50">
            {isFr
              ? 'Une bibliothèque organisée par thème pour comprendre les techniques, préparer le séjour et prendre une décision mieux informée.'
              : 'A topic-based library to understand techniques, prepare for travel and make a better-informed decision.'}
          </p>
          <Link to={alternate} className="inline-flex items-center gap-2 mt-7 bg-white/15 px-4 py-2 rounded-lg hover:bg-white/25">
            <Languages size={18} /> {isFr ? 'English version' : 'Version française'}
          </Link>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {categories[lang].map((category) => (
          <section key={category.title}>
            <div className="max-w-3xl mb-7">
              <h2 className="text-3xl font-bold text-[#224671] mb-3">{category.title}</h2>
              <p className="text-slate-600 text-lg">{category.introduction}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.guides.map((guide) => (
                <Link key={guide.href} to={guide.href} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-[#224671] mb-3 group-hover:text-[#2f6bfc]">{guide.title}</h3>
                  <p className="text-slate-600 mb-5 leading-relaxed">{guide.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#2f6bfc] font-semibold">
                    {isFr ? 'Consulter' : 'Read'} <ArrowRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
