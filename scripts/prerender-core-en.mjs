import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://cliniqeo-hair.vercel.app';
const root = process.cwd();
const dist = join(root, 'dist');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

const pages = [
  {
    path: '/en', alternate: '/',
    title: 'Hair Transplant in Turkey | Cliniqeo Hair',
    description: 'Hair transplant coordination in Turkey with English-speaking support, FUE and DHI options, organised travel and postoperative follow-up.',
    h1: 'Hair transplant in Turkey with English-speaking support',
    intro: 'Explore FUE and DHI treatment options, transparent packages and a coordinated patient journey from assessment to follow-up.',
  },
  {
    path: '/en/techniques', alternate: '/techniques',
    title: 'FUE and DHI Hair Transplant Techniques in Turkey | Cliniqeo Hair',
    description: 'Understand FUE, Sapphire FUE and DHI hair transplantation, including extraction, implantation, recovery, indications and limitations.',
    h1: 'FUE and DHI hair transplant techniques',
    intro: 'The appropriate technique depends on the donor area, recipient zone, existing hair and the medical plan—not on a commercial label alone.',
  },
  {
    path: '/en/pricing', alternate: '/tarifs',
    title: 'Hair Transplant Prices in Turkey and Package Details | Cliniqeo Hair',
    description: 'Review hair transplant prices, FUE and DHI packages, hotel, transfers, medication, interpreter support and postoperative follow-up.',
    h1: 'Hair transplant prices and packages',
    intro: 'A transparent quotation should clearly separate medical treatment, accommodation, transfers and any optional services.',
  },
  {
    path: '/en/why-turkey', alternate: '/turquie',
    title: 'Why Choose Turkey for a Hair Transplant? | Cliniqeo Hair',
    description: 'Learn about expertise, clinic selection, costs, travel organisation and safety when considering a hair transplant in Turkey.',
    h1: 'Why consider Turkey for a hair transplant?',
    intro: 'Turkey offers a developed international-care ecosystem, but medical oversight, donor protection and follow-up remain essential.',
  },
  {
    path: '/en/about', alternate: '/a-propos',
    title: 'About Cliniqeo Hair | Hair Transplant Coordination',
    description: 'Learn how Cliniqeo Hair coordinates hair transplant stays in Turkey, from initial assessment and travel organisation to follow-up.',
    h1: 'About Cliniqeo Hair',
    intro: 'Cliniqeo Hair coordinates treatment journeys. Medical assessments and procedures are performed by partner healthcare professionals and clinics.',
  },
  {
    path: '/en/faq', alternate: '/faq',
    title: 'Hair Transplant FAQ: Turkey, FUE, DHI and Recovery | Cliniqeo Hair',
    description: 'Answers about FUE, DHI, graft counts, pain, travel, aftercare, recovery and hair transplant results in Turkey.',
    h1: 'Frequently asked questions about hair transplantation',
    intro: 'General answers to help patients prepare. Individual eligibility, technique and graft count require a medical assessment.',
  },
  {
    path: '/en/contact', alternate: '/contact',
    title: 'Free Hair Transplant Assessment | Cliniqeo Hair',
    description: 'Send your details and scalp photographs for a free initial hair transplant assessment and personalised quotation within 24 hours.',
    h1: 'Free hair transplant assessment',
    intro: 'Send clear photographs of the front, top and donor area for an initial review and personalised quotation.',
  },
  {
    path: '/en/before-after', alternate: '/greffe-cheveux/avant-apres',
    title: 'Hair Transplant Before and After Results | Cliniqeo Hair',
    description: 'Learn how to assess hair transplant before-and-after photos, including lighting, angles, timing, density and donor-area condition.',
    h1: 'Understanding hair transplant before-and-after results',
    intro: 'Reliable comparisons use similar lighting, angles, hair length and styling, with a clearly stated postoperative date.',
  },
];

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

for (const page of pages) {
  const canonical = `${ORIGIN}${page.path}`;
  const head = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="en" href="${canonical}">
    <link rel="alternate" hreflang="fr" href="${ORIGIN}${page.alternate}">
    <link rel="alternate" hreflang="x-default" href="${ORIGIN}${page.alternate}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Cliniqeo Hair">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">`;

  const body = `<div id="root">
    <main style="font-family:Arial,sans-serif;color:#17324d;max-width:1040px;margin:0 auto;padding:64px 24px;line-height:1.7">
      <article>
        <p style="font-weight:700;color:#2f6bfc">Cliniqeo Hair</p>
        <h1 style="font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;color:#224671">${escapeHtml(page.h1)}</h1>
        <p style="font-size:1.2rem;color:#425466">${escapeHtml(page.intro)}</p>
        <p>${escapeHtml(page.description)}</p>
        <p><a href="/en/contact" style="display:inline-block;background:#2f6bfc;color:white;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700">Request a free assessment</a></p>
      </article>
    </main>
  </div>`;

  const html = shell
    .replace(/<html\s+lang=["'][^"']*["']>/i, '<html lang="en">')
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '')
    .replace('</head>', `${head}\n  </head>`)
    .replace(/<div\s+id=["']root["']><\/div>/i, body);

  const route = page.path.replace(/^\//, '');
  const flatPath = join(dist, `${route}.html`);
  const indexPath = join(dist, route, 'index.html');
  await mkdir(dirname(flatPath), { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Prerendered ${pages.length} English core pages.`);
