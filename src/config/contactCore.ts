export const WHATSAPP_NUMBER = '33756872961';
export const WHATSAPP_DISPLAY = '+33 7 56 87 29 61';

export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;
export const getPhoneUrl = () => PHONE_URL;

const messages = {
  fr: "Bonjour, je souhaite échanger avec Cliniqeo Hair par WhatsApp.",
  en: 'Hello, I would like to contact Cliniqeo Hair on WhatsApp.',
} as const;

export type ContactLanguage = keyof typeof messages;

export const getWhatsAppUrl = (language: ContactLanguage = 'fr') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[language])}`;
