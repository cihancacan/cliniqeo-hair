import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { getSiteLanguage, localizeInternalPath } from './config/localizedRoutes';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from './config/contact';
import { getAppPathname, mountHairPath, stripHairMountPath } from './config/hostedPath';

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

    const currentLanguage = getSiteLanguage(getAppPathname());
    const localizedPath = localizeInternalPath(stripHairMountPath(destination.pathname), currentLanguage);

    event.preventDefault();
    window.location.assign(`${mountHairPath(localizedPath)}${destination.search}${destination.hash}`);
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

function addHomepageHeroMedia() {
  if (!['/', '/en'].includes(getAppPathname())) return;

  const page = document.querySelector<HTMLElement>('main > div.pt-20');
  if (!page) return;

  const hero = page.querySelector<HTMLElement>('section');
  if (!hero || hero.classList.contains('home-photo-hero')) return;

  document.getElementById('homepage-hero-media')?.remove();
  hero.classList.add('home-photo-hero');
}

function addEnglishPatientReviews() {
  if (getAppPathname() !== '/en') return;
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

function createEnglishBestClinicSection() {
  const section = document.createElement('section');
  section.id = 'english-best-clinic-guides';
  section.className = 'english-patient-reviews';
  section.innerHTML = `
    <div class="english-patient-reviews__inner">
      <div class="english-patient-reviews__heading">
        <p class="english-patient-reviews__eyebrow">CLINIC SELECTION GUIDES</p>
        <h2>How to choose the best hair transplant clinic in Turkey</h2>
        <p>Compare medical responsibility, donor-area safety, documented outcomes, quotations and aftercare before booking.</p>
      </div>
      <div class="english-patient-reviews__grid">
        <article>
          <h3>Best Hair Transplant Clinic in Turkey</h3>
          <p>A complete 2026 guide covering the doctor, medical team, donor area, FUE, DHI, reviews, pricing and follow-up.</p>
          <p class="english-patient-reviews__card-action"><a href="/best-hair-transplant-clinic-turkey">Read the selection guide</a></p>
        </article>
        <article>
          <h3>Compare Medical Teams and Protocols</h3>
          <p>Understand who performs each stage, how grafts are handled and how FUE and DHI protocols should be compared.</p>
          <p class="english-patient-reviews__card-action"><a href="/best-clinic-for-hair-transplant-turkey">Compare clinics and teams</a></p>
        </article>
        <article>
          <h3>Checklist Before Booking</h3>
          <p>Check assessment, donor planning, quote details, package inclusions, safety documents and aftercare before paying a deposit.</p>
          <p class="english-patient-reviews__card-action"><a href="/best-hair-implant-clinic-turkey">Open the booking checklist</a></p>
        </article>
      </div>
    </div>
  `;
  return section;
}

function addEnglishBestClinicLinks() {
  if (!['/en', '/en/hair-transplant-guides'].includes(getAppPathname())) return;
  if (document.getElementById('english-best-clinic-guides')) return;

  const section = createEnglishBestClinicSection();

  if (getAppPathname() === '/en') {
    const reviews = document.getElementById('english-patient-reviews');
    if (!reviews) return;
    reviews.insertAdjacentElement('afterend', section);
    return;
  }

  const guideSections = document.querySelectorAll<HTMLElement>('main section');
  const firstGuideCategory = Array.from(guideSections).find((item) =>
    item.textContent?.includes('Hair transplant in Turkey and cost'),
  );
  if (!firstGuideCategory) return;
  firstGuideCategory.insertAdjacentElement('afterend', section);
}

function enforceWhatsAppOnlyContact() {
  const language = getSiteLanguage(getAppPathname());
  const whatsappUrl = getWhatsAppUrl(language);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((anchor) => {
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.setAttribute(
      'aria-label',
      language === 'fr'
        ? `Appeler Cliniqeo Hair via WhatsApp au ${WHATSAPP_DISPLAY}`
        : `Call Cliniqeo Hair via WhatsApp at ${WHATSAPP_DISPLAY}`,
    );
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((anchor) => {
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
  });

  document.querySelectorAll<HTMLInputElement>('input[name="phone"], input[type="tel"]').forEach((input) => {
    input.placeholder = language === 'fr'
      ? 'Numéro WhatsApp avec indicatif pays'
      : 'WhatsApp number with country code';
    input.setAttribute('autocomplete', 'tel');
    input.setAttribute('aria-label', language === 'fr' ? 'Numéro WhatsApp' : 'WhatsApp number');
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  textNodes.forEach((node) => {
    const original = node.nodeValue ?? '';
    let updated = original
      .replace(/\+33 1 88 84 22 22/g, WHATSAPP_DISPLAY)
      .replace(/01 88 84 22 22/g, WHATSAPP_DISPLAY)
      .replace(/Appel gratuit/g, 'Appel via WhatsApp')
      .replace(/Numéro gratuit/g, 'Appel WhatsApp')
      .replace(/Free number/g, 'WhatsApp call')
      .replace(/Call \+33/g, 'Call via WhatsApp +33')
      .replace(/être rappelé/g, 'être appelé via WhatsApp')
      .replace(/be called back/g, 'receive a WhatsApp call');

    const trimmed = updated.trim();
    if (trimmed === 'Téléphone') {
      updated = updated.replace('Téléphone', 'WhatsApp');
    } else if (trimmed === 'Téléphone *') {
      updated = updated.replace('Téléphone *', 'Numéro WhatsApp *');
    } else if (trimmed === 'Telephone') {
      updated = updated.replace('Telephone', 'WhatsApp');
    } else if (trimmed === 'Telephone *') {
      updated = updated.replace('Telephone *', 'WhatsApp number *');
    }

    if (updated !== original) node.nodeValue = updated;
  });
}

function enhancePages() {
  enforceWhatsAppOnlyContact();
  addHomepageHeroMedia();
  addEnglishPatientReviews();
  addEnglishBestClinicLinks();
}

let pageEnhancementFrame = 0;
let observerStopTimer = 0;

const schedulePageEnhancements = () => {
  if (pageEnhancementFrame) return;

  pageEnhancementFrame = window.requestAnimationFrame(() => {
    pageEnhancementFrame = 0;
    enhancePages();

    if (document.querySelector('main > div')) {
      window.clearTimeout(observerStopTimer);
      observerStopTimer = window.setTimeout(() => {
        enhancePages();
        pageObserver.disconnect();
      }, 1200);
    }
  });
};

const pageObserver = new MutationObserver(schedulePageEnhancements);
pageObserver.observe(root, { childList: true, subtree: true });

schedulePageEnhancements();
window.addEventListener('load', schedulePageEnhancements, { once: true });
window.setTimeout(() => {
  schedulePageEnhancements();
  pageObserver.disconnect();
}, 5000);
