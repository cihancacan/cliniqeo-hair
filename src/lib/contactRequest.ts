export type ContactRequest = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age?: string;
  message?: string;
  language: 'fr' | 'en';
  source_path?: string;
};

const REQUEST_TIMEOUT_MS = 15000;
const MOUNT_PATHS = ['/greffe-cheveux-turquie', '/en/hair-transplant-turkey'];

function getContactEndpoint() {
  const mountPath = MOUNT_PATHS.find((candidate) =>
    window.location.pathname === candidate || window.location.pathname.startsWith(`${candidate}/`),
  );
  return mountPath ? `${mountPath}/api/contact-email` : '/api/contact-email';
}

export async function sendContactRequest(request: ContactRequest) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(getContactEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...request,
        source_path: request.source_path || window.location.pathname,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Contact request failed with status ${response.status}`);
    }
  } finally {
    window.clearTimeout(timeout);
  }
}
