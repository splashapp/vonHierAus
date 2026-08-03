export default function NoteTile({ label, text, large, span = 2 }) {
  if (!text) return null;

  // text darf ein einzelner String (ein Absatz) oder ein Array mehrerer Absätze sein.
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <div
      className={`fact-tile fact-tile-note-wide${large ? ' fact-tile-note-wide--large' : ''}`}
      style={{ gridColumn: `span ${span}` }}
    >
      {label && <div className="fact-tile-label">{label}</div>}
      {paragraphs.map((paragraph, i) => (
        <p className="fact-tile-note-text" key={i}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
