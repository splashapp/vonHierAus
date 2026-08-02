import Card from '../shared/Card.jsx';

export default function EventCard({ event }) {
  return (
    <Card className="event-card" title={event.name} subtitle={event.when}>
      <p className="event-location">{event.location}</p>
      <p>{event.desc}</p>
      {event.url && (
        <a className="event-link" href={event.url} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      )}
    </Card>
  );
}
