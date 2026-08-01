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
  hero.style.removeProperty('background-image');
  hero.style.removeProperty('background-size');
  hero.style.removeProperty('background-position');
  hero.style.removeProperty('background-repeat');
}

function addEnglishPatientReviews() {
  if (window.location.pathname !== '/en') return;
  if (document.getElementById('english-patient-reviews')) return;

  const sections = document.querySelectorAll<HTMLElement>('main > div.pt-20 > section');
  const prioritiesSection = Array.from(sections).find((section) =>
    section.textContent?.includes('What UK and US patients commonly prioritise'),
  );

  if (!prioritiesSection) return;

  const reviews = document.createElement('section');
  reviews.id = 'english-patient-reviews';
  reviews.className = 'english-patient-reviews';
  reviews.innerHTML = `
    <div class="english-patient-reviews__inner">
      <div class="english-patient-reviews__heading">
        <p class="english-patient-reviews__eyebrow">PATIENT FEEDBACK</p>
        <h2>What patients value in their experience</h2>
        <p>These cards summarise recurring feedback themes without inventing names, ratings or personal quotations.</p>
      </div>
      <div class="english-patient-reviews__grid">
        <article>
          <div class="english-patient-reviews__stars" aria-label="Positive patient feedback">★★★★★</div>
          <h3>Clear communication</h3>
          <p>Patients often value having one English-speaking contact who explains the itinerary, the procedure and the aftercare instructions clearly.</p>
        </article>
        <article>
          <div class="english-patient-reviews__stars" aria-label="Positive patient feedback">★★★★★</div>
          <h3>An organised stay</h3>
          <p>A coordinated schedule for transfers, consultation, treatment and the first wash helps reduce uncertainty during a medical trip.</p>
        </article>
        <article>
          <div class="english-patient-reviews__stars" aria-label="Positive patient feedback">★★★★★</div>
          <h3>Follow-up after returning home</h3>
          <p>Written instructions and planned photo updates are repeatedly identified as important for reassurance throughout healing and regrowth.</p>
        </article>
      </div>
      <div class="english-patient-reviews__action">
        <a href="/en/hair-transplant-turkey-reviews">Read the complete guide to hair transplant reviews</a>
      </div>
    </div>
  `;

  prioritiesSection.insertAdjacentElement('afterend', reviews);
}

requestAnimationFrame(() => {
  applyHomepageHeroImage();
  addEnglishPatientReviews();
});
