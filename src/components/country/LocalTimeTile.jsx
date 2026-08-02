import { useEffect, useState } from 'react';
import InfoPopover from '../shared/InfoPopover.jsx';

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

export default function LocalTimeTile({ localTimeSystem, capitalTimezone }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!localTimeSystem || !capitalTimezone) return null;

  const { label, offsetHours, note, travelTip } = localTimeSystem;

  return (
    <div className="fact-tile fact-tile-localtime">
      <div className="localtime-row">
        <span className="localtime-time-group">
          <span className="localtime-time">{formatLocalCycleTime(now, capitalTimezone, offsetHours)}</span>
          {travelTip && <InfoPopover label="Reisehinweis zur äthiopischen Zeit">{travelTip}</InfoPopover>}
        </span>
        <span className="localtime-label">{label}</span>
      </div>
      {note && <div className="localtime-note">{note}</div>}
    </div>
  );
}
