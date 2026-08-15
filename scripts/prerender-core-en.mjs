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
    title: 'Hair Transplant Prices in Turkey: UK and USA Comparison | Cliniqeo Hair',
    description: 'Compare Cliniqeo Turkey hair transplant packages with indicative UK and USA market prices. Review FUE, DHI and beard transplant prices and included services.',
    h1: 'Hair transplant prices in Turkey',
    intro: 'Transparent FUE, DHI and beard-transplant packages with English-speaking coordination through Cliniqeo Turkey.',
    kind: 'pricing',
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
    description: 'Send your details for a free initial hair transplant assessment and personalised quotation within 24 hours.',
    h1: 'Free hair transplant assessment',
    intro: 'Describe your situation for personalised initial guidance and a quotation within 24 hours.',
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

function pricingBody(page) {
  return `<div id="root">
    <main style="font-family:Arial,sans-serif;color:#17324d;line-height:1.65">
      <header style="background:linear-gradient(135deg,#2f6bfc,#6EC1E4);color:white;padding:72px 24px;text-align:center">
        <h1 style="font-size:clamp(2.3rem,5vw,4rem);margin:0 0 18px">${escapeHtml(page.h1)}</h1>
        <p style="font-size:1.25rem;max-width:850px;margin:0 auto">${escapeHtml(page.intro)}</p>
      </header>

      <section style="max-width:1180px;margin:0 auto;padding:64px 24px">
        <h2 style="font-size:2.2rem;text-align:center;color:#224671">Our organised treatment packages</h2>
        <p style="text-align:center;max-width:850px;margin:0 auto 38px;color:#526172">The final technique, graft estimate and package content are confirmed after assessment and written in the personalised quotation.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px">
          <article style="border:2px solid #dce3eb;border-radius:18px;padding:28px">
            <h3>FUE HAIR TRANSPLANT</h3><p style="font-size:2.6rem;font-weight:700;color:#224671;margin:8px 0">€1,990</p>
            <p>Up to 5,000 grafts, subject to medical confirmation.</p>
            <ul><li>Personalised FUE treatment plan</li><li>Hotel for 3 nights</li><li>Private transfers</li><li>English-speaking coordination</li><li>Postoperative kit</li><li>12-month remote follow-up</li></ul>
          </article>
          <article style="background:linear-gradient(135deg,#2f6bfc,#6EC1E4);color:white;border-radius:18px;padding:28px">
            <h3>DHI HAIR TRANSPLANT</h3><p style="font-size:2.6rem;font-weight:700;margin:8px 0">€2,490</p>
            <p>Up to 4,000 grafts, subject to medical confirmation.</p>
            <ul><li>Implanter-pen placement when appropriate</li><li>Hotel for 3 nights</li><li>Private transfers</li><li>English-speaking coordination</li><li>Extended care kit</li><li>12-month remote follow-up</li></ul>
          </article>
          <article style="border:2px solid #dce3eb;border-radius:18px;padding:28px">
            <h3>BEARD TRANSPLANT</h3><p style="font-size:2.6rem;font-weight:700;color:#224671;margin:8px 0">€1,990</p>
            <p>Graft estimate confirmed after facial and donor assessment.</p>
            <ul><li>Beard-line and density planning</li><li>Hotel for 3 nights</li><li>Private transfers</li><li>English-speaking coordination</li><li>Postoperative kit</li><li>12-month remote follow-up</li></ul>
          </article>
        </div>
      </section>

      <section style="background:#f5f7fa;padding:64px 24px">
        <div style="max-width:1180px;margin:0 auto">
          <h2 style="font-size:2.2rem;text-align:center;color:#224671">UK vs USA vs Cliniqeo Turkey</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;margin:36px 0">
            <article style="background:white;border:2px solid #dce3eb;border-radius:18px;padding:26px"><strong>UNITED KINGDOM</strong><p style="font-size:2rem;font-weight:700;color:#224671">£1,000–£30,000</p><p>Broad range published by the NHS. Travel and hotel are normally separate.</p></article>
            <article style="background:white;border:2px solid #dce3eb;border-radius:18px;padding:26px"><strong>UNITED STATES</strong><p style="font-size:2rem;font-weight:700;color:#224671">$6,000–$15,000</p><p>Examples published by the American Society of Plastic Surgeons for small to large cases.</p></article>
            <article style="background:#224671;color:white;border-radius:18px;padding:26px"><strong>CLINIQEO TURKEY</strong><p style="font-size:2rem;font-weight:700">From €1,990</p><p>Organised package with the medical procedure, hotel, private transfers, English-speaking coordination and follow-up as stated in the quotation.</p></article>
          </div>
          <div style="overflow-x:auto;background:white;border-radius:16px">
            <table style="width:100%;border-collapse:collapse;min-width:760px">
              <thead style="background:#224671;color:white"><tr><th style="padding:16px;text-align:left">Comparison point</th><th style="padding:16px">UK</th><th style="padding:16px">USA</th><th style="padding:16px">Cliniqeo Turkey</th></tr></thead>
              <tbody>
                <tr><th style="padding:16px;text-align:left">Indicative price</th><td style="padding:16px;text-align:center">£1,000–£30,000</td><td style="padding:16px;text-align:center">$6,000–$15,000</td><td style="padding:16px;text-align:center">€1,990 FUE / €2,490 DHI</td></tr>
                <tr style="background:#f5f7fa"><th style="padding:16px;text-align:left">Hotel</th><td style="padding:16px;text-align:center">Usually separate</td><td style="padding:16px;text-align:center">Usually separate</td><td style="padding:16px;text-align:center">3 nights when stated in the quotation</td></tr>
                <tr><th style="padding:16px;text-align:left">Private transfers</th><td style="padding:16px;text-align:center">Usually separate</td><td style="padding:16px;text-align:center">Usually separate</td><td style="padding:16px;text-align:center">Included according to quotation</td></tr>
                <tr style="background:#f5f7fa"><th style="padding:16px;text-align:left">English-speaking coordination</th><td style="padding:16px;text-align:center">Provider dependent</td><td style="padding:16px;text-align:center">Provider dependent</td><td style="padding:16px;text-align:center">Included</td></tr>
                <tr><th style="padding:16px;text-align:left">Flights</th><td style="padding:16px;text-align:center">Not applicable</td><td style="padding:16px;text-align:center">Not applicable</td><td style="padding:16px;text-align:center">Booked separately</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:.92rem;color:#526172;margin-top:22px">The comparison uses public market references and is not a quotation for identical cases. Prices vary with graft count, case complexity, provider and included services.</p>
          <p><a href="/en/contact" style="display:inline-block;background:#2f6bfc;color:white;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700">Request a personalised Cliniqeo Turkey quotation</a></p>
        </div>
      </section>
    </main>
  </div>`;
}

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

  const body = page.kind === 'pricing'
    ? pricingBody(page)
    : `<div id="root">
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
