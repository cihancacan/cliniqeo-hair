import { getSiteLanguage } from '../config/localizedRoutes';
import { getAppPathname } from '../config/hostedPath';
import { sendContactRequest } from './contactRequest';

const DIRECT_ATTRIBUTE = 'data-whatsapp-direct';
let installed = false;

const copy = {
  fr: {
    header: 'Cliniqeo Hair',
    status: 'Un conseiller vous répond rapidement',
    title: 'Commençons la discussion',
    intro:
      'Avant de commencer, dites-nous simplement qui vous êtes. Cela permettra à notre conseiller de reprendre votre demande immédiatement, sans vous faire répéter.',
    fullName: 'Nom complet',
    fullNamePlaceholder: 'Ex. Jean Dupont',
    phone: 'Numéro WhatsApp',
    phonePlaceholder: 'Ex. +33 6 12 34 56 78',
    email: 'Email',
    emailPlaceholder: 'Ex. jean@email.com',
    message: 'Votre message',
    messagePlaceholder: 'Dites-nous ce que vous souhaitez savoir…',
    submit: 'Continuer la discussion',
    submitting: 'Envoi en cours…',
    privacy: 'Vos informations servent uniquement à traiter votre demande.',
    nameError: 'Veuillez indiquer votre prénom et votre nom.',
    genericError: "La demande n'a pas pu être envoyée. Vérifiez vos informations et réessayez.",
    successTitle: 'Merci, votre demande est bien enregistrée',
    successText:
      'Notre équipe a reçu vos coordonnées. Ouvrez maintenant WhatsApp pour poursuivre la discussion sans quitter définitivement le site.',
    whatsapp: 'Ouvrir la discussion WhatsApp',
    newTab: 'WhatsApp s’ouvrira dans un nouvel onglet. Vous devrez confirmer l’envoi du message.',
    close: 'Fermer',
    defaultMessage: 'Je souhaite recevoir un diagnostic pour une greffe de cheveux.',
    whatsappMessage: (name: string, email: string, message: string) =>
      `Bonjour, je suis ${name}. Je viens d’envoyer ma demande sur le site Cliniqeo Hair. Mon email est ${email}. Ma demande : ${message}`,
  },
  en: {
    header: 'Cliniqeo Hair',
    status: 'An adviser will reply shortly',
    title: 'Let’s start the conversation',
    intro:
      'Before we begin, please tell us who you are. This helps our adviser pick up your request immediately without asking you to repeat everything.',
    fullName: 'Full name',
    fullNamePlaceholder: 'E.g. John Smith',
    phone: 'WhatsApp number',
    phonePlaceholder: 'E.g. +1 555 123 4567',
    email: 'Email',
    emailPlaceholder: 'E.g. john@email.com',
    message: 'Your message',
    messagePlaceholder: 'Tell us what you would like to know…',
    submit: 'Continue the conversation',
    submitting: 'Sending…',
    privacy: 'Your details are used only to handle your request.',
    nameError: 'Please enter your first and last name.',
    genericError: 'Your request could not be sent. Check your details and try again.',
    successTitle: 'Thank you, your request has been received',
    successText:
      'Our team has received your details. You can now open WhatsApp to continue while keeping this website open.',
    whatsapp: 'Open the WhatsApp conversation',
    newTab: 'WhatsApp will open in a new tab. You will need to confirm sending the message.',
    close: 'Close',
    defaultMessage: 'I would like a hair transplant assessment.',
    whatsappMessage: (name: string, email: string, message: string) =>
      `Hello, I’m ${name}. I have just submitted my request on the Cliniqeo Hair website. My email is ${email}. My request: ${message}`,
  },
};

function isWhatsAppUrl(value: string) {
  try {
    const destination = new URL(value, window.location.href);
    return destination.hostname === 'wa.me' || destination.hostname === 'api.whatsapp.com';
  } catch {
    return false;
  }
}

