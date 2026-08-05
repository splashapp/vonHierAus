const WM = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const senegal = {
  id: 'senegal',
  name: 'Senegal',
  nameEn: 'Senegal',
  tagline: 'Teranga – die Kunst der Gastfreundschaft am Atlantik',
  // Optionaler, längerer Stimmungs-Absatz direkt unter der Tagline im Hero — hier bewusst
  // genutzt, um Teranga nicht nur als Wort, sondern als gelebtes gesellschaftliches Prinzip
  // einzufangen.
  heroLede:
    'Teranga ist mehr als ein Wort für Gastfreundschaft – es ist ein gelebtes gesellschaftliches Versprechen: Fremde werden bewirtet, bevor nach ihrem Namen gefragt wird, und das gemeinsame Essen aus einer großen Schüssel gilt als Ausdruck von Gemeinschaft und Vertrauen. Wer Senegal bereist, spürt das oft direkter in Alltagsbegegnungen als in jedem Reiseführer.',
  status: 'active',

  flagImage: { src: `${WM}/Flag_of_Senegal.svg`, alt: 'Flagge von Senegal', credit: 'Wikimedia Commons' },
  heroImage: {
    src: `${WM}/Ile-de-goree.jpg`,
    alt: 'Die Île de Gorée vor der Küste Dakars',
    credit: 'Wikimedia Commons',
  },
  // Rotierende Hero-Diashow (löst heroImage ab) — nutzt bereits verifizierte Fotos, die auch
  // unten bei den Reisezielen vorkommen, damit kein zusätzlicher Bild-Research nötig war.
  heroSlides: [
    {
      src: `${WM}/Ile-de-goree.jpg`,
      alt: 'Die Île de Gorée vor der Küste Dakars',
      credit: 'Wikimedia Commons',
    },
    {
      src: `${WM}/RetbaLakeShore.jpg`,
      alt: 'Der pinke Lac Rose (Lac Retba) nordöstlich von Dakar',
      credit: 'Wikimedia Commons',
    },
    {
      src: `${WM}/Pont_Faidherbe_Saint-Louis.jpg`,
      alt: 'Die Faidherbe-Brücke in Saint-Louis',
      credit: 'Wikimedia Commons',
    },
    {
      src: `${WM}/Monument_renaissance.jpg`,
      alt: 'Das African Renaissance Monument bei Dakar',
      credit: 'Wikimedia Commons',
    },
  ],

  // Bewusst andere Farbwelt, Hintergrundton und Schriftpaarung als Marokko, damit sich das
  // Land beim Durchklicken spürbar anders anfühlt (siehe CLAUDE.md, "Farb-, Hintergrund- und
  // Typografie-Konvention").
  theme: {
    primary: '#00853F', // Grün der Flagge
    secondary: '#FDEF42', // Gelb der Flagge
    accent: '#E31B1E', // Rot der Flagge
    surface: '#FDF3DC', // warmer, sandig-goldener Hintergrundton (Sahel-Sonne statt Wüsten-Creme)
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Mulish:wght@400;500;600;700&display=swap',
  },

  facts: {
    capital: 'Dakar',
    capitalImage: {
      src: `${WM}/La_mosquée_de_la_divinité,_Dakar.jpg`,
      alt: 'Die Moschee der Göttlichkeit an der Küste von Dakar',
      credit: 'Tbo47, Wikimedia Commons',
    },
    capitalPopulation: '≈1,3 Mio.',
    population: '≈18,5 Mio.',
    government: 'Präsidiale Republik',
    officialLanguages: ['Französisch'],
    currencyCode: 'XOF',
    currencyName: 'CFA-Franc BCEAO',
    eurExchangeRate: 655.957,
    area: '196.722 km²',
    areaComparison: 'nur wenig kleiner als Belarus',
    timezone: 'Africa/Dakar',
    capitalCoords: { lat: 14.6937, lon: -17.4441 },
    neighbors: ['Mauretanien', 'Mali', 'Guinea', 'Guinea-Bissau', 'Gambia'],
    // Erscheint als eigene 2-Spalten-Kachel am Ende von FactGrid — landet dadurch automatisch
    // in der Zeile direkt unter Bevölkerung/Staatsform (siehe FactGrid.jsx).
    factsNotes: [
      {
        label: 'Religion',
        text: 'Rund 95 % der Bevölkerung sind Muslime, überwiegend Anhänger sufischer Bruderschaften wie der Mouridiyya und Tijaniyya. Die heilige Stadt Touba, Zentrum der 1887 von Cheikh Amadou Bamba gegründeten Mouriden-Bruderschaft, zieht beim jährlichen „Grand Magal" Millionen Pilger an – eine der größten religiösen Versammlungen Afrikas. Die kleine christliche Minderheit (≈4 %) lebt traditionell in enger, oft familiärer Nähe zur muslimischen Mehrheit; Senegals erster Präsident Léopold Sédar Senghor war Katholik.',
      },
      {
        label: 'Ein Name, der geblieben ist',
        text: [
          'Jeden Januar spricht die Welt von der Dakar – von Dünen, Rennwagen, Staub. Kaum jemand denkt dabei noch an eine Stadt am Atlantik. Dabei ist genau das der Ursprung: Dakar ist die Hauptstadt des Senegal, und einmal war sie das Ziel.',
          'Von 1979 an fuhr die Rallye von Paris quer durch die Sahara bis hierher. Das klassische Ankunftsbild war der Lac Rose, ein rosafarben schimmernder Salzsee, in dem Menschen bis heute mit bloßen Händen Salz vom Grund brechen. Fast dreißig Jahre lang stand dieses Bild für das Ende der härtesten Rallye der Welt. 2008 wurde die Ausgabe wegen Terrordrohungen abgesagt, danach zog die Veranstaltung nach Südamerika, seit 2020 nach Saudi-Arabien. Der Name blieb – während die Stadt, die ihn gab, aus dem Blick geriet.',
        ],
      },
      {
        label: 'Mehr als eine Ziellinie',
        text: [
          'Man kann das romantisch erzählen: Weite, Freiheit, Ankunft am Meer. Ehrlicher ist die zweite Seite. Die Rallye trug ein sehr europäisches Bild von Westafrika in die Welt – die Wüste als Bühne, die Menschen am Straßenrand als Statisten. Und die Kosten trugen nicht nur die Fahrer: Über die Jahrzehnte starben auch Anwohner, kritisiert wurden die Umweltspuren Hunderter Fahrzeuge. Der Glanz des Zielbildes und diese Bilanz gehören zusammen.',
          'Dakar war nie nur eine Ziellinie. Der Lac Rose ist keine Rennkulisse, sondern ein Ort, an dem seit Generationen Salz gewonnen wird – lange bevor der erste Motor durch die Sahara heulte, und lange nachdem der letzte fort war. Diese Reise fährt nicht hindurch. Sie kommt an und schaut sich an, was das Ziel eigentlich war.',
        ],
      },
    ],
  },

  // Wolof — die im Alltag von rund 80% der Bevölkerung gesprochene Verkehrssprache,
  // nicht die Amtssprache Französisch. Wolof wird nativ in lateinischer Schrift geschrieben;
  // "local" ist die korrekte Standard-Orthografie, "phonetic" eine vereinfachte, für
  // Deutschsprachige lesbare Ausspracheführung.
  phrasebook: {
    languageName: 'Wolof',
    sourceNote: 'Wolof ist stark mündlich geprägt, Schreibweisen können variieren',
    categories: [
      {
        title: 'Begrüßungen',
        phrases: [{ de: 'Hallo', local: 'Na nga def', phonetic: 'Na nga def' }],
      },
      {
        title: 'Verabschiedungen',
        phrases: [{ de: 'Tschüss', local: 'Ba beneen', phonetic: 'Ba beneen' }],
      },
      {
        title: 'Höflichkeitswörter',
        phrases: [
          { de: 'Danke', local: 'Jërëjëf', phonetic: 'Djerre-djeff' },
          { de: 'Bitte', local: 'La neexee', phonetic: 'La nee-chee' },
          { de: 'Entschuldigung', local: 'Baal ma', phonetic: 'Baal ma' },
        ],
      },
      {
        title: 'Standard-Sätze',
        phrases: [
          { de: 'Ich verstehe nicht', local: 'Dégguma', phonetic: 'Deggu-ma' },
          { de: 'Was kostet das?', local: 'Ñaata lay jar?', phonetic: 'Nyaata lai djar?' },
          { de: 'Mein Name ist …', local: 'Maa ngi tudd …', phonetic: 'Maa ngi tudd …' },
          { de: 'Ich heiße …', local: 'Maa ngi tudd …', phonetic: 'Maa ngi tudd …' },
          { de: 'Sprechen Sie Englisch?', local: 'Ndax dégg nga angale?', phonetic: 'Ndax degg nga anga-lay?' },
          { de: 'Hilfe!', local: 'Wóoy!', phonetic: 'Woy!' },
        ],
      },
    ],
  },

  history: [
    { year: '2024', event: 'Bassirou Diomaye Faye wird mit 44 Jahren jüngster gewählter Präsident Senegals' },
    { year: '2012', event: 'Macky Sall wird nach demokratischem Machtwechsel Präsident' },
    { year: '2000', event: 'Abdoulaye Wade gewählt – erster demokratischer Machtwechsel seit der Unabhängigkeit' },
    { year: '1978', event: 'Île de Gorée wird erste afrikanische UNESCO-Welterbestätte' },
    { year: '1960', event: 'Unabhängigkeit von Frankreich (4. April), Senghor wird erster Präsident' },
    { year: '1659', event: 'Gründung von Saint-Louis als französischer Handelsposten' },
  ],

  neighborsNotes: [
    {
      label: 'Reisekombination',
      text: 'Gambia lässt sich unkompliziert mit Senegal kombinieren. Für Mali, Guinea und Guinea-Bissau lohnt sich vor der Planung ein Blick auf die aktuellen Reise- und Sicherheitshinweise des Auswärtigen Amts.',
    },
    {
      label: 'Gambia-Enklave',
      text: 'Gambia erstreckt sich als schmaler Streifen entlang des Gambia-Flusses und ist auf drei Seiten fast vollständig von Senegal umschlossen – ein Erbe der britisch-französischen Kolonialaufteilung des 19. Jahrhunderts. Die Trans-Gambia-Brücke bei Farafenni verbindet seit 2019 beide Landesteile Senegals, ohne Fährüberfahrt.',
    },
  ],

  // Eigene Kachel direkt neben Nachbarländer + Timeline (siehe NeighborsHistoryGrid) —
  // politisch/historisch sensibler Kontext zur Casamance, sachlich und neutral formuliert.
  neighborsHistoryNotes: [
    {
      label: 'Casamance-Konflikt',
      text: 'Die südliche Region Casamance ist durch Gambia geografisch vom übrigen Senegal getrennt. Seit 1982 kämpfte hier die Bewegung MFDC (Mouvement des Forces Démocratiques de Casamance) für die Unabhängigkeit der Region – einer der am längsten andauernden bewaffneten Konflikte Afrikas. Nach einem Waffenstillstand 2014 und einer Entwaffnungsaktion 2023 unterzeichnete die Regierung im Februar 2025 ein historisches Friedensabkommen mit einer der MFDC-Fraktionen.',
    },
  ],

  map: {
    center: { lat: 14.5, lon: -14.44 },
    zoom: 7,
    cities: [
      { name: 'Dakar', lat: 14.6937, lon: -17.4441, capital: true },
      { name: 'Saint-Louis', lat: 16.033, lon: -16.5 },
      { name: 'Touba', lat: 14.867, lon: -15.883 },
      { name: 'Thiès', lat: 14.783, lon: -16.917 },
      { name: 'Ziguinchor', lat: 12.56194, lon: -16.28389 },
      { name: 'Mbour', lat: 14.417, lon: -16.967 },
      { name: 'Kaolack', lat: 14.017, lon: -16.25 },
      { name: 'Rufisque', lat: 14.717, lon: -17.267 },
      { name: 'Saly', lat: 14.43833, lon: -17.0125 },
    ],
  },

  videos: [
    { title: 'Die Verwandlungskünstler von Dakar (360° – GEO Reportage)', url: 'https://www.youtube.com/watch?v=jjnY-79AN_s', type: 'documentary' },
    { title: 'The Incredible Stories of Dakar | Travel the Stunning Capital of Senegal', url: 'https://www.youtube.com/watch?v=7NwmEyFXKSA', type: 'documentary' },
    { title: "SENEGAL! Dakar & Beyond – A Cultural Travel Guide to West Africa's Land of Teranga", url: 'https://www.youtube.com/watch?v=CgT5Tt8uxNg', type: 'travel' },
    { title: '28 Minutes – Driving Senegal (West Africa): Dakar, Saint-Louis', url: 'https://www.youtube.com/watch?v=0tyxBvkpGqk', type: 'travel' },
  ],
  movies: [
    {
      title: 'Atlantique',
      year: 2019,
      note: 'Regie: Mati Diop. Gedreht in Thiaroye bei Dakar; gewann den Grand Prix in Cannes 2019.',
      url: '',
      image: { src: `${WM}/DakarPlateau.JPG`, alt: 'Blick auf Dakar von der Île de Gorée aus', credit: 'Ji-Elle, Wikimedia Commons' },
    },
    {
      title: 'Xala',
      year: 1975,
      note: 'Regie: Ousmane Sembène. In Dakar gedreht, Dialoge auf Französisch und Wolof – satirische Abrechnung mit der postkolonialen Elite.',
      url: '',
      image: { src: `${WM}/La_mosquée_de_la_divinité,_Dakar.jpg`, alt: 'Dakar, Schauplatz des Films', credit: 'Tbo47, Wikimedia Commons' },
    },
    {
      title: 'La Noire de… (Black Girl)',
      year: 1966,
      note: 'Regie: Ousmane Sembène. Beginnt in Dakar – gilt als erster international beachteter Spielfilm Subsahara-Afrikas.',
      url: '',
      image: { src: `${WM}/Dakar_-_Panorama_urbain.jpg`, alt: 'Stadtpanorama von Dakar', credit: 'Wikimedia Commons' },
    },
  ],

  dishes: [
    {
      id: 'thieboudienne',
      name: 'Thiéboudienne',
      shortDesc: 'Das Nationalgericht Senegals: gedünsteter Reis in würziger Tomatensauce mit Fisch und Gemüse.',
      image: { src: `${WM}/Thieboudienne.JPG`, alt: 'Thiéboudienne, senegalesisches Fisch-Reis-Gericht', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Fisch (z. B. Zackenbarsch)', 'Tomatenmark', 'Reis', 'Karotten', 'Kohl', 'Maniok', 'Aubergine', 'Knoblauch-Chili-Petersilien-Paste (Roff)'],
        steps: [
          'Fisch mit Roff füllen und anbraten.',
          'Tomatenmark in Öl anrösten, mit Wasser zu einer Sauce ablöschen.',
          'Gemüse darin garen, Fisch dazugeben.',
          'Gemüse und Fisch herausnehmen, Sud beiseitestellen.',
          'Reis im Sud garen, bis er die Sauce aufgesogen hat.',
          'Reis anrichten, Fisch und Gemüse darauf servieren.',
        ],
        image: { src: `${WM}/Thieboudienne.JPG`, alt: 'Angerichtetes Thiéboudienne', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'yassa',
      name: 'Yassa',
      shortDesc: 'Hähnchen mariniert in Zitrone und Senf, geschmort mit reichlich Zwiebeln – aus der Casamance.',
      image: { src: `${WM}/Poulet_Yassa_Chicken_rice_with_onion_sauce.jpg`, alt: 'Poulet Yassa mit Zwiebelsauce und Reis', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Hähnchenteile', '4-6 große Zwiebeln', 'Saft von 2-3 Zitronen', 'Senf', 'Knoblauch', 'Chili', 'Öl', 'Brühwürfel'],
        steps: [
          'Hähnchen mit Zitronensaft, Senf, Knoblauch und Chili mehrere Stunden marinieren.',
          'Hähnchen aus der Marinade nehmen und scharf anbraten.',
          'Zwiebeln in der Marinade und etwas Öl weich und goldbraun dünsten.',
          'Hähnchen zurück in die Zwiebelsauce geben, mit Brühe aufgießen.',
          'Zugedeckt 30-40 Minuten köcheln lassen, bis die Sauce eindickt.',
          'Mit weißem Reis servieren.',
        ],
        image: { src: `${WM}/Poulet_Yassa_Chicken_rice_with_onion_sauce.jpg`, alt: 'Fertiges Poulet Yassa', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'mafe',
      name: 'Mafé',
      shortDesc: 'Herzhafter Eintopf aus Rind- oder Lammfleisch in cremiger Erdnussbutter-Tomaten-Sauce.',
      image: { src: `${WM}/Mafé_Sénégalais.jpg`, alt: 'Mafé, senegalesischer Erdnusseintopf', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Rind- oder Lammfleisch', 'Erdnussbutter', 'Tomatenmark', 'Zwiebeln', 'Knoblauch', 'Süßkartoffel oder Kohl', 'Chili', 'Brühe'],
        steps: [
          'Fleischwürfel in Öl scharf anbraten, Zwiebeln und Knoblauch zugeben.',
          'Tomatenmark einrühren und kurz mitrösten.',
          'Erdnussbutter mit etwas Brühe glattrühren und zum Fleisch geben.',
          'Mit Brühe aufgießen, Gemüse zugeben.',
          'Zugedeckt 45-60 Minuten köcheln, bis das Fleisch zart ist.',
          'Mit Reis servieren.',
        ],
        image: { src: `${WM}/Mafé_Sénégalais.jpg`, alt: 'Angerichtetes Mafé', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'bissap',
      name: 'Bissap',
      shortDesc: 'Das Nationalgetränk Senegals – tiefroter, süß-säuerlicher Sirup aus Hibiskusblüten.',
      image: { src: `${WM}/Jus_de_bissap.jpg`, alt: 'Bissap, senegalesisches Hibiskus-Getränk', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Getrocknete Hibiskusblüten', 'Wasser', 'Zucker', 'Minzblätter (optional)', 'Vanille (optional)'],
        steps: [
          'Hibiskusblüten mit kochendem Wasser übergießen.',
          '15-20 Minuten ziehen lassen.',
          'Durch ein Sieb abseihen, Blüten ausdrücken.',
          'Mit Zucker süßen, Minze/Vanille zugeben.',
          'Vollständig abkühlen lassen und kaltstellen.',
          'Eisgekühlt servieren.',
        ],
        image: { src: `${WM}/Jus_de_bissap.jpg`, alt: 'Bissap im Glas', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'bouye',
      name: 'Bouye (Baobab-Saft)',
      shortDesc: 'Cremiges, erfrischendes Getränk aus dem Fruchtmark des Baobab-Baums, reich an Vitamin C.',
      image: { src: `${WM}/Baobab_juice_-_color.jpg`, alt: 'Bouye, Baobab-Fruchtsaft', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Getrocknetes Baobab-Fruchtmark', 'Wasser oder Milch', 'Zucker', 'Vanille (optional)'],
        steps: [
          'Baobab-Fruchtmark in Wasser oder Milch einweichen.',
          'Kräftig verrühren, bis sich das Mark auflöst.',
          'Durch ein feines Sieb passieren.',
          'Mit Zucker und optional Vanille süßen.',
          'Kaltstellen.',
          'Gut geschüttelt und eisgekühlt servieren.',
        ],
        image: { src: `${WM}/Baobab_juice_-_color.jpg`, alt: 'Bouye im Glas', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'thiakry',
      name: 'Thiakry',
      shortDesc: 'Süßes Dessert aus Hirsecouscous mit Joghurt, Rosinen und Muskatnuss – beliebt bei Festen.',
      image: { src: `${WM}/Gambia_Chakery_0001.jpg`, alt: 'Thiakry/Chakery, im gesamten Senegambia-Raum verbreitetes Dessert', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Feiner Couscous (Hirse oder Weizen)', 'Naturjoghurt', 'Gesüßte Kondensmilch', 'Rosinen', 'Muskatnuss', 'Vanillezucker'],
        steps: [
          'Couscous dämpfen/quellen lassen und auflockern.',
          'Joghurt mit Kondensmilch und Vanillezucker verrühren.',
          'Couscous unter die Joghurtmischung heben.',
          'Rosinen und eine Prise Muskatnuss unterrühren.',
          'Mindestens 1 Stunde kaltstellen.',
          'Gut gekühlt servieren.',
        ],
        image: { src: `${WM}/Gambia_Chakery_0001.jpg`, alt: 'Angerichtetes Thiakry', credit: 'Wikimedia Commons' },
      },
    },
  ],

  restaurantsHamburg: [
    {
      name: 'DAKAR Afrikanische Küche',
      address: 'Grindelallee 180, 20144 Hamburg',
      image: { src: `${WM}/Thieboudienne.JPG`, alt: 'Thiéboudienne, senegalesisches Fisch-Reis-Gericht', credit: 'Wikimedia Commons' },
    },
  ],

  destinations: [
    {
      name: 'Île de Gorée',
      desc: 'Kleine Insel vor Dakar, seit 1978 UNESCO-Welterbe – Zentrum des atlantischen Sklavenhandels vom 15. bis 19. Jahrhundert, heute Gedenkstätte.',
      image: { src: `${WM}/Ile-de-goree.jpg`, alt: 'Die Île de Gorée', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Saint-Louis',
      desc: 'Ehemalige Kolonialhauptstadt Französisch-Westafrikas, gegründet 1659, auf einer Insel im Senegalfluss – seit 2000 UNESCO-Weltkulturerbe.',
      image: { src: `${WM}/Pont_Faidherbe_Saint-Louis.jpg`, alt: 'Die Faidherbe-Brücke in Saint-Louis', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Lac Rose (Lac Retba)',
      desc: 'Hypersalziner See nordöstlich von Dakar, dessen Wasser durch Algen und hohen Salzgehalt pink schimmert – besonders intensiv von Januar bis März.',
      image: { src: `${WM}/RetbaLakeShore.jpg`, alt: 'Der pinke See Lac Retba', credit: 'Wikimedia Commons' },
    },
    {
      name: 'African Renaissance Monument',
      desc: 'Die mit 50 Metern höchste Statue Afrikas, 2010 zum 50. Jahrestag der Unabhängigkeit auf den Mamelles-Hügeln bei Dakar eingeweiht.',
      image: { src: `${WM}/Monument_renaissance.jpg`, alt: 'Das African Renaissance Monument bei Dakar', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Sine-Saloum-Delta',
      desc: 'Ausgedehntes Mangroven- und Inseldelta südöstlich von Dakar, UNESCO-Welterbe und Biosphärenreservat mit über 400 Vogelarten.',
      image: { src: `${WM}/Delta_du_Saloum.jpg`, alt: 'Das Sine-Saloum-Delta', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Casamance',
      desc: 'Grüne, tropische Region im Süden Senegals mit Wasserwegen, Fischerdörfern und Palmenwäldern – landschaftlich deutlich vom Norden verschieden.',
      image: { src: `${WM}/Casamance_landscape.jpg`, alt: 'Landschaft der Casamance', credit: 'Wikimedia Commons' },
    },
  ],

  flights: {
    fromCity: 'Hamburg',
    routes: [
      { airline: 'Brussels Airlines', via: 'via Brüssel', durationApprox: '≈10-12 Std. inkl. Umstieg', bookingNote: 'Ab Brüssel Direktflug nach Dakar, 7×/Woche', url: 'https://www.brusselsairlines.com' },
      { airline: 'Air France', via: 'via Paris', durationApprox: '≈11-13 Std. inkl. Umstieg', bookingNote: 'Häufige Verbindungen über Paris-Charles de Gaulle', url: 'https://www.airfrance.de' },
      { airline: 'Turkish Airlines', via: 'via Istanbul', durationApprox: '≈13-16 Std. inkl. Umstieg', bookingNote: 'Tägliche Verbindung über Istanbul', url: 'https://www.turkishairlines.com' },
      { airline: 'Royal Air Maroc', via: 'via Casablanca', durationApprox: '≈11-14 Std. inkl. Umstieg', bookingNote: 'Ab Casablanca 2×täglich direkt nach Dakar', url: 'https://www.royalairmaroc.com' },
    ],
  },

  famousPeople: {
    historical: [
      {
        name: 'Léopold Sédar Senghor',
        years: '1906-2001',
        desc: 'Erster Präsident Senegals (1960-1980), Dichter und Mitbegründer der Négritude-Bewegung – einer der einflussreichsten afrikanischen Intellektuellen des 20. Jahrhunderts.',
        image: { src: `${WM}/Léopold_Sédar_Senghor_1961-11-11.jpg`, alt: 'Léopold Sédar Senghor', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Cheikh Anta Diop',
        years: '1923-1986',
        desc: 'Historiker, Anthropologe und Physiker, bekannt für seine Forschung zur afrikanischen Geschichte – die Universität in Dakar trägt seinen Namen.',
        image: { src: `${WM}/Cheikh_Anta_Diop,_late_1940s.jpg`, alt: 'Cheikh Anta Diop', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Lat Dior',
        years: '≈1842-1886',
        desc: 'Letzter Damel (König) von Cayor, Symbolfigur des Widerstands gegen die französische Kolonialisierung und bis heute Nationalheld Senegals.',
        image: { src: `${WM}/Lat-dior.jpg`, alt: 'Historische Darstellung von Lat Dior', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Ousmane Sembène',
        years: '1923-2007',
        desc: 'Schriftsteller und Filmregisseur, gilt als „Vater des afrikanischen Kinos" – Filme wie „La Noire de…" und „Xala".',
        image: { src: `${WM}/Ousmane_Sembène_(1987)_by_Guenter_Prust.jpg`, alt: 'Ousmane Sembène', credit: 'Guenter Prust, Wikimedia Commons' },
      },
    ],
    contemporary: [
      {
        name: 'Youssou N’Dour',
        profession: 'Sänger',
        desc: 'International bekanntester senegalesischer Musiker, Pionier des Mbalax; war 2012-2013 Tourismus- und Kulturminister Senegals.',
        image: { src: `${WM}/YoussouNdour20090913.jpg`, alt: 'Youssou N’Dour', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Sadio Mané',
        profession: 'Fußballspieler',
        desc: 'Spielte u. a. für Liverpool und Bayern München; führte Senegal 2021 zum ersten Gewinn des Afrika-Cups.',
        image: { src: `${WM}/Sadio_Mané_Senegal.jpg`, alt: 'Sadio Mané', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Akon',
        profession: 'Sänger & Produzent',
        desc: 'Senegalesisch-US-amerikanischer R&B- und Hip-Hop-Künstler, ab dem 7. Lebensjahr teils in Senegal aufgewachsen.',
        image: { src: `${WM}/Akon.jpg`, alt: 'Akon', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Baaba Maal',
        profession: 'Sänger & Gitarrist',
        desc: 'Wichtiger Vertreter der Pulaar-Kultur und der senegalesischen Weltmusik-Szene, international zahlreich ausgezeichnet.',
        image: { src: `${WM}/Baaba_Maal_2.jpg`, alt: 'Baaba Maal', credit: 'Wikimedia Commons' },
      },
    ],
  },

  playlists: [
    {
      title: "This Is Youssou N'Dour",
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4ddHfV',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4ddHfV',
    },
    {
      title: 'This Is Baaba Maal',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2qvilW',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2qvilW',
    },
    {
      title: 'This Is Akon',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0gCG2c',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0gCG2c',
    },
  ],

  eventsHamburg: [
    {
      name: 'Afrikanischer Frühling',
      when: 'jährlich im Mai',
      location: 'Zinnschmelze, Hamburg-Barmbek',
      desc: 'Open-Air-Festival mit afrikanischem Markt, Musik und Tanz-Workshops, mitorganisiert vom Senegalesen Aliou Badji (Diamoral).',
      url: 'https://zinnschmelze.de/events/',
    },
  ],

  eventsCountry: [
    {
      name: "Dak'Art – Biennale de l'Art Africain Contemporain",
      when: 'alle 2 Jahre (2026: 19. November – 19. Dezember)',
      location: 'Dakar',
      desc: 'Die wichtigste zeitgenössische Kunstbiennale Afrikas – Ausstellungen, Talks und ein stadtweites Begleitprogramm machen Dakar für Wochen zur Kunstmetropole.',
      url: 'https://biennaledakar.org/',
    },
    {
      name: 'Festival International de Jazz de Saint-Louis',
      when: 'jährlich im Mai (2026: 13.–17. Mai)',
      location: 'Saint-Louis (UNESCO-Weltkulturerbe)',
      desc: 'Eines der bedeutendsten Jazzfestivals weltweit seit 1992 – abendliche Konzerte internationaler und westafrikanischer Künstler in historischer Altstadt-Kulisse.',
      url: 'https://www.saintlouisjazz.org/',
    },
    {
      name: 'Kaay Fecc – Festival International de Toutes les Danses',
      when: 'alle 2 Jahre (zuletzt bestätigt 26. Mai – 14. Juni 2025)',
      location: 'Dakar',
      desc: 'Tanzfestival mit traditionellen und zeitgenössischen Choreografien, Hip-Hop-Battles und Workshops – lebendiger Einblick in Dakars urbane Tanzszene.',
    },
  ],

  communitiesHamburg: [
    {
      name: 'Diamoral – Afrikanisches Tanz- und Trommelensemble',
      city: 'Hamburg',
      desc: 'Gegründet 1996 von Aliou Badji, einem ehemaligen Tänzer und Choreografen des Senegalesischen Nationalballetts aus der Casamance – der Name "Diamoral" stammt aus der Djola-Sprache Südsenegals und bedeutet "Verständigung". Das Ensemble vermittelt westafrikanische, insbesondere senegalesische Tanz- und Trommeltraditionen durch Workshops und Auftritte.',
      eventsNote:
        'Mitveranstalter des jährlichen Open-Air-Festivals "Afrikanischer Frühling" in der Zinnschmelze Hamburg-Barmbek (Markt, Musik, Tanz-Workshops).',
      email: 'aliou_badji@yahoo.de',
      phone: '040 29885605',
      url: 'http://www.diamoral.de/',
    },
  ],

  quiz: [
    {
      question: 'Was ist die Hauptstadt von Senegal?',
      options: ['Thiès', 'Dakar', 'Saint-Louis', 'Touba'],
      correctIndex: 1,
      explanation: 'Dakar ist die Hauptstadt und größte Stadt Senegals, gelegen auf der Halbinsel Cap-Vert.',
    },
    {
      question: 'Welches Gericht gilt als Nationalgericht Senegals?',
      options: ['Yassa', 'Mafé', 'Thiéboudienne', 'Couscous'],
      correctIndex: 2,
      explanation: 'Thiéboudienne (Ceebu Jën) – Reis mit Fisch und Gemüse – gilt als das Nationalgericht Senegals.',
    },
    {
      question: 'Welches Land ist fast vollständig von Senegal umschlossen?',
      options: ['Guinea-Bissau', 'Gambia', 'Mali', 'Mauretanien'],
      correctIndex: 1,
      explanation: 'Gambia erstreckt sich als schmaler Streifen entlang des Gambia-Flusses und ist auf drei Seiten von Senegal umgeben.',
    },
    {
      question: 'In welchem Jahr wurde Senegal von Frankreich unabhängig?',
      options: ['1956', '1960', '1962', '1975'],
      correctIndex: 1,
      explanation: 'Senegal erlangte am 4. April 1960 die Unabhängigkeit von Frankreich.',
    },
    {
      question: 'Welche Sprache spricht die Mehrheit der Bevölkerung im Alltag, obwohl Französisch Amtssprache ist?',
      options: ['Fula', 'Serer', 'Wolof', 'Mandinka'],
      correctIndex: 2,
      explanation: 'Rund 80% der Bevölkerung sprechen Wolof im Alltag, auch wenn nur etwa 40% ethnische Wolof sind.',
    },
    {
      question: 'Welche Farbe hat der berühmte Lac Rose bei Dakar?',
      options: ['Türkis', 'Pink', 'Tiefblau', 'Grün'],
      correctIndex: 1,
      explanation: 'Algen und ein sehr hoher Salzgehalt färben den See rosa – besonders intensiv von Januar bis März.',
    },
    {
      question: 'Wer war der erste Präsident Senegals?',
      options: ['Macky Sall', 'Abdoulaye Wade', 'Léopold Sédar Senghor', 'Bassirou Diomaye Faye'],
      correctIndex: 2,
      explanation: 'Léopold Sédar Senghor, auch bekannt als Dichter, war von 1960 bis 1980 erster Präsident Senegals.',
    },
    {
      question: 'Welche Insel war Zentrum des atlantischen Sklavenhandels und ist heute UNESCO-Welterbe?',
      options: ['Île de Gorée', 'Saly', 'Lac Rose', 'Casamance'],
      correctIndex: 0,
      explanation: 'Die Île de Gorée vor Dakar war vom 15. bis 19. Jahrhundert ein Zentrum des Sklavenhandels und ist seit 1978 UNESCO-Welterbe.',
    },
  ],
};

export default senegal;
