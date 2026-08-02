export default function LocalCalendarTile({ calendar }) {
  if (!calendar) return null;

  return (
    <div className="fact-tile fact-tile-localcalendar">
      <div className="localtime-row">
        <span className="localtime-calendar-headline">{calendar.headline}</span>
        <span className="localtime-label">{calendar.label}</span>
      </div>
      <p className="localtime-calendar-desc">{calendar.description}</p>
    </div>
  );
}