function installStyles() {
  if (document.getElementById('cliniqeo-whatsapp-chat-styles')) return;
  const style = document.createElement('style');
  style.id = 'cliniqeo-whatsapp-chat-styles';
  style.textContent = `
    .cwh-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:flex-end;justify-content:center;padding:16px;background:rgba(15,23,42,.56);backdrop-filter:blur(4px)}
    .cwh-panel{width:min(100%,440px);max-height:calc(100vh - 32px);overflow:auto;background:#f4f7f9;border-radius:22px;box-shadow:0 24px 70px rgba(15,23,42,.32);font-family:Arial,Helvetica,sans-serif;color:#18324f}
    .cwh-header{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:12px;padding:16px 18px;background:#075e54;color:#fff;border-radius:22px 22px 0 0}
    .cwh-avatar{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#25d366;font-size:22px;font-weight:800}
    .cwh-head-copy{flex:1}.cwh-head-copy strong{display:block;font-size:16px}.cwh-head-copy span{font-size:12px;opacity:.9}
    .cwh-close{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font-size:24px;cursor:pointer}
    .cwh-body{padding:18px;background:linear-gradient(rgba(255,255,255,.86),rgba(255,255,255,.86)),linear-gradient(135deg,#d9fdd3,#efeae2)}
    .cwh-bubble{max-width:92%;margin:0 0 16px;padding:14px 15px;border-radius:6px 18px 18px 18px;background:#fff;box-shadow:0 2px 9px rgba(15,23,42,.08);line-height:1.48;color:#334155}
    .cwh-bubble h2{margin:0 0 7px;font-size:20px;color:#18324f}.cwh-bubble p{margin:0;font-size:14px}
    .cwh-form{display:grid;gap:12px}.cwh-field{display:grid;gap:6px}.cwh-field label{font-size:13px;font-weight:750;color:#18324f}
    .cwh-field input,.cwh-field textarea{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:12px;background:#fff;padding:12px 13px;font:inherit;color:#0f172a;outline:none;transition:border-color .2s,box-shadow .2s}
    .cwh-field input:focus,.cwh-field textarea:focus{border-color:#25d366;box-shadow:0 0 0 3px rgba(37,211,102,.16)}.cwh-field textarea{min-height:84px;resize:vertical}
    .cwh-error{display:none;margin:0;padding:10px 12px;border-radius:10px;background:#fff1f2;color:#be123c;font-size:13px}.cwh-error[data-visible="true"]{display:block}
    .cwh-submit,.cwh-whatsapp{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;box-sizing:border-box;border:0;border-radius:13px;padding:14px 16px;background:#25d366;color:#063d2f;font-size:16px;font-weight:800;text-decoration:none;cursor:pointer;box-shadow:0 8px 20px rgba(37,211,102,.24)}
    .cwh-submit:disabled{cursor:wait;opacity:.68}.cwh-privacy,.cwh-note{margin:0;text-align:center;color:#64748b;font-size:11px;line-height:1.45}
    .cwh-success{text-align:center;padding:6px 0 2px}.cwh-check{display:grid;place-items:center;width:62px;height:62px;margin:0 auto 14px;border-radius:50%;background:#dcfce7;color:#15803d;font-size:34px;font-weight:900}.cwh-success h2{margin:0 0 9px;font-size:22px}.cwh-success p{margin:0 0 18px;color:#475569;line-height:1.5}
    @media (min-width:640px){.cwh-overlay{align-items:center}.cwh-panel{max-height:min(760px,calc(100vh - 48px))}}
    @media (max-width:639px){.cwh-overlay{padding:0;align-items:flex-end}.cwh-panel{max-height:92vh;border-radius:22px 22px 0 0}.cwh-header{border-radius:22px 22px 0 0}}
  `;
  document.head.appendChild(style);
}

