import { useEffect, useState } from 'react';

// Manche Länder zählen den Tag traditionell nicht ab Mitternacht, sondern ab Sonnenaufgang
// (z.B. die äthiopische Zeitrechnung, Tagesbeginn ≈ 6 Uhr international = 0 Uhr lokal) — ein
// 12-Stunden-Zyklus, verschoben um `offsetHours` gegenüber der internationalen Uhrzeit.
function formatLocalCycleTime(date, timeZone, offsetHours) {
  const parts = new Intl.DateTimeFormat('de-DE', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  const hour = Number(get('hour'));
  const localHour = ((hour - offsetHours) % 12 + 12) % 12;
  return `${String(localHour).padStart(2, '0')}:${get('minute')}:${get('second')}`;
}

export default function LocalTimeSystemTile({ localTimeSystem, capitalTimezone }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!localTimeSystem || !capitalTimezone) return null;

  const { label, offsetHours, note, calendar, travelTip } = localTimeSystem;

  return (
    <div className="fact-tile fact-tile-localtime">
      <div className="localtime-columns">
        <div className="localtime-col">
          <div className="localtime-row">
            <span className="localtime-time">{formatLocalCycleTime(now, capitalTimezone, offsetHours)}</span>
            <span className="localtime-label">{label}</span>
          </div>
          {note && <div className="localtime-note">{note}</div>}
        </div>
        {calendar && (
          <div className="localtime-col localtime-col--calendar">
            <div className="localtime-row">
              <span className="localtime-calendar-headline">{calendar.headline}</span>
              <span className="localtime-label">{calendar.label}</span>
            </div>
            <p className="localtime-calendar-desc">{calendar.description}</p>
          </div>
        )}
      </div>
      {travelTip && <p className="localtime-travel-tip">{travelTip}</p>}
    </div>
  );
}
