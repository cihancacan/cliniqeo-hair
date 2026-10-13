
const escapeHtml = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

/**
 * Evidence-oriented editorial notes: no claims about local clinics, live flight
 * schedules, local medical prices or actual patients from the indexed city.
 * Only logistics that a prospective traveller can verify independently.
 */
const cityNotes = {
  fr: {
    paris: "À Paris, comparez les trajets vers Paris-CDG et Paris-Orly, ainsi que le temps de retour à votre domicile après le vol. Le coût du transfert parisien n’est pas compris dans un forfait de soins à Istanbul.",
    lyon: "À Lyon, anticipez le trajet entre votre domicile et Lyon-Saint-Exupéry, surtout si votre vol retour vous impose de rentrer tard. Réservez votre retour après validation du calendrier postopératoire.",
    marseille: "À Marseille, comparez votre accès à Marseille-Provence avec les autres itinéraires possibles selon les dates. Gardez une marge suffisante entre le retour à l’aéroport et le trajet jusqu’à votre domicile.",
    toulouse: "À Toulouse, examinez les horaires et les éventuelles correspondances au départ de Toulouse-Blagnac : le billet le moins cher peut prolonger sensiblement le voyage aller ou retour.",
    bordeaux: "À Bordeaux, additionnez au devis le trajet jusqu’à Bordeaux-Mérignac, le stationnement éventuel et le bagage nécessaire pour les soins postopératoires.",
    nice: "À Nice, l’accès à Nice-Côte d’Azur peut être simple depuis l’agglomération, mais comparez aussi les plages horaires : un retour le soir n’offre pas les mêmes possibilités de repos.",
    nantes: "À Nantes, vérifiez les correspondances possibles depuis Nantes-Atlantique et le temps de parcours depuis Saint-Nazaire ou Angers si vous ne vivez pas dans la métropole.",
    lille: "À Lille, comparez l’option Lille-Lesquin aux itinéraires impliquant un autre aéroport accessible par le train. Tenez compte de l’aller comme du retour avant de réserver.",
    strasbourg: "À Strasbourg, comparez Strasbourg-Entzheim et les autres départs accessibles en train ; le nombre de correspondances peut avoir plus d’impact que la différence de tarif affichée.",
    montpellier: "À Montpellier, prévoyez le temps d’accès à Montpellier-Méditerranée et vérifiez l’alternative d’un itinéraire via une autre ville uniquement si la durée totale reste raisonnable.",
    rennes: "À Rennes, estimez le trajet complet depuis Rennes-Bretagne en intégrant d’éventuelles correspondances, l’arrivée à Istanbul et le transfert prévu par la clinique.",
    grenoble: "À Grenoble, le départ via Lyon-Saint-Exupéry ajoute un trajet terrestre. Intégrez cette durée au programme et évitez de caler trop tôt votre retour après le contrôle médical.",
    rouen: "À Rouen, l’accès à Paris-CDG nécessite une étape supplémentaire avant le vol. Comparez train, navette et voiture, y compris le coût du retour après l’intervention.",
    toulon: "À Toulon, un départ via Marseille-Provence suppose un transfert interurbain ; comparez sa durée et son coût avec les éventuelles alternatives.",
    reims: "À Reims, le trajet vers Paris-CDG fait partie du budget réel. Anticipez les horaires de train et les contraintes de récupération du véhicule au retour.",
    dijon: "À Dijon, le départ via Lyon-Saint-Exupéry ajoute une portion de voyage en France. Elle doit figurer dans le calcul du coût et du temps d’absence.",
    angers: "À Angers, examinez l’accès à Nantes-Atlantique avant de comparer les billets : le trajet jusqu’à l’aéroport peut modifier l’intérêt d’un tarif.",
    nimes: "À Nîmes, Montpellier-Méditerranée est une option de départ à évaluer ; n’oubliez pas le déplacement terrestre au retour et les possibles correspondances.",
    "clermont-ferrand": "À Clermont-Ferrand, un itinéraire via Lyon-Saint-Exupéry nécessite du temps supplémentaire. Évitez de fonder le choix sur le seul prix du billet.",
    tours: "À Tours, un départ via Paris-Orly exige d’intégrer la correspondance terrestre. Vérifiez l’heure réelle à laquelle vous pourrez rentrer après le contrôle médical.",
    metz: "À Metz, Luxembourg peut être un point de départ à comparer. Vérifiez les conditions du trajet transfrontalier et les horaires disponibles au moment de réserver.",
    nancy: "À Nancy, un départ via Luxembourg ajoute un transfert transfrontalier. Vérifiez que les horaires de départ et de retour conviennent au programme postopératoire.",
    orleans: "À Orléans, le trajet vers Paris-Orly représente une composante du séjour. Ajoutez son coût aux vols et demandez confirmation des dates médicales avant tout achat.",
    caen: "À Caen, le déplacement vers Paris-CDG peut demander plusieurs heures. Prenez en compte cette étape et la fatigue du retour dans votre organisation."
  },
  uk: {
    london: "For London, compare Heathrow with other London-area departure airports, allowing for the cost and time of getting home after surgery. Confirm which Istanbul airport your transfer service covers.",
    birmingham: "From Birmingham, compare the complete journey through Birmingham Airport with any connecting itinerary. Include airport parking or rail travel in your budget.",
    manchester: "For Manchester, assess Manchester Airport departure times and return arrangements rather than choosing solely on airfare. Ask when the clinic expects you to be fit to fly.",
    glasgow: "From Glasgow, compare the full itinerary from Glasgow Airport, including any connection and the time needed to get home in Scotland afterwards.",
    leeds: "For Leeds, plan the journey to Leeds Bradford Airport and possible connections. The number and duration of flight segments matter after a procedure.",
    liverpool: "From Liverpool, Liverpool John Lennon Airport is one starting point; compare its total journey time with other airports you can realistically reach.",
    newcastle: "From Newcastle, compare timings from Newcastle International and the practicalities of arriving back in the North East after the planned postoperative review.",
    sheffield: "For Sheffield, travelling to Manchester Airport adds a ground segment. Budget for that journey as well as the procedure and Istanbul accommodation.",
    bristol: "From Bristol, evaluate the whole route from Bristol Airport, including any connection and arrival time in Istanbul, before confirming the medical dates.",
    edinburgh: "From Edinburgh, compare the duration and connection points for departure from Edinburgh Airport; allow for travel back home following the return flight.",
    cardiff: "From Cardiff, check whether Cardiff Airport offers a suitable itinerary for your planned dates and compare total travel time, not just the advertised ticket price.",
    belfast: "From Belfast, examine the full itinerary through Belfast International, especially any connection and travel-document requirements that may apply to your nationality.",
    nottingham: "From Nottingham, East Midlands Airport is an option; include ground travel and potential flight connections when comparing two treatment proposals.",
    leicester: "From Leicester, calculate the time to East Midlands Airport and evaluate flight schedules against the postoperative review planned in Istanbul.",
    southampton: "From Southampton, the journey to London Gatwick introduces extra ground travel. Check arrival time back in the UK and how you will reach home.",
    brighton: "From Brighton, travel to London Gatwick can be part of a practical itinerary, but include that expense and your onward journey home after the operation.",
    cambridge: "From Cambridge, London Stansted is a departure option to examine; check parking or rail connections, flight times and the Istanbul airport specified in the quote.",
    oxford: "From Oxford, Heathrow can be considered, but the cost of getting there and returning home belongs in the total comparison.",
    coventry: "From Coventry, the transfer to Birmingham Airport forms part of the travel plan. Check timings carefully before committing to dates.",
    reading: "From Reading, Heathrow is one option; compare access costs and the full return time with the schedule agreed by your treating clinician."
  },
  us: {
    "los-angeles-california": "For Los Angeles, compare the full itinerary from LAX with the likely long-haul journey and time-zone adjustment. Leave enough time at home for follow-up communication.",
    "miami-florida": "For Miami, compare the full journey from MIA, including Istanbul arrival time, the clinic’s transfer arrangements and your return to South Florida.",
    "new-york-city-new-york": "For New York, consider the time and cost of reaching JFK, the long-haul travel schedule and who you would contact locally if you needed an in-person review.",
    "chicago-illinois": "From Chicago, assess flights through O’Hare and the return itinerary as carefully as the headline price. A domestic connection can change the practical travel time.",
    "houston-texas": "From Houston, evaluate the international journey via George Bush Intercontinental and the full elapsed time before arriving at the Istanbul hotel.",
    "phoenix-arizona": "From Phoenix, compare connections from Sky Harbor and the effect of additional travel legs when scheduling a postoperative check before returning to Arizona.",
    "las-vegas-nevada": "From Las Vegas, check complete travel time from Harry Reid International, not just the outbound fare, and include time-zone differences in your recovery plan.",
    "atlanta-georgia": "For Atlanta, Hartsfield-Jackson is a starting point for comparing itineraries. Confirm luggage rules and Istanbul airport transfers in your written offer.",
    "boston-massachusetts": "For Boston, compare long-haul options from Logan and plan how to access in-person care in Massachusetts if an unexpected postoperative issue arises.",
    "denver-colorado": "From Denver, compare international itineraries from DEN and leave room in your schedule for an extra connection or changes before returning to Colorado.",
    "seattle-washington": "From Seattle, international flight duration and time-zone changes can be significant. Ask the clinic to confirm the safe return date before buying your fare.",
    "san-francisco-california": "From San Francisco, compare SFO travel times and the entire return journey. Build the cost of additional nights into a contingency budget.",
    "washington-dc": "From the Washington, DC area, compare the accessible international airports and the total journey time rather than focusing only on an advertised clinic price.",
    "philadelphia-pennsylvania": "From Philadelphia, compare the total journey via Philadelphia International and possible connections, with particular attention to the time you return home.",
    "orlando-florida": "From Orlando, estimate the complete travel time from the Orlando area and confirm the Istanbul arrival airport before relying on quoted transfers.",
    "detroit-michigan": "From Detroit, assess the full itinerary through DTW and plan how you would obtain a face-to-face review after returning home if required.",
    "nashville-tennessee": "From Nashville, a connection may affect the total time away from work. Confirm travel dates only after reviewing the medical schedule.",
    "new-orleans-louisiana": "From New Orleans, account for any connecting journey and your time to return home when comparing the overall cost of care.",
    "portland-oregon": "From Portland, the distance to Istanbul makes a complete airfare-and-recovery budget particularly important; clarify follow-up arrangements before travelling.",
    "minneapolis-minnesota": "From Minneapolis, compare complete international journeys from MSP and the practical arrangements for getting home after landing.",
    "salt-lake-city-utah": "From Salt Lake City, include possible connecting flights and time-zone changes when deciding how many days to allow for a trip.",
    "honolulu-hawaii": "From Honolulu, the very long journey to Istanbul should be a central part of your decision, alongside medical suitability, recovery time and follow-up access."
  }
};

