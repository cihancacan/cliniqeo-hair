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
import GreffeCheveuxTurquie from './pages/seo/GreffeCheveuxTurquie';
import GreffeCheveuxFUETurquie from './pages/seo/GreffeCheveuxFUETurquie';
import GreffeCheveuxDHITurquie from './pages/seo/GreffeCheveuxDHITurquie';
import PrixGreffeCheveuxTurquie from './pages/seo/PrixGreffeCheveuxTurquie';
import BeforeAfterPage from './pages/BeforeAfterPage';
import HairTransplantTurkey from './pages/seo/HairTransplantTurkey';
import TurkeyHairTransplantCost from './pages/seo/TurkeyHairTransplantCost';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <Route path="/greffe-cheveux/avant-apres" element={<BeforeAfterPage />} />

          <Route path="/greffe-de-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/implant-capillaire-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/implant-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/greffe-de-cheveux-turquie-avis" element={<GreffeCheveuxTurquie />} />
          <Route path="/meilleure-clinique-greffe-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/meilleure-clinique-implant-cheveux-turquie" element={<GreffeCheveuxTurquie />} />
          <Route path="/meilleure-clinique-implant-capillaire-turquie" element={<GreffeCheveuxTurquie />} />

          <Route path="/greffe-de-cheveux-fue-turquie" element={<GreffeCheveuxFUETurquie />} />
          <Route path="/greffe-de-barbe-turquie" element={<GreffeCheveuxFUETurquie />} />

          <Route path="/greffe-de-cheveux-dhi-turquie" element={<GreffeCheveuxDHITurquie />} />

          <Route path="/prix-greffe-de-cheveux-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/greffe-cheveux-prix-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/prix-implant-capillaire-turquie" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/implant-cheveux-turquie-prix" element={<PrixGreffeCheveuxTurquie />} />
          <Route path="/greffe-de-cheveux-turquie-prix-tout-compris" element={<PrixGreffeCheveuxTurquie />} />

          <Route path="/hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/turkey-hair-transplant" element={<HairTransplantTurkey />} />
          <Route path="/hair-transplant-in-turkey" element={<HairTransplantTurkey />} />
          <Route path="/best-hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/hair-transplant-turkey-reviews" element={<HairTransplantTurkey />} />
          <Route path="/fue-hair-transplant-turkey" element={<HairTransplantTurkey />} />
          <Route path="/dhi-hair-transplant-turkey" element={<HairTransplantTurkey />} />

          <Route path="/turkey-hair-transplant-cost" element={<TurkeyHairTransplantCost />} />
          <Route path="/hair-transplant-turkey-cost" element={<TurkeyHairTransplantCost />} />
          <Route path="/hair-transplant-turkey-price" element={<TurkeyHairTransplantCost />} />
          <Route path="/turkey-hair-transplant-prices" element={<TurkeyHairTransplantCost />} />
          <Route path="/how-much-hair-transplant-turkey" element={<TurkeyHairTransplantCost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/greffe-cheveux-turquie">
      <AppContent />
    </Router>
  );
}

export default App;
