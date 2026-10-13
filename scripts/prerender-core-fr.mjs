import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

// Render the actual components on every build. The former WordPress snapshot
// depended on a specific JS filename and disappeared whenever Vite changed it.
const pages = [
  ['/contact', 'Contact et diagnostic capillaire | Cliniqeo Hair', 'Contactez Cliniqeo Hair pour une première orientation, un devis personnalisé et les étapes de votre séjour capillaire à Istanbul.'],
  ['/tarifs', 'Tarifs FUE et DHI en Turquie | Cliniqeo Hair', 'Consultez les forfaits FUE et DHI, les prestations incluses, les dépenses à prévoir et les conditions du devis Cliniqeo Hair.'],
  ['/a-propos', 'À propos de Cliniqeo Hair : rôle et accompagnement', 'Découvrez le rôle de Cliniqeo Hair dans l’organisation du séjour et les responsabilités des professionnels de santé partenaires.'],
  ['/faq', 'Questions sur la greffe de cheveux | Cliniqeo Hair', 'Questions sur la greffe capillaire, la préparation du séjour, les techniques, les tarifs et le suivi après le retour.'],
  ['/techniques', 'Techniques de greffe de cheveux FUE et DHI | Cliniqeo', 'Comprendre les techniques FUE et DHI et préparer les questions à poser au professionnel qui évalue votre projet capillaire.'],
  ['/turquie', 'Organiser une greffe de cheveux en Turquie | Cliniqeo', 'Préparer un séjour capillaire en Turquie : organisation, accompagnement, consultation, transferts et suivi.'],
  ['/greffe-cheveux/avant-apres', 'Avant et après une greffe de cheveux | Cliniqeo Hair', 'Consultez la galerie de greffes capillaires Cliniqeo Hair. Chaque situation est individuelle et nécessite une évaluation médicale.'],
];
const origin = 'https://cliniqeo.com';
const mount = '/greffe-cheveux-turquie';
const upstream = 'https://cliniqeo-hair.vercel.app';
const esc = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const server = await createServer({ configFile: false, plugins: [react()], ssr: { noExternal: ['react-router-dom', 'react-router'] }, server: { middlewareMode: true }, appType: 'custom' });
try {
  const { renderCorePage } = await server.ssrLoadModule('/scripts/core-fr-entry.tsx');
  for (const [route, title, description] of pages) {
    const file = join('dist', route.slice(1) + '.html');
    let html = await readFile(file, 'utf8');
    let body = renderCorePage(route);
    body = body.replace(/(href=")\/(?!\/)([^"]*)(")/g, (_, a, path, b) => `${a}${origin}${mount}${path ? '/' + path : ''}${b}`);
    body = body.replace(/(src=")\/(?!\/)([^"]*)(")/g, (_, a, path, b) => `${a}${upstream}/${path}${b}`);
    if (!/<div id="root">\s*<\/div>/.test(html)) throw new Error(`Expected an empty React shell for ${route}`);
    html = html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root" data-prerender="core-fr">${body}</div>`);
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
    html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${esc(description)}">`);
    html = html.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(title)}">`);
    html = html.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(description)}">`);
    // Remove inherited home-page graphs: the graph must describe this URL.
    html = html.replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');
    const url = origin + mount + route;
    const schema = { '@context': 'https://schema.org', '@graph': [
      { '@type': 'Organization', '@id': origin + '/#organization', name: 'Cliniqeo', url: origin + '/' },
      { '@type': 'WebPage', '@id': url + '#webpage', url, name: title, description, inLanguage: 'fr-FR', publisher: { '@id': origin + '/#organization' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cliniqeo Hair', item: origin + mount },
        { '@type': 'ListItem', position: 2, name: title.split(' | ')[0], item: url },
      ] },
    ] };
    html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>`);
    for (const target of [file, join('dist', route.slice(1), 'index.html')]) {
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, html);
    }
  }
} finally {
  await server.close();
}
console.log(`Rendered ${pages.length} French core pages from their live React components.`);
