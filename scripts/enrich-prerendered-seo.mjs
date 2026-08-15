import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = {
  fr: {
    planning: [
      '/greffe-de-cheveux-turquie', '/prix-greffe-de-cheveux-turquie', '/greffe-cheveux-istanbul',
      '/greffe-cheveux-turquie-tout-compris', '/greffe-cheveux-turquie-avis', '/greffe-cheveux-turquie-avant-apres',
    ],
    technique: [
      '/greffe-de-cheveux-fue-turquie', '/greffe-de-cheveux-dhi-turquie', '/fue-saphir-turquie',
      '/dhi-ou-fue', '/greffe-cheveux-sans-rasage-turquie', '/douleur-greffe-cheveux-anesthesie',
    ],
    profile: [
      '/greffe-cheveux-femme-turquie', '/greffe-cheveux-afro-turquie', '/greffe-barbe-turquie',
      '/greffe-ligne-frontale-turquie', '/greffe-vertex-turquie', '/greffe-sourcils-turquie', '/greffe-cheveux-cicatrice',
    ],
    safety: [
      '/nombre-greffons-greffe-cheveux', '/zone-donneuse-greffe-cheveux', '/greffe-cheveux-turquie-risques',
      '/reparer-greffe-cheveux-ratee', '/soins-apres-greffe-cheveux', '/apres-greffe-cheveux-mois-par-mois',
      '/deuxieme-greffe-cheveux-turquie',
    ],
  },
  en: {
    planning: [
      '/hair-transplant-turkey', '/turkey-hair-transplant-cost', '/en/hair-transplant-istanbul',
      '/en/all-inclusive-hair-transplant-turkey', '/en/hair-transplant-turkey-reviews', '/en/hair-transplant-turkey-before-after',
    ],
    technique: [
      '/fue-hair-transplant-turkey', '/dhi-hair-transplant-turkey', '/en/sapphire-fue-hair-transplant-turkey',
      '/en/dhi-vs-fue-hair-transplant', '/en/no-shave-hair-transplant-turkey', '/en/hair-transplant-pain-anesthesia',
    ],
    profile: [
      '/en/female-hair-transplant-turkey', '/en/afro-hair-transplant-turkey', '/en/beard-transplant-turkey',
      '/en/hairline-transplant-turkey', '/en/crown-hair-transplant-turkey', '/en/eyebrow-transplant-turkey', '/en/hair-transplant-on-scar',
    ],
    safety: [
      '/en/hair-transplant-graft-count', '/en/hair-transplant-donor-area', '/en/hair-transplant-turkey-risks',
      '/en/hair-transplant-repair-turkey', '/en/hair-transplant-aftercare', '/en/hair-transplant-recovery-timeline',
      '/en/second-hair-transplant-turkey',
    ],
  },
};

