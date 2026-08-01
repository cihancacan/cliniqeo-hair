import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const appSource = await readFile(join(root, 'src', 'App.tsx'), 'utf8');
const shell = await readFile(join(dist, 'index.html'), 'utf8');

const directRoutes = [...appSource.matchAll(/<Route\s+path=["']([^"']+)["']/g)]
  .map((match) => match[1]);

// SEO routes are also declared as [path, pageKey] tuples in App.tsx.
// They must be included here or Vercel has no physical HTML file to serve.
const tupleRoutes = [...appSource.matchAll(/\[\s*["'](\/[^"']+)["']\s*,\s*["'][^"']+["']\s*\]/g)]
  .map((match) => match[1]);

const routes = [...new Set([...directRoutes, ...tupleRoutes])]
  .filter((route) => route.startsWith('/'));

const aliases = new Map([
  ['/implant-capillaire-turquie', '/greffe-de-cheveux-turquie'],
  ['/implant-cheveux-turquie', '/greffe-de-cheveux-turquie'],
  ['/meilleure-clinique-greffe-cheveux-turquie', '/greffe-cheveux-turquie-avis'],
  ['/meilleure-clinique-implant-cheveux-turquie', '/greffe-cheveux-turquie-avis'],
  ['/meilleure-clinique-implant-capillaire-turquie', '/greffe-cheveux-turquie-avis'],
  ['/greffe-cheveux-prix-turquie', '/prix-greffe-de-cheveux-turquie'],
  ['/prix-implant-capillaire-turquie', '/prix-greffe-de-cheveux-turquie'],
  ['/implant-cheveux-turquie-prix', '/prix-greffe-de-cheveux-turquie'],
  ['/greffe-de-cheveux-turquie-prix-tout-compris', '/greffe-cheveux-turquie-tout-compris'],
  ['/greffe-de-cheveux-turquie-avis', '/greffe-cheveux-turquie-avis'],
  ['/greffe-cheveux-crepus-turquie', '/greffe-cheveux-afro-turquie'],
  ['/greffe-de-barbe-turquie', '/greffe-barbe-turquie'],
  ['/greffe-cheveux-turquie-danger', '/greffe-cheveux-turquie-risques'],
  ['/greffe-cheveux-saphir-turquie', '/fue-saphir-turquie'],
  ['/difference-fue-dhi', '/dhi-ou-fue'],
  ['/meilleure-technique-greffe-cheveux', '/dhi-ou-fue'],
  ['/greffe-cheveux-femme-sans-rasage', '/greffe-cheveux-sans-rasage-turquie'],
  ['/greffe-cheveux-indolore-turquie', '/douleur-greffe-cheveux-anesthesie'],
  ['/anesthesie-sans-aiguille-greffe-cheveux', '/douleur-greffe-cheveux-anesthesie'],
  ['/zone-donneuse-abimee-greffe-cheveux', '/zone-donneuse-greffe-cheveux'],
  ['/surprelevement-zone-donneuse', '/zone-donneuse-greffe-cheveux'],
  ['/greffe-cheveux-ratee-turquie', '/reparer-greffe-cheveux-ratee'],
  ['/premier-lavage-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/sport-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/prendre-avion-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/soleil-apres-greffe-cheveux', '/soins-apres-greffe-cheveux'],
  ['/ligne-frontale-naturelle-greffe-cheveux', '/greffe-ligne-frontale-turquie'],
  ['/greffe-golfes-cheveux', '/greffe-ligne-frontale-turquie'],
  ['/greffe-tonsure-turquie', '/greffe-vertex-turquie'],
  ['/greffe-sourcils-avant-apres', '/greffe-sourcils-turquie'],

  ['/turkey-hair-transplant', '/hair-transplant-turkey'],
  ['/hair-transplant-in-turkey', '/hair-transplant-turkey'],
  ['/best-hair-transplant-turkey', '/en/hair-transplant-turkey-reviews'],
  ['/fue-hair-transplant-turkey', '/hair-transplant-turkey'],
  ['/dhi-hair-transplant-turkey', '/hair-transplant-turkey'],
  ['/hair-transplant-turkey-cost', '/turkey-hair-transplant-cost'],
  ['/hair-transplant-turkey-price', '/turkey-hair-transplant-cost'],
  ['/turkey-hair-transplant-prices', '/turkey-hair-transplant-cost'],
  ['/how-much-hair-transplant-turkey', '/turkey-hair-transplant-cost'],
  ['/hair-transplant-turkey-reviews', '/en/hair-transplant-turkey-reviews'],
]);

const isEnglish = (path) =>
  path.startsWith('/en/') ||
  path.startsWith('/hair-transplant') ||
  path.startsWith('/turkey-hair-transplant') ||
  path.startsWith('/best-hair-transplant') ||
  path.startsWith('/fue-hair-transplant') ||
  path.startsWith('/dhi-hair-transplant') ||
  path.startsWith('/how-much-hair-transplant');

const fileForRoute = (route) => join(dist, `${route.replace(/^\//, '')}.html`);

const readCanonical = async (route) => {
  const canonical = aliases.get(route);
  if (!canonical) return null;
  const source = fileForRoute(canonical);
  try {
    await access(source);
    return await readFile(source, 'utf8');
  } catch {
    return null;
  }
};

let created = 0;
let copiedAliases = 0;

for (const route of routes) {
  if (route === '/') continue;

  const flatPath = fileForRoute(route);
  const indexPath = join(dist, route.replace(/^\//, ''), 'index.html');

  let html;
  try {
    await access(flatPath);
    html = await readFile(flatPath, 'utf8');
  } catch {
    html = await readCanonical(route);
    if (html) copiedAliases += 1;

    if (!html) {
      html = shell.replace(
        /<html\s+lang=["'][^"']*["']>/i,
        `<html lang="${isEnglish(route) ? 'en' : 'fr'}">`,
      );
    }
    created += 1;
  }

  await mkdir(dirname(flatPath), { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  await writeFile(flatPath, html, 'utf8');
  await writeFile(indexPath, html, 'utf8');
}

console.log(`Ensured ${routes.length} routes: created ${created} files, including ${copiedAliases} SEO aliases.`);
