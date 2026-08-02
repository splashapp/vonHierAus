import PersonCard from './PersonCard.jsx';

export default function FamousPeople({ people }) {
  if (!people) return null;
  return (
    <div className="famous-people">
      {people.historical?.length > 0 && (
        <div className="people-group">
          <h3>Historische Persönlichkeiten</h3>
          <div className="people-grid">
            {people.historical.map((p) => (
              <PersonCard key={p.name} person={p} meta={p.years} />
            ))}
          </div>
        </div>
      )}
      {people.contemporary?.length > 0 && (
        <div className="people-group">
          <h3>Persönlichkeiten von heute</h3>
          <div className="people-grid">
            {people.contemporary.map((p) => (
              <PersonCard key={p.name} person={p} meta={p.profession} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
