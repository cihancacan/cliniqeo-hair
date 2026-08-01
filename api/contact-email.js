const RESEND_API_URL = 'https://api.resend.com/emails';

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const clean = (value, maxLength = 4000) => String(value ?? '').trim().slice(0, maxLength);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const translations = {
  fr: {
    patientSubject: 'Merci pour votre confiance — récapitulatif de votre demande',
    internalSubject: 'Nouvelle demande de diagnostic — formulaire français',
    heading: 'Merci pour votre confiance',
    intro: 'Votre demande de diagnostic capillaire a bien été enregistrée. Voici le récapitulatif des informations que vous nous avez transmises.',
    outro: "L’équipe Cliniqeo Hair étudiera votre demande et vous contactera dans les meilleurs délais. Cet e-mail confirme uniquement la réception de votre formulaire et ne constitue pas un diagnostic médical.",
    recap: 'Récapitulatif de votre demande',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Numéro de téléphone',
    message: 'Votre message',
    photos: 'Photos reçues',
    photoUnit: (count) => `${count} photo${count > 1 ? 's' : ''}`,
    empty: 'Non renseigné',
    signature: 'L’équipe Cliniqeo Hair',
    internalIntro: 'Une nouvelle demande a été enregistrée depuis la version française du site.',
  },
  en: {
    patientSubject: 'Thank you for your trust — request summary',
    internalSubject: 'New diagnostic request — English form',
    heading: 'Thank you for your trust',
    intro: 'Your hair diagnostic request has been recorded. Below is a summary of the information you submitted.',
    outro: 'The Cliniqeo Hair team will review your request and contact you as soon as possible. This email only confirms receipt of your form and is not a medical diagnosis.',
    recap: 'Your request summary',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone number',
    message: 'Your message',
    photos: 'Photos received',
    photoUnit: (count) => `${count} photo${count === 1 ? '' : 's'}`,
    empty: 'Not provided',
    signature: 'The Cliniqeo Hair team',
    internalIntro: 'A new request was recorded from the English version of the website.',
  },
};

function buildRows(data, copy) {
  const values = [
    [copy.firstName, data.first_name],
    [copy.lastName, data.last_name],
    [copy.email, data.email],
    [copy.phone, data.phone],
    [copy.message, data.message || copy.empty],
    [copy.photos, copy.photoUnit(data.photo_count)],
  ];

  return values
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#224671;vertical-align:top;width:38%;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('');
}

function buildEmailHtml(data, copy, intro, isInternal = false) {
  return `<!doctype html>
<html lang="${data.language}">
  <body style="margin:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <div style="max-width:680px;margin:0 auto;padding:28px 14px;">
      <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(34,70,113,.10);">
        <div style="background:linear-gradient(135deg,#224671,#2f6bfc);padding:28px;text-align:center;color:#ffffff;">
          <div style="font-size:13px;letter-spacing:1.8px;text-transform:uppercase;opacity:.9;">Cliniqeo Hair</div>
          <h1 style="font-size:28px;line-height:1.25;margin:10px 0 0;">${escapeHtml(isInternal ? copy.internalSubject : copy.heading)}</h1>
        </div>
        <div style="padding:28px;">
          <p style="font-size:16px;line-height:1.7;margin:0 0 22px;">${escapeHtml(intro)}</p>
          <h2 style="font-size:20px;color:#224671;margin:0 0 12px;">${escapeHtml(copy.recap)}</h2>
          <table role="presentation" style="width:100%;border-collapse:collapse;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
            ${buildRows(data, copy)}
          </table>
          ${
            isInternal
              ? ''
              : `<p style="font-size:14px;line-height:1.7;color:#4b5563;margin:24px 0 0;">${escapeHtml(copy.outro)}</p>
                 <p style="font-size:15px;font-weight:700;color:#224671;margin:22px 0 0;">${escapeHtml(copy.signature)}</p>`
          }
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function buildText(data, copy, intro, isInternal = false) {
  const rows = [
    `${copy.firstName}: ${data.first_name}`,
    `${copy.lastName}: ${data.last_name}`,
    `${copy.email}: ${data.email}`,
    `${copy.phone}: ${data.phone}`,
    `${copy.message}: ${data.message || copy.empty}`,
    `${copy.photos}: ${copy.photoUnit(data.photo_count)}`,
  ].join('\n');

  return `${intro}\n\n${copy.recap}\n${rows}${isInternal ? '' : `\n\n${copy.outro}\n\n${copy.signature}`}`;
}

async function sendEmail(apiKey, payload, idempotencyKey) {
  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': idempotencyKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Email provider error ${response.status}: ${detail.slice(0, 500)}`);
  }

  return response.json();
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'info@cliniqeo.com';
  const replyTo = process.env.CONTACT_REPLY_TO_EMAIL || recipient;

  if (!apiKey || !from) {
    return response.status(503).json({
      error: 'Email service not configured',
      configured: false,
    });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  const language = body.language === 'en' ? 'en' : 'fr';
  const copy = translations[language];
  const data = {
    language,
    submission_id: clean(body.submission_id, 120) || `${Date.now()}`,
    first_name: clean(body.first_name, 120),
    last_name: clean(body.last_name, 120),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 80),
    message: clean(body.message, 4000),
    photo_count: Math.max(0, Math.min(10, Number(body.photo_count) || 0)),
  };

  if (!data.first_name || !data.last_name || !data.email || !data.phone || !isValidEmail(data.email)) {
    return response.status(400).json({ error: 'Invalid form data' });
  }

  const patientPayload = {
    from,
    to: [data.email],
    reply_to: replyTo,
    subject: copy.patientSubject,
    html: buildEmailHtml(data, copy, copy.intro),
    text: buildText(data, copy, copy.intro),
  };

  const internalPayload = {
    from,
    to: [recipient],
    reply_to: data.email,
    subject: `${copy.internalSubject} — ${data.first_name} ${data.last_name}`,
    html: buildEmailHtml(data, copy, copy.internalIntro, true),
    text: buildText(data, copy, copy.internalIntro, true),
  };

  try {
    const safeId = data.submission_id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 100) || `${Date.now()}`;
    const [patientEmail, internalEmail] = await Promise.all([
      sendEmail(apiKey, patientPayload, `cliniqeo-patient-${safeId}`),
      sendEmail(apiKey, internalPayload, `cliniqeo-internal-${safeId}`),
    ]);

    return response.status(200).json({
      sent: true,
      patient_email_id: patientEmail.id,
      internal_email_id: internalEmail.id,
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return response.status(502).json({ error: 'Unable to send confirmation email' });
  }
}
