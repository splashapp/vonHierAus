// Schema-Vorlage für ein neues Land.
// Kopiere diese Datei nach `<land-id>.js`, fülle jedes Feld aus, und registriere
// das Land danach in `src/data/countries/index.js` sowie in `src/data/countries.js`.
// Details zum Vorgehen: siehe CLAUDE.md ("Neues Land hinzufügen").

const template = {
  id: '', // z.B. 'senegal' — wird als URL-Segment /:countryId verwendet
  name: '', // deutscher Anzeigename, z.B. 'Senegal'
  nameEn: '',
  tagline: '', // kurzer Werbeslogan, 1 Zeile

  // 'active' macht das Land auf der Landing Page klickbar, 'coming-soon' zeigt eine deaktivierte Karte
  status: 'coming-soon',

  // Jedes Bild-Objekt hat immer genau diese drei Felder.
  // src: bevorzugt eine verifizierte Wikimedia-Commons-Datei-URL (upload.wikimedia.org/...)
  flagImage: { src: '', alt: '', credit: '' },
  heroImage: { src: '', alt: '', credit: '' },
  // Optional: rotierende Hero-Diashow statt einem einzelnen Foto. Ohne heroSlides fällt
  // CountryHero auf heroImage zurück. "effect: 'clouds' | 'stars'" legt ein zusätzliches
  // animiertes Overlay über das Foto (nur sinnvoll bei Himmel-lastigen Motiven).
  heroSlides: [
    // { src: '', alt: '', credit: '', effect: 'clouds' | 'stars' | undefined },
  ],

  // Farben, Hintergrund UND Schriftart sollen Flagge/Stimmung des Landes wiederspiegeln —
  // jedes Land soll optisch klar unterscheidbar sein, nicht nur andersfarbig. Fließtext nutzt
  // trotzdem immer die neutrale --color-text Variable, NICHT primary/secondary/accent direkt.
  theme: {
    primary: '#000000', // Akzentfarbe 1 (Buttons, Überschriften, Hervorhebungen)
    secondary: '#000000', // Akzentfarbe 2 (Verlauf, zweite Hervorhebung)
    accent: '#000000', // dritte Akzentfarbe (z.B. Hauptstadt-Marker auf der Karte)
    surface: '#ffffff', // treibt den SEITENHINTERGRUND (--color-bg) — landestypischer Grundton,
    // nicht nur ein austauschbares Creme/Weiß. Bewusst wählen (warm/kühl, hell/dunkel).
    // Optional: eigene Schriftart statt des globalen Georgia/System-Sans-Defaults.
    // fontHeading/fontBody sind vollständige CSS-font-family-Stacks (mit Fallbacks!).
    // googleFontUrl ist die passende https://fonts.googleapis.com/css2?family=... URL dazu
    // (vorher per curl verifizieren, dass sie 200 liefert) — wird von GoogleFontLoader geladen.
    // fontHeading: "'Fraunces', Georgia, serif",
    // fontBody: "'Work Sans', -apple-system, sans-serif",
    // googleFontUrl: 'https://fonts.googleapis.com/css2?family=Fraunces...&family=Work+Sans...&display=swap',
  },

  facts: {
    capital: '',
    capitalImage: { src: '', alt: '', credit: '' }, // Foto der Hauptstadt, Hintergrund der Hauptstadt-Kachel
    population: '', // aktuelle Schätzung, ohne Quellenklammer im Text, z.B. '≈17 Mio.'
    government: '',
    officialLanguages: [],
    currencyCode: '', // ISO-Code, z.B. 'MAD' — Basis für den Währungsrechner
    currencyName: '', // ausgeschriebener Name, z.B. 'Marokkanischer Dirham'
    eurExchangeRate: 0, // aktueller Richtwert: 1 EUR = X Landeswährung (recherchieren, nicht raten)
    area: '',
    areaComparison: '', // Vergleich mit einem bekannten (meist europäischen) Land ähnlicher Größe, verifiziert
    timezone: '', // IANA-Zeitzone der Hauptstadt, z.B. 'Africa/Casablanca' — treibt die Live-Uhr
    capitalCoords: { lat: 0, lon: 0 }, // Dezimalgrad der Hauptstadt — treibt Sonnenauf-/-untergang
    neighbors: [], // Nachbarländer als Strings, sachlich formuliert
  },

  // Die im Alltag gesprochene Landessprache (nicht zwingend die Amtssprache/Hochsprache) —
  // recherchieren, welche Alltagssprache Reisende tatsächlich hören/brauchen.
  // "local" = Schrift der Landessprache, "phonetic" = für Deutschsprachige lesbare Umschrift.
  phrasebook: {
    languageName: '', // z.B. 'Marokkanisches Arabisch (Darija)'
    sourceNote: '', // kurzer Hinweis, falls die Sprache keine standardisierte Schreibweise hat o.ä.
    categories: [
      // {
      //   title: '', // z.B. 'Begrüßungen'
      //   phrases: [
      //     { de: '', local: '', phonetic: '', note: '' }, // note optional
      //   ],
      // },
    ],
  },

  // 5-8 verifizierte Eckdaten der Landesgeschichte, umgekehrt chronologisch (neuestes zuerst).
  // Jahreszahlen/Ereignisse recherchieren, nicht schätzen — steht neben der Nachbarländer-Kachel
  // (beide span 3).
  history: [
    // { year: '', event: '' },
  ],

  // Echte interaktive OpenStreetMap-Karte (Leaflet). center/zoom so wählen, dass das Land
  // vollständig zu sehen ist und Nachbarländer nur als Randstreifen hereinragen (niedriger
  // Zoom, z.B. 5). cities: echte, recherchierte lat/lon-Koordinaten (keine Näherung "über den
  // Daumen") — capital:true bekommt einen größeren, eigenen Marker.
  map: {
    center: { lat: 0, lon: 0 },
    zoom: 5,
    cities: [
      // { name: '', lat: 0, lon: 0, capital: false },
    ],
  },

  videos: [
    // { title: '', url: '', type: 'documentary' | 'travel' | 'culture' },
  ],
  movies: [
    // { title: '', year: 0, note: '', url: '', image: { src: '', alt: '', credit: '' } },
    // image: ein echtes Foto des Drehorts/Schauplatzes, KEIN Filmposter (urheberrechtlich nicht frei)
  ],

  dishes: [
    // {
    //   id: '',
    //   name: '',
    //   shortDesc: '',
    //   image: { src: '', alt: '', credit: '' },
    //   recipe: {
    //     ingredients: [],
    //     steps: [],
    //     image: { src: '', alt: '', credit: '' },
    //   },
    // },
  ],

  // Findet sich bei der Recherche KEIN echtes, aktuell bestehendes landestypisches Restaurant
  // in Hamburg, das Array leer lassen (nicht erfinden!) — RestaurantList zeigt dann automatisch
  // einen ehrlichen Hinweistext statt eines leeren Kartenrasters.
  restaurantsHamburg: [
    // { name: '', address: '', url: '', image: { src: '', alt: '', credit: '' },
    //   visitNote: '', // optional, z.B. eigene Besuchsnotiz
    //   menuHighlights: [{ name: '', price: '', desc: '' }] }, // optional
  ],

  destinations: [
    // { name: '', desc: '', image: { src: '', alt: '', credit: '' } },
  ],

  flights: {
    fromCity: 'Hamburg',
    routes: [
      // { airline: '', via: '', durationApprox: '', bookingNote: '', url: '' }, // url = offizielle Airline-Seite
    ],
  },

  famousPeople: {
    historical: [
      // { name: '', years: '', desc: '', image: { src: '', alt: '', credit: '' } },
    ],
    contemporary: [
      // { name: '', profession: '', desc: '', image: { src: '', alt: '', credit: '' } },
    ],
  },

  // Genau 3 echte, existierende Spotify-Playlists.
  playlists: [
    // { title: '', spotifyUrl: '', embedUrl: '' },
  ],

  // Echte, wiederkehrende Veranstaltungen mit Bezug zum Land — in Hamburg (Feste der Vereine aus
  // communitiesHamburg, Kulturabende, Festivals) und im Land selbst (bekannte Festivals). Bei
  // beiden gilt: nichts erfinden, Termine/Wiederkehr recherchieren (z.B. "jährlich im Juni"
  // statt eines geratenen Datums). Findet sich nichts Echtes, das jeweilige Array leer lassen —
  // EventsSection zeigt dann automatisch einen ehrlichen Hinweistext statt erfundener Termine.
  eventsHamburg: [
    // { name: '', when: '', location: '', desc: '', url: '' }, // url optional
  ],
  eventsCountry: [
    // { name: '', when: '', location: '', desc: '', url: '' }, // url optional
  ],

  // Echte, aktuell bestehende Vereine/Kulturzentren/Communities mit Wurzeln im Land, die in
  // Hamburg aktiv sind (Veranstaltungen, Ansprechpartner für Fragen). Findet sich recherchiert
  // KEINE solche Gruppe, das Array leer lassen (nicht erfinden!) — CommunityGroups zeigt dann
  // automatisch einen ehrlichen Hinweistext statt eines leeren Kartenrasters.
  communitiesHamburg: [
    // { name: '', city: 'Hamburg', desc: '', eventsNote: '', // optional, z.B. "Kulturabende, Sprachkurse"
    //   email: '', phone: '', url: '' }, // jeweils optional, aber mind. 1 Kontaktweg angeben
  ],

  // Nur Multiple Choice, keine Texteingabe. 5-8 Fragen empfohlen.
  quiz: [
    // { question: '', options: ['', '', '', ''], correctIndex: 0, explanation: '' },
  ],

  // Optional, redaktionell kuratiert: gute Besucher-Beiträge aus VoicesTile, die du per Hand
  // hier übernommen hast (role: 'traveler' | 'local' | 'hamburg'). Leer lassen ist normal —
  // VoicesTile funktioniert auch ganz ohne kuratierte Einträge, rein über die lokale
  // (browserseitige) Speicherung der Besucher:innen-Beiträge. Nichts hier erfinden.
  voices: [
    // { role: 'traveler', text: '', name: '', place: '' }, // name/place optional
  ],
};

export default template;
