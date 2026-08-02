import { useParams, Navigate } from 'react-router-dom';
import { countryRegistry } from '../data/countries/index.js';
import { countryCSSVars } from '../utils/theme.js';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import Section from '../components/shared/Section.jsx';
import GoogleFontLoader from '../components/shared/GoogleFontLoader.jsx';
import CountryHero from '../components/country/CountryHero.jsx';
import FactGrid from '../components/country/FactGrid.jsx';
import NeighborsHistoryGrid from '../components/country/NeighborsHistoryGrid.jsx';
import MapSection from '../components/country/MapSection.jsx';
import VideoLinks from '../components/country/VideoLinks.jsx';
import DishGrid from '../components/country/DishGrid.jsx';
import RestaurantList from '../components/country/RestaurantList.jsx';
import DestinationGrid from '../components/country/DestinationGrid.jsx';
import FlightInfo from '../components/country/FlightInfo.jsx';
import FamousPeople from '../components/country/FamousPeople.jsx';
import SpotifyEmbeds from '../components/country/SpotifyEmbeds.jsx';
import EventsSection from '../components/country/EventsSection.jsx';
import CommunityGroups from '../components/country/CommunityGroups.jsx';
import VoicesTile from '../components/country/VoicesTile.jsx';
import Quiz from '../components/country/Quiz.jsx';

export default function CountryPage() {
  const { countryId } = useParams();
  const data = countryRegistry[countryId];

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="country-page" style={countryCSSVars(data.theme)}>
      <GoogleFontLoader href={data.theme.googleFontUrl} />
      <SiteHeader flagImage={data.flagImage} name={data.name} />
      <CountryHero data={data} />
      <FactGrid facts={data.facts} phrasebook={data.phrasebook} />

      <Section teaser="Die schönsten Orte für den nächsten Urlaub." defaultOpen>
        <DestinationGrid destinations={data.destinations} />
      </Section>

      <NeighborsHistoryGrid neighbors={data.facts.neighbors} history={data.history} />

      <Section
        title="Karte & wichtige Städte"
        teaser={`Ein Überblick über ${data.name} und seine wichtigsten Städte – die Nachbarländer sind nur angeschnitten zu sehen.`}
      >
        <MapSection map={data.map} countryName={data.name} />
      </Section>

      <Section title="Berühmte Persönlichkeiten" teaser="Menschen, die das Land geprägt haben und prägen.">
        <FamousPeople people={data.famousPeople} />
      </Section>

      <Section
        title="Gerichte & Rezepte"
        teaser="Die kulinarischen Highlights des Landes – zum Nachkochen."
        defaultOpen
      >
        <DishGrid dishes={data.dishes} />
      </Section>

      <Section
        title={`${data.name}-Restaurants in Hamburg`}
        teaser="So schmeckt das Land, auch ohne Flugticket."
        defaultOpen
      >
        <RestaurantList restaurants={data.restaurantsHamburg} countryName={data.name} />
      </Section>

      <Section title="Filme & Videos" teaser="Tauche schon vorab audiovisuell in das Land ein.">
        <VideoLinks videos={data.videos} movies={data.movies} />
      </Section>

      <Section
        title="Musik-Playlists"
        teaser="Der passende Soundtrack für deine virtuelle Reise."
        defaultOpen
      >
        <SpotifyEmbeds playlists={data.playlists} />
      </Section>

      <Section title="Anreise ab Hamburg" teaser="So kommst du von Hamburg aus am schnellsten hin.">
        <FlightInfo flights={data.flights} />
      </Section>

      <Section
        title={`${data.name}-Veranstaltungen`}
        teaser={`Feste, Festivals und Termine – in Hamburg und in ${data.name} selbst.`}
      >
        <EventsSection
          hamburgEvents={data.eventsHamburg}
          countryEvents={data.eventsCountry}
          countryName={data.name}
        />
      </Section>

      <Section
        title={`${data.name}-Verbände & Gruppen in Hamburg`}
        teaser="Vereine und Communities mit Wurzeln im Land – für Veranstaltungen oder Fragen direkt an Menschen von dort."
      >
        <CommunityGroups groups={data.communitiesHamburg} countryName={data.name} />
      </Section>

      <VoicesTile countryId={data.id} countryName={data.name} voices={data.voices} />

      <Section title="Quiz" teaser="Teste dein Wissen über das Land!" defaultOpen anchorId="quiz">
        <Quiz questions={data.quiz} />
      </Section>

      <SiteFooter />
    </div>
  );
}