const frFocus = {
  complete: {
    heading: "Décider entre un parcours local et un séjour médical à l’étranger",
    advice: "Un avis de proximité facilite les consultations physiques. L’alternative d’Istanbul implique un déplacement international, une coordination écrite des soins et un plan de suivi après le retour. Avant tout engagement, comparez les responsabilités réelles du médecin, le besoin de consultations ultérieures et le coût du séjour, pas une promesse de densité.",
    questions: ["Le médecin a-t-il identifié la cause de la chute avant de proposer une chirurgie ?", "Quel est le plan pour une éventuelle progression future de la calvitie ?", "Qui assure une consultation en personne après mon retour si nécessaire ?"]
  },
  technique: {
    heading: "Comparer FUE, DHI et alternatives sans choisir sur un slogan",
    advice: "La FUE décrit une méthode d’extraction des unités folliculaires. La DHI décrit notamment une technique de mise en place utilisant un implanteur. Les termes commerciaux ne remplacent ni l’examen de la zone donneuse ni le choix médical : demandez quelles étapes seront réalisées, par qui et pourquoi. Les traitements non chirurgicaux peuvent aussi être discutés selon la cause de la chute.",
    questions: ["Quel geste exact désigne la technique annoncée sur ce devis ?", "La surface à couvrir et la réserve donneuse ont-elles été évaluées ?", "Faut-il un rasage et quelle conduite tenir pour les cheveux existants ?"]
  },
  implant: {
    heading: "Comprendre les greffons et leurs limites",
    advice: "Une greffe capillaire redistribue des follicules existants : elle ne crée pas une nouvelle réserve de cheveux. La densité visuelle dépend de la qualité des greffons, du dessin de la ligne frontale et de la gestion du prélèvement. Demandez une estimation motivée et distinguez le nombre de greffons du nombre de cheveux.",
    questions: ["Quel volume prélever sans fragiliser la zone donneuse ?", "Combien de greffons plutôt que combien de cheveux sont proposés ?", "Comment seront traités les golfes, le vertex et l’évolution future ?"]
  },
  price: {
    heading: "Construire le vrai budget et comprendre le financement",
    advice: "Comparez les prix sur la même base : actes, médecin, hébergement, transferts locaux, vols, médicaments, consultations complémentaires, suivi et éventuel accompagnant. Demandez un devis total écrit et les conditions de modification et d’annulation. Un financement en plusieurs fois est éventuel, soumis à acceptation et à ses conditions, pas un avantage garanti.",
    questions: ["Quels frais restent à régler en dehors du forfait ?", "Dans quelle monnaie et à quel moment le solde est-il exigible ?", "Quel est le coût total du crédit si un financement est proposé ?"]
  },
  clinic: {
    heading: "Vérifier l’identité et les responsabilités de l’équipe médicale",
    advice: "L’organisateur du séjour n’est pas nécessairement l’établissement qui opère. Exigez le nom et l’adresse de la clinique, l’identité du médecin, le rôle de chacun pendant l’extraction et l’implantation, les documents de consentement et le contact à joindre en cas de complication. La transparence est un critère plus utile qu’une note marketing.",
    questions: ["Qui réalise le diagnostic et signe le protocole médical ?", "Qui effectue les incisions, l’extraction et l’implantation ?", "Quelle procédure est prévue en cas de complication après le retour ?"]
  }
};

