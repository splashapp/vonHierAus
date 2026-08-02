// Wählt `count` zufällige, nicht wiederholte Fragen aus dem Fragenpool eines Landes aus
// (Fisher-Yates-Shuffle + slice). Hat ein Land `count` oder weniger Fragen, wird der Pool
// unverändert zurückgegeben — nur wenn der Pool größer ist, wird tatsächlich reduziert.
export function pickRandomQuestions(questions, count) {
  if (questions.length <= count) return questions;
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
