function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Mischt die Antwort-Reihenfolge einer einzelnen Frage und passt `correctIndex` entsprechend
// an — die Daten-Dateien listen die richtige Antwort nicht durchgehend an zufälliger Stelle,
// ohne diesen Schritt läge sie faktisch immer/meist an Position 0.
function shuffleOptions(question) {
  const order = shuffle(question.options.map((_, i) => i));
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    correctIndex: order.indexOf(question.correctIndex),
  };
}

// Wählt `count` zufällige, nicht wiederholte Fragen aus dem Fragenpool eines Landes aus
// (Fisher-Yates-Shuffle + slice) und mischt zusätzlich pro Frage die Antwort-Reihenfolge. Hat
// ein Land `count` oder weniger Fragen, wird der ganze Pool verwendet (nur die Fragenauswahl
// unverändert gelassen, die Antwort-Reihenfolge wird trotzdem gemischt).
export function pickRandomQuestions(questions, count) {
  const picked = questions.length <= count ? questions : shuffle(questions).slice(0, count);
  return picked.map(shuffleOptions);
}
