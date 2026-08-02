import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TILE_COUNT = 500;
const PALETTE_VARS = ['--c1', '--c2', '--c3', '--c4', '--c5', '--c6', '--c7', '--c8', '--c9', '--c10'];
const PATTERN_KINDS = ['tri', 'zig', 'dot', 'bar', 'dia'];

function patternSVG(fg, bg, kind) {
  const shapes = {
    tri: `<path d='M0 24 L12 0 L24 24 Z' fill='${fg}'/>`,
    zig: `<path d='M0 8 L6 2 L12 8 L18 2 L24 8' stroke='${fg}' stroke-width='2.4' fill='none'/><path d='M0 18 L6 12 L12 18 L18 12 L24 18' stroke='${fg}' stroke-width='2.4' fill='none'/>`,
    dot: `<circle cx='12' cy='12' r='6' fill='${fg}'/>`,
    bar: `<rect x='0' y='0' width='24' height='8' fill='${fg}'/><rect x='0' y='16' width='24' height='8' fill='${fg}'/>`,
    dia: `<path d='M12 2 L22 12 L12 22 L2 12 Z' fill='none' stroke='${fg}' stroke-width='2.6'/>`,
  };
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><rect width='24' height='24' fill='${bg}'/>${shapes[kind]}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export default function MosaicHero() {
  const mosaicRef = useRef(null);

  useEffect(() => {
    const mosaic = mosaicRef.current;
    if (!mosaic || mosaic.childElementCount > 0) return;

    const palette = PALETTE_VARS.map((v) => getComputedStyle(mosaic).getPropertyValue(v).trim());
    const frag = document.createDocumentFragment();

    for (let i = 0; i < TILE_COUNT; i++) {
      const tile = document.createElement('div');
      tile.className = 'mosaic-hero-tile';
      tile.style.animationDelay = `${(Math.random() * 0.9).toFixed(2)}s`;

      const base = palette[Math.floor(Math.random() * palette.length)];
      if (Math.random() < 0.32) {
        const fg = palette[Math.floor(Math.random() * palette.length)];
        const kind = PATTERN_KINDS[Math.floor(Math.random() * PATTERN_KINDS.length)];
        tile.style.backgroundImage = patternSVG(fg, base, kind);
        tile.style.backgroundSize = '46px 46px';
      } else {
        tile.style.background = base;
        tile.style.filter = `brightness(${(0.88 + Math.random() * 0.28).toFixed(2)})`;
      }
      frag.appendChild(tile);
    }
    mosaic.appendChild(frag);
  }, []);

  return (
    <header className="mosaic-hero">
      <div className="mosaic-hero-grid" ref={mosaicRef} aria-hidden="true" />
      <div className="mosaic-hero-scrim" />
      <div className="mosaic-hero-copy">
        <div className="mosaic-hero-eyebrow">Eine Reise durch 54 Länder</div>
        <h1>
          Afrika
          <br />
          <em>von hier aus</em>
        </h1>
        <p className="mosaic-hero-lede">
          Keine Kamera zeigt ganz Afrika. Zwischen den Dünen der Sahara und den Beats aus Lagos
          liegt eine Welt, die zu groß ist für ein einziges Bild.{' '}
          <strong>Diese Reise braucht keinen Koffer. Nur Neugier.</strong>
        </p>
        <Link className="mosaic-hero-start" to="/morocco">
          Erste Station: Marokko <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </header>
  );
}
