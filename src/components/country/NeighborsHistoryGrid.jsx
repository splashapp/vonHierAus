import HistoryTile from './HistoryTile.jsx';
import NoteTile from './NoteTile.jsx';

export default function NeighborsHistoryGrid({ neighbors, history, notes = [], neighborsNotes = [] }) {
  if (!neighbors?.length && !history?.length) return null;

  return (
    <div className="fact-grid">
      {neighbors?.length > 0 && (
        <div className="fact-tile fact-tile-neighbors" style={{ gridColumn: 'span 3' }}>
          <div className="fact-tile-label">Nachbarländer</div>
          <div className="fact-tile-value">{neighbors.join(' · ')}</div>
          {neighborsNotes.map((note) => (
            <div className="neighbors-note" key={note.label}>
              {note.label && <div className="neighbors-note-label">{note.label}</div>}
              <p className="neighbors-note-text">{note.text}</p>
            </div>
          ))}
        </div>
      )}
      <HistoryTile history={history} />
      {notes.map((note) => (
        <NoteTile key={note.label} label={note.label} text={note.text} large={note.large} span={3} />
      ))}
    </div>
  );
}
