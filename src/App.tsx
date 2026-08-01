import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TechniquesPage from './pages/TechniquesPage';
import PricingPage from './pages/PricingPage';
import WhyTurkeyPage from './pages/WhyTurkeyPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import GuidesPage from './pages/GuidesPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import EnglishHomePage from './pages/en/EnglishHomePage';
import EnglishGeneralPage from './pages/en/EnglishGeneralPage';
import EnglishContactPage from './pages/en/EnglishContactPage';
import EnglishPricingPage from './pages/en/EnglishPricingPage';
import GreffeCheveuxTurquie from './pages/seo/GreffeCheveuxTurquie';
import GreffeCheveuxFUETurquie from './pages/seo/GreffeCheveuxFUETurquie';
import GreffeCheveuxDHITurquie from './pages/seo/GreffeCheveuxDHITurquie';
import PrixGreffeCheveuxTurquie from './pages/seo/PrixGreffeCheveuxTurquie';
import HairTransplantTurkey from './pages/seo/HairTransplantTurkey';
import TurkeyHairTransplantCost from './pages/seo/TurkeyHairTransplantCost';
import SeoLandingPage from './pages/seo/SeoLandingPage';
import SeoAdvancedPage from './pages/seo/SeoAdvancedPage';
import BestClinicPage from './pages/seo/BestClinicPage';
import { useLanguage } from './contexts/LanguageContext';
import { getSiteLanguage } from './config/localizedRoutes';

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

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageRouteSync />
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/turquie" element={<WhyTurkeyPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/guides-greffe-cheveux" element={<GuidesPage lang="fr" />} />
          <Route path="/greffe-cheveux/avant-apres" element={<BeforeAfterPage />} />

          <Route path="/en" element={<EnglishHomePage />} />
          <Route path="/en/techniques" element={<EnglishGeneralPage pageKey="techniques" />} />
          <Route path="/en/pricing" element={<EnglishPricingPage />} />
          <Route path="/en/why-turkey" element={<EnglishGeneralPage pageKey="whyTurkey" />} />
          <Route path="/en/about" element={<EnglishGeneralPage pageKey="about" />} />
          <Route path="/en/faq" element={<EnglishGeneralPage pageKey="faq" />} />
          <Route path="/en/contact" element={<EnglishContactPage />} />
          <Route path="/en/before-after" element={<EnglishGeneralPage pageKey="beforeAfter" />} />
          <Route path="/en/hair-transplant-guides" element={<GuidesPage lang="en" />} />

          <Route path="/about" element={<Navigate to="/a-propos" replace />} />
          <Route path="/pricing" element={<Navigate to="/tarifs" replace />} />

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
          {enAdvancedRoutes.map(([path, pageKey]) => (
            <Route key={path} path={path} element={<SeoAdvancedPage lang="en" pageKey={pageKey} />} />
          ))}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
