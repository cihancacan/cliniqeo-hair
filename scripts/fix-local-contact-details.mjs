import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const OLD_PHONE_DISPLAY = '+33 7 56 97 85 83';
const NEW_PHONE_DISPLAY = '+33 7 56 87 29 61';
const OLD_PHONE_DIGITS = '33756978583';
const NEW_PHONE_DIGITS = '33756872961';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }

  return files;
}

const countryCodes = [
  ['+33', 'France (+33)'],
  ['+44', 'United Kingdom (+44)'],
  ['+1', 'USA / Canada (+1)'],
  ['+90', 'Türkiye (+90)'],
  ['+32', 'Belgique / Belgium (+32)'],
  ['+41', 'Suisse / Switzerland (+41)'],
  ['+49', 'Allemagne / Germany (+49)'],
  ['+34', 'Espagne / Spain (+34)'],
  ['+39', 'Italie / Italy (+39)'],
  ['+31', 'Pays-Bas / Netherlands (+31)'],
  ['+351', 'Portugal (+351)'],
  ['+353', 'Irlande / Ireland (+353)'],
  ['+352', 'Luxembourg (+352)'],
  ['+212', 'Maroc / Morocco (+212)'],
  ['+213', 'Algérie / Algeria (+213)'],
  ['+216', 'Tunisie / Tunisia (+216)'],
  ['+971', 'Émirats arabes unis / UAE (+971)'],
  ['+966', 'Arabie saoudite / Saudi Arabia (+966)'],
  ['+974', 'Qatar (+974)'],
  ['+7', 'Kazakhstan (+7)'],
];

function phoneFieldHtml(isFr, defaultCode) {
  const label = isFr ? 'Numéro de téléphone' : 'Phone number';
  const countryLabel = isFr ? 'Indicatif pays' : 'Country calling code';
  const options = countryCodes
    .map(([value, text]) => `<option value="${value}"${value === defaultCode ? ' selected' : ''}>${text}</option>`)
    .join('');

  return `<label class="block font-bold text-[#224671]">${label} *
    <div data-country-phone-wrapper="true" class="mt-2 grid gap-2 md:gap-4" style="grid-template-columns:minmax(135px,.42fr) minmax(0,1fr)">
      <select name="phone_country_code" aria-label="${countryLabel}" required class="w-full min-w-0 rounded-lg border-2 border-slate-300 bg-white px-3 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]">
        ${options}
      </select>
      <input type="tel" name="phone_local" data-country-phone-visible="true" required autocomplete="tel-national" inputmode="tel" class="w-full min-w-0 rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
      <input type="hidden" name="phone" />
    </div>
  </label>`;
}

const phoneAndAgeBlock = /<div class="grid gap-6 md:grid-cols-2">\s*<label class="block font-bold text-\[#224671\]">(?:Numéro WhatsApp|WhatsApp number) \*[\s\S]*?<input type="tel" name="phone"[\s\S]*?<\/label>\s*<label class="block font-bold text-\[#224671\]">(?:Âge|Age)[\s\S]*?<input type="number" name="age"[\s\S]*?<\/label>\s*<\/div>/i;

const files = await walk(dist);
let updated = 0;

for (const file of files) {
  let html = await readFile(file, 'utf8');
  if (!html.includes('id="price-comparison"') || !html.includes('id="local-native-form"')) continue;

  const isFr = /<html\s+lang=["']fr["']/i.test(html);
  const defaultCode = html.includes('/en/us/') ? '+1' : html.includes('/en/uk/') ? '+44' : '+33';
  let next = html
    .replaceAll(OLD_PHONE_DISPLAY, NEW_PHONE_DISPLAY)
    .replaceAll(OLD_PHONE_DIGITS, NEW_PHONE_DIGITS)
    .replace('Indiquez vos coordonnées, votre âge et décrivez votre situation capillaire.', 'Indiquez vos coordonnées et décrivez votre situation capillaire.')
    .replace('Add your contact details, age and information about your hair-loss situation.', 'Add your contact details and information about your hair-loss situation.')
    .replace(phoneAndAgeBlock, phoneFieldHtml(isFr, defaultCode));

  if (next !== html) {
    await writeFile(file, next, 'utf8');
    updated += 1;
  }
}

console.log(`Corrected phone number and form fields in ${updated} local landing HTML files.`);
