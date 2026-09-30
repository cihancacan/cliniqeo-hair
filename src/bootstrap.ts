import './index.css';
import { getAppPathname } from './config/hostedPath';
import { installWhatsAppConversionTracking } from './lib/openAiMeasurement';
import { installWhatsAppLeadChat } from './lib/whatsappLeadChat';

installWhatsAppLeadChat();
installWhatsAppConversionTracking();

const root = document.getElementById('root');
const appPathname = getAppPathname();
const isPrerenderedLocalLanding = Boolean(root?.querySelector('.local-static-page'));

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  // Start the homepage route chunk alongside the app shell instead of waiting
  // for React Router to discover it after the shell has downloaded.
  if (appPathname === '/') void import('./pages/HomePage');
  if (appPathname === '/en' || appPathname === '/hair-transplant-turkey') {
    void import('./pages/en/EnglishHomePage');
  }
  void import('./main.tsx').catch(() => {
    if (root) root.style.visibility = '';
  });
}
