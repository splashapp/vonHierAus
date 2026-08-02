// Lazy-Loader für vollständig ausgebaute Länder (status: 'active' in countries.js).
// Jeder Eintrag ist ein dynamic import() statt eines statischen Imports — Vite packt jede
// Länder-Datei dadurch in einen eigenen Chunk, der erst beim Besuch von /:countryId
// nachgeladen wird. So bleibt das initiale JS-Bundle unabhängig von der Anzahl der Länder
// klein, statt mit jedem neuen Land automatisch mitzuwachsen (siehe CountryPage.jsx).
// Neues Land: hier eine neue Loader-Funktion eintragen.
export const countryLoaders = {
  morocco: () => import('./morocco.js'),
  senegal: () => import('./senegal.js'),
  ethiopia: () => import('./ethiopia.js'),
};
