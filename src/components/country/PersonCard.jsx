import Card from '../shared/Card.jsx';

export default function PersonCard({ person, meta }) {
  return (
    <Card className="person-card" image={person.image} title={person.name} subtitle={meta}>
      <p>{person.desc}</p>
    </Card>
  );
}
