import CapitalTile from './CapitalTile.jsx';
import ClockTile from './ClockTile.jsx';
import WeatherTile from './WeatherTile.jsx';
import LocalTimeTile from './LocalTimeTile.jsx';
import LocalCalendarTile from './LocalCalendarTile.jsx';
import CurrencyConverter from './CurrencyConverter.jsx';
import PhrasebookTile from './PhrasebookTile.jsx';
import NoteTile from './NoteTile.jsx';

export default function FactGrid({ facts, phrasebook }) {
  if (!facts) return null;

  return (
    <div className="fact-grid">
      <CapitalTile
        capital={facts.capital}
        capitalImage={facts.capitalImage}
        capitalPopulation={facts.capitalPopulation}
        large={Boolean(facts.localTimeSystem)}
      />
      <ClockTile
        capital={facts.capital}
        capitalTimezone={facts.timezone}
        capitalCoords={facts.capitalCoords}
      />
      <WeatherTile capital={facts.capital} capitalCoords={facts.capitalCoords} />
      <LocalTimeTile localTimeSystem={facts.localTimeSystem} capitalTimezone={facts.timezone} />
      <LocalCalendarTile calendar={facts.localTimeSystem?.calendar} />

      {(facts.population || facts.area) && (
        <div className="fact-tile">
          {facts.population && (
            <div className="fact-combo-block">
              <div className="fact-tile-label">Bevölkerung</div>
              <div className="fact-tile-value">{facts.population}</div>
            </div>
          )}
          {facts.area && (
            <div className="fact-combo-block">
              <div className="fact-tile-value">{facts.area}</div>
              {facts.areaComparison && <div className="fact-tile-note">{facts.areaComparison}</div>}
            </div>
          )}
        </div>
      )}

      {facts.government && (
        <div className="fact-tile">
          <div className="fact-tile-label">Staatsform</div>
          <div className="fact-tile-value">{facts.government}</div>
        </div>
      )}

      <CurrencyConverter
        currencyCode={facts.currencyCode}
        currencyName={facts.currencyName}
        eurExchangeRate={facts.eurExchangeRate}
      />

      {facts.officialLanguages?.length > 0 && (
        <div className="fact-tile">
          <div className="fact-tile-label">Amtssprachen</div>
          <div className="fact-tile-value">{facts.officialLanguages.join(', ')}</div>
        </div>
      )}
      <PhrasebookTile phrasebook={phrasebook} />

      {facts.factsNotes?.map((note) => (
        <NoteTile key={note.label} label={note.label} text={note.text} large={note.large} span={note.span ?? 2} />
      ))}
    </div>
  );
}
