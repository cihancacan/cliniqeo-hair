import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';
import { getSiteLanguage } from './config/localizedRoutes';
import { canonicalHairPath, DENTAL_EN_BASE, DENTAL_FR_BASE, HAIR_EN_BASE, HAIR_FR_BASE } from './config/siteRoutes';
import SEOHead from './components/SEOHead';

const PortalHomePage = lazy(() => import('./pages/PortalHomePage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const TechniquesPage = lazy(() => import('./pages/TechniquesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const WhyTurkeyPage = lazy(() => import('./pages/WhyTurkeyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const BeforeAfterPage = lazy(() => import('./pages/BeforeAfterPage'));
const EnglishHomePage = lazy(() => import('./pages/en/EnglishHomePage'));
const EnglishGeneralPage = lazy(() => import('./pages/en/EnglishGeneralPage'));
const EnglishContactPage = lazy(() => import('./pages/en/EnglishContactPage'));
const EnglishPricingPage = lazy(() => import('./pages/en/EnglishPricingPage'));
const GreffeCheveuxTurquie = lazy(() => import('./pages/seo/GreffeCheveuxTurquie'));
const GreffeCheveuxFUETurquie = lazy(() => import('./pages/seo/GreffeCheveuxFUETurquie'));
const GreffeCheveuxDHITurquie = lazy(() => import('./pages/seo/GreffeCheveuxDHITurquie'));
const PrixGreffeCheveuxTurquie = lazy(() => import('./pages/seo/PrixGreffeCheveuxTurquie'));
const HairTransplantTurkey = lazy(() => import('./pages/seo/HairTransplantTurkey'));
const TurkeyHairTransplantCost = lazy(() => import('./pages/seo/TurkeyHairTransplantCost'));
const SeoLandingPage = lazy(() => import('./pages/seo/SeoLandingPage'));
const SeoAdvancedPage = lazy(() => import('./pages/seo/SeoAdvancedPage'));
const BestClinicPage = lazy(() => import('./pages/seo/BestClinicPage'));
const LocalSeoPage = lazy(() => import('./pages/seo/LocalSeoPage'));
const LocalSeoDirectoryPage = lazy(() => import('./pages/seo/LocalSeoDirectoryPage'));
const LocalSeoMasterDirectoryPage = lazy(() => import('./pages/seo/LocalSeoMasterDirectoryPage'));
const FrenchDentalHomePage = lazy(() => import('./pages/dental/FrenchDentalHomePage'));
const EnglishDentalHomePage = lazy(() => import('./pages/dental/EnglishDentalHomePage'));
const DentalLocalSeoPage = lazy(() => import('./pages/dental/DentalLocalSeoPage'));
const DentalLocalDirectoryPage = lazy(() => import('./pages/dental/DentalLocalDirectoryPage'));

function LanguageRouteSync() {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();

  useLayoutEffect(() => {
    const detected = getSiteLanguage(pathname);
    if (detected !== language) setLanguage(detected);
    document.documentElement.lang = detected;
  }, [pathname, language, setLanguage]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

const departmentMetadata = {
  [HAIR_FR_BASE]: {
    title: 'Greffe de cheveux en Turquie : FUE, DHI, prix et accompagnement',
    description: 'Préparez votre greffe de cheveux en Turquie : diagnostic, FUE ou DHI, prix, hôtel, transferts, suivi et accompagnement francophone.',
  },
  [`${HAIR_FR_BASE}/techniques`]: {
    title: 'Techniques de greffe de cheveux : FUE Saphir et DHI',
    description: 'Comparez la FUE Saphir et la DHI, leurs indications, leurs limites et les critères médicaux qui déterminent le choix de la technique.',
  },
  [`${HAIR_FR_BASE}/tarifs`]: {
    title: 'Prix d’une greffe de cheveux en Turquie et prestations incluses',
    description: 'Consultez les tarifs de greffe capillaire en Turquie, les prestations incluses, les conditions et les éléments à comparer dans chaque devis.',
  },
  [`${HAIR_FR_BASE}/turquie`]: {
    title: 'Pourquoi choisir la Turquie pour une greffe de cheveux ?',
    description: 'Comprenez les avantages, les limites et les critères de sécurité à vérifier avant d’organiser une greffe de cheveux en Turquie.',
  },
  [`${HAIR_FR_BASE}/a-propos`]: {
    title: 'À propos de Cliniqeo Hair',
    description: 'Découvrez le rôle de Cliniqeo Hair dans l’accompagnement et l’organisation des parcours de greffe de cheveux en Turquie.',
  },
  [`${HAIR_FR_BASE}/faq`]: {
    title: 'Questions fréquentes sur la greffe de cheveux en Turquie',
    description: 'Réponses sur la FUE, la DHI, la douleur, les greffons, le séjour, le suivi, les risques et les résultats d’une greffe capillaire.',
  },
  [`${HAIR_FR_BASE}/contact`]: {
    title: 'Diagnostic capillaire et devis personnalisé',
    description: 'Contactez Cliniqeo Hair pour une première évaluation de votre projet de greffe de cheveux en Turquie et un devis détaillé.',
  },
  [`${HAIR_FR_BASE}/avant-apres`]: {
    title: 'Greffe de cheveux avant après : résultats et évolution',
    description: 'Consultez des résultats avant après et comprenez l’évolution d’une greffe de cheveux au fil des mois, de la cicatrisation à la repousse.',
  },
  [HAIR_EN_BASE]: {
    title: 'Hair transplant in Turkey: FUE, DHI, cost and support',
    description: 'Plan a hair transplant in Turkey with English-speaking support: assessment, FUE or DHI, written cost, hotel, transfers and follow-up.',
  },
} as const;

function DepartmentRouteSEO() {
  const { pathname } = useLocation();
  const metadata = departmentMetadata[pathname as keyof typeof departmentMetadata];
  if (!metadata) return null;
  const isEnglish = pathname === HAIR_EN_BASE;
  return <SEOHead title={metadata.title} description={metadata.description} path={pathname} lang={isEnglish ? 'en' : 'fr'} contentType="website" />;
}

function PageLoader() {
  return (
    <div className="min-h-[45vh] pt-32 flex items-center justify-center bg-white" role="status" aria-live="polite">
      <div className="h-10 w-10 rounded-full border-4 border-blue-100 border-t-[#2f6bfc] animate-spin" aria-label="Chargement" />
    </div>
  );
}

const frLandingRoutes = [
  ['/greffe-de-cheveux-turquie-prix-tout-compris', 'allInclusive'],
  ['/greffe-cheveux-istanbul', 'istanbul'],
  ['/greffe-cheveux-turquie-tout-compris', 'allInclusive'],
  ['/greffe-cheveux-turquie-avis', 'reviews'],
  ['/greffe-de-cheveux-turquie-avis', 'reviews'],
  ['/greffe-cheveux-turquie-avant-apres', 'beforeAfter'],
  ['/greffe-cheveux-femme-turquie', 'women'],
  ['/greffe-cheveux-afro-turquie', 'afro'],
  ['/greffe-cheveux-crepus-turquie', 'afro'],
  ['/greffe-barbe-turquie', 'beard'],
  ['/greffe-de-barbe-turquie', 'beard'],
  ['/nombre-greffons-greffe-cheveux', 'grafts'],
  ['/greffe-cheveux-turquie-risques', 'risks'],
  ['/greffe-cheveux-turquie-danger', 'risks'],
  ['/apres-greffe-cheveux-mois-par-mois', 'recovery'],
] as const;

const frAdvancedRoutes = [
  ['/fue-saphir-turquie', 'sapphireFue'],
  ['/greffe-cheveux-saphir-turquie', 'sapphireFue'],
  ['/dhi-ou-fue', 'dhiVsFue'],
  ['/difference-fue-dhi', 'dhiVsFue'],
  ['/meilleure-technique-greffe-cheveux', 'dhiVsFue'],
  ['/greffe-cheveux-sans-rasage-turquie', 'noShave'],
  ['/greffe-cheveux-femme-sans-rasage', 'noShave'],
  ['/douleur-greffe-cheveux-anesthesie', 'pain'],
  ['/greffe-cheveux-indolore-turquie', 'pain'],
  ['/anesthesie-sans-aiguille-greffe-cheveux', 'pain'],
  ['/zone-donneuse-greffe-cheveux', 'donorArea'],
  ['/zone-donneuse-abimee-greffe-cheveux', 'donorArea'],
  ['/surprelevement-zone-donneuse', 'donorArea'],
  ['/reparer-greffe-cheveux-ratee', 'repair'],
  ['/greffe-cheveux-ratee-turquie', 'repair'],
  ['/soins-apres-greffe-cheveux', 'aftercare'],
  ['/premier-lavage-apres-greffe-cheveux', 'aftercare'],
  ['/sport-apres-greffe-cheveux', 'aftercare'],
  ['/prendre-avion-apres-greffe-cheveux', 'aftercare'],
  ['/soleil-apres-greffe-cheveux', 'aftercare'],
  ['/greffe-ligne-frontale-turquie', 'hairline'],
  ['/ligne-frontale-naturelle-greffe-cheveux', 'hairline'],
  ['/greffe-golfes-cheveux', 'hairline'],
  ['/greffe-vertex-turquie', 'crown'],
  ['/greffe-tonsure-turquie', 'crown'],
  ['/greffe-sourcils-turquie', 'eyebrows'],
  ['/greffe-sourcils-avant-apres', 'eyebrows'],
  ['/greffe-cheveux-cicatrice', 'scar'],
  ['/deuxieme-greffe-cheveux-turquie', 'secondTransplant'],
] as const;

const enLandingRoutes = [
  ['/en/hair-transplant-istanbul', 'istanbul'],
  ['/en/all-inclusive-hair-transplant-turkey', 'allInclusive'],
  ['/en/hair-transplant-turkey-reviews', 'reviews'],
  ['/hair-transplant-turkey-reviews', 'reviews'],
  ['/en/hair-transplant-turkey-before-after', 'beforeAfter'],
  ['/en/female-hair-transplant-turkey', 'women'],
  ['/en/afro-hair-transplant-turkey', 'afro'],
  ['/en/beard-transplant-turkey', 'beard'],
  ['/en/hair-transplant-graft-count', 'grafts'],
  ['/en/hair-transplant-turkey-risks', 'risks'],
  ['/en/hair-transplant-recovery-timeline', 'recovery'],
] as const;

const enAdvancedRoutes = [
  ['/en/sapphire-fue-hair-transplant-turkey', 'sapphireFue'],
  ['/en/dhi-vs-fue-hair-transplant', 'dhiVsFue'],
  ['/en/no-shave-hair-transplant-turkey', 'noShave'],
  ['/en/hair-transplant-pain-anesthesia', 'pain'],
  ['/en/hair-transplant-donor-area', 'donorArea'],
  ['/en/hair-transplant-repair-turkey', 'repair'],
  ['/en/hair-transplant-aftercare', 'aftercare'],
  ['/en/hairline-transplant-turkey', 'hairline'],
  ['/en/crown-hair-transplant-turkey', 'crown'],
  ['/en/eyebrow-transplant-turkey', 'eyebrows'],
  ['/en/hair-transplant-on-scar', 'scar'],
  ['/en/second-hair-transplant-turkey', 'secondTransplant'],
] as const;

const localSeoPatterns = [
  '/greffe-de-cheveux-:citySlug',
  '/greffe-capillaire-:citySlug',
  '/implant-capillaire-:citySlug',
  '/prix-greffe-cheveux-:citySlug',
  '/clinique-greffe-cheveux-:citySlug',
  '/en/uk/hair-transplant-:citySlug',
  '/en/uk/hair-restoration-:citySlug',
  '/en/uk/hair-implants-:citySlug',
  '/en/uk/hair-transplant-cost-:citySlug',
  '/en/uk/hair-transplant-clinic-:citySlug',
  '/en/us/hair-transplant-:citySlug',
  '/en/us/hair-restoration-:citySlug',
  '/en/us/hair-implants-:citySlug',
  '/en/us/hair-transplant-cost-:citySlug',
  '/en/us/hair-transplant-clinic-:citySlug',
] as const;

const canonicalLocalSeoPatterns = [
  `${HAIR_FR_BASE}/greffe-de-cheveux-:citySlug`,
  `${HAIR_FR_BASE}/greffe-capillaire-:citySlug`,
  `${HAIR_FR_BASE}/implant-capillaire-:citySlug`,
  `${HAIR_FR_BASE}/prix-greffe-cheveux-:citySlug`,
  `${HAIR_FR_BASE}/clinique-greffe-cheveux-:citySlug`,
  `${HAIR_EN_BASE}/uk/hair-transplant-:citySlug`,
  `${HAIR_EN_BASE}/uk/hair-restoration-:citySlug`,
  `${HAIR_EN_BASE}/uk/hair-implants-:citySlug`,
  `${HAIR_EN_BASE}/uk/hair-transplant-cost-:citySlug`,
  `${HAIR_EN_BASE}/uk/hair-transplant-clinic-:citySlug`,
  `${HAIR_EN_BASE}/us/hair-transplant-:citySlug`,
  `${HAIR_EN_BASE}/us/hair-restoration-:citySlug`,
  `${HAIR_EN_BASE}/us/hair-implants-:citySlug`,
  `${HAIR_EN_BASE}/us/hair-transplant-cost-:citySlug`,
  `${HAIR_EN_BASE}/us/hair-transplant-clinic-:citySlug`,
] as const;

const dentalLocalPatterns = [
  `${DENTAL_EN_BASE}/uk/dentist-:citySlug`,
  `${DENTAL_EN_BASE}/uk/dental-clinic-:citySlug`,
  `${DENTAL_EN_BASE}/uk/dental-centre-:citySlug`,
  `${DENTAL_EN_BASE}/uk/dental-implants-:citySlug`,
  `${DENTAL_EN_BASE}/uk/cosmetic-dentist-:citySlug`,
  `${DENTAL_EN_BASE}/uk/veneers-:citySlug`,
  `${DENTAL_EN_BASE}/us/dentist-:citySlug`,
  `${DENTAL_EN_BASE}/us/dental-clinic-:citySlug`,
  `${DENTAL_EN_BASE}/us/dental-center-:citySlug`,
  `${DENTAL_EN_BASE}/us/dental-implants-:citySlug`,
  `${DENTAL_EN_BASE}/us/cosmetic-dentist-:citySlug`,
  `${DENTAL_EN_BASE}/us/veneers-:citySlug`,
] as const;

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageRouteSync />
      <ScrollToTop />
      <DepartmentRouteSEO />
      <Navigation />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<PortalHomePage />} />
            <Route path="/en" element={<PortalHomePage />} />

            <Route path={HAIR_FR_BASE} element={<HomePage />} />
            <Route path={`${HAIR_FR_BASE}/techniques`} element={<TechniquesPage />} />
            <Route path={`${HAIR_FR_BASE}/tarifs`} element={<PricingPage />} />
            <Route path={`${HAIR_FR_BASE}/turquie`} element={<WhyTurkeyPage />} />
            <Route path={`${HAIR_FR_BASE}/a-propos`} element={<AboutPage />} />
            <Route path={`${HAIR_FR_BASE}/faq`} element={<FAQPage />} />
            <Route path={`${HAIR_FR_BASE}/contact`} element={<ContactPage />} />
            <Route path={`${HAIR_FR_BASE}/guides`} element={<GuidesPage lang="fr" />} />
            <Route path={`${HAIR_FR_BASE}/avant-apres`} element={<BeforeAfterPage />} />
            <Route path={`${HAIR_FR_BASE}/villes`} element={<LocalSeoDirectoryPage country="fr" />} />

            <Route path={HAIR_EN_BASE} element={<EnglishHomePage />} />
            <Route path={`${HAIR_EN_BASE}/techniques`} element={<EnglishGeneralPage pageKey="techniques" />} />
            <Route path={`${HAIR_EN_BASE}/pricing`} element={<EnglishPricingPage />} />
            <Route path={`${HAIR_EN_BASE}/why-turkey`} element={<EnglishGeneralPage pageKey="whyTurkey" />} />
            <Route path={`${HAIR_EN_BASE}/about`} element={<EnglishGeneralPage pageKey="about" />} />
            <Route path={`${HAIR_EN_BASE}/faq`} element={<EnglishGeneralPage pageKey="faq" />} />
            <Route path={`${HAIR_EN_BASE}/contact`} element={<EnglishContactPage />} />
            <Route path={`${HAIR_EN_BASE}/before-after`} element={<EnglishGeneralPage pageKey="beforeAfter" />} />
            <Route path={`${HAIR_EN_BASE}/guides`} element={<GuidesPage lang="en" />} />
            <Route path={`${HAIR_EN_BASE}/cities`} element={<LocalSeoMasterDirectoryPage />} />
            <Route path={`${HAIR_EN_BASE}/uk/cities`} element={<LocalSeoDirectoryPage country="uk" />} />
            <Route path={`${HAIR_EN_BASE}/us/cities`} element={<LocalSeoDirectoryPage country="us" />} />

            <Route path={DENTAL_FR_BASE} element={<FrenchDentalHomePage />} />
            <Route path={DENTAL_EN_BASE} element={<EnglishDentalHomePage />} />
            <Route path={`${DENTAL_EN_BASE}/uk/cities`} element={<DentalLocalDirectoryPage country="uk" />} />
            <Route path={`${DENTAL_EN_BASE}/us/cities`} element={<DentalLocalDirectoryPage country="us" />} />
            {dentalLocalPatterns.map((path) => <Route key={path} path={path} element={<DentalLocalSeoPage />} />)}

            {canonicalLocalSeoPatterns.map((path) => <Route key={path} path={path} element={<LocalSeoPage />} />)}
            {localSeoPatterns.map((path) => <Route key={path} path={path} element={<LocalSeoPage />} />)}

            <Route path="/techniques" element={<Navigate to={`${HAIR_FR_BASE}/techniques`} replace />} />
            <Route path="/tarifs" element={<Navigate to={`${HAIR_FR_BASE}/tarifs`} replace />} />
            <Route path="/pricing" element={<Navigate to={`${HAIR_FR_BASE}/tarifs`} replace />} />
            <Route path="/turquie" element={<Navigate to={`${HAIR_FR_BASE}/turquie`} replace />} />
            <Route path="/a-propos" element={<Navigate to={`${HAIR_FR_BASE}/a-propos`} replace />} />
            <Route path="/about" element={<Navigate to={`${HAIR_FR_BASE}/a-propos`} replace />} />
            <Route path="/faq" element={<Navigate to={`${HAIR_FR_BASE}/faq`} replace />} />
            <Route path="/contact" element={<Navigate to={`${HAIR_FR_BASE}/contact`} replace />} />
            <Route path="/guides-greffe-cheveux" element={<Navigate to={`${HAIR_FR_BASE}/guides`} replace />} />
            <Route path="/greffe-cheveux/avant-apres" element={<Navigate to={`${HAIR_FR_BASE}/avant-apres`} replace />} />
            <Route path="/greffe-cheveux-france" element={<Navigate to={`${HAIR_FR_BASE}/villes`} replace />} />
            <Route path="/en/techniques" element={<Navigate to={`${HAIR_EN_BASE}/techniques`} replace />} />
            <Route path="/en/pricing" element={<Navigate to={`${HAIR_EN_BASE}/pricing`} replace />} />
            <Route path="/en/why-turkey" element={<Navigate to={`${HAIR_EN_BASE}/why-turkey`} replace />} />
            <Route path="/en/about" element={<Navigate to={`${HAIR_EN_BASE}/about`} replace />} />
            <Route path="/en/faq" element={<Navigate to={`${HAIR_EN_BASE}/faq`} replace />} />
            <Route path="/en/contact" element={<Navigate to={`${HAIR_EN_BASE}/contact`} replace />} />
            <Route path="/en/before-after" element={<Navigate to={`${HAIR_EN_BASE}/before-after`} replace />} />
            <Route path="/en/hair-transplant-guides" element={<Navigate to={`${HAIR_EN_BASE}/guides`} replace />} />
            <Route path="/en/hair-transplant-by-city" element={<Navigate to={`${HAIR_EN_BASE}/cities`} replace />} />
            <Route path="/en/uk/hair-transplant-cities" element={<Navigate to={`${HAIR_EN_BASE}/uk/cities`} replace />} />
            <Route path="/en/us/hair-transplant-cities" element={<Navigate to={`${HAIR_EN_BASE}/us/cities`} replace />} />

            {[
              ['/greffe-de-cheveux-turquie', <GreffeCheveuxTurquie />],
              ['/implant-capillaire-turquie', <GreffeCheveuxTurquie />],
              ['/implant-cheveux-turquie', <GreffeCheveuxTurquie />],
              ['/greffe-de-cheveux-fue-turquie', <GreffeCheveuxFUETurquie />],
              ['/greffe-de-cheveux-dhi-turquie', <GreffeCheveuxDHITurquie />],
              ['/prix-greffe-de-cheveux-turquie', <PrixGreffeCheveuxTurquie />],
              ['/greffe-cheveux-prix-turquie', <PrixGreffeCheveuxTurquie />],
              ['/prix-implant-capillaire-turquie', <PrixGreffeCheveuxTurquie />],
              ['/implant-cheveux-turquie-prix', <PrixGreffeCheveuxTurquie />],
            ].map(([legacyPath, element]) => (
              <Route key={legacyPath as string} path={canonicalHairPath(legacyPath as string)} element={element} />
            ))}

            <Route path={canonicalHairPath('/meilleure-clinique-greffe-cheveux-turquie')} element={<BestClinicPage lang="fr" variant="bestClinic" />} />
            <Route path={canonicalHairPath('/meilleure-clinique-implant-cheveux-turquie')} element={<BestClinicPage lang="fr" variant="medicalTeam" />} />
            <Route path={canonicalHairPath('/meilleure-clinique-implant-capillaire-turquie')} element={<BestClinicPage lang="fr" variant="bookingChecklist" />} />

            {frLandingRoutes.map(([path, pageKey]) => (
              <Route key={`canonical-${path}`} path={canonicalHairPath(path)} element={<SeoLandingPage lang="fr" pageKey={pageKey} />} />
            ))}
            {frAdvancedRoutes.map(([path, pageKey]) => (
              <Route key={`canonical-${path}`} path={canonicalHairPath(path)} element={<SeoAdvancedPage lang="fr" pageKey={pageKey} />} />
            ))}

            {[
              ['/hair-transplant-turkey', <HairTransplantTurkey />],
              ['/turkey-hair-transplant', <HairTransplantTurkey />],
              ['/hair-transplant-in-turkey', <HairTransplantTurkey />],
              ['/fue-hair-transplant-turkey', <HairTransplantTurkey />],
              ['/dhi-hair-transplant-turkey', <HairTransplantTurkey />],
              ['/turkey-hair-transplant-cost', <TurkeyHairTransplantCost />],
              ['/hair-transplant-turkey-cost', <TurkeyHairTransplantCost />],
              ['/hair-transplant-turkey-price', <TurkeyHairTransplantCost />],
              ['/turkey-hair-transplant-prices', <TurkeyHairTransplantCost />],
              ['/how-much-hair-transplant-turkey', <TurkeyHairTransplantCost />],
            ].map(([legacyPath, element]) => (
              <Route key={legacyPath as string} path={canonicalHairPath(legacyPath as string)} element={element} />
            ))}

            <Route path={canonicalHairPath('/best-hair-transplant-clinic-turkey')} element={<BestClinicPage lang="en" variant="bestClinic" />} />
            <Route path={canonicalHairPath('/best-clinic-for-hair-transplant-turkey')} element={<BestClinicPage lang="en" variant="medicalTeam" />} />
            <Route path={canonicalHairPath('/best-hair-implant-clinic-turkey')} element={<BestClinicPage lang="en" variant="bookingChecklist" />} />
            <Route path={canonicalHairPath('/best-hair-transplant-turkey')} element={<BestClinicPage lang="en" variant="bestClinic" />} />

            {enLandingRoutes.map(([path, pageKey]) => (
              <Route key={`canonical-${path}`} path={canonicalHairPath(path)} element={<SeoLandingPage lang="en" pageKey={pageKey} />} />
            ))}
            {enAdvancedRoutes.map(([path, pageKey]) => (
              <Route key={`canonical-${path}`} path={canonicalHairPath(path)} element={<SeoAdvancedPage lang="en" pageKey={pageKey} />} />
            ))}

            {[
              ...frLandingRoutes.map(([path]) => path),
              ...frAdvancedRoutes.map(([path]) => path),
              ...enLandingRoutes.map(([path]) => path),
              ...enAdvancedRoutes.map(([path]) => path),
              '/greffe-de-cheveux-turquie',
              '/implant-capillaire-turquie',
              '/implant-cheveux-turquie',
              '/greffe-de-cheveux-fue-turquie',
              '/greffe-de-cheveux-dhi-turquie',
              '/prix-greffe-de-cheveux-turquie',
              '/greffe-cheveux-prix-turquie',
              '/prix-implant-capillaire-turquie',
              '/implant-cheveux-turquie-prix',
              '/meilleure-clinique-greffe-cheveux-turquie',
              '/meilleure-clinique-implant-cheveux-turquie',
              '/meilleure-clinique-implant-capillaire-turquie',
              '/hair-transplant-turkey',
              '/turkey-hair-transplant',
              '/hair-transplant-in-turkey',
              '/fue-hair-transplant-turkey',
              '/dhi-hair-transplant-turkey',
              '/turkey-hair-transplant-cost',
              '/hair-transplant-turkey-cost',
              '/hair-transplant-turkey-price',
              '/turkey-hair-transplant-prices',
              '/how-much-hair-transplant-turkey',
              '/best-hair-transplant-clinic-turkey',
              '/best-clinic-for-hair-transplant-turkey',
              '/best-hair-implant-clinic-turkey',
              '/best-hair-transplant-turkey',
            ].map((path) => (
              <Route key={`legacy-${path}`} path={path} element={<Navigate to={canonicalHairPath(path)} replace />} />
            ))}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
