export const WHATSAPP_NUMBER = '33756872961';
export const WHATSAPP_DISPLAY = '+33 7 56 87 29 61';

const messages = {
  fr: "Bonjour, je souhaite échanger avec Cliniqeo Hair et être appelé via WhatsApp.",
  en: 'Hello, I would like to speak with Cliniqeo Hair and receive a WhatsApp call.',
} as const;

export type ContactLanguage = keyof typeof messages;

export const getWhatsAppUrl = (language: ContactLanguage = 'fr') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[language])}`;