const content = {
  fr: {
    planning: {
      title: 'Guide pratique pour préparer votre projet',
      intro: 'Une offre de greffe de cheveux ne doit pas être évaluée uniquement par son prix ou par la destination. Le diagnostic, la réserve donneuse, le dessin, le rôle de l’équipe médicale et le suivi doivent former un ensemble cohérent.',
      assessment: ['Type et évolution de la perte de cheveux', 'Densité, calibre et miniaturisation de la zone donneuse', 'Surface à traiter et priorités esthétiques', 'Antécédents médicaux, traitements et allergies', 'Stratégie à long terme pour préserver les greffons'],
      process: ['Photos standardisées et questionnaire médical', 'Examen sur place et validation de l’indication', 'Confirmation de la technique et du nombre de greffons', 'Intervention, premier contrôle et protocole de lavage', 'Suivi à distance jusqu’à la maturation'],
      factors: ['Conservation et manipulation des follicules', 'Répartition prudente des prélèvements', 'Angle et direction naturels', 'Densité compatible avec la vascularisation', 'Soins postopératoires', 'Évolution future des cheveux non greffés'],
      questions: ['Qui réalise le diagnostic et le dessin ?', 'Qui effectue chaque étape médicale ?', 'Comment le nombre de greffons est-il calculé ?', 'Quelles prestations sont incluses ou exclues ?', 'Comment joindre l’équipe après le retour ?', 'Quels contrôles sont prévus jusqu’à douze mois ?'],
      timeline: [['Avant le départ', 'Diagnostic, consignes médicales et confirmation du séjour.'], ['Jours 1 à 10', 'Protection, lavage progressif, croûtes et rougeurs variables.'], ['Semaines 2 à 8', 'Chute transitoire possible des tiges implantées.'], ['Mois 3 à 6', 'Début de repousse et amélioration progressive.'], ['Mois 9 à 15', 'Maturation de la densité, du calibre et de la texture.']],
    },
    technique: {
      title: 'Comprendre la technique au-delà du nom commercial',
      intro: 'FUE, DHI, Saphir ou sans rasage décrivent surtout des outils ou des modalités de prélèvement et d’implantation. La sélection du patient, le plan opératoire et l’expérience de l’équipe restent les éléments les plus importants.',
      assessment: ['Surface et localisation de la zone receveuse', 'Densité et calibre de la zone donneuse', 'Présence de cheveux natifs à protéger', 'Contraintes de rasage', 'Durée raisonnable de la session et temps hors du corps'],
      process: ['Cartographie de la zone donneuse', 'Extraction folliculaire individuelle', 'Tri et conservation des greffons', 'Création des sites selon l’angle naturel', 'Implantation puis contrôle postopératoire'],
      factors: ['Taux de transection', 'Hydratation des greffons', 'Temps hors du corps', 'Profondeur et orientation', 'Densité compatible avec le tissu', 'Protection de la réserve donneuse'],
      questions: ['Pourquoi cette méthode est-elle adaptée à mon cas ?', 'Quelles sont les alternatives ?', 'Le rasage sera-t-il total ou partiel ?', 'Quelle étape est réalisée par le médecin ?', 'Comment les greffons sont-ils conservés ?', 'Comment évitez-vous le sur-prélèvement ?'],
      timeline: [['Jour de l’intervention', 'Anesthésie locale, prélèvement et implantation.'], ['Première semaine', 'Rougeurs, croûtes, sensibilité et gonflement variables.'], ['Deuxième semaine', 'Élimination progressive des croûtes selon le protocole.'], ['Mois 1 à 3', 'Chute transitoire possible et faible activité visible.'], ['Après le troisième mois', 'Repousse progressive puis maturation.']],
    },
    profile: {
      title: 'Adapter le plan à la zone traitée et au profil',
      intro: 'Une ligne frontale, un vertex, une barbe, des sourcils, des cheveux afro ou une cicatrice exigent des angles, une densité et une sélection des greffons différents. Le naturel vient de l’adaptation, pas d’un modèle identique pour tous.',
      assessment: ['Proportions du visage, âge et habitudes de coiffure', 'Angle naturel de sortie des cheveux ou poils', 'Texture, courbure, calibre et contraste', 'Stabilité de la perte et qualité du tissu', 'Disponibilité de greffons simples et multiples'],
      process: ['Analyse de face et de profil', 'Dessin provisoire discuté avec le patient', 'Sélection des unités folliculaires adaptées', 'Implantation selon la direction locale', 'Évaluation du vieillissement et des besoins futurs'],
      factors: ['Transition irrégulière et progressive', 'Angles très couchés pour barbe et sourcils', 'Respect de la spirale du vertex', 'Précautions pour les follicules afro courbés', 'Densité conservatrice sur les cicatrices', 'Dessin cohérent avec l’âge'],
      questions: ['Avez-vous traité des cas comparables ?', 'Comment adaptez-vous les angles ?', 'Quelle densité est réaliste ?', 'Quels greffons seront placés en bordure ?', 'Une deuxième séance est-elle possible ?', 'Comment le résultat sera-t-il contrôlé ?'],
      timeline: [['Premiers jours', 'Rougeurs, croûtes et visibilité temporaire.'], ['Premières semaines', 'Chute possible des tiges transplantées.'], ['Mois 3 à 6', 'Début de croissance, parfois fine et irrégulière.'], ['Mois 6 à 12', 'Augmentation du calibre et meilleure intégration.'], ['Après maturation', 'Retouche éventuelle selon la zone et la réserve.']],
    },
    safety: {
      title: 'Sécurité, zone donneuse et suivi',
      intro: 'La réserve donneuse est limitée et aucun résultat biologique ne peut être garanti à 100 %. La sécurité repose sur une sélection rigoureuse, un prélèvement conservateur, l’asepsie, des consignes écrites et un suivi accessible.',
      assessment: ['Stabilité et miniaturisation de la zone donneuse', 'Maladies, traitements et risque de saignement', 'Cause d’un résultat antérieur insuffisant', 'Inflammation, infection ou maladie dermatologique', 'Possibilité d’un suivi médical après le retour'],
      process: ['Questionnaire et examen avant l’intervention', 'Consentement et objectifs réalistes', 'Asepsie et répartition homogène des prélèvements', 'Consignes, médicaments et protocole de lavage', 'Contrôles photographiques et bilan final'],
      factors: ['Douleur croissante', 'Fièvre ou malaise', 'Rougeur qui s’étend', 'Écoulement ou odeur inhabituelle', 'Saignement persistant', 'Gonflement important ou réaction médicamenteuse'],
      questions: ['Qui est médicalement responsable ?', 'Comment mesurez-vous la zone donneuse ?', 'Quels risques sont spécifiques à mon cas ?', 'Quels médicaments seront prescrits ?', 'Quel calendrier de suivi est prévu ?', 'Comment joindre l’équipe en urgence ?'],
      timeline: [['24 à 72 heures', 'Contrôle du gonflement, du saignement et de la douleur.'], ['Jours 7 à 14', 'Vérification du lavage et de la cicatrisation.'], ['Mois 1 à 3', 'Surveillance de la chute transitoire et des rougeurs.'], ['Mois 6', 'Évaluation intermédiaire de la repousse.'], ['Mois 12 à 15', 'Bilan avant toute retouche ou deuxième séance.']],
    },
  },
  en: {
    planning: {
      title: 'Practical guide to planning treatment',
      intro: 'A hair transplant offer should not be assessed by price or destination alone. Diagnosis, donor supply, design, medical responsibilities and follow-up must form a coherent plan.',
      assessment: ['Type and progression of hair loss', 'Donor density, calibre and miniaturisation', 'Recipient surface and aesthetic priorities', 'Medical history, medication and allergies', 'Long-term donor-preservation strategy'],
      process: ['Standardised photographs and medical questionnaire', 'In-person examination and indication confirmation', 'Technique and graft-plan validation', 'Procedure, first control and washing protocol', 'Remote follow-up through maturation'],
      factors: ['Graft handling and storage', 'Conservative extraction distribution', 'Natural angle and direction', 'Density compatible with blood supply', 'Postoperative care', 'Future loss of native hair'],
      questions: ['Who performs the assessment and design?', 'Who carries out each medical stage?', 'How is the graft estimate calculated?', 'What is included or excluded?', 'How is the team contacted after travel?', 'Which reviews are planned through twelve months?'],
      timeline: [['Before travel', 'Assessment, medical instructions and travel confirmation.'], ['Days 1–10', 'Protection, progressive washing, crusts and redness.'], ['Weeks 2–8', 'Temporary shedding of transplanted shafts may occur.'], ['Months 3–6', 'Early growth and gradual coverage improvement.'], ['Months 9–15', 'Maturation of density, calibre and texture.']],
    },
    technique: {
      title: 'Understanding the technique beyond its marketing name',
      intro: 'FUE, DHI, Sapphire and no-shave procedures mainly describe tools or methods of extraction and placement. Patient selection, planning and team experience remain more important.',
      assessment: ['Recipient-area size and location', 'Donor density and calibre', 'Native hair that must be protected', 'Shaving constraints', 'Reasonable session length and graft out-of-body time'],
      process: ['Donor mapping', 'Individual follicular extraction', 'Graft sorting and storage', 'Recipient-site creation according to natural angles', 'Placement and postoperative control'],
      factors: ['Transection rate', 'Graft hydration', 'Out-of-body time', 'Depth and direction', 'Density compatible with tissue', 'Donor-area preservation'],
      questions: ['Why is this method suitable?', 'What are the alternatives?', 'Will shaving be full or partial?', 'Which stage is performed by the doctor?', 'How are grafts stored?', 'How is overharvesting prevented?'],
      timeline: [['Procedure day', 'Local anaesthesia, extraction and placement.'], ['First week', 'Redness, crusts, tenderness and swelling may occur.'], ['Second week', 'Crusts are gradually removed according to protocol.'], ['Months 1–3', 'Temporary shedding and limited visible activity.'], ['After month 3', 'Progressive growth and maturation.']],
    },
    profile: {
      title: 'Adapting the plan to the patient and treatment area',
      intro: 'Hairlines, crowns, beards, eyebrows, Afro hair and scars require different angles, density and graft selection. Natural results come from adaptation rather than one design for every patient.',
      assessment: ['Facial proportions, age and styling habits', 'Natural hair or hair-shaft exit angle', 'Texture, curl, calibre and contrast', 'Stability of loss and tissue quality', 'Availability of single and multi-hair grafts'],
      process: ['Frontal and profile assessment', 'Provisional design discussed with the patient', 'Selection of suitable follicular units', 'Placement according to local direction', 'Review of ageing and future needs'],
      factors: ['Irregular gradual transition', 'Flat angles for beard and eyebrows', 'Respect for the crown whorl', 'Care with curved Afro follicles', 'Conservative density on scars', 'Age-appropriate design'],
      questions: ['Have you treated comparable cases?', 'How are angles adapted?', 'What density is realistic?', 'Which grafts form the border?', 'Could a second session be needed?', 'How will the result be reviewed?'],
      timeline: [['First days', 'Redness, crusts and temporary visibility.'], ['First weeks', 'Transplanted shafts may shed.'], ['Months 3–6', 'Early growth may be fine and uneven.'], ['Months 6–12', 'Calibre and aesthetic integration improve.'], ['After maturation', 'A touch-up may be discussed.']],
    },
    safety: {
      title: 'Safety, donor area and follow-up',
      intro: 'Donor supply is limited and biological outcomes cannot be guaranteed. Safety depends on patient selection, conservative extraction, asepsis, written instructions and accessible follow-up.',
      assessment: ['Donor stability and miniaturisation', 'Medical conditions, medication and bleeding risk', 'Cause of a previous poor result', 'Inflammation, infection or skin disease', 'Access to medical support after travel'],
      process: ['Medical questionnaire and examination', 'Consent and realistic objectives', 'Asepsis and even extraction distribution', 'Instructions, medicines and washing protocol', 'Photographic reviews and final assessment'],
      factors: ['Increasing pain', 'Fever or malaise', 'Spreading redness', 'Discharge or unusual odour', 'Persistent bleeding', 'Severe swelling or drug reaction'],
      questions: ['Who is medically responsible?', 'How is the donor area measured?', 'Which risks apply to my case?', 'Which medicines are prescribed?', 'When should follow-up photographs be sent?', 'How can the team be reached urgently?'],
      timeline: [['24–72 hours', 'Review swelling, bleeding and pain.'], ['Days 7–14', 'Check washing and healing.'], ['Months 1–3', 'Monitor temporary shedding and redness.'], ['Month 6', 'Intermediate growth assessment.'], ['Months 12–15', 'Review before any touch-up or second procedure.']],
    },
  },
};

