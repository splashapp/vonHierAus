import HistoryTile from './HistoryTile.jsx';

export default function NeighborsHistoryGrid({ neighbors, history }) {
  if (!neighbors?.length && !history?.length) return null;

  return (
    <div className="fact-grid">
      {neighbors?.length > 0 && (
        <div className="fact-tile" style={{ gridColumn: 'span 3' }}>
          <div className="fact-tile-label">Nachbarländer</div>
          <div className="fact-tile-value">{neighbors.join(' · ')}</div>
        </div>
      )}
      <HistoryTile history={history} />
    </div>
  );
}