const enFocus = {
  complete: {
    heading: "Compare local consultation with an international care journey",
    advice: "Local treatment may make follow-up appointments simpler; treatment in Istanbul adds travel, remote coordination and the need for a clear handover plan. Compare who provides the medical assessment, the expected recovery period and how any complication will be managed after you return home.",
    questions: ["Has a clinician established the cause of the hair loss?", "How will future hair loss affect the proposed hairline?", "Who will provide face-to-face care if I need it at home?"]
  },
  technique: {
    heading: "Separate extraction method from implantation marketing",
    advice: "FUE refers to extraction of follicular units. DHI often describes how grafts are implanted using an implanter. Marketing labels should not determine the treatment. Ask the clinician to explain the donor assessment, the receiving area, shaving expectations and reasonable alternatives, including non-surgical management.",
    questions: ["Which surgical steps are included in the named technique?", "How was donor capacity assessed?", "How will native hair and future thinning be managed?"]
  },
  implant: {
    heading: "Understand what a graft count really means",
    advice: "Hair transplantation redistributes existing follicles rather than creating new ones. A graft and a hair are not interchangeable counts. Discuss the balance between frontal coverage, crown coverage, the lifetime donor reserve and realistic density before accepting a headline graft promise.",
    questions: ["Does the estimate count grafts or individual hairs?", "How is the donor region protected?", "What happens if the in-person assessment changes the plan?"]
  },
  price: {
    heading: "Calculate the full cost of treatment abroad",
    advice: "Compare the same components in both quotations: procedure, clinician responsibilities, medicines, hotel, transfer, return flights, time away from work and follow-up. Add currency conversion and possible extra nights. An attractive advertised procedure price is not proof that the total trip will cost less.",
    questions: ["What costs are explicitly excluded from the written proposal?", "What currency and payment terms apply?", "Are extra reviews, nights or a companion charged separately?"]
  },
  clinic: {
    heading: "Perform due diligence on the treating team",
    advice: "Before selecting a provider, ask for the clinic location, named clinician, qualifications, who performs each surgical stage and the process for adverse events. Verify independently where possible. A coordination agency is not itself evidence of medical registration or suitability.",
    questions: ["Who diagnoses and performs each stage of surgery?", "What written records and consent documents will I receive?", "What is the emergency and follow-up plan after I return home?"]
  }
};

