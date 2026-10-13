import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import ContactPage from '../src/pages/ContactPage';
import PricingPage from '../src/pages/PricingPage';
import AboutPage from '../src/pages/AboutPage';
import FAQPage from '../src/pages/FAQPage';
import TechniquesPage from '../src/pages/TechniquesPage';
import WhyTurkeyPage from '../src/pages/WhyTurkeyPage';
import BeforeAfterPage from '../src/pages/BeforeAfterPage';
import { LanguageProvider } from '../src/contexts/LanguageContext';

const pages = {
  '/contact': ContactPage,
  '/tarifs': PricingPage,
  '/a-propos': AboutPage,
  '/faq': FAQPage,
  '/techniques': TechniquesPage,
  '/turquie': WhyTurkeyPage,
  '/greffe-cheveux/avant-apres': BeforeAfterPage,
};

export function renderCorePage(path: keyof typeof pages) {
  const Page = pages[path];
  return renderToStaticMarkup(
    <StaticRouter location={path}>
      <LanguageProvider>
        <nav aria-label="Navigation Cliniqeo Hair">
          <a href="/">Cliniqeo Hair</a> · <a href="/techniques">Techniques</a> · <a href="/tarifs">Tarifs</a> · <a href="/a-propos">À propos</a> · <a href="/contact">Contact</a>
        </nav>
        <main><Page /></main>
      </LanguageProvider>
    </StaticRouter>,
  );
}
