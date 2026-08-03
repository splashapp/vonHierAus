export default function NoteTile({ label, text, large, span = 2 }) {
  if (!text) return null;

  return (
    <div
      className={`fact-tile fact-tile-note-wide${large ? ' fact-tile-note-wide--large' : ''}`}
      style={{ gridColumn: `span ${span}` }}
    >
      {label && <div className="fact-tile-label">{label}</div>}
      <p className="fact-tile-note-text">{text}</p>
    </div>
  );
}
