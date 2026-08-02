import MosaicHero from '../components/landing/MosaicHero.jsx';
import CountryGrid from '../components/landing/CountryGrid.jsx';
import Section from '../components/shared/Section.jsx';
import GoogleFontLoader from '../components/shared/GoogleFontLoader.jsx';
import PageMeta, { SITE_NAME, SITE_URL } from '../components/shared/PageMeta.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import { countries } from '../data/countries.js';

const MOSAIC_HERO_FONTS =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,600;9..144,900&family=Inter:wght@400;500;600&display=swap";

const SITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'Entdecke Afrika von zuhause aus: Länder, Kultur, Küche, Reiseziele und mehr.',
  inLanguage: 'de',
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <PageMeta
        description="Entdecke Länder, Kulturen, Küchen und Geschichten Afrikas — ganz ohne Koffer zu packen. Fakten, Rezepte, Musik, Sprachführer und mehr, Land für Land."
        path="/"
        image="https://commons.wikimedia.org/wiki/Special:FilePath/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG"
        jsonLd={SITE_JSON_LD}
      />
      <GoogleFontLoader href={MOSAIC_HERO_FONTS} />
      <MosaicHero />

      <Section
        className="landing-about"
        openLabel="Mehr über die Reise"
        closeLabel="Weniger anzeigen"
      >
        <p>Jedes Land wird hier zu einem kleinen Erlebnis mit vier Türen:</p>
        <ul className="landing-hero-features">
          <li>
            <strong>Sehen</strong> — Videos, die dich mitten hineinnehmen: Landschaften, Städte,
            Alltag.
          </li>
          <li>
            <strong>Hören</strong> — eine Playlist mit der Musik des Landes, von traditionell bis
            modern.
          </li>
          <li>
            <strong>Schmecken</strong> — und wo es in Hamburg ein Restaurant gibt, das die Küche
            wirklich kann, ist es direkt verlinkt.
          </li>
          <li>
            <strong>Verbinden</strong> — Vereine und Communities in Hamburg, falls du tiefer
            eintauchen oder echte Menschen von dort treffen willst.
          </li>
        </ul>
        <p>
          Kein Reiseführer, der alles besser weiß. Sondern eine echte Frage: Was gibt es hier zu
          entdecken, das ich vorher nicht wusste?
        </p>
      </Section>

      <CountryGrid countries={countries} />
      <SiteFooter />
    </div>
  );
}
