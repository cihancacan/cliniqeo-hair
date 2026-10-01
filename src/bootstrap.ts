import './index.css';
import { getAppPathname, getHairAssetUrl } from './config/hostedPath';
import { installWhatsAppConversionTracking } from './lib/openAiMeasurement';

installWhatsAppConversionTracking();

const root = document.getElementById('root');
const appPathname = getAppPathname();
const isPrerenderedLocalLanding = Boolean(root?.querySelector('.local-static-page'));

function preloadHomepageHero() {
  if (!['/', '/en', '/hair-transplant-turkey'].includes(appPathname)) return;
  if (document.querySelector('link[data-cliniqeo-hero-preload="true"]')) return;

  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'image';
  preload.href = getHairAssetUrl('/home.cliniqeo.hair.jpg');
  preload.type = 'image/jpeg';
  preload.fetchPriority = 'high';
  preload.dataset.cliniqeoHeroPreload = 'true';
  document.head.appendChild(preload);
}

function installLazyCountryPhoneEnhancer() {
  if (isPrerenderedLocalLanding) return;

  let loading = false;
  let mutationObserver: MutationObserver | null = null;
  const observedInputs = new WeakSet<Element>();
  const selector = 'input[name="phone"], input[type="tel"]:not([data-country-phone-visible="true"])';

  const loadEnhancer = () => {
    if (loading) return;
    loading = true;
    mutationObserver?.disconnect();
    intersectionObserver?.disconnect();
    void import('./config/contact');
  };

  const intersectionObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) loadEnhancer();
        },
        { rootMargin: '600px 0px' },
      )
    : null;

  const watchPhoneInputs = () => {
    if (loading) return;
    const inputs = document.querySelectorAll<Element>(selector);
    inputs.forEach((input) => {
      if (observedInputs.has(input)) return;
      observedInputs.add(input);
      if (intersectionObserver) {
        intersectionObserver.observe(input);
      } else {
        window.setTimeout(loadEnhancer, 1200);
      }
    });
  };

  mutationObserver = new MutationObserver(watchPhoneInputs);
  mutationObserver.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', watchPhoneInputs, { once: true });
  watchPhoneInputs();
}

function installLazyWhatsAppLeadChat() {
  let chatLoaded = false;

  window.addEventListener(
    'click',
    async (event) => {
      if (chatLoaded || event.defaultPrevented || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute('data-whatsapp-direct')) return;

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (destination.hostname !== 'wa.me' && destination.hostname !== 'api.whatsapp.com') return;

      event.preventDefault();
      event.stopImmediatePropagation();
      chatLoaded = true;

      try {
        const module = await import('./lib/whatsappLeadChat');
        module.installWhatsAppLeadChat();
        anchor.click();
      } catch {
        window.open(anchor.href, anchor.target || '_blank', 'noopener,noreferrer');
      }
    },
    true,
  );
}

preloadHomepageHero();
installLazyCountryPhoneEnhancer();
installLazyWhatsAppLeadChat();

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  // Preload only the route chunk that can actually be rendered for the entry URL.
  if (appPathname === '/') void import('./pages/HomePage');
  if (appPathname === '/en') void import('./pages/en/EnglishHomePage');
  if (appPathname === '/hair-transplant-turkey') void import('./pages/seo/HairTransplantTurkey');

  void import('./main.tsx').catch(() => {
    if (root) {
      root.style.display = '';
      root.style.visibility = '';
    }
  });
}
