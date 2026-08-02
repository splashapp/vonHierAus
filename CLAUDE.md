# Virtuelle Afrikareise

## Überblick

Eine werbe-/reisebroschüren-artige React-Website, die Länder Afrikas vorstellt: Fakten, Karte,
Küche, Reiseziele, Hamburg-Restaurants, Anreise, berühmte Persönlichkeiten, Musik-Playlists,
Sprachführer, Geschichte, Verbände/Communities in Hamburg, eigene Besucher-Beiträge ("Stimmen
zum Land") und ein Quiz — **pro Land dieselbe Struktur, aber jedes Land mit eigener Farbwelt,
eigenem Hintergrundton und eigener Typografie.**

Zentrales Prinzip: **Ein Template, viele Länder.** Die React-Komponenten und das Seitenlayout
sind für alle Länder identisch — ein neues Land hinzuzufügen bedeutet ausschließlich, eine neue
Daten-Datei anzulegen. Es werden **keine** Komponenten, Routen oder globalen Styles pro Land
verändert; alles Land-Spezifische kommt ausschließlich aus der jeweiligen `src/data/countries/
<id>.js`.

Stack: React 19 + Vite + framer-motion + react-router-dom + Leaflet. Plain JavaScript (kein
TypeScript), reines CSS mit Custom Properties (kein Tailwind/UI-Kit), kein Backend/CMS, keine
Tests, keine i18n. Das ist bewusst so — bitte in zukünftigen Sessions nicht "hilfreich"
ergänzen, wenn nicht explizit gewünscht. Einzige externe Netzwerkabhängigkeiten zur Laufzeit:
OpenStreetMap-Kartenkacheln und die kostenlose Open-Meteo-Wetter-API (siehe unten) — beide ohne
API-Key, direkt aus dem Browser.

## Schnellstart

```bash
npm install
npm run dev       # Entwicklungsserver
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal ansehen
```

Deployment: Vercel ([von-hier-aus.vercel.app](https://von-hier-aus.vercel.app)). `vercel.json`
enthält einen Rewrite (`/(.*) → /index.html`), ohne den würde ein direkter Aufruf/Reload einer
Unterseite wie `/senegal` einen 404 vom statischen Hosting liefern, statt React Router den Weg
clientseitig auflösen zu lassen (klassisches SPA-Routing-Problem, kein React-Bug) — bei einem
Wechsel des Hosting-Anbieters muss die äquivalente Rewrite-Regel dort neu eingerichtet werden.

## Architektur

- `src/pages/LandingPage.jsx` — Startseite mit `CountryGrid`/`CountryCard`-Kacheln für alle
  Länder aus `src/data/countries.js` (auch "coming-soon").
- `src/pages/CountryPage.jsx` — generische, datengetriebene Länderseite. Route: `/:countryId`.
  Lädt die passende Länder-Datei über `countryLoaders` aus `src/data/countries/index.js` per
  `dynamic import()` nach (Code-Splitting: jedes Land landet in einem eigenen JS-Chunk, der nur
  beim Besuch dieser Route nachgeladen wird, statt das Bundle mit jedem neuen Land wachsen zu
  lassen); existiert kein Eintrag, wird auf `/` umgeleitet. Sowohl `LandingPage` als auch
  `CountryPage` selbst werden in `App.jsx` außerdem per `React.lazy()` geladen, damit z. B.
  Leaflet (nur auf Länderseiten gebraucht) nicht im Bundle der Startseite landet. **Diese Datei
  wird für ein neues Land ansonsten nicht verändert**, nur die Reihenfolge/
  Sichtbarkeit der Sections ist eine bewusste, für alle Länder geteilte redaktionelle
  Entscheidung (aktuelle Reihenfolge siehe Datei selbst — sie hat sich im Lauf der Zeit mehrfach
  geändert, die Datei ist die einzige Quelle der Wahrheit dafür, nicht dieses Dokument).
  Bewusste Ausnahme von "ein Grid pro Fact-Bereich": `FactGrid` (Kernfakten) und
  `NeighborsHistoryGrid` (Nachbarländer + `history[]`) sind zwei getrennte `.fact-grid`-Blöcke,
  mit der "Reiseziele"-Section dazwischen — redaktionelle Layout-Entscheidung, kein Bug.
- `src/data/countries.js` — leichte Registry für die Landing Page (alle Länder, auch
  "coming-soon"): Name, Flagge, Tagline, Theme-Farben, Status. Optional `cardImage:
  {src, alt, position}` — ein Foto als Kartenhintergrund; `position` ist ein CSS-`object-position`-
  Wert (z. B. `'50% 70%'`), um den sichtbaren Bildausschnitt gezielt zu verschieben. Ohne
  `cardImage` fällt die Karte auf den Theme-Farbverlauf zurück.
- `src/data/countries/<id>.js` — vollständiger Datensatz eines ausgebauten Landes (siehe Schema
  unten). Wird über `src/data/countries/index.js` als eigener `countryLoaders`-Eintrag
  (`() => import('./<id>.js')`) eingehängt — bewusst kein statischer Import, siehe Code-
  Splitting-Hinweis oben bei `CountryPage.jsx`.
- `src/data/countries/_template.js` — leere Schema-Vorlage mit Kommentaren für jedes Feld. Bei
  jeder Schema-Erweiterung **zuerst hier** den neuen Feld-Kommentar ergänzen, danach dieses
  Dokument.
- `src/components/shared/` — layoutunabhängige Bausteine (Section, Collapsible,
  ImageWithFallback, FlagBadge, Card, GoogleFontLoader).
- `src/components/country/` — Länderseiten-Bausteine, alle rein datengetrieben (Props rein,
  kein Länder-spezifischer Code).
- `src/components/landing/` — Länderraster auf der Startseite (CountryGrid, CountryCard).
- `src/utils/theme.js` — `countryCSSVars(theme)` übersetzt Farben, Hintergrund und optionale
  Schriftart eines Landes in CSS-Custom-Properties, inline gesetzt auf `.country-page` bzw. auf
  aktive `CountryCard`s.
- `src/utils/constants.js` — feste Hamburg-Konstanten (`HAMBURG_ZONE`, `HAMBURG_COORDS`), da
  Hamburg der fixe Ausgangspunkt der ganzen Seite ist, kein Länder-Datenfeld.
- `src/utils/sunTimes.js` — clientseitige Sonnenauf-/-untergangsberechnung (keine externe API).

## Neues Land hinzufügen

1. `src/data/countries/_template.js` nach `src/data/countries/<id>.js` kopieren und **jedes**
   Feld ausfüllen (Schema siehe unten).
2. **Recherchephase zuerst** (siehe Rechercheliste unten) — Fakten, Bilder, Links, Koordinaten.
   Nichts erfinden.
3. Farben, Hintergrundton und ggf. Schriftart wählen, die Flagge/Stimmung des Landes
   widerspiegeln (siehe "Farb-, Hintergrund- und Typografie-Konvention" unten) — das ist ein
   **Pflichtschritt**, kein Nice-to-have. Jedes Land soll sich beim Durchklicken spürbar anders
   anfühlen, nicht nur andersfarbig aussehen.
4. `map.center` / `map.zoom` / `map.cities` mit echten, recherchierten Koordinaten befüllen
   (siehe "Kartenkonvention" unten).
5. In `src/data/countries/index.js` einen `countryLoaders`-Eintrag ergänzen:
   `<id>: () => import('./<id>.js')` (kein statischer Import — siehe Code-Splitting-Hinweis in
   der Architektur oben).
6. In `src/data/countries.js` den bestehenden Eintrag (falls vorhanden) von
   `status: 'coming-soon'` auf `status: 'active'` setzen, oder einen neuen Eintrag ergänzen
   (dort dieselben Theme-Farben wie in der vollen Datei verwenden, damit Landing-Karte und
   Länderseite konsistent aussehen).
7. Build/Dev-Server prüfen, Seite im Browser durchklicken (jede Section öffnen, Karte, Quiz,
   Währungsrechner, Uhr, Wetter testen), Konsole auf Fehler prüfen.
8. Fertig — keine Komponenten- oder Routenänderungen nötig.

### Rechercheliste (vor dem Ausfüllen der Daten-Datei)

Nichts erfinden — jede Tatsache/URL muss über Websuche/Fetch verifiziert werden:

- Wikimedia-Commons-Bild-URLs für Flagge, Hero(-Slides), Hauptstadt, Gerichte, Reiseziele,
  Persönlichkeiten, Restaurant-Ersatzbilder, Filmschauplätze (Muster
  `https://commons.wikimedia.org/wiki/Special:FilePath/<Dateiname>`, per `curl -I -L` auf
  200/301 prüfen — die Special:FilePath-Route leitet direkt auf die echte Datei um und
  funktioniert ohne weiteres Redirect-Handling als `<img src>`). Bei anhaltenden `429`-Antworten
  handelt es sich meist um CDN-Rate-Limiting durch zu viele Anfragen in kurzer Zeit, nicht um
  eine kaputte Datei — über die Wikimedia-API (`action=query&prop=imageinfo`) lässt sich die
  Existenz einer Datei unabhängig vom CDN-Rate-Limit verifizieren.
- Echte, aktuell existierende landestypische Restaurants in Hamburg (Name + Adresse). Existiert
  keins, das ehrlich so im Text vermerken statt eins zu erfinden.
- Reale Flugverbindungen Hamburg → Zielland (Direktflug falls vorhanden, sonst reale
  Umsteigeverbindung) inkl. echter Airline-Website-URLs.
- Genau 3 echte, existierende Spotify-Playlists mit Musik aus dem Land (Editorial-Playlists von
  Spotify erkennt man an der ID `37i9dQZF...`).
- Länderfakten: Bevölkerung (mit Jahr), Hauptstadt (+ Koordinaten), Staatsform, Amtssprache(n),
  Alltags-/Verkehrssprache (kann von der Amtssprache abweichen), Währung, Fläche (+ echter
  Größenvergleich mit einem bekannten Land ähnlicher Fläche), Zeitzone (IANA-ID), Nachbarländer.
- Berühmte Persönlichkeiten (historisch + zeitgenössisch) mit verifizierbaren Daten und einem
  tatsächlich existierenden, freien Commons-Porträt. Findet sich keins, andere Person wählen
  statt einen Dateinamen zu raten.
- Video-/Filmlinks, die tatsächlich funktionieren (YouTube-oEmbed-Check); verbreitete Irrtümer
  richtigstellen statt übernehmen (Beispiel: "Casablanca" wurde nicht in Marokko gedreht).
- Politisch sensible Grenz-/Territorialfragen sachlich/neutral formulieren, nicht werten.
- Mindestens 6-8 wichtige Städte mit echten Koordinaten für die Karte.
- Aktueller EUR-Wechselkurs zur Landeswährung (Richtwert, kein Live-Feed).
- Echte, aktuell bestehende Vereine/Kulturzentren/Communities mit Wurzeln im Land, die in
  Hamburg aktiv sind — Ansprechpartner für Veranstaltungen oder Fragen per Mail/Telefon, von
  Menschen, die selbst aus dem Land stammen. Jede Angabe (Name, Kontakt, Veranstaltungen) muss
  über eine echte, auffindbare Quelle (Vereinswebsite, Vereinsregister, aktiv gepflegte Social-
  Media-Seite, Presseartikel) verifiziert sein. Findet sich recherchiert keine solche Gruppe,
  ehrlich so vermerken (Array leer lassen) statt eine plausibel klingende zu erfinden.

Jedes Bild bekommt trotz Verifikation zusätzlich das `ImageWithFallback`-Sicherheitsnetz
(`onError` → thematischer Verlaufs-Platzhalter), falls ein Hotlink später doch bricht. Die
bewegten Foto-Hintergründe (`CountryHero`, `CountryCard`, `CapitalTile`) nutzen `motion.img`
statt `ImageWithFallback` (wegen der `animate`-Prop), bekommen aber jeweils ihr eigenes
`onError` → Rückfall auf `var(--gradient-hero)`, das ohnehin als Basishintergrund darunterliegt.
Bei einem neuen bewegten Bild-Bereich dieses Muster wiederholen, nicht weglassen.

## Datenschema (`src/data/countries/<id>.js`)

| Feld | Typ | Beschreibung |
|---|---|---|
| `id` | string | URL-Segment, z. B. `'senegal'` |
| `name`, `nameEn` | string | Anzeigename DE/EN |
| `tagline` | string | Ein Werbeslogan-Satz |
| `status` | `'active' \| 'coming-soon'` | Steuert Klickbarkeit auf der Landing Page |
| `flagImage`, `heroImage` | `{src, alt, credit}` | Immer dieses dreiteilige Bild-Schema |
| `heroSlides[]` (optional) | `{src, alt, credit, effect?: 'clouds' \| 'stars'}` | Rotierende Hero-Diashow statt `heroImage`; `effect` nur bei Himmel-Motiven sinnvoll |
| `theme` | `{primary, secondary, accent, surface, fontHeading?, fontBody?, googleFontUrl?}` | Landestypische Optik — siehe eigener Abschnitt unten |
| `facts` | `{capital, capitalImage, capitalPopulation, population, government, officialLanguages[], currencyCode, currencyName, eurExchangeRate, area, areaComparison, timezone, capitalCoords, neighbors[], localTimeSystem?}` | Kernfakten, siehe Hinweise unten |
| `phrasebook` | `{languageName, sourceNote, categories: [{title, phrases: [{de, local, phonetic, note?}]}]}` | Mini-Sprachführer, siehe Hinweise unten |
| `history[]` | `{year, event}` — 5-8 Einträge, umgekehrt chronologisch (neuestes zuerst) | Historische Eckdaten, steht neben `facts.neighbors` (beide span 3) |
| `map` | `{center: {lat, lon}, zoom, cities: [{name, lat, lon, capital?}]}` | Siehe Kartenkonvention |
| `videos[]` | `{title, url, type}` | Dokumentationen/Reisevideos |
| `movies[]` | `{title, year, note, url, image}` | Filme mit Landesbezug; `image` zeigt echten Drehort/Schauplatz (keine Filmposter — urheberrechtlich nicht frei) |
| `dishes[]` | `{id, name, shortDesc, image, recipe: {ingredients[], steps[], image}}` | Gerichte + Rezepte |
| `dishesTeaser` (optional) | string | Überschreibt den generischen Gerichte-Section-Teaser aus `CountryPage.jsx` — nur bei einem landestypischen, ehrlichen Hinweis nutzen (Beispiel: Äthiopien weist auf die Überschneidung mit der eritreischen Küche hin) |
| `restaurantsHamburg[]` | `{name, address, url, image, visitNote?, menuHighlights?: [{name, price, desc}]}` | Landestypische Hamburg-Restaurants; Foto öffnet per Klick `url` (siehe "Bild-Interaktions-Konvention"). `menuHighlights` optional, in verschachteltem `Collapsible`, standardmäßig unter "Speisekarte anzeigen" — ist zusätzlich `visitNote` gesetzt (ein persönlicher "Am x probiert"-Vermerk), wird dessen Text stattdessen als Toggle-Beschriftung verwendet. Findet sich recherchiert **kein** echtes Restaurant, Array leer lassen — `RestaurantList` zeigt dann automatisch einen ehrlichen Hinweistext statt eines leeren Rasters oder eines erfundenen Eintrags |
| `destinations[]` | `{name, desc, image}` | Reiseziele im Land — auch abseits klassischer Sightseeing-Ziele: z. B. eine für Reisende zugängliche Sport-/Freizeitaktivität oder ein Museum passen gut dazu |
| `flights` | `{fromCity, routes: [{airline, via, durationApprox, bookingNote, url}]}` | Anreise ab Hamburg; `url` verlinkt die offizielle Airline-Seite |
| `famousPeople` | `{historical[], contemporary[]}` je `{name, years\|profession, desc, image}` | Persönlichkeiten |
| `playlists[]` | `{title, spotifyUrl, embedUrl}` — **genau 3** | Musik |
| `eventsHamburg[]` / `eventsCountry[]` | `{name, when, location, desc, url?}` | Echte, wiederkehrende Veranstaltungen mit Landesbezug — in Hamburg bzw. im Land selbst, siehe Hinweise unten |
| `communitiesHamburg[]` | `{name, city, desc, eventsNote?, email?, phone?, url?}` | Vereine/Communities mit Wurzeln im Land, aktiv in Hamburg — siehe Hinweise unten |
| `quiz[]` | `{question, options[], correctIndex, explanation}` | Nur Multiple Choice, keine Texteingabe. Der Pool darf auch mehr als 8 Fragen enthalten — `Quiz` wählt daraus pro Seitenaufruf zufällig 8 aus (siehe unten) |
| `voices[]` (optional) | `{role: 'traveler'\|'local'\|'hamburg', text, name?, place?}` | Redaktionell kuratierte Besucher-Stimmen für `VoicesTile` — siehe Hinweise unten. Array darf leer sein/fehlen |

Hinweise zu den besonderen `facts`-Feldern:
- `capitalImage` treibt den bewegten Foto-Hintergrund der Hauptstadt-Kachel (`CapitalTile`) —
  gleiches Ken-Burns-Prinzip wie Hero-Bild und Landing-Karte.
- `capitalPopulation` ist die Einwohnerzahl der Hauptstadt selbst (Stadtgebiet, nicht
  Agglomeration/Metropolregion — bei der Recherche auf diese Unterscheidung achten, die Werte
  können stark auseinanderliegen), im selben Format wie `population` (`'≈516.000'`/`'≈1,3 Mio.'`,
  ohne Quellenklammer im Text). Wird klein unter dem Stadtnamen in `CapitalTile` angezeigt.
- `timezone` ist die **IANA-Zeitzone der Hauptstadt** (z. B. `'Africa/Dakar'`), keine
  UTC-Kurzform — sie treibt die Live-Uhr (`ClockTile`). Hamburg selbst ist dort als feste
  Konstante (`src/utils/constants.js`) hinterlegt, nicht als Datenfeld.
- `eurExchangeRate` ist ein recherchierter Richtwert (1 EUR = X Landeswährung), keine Live-API-
  Anbindung — treibt den interaktiven Währungsrechner (`CurrencyConverter`). Bei jeder
  Neuanlage/Aktualisierung aktuell recherchieren, nicht raten. `currencyName` (ausgeschriebener
  Name der Währung, z. B. `'Marokkanischer Dirham'`) wird dort als kleine Notiz unter der
  Kachel-Überschrift angezeigt, `currencyCode` (z. B. `'MAD'`) im Ergebnis des Rechners —
  beide zusammen ausfüllen, nicht nur den Code.
- `areaComparison` ist ein verifizierter Größenvergleich mit einem bekannten Land ähnlicher
  Fläche, z. B. `'etwa so groß wie Schweden'` — Flächenwerte vorher recherchieren, nicht
  schätzen.
- `capitalCoords` (`{lat, lon}` in Dezimalgrad) treibt sowohl die Sonnenauf-/-untergangszeiten in
  `ClockTile` (clientseitig über `src/utils/sunTimes.js`, keine externe API) als auch das
  aktuelle Wetter in `WeatherTile` (siehe unten).
- `localTimeSystem` (optional, `{label, offsetHours, note?, travelTip?, calendar?}`) — nur für
  Länder mit einer traditionellen, vom internationalen 24h-Format abweichenden Tageszählung
  befüllen (Beispiel: die äthiopische Zeitrechnung beginnt den Tag bei Sonnenaufgang ≈ 6 Uhr
  statt um Mitternacht, ein eigener 12h-Zyklus). Treibt zwei eigene, separate Kacheln,
  `LocalTimeTile` und `LocalCalendarTile` (siehe Komponenten-Referenz) — **nicht** `ClockTile`,
  der bleibt für jedes Land bewusst einfach (nur Hamburg + Hauptstadt in internationaler Zeit).
  Bewusst zwei schmale 2-Spalten-Kacheln statt einer breiten 4-Spalten-Kachel, damit das Layout
  auf schmalen Bildschirmen (Handy) nicht zusammenbricht. `offsetHours` ist die Verschiebung
  gegenüber der internationalen Uhrzeit der Hauptstadt (`facts.timezone`). `travelTip` erscheint
  nicht mehr als Dauertext, sondern hinter einem kleinen "i"-Info-Button neben der Uhrzeit
  (`InfoPopover`, siehe unten) — Klick öffnet ein Popup mit dem Text. `calendar` (optional,
  `{label, headline, description}`) treibt die zweite Kachel, falls das Land zusätzlich einen
  vom gregorianischen Kalender abweichenden Kalender verwendet (Beispiel: der äthiopische
  Kalender mit 13 Monaten). Für die meisten
  Länder bleibt `localTimeSystem` einfach weg, kein Pflichtfeld.

`WeatherTile` ist die einzige Komponente mit einer echten externen Netzwerkabhängigkeit: sie holt
Temperatur/Niederschlag/Luftfeuchtigkeit/Wetterlage für Hamburg und die Hauptstadt live von der
kostenlosen [Open-Meteo](https://open-meteo.com) API (kein API-Key, CORS-freundlich, direkt aus
dem Browser aufrufbar — kein eigenes Backend nötig). Aktualisiert sich alle 15 Minuten; schlägt
der Fetch fehl, zeigt die Kachel einen ruhigen Hinweistext statt einer kaputten UI. Das ist eine
bewusste, minimale Ausnahme vom "kein Backend"-Grundsatz — es bleibt bei einem reinen
Browser-`fetch`, keinem eigenen Server.

`phrasebook` bildet die im Alltag gesprochene Landessprache ab, nicht zwingend die (ggf.
mehreren) Amtssprache(n) aus `facts.officialLanguages` — bei Marokko z. B. marokkanisches
Arabisch (Darija) statt Hocharabisch, weil das im Alltag/auf Reisen tatsächlich zu hören ist.
Vor dem Befüllen recherchieren, welche Alltagssprache für Reisende relevant ist, und
`sourceNote` nutzen, um auf Besonderheiten hinzuweisen (z. B. fehlende standardisierte
Schreibweise, fehlende Sie/du-Unterscheidung). Übersetzungen und Umschrift immer recherchieren,
nicht selbst konstruieren. `PhrasebookTile` ist bewusst als scrollbare Liste in einer 2 Spalten
breiten, aber normal hohen Kachel gebaut (`.phrasebook-scroll` mit `max-height`), damit eine
lange Wortliste nicht die ganze Grid-Zeile aufbläht. `languageName` wird zusätzlich klein und
dezent oben rechts in der Kachel eingeblendet (`.phrasebook-lang-label`), damit auf einen Blick
klar ist, welche Sprache gerade gezeigt wird, ohne eine eigene Überschriftszeile zu verbrauchen.

`eventsHamburg`/`eventsCountry` listen echte, wiederkehrende Veranstaltungen mit Landesbezug —
`eventsHamburg` typischerweise die Feste der Vereine aus `communitiesHamburg` (Ramadan-Iftar,
Stammtische, Straßenfeste), `eventsCountry` bekannte Festivals/Events im Land selbst (Musik,
Film, Kunst, Sport). Termine sind Zeitpunkte, keine Fakten, die stabil bleiben — deshalb wo
möglich die Wiederkehr statt eines Einzeldatums angeben (`when: 'jährlich im Juni'`), ein
konkretes Datum nur, wenn für das laufende/nächste Jahr verifiziert. `EventsSection` rendert
beide Gruppen nebeneinander und zeigt pro Gruppe einen ehrlichen Hinweistext, wenn recherchiert
nichts Echtes gefunden wurde — nicht mit einem erfundenen Termin auffüllen. Die Section steht
direkt vor `communitiesHamburg` (siehe Reihenfolge in `CountryPage.jsx`).

`communitiesHamburg` listet echte Vereine/Kulturzentren/Communities mit Wurzeln im jeweiligen
Land, die in Hamburg aktiv sind — Anlaufstellen für Veranstaltungen oder Fragen direkt an
Menschen, die selbst aus dem Land stammen. Mindestens ein Kontaktweg (`email`, `phone` oder
`url`) sollte gesetzt sein, damit der Eintrag nutzbar ist. Findet sich recherchiert keine echte
Gruppe, das Array leer lassen statt eine plausibel klingende zu erfinden —
`CommunityGroups`/`CommunityCard` zeigen dann automatisch einen ehrlichen Hinweistext statt
eines leeren Kartenrasters, analog zu `restaurantsHamburg`. Die Section steht direkt vor dem
Quiz (siehe Reihenfolge in `CountryPage.jsx`).

`voices` ("Stimmen zum Land", `VoicesTile`) macht die Seite interaktiv, ohne den
"kein Backend"-Grundsatz zu verletzen: Besucher:innen wählen eine Rolle (war dort / kommt von
dort / lebt in Hamburg), schreiben einen kurzen Beitrag und speichern ihn — das landet
ausschließlich im `localStorage` des eigenen Browsers unter dem Key `voices:<countryId>`, wird
nicht an einen Server gesendet und bleibt beim nächsten Besuch derselben Seite im selben Browser
erhalten (editier-/löschbar, nicht mit anderen Besucher:innen geteilt). Die Daten-Datei liefert
optional zusätzlich `voices[]` als **redaktionell kuratierte**, für alle sichtbare Beiträge —
das ist der einzige Weg, wie ein einzelner Besucher-Beitrag zu echtem, geteiltem Inhalt wird:
gute lokale Beiträge manuell in die Länder-Datei übernehmen. Eine optionale
`EDITOR_EMAIL`-Konstante in `VoicesTile.jsx` (standardmäßig leer) blendet einen
"An die Redaktion senden"-Mailto-Link ein/aus — bewusst leer lassen, solange niemand
ausdrücklich eine öffentlich im Quellcode sichtbare Kontaktadresse dafür freigegeben hat.

## Farb-, Hintergrund- und Typografie-Konvention

**Jedes Land muss sich beim Durchklicken sichtbar anders anfühlen — nicht nur andersfarbig,
sondern auch in Stimmung, Hintergrund und Schriftbild.** Das ist genauso Pflicht wie korrekte
Fakten, kein optionales Polishing.

- `theme.primary` / `theme.secondary` / `theme.accent`: aus der Flagge und/oder markanten
  Landesfarben ableiten (nicht willkürlich). Werden für Buttons, Überschriften, Verläufe,
  Hauptstadt-Kartenmarker etc. verwendet — **niemals für Fließtext**, der nutzt immer die feste,
  neutrale `--color-text`-Variable, damit helle Flaggenfarben (Gelb, Hellgrün, …) nicht auf
  Kontrastprobleme laufen.
- `theme.surface`: treibt über `countryCSSVars()` direkt `--color-bg`, also den
  **Seitenhintergrund**. Das ist kein austauschbares Creme-Ton — bewusst wählen, ob das Land
  warm/sandig, kühl/tropisch-grün, hell oder gedeckt wirken soll. Karten (`--color-card-bg`)
  bleiben immer weiß, damit Inhalte lesbar bleiben; nur die Fläche darum herum trägt die
  Landesstimmung.
- `theme.fontHeading` / `theme.fontBody` (optional): vollständige CSS-`font-family`-Stacks
  **mit Fallbacks** (z. B. `"'Fraunces', Georgia, serif"`). Fehlen sie, erbt das Land automatisch
  den globalen Default aus `src/theme/theme.css` (Georgia-Serif + System-Sans) — das ist für ein
  erstes Land in Ordnung, aber für optische Unterscheidbarkeit sollte jedes weitere Land eine
  bewusst andere Schriftpaarung bekommen, passend zur Stimmung (verspielt/warm, klassisch/edel,
  kräftig/zeitgenössisch, …), nicht zufällig.
- `theme.googleFontUrl` (optional, nur zusammen mit `fontHeading`/`fontBody`): die passende
  `https://fonts.googleapis.com/css2?family=...&display=swap`-URL. **Vor dem Eintragen mit
  `curl -o /dev/null -w "%{http_code}" "<url>"` auf 200 prüfen.** Wird von `GoogleFontLoader`
  (in `CountryPage`) nur für das gerade aktive Land per `<link>`-Tag nachgeladen und beim
  Verlassen der Seite wieder entfernt — andere Länder laden dadurch keine fremden Schriftarten
  mit.
- Kein Land sollte zufällig dieselbe Farb-/Font-Kombination wie ein Nachbarland/bereits
  bestehendes Land bekommen — kurz die anderen `src/data/countries/*.js`-Dateien querlesen, um
  Dopplungen zu vermeiden.

## Komponenten-Referenz

| Komponente | Zuständigkeit |
|---|---|
| `Section` (`shared/`) | Überschrift + 1-2 Sätze Teaser + Toggle (Default-Label "Details anzeigen"/"Details schließen", per `openLabel`/`closeLabel` überschreibbar, z. B. für die Landing Page), umschließt `Collapsible` |
| `Collapsible` (`shared/`) | framer-motion Höhen-/Opacity-Animation, per Default zugeklappt |
| `ImageWithFallback` (`shared/`) | `<img>` mit `onError` → themafarbener Platzhalter |
| `Card` (`shared/`) | Generische Bild+Titel+Text-Karte, Basis für Gerichte/Reiseziele/Filme/Restaurants/Personen. Optionales `imageAction`-Prop macht das Foto selbst zum Interaktionselement (Hover-Zoom + Overlay-Label) — siehe "Bild-Interaktions-Konvention" unten |
| `FlagBadge` (`shared/`) | Kleines Flaggen-Icon (abgerundete Ecken), z. B. im `SiteHeader` |
| `GoogleFontLoader` (`shared/`) | Lädt `theme.googleFontUrl` nur für das aktive Land, räumt beim Unmount auf |
| `InfoPopover` (`shared/`) | Kleiner "i"-Button, öffnet bei Klick ein zentriertes Popup (Backdrop + Karte, schließbar per Klick daneben oder ×) mit beliebigem Zusatztext — generisch, nicht auf Äthiopien beschränkt |
| `SiteHeader` (`layout/`) | Sticky Kopfzeile. Auf der Länderseite zeigt sie Flagge + Landesname (`FlagBadge`) statt des generischen "🌍 Virtuelle Afrikareise"-Titels, plus "← Übersicht"-Link zurück zur Landing Page |
| `MosaicHero` (`landing/`) | Vollflächiger Startseiten-Header: 500 prozedural generierte Farb-/Muster-Kacheln (kein Foto, keine Recherche nötig) hinter Eyebrow/H1/Lede/CTA-Link zu `/morocco`; eigenes Fraunces/Inter-Fontpaar per `GoogleFontLoader`, respektiert `prefers-reduced-motion` (Kachel-Einblendung entfällt dann) |
| `CountryGrid` / `CountryCard` (`landing/`) | Kachel-Raster der Startseite, aktive Karten mit bewegtem Foto + eigenem Theme |
| `CountryHero` / `FactGrid` | Immer sichtbarer "Broschüren-Umschlag", NICHT in `Section` gewrappt. `CountryHero` rotiert `heroSlides` mit Punkt-Navigation, Ken-Burns-Bewegung je Foto, optionalen Wolken-/Sternen-Overlays und einem "Quiz starten"-Link |
| `CapitalTile` (`country/`) | Hauptstadt-Kachel mit bewegtem Foto-Hintergrund (Ken Burns), zeigt optional `facts.capitalPopulation` als kleine Einwohner:innen-Angabe unter dem Stadtnamen. Wächst automatisch über zwei Grid-Zeilen (`grid-row: span 2`), sobald `facts.localTimeSystem` gesetzt ist — kein eigenes Datenfeld nötig, das ist an dieselbe Bedingung wie `LocalTimeTile`/`LocalCalendarTile` gekoppelt |
| `ClockTile` (`country/`) | Live-Uhr Hamburg + Hauptstadt, sekündlich aktualisiert, inkl. Sonnenauf-/-untergang — bewusst immer nur diese zwei Blöcke, für jedes Land identisch |
| `LocalTimeTile` (`country/`) | Eigene, optionale 2-Spalten-Kachel für `facts.localTimeSystem` (traditionelle, vom internationalen 24h-Format abweichende Tageszählung, z. B. Äthiopien): Lokalzeit + Label + Hinweis; `travelTip` sitzt hinter einem `InfoPopover`-Button neben der Uhrzeit statt als Dauertext. Rendert `null`, wenn `facts.localTimeSystem` fehlt |
| `LocalCalendarTile` (`country/`) | Eigene, optionale 2-Spalten-Kachel für `facts.localTimeSystem.calendar` (z. B. der äthiopische 13-Monats-Kalender), steht direkt neben `LocalTimeTile`. Rendert `null`, wenn `calendar` fehlt |
| `WeatherTile` (`country/`) | Aktuelles Wetter Hamburg + Hauptstadt via Open-Meteo, alle 15 Min. aktualisiert |
| `CurrencyConverter` (`country/`) | Interaktiver, **bidirektionaler** EUR-Rechner auf Basis von `eurExchangeRate` — beide Felder (EUR und Landeswährung) sind editierbar, Eingabe in einem Feld rechnet live das jeweils andere um |
| `PhrasebookTile` (`country/`) | Scrollbarer Mini-Sprachführer (Alltagssprache), 2 Spalten breit |
| `HistoryTile` (`country/`) | Scrollbare Zeitleiste (`history[]`), 3 Spalten breit, steht neben Nachbarländer (ebenfalls 3 Spalten) |
| `NeighborsHistoryGrid` (`country/`) | Zweiter `.fact-grid`-Block (Nachbarländer + `HistoryTile`) |
| `MapSection` (`country/`) | Echte OpenStreetMap-Karte (Leaflet), vollständig datengetrieben |
| `VideoLinks` / `VideoCard` (`country/`) | Videos + Filme in einem gemeinsamen Grid (kein separates Gruppen-Label); `VideoCard` spielt YouTube-Videos per Klick **in place** ab (kein Verlassen der Seite) statt nur zu verlinken |
| `DishGrid` / `DishCard` (`country/`) | Bild + Kurzbeschreibung immer sichtbar; Rezept öffnet nicht über einen Text-Button, sondern per Klick auf das animierte Foto selbst (`imageAction`, Hover-Zoom + Overlay-Label "Rezept anzeigen"/"Rezept schließen") |
| `RestaurantList` / `RestaurantCard` (`country/`) | Adresse immer sichtbar; Klick auf das animierte Foto öffnet die Restaurant-Website in neuem Tab (`imageAction`, Overlay-Label "Website öffnen") statt eines Text-Links; `menuHighlights` optional in verschachteltem `Collapsible` — der Toggle-Text ist standardmäßig "Speisekarte anzeigen", ist aber `visitNote` gesetzt, wird stattdessen dessen Text (z. B. "Am 1.8.2026 probiert: …") als Toggle-Beschriftung verwendet; bei leerem `restaurantsHamburg[]` ehrlicher Hinweistext statt leerem Raster |
| `DestinationGrid` (`country/`) | Kartenraster für Reiseziele (nutzt `Card`) |
| `FlightInfo` (`country/`) | Tabelle der Flugverbindungen, Airline-Name verlinkt zur offiziellen Seite |
| `FamousPeople` / `PersonCard` (`country/`) | Historisch/zeitgenössisch getrennt gruppiert |
| `SpotifyEmbeds` (`country/`) | 3 kompakte Spotify-Player (Embed-Höhe 152px = ohne Songliste, nur Cover + Steuerung) |
| `EventsSection` / `EventCard` (`country/`) | Zwei Gruppen ("In Hamburg" / "In `<Land>`") mit `eventsHamburg[]`/`eventsCountry[]`; steht vor `CommunityGroups`; bei leerem Array pro Gruppe ehrlicher Hinweistext statt leerem Raster |
| `CommunityGroups` / `CommunityCard` (`country/`) | Vereine/Communities mit Wurzeln im Land, aktiv in Hamburg; Kontaktwege als `mailto:`/`tel:`/Website-Links; bei leerem `communitiesHamburg[]` ehrlicher Hinweistext statt leerem Raster |
| `VoicesTile` (`country/`) | "Stimmen zum Land": kuratierte `voices[]` (für alle sichtbar) + eigene Beiträge im `localStorage` des Browsers (nur lokal, bleiben beim Wiederkommen erhalten, editier-/löschbar); steht vor dem Quiz. Kein Backend, keine geteilte Datenbank — siehe Hinweise unten |
| `Quiz` / `QuizQuestion` / `QuizResult` (`country/`) | Eine Frage auf einmal, Multiple Choice, Sperre nach Auswahl, Erklärung, Score + Retry. Wählt aus `quiz[]` per `pickRandomQuestions` (`src/utils/quiz.js`) zufällig **8** Fragen aus, gemischt bei jedem Seitenaufruf/Mount, aber stabil über „Retry“ hinweg innerhalb desselben Besuchs. Hat ein Land 8 oder weniger Fragen, ändert sich nichts (nur Fragen mit größerem Pool profitieren) |

## UX-Regel

Jeder Inhaltsabschnitt folgt dem Muster: **Überschrift → 1-2 Sätze Teaser → Details-Panel.**
Nutzer:innen werden über Überschriften und Bilder geführt, nicht über Textwände. `Section`/
`Collapsible` ist das einzige zulässige Muster dafür — nicht duplizieren, nicht durch einfaches
`<details>` oder eigene Zustandslogik ersetzen. `CountryHero` und `FactGrid` sind immer sichtbar
("Cover", nicht in `Section` gewrappt); die verschachtelten Toggles in `DishCard` (Rezept) und
`RestaurantCard` (Speisekarte bzw. Website) folgen dem gleichen Prinzip eine Ebene tiefer —
dort per Klick auf das animierte Foto statt auf einen separaten Text-Button (siehe
"Bild-Interaktions-Konvention" unten).

Ob ein Abschnitt per `defaultOpen` sofort offen startet, ist eine bewusste redaktionelle
Entscheidung pro Land, kein technisches Detail — für ein neues Land selbst entscheiden, welche
Abschnitte den stärksten "Sofort-Eindruck" liefern sollen, statt pauschal alles zuzuklappen oder
zu öffnen.

Der Toggle-Button (`.details-toggle`, `.recipe-toggle`) ist bewusst als dezenter Text-Link mit
Chevron gestaltet, nicht als Pillen-Button mit Rahmen — zurückhaltend, mit
Unterstreich-Animation beim Hover statt Farbfläche. Bei neuen Toggle-Elementen an diesem Stil
orientieren, nicht an auffälligen Buttons.

### Bild-Interaktions-Konvention

Wo ein Foto selbst der naheliegende Auslöser für eine Aktion ist (Rezept eines Gerichts
anzeigen, Website eines Restaurants öffnen), wird **kein zusätzlicher Text-Button neben dem
Bild** platziert — stattdessen macht `Card`s optionales `imageAction`-Prop das Foto selbst
klickbar: Hover/Focus zoomt das Bild sanft (`.card-image-action` in `App.css`) und blendet ein
Overlay mit kurzer Beschriftung ein (`.card-image-overlay-label`, z. B. "Rezept anzeigen" oder
"Website öffnen"). `imageAction` unterscheidet zwei Modi:
- `toggle: true` (z. B. `DishCard`) — klappt einen lokalen `Collapsible`-Bereich auf/zu, Label
  wechselt zwischen `label` und `activeLabel` je nach Zustand.
- `toggle: false` (z. B. `RestaurantCard`) — löst eine einmalige Aktion aus, z. B.
  `window.open(url, '_blank', 'noopener,noreferrer')`, kein Auf-/Zuklapp-Zustand.

Das ist eine zweite, bewusst andere Interaktionsform als der Text-Link-Toggle
(`.details-toggle`/`.recipe-toggle`) oben — beide sind zulässig, je nachdem ob ein Bild als
natürlicher Auslöser vorhanden ist (dann Bild-Interaktion) oder nicht (dann Text-Toggle). Neue
Karten mit Bild und einer einzigen klaren Aktion sollten `imageAction` verwenden statt einen
weiteren Text-Button daneben zu setzen.

Bewegte Bildbereiche (Hero, Landing-Karte, Hauptstadt-Kachel) respektieren durchgehend
`prefers-reduced-motion` (via framer-motions `useReducedMotion()`) — bei aktivierter
Einstellung bleibt das jeweils erste/aktuelle Bild einfach statisch stehen, keine
Ken-Burns-Bewegung, kein automatischer Hero-Folienwechsel.

## Kartenkonvention

Echte interaktive Karte über [Leaflet](https://leafletjs.com) + OpenStreetMap-Tiles (kostenlos,
kein API-Key, Attribution-Pflicht wird in `MapSection` bereits gerendert). Kein `react-leaflet`
als zusätzliche Abstraktionsschicht — `MapSection` initialisiert Leaflet direkt per `useEffect`
+ Ref, das reicht für den reinen Anzeige-Anwendungsfall.

- `map.center` / `map.zoom`: so wählen, dass das Land vollständig sichtbar ist; ein niedriger
  Zoom (~5) sorgt dafür, dass Nachbarländer automatisch nur als Randstreifen hereinragen — ganz
  ohne manuelles Clipping.
- `map.cities[]`: echte, recherchierte `{lat, lon}`-Koordinaten (keine Näherung) je wichtiger
  Stadt; `capital: true` bekommt einen größeren, eigenen Marker in `theme.accent`-Farbe.
- Marker nutzen `L.divIcon` (kein Bild-Icon-Pfad-Ärger mit Vite) und ein Tooltip mit
  `permanent: true`, damit Städtenamen dauerhaft sichtbar sind, nicht erst bei Hover.

`MapSection` ist vollständig generisch — für ein neues Land wird dort nichts verändert, nur
`map.center`/`map.zoom`/`map.cities` in der Länder-Datei neu befüllt.

## SEO & Crawler-Sichtbarkeit

- `src/components/shared/PageMeta.jsx` setzt pro Route imperativ (gleiches Muster wie
  `GoogleFontLoader`) `document.title`, `<meta name="description">`, `<link rel="canonical">`,
  Open-Graph-/Twitter-Tags und ein `<script type="application/ld+json">`. Eingebunden in
  `LandingPage.jsx` (Website-weite Werte + `WebSite`-JSON-LD) und `CountryPage.jsx`
  (länderspezifisch: Titel `"<Land> | Virtuelle Afrikareise"`, generierte Description aus
  `tagline`, OG-Bild aus `heroSlides[0]`/`heroImage`, `TouristDestination` + ein `Recipe`-Eintrag
  je `dishes[]` als JSON-LD — Letzteres macht Google-Rich-Snippets für Rezepte möglich).
  Description/Bild/JSON-LD werden aus `src/utils/seo.js` gebaut, nicht per Hand pro Land
  gepflegt — bei neuen Datenfeldern in `dishes[]`/`facts` ggf. dort mit anpassen.
- **Wichtige Grenze**: `PageMeta` ändert den `<head>` erst nach dem React-Mount per JavaScript.
  Das reicht für Google (rendert JS, nur zeitversetzt) und für die meisten echten Nutzer:innen,
  **aber nicht** für Crawler, die kein JavaScript ausführen — dazu zählen praktisch alle
  Social-Media-Linkvorschauen (WhatsApp, Twitter/X, LinkedIn, Facebook) und die meisten
  KI-Suchcrawler (Perplexity, ChatGPT, Claude). Für die liefert der Server nur das leere
  `#root`-Div von `index.html` plus die dort hinterlegten **statischen Startseiten-Defaults**
  (siehe `index.html`-Kopf) — Unterseiten wie `/senegal` sehen für solche Crawler identisch zur
  Startseite aus, mit Startseiten-Titel/-Bild/-Description statt der länderspezifischen Werte.
  Der einzige vollständige Fix dafür wäre serverseitiges Rendering oder Prerendering/SSG (z. B.
  über einen zusätzlichen Build-Schritt, der jede Route einmal rendert und als statisches HTML
  ablegt) — das ist eine bewusste, noch nicht getroffene Architekturentscheidung, kein Bug, und
  wurde bisher nicht umgesetzt, um die Vite-SPA-Einfachheit des Projekts nicht ungefragt durch
  ein neues Build-/Deploy-Werkzeug zu ersetzen.
- `public/robots.txt` verweist auf `/sitemap.xml`. `scripts/generate-sitemap.js` erzeugt
  `dist/sitemap.xml` automatisch nach jedem `npm run build` (per `postbuild`-Script) aus den
  `status: 'active'`-Einträgen in `src/data/countries.js` — bei einem neuen Land also keine
  dritte Stelle, die manuell gepflegt werden müsste.
