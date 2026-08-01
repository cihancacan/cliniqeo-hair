import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://cliniqeo-hair.vercel.app';

const pages = [
  {
    path: '/guides-greffe-cheveux',
    lang: 'fr',
    alternate: '/en/hair-transplant-guides',
    title: 'Guides et informations sur la greffe de cheveux | Cliniqeo Hair',
    description: 'Tous les guides Cliniqeo Hair sur les prix, techniques, zones, risques, soins et résultats d’une greffe de cheveux en Turquie.',
    h1: 'Guides et informations capillaires',
    intro: 'Une bibliothèque organisée par thème pour comprendre les techniques, préparer le séjour et prendre une décision mieux informée.',
    categories: [
      ['Préparer son projet en Turquie', [
        ['/greffe-de-cheveux-turquie', 'Greffe de cheveux en Turquie'],
        ['/prix-greffe-de-cheveux-turquie', 'Prix d’une greffe de cheveux'],
        ['/greffe-cheveux-istanbul', 'Greffe de cheveux à Istanbul'],
        ['/greffe-cheveux-turquie-tout-compris', 'Forfait tout compris'],
        ['/greffe-cheveux-turquie-avis', 'Avis et choix d’une clinique'],
        ['/greffe-cheveux-turquie-avant-apres', 'Résultats avant et après'],
      ]],
      ['Techniques de greffe capillaire', [
        ['/greffe-de-cheveux-fue-turquie', 'Greffe FUE en Turquie'],
        ['/greffe-de-cheveux-dhi-turquie', 'Greffe DHI en Turquie'],
        ['/fue-saphir-turquie', 'FUE Saphir'],
        ['/dhi-ou-fue', 'DHI ou FUE ?'],
        ['/greffe-cheveux-sans-rasage-turquie', 'Greffe sans rasage'],
        ['/douleur-greffe-cheveux-anesthesie', 'Douleur et anesthésie'],
      ]],
      ['Profils et zones à traiter', [
        ['/greffe-cheveux-femme-turquie', 'Greffe de cheveux pour femme'],
        ['/greffe-cheveux-afro-turquie', 'Cheveux afro et crépus'],
        ['/greffe-barbe-turquie', 'Greffe de barbe'],
        ['/greffe-ligne-frontale-turquie', 'Ligne frontale et golfes'],
        ['/greffe-vertex-turquie', 'Vertex et tonsure'],
        ['/greffe-sourcils-turquie', 'Greffe de sourcils'],
        ['/greffe-cheveux-cicatrice', 'Greffe sur cicatrice'],
      ]],
      ['Planification, sécurité et suivi', [
        ['/nombre-greffons-greffe-cheveux', 'Combien de greffons ?'],
        ['/zone-donneuse-greffe-cheveux', 'Zone donneuse'],
        ['/greffe-cheveux-turquie-risques', 'Risques et prévention'],
        ['/reparer-greffe-cheveux-ratee', 'Réparer une greffe ratée'],
        ['/soins-apres-greffe-cheveux', 'Soins après la greffe'],
        ['/apres-greffe-cheveux-mois-par-mois', 'Évolution mois par mois'],
        ['/deuxieme-greffe-cheveux-turquie', 'Deuxième greffe'],
      ]],
    ],
  },
  {
    path: '/en/hair-transplant-guides',
    lang: 'en',
    alternate: '/guides-greffe-cheveux',
    title: 'Hair Transplant Guides and Information | Cliniqeo Hair',
    description: 'All Cliniqeo Hair guides about prices, techniques, treatment areas, risks, aftercare and hair transplant results in Turkey.',
    h1: 'Hair transplant guides and information',
    intro: 'A topic-based library to understand techniques, prepare for travel and make a better-informed decision.',
    categories: [
      ['Planning treatment in Turkey', [
        ['/hair-transplant-turkey', 'Hair Transplant in Turkey'],
        ['/turkey-hair-transplant-cost', 'Hair Transplant Cost'],
        ['/en/hair-transplant-istanbul', 'Hair Transplant in Istanbul'],
        ['/en/all-inclusive-hair-transplant-turkey', 'All-Inclusive Package'],
        ['/en/hair-transplant-turkey-reviews', 'Reviews and Clinic Selection'],
        ['/en/hair-transplant-turkey-before-after', 'Before and After Results'],
      ]],
      ['Hair transplant techniques', [
        ['/fue-hair-transplant-turkey', 'FUE Hair Transplant'],
        ['/dhi-hair-transplant-turkey', 'DHI Hair Transplant'],
        ['/en/sapphire-fue-hair-transplant-turkey', 'Sapphire FUE'],
        ['/en/dhi-vs-fue-hair-transplant', 'DHI vs FUE'],
        ['/en/no-shave-hair-transplant-turkey', 'No-Shave Hair Transplant'],
        ['/en/hair-transplant-pain-anesthesia', 'Pain and Anaesthesia'],
      ]],
      ['Patient profiles and treatment areas', [
        ['/en/female-hair-transplant-turkey', 'Female Hair Transplant'],
        ['/en/afro-hair-transplant-turkey', 'Afro and Coily Hair'],
        ['/en/beard-transplant-turkey', 'Beard Transplant'],
        ['/en/hairline-transplant-turkey', 'Hairline and Temples'],
        ['/en/crown-hair-transplant-turkey', 'Crown Hair Transplant'],
        ['/en/eyebrow-transplant-turkey', 'Eyebrow Transplant'],
        ['/en/hair-transplant-on-scar', 'Hair Transplant on a Scar'],
      ]],
      ['Planning, safety and aftercare', [
        ['/en/hair-transplant-graft-count', 'How Many Grafts?'],
        ['/en/hair-transplant-donor-area', 'Donor Area'],
        ['/en/hair-transplant-turkey-risks', 'Risks and Prevention'],
        ['/en/hair-transplant-repair-turkey', 'Hair Transplant Repair'],
        ['/en/hair-transplant-aftercare', 'Hair Transplant Aftercare'],
        ['/en/hair-transplant-recovery-timeline', 'Recovery Timeline'],
        ['/en/second-hair-transplant-turkey', 'Second Hair Transplant'],
      ]],
    ],
  },
];

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const templatePath = join(process.cwd(), 'dist', 'index.html');
const original = await readFile(templatePath, 'utf8');

