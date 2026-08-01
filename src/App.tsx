import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import EnglishGeneralPage from './pages/en/EnglishGeneralPage';
import EnglishContactPage from './pages/en/EnglishContactPage';
import GreffeCheveuxTurquie from './pages/seo/GreffeCheveuxTurquie';
import GreffeCheveuxFUETurquie from './pages/seo/GreffeCheveuxFUETurquie';
import GreffeCheveuxDHITurquie from './pages/seo/GreffeCheveuxDHITurquie';
import PrixGreffeCheveuxTurquie from './pages/seo/PrixGreffeCheveuxTurquie';
import HairTransplantTurkey from './pages/seo/HairTransplantTurkey';
import TurkeyHairTransplantCost from './pages/seo/TurkeyHairTransplantCost';
import SeoLandingPage from './pages/seo/SeoLandingPage';
import SeoAdvancedPage from './pages/seo/SeoAdvancedPage';
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

          <Route path="/en" element={<HomePage />} />
          <Route path="/en/techniques" element={<EnglishGeneralPage pageKey="techniques" />} />
          <Route path="/en/pricing" element={<EnglishGeneralPage pageKey="pricing" />} />
          <Route path="/en/why-turkey" element={<EnglishGeneralPage pageKey="whyTurkey" />} />
          <Route path="/en/about" element={<EnglishGeneralPage pageKey="about" />} />
          <Route path="/en/faq" element={<EnglishGeneralPage pageKey="faq" />} />
          <Route path="/en/contact" element={<EnglishContactPage />} />
          <Route path="/en/before-after" element={<EnglishGeneralPage pageKey="beforeAfter" />} />
          <Route path="/en/hair-transplant-guides" element={<GuidesPage lang="en" />} />

          <Route path="/greffe-de-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/implant-capillaire-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/implant-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/meilleure-clinique-greffe-cheveux-turquie" element={<SeoLandingPage lang="fr" pageKey="reviews" />} />
          <Route path="/meilleure-clinique-implant-cheveux-turquie" element={<SeoLandingPage lang="fr" pageKey="reviews" />} />
          <Route path="/meilleure-clinique-implant-capillaire-turquie" element={<SeoLandingPage lang="fr" pageKey="reviews" />} />

          <Route path="/greffe-de-cheveux-fue-turquie" element={<GreffeCheveuxFUETurquie />} />
          <Route path="/greffe-de-cheveux-dhi-turquie" element={<GreffeCheveuxDHITurquie />} />
          <Route path="/prix-greffe-de-cheveux-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/greffe-cheveux-prix-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/prix-implant-capillaire-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/implant-cheveux-turquie-prix" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/greffe-de-cheveux-turquie-prix-tout-compris" element={<SeoLandingPage lang="fr" pageKey="allInclusive" />} />

          <Route path="/greffe-cheveux-istanbul" element={<SeoLandingPage lang="fr" pageKey="istanbul" />} />
          <Route path="/greffe-cheveux-turquie-tout-compris" element={<SeoLandingPage lang="fr" pageKey="allInclusive" />} />
          <Route path="/greffe-cheveux-turquie-avis" element={<SeoLandingPage lang="fr" pageKey="reviews" />} />
          <Route path="/greffe-de-cheveux-turquie-avis" element={<SeoLandingPage lang="fr" pageKey="reviews" />} />
          <Route path="/greffe-cheveux-turquie-avant-apres" element={<SeoLandingPage lang="fr" pageKey="beforeAfter" />} />
          <Route path="/greffe-cheveux-femme-turquie" element={<SeoLandingPage lang="fr" pageKey="women" />} />
          <Route path="/greffe-cheveux-afro-turquie" element={<SeoLandingPage lang="fr" pageKey="afro" />} />
          <Route path="/greffe-cheveux-crepus-turquie" element={<SeoLandingPage lang="fr" pageKey="afro" />} />
          <Route path="/greffe-barbe-turquie" element={<SeoLandingPage lang="fr" pageKey="beard" />} />
          <Route path="/greffe-de-barbe-turquie" element={<SeoLandingPage lang="fr" pageKey="beard" />} />
          <Route path="/nombre-greffons-greffe-cheveux" element={<SeoLandingPage lang="fr" pageKey="grafts" />} />
          <Route path="/greffe-cheveux-turquie-risques" element={<SeoLandingPage lang="fr" pageKey="risks" />} />
          <Route path="/greffe-cheveux-turquie-danger" element={<SeoLandingPage lang="fr" pageKey="risks" />} />
          <Route path="/apres-greffe-cheveux-mois-par-mois" element={<SeoLandingPage lang="fr" pageKey="recovery" />} />

          <Route path="/fue-saphir-turquie" element={<SeoAdvancedPage lang="fr" pageKey="sapphireFue" />} />
          <Route path="/greffe-cheveux-saphir-turquie" element={<SeoAdvancedPage lang="fr" pageKey="sapphireFue" />} />
          <Route path="/dhi-ou-fue" element={<SeoAdvancedPage lang="fr" pageKey="dhiVsFue" />} />
          <Route path="/difference-fue-dhi" element={<SeoAdvancedPage lang="fr" pageKey="dhiVsFue" />} />
          <Route path="/meilleure-technique-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="dhiVsFue" />} />
          <Route path="/greffe-cheveux-sans-rasage-turquie" element={<SeoAdvancedPage lang="fr" pageKey="noShave" />} />
          <Route path="/greffe-cheveux-femme-sans-rasage" element={<SeoAdvancedPage lang="fr" pageKey="noShave" />} />
          <Route path="/douleur-greffe-cheveux-anesthesie" element={<SeoAdvancedPage lang="fr" pageKey="pain" />} />
          <Route path="/greffe-cheveux-indolore-turquie" element={<SeoAdvancedPage lang="fr" pageKey="pain" />} />
          <Route path="/anesthesie-sans-aiguille-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="pain" />} />
          <Route path="/zone-donneuse-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="donorArea" />} />
          <Route path="/zone-donneuse-abimee-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="donorArea" />} />
          <Route path="/surprelevement-zone-donneuse" element={<SeoAdvancedPage lang="fr" pageKey="donorArea" />} />
          <Route path="/reparer-greffe-cheveux-ratee" element={<SeoAdvancedPage lang="fr" pageKey="repair" />} />
          <Route path="/greffe-cheveux-ratee-turquie" element={<SeoAdvancedPage lang="fr" pageKey="repair" />} />
          <Route path="/soins-apres-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="aftercare" />} />
          <Route path="/premier-lavage-apres-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="aftercare" />} />
          <Route path="/sport-apres-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="aftercare" />} />
          <Route path="/prendre-avion-apres-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="aftercare" />} />
          <Route path="/soleil-apres-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="aftercare" />} />
          <Route path="/greffe-ligne-frontale-turquie" element={<SeoAdvancedPage lang="fr" pageKey="hairline" />} />
          <Route path="/ligne-frontale-naturelle-greffe-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="hairline" />} />
          <Route path="/greffe-golfes-cheveux" element={<SeoAdvancedPage lang="fr" pageKey="hairline" />} />
          <Route path="/greffe-vertex-turquie" element={<SeoAdvancedPage lang="fr" pageKey="crown" />} />
          <Route path="/greffe-tonsure-turquie" element={<SeoAdvancedPage lang="fr" pageKey="crown" />} />
          <Route path="/greffe-sourcils-turquie" element={<SeoAdvancedPage lang="fr" pageKey="eyebrows" />} />
          <Route path="/greffe-sourcils-avant-apres" element={<SeoAdvancedPage lang="fr" pageKey="eyebrows" />} />
          <Route path="/greffe-cheveux-cicatrice" element={<SeoAdvancedPage lang="fr" pageKey="scar" />} />
          <Route path="/deuxieme-greffe-cheveux-turquie" element={<SeoAdvancedPage lang="fr" pageKey="secondTransplant" />} />

          <Route path="/hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/turkey-hair-transplant" element={<HairTransplantTurkey />} />
          <Route path="/hair-transplant-in-turkey" element={<HairTransplantTurkey />} />
          <Route path="/best-hair-transplant-turkey" element={<SeoLandingPage lang="en" pageKey="reviews" />} />
          <Route path="/fue-hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/dhi-hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/turkey-hair-transplant-cost" element={<TurkeyHairTransplantCost />} />
          <Route path="/hair-transplant-turkey-cost" element={<TurkeyHairTransplantCost />} />
          <Route path="/hair-transplant-turkey-price" element={<TurkeyHairTransplantCost />} />
          <Route path="/turkey-hair-transplant-prices" element={<TurkeyHairTransplantCost />} />
          <Route path="/how-much-hair-transplant-turkey" element={<TurkeyHairTransplantCost />} />

          <Route path="/en/hair-transplant-istanbul" element={<SeoLandingPage lang="en" pageKey="istanbul" />} />
          <Route path="/en/all-inclusive-hair-transplant-turkey" element={<SeoLandingPage lang="en" pageKey="allInclusive" />} />
          <Route path="/en/hair-transplant-turkey-reviews" element={<SeoLandingPage lang="en" pageKey="reviews" />} />
          <Route path="/hair-transplant-turkey-reviews" element={<SeoLandingPage lang="en" pageKey="reviews" />} />
          <Route path="/en/hair-transplant-turkey-before-after" element={<SeoLandingPage lang="en" pageKey="beforeAfter" />} />
          <Route path="/en/female-hair-transplant-turkey" element={<SeoLandingPage lang="en" pageKey="women" />} />
          <Route path="/en/afro-hair-transplant-turkey" element={<SeoLandingPage lang="en" pageKey="afro" />} />
          <Route path="/en/beard-transplant-turkey" element={<SeoLandingPage lang="en" pageKey="beard" />} />
          <Route path="/en/hair-transplant-graft-count" element={<SeoLandingPage lang="en" pageKey="grafts" />} />
          <Route path="/en/hair-transplant-turkey-risks" element={<SeoLandingPage lang="en" pageKey="risks" />} />
          <Route path="/en/hair-transplant-recovery-timeline" element={<SeoLandingPage lang="en" pageKey="recovery" />} />

          <Route path="/en/sapphire-fue-hair-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="sapphireFue" />} />
          <Route path="/en/dhi-vs-fue-hair-transplant" element={<SeoAdvancedPage lang="en" pageKey="dhiVsFue" />} />
          <Route path="/en/no-shave-hair-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="noShave" />} />
          <Route path="/en/hair-transplant-pain-anesthesia" element={<SeoAdvancedPage lang="en" pageKey="pain" />} />
          <Route path="/en/hair-transplant-donor-area" element={<SeoAdvancedPage lang="en" pageKey="donorArea" />} />
          <Route path="/en/hair-transplant-repair-turkey" element={<SeoAdvancedPage lang="en" pageKey="repair" />} />
          <Route path="/en/hair-transplant-aftercare" element={<SeoAdvancedPage lang="en" pageKey="aftercare" />} />
          <Route path="/en/hairline-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="hairline" />} />
          <Route path="/en/crown-hair-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="crown" />} />
          <Route path="/en/eyebrow-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="eyebrows" />} />
          <Route path="/en/hair-transplant-on-scar" element={<SeoAdvancedPage lang="en" pageKey="scar" />} />
          <Route path="/en/second-hair-transplant-turkey" element={<SeoAdvancedPage lang="en" pageKey="secondTransplant" />} />
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
