const RESEND_API_URL = 'https://api.resend.com/emails';

const INTERNAL_RECIPIENTS = [
  'info@cliniqeo.com',
  'cacancihan@gmail.com',
];

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
    patientSubject: 'Votre demande de diagnostic gratuit — récapitulatif',
    internalSubject: 'Nouvelle demande de diagnostic capillaire',
    heading: 'Merci pour votre demande',
    intro:
      'Votre demande de diagnostic capillaire gratuit a bien été enregistrée dans notre système. Un conseiller Cliniqeo Hair va vous recontacter rapidement par WhatsApp, appel téléphonique ou email afin d’étudier votre situation.',
    correction:
      'Vérifiez attentivement le récapitulatif ci-dessous. Si une information est incorrecte, vous pouvez répondre directement à cet email pour la corriger.',
    complement:
      'Vous pouvez également répondre à cet email pour ajouter une information, poser une question, indiquer vos disponibilités ou préciser votre préférence de contact : WhatsApp, appel téléphonique ou email.',
    medicalNotice:
      'Cet email confirme la réception de votre demande. Le diagnostic définitif sera établi après l’étude de votre dossier et de vos photos par les professionnels concernés.',
    recap: 'Récapitulatif de votre demande',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    phone: 'Numéro de téléphone',
    message: 'Informations transmises',
    photos: 'Photos reçues',
    source: 'Page d’origine',
    photoUnit: (count) => `${count} photo${count > 1 ? 's' : ''}`,
    empty: 'Non renseigné',
    signature: 'L’équipe Cliniqeo Hair',
    internalIntro:
      'Une nouvelle demande a été enregistrée dans Supabase. Ce message est une notification : le dossier complet reste conservé dans la base de données.',
  },
  en: {
    patientSubject: 'Your free hair assessment request — summary',
    internalSubject: 'New hair assessment request',
    heading: 'Thank you for your request',
    intro:
      'Your free hair assessment request has been recorded in our system. A Cliniqeo Hair adviser will contact you shortly by WhatsApp, telephone call or email to review your situation.',
    correction:
      'Please check the summary below carefully. If any information is incorrect, simply reply to this email so that we can correct it.',
    complement:
      'You may also reply to add information, ask a question, provide your availability or tell us whether you prefer WhatsApp, a telephone call or email.',
    medicalNotice:
      'This email confirms receipt of your request. The final assessment will be prepared after the relevant professionals review your information and photographs.',
    recap: 'Your request summary',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone number',
    message: 'Information submitted',
    photos: 'Photos received',
    source: 'Source page',
    photoUnit: (count) => `${count} photo${count === 1 ? '' : 's'}`,
    empty: 'Not provided',
    signature: 'The Cliniqeo Hair team',
    internalIntro:
      'A new request was recorded in Supabase. This message is a notification; the complete record remains stored in the database.',
  },
};

function getRecipients() {
  const configured = [
    process.env.CONTACT_RECIPIENT_EMAILS,
    process.env.CONTACT_RECIPIENT_EMAIL,
  ]
    .filter(Boolean)
    .flatMap((value) => String(value).split(','))
    .map((value) => value.trim().toLowerCase())
    .filter(isValidEmail);

  return [...new Set([...INTERNAL_RECIPIENTS, ...configured])];
}

function buildRows(data, copy, isInternal) {
  const values = [
    [copy.firstName, data.first_name],
    [copy.lastName, data.last_name],
    [copy.email, data.email],
    [copy.phone, data.phone],
    [copy.message, data.message || copy.empty],
    [copy.photos, copy.photoUnit(data.photo_count)],
  ];

  if (isInternal && data.source_url) {
    values.push([copy.source, data.source_url]);
  }

  return values
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#224671;vertical-align:top;width:38%;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;word-break:break-word;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('');
}

function buildEmailHtml(data, copy, isInternal = false) {
  const patientInformation = isInternal
    ? ''
    : `
      <p style="font-size:15px;line-height:1.7;color:#374151;margin:22px 0 0;">${escapeHtml(copy.correction)}</p>
      <p style="font-size:15px;line-height:1.7;color:#374151;margin:12px 0 0;">${escapeHtml(copy.complement)}</p>
      <div style="margin:22px 0 0;padding:16px 18px;background:#eef4ff;border-left:4px solid #2f6bfc;border-radius:8px;color:#334155;font-size:14px;line-height:1.65;">${escapeHtml(copy.medicalNotice)}</div>
      <p style="font-size:15px;font-weight:700;color:#224671;margin:22px 0 0;">${escapeHtml(copy.signature)}</p>`;

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
          <p style="font-size:16px;line-height:1.7;margin:0 0 22px;">${escapeHtml(isInternal ? copy.internalIntro : copy.intro)}</p>
          <h2 style="font-size:20px;color:#224671;margin:0 0 12px;">${escapeHtml(copy.recap)}</h2>
          <table role="presentation" style="width:100%;border-collapse:collapse;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
            ${buildRows(data, copy, isInternal)}
          </table>
          ${patientInformation}
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function buildText(data, copy, isInternal = false) {
  const rows = [
    `${copy.firstName}: ${data.first_name}`,
    `${copy.lastName}: ${data.last_name}`,
    `${copy.email}: ${data.email}`,
    `${copy.phone}: ${data.phone}`,
    `${copy.message}: ${data.message || copy.empty}`,
    `${copy.photos}: ${copy.photoUnit(data.photo_count)}`,
  ];

  if (isInternal && data.source_url) rows.push(`${copy.source}: ${data.source_url}`);

  if (isInternal) {
    return `${copy.internalIntro}\n\n${copy.recap}\n${rows.join('\n')}`;
  }

  return `${copy.intro}\n\n${copy.recap}\n${rows.join('\n')}\n\n${copy.correction}\n\n${copy.complement}\n\n${copy.medicalNotice}\n\n${copy.signature}`;
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
  const from = process.env.CONTACT_FROM_EMAIL || 'Cliniqeo Hair <info@cliniqeo.com>';
  const replyTo = process.env.CONTACT_REPLY_TO_EMAIL || 'info@cliniqeo.com';
  const recipients = getRecipients();

  if (!apiKey) {
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
    source_url: clean(body.source_url, 500),
  };

  if (!data.first_name || !data.last_name || !data.email || !data.phone || !isValidEmail(data.email)) {
    return response.status(400).json({ error: 'Invalid form data' });
  }

  const patientPayload = {
    from,
    to: [data.email],
    reply_to: replyTo,
    subject: copy.patientSubject,
    html: buildEmailHtml(data, copy),
    text: buildText(data, copy),
  };

  const internalPayload = {
    from,
    to: recipients,
    reply_to: data.email,
    subject: `${copy.internalSubject} — ${data.first_name} ${data.last_name}`,
    html: buildEmailHtml(data, copy, true),
    text: buildText(data, copy, true),
  };

  try {
    const safeId = data.submission_id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 100) || `${Date.now()}`;
    const [patientEmail, internalEmail] = await Promise.all([
      sendEmail(apiKey, patientPayload, `cliniqeo-patient-${safeId}`),
      sendEmail(apiKey, internalPayload, `cliniqeo-internal-${safeId}`),
    ]);

    return response.status(200).json({
      sent: true,
      stored_in: 'supabase',
      recipients,
      patient_email_id: patientEmail.id,
      internal_email_id: internalEmail.id,
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return response.status(502).json({ error: 'Unable to send confirmation email' });
  }
}
