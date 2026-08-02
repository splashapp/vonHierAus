export default function QuizResult({ score, total, onRetry }) {
  const pct = total > 0 ? score / total : 0;
  let message = 'Nicht schlecht — beim nächsten Mal klappt es noch besser!';
  if (pct >= 0.8) message = 'Fantastisch! Du kennst dich richtig gut aus.';
  else if (pct >= 0.5) message = 'Gut gemacht! Du hast schon einiges gelernt.';

  return (
    <div className="quiz-result">
      <p>Dein Ergebnis:</p>
      <div className="quiz-score">
        {score} / {total}
      </div>
      <p>{message}</p>
      <button type="button" className="quiz-retry" onClick={onRetry}>
        Nochmal versuchen
      </button>
    </div>
  );
}
