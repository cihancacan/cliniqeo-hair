import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');

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

function formHtml(isFr, label) {
  const steps = isFr
    ? [
        ['1', 'Remplissez le formulaire', 'Indiquez vos coordonnées, votre âge et décrivez votre situation capillaire.'],
        ['2', 'Échangez avec un conseiller', 'Un conseiller vous contacte pour préciser vos besoins et répondre à vos questions.'],
        ['3', 'Recevez votre diagnostic', 'Votre cas est étudié afin de préparer une première estimation et un devis personnalisé.'],
        ['4', 'Planifiez votre séjour', 'Lorsque le projet est confirmé, Cliniqeo organise les prochaines étapes avec les partenaires médicaux.'],
      ]
    : [
        ['1', 'Complete the form', 'Add your contact details, age and information about your hair-loss situation.'],
        ['2', 'Speak with an adviser', 'An adviser contacts you to clarify your needs and answer your questions.'],
        ['3', 'Receive your assessment', 'Your case is reviewed to prepare an initial recommendation and personalised quotation.'],
        ['4', 'Plan the next steps', 'Once the plan is confirmed, Cliniqeo coordinates the journey with its medical partners.'],
      ];

  const stepMarkup = steps.map(([number, title, text]) => `
    <div class="flex items-start gap-4">
      <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#2f6bfc] text-xl font-bold text-white">${number}</div>
      <div><h3 class="mb-2 text-xl font-bold text-[#224671]">${title}</h3><p class="leading-relaxed text-slate-700">${text}</p></div>
    </div>`).join('');

  return `
    <section id="diagnostic-form" class="scroll-mt-24 bg-white py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-wider text-[#2f6bfc]">${isFr ? 'RÉPONSE SOUS 24 HEURES' : 'RESPONSE WITHIN 24 HOURS'}</p>
          <h2 class="mb-5 text-4xl font-bold text-[#224671] md:text-5xl">${isFr ? `Diagnostic capillaire gratuit depuis ${label}` : `Free hair transplant assessment from ${label}`}</h2>
          <p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">${isFr ? 'Remplissez ce formulaire simple. Un conseiller vous recontactera pour étudier votre demande et répondre à vos questions.' : 'Complete this simple form. An adviser will contact you to review your request and answer your questions.'}</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 class="mb-7 text-3xl font-bold text-[#224671]">${isFr ? 'Comment ça marche ?' : 'How the assessment works'}</h2>
            <div class="space-y-6">${stepMarkup}</div>
            <div class="mt-10 rounded-xl bg-slate-50 p-7">
              <h3 class="mb-5 text-2xl font-bold text-[#224671]">${isFr ? 'Coordonnées Cliniqeo Hair' : 'Contact Cliniqeo Hair'}</h3>
              <div class="space-y-4 text-slate-700">
                <p><strong>WhatsApp</strong><br><a href="https://wa.me/33756978583" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#2f6bfc]">+33 7 56 97 85 83</a></p>
                <p><strong>Email</strong><br><a href="mailto:info@cliniqeo.com" class="font-semibold text-[#2f6bfc]">info@cliniqeo.com</a></p>
                <p><strong>${isFr ? 'Localisation' : 'Locations'}</strong><br>Paris, France<br>Istanbul, Türkiye</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl bg-[#f3f3f3] p-6 md:p-8">
            <div id="local-form-content">
              <h2 class="mb-2 text-3xl font-bold text-[#224671]">${isFr ? 'Formulaire de Diagnostic Gratuit' : 'Assessment form'}</h2>
              <p class="mb-6 text-slate-600">${isFr ? 'Les champs marqués d’un * sont obligatoires.' : 'Fields marked with * are required.'}</p>
              <form id="local-native-form" class="space-y-6">
                <div class="grid gap-6 md:grid-cols-2">
                  <label class="block font-bold text-[#224671]">${isFr ? 'Prénom' : 'First name'} *
                    <input type="text" name="first_name" required autocomplete="given-name" class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
                  </label>
                  <label class="block font-bold text-[#224671]">${isFr ? 'Nom' : 'Last name'} *
                    <input type="text" name="last_name" required autocomplete="family-name" class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
                  </label>
                </div>

                <label class="block font-bold text-[#224671]">Email *
                  <input type="email" name="email" required autocomplete="email" class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
                </label>

                <div class="grid gap-6 md:grid-cols-2">
                  <label class="block font-bold text-[#224671]">${isFr ? 'Numéro WhatsApp' : 'WhatsApp number'} *
                    <input type="tel" name="phone" required autocomplete="tel" class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
                  </label>
                  <label class="block font-bold text-[#224671]">${isFr ? 'Âge' : 'Age'}
                    <input type="number" name="age" min="18" max="99" class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]" />
                  </label>
                </div>

                <label class="block font-bold text-[#224671]">${isFr ? 'Décrivez votre situation' : 'Describe your situation'}
                  <textarea name="message" rows="5" placeholder="${isFr ? 'Perte de cheveux, traitements précédents, attentes et questions…' : 'Hair-loss pattern, previous treatments, expectations and questions…'}" class="mt-2 w-full resize-none rounded-lg border-2 border-slate-300 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-[#2f6bfc]"></textarea>
                </label>

                <p id="local-form-error" class="hidden rounded-lg border-2 border-red-300 bg-red-100 px-4 py-3 text-red-700"></p>
                <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-[#2f6bfc] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#224671] disabled:cursor-not-allowed disabled:opacity-50">${isFr ? 'Envoyer ma demande' : 'Send my request'}</button>
                <p class="text-center text-sm text-slate-600">${isFr ? '* Champs obligatoires. Vos données sont utilisées uniquement pour traiter votre demande.' : '* Required fields. Your information is used only to process your assessment request.'}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

const files = await walk(dist);
let updated = 0;

for (const file of files) {
  let html = await readFile(file, 'utf8');
  if (!html.includes('id="price-comparison"') || !html.includes('id="diagnostic-form"')) continue;

  const isFr = /<html\s+lang=["']fr["']/i.test(html);
  const labelMatch = isFr
    ? html.match(/Diagnostic gratuit depuis ([^<]+)/i)
    : html.match(/Free assessment from ([^<]+)/i);
  const label = labelMatch?.[1]?.trim() || (isFr ? 'votre ville' : 'your city');
  const replacement = formHtml(isFr, label);
  const next = html.replace(/<section id="diagnostic-form"[\s\S]*?<\/section>/i, replacement);

  if (next !== html) {
    await writeFile(file, next, 'utf8');
    updated += 1;
  }
}

console.log(`Replaced local landing forms in ${updated} HTML files.`);
