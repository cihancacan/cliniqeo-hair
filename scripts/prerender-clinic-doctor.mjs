import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const ORIGIN = 'https://cliniqeo-hair.vercel.app';
const shell = await readFile(join(DIST, 'index.html'), 'utf8');

const pages = [
  {
    path: '/clinique-medecin',
    lang: 'fr',
    alternate: '/en/clinic-doctor',
    title: 'Clinique partenaire & Dr Ersun Çobanoğlu à Istanbul | Cliniqeo Hair',
    description: 'Découvrez l’Özel Oktay Tüney Polikliniği à Beşiktaş, le Dr Ersun Çobanoğlu, les espaces de prise en charge et les autorisations officielles de tourisme de santé.',
    h1: 'Votre clinique partenaire et votre médecin à Istanbul',
    intro: 'Découvrez l’établissement partenaire où s’organise le parcours capillaire, le Dr Ersun Çobanoğlu, les espaces de prise en charge et les autorisations officielles de tourisme international de santé.',
    clinicTitle: 'Özel Oktay Tüney Polikliniği',
    clinicText: 'L’établissement est situé à Dikilitaş, Ayazmaderesi Cd No:6/1, 34349 Beşiktaş, Istanbul. Il accueille des patients internationaux et propose notamment les techniques FUE, DHI et Sapphire FUE après évaluation médicale.',
    doctorTitle: 'Dr Ersun Çobanoğlu',
    doctorText: 'Diplômé de la Faculté de médecine de l’Université de Trakya en 1992, le Dr Ersun Çobanoğlu a exercé dans plusieurs hôpitaux publics puis à l’Hôpital Acıbadem de Bursa. Il a complété en 2005 un programme de certification en esthétique médicale approuvé par le Ministère turc de la Santé.',
    permit: 'Les documents présentés sur cette page comprennent les autorisations de tourisme international de santé de l’Özel Oktay Tüney Polikliniği et du Dr Ersun Çobanoğlu.',
    cta: 'Faire étudier mon dossier',
  },
  {
    path: '/en/clinic-doctor',
    lang: 'en',
    alternate: '/clinique-medecin',
    title: 'Partner Clinic & Dr Ersun Çobanoğlu in Istanbul | Cliniqeo Hair',
    description: 'Discover Özel Oktay Tüney Polikliniği in Beşiktaş, Dr Ersun Çobanoğlu, the treatment spaces and official international health-tourism authorisations.',
    h1: 'Your partner clinic and doctor in Istanbul',
    intro: 'Discover the partner facility, Dr Ersun Çobanoğlu, the clinical spaces and the official international health-tourism authorisations behind your treatment journey.',
    clinicTitle: 'Özel Oktay Tüney Polikliniği',
    clinicText: 'The facility is located at Dikilitaş, Ayazmaderesi Cd No:6/1, 34349 Beşiktaş, Istanbul. It welcomes international patients and offers FUE, DHI and Sapphire FUE techniques following medical assessment.',
    doctorTitle: 'Dr Ersun Çobanoğlu',
    doctorText: 'Dr Ersun Çobanoğlu graduated from Trakya University Faculty of Medicine in 1992. He worked in public hospitals and later at Acıbadem Hospital in Bursa, and completed a Turkish Ministry of Health-approved Medical Aesthetics certification programme in 2005.',
    permit: 'The documents shown on this page include international health-tourism authorisations for Özel Oktay Tüney Polikliniği and Dr Ersun Çobanoğlu.',
    cta: 'Request my assessment',
  },
];

const esc = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

for (const page of pages) {
  const canonical = `${ORIGIN}${page.path}`;
  const alternate = `${ORIGIN}${page.alternate}`;
  const hreflang = page.lang === 'fr' ? 'en' : 'fr';
  const body = `
    <div id="root">
      <main style="font-family:Arial,sans-serif;max-width:1120px;margin:0 auto;padding:48px 24px;color:#193b63">
        <p style="font-weight:700;color:#2f6bfc;text-transform:uppercase;letter-spacing:.08em">${page.lang === 'fr' ? 'Clinique partenaire & médecin' : 'Partner clinic & doctor'}</p>
        <h1 style="font-size:42px;line-height:1.1;margin:12px 0 20px">${esc(page.h1)}</h1>
        <p style="font-size:19px;line-height:1.7;color:#526174">${esc(page.intro)}</p>
        <section style="margin-top:40px">
          <h2>${esc(page.clinicTitle)}</h2>
          <p>${esc(page.clinicText)}</p>
        </section>
        <section style="margin-top:32px">
          <h2>${esc(page.doctorTitle)}</h2>
          <p>${esc(page.doctorText)}</p>
        </section>
        <section style="margin-top:32px">
          <h2>${page.lang === 'fr' ? 'Autorisations officielles' : 'Official authorisations'}</h2>
          <p>${esc(page.permit)}</p>
        </section>
        <p style="margin-top:36px"><a href="${page.lang === 'fr' ? '/contact' : '/en/contact'}">${esc(page.cta)}</a></p>
      </main>
    </div>`;

  let html = shell
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(page.description)}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
    .replace('</head>', `<link rel="alternate" hreflang="${hreflang}" href="${alternate}"><link rel="alternate" hreflang="x-default" href="${ORIGIN}/clinique-medecin"></head>`)
    .replace(/<div id="root"><\/div>/, body);

  const cleanRoute = page.path.replace(/^\//, '');
  const flatFile = join(DIST, `${cleanRoute}.html`);
  const indexFile = join(DIST, cleanRoute, 'index.html');

  await mkdir(dirname(flatFile), { recursive: true });
  await mkdir(dirname(indexFile), { recursive: true });
  await writeFile(flatFile, html);
  await writeFile(indexFile, html);
}

console.log(`Prerendered ${pages.length} clinic & doctor pages`);
