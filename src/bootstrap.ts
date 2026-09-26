import './index.css';
import { findLocalSeoPage } from './config/findLocalSeoPage';
import { getAppPathname } from './config/hostedPath';
import { installWhatsAppConversionTracking } from './lib/openAiMeasurement';
import { installWhatsAppLeadChat } from './lib/whatsappLeadChat';

installWhatsAppLeadChat();
installWhatsAppConversionTracking();

const root = document.getElementById('root');
const isPrerenderedLocalLanding = Boolean(
  root?.childElementCount && findLocalSeoPage(getAppPathname()),
);

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  void import('./main.tsx');
}
