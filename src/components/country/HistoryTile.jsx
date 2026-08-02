export default function HistoryTile({ history }) {
  if (!history?.length) return null;

  return (
    <div className="fact-tile fact-tile-history">
      <div className="history-scroll">
        {history.map((entry) => (
          <div className="history-row" key={entry.year + entry.event}>
            <span className="history-year">{entry.year}</span>
            <span className="history-event">{entry.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
