import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const file = join(root, 'dist', 'index.html');
const html = await readFile(file, 'utf8');

const staticHome = `<div id="root">
  <main data-prerender="cliniqeo-hair-home">
    <section>
      <p>CLINIQEO HAIR · ISTANBUL</p>
      <h1>Greffe de cheveux en Turquie avec accompagnement francophone</h1>
      <p>Cliniqeo organise des parcours de greffe capillaire à Istanbul avec des établissements et professionnels partenaires. Les techniques FUE et DHI sont proposées selon l’évaluation de la zone donneuse, des zones à traiter et du plan médical.</p>
      <p><strong>Forfait FUE à partir de 2 490 €</strong> · <strong>DHI à partir de 2 990 €</strong> · paiement possible à partir de 249 € par mois sur 10 mois selon les conditions applicables.</p>
      <nav aria-label="Guides greffe de cheveux">
        <a href="https://cliniqeo.com/greffe-cheveux-turquie/greffe-de-cheveux-turquie">Guide greffe de cheveux en Turquie</a>
        <a href="https://cliniqeo.com/greffe-cheveux-turquie/greffe-de-cheveux-fue-turquie">Greffe FUE en Turquie</a>
        <a href="https://cliniqeo.com/greffe-cheveux-turquie/greffe-de-cheveux-dhi-turquie">Greffe DHI en Turquie</a>
        <a href="https://cliniqeo.com/greffe-cheveux-turquie/prix-greffe-de-cheveux-turquie">Prix d’une greffe de cheveux en Turquie</a>
        <a href="https://cliniqeo.com/greffe-cheveux-turquie/guides-greffe-cheveux">Guides et conseils</a>
      </nav>
      <h2>Un parcours organisé avant, pendant et après le séjour</h2>
      <p>Le parcours comprend l’étude initiale du dossier, l’organisation des rendez-vous, les transferts et l’hébergement prévus au devis, l’assistance francophone et le suivi à distance. Le diagnostic, les indications et les actes restent sous la responsabilité des professionnels de santé concernés.</p>
      <h2>FUE, DHI et greffe de barbe</h2>
      <p>Le choix de la technique dépend notamment du nombre de greffons, de la densité de la zone donneuse, de la zone receveuse, du rasage accepté et de l’évolution probable de la chute. Une évaluation individuelle est nécessaire avant toute décision.</p>
    </section>
  </main>
</div>`;

const updated = html.replace(/<div id=["']root["']>\s*<\/div>/i, staticHome);
if (updated === html) {
  throw new Error('Unable to inject prerendered Hair home content: root container not found.');
}

await writeFile(file, updated, 'utf8');
console.log('Injected crawlable prerendered content into the Hair home page.');
