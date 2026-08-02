import { findLocalPage } from './config/localSeoData';
import { getWhatsAppUrl } from './config/contact';

const page = findLocalPage(window.location.pathname);
const root = document.getElementById('root');
const article = root?.querySelector<HTMLElement>('article');

if (page && root && article) {
  const isFr = page.country === 'fr';
  const cityLabel = page.country === 'us' ? `${page.city.name}, ${page.city.region}` : page.city.name;
  const homePath = isFr ? '/' : '/en';
  const whatsappUrl = getWhatsAppUrl(isFr ? 'fr' : 'en');

  document.documentElement.lang = isFr ? 'fr' : 'en';
  document.body.classList.add('bg-white');
  root.classList.add('min-h-screen', 'bg-white');

  const header = document.createElement('header');
  header.className = 'sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur';
  header.innerHTML = `
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="${homePath}" class="text-decoration-none flex items-baseline" aria-label="Cliniqeo Hair">
        <span class="text-2xl font-bold lowercase text-[#224671]">cliniqeo</span>
        <span class="ml-1 text-base font-semibold uppercase text-[#2f6bfc]">Hair</span>
      </a>
      <a href="#diagnostic-form" class="rounded-xl bg-[#2f6bfc] px-4 py-3 text-sm font-bold text-white no-underline hover:bg-[#224671]">
        ${isFr ? 'Diagnostic gratuit' : 'Free assessment'}
      </a>
    </div>
  `;
  document.body.insertBefore(header, root);

  article.classList.add('local-landing-visible');
  article.querySelectorAll<HTMLAnchorElement>('a[href="/contact"], a[href="/en/contact"]').forEach((link) => {
    link.href = '#diagnostic-form';
  });

  const formSection = document.createElement('section');
  formSection.id = 'diagnostic-form';
  formSection.className = 'mt-16 scroll-mt-28 rounded-3xl border border-blue-100 bg-gradient-to-br from-[#eaf3ff] to-white p-6 shadow-xl md:p-10';
  formSection.innerHTML = `
    <div id="local-form-content">
      <p class="mb-3 text-sm font-bold uppercase tracking-wider text-[#2f6bfc]">${isFr ? 'Réponse sous 24 heures' : 'Response within 24 hours'}</p>
      <h2 class="mb-3 text-3xl font-bold text-[#224671] md:text-4xl">
        ${isFr ? `Diagnostic gratuit depuis ${cityLabel}` : `Free assessment from ${cityLabel}`}
      </h2>
      <p class="mb-8 text-lg leading-relaxed text-slate-600">
        ${isFr
          ? 'Remplissez le formulaire maintenant. Les photos sont facultatives et pourront être envoyées plus tard par WhatsApp ou par email.'
          : 'Submit the form now. Photos are optional and can be sent later by WhatsApp or email.'}
      </p>
      <form id="local-native-form" class="space-y-5">
        <div class="grid gap-5 md:grid-cols-2">
          <label class="block font-bold text-[#224671]">
            ${isFr ? 'Prénom' : 'First name'} *
            <input name="first_name" required autocomplete="given-name" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]" />
          </label>
          <label class="block font-bold text-[#224671]">
            ${isFr ? 'Nom' : 'Last name'} *
            <input name="last_name" required autocomplete="family-name" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]" />
          </label>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <label class="block font-bold text-[#224671]">
            Email *
            <input name="email" type="email" required autocomplete="email" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]" />
          </label>
          <label class="block font-bold text-[#224671]">
            ${isFr ? 'Numéro WhatsApp' : 'WhatsApp number'} *
            <input name="phone" type="tel" required autocomplete="tel" class="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]" />
          </label>
        </div>
        <label class="block font-bold text-[#224671]">
          ${isFr ? 'Votre situation ou votre question' : 'Your situation or question'}
          <textarea name="message" rows="4" class="mt-2 w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none focus:border-[#2f6bfc]"></textarea>
        </label>
        <p id="local-form-error" class="hidden rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700"></p>
        <button type="submit" class="flex w-full items-center justify-center rounded-xl bg-[#2f6bfc] px-7 py-4 text-lg font-bold text-white hover:bg-[#224671] disabled:opacity-60">
          ${isFr ? 'Recevoir mon diagnostic gratuit' : 'Get my free assessment'}
        </button>
      </form>
      <p class="mt-5 text-center text-sm text-slate-500">
        ${isFr ? 'Vous préférez WhatsApp ?' : 'Prefer WhatsApp?'}
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#2f6bfc]">${isFr ? 'Écrivez-nous directement' : 'Message us directly'}</a>
      </p>
    </div>
  `;
  article.append(formSection);

  const footer = document.createElement('footer');
  footer.className = 'mt-16 bg-[#224671] px-4 py-10 text-center text-sm text-blue-100';
  footer.innerHTML = `
    <p class="mx-auto max-w-4xl">
      ${isFr
        ? 'Cliniqeo Hair est une agence française d’accompagnement. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé partenaires en Turquie.'
        : 'Cliniqeo Hair is a care coordination agency. Medical assessments and procedures are performed by partner healthcare professionals in Turkey.'}
    </p>
  `;
  document.body.append(footer);

  const form = document.getElementById('local-native-form') as HTMLFormElement | null;
  const errorBox = document.getElementById('local-form-error');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
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
        <div class="py-8 text-center">
          <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">✓</div>
          <h2 class="mb-4 text-3xl font-bold text-[#224671]">${isFr ? 'Votre demande a bien été envoyée' : 'Your request has been sent'}</h2>
          <p class="text-lg text-slate-600">${isFr ? 'Notre équipe vous contactera pour compléter le diagnostic et vous expliquer les prochaines étapes.' : 'Our team will contact you to complete the assessment and explain the next steps.'}</p>
        </div>
      `;
    } catch (error) {
      console.error('Static local form submission failed:', error);
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
}
