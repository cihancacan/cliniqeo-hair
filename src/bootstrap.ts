import './index.css';
import { findLocalPage } from './config/localSeoData';

const root = document.getElementById('root');
const isPrerenderedLocalLanding = Boolean(
  root?.childElementCount && findLocalPage(window.location.pathname),
);

if (isPrerenderedLocalLanding) {
  void import('./staticLocalLanding');
} else {
  void import('./main.tsx');
}
