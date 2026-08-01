import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

/**
 * The SEO pages are pre-rendered as real HTML files. React Router client-side
 * transitions could leave the pre-rendered root empty on some route changes.
 * Force same-origin internal links to load the destination document so every
 * page opens reliably and keeps its route-specific HTML metadata.
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

    event.preventDefault();
    window.location.assign(`${destination.pathname}${destination.search}${destination.hash}`);
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
