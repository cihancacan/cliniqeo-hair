import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const roots = ['src', 'scripts', 'public', 'dist', 'index.html'];
const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.html', '.xml', '.json', '.txt']);
const thisFile = path.resolve(projectRoot, 'scripts/update-site-prices.mjs');

const replacementPairs = [
  // Protect old English package prices first so later French replacements cannot cascade.
  ['€1,990', '__PRICE_EN_FUE_BEARD__'],
  ['€ 1,990', '__PRICE_EN_FUE_BEARD__'],
  ['€1990', '__PRICE_EN_FUE_BEARD__'],
  ['EUR 1,990', '__PRICE_EN_FUE_BEARD__'],
  ['1,990 EUR', '__PRICE_EN_FUE_BEARD__'],
  ['€2,490', '__PRICE_EN_DHI__'],
  ['€ 2,490', '__PRICE_EN_DHI__'],
  ['€2490', '__PRICE_EN_DHI__'],
  ['EUR 2,490', '__PRICE_EN_DHI__'],
  ['2,490 EUR', '__PRICE_EN_DHI__'],

  // Protect old French package prices.
  ['1 990€', '__PRICE_FR_FUE_BEARD__'],
  ['1 990 €', '__PRICE_FR_FUE_BEARD__'],
  ['1.990€', '__PRICE_FR_FUE_BEARD__'],
  ['1.990 €', '__PRICE_FR_FUE_BEARD__'],
  ['1990€', '__PRICE_FR_FUE_BEARD__'],
  ['1990 €', '__PRICE_FR_FUE_BEARD__'],
  ['2 490€', '__PRICE_FR_DHI__'],
  ['2 490 €', '__PRICE_FR_DHI__'],
  ['2.490€', '__PRICE_FR_DHI__'],
  ['2.490 €', '__PRICE_FR_DHI__'],
  ['2490€', '__PRICE_FR_DHI__'],

  // French financing: €2,490 / 10 months = €249 per month.
  ['199€/mois', '249€/mois'],
  ['199 €/mois', '249 €/mois'],
  ['199€ / mois', '249€ / mois'],
  ['199 € / mois', '249 € / mois'],
  ['199€ par mois', '249€ par mois'],
  ['199 € par mois', '249 € par mois'],
  ['199€/month', '249€/month'],
  ['199 € / month', '249 € / month'],
  ['199€', '249€'],

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

  // Restore the protected values to the new commercial grid.
  ['__PRICE_FR_FUE_BEARD__', '2 490€'],
  ['__PRICE_FR_DHI__', '2 990€'],
  ['__PRICE_EN_FUE_BEARD__', '$3,490 USD'],
  ['__PRICE_EN_DHI__', '$3,999 USD'],
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
  const english = isEnglishFocused(filePath);
  if (english) {
    content = content
      .replace(/(["']price["']\s*:\s*["'])1990(["'])/g, '$1' + '3490' + '$2')
      .replace(/(["']price["']\s*:\s*["'])2490(["'])/g, '$1' + '3999' + '$2')
      .replace(/(price\s*:\s*["'])1990(["'])/g, '$1' + '3490' + '$2')
      .replace(/(price\s*:\s*["'])2490(["'])/g, '$1' + '3999' + '$2');
  } else {
    content = content
      .replace(/(["']price["']\s*:\s*["'])1990(["'])/g, '$1' + '2490' + '$2')
      .replace(/(["']price["']\s*:\s*["'])2490(["'])/g, '$1' + '2990' + '$2')
      .replace(/(price\s*:\s*["'])1990(["'])/g, '$1' + '2490' + '$2')
      .replace(/(price\s*:\s*["'])2490(["'])/g, '$1' + '2990' + '$2');
  }
  return content;
}

function updateContent(content, filePath) {
  let next = content;
  for (const [from, to] of replacementPairs) {
    next = next.split(from).join(to);
  }
  next = replaceStructuredPriceValues(next, filePath);
  return next;
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
