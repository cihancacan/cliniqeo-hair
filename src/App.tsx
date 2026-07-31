import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import GreffeCheveuxTurquie from './pages/seo/GreffeCheveuxTurquie';
import GreffeCheveuxFUETurquie from './pages/seo/GreffeCheveuxFUETurquie';
import GreffeCheveuxDHITurquie from './pages/seo/GreffeCheveuxDHITurquie';
import PrixGreffeCheveuxTurquie from './pages/seo/PrixGreffeCheveuxTurquie';
import BeforeAfterPage from './pages/BeforeAfterPage';
import HairTransplantTurkey from './pages/seo/HairTransplantTurkey';
import TurkeyHairTransplantCost from './pages/seo/TurkeyHairTransplantCost';
import SeoLandingPage from './pages/seo/SeoLandingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
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
          <Route path="/en/hair-transplant-guides" element={<GuidesPage lang="en" />} />
          <Route path="/greffe-cheveux/avant-apres" element={<BeforeAfterPage />} />

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return <Router><AppContent /></Router>;
}

export default App;
