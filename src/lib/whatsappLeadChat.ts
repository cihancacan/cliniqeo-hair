import { getSiteLanguage } from '../config/localizedRoutes';
import { getAppPathname } from '../config/hostedPath';
import { sendContactRequest } from './contactRequest';

const DIRECT_ATTRIBUTE = 'data-whatsapp-direct';
let installed = false;
let closeActiveChat: (() => void) | null = null;

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
    .cwh-overlay{position:fixed;inset:0;z-index:99999;pointer-events:none}
    .cwh-panel{pointer-events:auto;position:absolute;right:18px;bottom:86px;width:380px;max-width:calc(100vw - 36px);max-height:min(540px,calc(100vh - 120px));overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;background:#f4f7f9;border:1px solid rgba(7,94,84,.14);border-radius:18px;box-shadow:0 16px 46px rgba(15,23,42,.24);font-family:Arial,Helvetica,sans-serif;color:#18324f}
    .cwh-panel:after{content:"";position:fixed;right:34px;bottom:72px;border:10px solid transparent;border-top-color:#f4f7f9;filter:drop-shadow(0 3px 2px rgba(15,23,42,.08))}
    .cwh-header{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:10px;padding:13px 14px;background:#075e54;color:#fff;border-radius:18px 18px 0 0}
    .cwh-avatar{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#25d366;font-size:20px;font-weight:800}
    .cwh-head-copy{flex:1}.cwh-head-copy strong{display:block;font-size:16px}.cwh-head-copy span{font-size:12px;opacity:.9}
    .cwh-close{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font-size:22px;cursor:pointer}
    .cwh-body{padding:14px;background:linear-gradient(rgba(255,255,255,.9),rgba(255,255,255,.9)),linear-gradient(135deg,#d9fdd3,#efeae2)}
    .cwh-bubble{max-width:94%;margin:0 0 12px;padding:12px 13px;border-radius:6px 15px 15px 15px;background:#fff;box-shadow:0 2px 8px rgba(15,23,42,.07);line-height:1.4;color:#334155}
    .cwh-bubble h2{margin:0 0 5px;font-size:18px;color:#18324f}.cwh-bubble p{margin:0;font-size:13px}
    .cwh-form{display:grid;gap:9px}.cwh-field{display:grid;gap:4px}.cwh-field label{font-size:12px;font-weight:750;color:#18324f}
    .cwh-field input,.cwh-field textarea{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:10px;background:#fff;padding:10px 11px;font:16px/1.3 Arial,Helvetica,sans-serif;color:#0f172a;outline:none;transition:border-color .15s,box-shadow .15s}
    .cwh-field input:focus,.cwh-field textarea:focus{border-color:#25d366;box-shadow:0 0 0 3px rgba(37,211,102,.16)}.cwh-field textarea{min-height:84px;resize:vertical}
    .cwh-error{display:none;margin:0;padding:10px 12px;border-radius:10px;background:#fff1f2;color:#be123c;font-size:13px}.cwh-error[data-visible="true"]{display:block}
    .cwh-submit,.cwh-whatsapp{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;box-sizing:border-box;border:0;border-radius:11px;padding:12px 14px;background:#25d366;color:#063d2f;font-size:15px;font-weight:800;text-decoration:none;cursor:pointer;box-shadow:0 7px 18px rgba(37,211,102,.22)}
    .cwh-submit:disabled{cursor:wait;opacity:.68}.cwh-privacy,.cwh-note{margin:0;text-align:center;color:#64748b;font-size:11px;line-height:1.45}
    .cwh-success{text-align:center;padding:6px 0 2px}.cwh-check{display:grid;place-items:center;width:62px;height:62px;margin:0 auto 14px;border-radius:50%;background:#dcfce7;color:#15803d;font-size:34px;font-weight:900}.cwh-success h2{margin:0 0 9px;font-size:22px}.cwh-success p{margin:0 0 18px;color:#475569;line-height:1.5}
    @media (max-width:639px){
      .cwh-panel{right:10px;bottom:76px;width:calc(100vw - 20px);max-width:390px;max-height:min(68vh,560px);border-radius:16px}
      .cwh-panel:after{right:27px;bottom:62px}
      .cwh-header{padding:10px 12px;border-radius:16px 16px 0 0}.cwh-avatar{width:34px;height:34px;font-size:18px}.cwh-head-copy strong{font-size:14px}.cwh-head-copy span{font-size:10px}.cwh-close{width:30px;height:30px}
      .cwh-body{padding:10px}.cwh-bubble{margin-bottom:9px;padding:9px 10px}.cwh-bubble h2{font-size:16px}.cwh-bubble p{font-size:12px;line-height:1.35}
      .cwh-form{gap:7px}.cwh-field input,.cwh-field textarea{padding:8px 10px}.cwh-field textarea{min-height:58px;max-height:90px}.cwh-submit{padding:10px 12px;font-size:14px}.cwh-privacy{font-size:10px}
    }
  `;
  document.head.appendChild(style);
}

function openLeadChat(originalUrl: string) {
  closeActiveChat?.();
  const language = getSiteLanguage(getAppPathname());
  const text = copy[language];
  const overlay = document.createElement('div');
  overlay.id = 'cliniqeo-whatsapp-chat';
  overlay.className = 'cwh-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'false');
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
          <div class="cwh-field"><label for="cwh-phone">${text.phone}</label><input id="cwh-phone" name="whatsapp_phone" type="tel" inputmode="tel" data-country-phone-visible="true" autocomplete="tel" placeholder="${text.phonePlaceholder}" required /></div>
          <div class="cwh-field"><label for="cwh-email">${text.email}</label><input id="cwh-email" name="email" type="email" autocomplete="email" placeholder="${text.emailPlaceholder}" required /></div>
          <div class="cwh-field"><label for="cwh-message">${text.message}</label><textarea id="cwh-message" name="message" placeholder="${text.messagePlaceholder}"></textarea></div>
          <p class="cwh-error" role="alert"></p>
          <button class="cwh-submit" type="submit"><span aria-hidden="true">➤</span><span>${text.submit}</span></button>
          <p class="cwh-privacy">${text.privacy}</p>
        </form>
      </div>
    </section>`;

  const onEscape = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    close();
  };
  const close = () => {
    overlay.remove();
    document.removeEventListener('keydown', onEscape);
    if (closeActiveChat === close) closeActiveChat = null;
  };
  closeActiveChat = close;
  overlay.querySelector<HTMLButtonElement>('.cwh-close')?.addEventListener('click', close);
  document.addEventListener('keydown', onEscape);
  document.body.appendChild(overlay);

  const form = overlay.querySelector<HTMLFormElement>('form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fullName = String(data.get('full_name') || '').trim().replace(/\s+/g, ' ');
    const nameParts = fullName.split(' ').filter(Boolean);
    const phone = String(data.get('whatsapp_phone') || '').trim();
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
