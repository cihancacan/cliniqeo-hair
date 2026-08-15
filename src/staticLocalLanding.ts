import { supabase } from './lib/supabase';
import { findLocalSeoPage } from './config/findLocalSeoPage';
import { getAppPathname, getHairApiUrl } from './config/hostedPath';


const page = findLocalSeoPage(getAppPathname());
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

document.querySelectorAll<HTMLAnchorElement>('a[href$="/contact"]').forEach((link) => {
  link.href = '#diagnostic-form';
});

type PhotoType = 'front' | 'top' | 'back';
const photoTypes: PhotoType[] = ['front', 'top', 'back'];

function resetPhoto(type: PhotoType) {
  const input = document.querySelector<HTMLInputElement>(`[data-photo-input="${type}"]`);
  const preview = document.querySelector<HTMLImageElement>(`[data-photo-preview="${type}"]`);
  const placeholder = document.querySelector<HTMLElement>(`[data-photo-placeholder="${type}"]`);
  const removeButton = document.querySelector<HTMLButtonElement>(`[data-remove-photo="${type}"]`);

  if (input) input.value = '';
  if (preview) {
    preview.src = '';
    preview.classList.add('hidden');
  }
  placeholder?.classList.remove('hidden');
  removeButton?.classList.add('hidden');
}

photoTypes.forEach((type) => {
  const input = document.querySelector<HTMLInputElement>(`[data-photo-input="${type}"]`);
  const preview = document.querySelector<HTMLImageElement>(`[data-photo-preview="${type}"]`);
  const placeholder = document.querySelector<HTMLElement>(`[data-photo-placeholder="${type}"]`);
  const removeButton = document.querySelector<HTMLButtonElement>(`[data-remove-photo="${type}"]`);

  input?.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file || !preview) {
      resetPhoto(type);
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.src = String(reader.result || '');
      preview.classList.remove('hidden');
      placeholder?.classList.add('hidden');
      removeButton?.classList.remove('hidden');
    });
    reader.readAsDataURL(file);
  });

  removeButton?.addEventListener('click', () => resetPhoto(type));
});

const form = document.getElementById('local-native-form') as HTMLFormElement | null;
const formContent = document.getElementById('local-form-content');
const errorBox = document.getElementById('local-form-error');
const countryCodeSelect = form?.querySelector<HTMLSelectElement>('select[name="phone_country_code"]') ?? null;
const visiblePhoneInput = form?.querySelector<HTMLInputElement>('input[name="phone_local"]') ?? null;
const hiddenPhoneInput = form?.querySelector<HTMLInputElement>('input[name="phone"]') ?? null;

function createSubmissionId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function updateCompletePhoneNumber() {
  if (!hiddenPhoneInput) return;

  const rawNumber = visiblePhoneInput?.value.trim() ?? '';
  if (!rawNumber) {
    hiddenPhoneInput.value = '';
    return;
  }

  if (rawNumber.startsWith('+')) {
    hiddenPhoneInput.value = `+${rawNumber.replace(/\D/g, '')}`;
    return;
  }

  const countryCode = countryCodeSelect?.value || '';
  const localNumber = rawNumber.replace(/\D/g, '').replace(/^0+/, '');
  hiddenPhoneInput.value = localNumber ? `${countryCode}${localNumber}` : '';
}

countryCodeSelect?.addEventListener('change', updateCompletePhoneNumber);
visiblePhoneInput?.addEventListener('input', updateCompletePhoneNumber);

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!page || !formContent) return;

  updateCompletePhoneNumber();

  const submissionId = createSubmissionId();
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const data = new FormData(form);
  const message = String(data.get('message') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const sourceMessage = isFr
    ? `[Landing locale : ${cityLabel} | ${page.keyword.label} | ${page.path}] ${message || 'Demande de diagnostic capillaire.'}`
    : `[Local landing page: ${cityLabel} | ${page.keyword.label} | ${page.path}] ${message || 'Hair assessment request.'}`;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = isFr ? 'Envoi en cours…' : 'Sending…';
  }
  errorBox?.classList.add('hidden');

  try {
    const photoUrls = {
      photo_front_url: null as string | null,
      photo_top_url: null as string | null,
      photo_donor_url: null as string | null,
    };

    const uploadMap: Array<[PhotoType, keyof typeof photoUrls]> = [
      ['front', 'photo_front_url'],
      ['top', 'photo_top_url'],
      ['back', 'photo_donor_url'],
    ];

    await Promise.all(uploadMap.map(async ([type, databaseField]) => {
      const value = data.get(`photo_${type}`);
      if (!(value instanceof File) || value.size === 0) return;

      const safeName = value.name.replace(/[^a-zA-Z0-9._-]/g, '-');
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${type}_${safeName}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('diagnostic-photos')
        .upload(fileName, value);

      if (uploadError) throw uploadError;
      photoUrls[databaseField] = uploadData.path;
    }));

    const { error: submitError } = await supabase.from('diagnostic_requests').insert([
      {
        first_name: String(data.get('first_name') || ''),
        last_name: String(data.get('last_name') || ''),
        email: String(data.get('email') || ''),
        phone,
        message: sourceMessage,
        status: 'pending',
        ...photoUrls,
      },
    ]);

    if (submitError) throw submitError;

    const photoCount = Object.values(photoUrls).filter(Boolean).length;
    void fetch(getHairApiUrl('/api/contact-email'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submission_id: submissionId,
        language: isFr ? 'fr' : 'en',
        first_name: String(data.get('first_name') || ''),
        last_name: String(data.get('last_name') || ''),
        email: String(data.get('email') || ''),
        phone,
        message: sourceMessage,
        photo_count: photoCount,
        source_url: window.location.href,
      }),
      keepalive: true,
    }).catch((emailError) => {
      console.warn('Lead saved in Supabase, but notification email failed:', emailError);
    });

    formContent.innerHTML = `
      <div class="py-10 text-center">
        <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-600">✓</div>
        <h2 class="mb-4 text-3xl font-bold text-[#224671]">${isFr ? 'Demande envoyée !' : 'Request sent'}</h2>
        <p class="text-lg leading-relaxed text-slate-700">${isFr ? 'Votre demande de diagnostic a bien été enregistrée. Vérifiez votre email : vous recevrez un récapitulatif auquel vous pourrez répondre pour corriger ou compléter vos informations.' : 'Your assessment request has been recorded. Check your email for a summary that you can reply to if you need to correct or add information.'}</p>
      </div>
    `;
  } catch (error) {
    console.error('Local landing assessment submission failed:', error);
    if (errorBox) {
      errorBox.textContent = isFr
        ? 'Une erreur est survenue. Réessayez ou contactez-nous directement sur WhatsApp.'
        : 'Something went wrong. Please try again or contact us directly on WhatsApp.';
      errorBox.classList.remove('hidden');
    }
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = isFr ? 'Envoyer ma demande' : 'Send my request';
    }
  }
});