function practicalChecklist(country, city, intent) {
  const isFr = country === 'fr';
  const where = isFr ? city.name : city.name + (country === 'us' ? ', ' + city.region : '');
  const route = isFr ? 'depuis ' + where : 'from ' + where;
  const airport = escapeHtml(city.airport) + ' (' + escapeHtml(city.airportCode) + ')';
  const notes = cityNotes[country]?.[city.slug] ??
    (isFr ? 'À ' + where + ', comparez le départ via ' + city.airport + ' avec les autres aéroports réellement accessibles, en incluant le trajet terrestre, les correspondances et le retour après le contrôle médical.'
      : 'From ' + where + ', assess the full itinerary via ' + city.airport + ', including connections, recovery time, and onward travel home after the procedure.');
  const focus = (isFr ? frFocus : enFocus)[intent];
  const source = country === 'uk'
    ? { url: 'https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/hair-transplant/', label: 'NHS — hair transplant: risks, costs and recovery' }
    : country === 'us'
      ? { url: 'https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat', label: 'American Academy of Dermatology — diagnosing hair loss' }
      : { url: 'https://forum-assures.ameli.fr/questions/3430522-greffe-cheveux', label: 'Assurance Maladie — prise en charge des greffes de cheveux selon les cas' };
  return { isFr, where, route, airport, notes, focus, source };
}

