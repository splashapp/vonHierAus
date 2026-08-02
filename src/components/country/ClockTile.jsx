import { useEffect, useMemo, useState } from 'react';
import { getSunTimes } from '../../utils/sunTimes.js';
import { HAMBURG_ZONE, HAMBURG_COORDS } from '../../utils/constants.js';

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('de-DE', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

function formatSunTime(date, timeZone) {
  return new Intl.DateTimeFormat('de-DE', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function CityBlock({ city, timeZone, now, coords }) {
  const dayKey = now.toDateString();
  const sun = useMemo(
    () => (coords ? getSunTimes(now, coords.lat, coords.lon) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dayKey, coords?.lat, coords?.lon],
  );

  return (
    <div className="clock-block">
      <div className="clock-row">
        <span className="clock-time">{formatTime(now, timeZone)}</span>
        <span className="clock-city">{city}</span>
      </div>
      {sun && (
        <div className="clock-sun-row">
          <span>↑ {formatSunTime(sun.sunrise, timeZone)}</span>
          <span>↓ {formatSunTime(sun.sunset, timeZone)}</span>
        </div>
      )}
    </div>
  );
}

export default function ClockTile({ capital, capitalTimezone, capitalCoords }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!capitalTimezone) return null;

  return (
    <div className="fact-tile fact-tile-clock">
      <CityBlock city="Hamburg" timeZone={HAMBURG_ZONE} now={now} coords={HAMBURG_COORDS} />
      <CityBlock city={capital} timeZone={capitalTimezone} now={now} coords={capitalCoords} />
    </div>
  );
}