const list = (items) => `<ul style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;padding:0;list-style:none">${items.map((item) => `<li style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px">${item}</li>`).join('')}</ul>`;

function richMarkup(lang, category, topic) {
  const data = content[lang][category];
  const isFr = lang === 'fr';
  return `
    <section data-static-rich-seo="true" style="margin-top:48px;border-top:1px solid #e2e8f0;padding-top:42px">
      <p style="font-weight:700;color:#2f6bfc">${isFr ? 'Guide pratique approfondi' : 'In-depth practical guide'}</p>
      <h2 style="font-size:30px;color:#224671;margin:8px 0 16px">${data.title}</h2>
      <p style="font-size:18px;line-height:1.75">Pour ${topic}, ${data.intro.charAt(0).toLowerCase()}${data.intro.slice(1)}</p>

      <h3 style="font-size:24px;color:#224671;margin-top:34px">${isFr ? 'Éléments à analyser' : 'Elements to assess'}</h3>
      ${list(data.assessment)}

      <h3 style="font-size:24px;color:#224671;margin-top:34px">${isFr ? 'Déroulement détaillé' : 'Detailed pathway'}</h3>
      ${list(data.process)}

      <h3 style="font-size:24px;color:#224671;margin-top:34px">${isFr ? 'Facteurs importants et signes à surveiller' : 'Important factors and warning signs'}</h3>
      ${list(data.factors)}

      <h3 style="font-size:24px;color:#224671;margin-top:34px">${isFr ? 'Questions à poser avant de décider' : 'Questions to ask before deciding'}</h3>
      <ol style="line-height:1.8">${data.questions.map((item) => `<li>${item}</li>`).join('')}</ol>

      <h3 style="font-size:24px;color:#224671;margin-top:34px">${isFr ? 'Repères chronologiques' : 'Timeline'}</h3>
      <div>${data.timeline.map(([period, text]) => `<p style="border-left:4px solid #2f6bfc;background:#f8fafc;padding:12px 16px"><strong>${period} :</strong> ${text}</p>`).join('')}</div>

      <p style="margin-top:28px"><a href="${isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides'}" style="color:#2f6bfc;font-weight:700">${isFr ? 'Consulter tous les guides capillaires' : 'Browse all hair transplant guides'}</a></p>
    </section>`;
}

let updated = 0;
for (const lang of ['fr', 'en']) {
  for (const category of ['planning', 'technique', 'profile', 'safety']) {
    for (const route of routes[lang][category]) {
      const relative = route.replace(/^\//, '');
      const paths = [
        join(process.cwd(), 'dist', `${relative}.html`),
        join(process.cwd(), 'dist', relative, 'index.html'),
      ];

      for (const filePath of paths) {
        try {
          let html = await readFile(filePath, 'utf8');
          if (html.includes('data-static-rich-seo="true"')) continue;
          const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '') || (lang === 'fr' ? 'ce projet de greffe capillaire' : 'this hair transplant topic');
          const markup = richMarkup(lang, category, h1);
          html = html.replace('</main>', `${markup}\n    </main>`);
          await writeFile(filePath, html, 'utf8');
          updated += 1;
        } catch {
          // Some routes may only have one of the two generated representations.
        }
      }
    }
  }
}

console.log(`Enriched ${updated} prerendered SEO files.`);
