import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const roots = ['src', 'scripts', 'public', 'index.html'];
const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.html', '.xml', '.json', '.txt']);
const thisFile = path.resolve(projectRoot, 'scripts/update-site-prices.mjs');

// Legacy cleanup only. Current commercial prices are stored directly in source.
// IMPORTANT: do not globally rewrite 2 490 / €2,490 anymore: 2 490 € is now
// the valid FUE price, so treating it as the former DHI price would corrupt builds.
const replacementPairs = [
  // Old English FUE / beard package.
  ['€1,990', '$3,490 USD'],
  ['€ 1,990', '$3,490 USD'],
  ['€1990', '$3,490 USD'],
  ['EUR 1,990', '$3,490 USD'],
  ['1,990 EUR', '$3,490 USD'],

  // Old French FUE / beard package.
  ['1 990€', '2 490€'],
  ['1 990 €', '2 490 €'],
  ['1.990€', '2 490€'],
  ['1.990 €', '2 490 €'],
  ['1990€', '2490€'],
  ['1990 €', '2490 €'],

  // French financing: 2 490 € / 10 months = 249 € per month.
  ['199€/mois', '249€/mois'],
  ['199 €/mois', '249 €/mois'],
  ['199€ / mois', '249€ / mois'],
  ['199 € / mois', '249 € / mois'],
  ['199€ par mois', '249€ par mois'],
  ['199 € par mois', '249 € par mois'],

  // Updated comparison prices requested for the French pricing table.
  ['3 490€', '4 490€'],
  ['3 490 €', '4 490 €'],
  ['3490€', '4490€'],
  ['3 690€', '4 690€'],
  ['3 690 €', '4 690 €'],
  ['3690€', '4690€'],
  ['4 000€ - 6 000€', '4 000€ - 8 000€'],
  ['4 000€ – 6 000€', '4 000€ – 8 000€'],
  ['4 000 € - 6 000 €', '4 000 € - 8 000 €'],
];

const englishPathPatterns = [
  /\/pages\/en\//i,
  /English/i,
  /HairTransplantTurkey/i,
  /TurkeyHairTransplantCost/i,
  /core-en/i,
  /english/i,
];

function isEnglishFocused(filePath) {
  const normalized = filePath.replaceAll('\\', '/');
  return englishPathPatterns.some((pattern) => pattern.test(normalized));
}

function replaceStructuredPriceValues(content, filePath) {
  // Only migrate the unambiguous former FUE value. Never rewrite 2490 here:
  // 2490 is now a legitimate current FUE value.
  const replacement = isEnglishFocused(filePath) ? '3490' : '2490';

  return content
    .replace(/(["']price["']\s*:\s*["'])1990(["'])/g, `$1${replacement}$2`)
    .replace(/(price\s*:\s*["'])1990(["'])/g, `$1${replacement}$2`);
}

function updateContent(content, filePath) {
  let next = content;
  for (const [from, to] of replacementPairs) {
    next = next.split(from).join(to);
  }
  return replaceStructuredPriceValues(next, filePath);
}

function visit(target) {
  if (!fs.existsSync(target)) return;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target)) {
      if (entry === 'node_modules' || entry === '.git') continue;
      visit(path.join(target, entry));
    }
    return;
  }

  if (path.resolve(target) === thisFile) return;
  if (!allowedExtensions.has(path.extname(target).toLowerCase())) return;

  const before = fs.readFileSync(target, 'utf8');
  const after = updateContent(before, target);
  if (after !== before) {
    fs.writeFileSync(target, after, 'utf8');
    console.log(`[prices] updated ${path.relative(projectRoot, target)}`);
  }
}

for (const root of roots) {
  visit(path.resolve(projectRoot, root));
}
