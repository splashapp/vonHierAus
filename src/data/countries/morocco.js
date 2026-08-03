const WM = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const morocco = {
  id: 'morocco',
  name: 'Marokko',
  nameEn: 'Morocco',
  tagline: 'Zwischen Wüste, Atlas und Atlantik',
  status: 'active',

  flagImage: { src: `${WM}/Flag_of_Morocco.svg`, alt: 'Flagge von Marokko', credit: 'Wikimedia Commons' },
  heroImage: {
    src: `${WM}/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG`,
    alt: 'Der Jemaa el-Fnaa in Marrakesch bei Abenddämmerung',
    credit: 'Luc Viatour, Wikimedia Commons',
  },
  // Rotierende Hero-Diashow (löst heroImage ab, wenn gesetzt). "effect" steuert ein
  // zusätzliches animiertes Overlay (ziehende Wolken bzw. funkelnde/wandernde Sterne),
  // gelayert über die normale Ken-Burns-Bewegung des Fotos selbst.
  heroSlides: [
    {
      src: `${WM}/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG`,
      alt: 'Der Jemaa el-Fnaa in Marrakesch bei Abenddämmerung',
      credit: 'Luc Viatour, Wikimedia Commons',
    },
    {
      src: `${WM}/Merzouga_desert_Erg_Chebbi.jpg`,
      alt: 'Sanddünen von Erg Chebbi bei Merzouga mit weitem Himmel',
      credit: 'Wikimedia Commons',
      effect: 'clouds',
    },
    {
      src: `${WM}/Aerial_photograph,_Agadir.jpg`,
      alt: 'Luftaufnahme von Agadir: Atlas-Ausläufer, Küstenebene und Atlantik in einem Bild',
      credit: 'acediscovery, Wikimedia Commons',
    },
    {
      src: `${WM}/Chefchaouen_-_blue_city_in_Morocco.jpg`,
      alt: 'Blau getünchte Gassen und Häuser in Chefchaouen',
      credit: 'Wikimedia Commons',
    },
    {
      src: `${WM}/Sahara_Night_Sky_(229876491).jpeg`,
      alt: 'Sternenhimmel über den Dünen von Erg Chegaga in der Sahara',
      credit: 'Dominik Angstwurm, Wikimedia Commons (CC BY-SA 3.0)',
      effect: 'stars',
    },
  ],

  theme: {
    primary: '#c1272d',
    secondary: '#046a38',
    accent: '#d4a017',
    surface: '#fff9f1',
  },

  facts: {
    capital: 'Rabat',
    capitalImage: {
      src: `${WM}/Kasbah_des_Oudaias_Rabat_2.jpg`,
      alt: 'Kasbah des Oudayas in Rabat',
      credit: 'Steven Lek, Wikimedia Commons',
    },
    capitalPopulation: '≈516.000',
    population: '≈36,8 Mio.',
    government: 'Parlamentarische Verfassungsmonarchie',
    officialLanguages: ['Arabisch', 'Tamazight (Berberisch)'],
    currencyCode: 'MAD',
    currencyName: 'Marokkanischer Dirham',
    eurExchangeRate: 10.7,
    area: '446.550 km²',
    areaComparison: 'etwa so groß wie Schweden',
    timezone: 'Africa/Casablanca',
    capitalCoords: { lat: 34.0209, lon: -6.8416 },
    neighbors: ['Algerien', 'Westsahara', 'Spanien'],
  },

  // Marokkanisches Arabisch (Darija) — die im Alltag gesprochene Umgangssprache, nicht
  // Hocharabisch. Darija hat keine standardisierte Schreibweise; Umschriften variieren
  // zwischen Quellen. "local" = arabische Schrift, "phonetic" = lateinische Umschrift.
  phrasebook: {
    languageName: 'Marokkanisches Arabisch (Darija)',
    sourceNote: 'Umgangssprachliches Darija, keine standardisierte Schreibweise',
    categories: [
      {
        title: 'Begrüßungen',
        phrases: [{ de: 'Hallo', local: 'سلام', phonetic: 'Salam' }],
      },
      {
        title: 'Verabschiedungen',
        phrases: [{ de: 'Tschüss', local: 'بسلامة', phonetic: 'Bslama' }],
      },
      {
        title: 'Höflichkeitswörter',
        phrases: [
          { de: 'Danke', local: 'شكرا', phonetic: 'Choukran' },
          { de: 'Bitte', local: 'عفاك', phonetic: 'Afak' },
          { de: 'Entschuldigung', local: 'سمح ليا', phonetic: 'Sme7 lia' },
        ],
      },
      {
        title: 'Standard-Sätze',
        phrases: [
          { de: 'Ich verstehe nicht', local: 'ما فهمتش', phonetic: 'Ma fhemtsh' },
          { de: 'Was kostet das?', local: 'بشحال هادا؟', phonetic: 'Bshhal hada?' },
          { de: 'Mein Name ist …', local: 'سميتي …', phonetic: 'Smiti …' },
          { de: 'Ich heiße …', local: 'سميتي …', phonetic: 'Smiti …' },
          { de: 'Sprechen Sie Deutsch?', local: 'واش كتهضر لالمانية؟', phonetic: 'Wach katehder lalmania?' },
          { de: 'Hilfe!', local: 'عاونوني!', phonetic: 'Awnouni!' },
        ],
      },
    ],
  },

  history: [
    { year: '2011', event: 'Neue Verfassung nach Protesten des Arabischen Frühlings' },
    { year: '1975', event: 'Grüner Marsch: Marokko beansprucht die Westsahara' },
    { year: '1956', event: 'Unabhängigkeit von Frankreich (2. März)' },
    { year: '1912', event: 'Vertrag von Fès: Beginn des französischen Protektorats' },
    { year: '1666', event: 'Beginn der bis heute regierenden Alaouiden-Dynastie' },
    { year: '1062', event: 'Gründung von Marrakesch durch die Almoraviden' },
    { year: '789', event: 'Gründung von Fès durch Idris I. — erste islamische Dynastie Marokkos' },
  ],

  // Kurzer Zusatzhinweis direkt in der Nachbarländer-Kachel selbst (siehe NeighborsHistoryGrid).
  neighborsNote: {
    label: 'Reisekombination',
    text: 'Kombinierbar mit Spanien – Fähre ab Tanger nach Tarifa oder Algeciras (ca. 35 Minuten), eine der meistgenutzten Routen zwischen Afrika und Europa. Über die spanischen Exklaven Ceuta und Melilla ist ebenfalls ein Grenzübertritt möglich. Richtung Süden ist Mauretanien über den Grenzübergang Guerguerat erreichbar – abgelegen, aber machbar für Abenteuerreisende. Algerien ist nicht zugänglich: Die Grenze ist seit 1994 geschlossen, die diplomatischen Beziehungen seit 2021 abgebrochen.',
  },

  map: {
    center: { lat: 31.5, lon: -7.2 },
    zoom: 5,
    cities: [
      { name: 'Rabat', lat: 34.0209, lon: -6.8416, capital: true },
      { name: 'Casablanca', lat: 33.5731, lon: -7.5898 },
      { name: 'Tanger', lat: 35.7595, lon: -5.834 },
      { name: 'Chefchaouen', lat: 35.1684, lon: -5.2758 },
      { name: 'Fès', lat: 34.0331, lon: -5.0003 },
      { name: 'Marrakesch', lat: 31.6295, lon: -7.9811 },
      { name: 'Essaouira', lat: 31.5063, lon: -9.7544 },
      { name: 'Agadir', lat: 30.4278, lon: -9.5981 },
    ],
  },

  videos: [
    { title: 'How to Travel MOROCCO (Full Documentary)', url: 'https://www.youtube.com/watch?v=tl4bgkrujOc', type: 'documentary' },
    { title: 'MOROCCO – The Mysteries of North Africa | 4K Travel Documentary', url: 'https://www.youtube.com/watch?v=kgBhn3Lf958', type: 'travel' },
    { title: 'Morocco: Land of Mountains, Medinas, and Mystique | 4K UHD', url: 'https://www.youtube.com/watch?v=MdG4FSqfzE8', type: 'documentary' },
    { title: 'Marokko Dokumentation | 20 Orte, die Europa nie zeigt | 4K', url: 'https://www.youtube.com/watch?v=aZBUlG7FqzE', type: 'documentary' },
  ],
  movies: [
    {
      title: 'Casablanca',
      year: 1942,
      note: 'Der Filmklassiker spielt in Marokko – gedreht wurde er allerdings komplett in den Warner-Bros-Studios in Kalifornien, nicht vor Ort.',
      url: '',
      image: { src: `${WM}/Hassan_II_Mosque_Plaza.jpg`, alt: 'Casablanca, Schauplatz des Films', credit: 'Wikimedia Commons' },
    },
    {
      title: 'Lawrence of Arabia',
      year: 1962,
      note: 'Teile des Films wurden tatsächlich in Marokko gedreht, u. a. in Aït Benhaddou bei Ouarzazate.',
      url: '',
      image: { src: `${WM}/Ait_Benhaddou_banner.jpg`, alt: 'Aït Benhaddou, Drehort des Films', credit: 'Wikimedia Commons' },
    },
    {
      title: 'Babel',
      year: 2006,
      note: 'Einer von drei Handlungssträngen spielt in Marokko und wurde auch dort gedreht (Ouarzazate, Taguenzalt).',
      url: '',
      image: { src: `${WM}/Kasbah_Taourirt_in_Ouarzazate_2011.jpg`, alt: 'Kasbah Taourirt in Ouarzazate, Drehort des Films', credit: 'Wikimedia Commons' },
    },
  ],

  dishes: [
    {
      id: 'tajine',
      name: 'Tajine',
      shortDesc: 'Marokkos berühmtestes Schmorgericht – langsam gegart im kegelförmigen Tontopf.',
      image: { src: `${WM}/Tajine_marocain.jpg`, alt: 'Marokkanische Hähnchen-Tajine mit Oliven und Zitronen', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Hähnchenschenkel', 'Zwiebeln', 'Knoblauch', 'Eingelegte Zitronen', 'Grüne Oliven', 'Ingwer', 'Kurkuma', 'Olivenöl'],
        steps: [
          'Zwiebeln und Knoblauch in Olivenöl im Tajine-Topf andünsten.',
          'Hähnchenteile zugeben und mit Ingwer, Kurkuma, Salz und Pfeffer würzen.',
          'Etwas Wasser oder Brühe angießen, Deckel schließen.',
          'Bei niedriger Hitze 45–60 Minuten schmoren lassen.',
          'Eingelegte Zitronen und Oliven in den letzten 10 Minuten zugeben.',
          'Mit frischem Koriander bestreut servieren.',
        ],
        image: { src: `${WM}/Tajine_marocain.jpg`, alt: 'Fertig zubereitete Tajine', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'couscous',
      name: 'Couscous',
      shortDesc: 'Marokkos traditionelles Freitagsgericht: gedämpfter Grieß auf würzigem Gemüse-Eintopf.',
      image: { src: `${WM}/Couscous_Marocain.jpg`, alt: 'Marokkanischer Couscous mit Gemüse und Fleisch', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Couscous (Hartweizengrieß)', 'Lammfleisch oder Huhn', 'Karotten', 'Zucchini', 'Kichererbsen', 'Kürbis', 'Zwiebeln', 'Ras el-Hanout'],
        steps: [
          'Fleisch mit Zwiebeln und Ras el-Hanout anbraten.',
          'Wasser angießen und Fleisch 30–40 Minuten köcheln lassen.',
          'Gemüse und Kichererbsen zugeben, weitere 20 Minuten garen.',
          'Couscous nach Packungsanweisung mit heißer Brühe quellen lassen und auflockern.',
          'Couscous auf einer großen Platte anrichten, Gemüse und Fleisch darauf verteilen.',
          'Mit der Brühe beträufeln und servieren.',
        ],
        image: { src: `${WM}/Couscous_Marocain.jpg`, alt: 'Angerichteter Couscous', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'pastilla',
      name: 'Pastilla',
      shortDesc: 'Festliche Pastete aus hauchdünnem Teig, herzhaft gefüllt und süß bestreut.',
      image: { src: `${WM}/Moroccan_Pastilla.jpg`, alt: 'Marokkanische Pastilla mit Zimt und Puderzucker', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Warqa- oder Filoteig', 'Hähnchenbrust', 'Mandeln', 'Eier', 'Zwiebeln', 'Zimt', 'Safran', 'Puderzucker'],
        steps: [
          'Hähnchen mit Zwiebeln, Safran und Gewürzen weich schmoren, zerkleinern.',
          'Mandeln rösten, grob hacken und mit Zimt und Zucker mischen.',
          'Eier in den reduzierten Schmorfond einrühren, bis eine cremige Masse entsteht.',
          'Teigblätter schichtweise in einer Form auslegen, Füllung einschichten.',
          'Mit weiteren Teigblättern verschließen und goldbraun backen.',
          'Mit Puderzucker und Zimt bestreuen, warm servieren.',
        ],
        image: { src: `${WM}/Moroccan_Pastilla.jpg`, alt: 'Angeschnittene Pastilla', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'harira',
      name: 'Harira',
      shortDesc: 'Kräftige Suppe aus Tomaten, Linsen und Kichererbsen – klassisch zum Fastenbrechen im Ramadan.',
      image: { src: `${WM}/Moroccan_Harira.png`, alt: 'Marokkanische Harira-Suppe', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Tomaten', 'Linsen', 'Kichererbsen', 'Sellerie', 'Zwiebeln', 'Koriander', 'Petersilie', 'Fadennudeln'],
        steps: [
          'Zwiebeln und Sellerie andünsten, Tomatenmark zugeben.',
          'Gehackte Tomaten, Linsen und Kichererbsen zugeben, mit Wasser auffüllen.',
          'Gewürze (Ingwer, Kurkuma, Zimt) einrühren und 30 Minuten köcheln lassen.',
          'Fadennudeln zugeben und weitere 10 Minuten garen.',
          'Mit einer Mehl-Wasser-Mischung leicht binden.',
          'Mit frischem Koriander und Petersilie garnieren.',
        ],
        image: { src: `${WM}/Moroccan_Harira.png`, alt: 'Angerichtete Harira', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'msemen',
      name: 'Msemen',
      shortDesc: 'Quadratische, mehrschichtige Pfannkuchen – knusprig gebraten, meist mit Honig serviert.',
      image: { src: `${WM}/Msemmen.jpg`, alt: 'Marokkanische Msemen-Pfannkuchen', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Weizenmehl', 'Hartweizengrieß', 'Salz', 'Hefe', 'Wasser', 'Pflanzenöl', 'Weiche Butter'],
        steps: [
          'Mehl, Grieß, Salz und Hefe mit Wasser zu einem weichen Teig verkneten.',
          'Teig 20 Minuten ruhen lassen, dann in Portionen teilen.',
          'Jede Portion dünn ausziehen, mit Öl und Butter bestreichen und quadratisch falten.',
          'Vor dem Braten erneut flach drücken.',
          'In einer Pfanne ohne zusätzliches Fett goldbraun backen.',
          'Warm mit Honig oder Käse servieren.',
        ],
        image: { src: `${WM}/Msemmen.jpg`, alt: 'Frisch gebratene Msemen', credit: 'Wikimedia Commons' },
      },
    },
    {
      id: 'atay',
      name: 'Minztee (Atay)',
      shortDesc: 'Marokkos Nationalgetränk – grüner Tee mit frischer Minze, traditionell aus der Höhe eingeschenkt.',
      image: { src: `${WM}/Moroccan_Mint_Tea_-_1.jpg`, alt: 'Marokkanischer Minztee wird eingeschenkt', credit: 'Wikimedia Commons' },
      recipe: {
        ingredients: ['Grüner Tee (Gunpowder)', 'Frische Minzblätter', 'Zucker', 'Heißes Wasser'],
        steps: [
          'Grünen Tee kurz mit heißem Wasser aufgießen und abgießen.',
          'Teeblätter in eine Kanne geben, erneut mit heißem Wasser aufgießen.',
          'Frische Minze und reichlich Zucker zugeben.',
          'Kurz ziehen lassen und einmal umrühren.',
          'Aus großer Höhe in kleine Gläser einschenken, um Schaum zu erzeugen.',
          'Heiß servieren.',
        ],
        image: { src: `${WM}/Moroccan_Mint_Tea_-_1.jpg`, alt: 'Marokkanischer Minztee im Glas', credit: 'Wikimedia Commons' },
      },
    },
  ],

  restaurantsHamburg: [
    {
      name: 'Le Marrakech',
      address: 'Gert-Marcus-Straße 10, 22529 Hamburg',
      url: 'https://lemarrakech.de',
      image: { src: `${WM}/Tajine_marocain.jpg`, alt: 'Tajine, typisch für die marokkanische Küche', credit: 'Wikimedia Commons' },
      visitNote: 'Am 1. August 2026 abgeholt und probiert – klasse!',
      menuHighlights: [
        {
          name: 'Mini Mezze – wir servieren 3',
          price: '6,90 €',
          desc: 'Für eine Person · Wähle drei: Hummus, Curry-Datteldip, Basilikum-Labneh, Apfel-Minz-Salat, Champignons, Schafskäsecreme pikant · Brot nicht inklusive, auf Wunsch dazu bestellbar für 1,50 €',
        },
        {
          name: 'Beef Tajine',
          price: '26,90 €',
          desc: 'Zart geschmortes Rindfleisch mit Zwiebeln, Paprika, Kräutern, Datteln, Ras-el-Hanout & Pflaumen, dazu weißer Reis, gelber Reis oder Couscous',
        },
        {
          name: 'Lamm Tajine',
          price: '27,50 €',
          desc: 'Zart geschmortes Lammfleisch mit Kartoffeln & Möhren, klassisch marokkanisch gewürzt, dazu weißer Reis, gelber Reis oder Couscous',
        },
      ],
    },
    {
      name: 'Restaurant Piment',
      address: 'Lehmweg 29, 20251 Hamburg',
      url: 'https://restaurant-piment.de',
      image: { src: `${WM}/Couscous_Marocain.jpg`, alt: 'Couscous, Grundlage der marokkanisch inspirierten Küche', credit: 'Wikimedia Commons' },
    },
  ],

  destinations: [
    {
      name: 'Marrakesch – Jemaa el-Fnaa',
      desc: 'Der Jemaa el-Fnaa ist das pulsierende Herz der Medina – tagsüber Marktplatz, abends Bühne für Musiker, Erzähler und unzählige Garküchen.',
      image: { src: `${WM}/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG`, alt: 'Der Jemaa el-Fnaa in Marrakesch', credit: 'Luc Viatour, Wikimedia Commons' },
    },
    {
      name: 'Chefchaouen',
      desc: 'In den Rif-Bergen gelegen, bezaubert die „blaue Stadt" mit komplett blau getünchten Gassen – eines der meistfotografierten Ziele Marokkos.',
      image: { src: `${WM}/Chefchaouen_-_blue_city_in_Morocco.jpg`, alt: 'Blaue Gassen von Chefchaouen', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Fès el Bali',
      desc: 'Die Altstadt von Fès ist eine der größten autofreien urbanen Zonen der Welt und UNESCO-Welterbe, mit engen Gassen und jahrhundertealten Koranschulen.',
      image: { src: `${WM}/Medina_of_Fes,_Marocco.jpg`, alt: 'Medina von Fès', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Sahara-Wüste – Merzouga',
      desc: 'Die Dünen von Erg Chebbi bei Merzouga zählen zu den zugänglichsten Sahara-Dünenfeldern Marokkos – Kamelritte und Wüstencamps inklusive.',
      image: { src: `${WM}/Merzouga_desert_Erg_Chebbi.jpg`, alt: 'Sanddünen von Erg Chebbi bei Merzouga', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Essaouira',
      desc: 'Die windige Hafenstadt am Atlantik besticht durch portugiesische Festungsmauern, einen lebendigen Fischereihafen und entspanntes Flair.',
      image: { src: `${WM}/Essaouira-port.JPG`, alt: 'Hafen von Essaouira', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Aït Benhaddou',
      desc: 'Die berühmte Lehmziegel-Ksar-Siedlung ist UNESCO-Welterbe und diente als Kulisse für zahlreiche Filme und Serien, u. a. „Gladiator".',
      image: { src: `${WM}/Ait_Benhaddou_banner.jpg`, alt: 'Die Ksar-Siedlung Aït Benhaddou', credit: 'Wikimedia Commons' },
    },
    {
      name: 'Surfen in Taghazout',
      desc: 'Der Fischerort bei Agadir ist einer der bekanntesten Surf-Spots Afrikas – zuverlässiger Atlantik-Swell und Surfschulen für jedes Level.',
      image: { src: `${WM}/Taghazout_Surf.jpg`, alt: 'Surfer im Wasser vor Taghazout', credit: 'Hassan Ingram, Wikimedia Commons' },
    },
    {
      name: 'Musée Yves Saint Laurent, Marrakesch',
      desc: 'Das 2017 eröffnete Museum direkt am Jardin Majorelle zeigt Mode und Skizzen des Designers in einem markanten, eigens gebauten Gebäude.',
      image: { src: `${WM}/YSL_01_Eingangsportal.jpg`, alt: 'Eingangsportal des Musée Yves Saint Laurent in Marrakesch', credit: 'Wikimedia Commons' },
    },
  ],

  flights: {
    fromCity: 'Hamburg',
    routes: [
      { airline: 'easyJet', via: 'Direktflug', durationApprox: '≈4:10–4:20 Std.', bookingNote: 'Hamburg → Marrakesch (RAK), 2×/Woche (Di & Fr)', url: 'https://www.easyjet.com/de' },
      { airline: 'Condor', via: 'Direktflug (saisonal)', durationApprox: '≈4:20–4:45 Std.', bookingNote: 'Hamburg → Agadir (AGA), ca. 3×/Woche', url: 'https://www.condor.com/de/' },
      { airline: 'Lufthansa', via: 'via Frankfurt', durationApprox: '≈6–8 Std. inkl. Umstieg', bookingNote: 'Für Casablanca, Fès und Tanger gibt es aktuell keinen Nonstop-Flug ab Hamburg', url: 'https://www.lufthansa.com' },
      { airline: 'Air France', via: 'via Paris', durationApprox: '≈6–8 Std. inkl. Umstieg', bookingNote: 'Alternative über Paris-Charles de Gaulle', url: 'https://www.airfrance.de' },
      { airline: 'Iberia', via: 'via Madrid', durationApprox: '≈6–8 Std. inkl. Umstieg', bookingNote: 'Alternative über Madrid-Barajas', url: 'https://www.iberia.com/de/' },
    ],
  },

  famousPeople: {
    historical: [
      {
        name: 'Ibn Battuta',
        years: '1304–1368/69',
        desc: 'Der aus Tanger stammende Ibn Battuta gilt als einer der größten Weltreisenden der Geschichte und bereiste fast 30 Jahre lang weite Teile Afrikas, Asiens und Europas.',
        image: { src: `${WM}/Handmade_oil_painting_reproduction_of_Ibn_Battuta_in_Egypt,_a_painting_by_Hippolyte_Leon_Benett..jpg`, alt: 'Gemälde von Ibn Battuta', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Mohammed V.',
        years: '1909–1961',
        desc: 'Sultan und späterer König von Marokko, führte das Land 1956 in die Unabhängigkeit und gilt als Vater der modernen marokkanischen Nation.',
        image: { src: `${WM}/Muhammad_V.jpg`, alt: 'Porträt von Mohammed V.', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Fatima Mernissi',
        years: '1940–2015',
        desc: 'Bedeutende marokkanische Soziologin und feministische Autorin, deren Werke die Rolle der Frau im Islam international neu beleuchteten.',
        image: { src: `${WM}/Fatima_Mernissi_(1940-2015)_P8010006.jpg`, alt: 'Fatima Mernissi', credit: 'Wikimedia Commons' },
      },
    ],
    contemporary: [
      {
        name: 'Mohammed VI.',
        profession: 'König von Marokko',
        desc: 'Seit 1999 amtierender König, unter dessen Herrschaft wirtschaftliche Reformen und die Verfassungsänderung von 2011 vorangetrieben wurden.',
        image: { src: `${WM}/King_Mohammed_VI_(cropped).jpg`, alt: 'König Mohammed VI.', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Leïla Slimani',
        profession: 'Schriftstellerin',
        desc: 'Französisch-marokkanische Autorin, gewann 2016 mit „Chanson douce" den Prix Goncourt und zählt zu den einflussreichsten frankophonen Autor:innen der Gegenwart.',
        image: { src: `${WM}/Le%C3%AFla_Slimani_(2022).jpg`, alt: 'Leïla Slimani', credit: 'Wikimedia Commons' },
      },
      {
        name: 'Achraf Hakimi',
        profession: 'Fußballspieler',
        desc: 'Marokkanischer Nationalspieler, führte Marokko bei der WM 2022 als erste afrikanische Mannschaft ins Halbfinale.',
        image: { src: `${WM}/Achraf_Hakimi_PSG.jpg`, alt: 'Achraf Hakimi', credit: 'Wikimedia Commons' },
      },
    ],
  },

  playlists: [
    {
      title: 'Gnawa Music',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWYCFWZy4Gz9M',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWYCFWZy4Gz9M',
    },
    {
      title: 'Chaabi Marocain شعبي مغربي',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcNQ08HKGr5C',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcNQ08HKGr5C',
    },
    {
      title: 'This Is Moroccan Music',
      spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3MQmnm',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3MQmnm',
    },
  ],

  eventsHamburg: [
    {
      name: 'Ramadan-Fastenbrechen & Eid-Feste',
      when: 'jährlich während Ramadan sowie zu Eid al-Fitr und Eid al-Adha',
      location: 'Verein der Maghariba e.V., Hamburg-Dulsberg',
      desc: 'Gemeinsames Fastenbrechen und Festessen mit marokkanischer Küche, offen für die Nachbarschaft.',
      url: 'https://verein-der-maghariba.de/',
    },
    {
      name: 'Stammtisch der Kulturen',
      when: 'monatlich, jeden 2. Freitag',
      location: 'Kulturschloss Wandsbek, Hamburg',
      desc: 'Offener Austausch- und Begegnungsabend des Maghreb Haus e.V. – auch für Neugierige ohne Vorkenntnisse.',
      url: 'https://www.maghreb-haus.de/',
    },
    {
      name: 'Maghrebinisches Ramadan-Fastenbrechen',
      when: '28. Februar 2026',
      location: 'Maghreb Haus e.V., Hamburg',
      desc: 'Gemeinsames Iftar mit dem Deutsch-Algerischen Kulturverein, offen für alle Interessierten.',
      url: 'https://www.maghreb-haus.de/veranstaltung/fastenbrechen-2026',
    },
  ],

  eventsCountry: [
    {
      name: 'Festival Gnaoua et Musiques du Monde',
      when: 'jährlich Ende Juni (2026: 25.–28. Juni)',
      location: 'Essaouira',
      desc: 'Musikfestival, das die mystische Gnaoua-Tradition mit internationaler Weltmusik verbindet – besondere Atmosphäre in der Medina von Essaouira.',
      url: 'https://www.festival-gnaoua.net/en/home/',
    },
    {
      name: 'Fès Festival of World Sacred Music',
      when: 'jährlich im Frühsommer (meist Anfang/Mitte Juni)',
      location: 'Fès',
      desc: 'Renommiertes Festival für spirituelle Musik aus aller Welt – Sufi-Gesang trifft internationale Weltmusik in historischer Altstadt-Kulisse.',
      url: 'https://www.fesfestival.com',
    },
    {
      name: 'Mawazine – Rythmes du Monde',
      when: 'jährlich im Juni (2026: 19.–27. Juni)',
      location: 'Rabat',
      desc: 'Eines der größten Musikfestivals der Welt, ca. 90 % der Konzerte kostenlos auf sieben Bühnen – Mix aus internationalen Popstars und marokkanischer Musik.',
      url: 'https://mawazine.ma/en',
    },
    {
      name: 'Marrakech International Film Festival',
      when: 'jährlich im Spätherbst (2026: 20.–28. November)',
      location: 'Marrakesch',
      desc: 'Bedeutendes internationales Filmfestival mit Weltstars, Premieren und großem Publikumsandrang.',
      url: 'https://marrakech-festival.com',
    },
    {
      name: 'Marathon des Sables',
      when: 'jährlich im Frühjahr (2026: 3.–13. April)',
      location: 'Start bei Ouarzazate, Streckenverlauf durch die Sahara nahe Merzouga',
      desc: 'Legendäres 6-Tage-Etappen-Ultramarathon durch die Wüste – auch als Zuschauer-Erlebnis in spektakulärer Kulisse.',
      url: 'https://marathondessables.com/en/event/mds-120-morocco-2026',
    },
  ],

  communitiesHamburg: [
    {
      name: 'Verein der Maghariba e.V.',
      city: 'Hamburg',
      desc: 'Moschee- und Kulturverein in Hamburg-Dulsberg, satzungsgemäß u. a. für ehrenamtliche Beratung marokkanischstämmiger Hamburger:innen zuständig; betreibt zudem einen kleinen marokkanischen Laden mit Produkten aus der Heimat als Treffpunkt der Community.',
      eventsNote: 'Ramadan-Fastenbrechen, Eid-al-Fitr- und Eid-al-Adha-Feste mit marokkanischem Essen, kostenloser Arabisch-/Koranunterricht.',
      phone: '0179 1286241',
      url: 'https://verein-der-maghariba.de/',
    },
    {
      name: 'Maghreb Haus e.V.',
      city: 'Hamburg',
      desc: 'Brückenverein zwischen Deutschland und dem Maghreb ("Fremde werden Freunde") – nicht Marokko-exklusiv, aber marokkanische Küche und Kultur sind fester Bestandteil des Programms.',
      eventsNote: 'Monatlicher "Stammtisch der Kulturen" (jeden 2. Freitag im Kulturschloss Wandsbek) sowie ein maghrebinisches Ramadan-Fastenbrechen.',
      email: 'info@maghreb-haus.de',
      phone: '0152 33775808',
      url: 'https://www.maghreb-haus.de/',
    },
  ],

  quiz: [
    {
      question: 'Was ist die Hauptstadt von Marokko?',
      options: ['Casablanca', 'Rabat', 'Marrakesch', 'Fès'],
      correctIndex: 1,
      explanation: 'Rabat ist die Hauptstadt Marokkos, auch wenn Casablanca die größte Stadt des Landes ist.',
    },
    {
      question: 'Welche Staatsform hat Marokko?',
      options: ['Präsidialrepublik', 'Absolute Monarchie', 'Parlamentarische Verfassungsmonarchie', 'Bundesstaat'],
      correctIndex: 2,
      explanation: 'Marokko ist eine parlamentarische Verfassungsmonarchie mit König Mohammed VI. als Staatsoberhaupt.',
    },
    {
      question: 'Wie heißt die „blaue Stadt" in den Rif-Bergen?',
      options: ['Essaouira', 'Chefchaouen', 'Ouarzazate', 'Tétouan'],
      correctIndex: 1,
      explanation: 'Chefchaouen ist berühmt für seine komplett blau getünchten Gassen und Häuser.',
    },
    {
      question: 'In welchem Topf wird eine klassische Tajine zubereitet?',
      options: ['Wok', 'Kegelförmiger Tontopf', 'Gusseiserner Kessel', 'Holzkohlegrill'],
      correctIndex: 1,
      explanation: 'Die Tajine ist nach dem kegelförmigen Tontopf benannt, in dem das Gericht langsam gart.',
    },
    {
      question: 'Wurde der Film „Casablanca" (1942) tatsächlich in Marokko gedreht?',
      options: ['Ja, komplett vor Ort', 'Nein, komplett in den Warner-Bros-Studios in Kalifornien', 'Nur die Außenaufnahmen', 'Nein, in Ägypten'],
      correctIndex: 1,
      explanation: 'Der Filmklassiker wurde vollständig in den Warner-Bros-Studios in Burbank, Kalifornien, gedreht.',
    },
    {
      question: 'Welche Sprachen sind in Marokko offiziell anerkannt?',
      options: ['Arabisch und Französisch', 'Arabisch und Tamazight (Berberisch)', 'Nur Arabisch', 'Spanisch und Arabisch'],
      correctIndex: 1,
      explanation: 'Arabisch und Tamazight (Berberisch) sind die Amtssprachen Marokkos; Französisch ist verbreitet, aber nicht offiziell.',
    },
    {
      question: 'Welche Stadt kann man von Hamburg aus aktuell direkt (nonstop) erreichen?',
      options: ['Casablanca', 'Fès', 'Marrakesch', 'Tanger'],
      correctIndex: 2,
      explanation: 'easyJet fliegt Hamburg–Marrakesch nonstop; Condor zudem Hamburg–Agadir. Alle anderen Ziele erfordern einen Umstieg.',
    },
    {
      question: 'Wie heißt Marokkos süßer Nationaltee?',
      options: ['Chai', 'Atay (Minztee)', 'Rooibos', 'Karkadé'],
      correctIndex: 1,
      explanation: 'Atay, der süße Minztee, ist fester Bestandteil der marokkanischen Gastfreundschaft.',
    },
  ],
};

export default morocco;
