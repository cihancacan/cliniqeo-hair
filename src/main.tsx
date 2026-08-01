import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { getSiteLanguage, localizeInternalPath } from './config/localizedRoutes';

/**
 * SEO pages are pre-rendered as real HTML files. A full document navigation
 * avoids blank client-side transitions and preserves route-specific metadata.
 * Generic internal links are also translated according to the current page.
 */
document.addEventListener(
  'click',
  (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest('a[href]');
    if (!(anchor instanceof HTMLAnchorElement)) return;
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

    const destination = new URL(anchor.href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    const currentLanguage = getSiteLanguage(window.location.pathname);
    const localizedPath = localizeInternalPath(destination.pathname, currentLanguage);

    event.preventDefault();
    window.location.assign(`${localizedPath}${destination.search}${destination.hash}`);
  },
  true,
);

const root = document.getElementById('root');

if (!root) {
  throw new Error('React root element was not found.');
}

createRoot(root).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);

function applyHomepageHeroImage() {
  if (!['/', '/en'].includes(window.location.pathname)) return;

  const hero = document.querySelector<HTMLElement>('main > div.pt-20 > section:first-child');
  if (!hero) return;

  hero.classList.add('home-photo-hero');
  hero.style.backgroundImage = "linear-gradient(90deg, rgba(7, 20, 36, 0.92) 0%, rgba(12, 38, 65, 0.78) 38%, rgba(12, 38, 65, 0.38) 62%, rgba(12, 38, 65, 0.08) 100%), url('/home.cliniqeo.hair.jpg')";
  hero.style.backgroundSize = 'cover';
  hero.style.backgroundRepeat = 'no-repeat';
  hero.style.backgroundPosition = window.matchMedia('(max-width: 767px)').matches ? '62% center' : 'center center';
}

requestAnimationFrame(applyHomepageHeroImage);
