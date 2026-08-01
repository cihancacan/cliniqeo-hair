export const WHATSAPP_NUMBER = '33756872961';
export const WHATSAPP_DISPLAY = '+33 7 56 87 29 61';

const messages = {
  fr: "Bonjour, je souhaite échanger avec Cliniqeo Hair et être appelé via WhatsApp.",
  en: 'Hello, I would like to speak with Cliniqeo Hair and receive a WhatsApp call.',
} as const;

export type ContactLanguage = keyof typeof messages;

export const getWhatsAppUrl = (language: ContactLanguage = 'fr') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[language])}`;

type CountryEntry = readonly [countryCode: string, dialCode: string];

const COUNTRY_CALLING_CODES: CountryEntry[] = [
  ['AF', '+93'], ['AL', '+355'], ['DZ', '+213'], ['AS', '+1684'], ['AD', '+376'], ['AO', '+244'],
  ['AI', '+1264'], ['AG', '+1268'], ['AR', '+54'], ['AM', '+374'], ['AW', '+297'], ['AU', '+61'],
  ['AT', '+43'], ['AZ', '+994'], ['BS', '+1242'], ['BH', '+973'], ['BD', '+880'], ['BB', '+1246'],
  ['BY', '+375'], ['BE', '+32'], ['BZ', '+501'], ['BJ', '+229'], ['BM', '+1441'], ['BT', '+975'],
  ['BO', '+591'], ['BA', '+387'], ['BW', '+267'], ['BR', '+55'], ['IO', '+246'], ['BN', '+673'],
  ['BG', '+359'], ['BF', '+226'], ['BI', '+257'], ['CV', '+238'], ['KH', '+855'], ['CM', '+237'],
  ['CA', '+1'], ['KY', '+1345'], ['CF', '+236'], ['TD', '+235'], ['CL', '+56'], ['CN', '+86'],
  ['CO', '+57'], ['KM', '+269'], ['CG', '+242'], ['CD', '+243'], ['CK', '+682'], ['CR', '+506'],
  ['CI', '+225'], ['HR', '+385'], ['CU', '+53'], ['CW', '+599'], ['CY', '+357'], ['CZ', '+420'],
  ['DK', '+45'], ['DJ', '+253'], ['DM', '+1767'], ['DO', '+1809'], ['EC', '+593'], ['EG', '+20'],
  ['SV', '+503'], ['GQ', '+240'], ['ER', '+291'], ['EE', '+372'], ['SZ', '+268'], ['ET', '+251'],
  ['FK', '+500'], ['FO', '+298'], ['FJ', '+679'], ['FI', '+358'], ['FR', '+33'], ['GF', '+594'],
  ['PF', '+689'], ['GA', '+241'], ['GM', '+220'], ['GE', '+995'], ['DE', '+49'], ['GH', '+233'],
  ['GI', '+350'], ['GR', '+30'], ['GL', '+299'], ['GD', '+1473'], ['GP', '+590'], ['GU', '+1671'],
  ['GT', '+502'], ['GG', '+44'], ['GN', '+224'], ['GW', '+245'], ['GY', '+592'], ['HT', '+509'],
  ['HN', '+504'], ['HK', '+852'], ['HU', '+36'], ['IS', '+354'], ['IN', '+91'], ['ID', '+62'],
  ['IR', '+98'], ['IQ', '+964'], ['IE', '+353'], ['IM', '+44'], ['IL', '+972'], ['IT', '+39'],
  ['JM', '+1876'], ['JP', '+81'], ['JE', '+44'], ['JO', '+962'], ['KZ', '+7'], ['KE', '+254'],
  ['KI', '+686'], ['KP', '+850'], ['KR', '+82'], ['KW', '+965'], ['KG', '+996'], ['LA', '+856'],
  ['LV', '+371'], ['LB', '+961'], ['LS', '+266'], ['LR', '+231'], ['LY', '+218'], ['LI', '+423'],
  ['LT', '+370'], ['LU', '+352'], ['MO', '+853'], ['MG', '+261'], ['MW', '+265'], ['MY', '+60'],
  ['MV', '+960'], ['ML', '+223'], ['MT', '+356'], ['MH', '+692'], ['MQ', '+596'], ['MR', '+222'],
  ['MU', '+230'], ['YT', '+262'], ['MX', '+52'], ['FM', '+691'], ['MD', '+373'], ['MC', '+377'],
  ['MN', '+976'], ['ME', '+382'], ['MS', '+1664'], ['MA', '+212'], ['MZ', '+258'], ['MM', '+95'],
  ['NA', '+264'], ['NR', '+674'], ['NP', '+977'], ['NL', '+31'], ['NC', '+687'], ['NZ', '+64'],
  ['NI', '+505'], ['NE', '+227'], ['NG', '+234'], ['NU', '+683'], ['MK', '+389'], ['MP', '+1670'],
  ['NO', '+47'], ['OM', '+968'], ['PK', '+92'], ['PW', '+680'], ['PS', '+970'], ['PA', '+507'],
  ['PG', '+675'], ['PY', '+595'], ['PE', '+51'], ['PH', '+63'], ['PL', '+48'], ['PT', '+351'],
  ['PR', '+1787'], ['QA', '+974'], ['RE', '+262'], ['RO', '+40'], ['RU', '+7'], ['RW', '+250'],
  ['BL', '+590'], ['SH', '+290'], ['KN', '+1869'], ['LC', '+1758'], ['MF', '+590'], ['PM', '+508'],
  ['VC', '+1784'], ['WS', '+685'], ['SM', '+378'], ['ST', '+239'], ['SA', '+966'], ['SN', '+221'],
  ['RS', '+381'], ['SC', '+248'], ['SL', '+232'], ['SG', '+65'], ['SX', '+1721'], ['SK', '+421'],
  ['SI', '+386'], ['SB', '+677'], ['SO', '+252'], ['ZA', '+27'], ['SS', '+211'], ['ES', '+34'],
  ['LK', '+94'], ['SD', '+249'], ['SR', '+597'], ['SE', '+46'], ['CH', '+41'], ['SY', '+963'],
  ['TW', '+886'], ['TJ', '+992'], ['TZ', '+255'], ['TH', '+66'], ['TL', '+670'], ['TG', '+228'],
  ['TK', '+690'], ['TO', '+676'], ['TT', '+1868'], ['TN', '+216'], ['TR', '+90'], ['TM', '+993'],
  ['TC', '+1649'], ['TV', '+688'], ['UG', '+256'], ['UA', '+380'], ['AE', '+971'], ['GB', '+44'],
  ['US', '+1'], ['UY', '+598'], ['UZ', '+998'], ['VU', '+678'], ['VA', '+39'], ['VE', '+58'],
  ['VN', '+84'], ['VG', '+1284'], ['VI', '+1340'], ['WF', '+681'], ['EH', '+212'], ['YE', '+967'],
  ['ZM', '+260'], ['ZW', '+263'], ['XK', '+383'],
];

const PRIORITY_COUNTRIES: Record<ContactLanguage, string[]> = {
  fr: ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'DZ', 'MA', 'TN', 'SN', 'CI', 'CM', 'CD', 'BJ', 'BF', 'TG', 'ML', 'NE', 'GN', 'GA', 'CG', 'MG', 'MU', 'HT'],
  en: ['GB', 'US', 'CA', 'AU', 'IE', 'NZ', 'ZA', 'IN', 'AE', 'SG', 'NG', 'GH', 'KE', 'JM', 'TT', 'PH'],
};

const DEFAULT_COUNTRY: Record<ContactLanguage, string> = { fr: 'FR', en: 'GB' };
const DIAL_CODE_BY_COUNTRY = new Map(COUNTRY_CALLING_CODES);

const flagFor = (countryCode: string) =>
  countryCode === 'XK'
    ? '🇽🇰'
    : String.fromCodePoint(...countryCode.toUpperCase().split('').map((letter) => 127397 + letter.charCodeAt(0)));

function countryName(countryCode: string, language: ContactLanguage) {
  try {
    const DisplayNames = (Intl as typeof Intl & {
      DisplayNames?: new (locales: string[], options: { type: 'region' }) => { of: (code: string) => string | undefined };
    }).DisplayNames;
    return DisplayNames ? new DisplayNames([language], { type: 'region' }).of(countryCode) ?? countryCode : countryCode;
  } catch {
    return countryCode;
  }
}

function setReactInputValue(input: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setter?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function fixPhoneLabel(input: HTMLInputElement, language: ContactLanguage) {
  const text = language === 'fr' ? 'Numéro de téléphone *' : 'Phone number *';
  const externalLabel = input.id ? document.querySelector<HTMLLabelElement>(`label[for="${CSS.escape(input.id)}"]`) : null;

  if (externalLabel) {
    externalLabel.textContent = text;
    return;
  }

  const wrappingLabel = input.closest('label');
  const firstTextNode = wrappingLabel
    ? Array.from(wrappingLabel.childNodes).find((node) => node.nodeType === Node.TEXT_NODE)
    : null;
  if (firstTextNode) firstTextNode.nodeValue = text;
}

function buildCountrySelect(language: ContactLanguage, selectedCountry: string) {
  const select = document.createElement('select');
  select.className = 'w-[46%] sm:w-2/5 px-2 py-3 border-2 border-gray-300 rounded-lg bg-white focus:border-[#2f6bfc] focus:outline-none';
  select.setAttribute('aria-label', language === 'fr' ? 'Indicatif du pays' : 'Country calling code');

  const priorities = PRIORITY_COUNTRIES[language];
  const prioritySet = new Set(priorities);
  const createOption = (countryCode: string) => {
    const dialCode = DIAL_CODE_BY_COUNTRY.get(countryCode) ?? '';
    const option = document.createElement('option');
    option.value = countryCode;
    option.textContent = `${flagFor(countryCode)} ${countryName(countryCode, language)} (${dialCode})`;
    option.selected = countryCode === selectedCountry;
    return option;
  };

  const priorityGroup = document.createElement('optgroup');
  priorityGroup.label = language === 'fr' ? 'Pays francophones prioritaires' : 'English-speaking countries';
  priorities.filter((code) => DIAL_CODE_BY_COUNTRY.has(code)).forEach((code) => priorityGroup.append(createOption(code)));
  select.append(priorityGroup);

  const otherGroup = document.createElement('optgroup');
  otherGroup.label = language === 'fr' ? 'Autres pays' : 'Other countries';
  COUNTRY_CALLING_CODES
    .map(([code]) => code)
    .filter((code) => !prioritySet.has(code))
    .sort((a, b) => countryName(a, language).localeCompare(countryName(b, language), language))
    .forEach((code) => otherGroup.append(createOption(code)));
  select.append(otherGroup);

  return select;
}

function enhancePhoneFields() {
  const language: ContactLanguage = window.location.pathname.startsWith('/en') ? 'en' : 'fr';

  document.querySelectorAll<HTMLInputElement>('input[name="phone"]').forEach((originalInput) => {
    fixPhoneLabel(originalInput, language);

    const existingWrapper = originalInput.parentElement?.querySelector<HTMLElement>('[data-country-phone-wrapper="true"]');
    const existingVisibleInput = existingWrapper?.querySelector<HTMLInputElement>('input[data-country-phone-visible="true"]');
    if (existingVisibleInput) {
      existingVisibleInput.placeholder = language === 'fr' ? '6 12 34 56 78' : 'Phone number';
      existingVisibleInput.setAttribute('aria-label', language === 'fr' ? 'Numéro de téléphone' : 'Phone number');
      return;
    }

    const selectedCountry = DEFAULT_COUNTRY[language];
    const wrapper = document.createElement('div');
    wrapper.dataset.countryPhoneWrapper = 'true';
    wrapper.className = 'mt-2 flex gap-2 w-full';

    const select = buildCountrySelect(language, selectedCountry);
    const visibleInput = document.createElement('input');
    visibleInput.type = 'tel';
    visibleInput.inputMode = 'tel';
    visibleInput.required = originalInput.required;
    visibleInput.autocomplete = 'tel-national';
    visibleInput.dataset.countryPhoneVisible = 'true';
    visibleInput.placeholder = language === 'fr' ? '6 12 34 56 78' : 'Phone number';
    visibleInput.setAttribute('aria-label', language === 'fr' ? 'Numéro de téléphone' : 'Phone number');
    visibleInput.className = 'min-w-0 flex-1 px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors';

    originalInput.required = false;
    originalInput.style.display = 'none';
    originalInput.setAttribute('aria-hidden', 'true');
    originalInput.insertAdjacentElement('afterend', wrapper);
    wrapper.append(select, visibleInput);

    const updateOriginalInput = () => {
      const countryCode = select.value;
      const dialCode = DIAL_CODE_BY_COUNTRY.get(countryCode) ?? '';
      const localDigits = visibleInput.value.replace(/\D/g, '');
      const keepLeadingZero = ['IT', 'SM', 'VA'].includes(countryCode);
      const normalizedDigits = keepLeadingZero ? localDigits : localDigits.replace(/^0+/, '');
      setReactInputValue(originalInput, normalizedDigits ? `${dialCode}${normalizedDigits}` : '');
    };

    select.addEventListener('change', updateOriginalInput);
    visibleInput.addEventListener('input', updateOriginalInput);
  });
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const scheduleEnhancement = () => window.requestAnimationFrame(enhancePhoneFields);
  const observer = new MutationObserver(scheduleEnhancement);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', scheduleEnhancement, { once: true });
  scheduleEnhancement();
}
