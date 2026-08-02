import { useEffect } from 'react';

export const SITE_NAME = 'Virtuelle Afrikareise';
export const SITE_URL = 'https://von-hier-aus.vercel.app';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// Setzt Titel, Description, Canonical, Open Graph/Twitter-Tags und optional JSON-LD
// Structured Data pro Route imperativ im <head> (gleiches Muster wie GoogleFontLoader) —
// funktioniert zuverlässig für Google (rendert JS, nur zeitversetzt), NICHT aber für
// Crawler ohne JS-Ausführung (Social-Media-Linkvorschauen, KI-Suchcrawler). Für die sieht
// die Seite weiterhin leer aus, solange es kein SSR/Prerendering gibt — siehe CLAUDE.md.
export default function PageMeta({ title, description, path, image, jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'de_DE');
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    upsertJsonLd('page-jsonld', jsonLd);
  }, [title, description, path, image, jsonLd]);

  return null;
}
