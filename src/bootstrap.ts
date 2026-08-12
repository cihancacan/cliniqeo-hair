import './index.css';
import { findLocalSeoPage } from './config/findLocalSeoPage';
import { getAppPathname } from './config/hostedPath';

const root = document.getElementById('root');
const isPrerenderedLocalLanding = Boolean(
  root?.childElementCount && findLocalSeoPage(getAppPathname()),
);

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  void import('./main.tsx');
}
