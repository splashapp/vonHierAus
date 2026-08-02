import Card from '../shared/Card.jsx';

export default function CommunityCard({ group }) {
  return (
    <Card className="community-card" title={group.name} subtitle={group.city}>
      <p>{group.desc}</p>
      {group.eventsNote && <p className="community-events-note">{group.eventsNote}</p>}
      <ul className="community-contact">
        {group.email && (
          <li>
            <a href={`mailto:${group.email}`}>{group.email}</a>
          </li>
        )}
        {group.phone && (
          <li>
            <a href={`tel:${group.phone.replace(/[\s()]/g, '')}`}>{group.phone}</a>
          </li>
        )}
        {group.url && (
          <li>
            <a href={group.url} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </li>
        )}
      </ul>
    </Card>
  );
}