function openLeadChat(originalUrl: string) {
  document.getElementById('cliniqeo-whatsapp-chat')?.remove();
  const language = getSiteLanguage(getAppPathname());
  const text = copy[language];
  const overlay = document.createElement('div');
  overlay.id = 'cliniqeo-whatsapp-chat';
  overlay.className = 'cwh-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'cwh-title');
  overlay.innerHTML = `
    <section class="cwh-panel">
      <header class="cwh-header">
        <div class="cwh-avatar" aria-hidden="true">C</div>
        <div class="cwh-head-copy"><strong>${text.header}</strong><span>● ${text.status}</span></div>
        <button class="cwh-close" type="button" aria-label="${text.close}">×</button>
      </header>
      <div class="cwh-body">
        <div class="cwh-bubble"><h2 id="cwh-title">${text.title}</h2><p>${text.intro}</p></div>
        <form class="cwh-form">
          <div class="cwh-field"><label for="cwh-name">${text.fullName}</label><input id="cwh-name" name="full_name" autocomplete="name" placeholder="${text.fullNamePlaceholder}" required /></div>
          <div class="cwh-field"><label for="cwh-phone">${text.phone}</label><input id="cwh-phone" name="phone" type="tel" autocomplete="tel" placeholder="${text.phonePlaceholder}" required /></div>
          <div class="cwh-field"><label for="cwh-email">${text.email}</label><input id="cwh-email" name="email" type="email" autocomplete="email" placeholder="${text.emailPlaceholder}" required /></div>
          <div class="cwh-field"><label for="cwh-message">${text.message}</label><textarea id="cwh-message" name="message" placeholder="${text.messagePlaceholder}"></textarea></div>
          <p class="cwh-error" role="alert"></p>
          <button class="cwh-submit" type="submit"><span aria-hidden="true">➤</span><span>${text.submit}</span></button>
          <p class="cwh-privacy">${text.privacy}</p>
        </form>
      </div>
    </section>`;

  const close = () => {
    overlay.remove();
    document.body.style.overflow = '';
  };
  overlay.querySelector<HTMLButtonElement>('.cwh-close')?.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  const onEscape = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    close();
    document.removeEventListener('keydown', onEscape);
  };
  document.addEventListener('keydown', onEscape);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  window.setTimeout(() => overlay.querySelector<HTMLInputElement>('#cwh-name')?.focus(), 30);

  const form = overlay.querySelector<HTMLFormElement>('form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fullName = String(data.get('full_name') || '').trim().replace(/\s+/g, ' ');
    const nameParts = fullName.split(' ').filter(Boolean);
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim() || text.defaultMessage;
    const error = overlay.querySelector<HTMLElement>('.cwh-error');
    const submit = overlay.querySelector<HTMLButtonElement>('.cwh-submit');

    if (nameParts.length < 2) {
      if (error) {
        error.textContent = text.nameError;
        error.dataset.visible = 'true';
      }
      return;
    }

    if (error) error.dataset.visible = 'false';
    if (submit) {
      submit.disabled = true;
      submit.lastElementChild!.textContent = text.submitting;
    }

    try {
      await sendContactRequest({
        language,
        first_name: nameParts[0],
        last_name: nameParts.slice(1).join(' '),
        phone,
        email,
        message: `[Mini-chat WhatsApp] ${message}`,
        source_path: window.location.pathname,
      });

      const original = new URL(originalUrl, window.location.href);
      const destinationPhone = original.hostname === 'wa.me'
        ? original.pathname.replace(/\D/g, '')
        : original.searchParams.get('phone')?.replace(/\D/g, '') || '33756872961';
      const whatsappUrl = `https://wa.me/${destinationPhone || '33756872961'}?text=${encodeURIComponent(text.whatsappMessage(fullName, email, message))}`;
      const body = overlay.querySelector<HTMLElement>('.cwh-body');
      if (body) {
        body.innerHTML = `
          <div class="cwh-bubble cwh-success">
            <div class="cwh-check" aria-hidden="true">✓</div>
            <h2>${text.successTitle}</h2>
            <p>${text.successText}</p>
            <a class="cwh-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" ${DIRECT_ATTRIBUTE}="true"><span aria-hidden="true">◉</span>${text.whatsapp}</a>
            <p class="cwh-note" style="margin-top:12px">${text.newTab}</p>
          </div>`;
      }
    } catch {
      if (error) {
        error.textContent = text.genericError;
        error.dataset.visible = 'true';
      }
      if (submit) {
        submit.disabled = false;
        submit.lastElementChild!.textContent = text.submit;
      }
    }
  });
}

export function installWhatsAppLeadChat() {
  if (installed) return;
  installed = true;
  installStyles();

  window.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute(DIRECT_ATTRIBUTE) || !isWhatsAppUrl(anchor.href)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      openLeadChat(anchor.href);
    },
    true,
  );
}
