type GtagCommand = (...args: any[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagCommand;
  }
}

const GA4_ID = 'G-4V8DJ7PLL4';
const GOOGLE_ADS_QUOTE_CONVERSION = 'AW-16857032468/zMEcCMTGnZoaEJTOh-Y-';

function getGtag() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return null;
  return window.gtag;
}

function commonParams() {
  if (typeof window === 'undefined') return {};
  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
  };
}

export function trackHairQuoteCtaClick() {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', 'hair_quote_cta_click', {
    ...commonParams(),
    event_category: 'hair_lead',
    send_to: GA4_ID,
  });
}

export function trackHairWhatsAppClick() {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', 'hair_whatsapp_click', {
    ...commonParams(),
    event_category: 'hair_lead',
    send_to: GA4_ID,
  });
}

export function trackHairFormSuccess() {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', 'hair_form_submit_success', {
    ...commonParams(),
    event_category: 'hair_lead',
    send_to: GA4_ID,
  });

  gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_QUOTE_CONVERSION,
    value: 1.0,
    currency: 'EUR',
  });
}
