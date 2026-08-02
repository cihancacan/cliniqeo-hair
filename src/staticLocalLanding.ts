import { findLocalPage } from './config/localSeoData';

const page = findLocalPage(window.location.pathname);
const isFr = page?.country === 'fr';
const cityLabel = page
  ? page.country === 'us'
    ? `${page.city.name}, ${page.city.region}`
    : page.city.name
  : '';

const menuButton = document.getElementById('local-menu-button');
const mobileMenu = document.getElementById('local-mobile-menu');

menuButton?.addEventListener('click', () => {
  const willOpen = mobileMenu?.classList.contains('hidden') ?? false;
  mobileMenu?.classList.toggle('hidden');
  menuButton.setAttribute('aria-expanded', String(willOpen));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll<HTMLAnchorElement>('a[href="/contact"], a[href="/en/contact"]').forEach((link) => {
  link.href = '#diagnostic-form';
});

const form = document.getElementById('local-native-form') as HTMLFormElement | null;
const formSection = document.getElementById('diagnostic-form');
const errorBox = document.getElementById('local-form-error');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!page || !formSection) return;

  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const data = new FormData(form);
  const message = String(data.get('message') || '').trim();
  const sourceMessage = isFr
    ? `[Landing locale : ${cityLabel} | ${page.path}] ${message || 'Demande de diagnostic capillaire.'}`
    : `[Local landing page: ${cityLabel} | ${page.path}] ${message || 'Hair assessment request.'}`;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = isFr ? 'Envoi en cours…' : 'Sending…';
  }
  errorBox?.classList.add('hidden');

  try {
    const response = await fetch('/api/contact-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: isFr ? 'fr' : 'en',
        first_name: String(data.get('first_name') || ''),
        last_name: String(data.get('last_name') || ''),
        email: String(data.get('email') || ''),
        phone: String(data.get('phone') || ''),
        message: sourceMessage,
        photo_count: 0,
      }),
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    formSection.innerHTML = `
      <div class="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-green-200 bg-white p-8 shadow-2xl md:p-12">
          <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-600">✓</div>
          <h2 class="mb-4 text-3xl font-bold text-[#224671]">${isFr ? 'Votre demande a bien été envoyée' : 'Your request has been sent'}</h2>
          <p class="text-lg text-slate-600">${isFr ? 'Notre équipe vous contactera pour compléter le diagnostic, recevoir vos photos et vous expliquer les prochaines étapes.' : 'Our team will contact you to complete the assessment, receive your photographs and explain the next steps.'}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Local landing form submission failed:', error);
    if (errorBox) {
      errorBox.textContent = isFr
        ? 'Une erreur est survenue. Réessayez ou contactez-nous directement sur WhatsApp.'
        : 'Something went wrong. Please try again or contact us directly on WhatsApp.';
      errorBox.classList.remove('hidden');
    }
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = isFr ? 'Recevoir mon diagnostic gratuit' : 'Get my free assessment';
    }
  }
});
