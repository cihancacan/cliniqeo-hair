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
