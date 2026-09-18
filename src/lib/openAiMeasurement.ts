type OpenAiMeasurementQueue = {
  (...args: unknown[]): void;
  q?: unknown[];
};

declare global {
  interface Window {
    oaiq?: OpenAiMeasurementQueue;
  }
}

const WHATSAPP_EVENT_NAME = 'whatsapp_contact_started';
let whatsappClickListenerInstalled = false;
let lastWhatsAppMeasurementAt = 0;

function measure(...args: unknown[]) {
  window.oaiq?.(...args);
}

export function trackLeadCreated() {
  measure('measure', 'lead_created', {
    type: 'customer_action',
  });
}

export function installWhatsAppConversionTracking() {
  if (whatsappClickListenerInstalled) return;
  whatsappClickListenerInstalled = true;

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.hostname !== 'wa.me' && destination.hostname !== 'api.whatsapp.com') return;

      const now = Date.now();
      if (now - lastWhatsAppMeasurementAt < 1500) return;
      lastWhatsAppMeasurementAt = now;

      measure(
        'measure',
        'custom',
        { type: 'custom' },
        { custom_event_name: WHATSAPP_EVENT_NAME },
      );
    },
    true,
  );
}

