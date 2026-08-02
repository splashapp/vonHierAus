const WM = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const ethiopia = {
  id: 'ethiopia',
  name: 'Äthiopien',
  nameEn: 'Ethiopia',
  tagline: 'Wiege der Menschheit, Land der 13 Sonnenmonate',
  status: 'active',

  flagImage: { src: `${WM}/Flag_of_Ethiopia.svg`, alt: 'Flagge Äthiopiens', credit: 'Wikimedia Commons' },
  heroImage: {
    src: `${WM}/Bete_Giyorgis_03.jpg`,
    alt: 'Die kreuzförmige Felsenkirche Bete Giyorgis in Lalibela',
    credit: 'Bernard Gagnon, Wikimedia Commons',
  },
  heroSlides: [
    {
      src: `${WM}/Bete_Giyorgis_03.jpg`,
      alt: 'Die kreuzförmige Felsenkirche Bete Giyorgis in Lalibela',
      credit: 'Bernard Gagnon, Wikimedia Commons',
    },
    {
      src: `${WM}/Cliffs_of_the_Simien_Mountains.jpg`,
      alt: 'Schroffe Felswände der Simien Mountains',
      credit: 'Barrowbob, Wikimedia Commons',
      effect: 'clouds',
    },
    {
      src: `${WM}/Dallol,_Danakil_Depression.jpg`,
      alt: 'Die surreal-bunten Schwefelformationen von Dallol in der Danakil-Senke',
      credit: 'Barrowbob, Wikimedia Commons',
    },
    {
      src: `${WM}/Obelisk_of_Aksum_Remains6.jpg`,
      alt: 'Der antike Obelisk von Aksum',
      credit: 'Allamiro, Wikimedia Commons',
    },
  ],

  // Bewusst eine dritte, eigenständige Farbwelt: nicht die Flaggenfarben 1:1 übernommen (die
  // wären mit Senegals Grün-Gelb-Rot verwechselbar), sondern von markanten Landesmotiven
  // abgeleitet — Lalibelas rötlicher Vulkangestein, Kaffeezeremonie/orthodoxes Kirchengold,
  // und der blaue Kreis der Flagge (der einzige Blauton unter allen drei Ländern bisher).
  theme: {
    primary: '#A8412C', // Rotbraun/Terrakotta – Fels von Lalibela, Berbere-Gewürz
    secondary: '#D9A441', // warmes Ocker/Gold – Kaffee, orthodoxes Kirchengold
    accent: '#2B4570', // tiefes Indigo-Blau – der Kreis in der äthiopischen Flagge
    surface: '#F2E3C6', // gedeckter Pergament-/Kaffeeton, wärmer & dunkler als Marokko/Senegal
    fontHeading: "'Spectral', Georgia, serif",
    fontBody: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Spectral:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap',
  },

  facts: {
    capital: 'Addis Abeba',
    capitalImage: {
      src: `${WM}/Addis_Ababa_skyline.jpg`,
      alt: 'Skyline von Addis Abeba',
      credit: 'Simfan34, Wikimedia Commons',
    },
    capitalPopulation: '≈3,9 Mio.',
    population: '≈135,5 Mio.',
    government: 'Föderale parlamentarische Republik',
    officialLanguages: ['Amharisch'],
    currencyCode: 'ETB',
    currencyName: 'Äthiopischer Birr',
    eurExchangeRate: 183,
    area: '1.104.300 km²',
    areaComparison: 'etwa so groß wie Bolivien',
    timezone: 'Africa/Addis_Ababa',
    capitalCoords: { lat: 9.03583, lon: 38.7525 },
    neighbors: ['Eritrea', 'Dschibuti', 'Somalia', 'Kenia', 'Südsudan', 'Sudan'],
    // Äthiopische Zeitrechnung: der Tag beginnt traditionell bei Sonnenaufgang (≈ 6 Uhr
    // international) statt um Mitternacht — ein eigener 12-Stunden-Zyklus, verschoben um
    // offsetHours gegenüber der internationalen Uhrzeit. ClockTile zeigt das als dritten,
    // optionalen Block neben Hamburg/Addis Abeba (international).
    localTimeSystem: {
      label: 'Äthiopische Lokalzeit',
      offsetHours: 6,
      note: 'Die Uhr startet täglich neu bei 6:00 (≈ Sonnenaufgang) und 18:00 (≈ Sonnenuntergang) – jeweils von 1 bis 12.',
      calendar: {
        label: 'Äthiopischer Kalender',
        headline: '13 Monate',
        description:
          '12 × 30 Tage + ein 13. Kurzmonat (Pagumē, 5–6 Tage).',
      },
      travelTip:
        'Reisehinweis: Am Flughafen und bei Buchungen gilt immer die internationale Zeit. Taxi, Markt oder lokale Termine können in äthiopischer Zeit angegeben sein — am besten kurz nachfragen: „Ethiopian time or international time?"',
    },
  },

  // Amharisch ist sowohl Amts-/Arbeitssprache des Bundes als auch die tatsächliche
  // Verkehrssprache für Reisende – anders als z.B. bei Marokko fallen beide hier zusammen.
  phrasebook: {
    languageName: 'Amharisch',
    sourceNote:
      'Keine standardisierte lateinische Umschrift – Transliterationen schwanken je nach Quelle. Verben ändern sich zudem danach, ob die angesprochene Person männlich oder weiblich ist (informelles "du"), zusätzlich zu einer eigenen höflichen Form.',
    categories: [
      {
        title: 'Grundlagen',
        phrases: [
          { de: 'Hallo', local: 'ሰላም', phonetic: 'selam' },
          { de: 'Hallo (respektvoll)', local: 'ጤና ይስጥልኝ', phonetic: 'tena yistilign', note: 'wörtlich „Gesundheit sei dir gegeben"' },
          { de: 'Tschüss (zu einem Mann)', local: 'ደህና ሁን', phonetic: 'dehna hun' },
          { de: 'Tschüss (zu einer Frau)', local: 'ደህና ሁኚ', phonetic: 'dehna hugni' },
          { de: 'Danke', local: 'አመሰግናለሁ', phonetic: 'amesegenallo' },
          { de: 'Bitte (zu einem Mann)', local: 'እባክህ', phonetic: 'ebakih' },
          { de: 'Bitte (zu einer Frau)', local: 'እባክሽ', phonetic: 'ebakish' },
          { de: 'Ja', local: 'አዎ', phonetic: 'awo' },
          { de: 'Nein', local: 'አይደለም', phonetic: 'aydellem' },
        ],
      },
      {
        title: 'Unterwegs',
        phrases: [
          { de: 'Wie geht\'s? (zu einem Mann)', local: 'እንደምን ነህ?', phonetic: 'endemin neh' },
          { de: 'Wie geht\'s? (zu einer Frau)', local: 'እንደምን ነሽ?', phonetic: 'endemin nesh' },
          { de: 'Was kostet das?', local: 'ስንት ነው?', phonetic: 'sint new' },
          { de: 'Entschuldigung', local: 'ይቅርታ', phonetic: 'yiqirta', note: 'auch für „es tut mir leid"' },
          { de: 'Ich verstehe nicht', local: 'አልገባኝም', phonetic: 'algebagnem' },
          { de: 'Prost', local: 'ለጤናችን', phonetic: 'letenachen', note: 'wörtlich „auf unsere Gesundheit"' },
        ],
      },
    ],
  },

  history: [
    { year: '2026', event: 'Abiy Ahmeds Prosperity Party gewinnt erneut deutlich die Parlamentswahl, während in Tigray, Oromia und Amhara weiterhin Spannungen bestehen.' },
    { year: '2022', event: 'Das Abkommen von Pretoria beendet den zweijährigen Tigray-Krieg zwischen Bundesregierung und TPLF.' },
    { year: '2020', event: 'Ausbruch des Tigray-Konflikts, nachdem Premier Abiy Ahmed – ein Jahr zuvor Friedensnobelpreisträger – Truppen gegen die TPLF entsendet.' },
    { year: '1995', event: 'Neue Verfassung: Äthiopien wird als ethnisch-föderaler Bundesstaat neu konstituiert.' },
    { year: '1993', event: 'Unabhängigkeit Eritreas nach Referendum – Ende einer gemeinsamen Geschichte seit 1952. Seitdem getrennte Staaten mit gemeinsamer Küche: Injera, Berbere und Wat sind in beiden Ländern Grundlage der Alltagsküche.' },
    { year: '1991', event: 'Die EPRDF stürzt das kommunistische Derg-Regime; Diktator Mengistu Haile Mariam flieht ins Exil.' },
    { year: '1974', event: 'Die Militärjunta „Derg" stürzt Kaiser Haile Selassie I. und beendet die jahrhundertealte Monarchie.' },
    { year: '1896', event: 'Schlacht von Adwa: Äthiopien besiegt die italienische Invasionsarmee und bewahrt als einziges afrikanisches Land seine Unabhängigkeit während der Kolonialzeit.' },
    { year: '100–940 n. Chr.', event: 'Das Aksumitische Reich blüht als eine der bedeutendsten Handelsmächte der Antike; König Ezana tritt im 4. Jh. zum Christentum über.' },
  ],

  map: {
    center: { lat: 8.5, lon: 39.5 },
    zoom: 6,
    cities: [
      { name: 'Addis Abeba', lat: 9.03583, lon: 38.7525, capital: true },
      { name: 'Lalibela', lat: 12.03167, lon: 39.04111 },
      { name: 'Gondar', lat: 12.6075, lon: 37.45917 },
      { name: 'Axum', lat: 14.12083, lon: 38.72778 },
      { name: 'Bahir Dar', lat: 11.6, lon: 37.383 },
      { name: 'Harar', lat: 9.31111, lon: 42.12778 },
      { name: 'Mekele', lat: 13.49694, lon: 39.47694 },
      { name: 'Dire Dawa', lat: 9.6, lon: 41.867 },
      { name: 'Arba Minch', lat: 6.033, lon: 37.55 },
    ],
  },

  videos: [
    { title: 'Ethiopia 4K Travel Documentary | Ancient Wonders & Wild Landscapes', url: 'https://www.youtube.com/watch?v=Xty7v5dXIyM', type: 'travel' },
    { title: 'Ethiopia – Lalibela & the Simien Mountains', url: 'https://www.youtube.com/watch?v=6q5jl904Oww', type: 'travel' },
    { title: 'Aksum', url: 'https://www.youtube.com/watch?v=S3G5ZklLkm0', type: 'documentary' },
  ],
  movies: [
    {
      title: 'Difret',
      year: 2014,
      note: 'Äthiopisches Justizdrama mit äthiopischer Besetzung, gedreht in Addis Abeba; Angelina Jolie war Executive Producer. Basiert lose auf dem realen Fall der Anwältin Meaza Ashenafi.',
      url: 'https://www.imdb.com/title/tt2870648/',
      image: {
        src: `${WM}/Addis_Ababa_skyline.jpg`,
        alt: 'Addis Abeba, Schauplatz von „Difret"',
        credit: 'Simfan34, Wikimedia Commons',
      },
    },
  ],

  // Überschreibt den generischen Gerichte-Teaser aus CountryPage.jsx — hier bewusst mit einem
  // ehrlichen Hinweis zur äthiopisch-eritreischen Küchen-Überschneidung ergänzt (siehe unten).
  dishesTeaser:
    'Die kulinarischen Highlights des Landes – zum Nachkochen. Äthiopisch und eritreisch werden in Restaurants und Rezepten oft zusammen geführt – die Küchen überschneiden sich stark (Injera, Berbere-Gewürze), weil Eritrea bis 1993 Teil Äthiopiens war. Ein ehrlicher Hinweis: Wer „äthiopisch essen" sucht, landet deshalb oft bei eritreischen Betreiber:innen.',

  dishes: [
    {
      id: 'injera',
      name: 'Injera',
      shortDesc: 'Poröses Sauerteig-Fladenbrot aus Teff-Mehl – Teller, Besteck und Tischdecke in einem.',
      image: { src: `${WM}/Injera_with_eight_kinds_of_stew.jpg`, alt: 'Injera mit verschiedenen Beilagen', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['2 Tassen Teff-Mehl (braun oder ivory)', '3 Tassen destilliertes Wasser', 'optional ¼ TL Trockenhefe (beschleunigt Fermentation)'],
        steps: [
          'Mehl und Wasser verrühren, locker abdecken, 4-5 Tage bei Raumtemperatur fermentieren lassen, bis es sprudelt.',
          'Obere flüssige Schicht abgießen, restlichen Teig verrühren.',
          '1 Tasse Wasser aufkochen, ½ Tasse fermentierten Teig einrühren bis angedickt, zurück in den Grundteig mischen.',
          'Mit ca. ⅔ Tasse Wasser auf crêpeartige Konsistenz bringen.',
          'In beschichteter Pfanne bei mittlerer Hitze dünn ausgießen, Blasen bilden lassen, mit Deckel wenige Minuten dämpfen (nicht wenden).',
        ],
        image: { src: `${WM}/Injera_with_eight_kinds_of_stew.jpg`, alt: 'Frisch zubereitetes Injera', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'doro-wat',
      name: 'Doro Wat',
      shortDesc: 'Äthiopiens Nationalgericht: feurig-würziger Hühnereintopf mit Berbere und mitgekochten Eiern.',
      image: { src: `${WM}/Injera_and_doro_wat.jpg`, alt: 'Doro Wat auf Injera', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: [
          '1,3 kg Hühnerschenkel',
          '2 EL Zitronensaft',
          '2 EL Niter Kibbeh (Gewürzbutter) + 2 EL zusätzlich',
          '2 EL Olivenöl',
          '3 Tassen gehackte Zwiebeln',
          '3 EL Butter',
          '1 EL Knoblauch, 1 EL Ingwer',
          '¼ Tasse Berbere',
          '1½ TL Salz',
          '½ Tasse Tej (äthiopischer Honigwein, ersatzweise Weißwein + 1 TL Honig)',
          '1 Tasse Hühnerbrühe',
          '4 hartgekochte Eier',
        ],
        steps: [
          'Huhn 30+ Minuten in Zitronensaft marinieren.',
          'Niter Kibbeh + Öl erhitzen, Zwiebeln zugedeckt 45 Minuten bei niedriger Hitze schmoren.',
          'Knoblauch, Ingwer und 1 EL Butter zugeben, 20 Minuten weiterschmoren.',
          'Berbere und 2 EL Butter einrühren, zugedeckt 30 Minuten köcheln.',
          'Huhn, Brühe, Salz und Tej zugeben, aufkochen, zugedeckt 45 Minuten köcheln.',
          'Eier zugeben, 15 Minuten mitziehen lassen, abschmecken und mit Injera servieren.',
        ],
        image: { src: `${WM}/Injera_and_doro_wat.jpg`, alt: 'Doro Wat mit hartgekochtem Ei', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'kitfo',
      name: 'Kitfo',
      shortDesc: 'Fein gehacktes Rindertatar mit warmer Gewürzbutter – traditionell roh, oft auch leicht angewärmt serviert.',
      image: { src: `${WM}/Ethiopian_Kitfo.JPG`, alt: 'Kitfo, äthiopisches Rindertatar', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: [
          '700 g Rinderoberschale',
          '1 EL Reshampatti-Pfeffer',
          '1 EL Royal Berbere',
          'Salz, frische Jalapeño',
          '12 Basilikumblätter',
          'Salatblätter zum Servieren',
          'geklärte Butter (Niter Kibbeh), Knoblauch, Frühlingszwiebel, Chili',
        ],
        steps: [
          'Geklärte Butter mit grob gemahlenen Gewürzen, Knoblauch und Frühlingszwiebel bei niedriger Hitze erwärmen, 10 Minuten ziehen lassen, durch ein Sieb passieren.',
          'Rindfleisch in Würfel schneiden, mit dem Messer hacken oder im Food Processor kurz pulsieren.',
          'Chili und Gewürze im Mörser fein mahlen, in die leicht erwärmte Butter geben, mit Fleisch und Salz vermengen.',
          'Nach Wunsch roh servieren (tire kitfo) oder leicht erwärmen zu leb leb (blutig).',
          'Mit Jalapeño und Basilikum garnieren, mit Salatblättern servieren.',
        ],
        image: { src: `${WM}/Ethiopian_Kitfo.JPG`, alt: 'Kitfo, angerichtet', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'shiro',
      name: 'Shiro Wat',
      shortDesc: 'Cremiger, veganer Eintopf aus Kichererbsenmehl mit Berbere – einer der beliebtesten Alltagsklassiker.',
      image: { src: `${WM}/Shiro_wet.jpg`, alt: 'Shiro Wat, cremiger Kichererbsen-Eintopf', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: [
          '1 rote Zwiebel, fein gewürfelt',
          '4 EL Niter Kibbeh',
          '6 Knoblauchzehen',
          '2 Tomaten, gewürfelt',
          '½ Tasse Kichererbsenmehl',
          '2 EL Berbere',
          '1 TL Paprikapulver (optional)',
          '2 Tassen heißes Wasser',
          'Salz, 2 grüne Chilis (optional)',
        ],
        steps: [
          'Zwiebeln trocken mit Salz anbraten, löffelweise Wasser zugeben, bis sie bräunen.',
          '2 EL Niter Kibbeh einrühren, bis die Zwiebeln weich und dunkel gebräunt sind.',
          'Knoblauch zugeben, kurz mitbraten, dann Tomaten zugeben und weich köcheln lassen.',
          'Kichererbsenmehl einrühren, bis keine trockenen Klümpchen mehr da sind.',
          'Berbere und Paprika zugeben, heißes Wasser einrühren, aufkochen.',
          'Zugedeckt bei mittlerer Hitze 10-15 Minuten köcheln, bis eingedickt; mit Chili garnieren.',
        ],
        image: { src: `${WM}/Shiro_wet.jpg`, alt: 'Shiro Wat, serviert', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'tibs',
      name: 'Tibs',
      shortDesc: 'Scharf angebratene Rind- oder Lammwürfel mit Zwiebeln, Chili und Rosmarin – ein schnelles Pfannengericht.',
      image: { src: `${WM}/Person_Enjoys_Tibs.JPG`, alt: 'Tibs, angebratenes Rindfleisch mit Gemüse', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: [
          '700 g Rindfleisch, gewürfelt',
          '2 EL Pflanzenöl, Salz/Pfeffer',
          '1 EL geriebener Ingwer, 3 Knoblauchzehen',
          '1 rote Zwiebel, in Streifen',
          '3 EL Berbere',
          '3 Tomaten, gehackt',
          '3 Jalapeños, gehackt',
          '⅓ Tasse Niter Kibbeh',
          '1 TL getrockneter Rosmarin',
        ],
        steps: [
          'Fleisch von Fett befreien, würzen, bei starker Hitze rundum anbraten.',
          'Hitze reduzieren, Ingwer und Knoblauch zugeben, kurz anschwitzen.',
          'Zwiebeln und 2 EL Berbere zugeben, mitbraten.',
          'Tomaten zugeben, 7-10 Minuten köcheln, bis sich eine dicke Sauce bildet.',
          'Jalapeños zugeben, abschmecken.',
          'Niter Kibbeh, restliches Berbere und Rosmarin einrühren, köcheln bis das Fleisch zart ist. Mit Injera servieren.',
        ],
        image: { src: `${WM}/Person_Enjoys_Tibs.JPG`, alt: 'Tibs beim Servieren', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'misir-wat',
      name: 'Misir Wat',
      shortDesc: 'Rein pflanzlicher, würziger roter Linsen-Eintopf mit Berbere – ein beliebtes fastentaugliches Gericht.',
      image: { src: `${WM}/Misir_Wat_in_Pot.jpg`, alt: 'Misir Wat, roter Linsen-Eintopf', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: [
          '4 EL Niter Kibbeh (für vegane Variante: Pflanzenöl)',
          '1 große Zwiebel, gewürfelt',
          '3 Knoblauchzehen',
          '1 Tomate, gehackt',
          '3 EL Tomatenmark',
          '2 EL Berbere',
          '1 Tasse rote Linsen',
          '2½ Tassen Gemüsebrühe',
          '1 TL Salz',
        ],
        steps: [
          '3 EL Fett erhitzen, Zwiebeln 8-10 Minuten goldbraun anbraten.',
          'Knoblauch, Tomaten, Tomatenmark und 1 EL Berbere zugeben, 5-7 Minuten köcheln.',
          'Linsen, Brühe und Salz zugeben, aufkochen, zugedeckt 40 Minuten bei niedriger Hitze köcheln, bis weich.',
          'Restliches Fett und Berbere einrühren, kurz weiterköcheln, abschmecken. Mit Injera servieren.',
        ],
        image: { src: `${WM}/Misir_Wat_in_Pot.jpg`, alt: 'Misir Wat im Topf', credit: 'Wikimedia Commons' },
      },
    },
  ],

  restaurantsHamburg: [
    {
      name: 'Restaurant ETHIO',
      address: 'Rothestraße 38, 22765 Hamburg',
      url: 'https://www.ethiorestaurant.de/',
      image: { src: `${WM}/Injera_with_eight_kinds_of_stew.jpg`, alt: 'Äthiopische Küche mit Injera', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Ade Habesha',
      address: 'Ferdinandstraße 36, 20095 Hamburg',
      url: 'https://www.adehabesha.de/',
      image: { src: `${WM}/Injera_and_doro_wat.jpg`, alt: 'Äthiopisch-eritreische Küche', credit: 'Wikimedia Commons' },
    },
    {
      name: "Elsa's Restaurant & Bar",
      address: 'Bahrenfelder Steindamm 99, 22761 Hamburg',
      url: 'https://www.elsas-restaurantundbar.com/',
      image: { src: `${WM}/Shiro_wet.jpg`, alt: 'Äthiopische Küche, u.a. vegane Gerichte', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Karls Café & Weine',
      address: 'Keplerstraße 17a, 22763 Hamburg-Ottensen',
      url: 'https://www.karlscafeweine.de/',
      image: { src: `${WM}/Ethiopian_Coffee_Ceremony_(1).jpg`, alt: 'Äthiopische Kaffeezeremonie', credit: 'Wikimedia Commons' },
      menuHighlights: [
        { name: 'Teff-Injera mit Doro Wot', price: 'auf Anfrage', desc: 'Klassisches Injera mit würzigem Hühnereintopf.' },
        { name: 'Kaffeezeremonie mit Fendisha', price: 'auf Anfrage', desc: 'Äthiopisch-eritreische Kaffeezeremonie mit geröstetem Popcorn.' },
      ],
    },
  ],

  destinations: [
    {
      name: 'Lalibela',
      desc: 'Elf monolithische, im 12./13. Jahrhundert direkt aus dem Fels gehauene Kirchen – eines der eindrucksvollsten Weltkulturerben Afrikas.',
      image: { src: `${WM}/Bete_Giyorgis_01.jpg`, alt: 'Bete Giyorgis in Lalibela von oben', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Simien Mountains National Park',
      desc: 'Zerklüftete Hochgebirgslandschaft mit Steilabbrüchen von über 1000 Metern – Heimat von Gelada-Pavianen und Äthiopischen Wölfen, UNESCO-Welterbe.',
      image: { src: `${WM}/Simien_Mountains_National_Park_in_Ethiopia.jpg`, alt: 'Landschaft der Simien Mountains', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Danakil-Senke',
      desc: 'Einer der heißesten und unwirtlichsten Orte der Erde – bizarre Schwefelformationen, Lavaseen und Salzebenen weit unter dem Meeresspiegel.',
      image: { src: `${WM}/ET_Afar_asv2018-01_img36_Dallol.jpg`, alt: 'Farbenfrohe Schwefellandschaft der Danakil-Senke', credit: 'A.Savin, Wikimedia Commons' },
    },
    {
      name: 'Aksum',
      desc: 'Einst Zentrum des mächtigen Aksumitischen Reichs – gewaltige, jahrhundertealte Obelisken und die Kirche, die der Überlieferung nach die Bundeslade beherbergt.',
      image: { src: `${WM}/Stela_in_Main_Stelae_Field_-_Axum_(Aksum)_-_Ethiopia_-_01_(8701108913).jpg`, alt: 'Obelisken im Stelenfeld von Aksum', credit: 'Adam Jones, Wikimedia Commons' },
    },
    {
      name: 'Gondar',
      desc: 'Die „Camelot Afrikas": Fasil Ghebbi, eine Burganlage mehrerer äthiopischer Kaiser des 17. Jahrhunderts, UNESCO-Weltkulturerbe.',
      image: { src: `${WM}/ET_Gondar_asv2018-02_img18_Fasil_Ghebbi.jpg`, alt: 'Burganlage Fasil Ghebbi in Gondar', credit: 'A.Savin, Wikimedia Commons' },
    },
    {
      name: 'Nationalmuseum Äthiopiens',
      desc: 'In Addis Abeba zu Hause: die Überreste von „Lucy" (Dinkinesh), dem 3,2 Millionen Jahre alten Australopithecus-afarensis-Fossil, das die Menschheitsgeschichte neu schrieb.',
      image: { src: `${WM}/Restos_de_Lucy_(Australopithecus_afarensis),_museo_nacional_de_Etiop%C3%ADa,_Ad%C3%ADs_Abeba,_Etiop%C3%ADa,_2024-01-19,_DD_23.jpg`, alt: 'Nachbildung von Lucy im Nationalmuseum Äthiopiens', credit: 'Wikimedia Commons' },
    },
  ],

  flights: {
    fromCity: 'Hamburg',
    routes: [
      {
        airline: 'Lufthansa + Ethiopian Airlines',
        via: 'Frankfurt (FRA)',
        durationApprox: '≈9-10 Std. gesamt (Nonstop Frankfurt–Addis Abeba ≈6 Std. 50 Min.)',
        bookingNote: 'Kein Direktflug ab Hamburg. Realistische Verbindung: Hamburg–Frankfurt (mehrmals täglich), dann Ethiopian Airlines nonstop nach Addis Abeba (Airbus A350).',
        url: 'https://www.ethiopianairlines.com/en-de/flights-from-frankfurt-to-addis-ababa',
      },
      {
        airline: 'Ethiopian Airlines',
        via: 'München (MUC)',
        durationApprox: '≈9-10 Std. gesamt (inkl. Umstieg)',
        bookingNote: 'Alternative Verbindung über München, ebenfalls nonstop mit Ethiopian Airlines weiter nach Addis Abeba.',
        url: 'https://www.ethiopianairlines.com/en-de/flights-from-munich-to-addis-ababa',
      },
    ],
  },

  famousPeople: {
    historical: [
      {
        name: 'Haile Selassie I.',
        years: '1892–1975',
        desc: 'Kaiser von Äthiopien 1930–1974, zentrale Figur der äthiopischen Modernisierung und Symbolfigur der Rastafari-Bewegung.',
        image: { src: `${WM}/Haile_Selassie_I_Coronation_Portrait.jpg`, alt: 'Krönungsporträt Haile Selassies I.', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Menelik II.',
        years: '1844–1913',
        desc: 'Kaiser 1889–1913, sicherte in der Schlacht von Adwa (1896) die Unabhängigkeit Äthiopiens und gründete Addis Abeba als Hauptstadt.',
        image: { src: `${WM}/Portrait_of_Menelik_II.jpg`, alt: 'Porträt Menelik II.', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Abebe Bikila',
        years: '1932–1973',
        desc: 'Marathonläufer, gewann 1960 in Rom barfuß Olympiagold als erster schwarzafrikanischer Olympiasieger und verteidigte den Titel 1964 in Tokio.',
        image: { src: `${WM}/Abebe_Bikila_1968c.jpg`, alt: 'Abebe Bikila', credit: 'Wikimedia Commons' },
      },
    ],
    contemporary: [
      {
        name: 'Abiy Ahmed',
        profession: 'Premierminister',
        desc: 'Seit 2018 Ministerpräsident Äthiopiens, Friedensnobelpreisträger 2019 für die Beilegung des Grenzkonflikts mit Eritrea.',
        image: { src: `${WM}/Prime_Minister_of_Ethiopia_Abiy_Ahmed_Ali_(cropped).jpg`, alt: 'Abiy Ahmed, Premierminister Äthiopiens', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Haile Gebrselassie',
        profession: 'Langstreckenläufer, Unternehmer',
        desc: 'Zweifacher Olympiasieger über 10.000 m und ehemaliger Marathon-Weltrekordhalter, heute Unternehmer.',
        image: { src: `${WM}/Haile_Gebrselassie_en_2009.jpg`, alt: 'Haile Gebrselassie', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Kenenisa Bekele',
        profession: 'Langstreckenläufer',
        desc: 'Dreifacher Olympiasieger und einer der erfolgreichsten Langstreckenläufer der Geschichte.',
        image: { src: `${WM}/Kenenisa_Bekele_-_Smiling.jpg`, alt: 'Kenenisa Bekele', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Meaza Ashenafi',
        profession: 'Juristin',
        desc: 'Frauenrechtsaktivistin und Gründerin der Ethiopian Women Lawyers Association, 2018–2023 erste Präsidentin des äthiopischen Supreme Court.',
        image: { src: `${WM}/Meaza_Ashenafi_close-up_(cropped).jpg`, alt: 'Meaza Ashenafi', credit: 'Wikimedia Commons' },
      },
    ],
  },

  playlists: [
    { title: 'This Is Mulatu Astatke', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4yXetn', embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4yXetn' },
    { title: 'This Is Teddy Afro', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO00zWXo', embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO00zWXo' },
    { title: 'This Is Aster Aweke', spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3MaSV9', embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3MaSV9' },
  ],

  eventsHamburg: [],

  eventsCountry: [
    {
      name: 'Timkat',
      when: 'jährlich am 19. Januar (20. in Schaltjahren)',
      location: 'landesweit, besonders eindrucksvoll in Gondar',
      desc: 'Epiphanias-Fest der äthiopisch-orthodoxen Kirche mit prozessionsartigen Feiern am Wasser – seit 2019 UNESCO-Kulturerbe.',
    },
    {
      name: 'Meskel',
      when: 'jährlich am 27. September (28. in Schaltjahren)',
      location: 'Addis Abeba (Meskel Square)',
      desc: 'Fest der Kreuzauffindung mit großem Freudenfeuer (Demera) – seit 2013 UNESCO-Kulturerbe.',
    },
    {
      name: 'Enkutatash',
      when: 'jährlich am 11. September (12. in Schaltjahren)',
      location: 'landesweit',
      desc: 'Äthiopisches Neujahr (nach dem eigenen, 13-monatigen Kalender) mit Familienfesten und Zeremonien.',
    },
    {
      name: 'Great Ethiopian Run',
      when: 'jährlich im November',
      location: 'Addis Abeba',
      desc: 'Größtes Straßenrennen Afrikas über 10 km, mit zehntausenden Teilnehmenden – auch als Zuschauer:in ein Erlebnis.',
    },
    {
      name: 'Irreecha',
      when: 'jährlich im Oktober',
      location: 'Bishoftu (Hora-Seen)',
      desc: 'Erntedankfest des Oromo-Volkes an heiligen Seen, zieht hunderttausende Teilnehmende an.',
    },
  ],

  communitiesHamburg: [
    {
      name: 'Äthiopisch-Orthodoxe Tewahedo Kirchengemeinde „Hl. Kidanemehret" Hamburg',
      city: 'Hamburg',
      desc: 'Gemeinde der äthiopisch-orthodoxen Tewahedo-Kirche – zentraler Treffpunkt der äthiopischen Community in Hamburg für Gottesdienste und kirchliche Feste.',
      url: 'https://aethiopisch-orthodoxe-kirche-deutschland.de/Hamburg.html',
    },
  ],

  quiz: [
    {
      question: 'Wie heißt die Hauptstadt Äthiopiens?',
      options: ['Addis Abeba', 'Asmara', 'Nairobi', 'Khartum'],
      correctIndex: 0,
      explanation: 'Addis Abeba ("neue Blume") wurde 1886 von Kaiser Menelik II. gegründet und ist heute Sitz der Afrikanischen Union.',
    },
    {
      question: 'Welche Sprache dient in Äthiopien sowohl als Amts- als auch als Verkehrssprache?',
      options: ['Oromo', 'Tigrinya', 'Amharisch', 'Somali'],
      correctIndex: 2,
      explanation: 'Amharisch ist die Arbeitssprache des Bundes und zugleich die im Alltag am weitesten verbreitete Verkehrssprache.',
    },
    {
      question: 'In welcher Schlacht sicherte sich Äthiopien 1896 als einziges afrikanisches Land seine Unabhängigkeit gegen eine europäische Kolonialmacht?',
      options: ['Schlacht von Adwa (gegen Italien)', 'Schlacht von Omdurman', 'Schlacht von Isandlwana', 'Schlacht von Rorke\'s Drift'],
      correctIndex: 0,
      explanation: 'Die Schlacht von Adwa 1896 gilt bis heute als Symbol antikolonialen Widerstands.',
    },
    {
      question: 'Wofür ist Abebe Bikila berühmt geworden?',
      options: [
        'Er gewann 1960 in Rom barfuß den olympischen Marathon',
        'Er war der erste äthiopische Premierminister',
        'Er entdeckte das Fossil "Lucy"',
        'Er gründete Addis Abeba',
      ],
      correctIndex: 0,
      explanation: 'Bikila war 1960 der erste schwarzafrikanische Olympiasieger überhaupt – und lief barfuß.',
    },
    {
      question: 'Was macht Lalibela weltberühmt?',
      options: [
        'Elf direkt aus dem Fels gehauene Kirchen',
        'Der höchste Wasserfall Afrikas',
        'Ein antiker Leuchtturm',
        'Die größte Moschee Ostafrikas',
      ],
      correctIndex: 0,
      explanation: 'Die monolithischen Felsenkirchen von Lalibela stammen aus dem 12./13. Jahrhundert und sind UNESCO-Weltkulturerbe.',
    },
    {
      question: 'Welches Gewürz prägt viele äthiopische Gerichte wie Doro Wat entscheidend?',
      options: ['Berbere', 'Ras el-Hanout', 'Za\'atar', 'Baharat'],
      correctIndex: 0,
      explanation: 'Berbere ist eine scharfe Gewürzmischung aus u.a. Chili, Knoblauch und Ingwer, die vielen äthiopischen Eintöpfen ihre charakteristische Schärfe gibt.',
    },
    {
      question: 'Wie viele Nachbarländer grenzen an das Binnenland Äthiopien?',
      options: ['4', '5', '6', '8'],
      correctIndex: 2,
      explanation: 'Äthiopien grenzt an Eritrea, Dschibuti, Somalia, Kenia, Südsudan und Sudan – und ist das bevölkerungsreichste Binnenland der Welt.',
    },
    {
      question: 'Wofür ist die Danakil-Senke bekannt?',
      options: [
        'Einer der heißesten und unwirtlichsten Orte der Erde mit bunten Schwefellandschaften',
        'Der schneereichste Ort Afrikas',
        'Der größte See Äthiopiens',
        'Der Ausgangspunkt des Blauen Nils',
      ],
      correctIndex: 0,
      explanation: 'Die Danakil-Senke liegt weit unter dem Meeresspiegel und zählt zu den lebensfeindlichsten, zugleich spektakulärsten Landschaften der Erde.',
    },
    {
      question: 'Wann beginnt der Tag nach der traditionellen äthiopischen Lokalzeit?',
      options: [
        'Bei Sonnenaufgang, ≈ 6 Uhr international',
        'Um Mitternacht, wie im internationalen 24h-Format',
        'Bei Sonnenuntergang, ≈ 18 Uhr international',
        'Um 12 Uhr mittags international',
      ],
      correctIndex: 0,
      explanation: 'Die äthiopische Uhr startet täglich neu bei 6:00 (≈ Sonnenaufgang) und 18:00 (≈ Sonnenuntergang) – jeweils von 1 bis 12, statt wie international um Mitternacht.',
    },
    {
      question: 'Um wie viele Stunden ist die äthiopische Lokalzeit gegenüber der internationalen Uhrzeit verschoben?',
      options: ['6 Stunden', '3 Stunden', '9 Stunden', '12 Stunden'],
      correctIndex: 0,
      explanation: 'Die Verschiebung beträgt 6 Stunden – ein eigener 12-Stunden-Zyklus statt des internationalen 24h-Formats.',
    },
    {
      question: 'Wie viele Monate hat der äthiopische Kalender?',
      options: ['13', '12', '10', '14'],
      correctIndex: 0,
      explanation: '12 Monate zu je 30 Tagen plus ein 13. Kurzmonat namens Pagumē mit 5–6 Tagen.',
    },
    {
      question: 'Wie heißt der kurze 13. Monat des äthiopischen Kalenders?',
      options: ['Pagumē', 'Meskerem', 'Timkat', 'Enkutatash'],
      correctIndex: 0,
      explanation: 'Pagumē dauert nur 5 Tage (6 in Schaltjahren) und gleicht das Sonnenjahr aus.',
    },
  ],

  voices: [],
};

export default ethiopia;
