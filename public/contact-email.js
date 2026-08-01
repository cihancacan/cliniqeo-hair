(() => {
  const CONTACT_PATHS = new Set(['/contact', '/en/contact']);
  if (!CONTACT_PATHS.has(window.location.pathname)) return;

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
    document.querySelectorAll('input[name="age"], input#age').forEach((ageInput) => {
      const ageContainer = ageInput.closest('label') || ageInput.parentElement;
      ageContainer?.remove();
    });

    document.querySelectorAll('input[name="phone"]').forEach((phoneInput) => {
      const phoneContainer = phoneInput.closest('label') || phoneInput.parentElement;
      phoneContainer?.classList.add('md:col-span-2');
      phoneInput.removeAttribute('placeholder');
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
        language: window.location.pathname.startsWith('/en') ? 'en' : 'fr',
        first_name: getValue(formData, 'first_name'),
        last_name: getValue(formData, 'last_name'),
        email: getValue(formData, 'email'),
        phone: getValue(formData, 'phone'),
        message: getValue(formData, 'message'),
        photo_count: selectedPhotos,
      };
      confirmationTriggered = false;
    },
    true,
  );

  const successIsVisible = () => {
    const pageText = document.body.textContent || '';
    return pageText.includes('Demande envoyée !') || pageText.includes('Request sent!');
  };

  const sendConfirmation = async () => {
    if (!pendingRequest || confirmationTriggered || !successIsVisible()) return;
    confirmationTriggered = true;

    try {
      const response = await fetch('/api/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingRequest),
        keepalive: true,
      });

      if (!response.ok) {
        console.warn('The request was saved, but the confirmation email could not be sent.');
      }
    } catch (error) {
      console.warn('The request was saved, but the confirmation email could not be sent.', error);
    }
  };

  const refreshContactPage = () => {
    adjustContactFormLayout();
    void sendConfirmation();
  };

  const observer = new MutationObserver(refreshContactPage);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', refreshContactPage, { once: true });
  window.addEventListener('load', refreshContactPage, { once: true });
  refreshContactPage();
})();
