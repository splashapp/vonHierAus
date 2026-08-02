// Erzeugt dist/sitemap.xml nach dem Build aus den aktiven Ländern in src/data/countries.js —
// läuft automatisch über den "postbuild"-Script-Hook in package.json, kein manuelles Pflegen
// einer dritten Länderliste nötig.
import { writeFileSync } from 'node:fs';
import { countries } from '../src/data/countries.js';

const SITE_URL = 'https://von-hier-aus.vercel.app';

const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0' },
  ...countries
    .filter((c) => c.status === 'active')
    .map((c) => ({ loc: `${SITE_URL}/${c.id}`, priority: '0.8' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`;

writeFileSync(new URL('../dist/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml geschrieben mit ${urls.length} URLs`);
