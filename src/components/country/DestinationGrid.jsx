import Card from '../shared/Card.jsx';

export default function DestinationGrid({ destinations = [] }) {
  return (
    <div className="card-grid">
      {destinations.map((d) => (
        <Card key={d.name} image={d.image} title={d.name} subtitle={d.desc} />
      ))}
    </div>
  );
}