export function localEditorialDepth(country, city, keyword, cities, keywords) {
  const data = practicalChecklist(country, city, keyword.intent);
  const { isFr, where, route, airport, notes, focus, source } = data;
  const list = cities.filter(c => c.slug !== city.slug && c.region === city.region).slice(0, 2);
  const fallback = list.length ? list : cities.filter(c => c.slug !== city.slug).slice(0, 2);
  const cityLinks = fallback.map(c => {
    const routePath = country === 'fr'
      ? 'https://cliniqeo.com/greffe-cheveux-turquie/' + keyword.slug + '-' + c.slug
      : 'https://cliniqeo.com/en/hair-transplant-turkey/' + country + '/' + keyword.slug + '-' + c.slug;
    return '<li><a class="font-semibold text-[#2f6bfc] underline" href="' + routePath + '">' +
      escapeHtml(keyword.label) + (isFr ? ' à ' : ' in ') + escapeHtml(c.name) + '</a></li>';
  }).join('');
  const lead = isFr
    ? 'Cette fiche compare les options depuis ' + where + ' : Cliniqeo ne possède pas de clinique dans cette ville. Les soins éventuellement organisés par Cliniqeo sont réalisés en Turquie par les professionnels de santé partenaires, après évaluation médicale.'
    : 'This guide compares options for people in ' + where + '. Cliniqeo does not operate a clinic here: any procedure it coordinates takes place in Turkey with partner healthcare professionals, subject to clinical assessment.';
  const sources = [
    source,
    { url: 'https://ishrs.org/patients/consumer-advocacy/', label: 'ISHRS — questions à poser avant une greffe / questions to ask before surgery' }
  ];
  const bullets = focus.questions.map(q => '<li class="rounded-lg bg-white p-4 text-slate-700">' + escapeHtml(q) + '</li>').join('');
  const links = sources.map(s => '<li><a rel="noopener noreferrer" href="' + s.url + '" target="_blank" class="font-semibold text-[#2f6bfc] underline">' + escapeHtml(s.label) + '</a></li>').join('');
  return `
  <section id="city-editorial-guide" class="bg-white py-16" aria-labelledby="city-editorial-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl">
        <p class="mb-3 font-bold uppercase tracking-wide text-[#2f6bfc]">${isFr ? 'Guide pratique et vérifiable' : 'Practical, evidence-led guide'}</p>
        <h2 id="city-editorial-title" class="mb-5 text-3xl font-bold text-[#224671] md:text-4xl">${escapeHtml(focus.heading)} — ${escapeHtml(where)}</h2>
        <p class="mb-5 text-lg leading-relaxed text-slate-700">${escapeHtml(lead)}</p>
        <p class="mb-5 text-lg leading-relaxed text-slate-700">${escapeHtml(focus.advice)}</p>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <article class="rounded-2xl border border-blue-100 bg-[#f7fbff] p-6">
          <h3 class="mb-4 text-xl font-bold text-[#224671]">${isFr ? 'Questions à poser avant de réserver' : 'Questions to answer before booking'}</h3>
          <ul class="space-y-3">${bullets}</ul>
        </article>
        <article class="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 class="mb-4 text-xl font-bold text-[#224671]">${isFr ? 'Préparer réellement le trajet' : 'Plan the actual journey'}</h3>
          <p class="mb-4 leading-relaxed text-slate-700">${escapeHtml(notes)}</p>
          <p class="leading-relaxed text-slate-600">${isFr ? 'Point de départ à vérifier : ' : 'Departure point to check: '}${airport}. ${isFr ? 'Les vols et les correspondances ne sont ni garantis ni inclus automatiquement. Demandez la date de retour conseillée par le praticien avant de payer les billets.' : 'Flights and connections are neither guaranteed nor automatically included. Confirm the clinician-approved return date before purchasing flights.'}</p>
        </article>
      </div>
      <aside class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 class="mb-3 text-xl font-bold text-[#224671]">${isFr ? 'Sources indépendantes et transparence' : 'Independent sources and transparency'}</h3>
        <p class="mb-3 leading-relaxed text-slate-700">${isFr ? 'Ces ressources externes aident à vérifier les risques, les qualifications et les conditions de prise en charge. Elles ne constituent ni un partenariat ni une recommandation de Cliniqeo par ces organismes.' : 'These third-party sources help you check risks, clinical credentials and suitability. Linking to them does not imply endorsement of Cliniqeo by these organisations.'}</p>
        <ul class="space-y-2">${links}</ul>
        <p class="mt-4 text-sm text-slate-600">${isFr ? 'Information générale, non personnalisée. Un professionnel de santé détermine si la greffe est indiquée.' : 'General information, not personal medical advice. A qualified clinician determines whether surgery is appropriate.'}</p>
      </aside>
      <nav class="mt-8" aria-label="${isFr ? 'Autres guides régionaux' : 'Other city guides'}">
        <h3 class="mb-3 text-lg font-bold text-[#224671]">${isFr ? 'Comparer aussi avec d’autres villes' : 'Explore other city comparisons'}</h3>
        <ul class="flex flex-wrap gap-5">${cityLinks}</ul>
      </nav>
    </div>
  </section>`;
}
