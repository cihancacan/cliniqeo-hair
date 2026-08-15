(() => {
  const ENGLISH_MOUNT_PATH = '/en/hair-transplant-turkey';
  const MOUNT_PATHS = [ENGLISH_MOUNT_PATH, '/greffe-cheveux-turquie'];
  const mountPath = MOUNT_PATHS.find(
    (candidate) => window.location.pathname === candidate || window.location.pathname.startsWith(`${candidate}/`),
  );
  const pathname = mountPath ? (window.location.pathname.slice(mountPath.length) || '/') : window.location.pathname;
  const apiUrl = mountPath ? `${mountPath}/api/contact-email` : '/api/contact-email';
  const CONTACT_PATHS = new Set(['/contact', '/en/contact']);
  if (!CONTACT_PATHS.has(pathname)) return;

  let pendingRequest = null;
  let confirmationTriggered = false;

  const getValue = (formData, key) => String(formData.get(key) || '').trim();

  const createSubmissionId = () => {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  };

  const adjustContactFormLayout = () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    document.querySelectorAll('input[name="age"], input#age').forEach((ageInput) => {
      const ageContainer = ageInput.closest('label') || ageInput.parentElement;
      ageContainer?.remove();
    });

    document.querySelectorAll('input[name="phone"]').forEach((phoneInput) => {
      const phoneContainer = phoneInput.closest('label') || phoneInput.parentElement;
      if (phoneContainer instanceof HTMLElement) {
        phoneContainer.style.gridColumn = '1 / -1';
        phoneContainer.style.width = '100%';
        phoneContainer.style.maxWidth = '100%';
        phoneContainer.style.boxSizing = 'border-box';
      }

      phoneInput.removeAttribute('placeholder');

      const wrapper = phoneContainer?.querySelector('[data-country-phone-wrapper="true"]');
      if (!(wrapper instanceof HTMLElement)) return;

      wrapper.style.display = 'grid';
      wrapper.style.gridTemplateColumns = isDesktop
        ? 'minmax(0, 1fr) minmax(0, 1fr)'
        : 'minmax(145px, 46%) minmax(0, 1fr)';
      wrapper.style.columnGap = isDesktop ? '24px' : '8px';
      wrapper.style.rowGap = '0';
      wrapper.style.width = '100%';
      wrapper.style.maxWidth = '100%';
      wrapper.style.boxSizing = 'border-box';
      wrapper.style.marginTop = phoneInput.closest('label') ? '8px' : '0';

      const countrySelect = wrapper.querySelector('select');
      if (countrySelect instanceof HTMLSelectElement) {
        countrySelect.style.width = '100%';
        countrySelect.style.minWidth = '0';
        countrySelect.style.height = '52px';
        countrySelect.style.boxSizing = 'border-box';
      }

      const visiblePhoneInput = wrapper.querySelector('input[data-country-phone-visible="true"]');
      if (visiblePhoneInput instanceof HTMLInputElement) {
        visiblePhoneInput.removeAttribute('placeholder');
        visiblePhoneInput.style.width = '100%';
        visiblePhoneInput.style.minWidth = '0';
        visiblePhoneInput.style.height = '52px';
        visiblePhoneInput.style.boxSizing = 'border-box';
      }
    });

    document.querySelectorAll('input[data-country-phone-visible="true"]').forEach((visiblePhoneInput) => {
      visiblePhoneInput.removeAttribute('placeholder');
    });
  };

  document.addEventListener(
    'submit',
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (!form.querySelector('input[name="email"]') || !form.querySelector('input[name="phone"]')) return;

      const formData = new FormData(form);
      const selectedPhotos = Array.from(form.querySelectorAll('input[type="file"]')).reduce(
        (count, input) => count + (input.files && input.files.length ? input.files.length : 0),
        0,
      );

      pendingRequest = {
        submission_id: createSubmissionId(),
        language: mountPath === ENGLISH_MOUNT_PATH || pathname.startsWith('/en') ? 'en' : 'fr',
        first_name: getValue(formData, 'first_name'),
        last_name: getValue(formData, 'last_name'),
        email: getValue(formData, 'email'),
        phone: getValue(formData, 'phone'),
        message: getValue(formData, 'message'),
        photo_count: selectedPhotos,
        source_url: window.location.href,
      };
      confirmationTriggered = false;
    },
    true,
  );

  const successIsVisible = () => {
    const pageText = document.body.textContent || '';
    return pageText.includes('Demande envoyée') || pageText.includes('Request sent');
  };

  const sendConfirmation = async () => {
    if (!pendingRequest || confirmationTriggered || !successIsVisible()) return;
    confirmationTriggered = true;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingRequest),
        keepalive: true,
      });

      if (!response.ok) {
        console.warn('The request was saved in Supabase, but the confirmation email could not be sent.');
      }
    } catch (error) {
      console.warn('The request was saved in Supabase, but the confirmation email could not be sent.', error);
    }
  };

  const refreshContactPage = () => {
    adjustContactFormLayout();
    void sendConfirmation();
  };

  let refreshFrame = 0;
  const scheduleRefresh = () => {
    if (refreshFrame) return;
    refreshFrame = window.requestAnimationFrame(() => {
      refreshFrame = 0;
      refreshContactPage();
    });
  };

  const observerRoot = document.getElementById('root') || document.documentElement;
  const observer = new MutationObserver(scheduleRefresh);
  observer.observe(observerRoot, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', scheduleRefresh, { once: true });
  window.addEventListener('load', scheduleRefresh, { once: true });
  window.addEventListener('resize', scheduleRefresh);
  scheduleRefresh();
})();
