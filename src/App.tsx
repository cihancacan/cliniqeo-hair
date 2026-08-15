import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';
import { getSiteLanguage } from './config/localizedRoutes';
import { getHairRouterBasename, isEnglishMountedHairPath } from './config/hostedPath';

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

function LanguageRouteSync() {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();

  useLayoutEffect(() => {
    const detected = isEnglishMountedHairPath() ? 'en' : getSiteLanguage(pathname);
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

function AppContent() {
  const englishMounted = isEnglishMountedHairPath();

  return (
    <div className="min-h-screen bg-white">
      <LanguageRouteSync />
      <ScrollToTop />
      <Navigation />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={englishMounted ? <HairTransplantTurkey /> : <HomePage />} />
            <Route path="/techniques" element={englishMounted ? <EnglishGeneralPage pageKey="techniques" /> : <TechniquesPage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/turquie" element={<WhyTurkeyPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/faq" element={englishMounted ? <EnglishGeneralPage pageKey="faq" /> : <FAQPage />} />
            <Route path="/contact" element={englishMounted ? <EnglishContactPage /> : <ContactPage />} />
            <Route path="/guides-greffe-cheveux" element={<GuidesPage lang="fr" />} />
            <Route path="/greffe-cheveux/avant-apres" element={<BeforeAfterPage />} />
            <Route path="/greffe-cheveux-france" element={<LocalSeoDirectoryPage country="fr" />} />
            {englishMounted && (
              <>
                <Route path="/why-turkey" element={<EnglishGeneralPage pageKey="whyTurkey" />} />
                <Route path="/before-after" element={<EnglishGeneralPage pageKey="beforeAfter" />} />
                <Route path="/hair-transplant-guides" element={<GuidesPage lang="en" />} />
                <Route path="/hair-transplant-by-city" element={<LocalSeoMasterDirectoryPage />} />
                <Route path="/uk/hair-transplant-cities" element={<LocalSeoDirectoryPage country="uk" />} />
                <Route path="/us/hair-transplant-cities" element={<LocalSeoDirectoryPage country="us" />} />
              </>
            )}

            <Route path="/en" element={<EnglishHomePage />} />
            <Route path="/en/techniques" element={<EnglishGeneralPage pageKey="techniques" />} />
            <Route path="/en/pricing" element={<EnglishPricingPage />} />
            <Route path="/en/why-turkey" element={<EnglishGeneralPage pageKey="whyTurkey" />} />
            <Route path="/en/about" element={<EnglishGeneralPage pageKey="about" />} />
            <Route path="/en/faq" element={<EnglishGeneralPage pageKey="faq" />} />
            <Route path="/en/contact" element={<EnglishContactPage />} />
            <Route path="/en/before-after" element={<EnglishGeneralPage pageKey="beforeAfter" />} />
            <Route path="/en/hair-transplant-guides" element={<GuidesPage lang="en" />} />
            <Route path="/en/hair-transplant-by-city" element={<LocalSeoMasterDirectoryPage />} />
            <Route path="/en/uk/hair-transplant-cities" element={<LocalSeoDirectoryPage country="uk" />} />
            <Route path="/en/us/hair-transplant-cities" element={<LocalSeoDirectoryPage country="us" />} />

            {localSeoPatterns.map((path) => <Route key={path} path={path} element={<LocalSeoPage />} />)}
            {englishMounted && localSeoPatterns
              .filter((path) => path.startsWith('/en/'))
              .map((path) => <Route key={`mounted-${path}`} path={path.slice(3)} element={<LocalSeoPage />} />)}

            <Route path="/about" element={englishMounted ? <EnglishGeneralPage pageKey="about" /> : <Navigate to="/a-propos" replace />} />
            <Route path="/pricing" element={englishMounted ? <EnglishPricingPage /> : <Navigate to="/tarifs" replace />} />

            <Route path="/greffe-de-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
            <Route path="/implant-capillaire-turquie" element={<GreffeCheveuxTurquie />} />
            <Route path="/implant-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
            <Route path="/greffe-de-cheveux-fue-turquie" element={<GreffeCheveuxFUETurquie />} />
            <Route path="/greffe-de-cheveux-dhi-turquie" element={<GreffeCheveuxDHITurquie />} />
            <Route path="/prix-greffe-de-cheveux-turquie" element={<PrixGreffeCheveuxTurquie />} />
            <Route path="/greffe-cheveux-prix-turquie" element={<PrixGreffeCheveuxTurquie />} />
            <Route path="/prix-implant-capillaire-turquie" element={<PrixGreffeCheveuxTurquie />} />
            <Route path="/implant-cheveux-turquie-prix" element={<PrixGreffeCheveuxTurquie />} />

            <Route path="/meilleure-clinique-greffe-cheveux-turquie" element={<BestClinicPage lang="fr" variant="bestClinic" />} />
            <Route path="/meilleure-clinique-implant-cheveux-turquie" element={<BestClinicPage lang="fr" variant="medicalTeam" />} />
            <Route path="/meilleure-clinique-implant-capillaire-turquie" element={<BestClinicPage lang="fr" variant="bookingChecklist" />} />

            {frLandingRoutes.map(([path, pageKey]) => (
              <Route key={path} path={path} element={<SeoLandingPage lang="fr" pageKey={pageKey} />} />
            ))}
            {frAdvancedRoutes.map(([path, pageKey]) => (
              <Route key={path} path={path} element={<SeoAdvancedPage lang="fr" pageKey={pageKey} />} />
            ))}

            <Route path="/hair-transplant-turkey" element={<HairTransplantTurkey />} />
            <Route path="/turkey-hair-transplant" element={<HairTransplantTurkey />} />
            <Route path="/hair-transplant-in-turkey" element={<HairTransplantTurkey />} />
            <Route path="/fue-hair-transplant-turkey" element={<HairTransplantTurkey />} />
            <Route path="/dhi-hair-transplant-turkey" element={<HairTransplantTurkey />} />
            <Route path="/turkey-hair-transplant-cost" element={<TurkeyHairTransplantCost />} />
            <Route path="/hair-transplant-turkey-cost" element={<TurkeyHairTransplantCost />} />
            <Route path="/hair-transplant-turkey-price" element={<TurkeyHairTransplantCost />} />
            <Route path="/turkey-hair-transplant-prices" element={<TurkeyHairTransplantCost />} />
            <Route path="/how-much-hair-transplant-turkey" element={<TurkeyHairTransplantCost />} />

            <Route path="/best-hair-transplant-clinic-turkey" element={<BestClinicPage lang="en" variant="bestClinic" />} />
            <Route path="/best-clinic-for-hair-transplant-turkey" element={<BestClinicPage lang="en" variant="medicalTeam" />} />
            <Route path="/best-hair-implant-clinic-turkey" element={<BestClinicPage lang="en" variant="bookingChecklist" />} />
            <Route path="/best-hair-transplant-turkey" element={<Navigate to="/best-hair-transplant-clinic-turkey" replace />} />

            {enLandingRoutes.map(([path, pageKey]) => (
              <Route key={path} path={path} element={<SeoLandingPage lang="en" pageKey={pageKey} />} />
            ))}
            {englishMounted && enLandingRoutes
              .filter(([path]) => path.startsWith('/en/'))
              .map(([path, pageKey]) => (
                <Route key={`mounted-${path}`} path={path.slice(3)} element={<SeoLandingPage lang="en" pageKey={pageKey} />} />
              ))}
            {enAdvancedRoutes.map(([path, pageKey]) => (
              <Route key={path} path={path} element={<SeoAdvancedPage lang="en" pageKey={pageKey} />} />
            ))}
            {englishMounted && enAdvancedRoutes.map(([path, pageKey]) => (
              <Route key={`mounted-${path}`} path={path.slice(3)} element={<SeoAdvancedPage lang="en" pageKey={pageKey} />} />
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
    <Router basename={getHairRouterBasename()}>
      <AppContent />
    </Router>
  );
}

export default App;
