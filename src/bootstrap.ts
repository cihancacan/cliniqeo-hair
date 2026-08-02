import './index.css';
import { findLocalSeoPage } from './config/findLocalSeoPage';

const root = document.getElementById('root');
const isPrerenderedLocalLanding = Boolean(
  root?.childElementCount && findLocalSeoPage(window.location.pathname),
);

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  void import('./main.tsx');
}