for (const page of pages) {
  const canonical = `${ORIGIN}${page.path}`;
  const alternateLang = page.lang === 'fr' ? 'en' : 'fr';
  const categories = page.categories.map(([title, links]) => `
    <section style="margin:0 0 42px">
      <h2 style="font-size:28px;color:#224671;margin-bottom:18px">${escapeHtml(title)}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px">
        ${links.map(([href, label]) => `<a href="${href}" style="display:block;border:1px solid #d9e2ec;border-radius:12px;padding:18px;text-decoration:none;color:#224671;background:white;font-weight:700">${escapeHtml(label)}</a>`).join('')}
      </div>
    </section>`).join('');

  const head = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${page.lang}" href="${canonical}">
    <link rel="alternate" hreflang="${alternateLang}" href="${ORIGIN}${page.alternate}">
    <link rel="alternate" hreflang="x-default" href="${ORIGIN}/guides-greffe-cheveux">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">`;

  const body = `<div id="root">
    <main style="font-family:Arial,sans-serif;background:#f8fafc;color:#334155;min-height:100vh;padding:64px 24px">
      <article style="max-width:1120px;margin:0 auto">
        <header style="margin-bottom:48px">
          <p style="font-weight:700;color:#2f6bfc">Cliniqeo Hair</p>
          <h1 style="font-size:clamp(2.2rem,5vw,4rem);line-height:1.05;color:#224671;margin:12px 0 20px">${escapeHtml(page.h1)}</h1>
          <p style="font-size:1.2rem;line-height:1.7;max-width:850px">${escapeHtml(page.intro)}</p>
          <p><a href="${page.alternate}" style="color:#2f6bfc;font-weight:700">${page.lang === 'fr' ? 'English version' : 'Version française'}</a></p>
        </header>
        ${categories}
      </article>
    </main>
  </div>`;

  let html = original
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${page.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '')
    .replace('</head>', `${head}\n  </head>`)
    .replace(/<div\s+id=["']root["']><\/div>/i, body);

  const route = page.path.replace(/^\//, '');
  const flatPath = join(process.cwd(), 'dist', `${route}.html`);
  const indexPath = join(process.cwd(), 'dist', route, 'index.html');
  await mkdir(dirname(flatPath), { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Prerendered ${pages.length} guide pages.`);
