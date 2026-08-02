import EventCard from './EventCard.jsx';

function EventGroup({ title, events, emptyNote }) {
  return (
    <div className="events-group">
      <h3 className="events-group-title">{title}</h3>
      {events.length === 0 ? (
        <p className="events-empty-note">{emptyNote}</p>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function EventsSection({ hamburgEvents = [], countryEvents = [], countryName }) {
  return (
    <div className="events-section">
      <EventGroup
        title="In Hamburg"
        events={hamburgEvents}
        emptyNote={`Uns ist aktuell keine feste ${countryName}-Veranstaltung in Hamburg bekannt.`}
      />
      <EventGroup
        title={`In ${countryName}`}
        events={countryEvents}
        emptyNote={`Uns ist aktuell keine wiederkehrende Großveranstaltung in ${countryName} bekannt.`}
      />
    </div>
  );
}
