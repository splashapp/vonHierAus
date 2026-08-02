import { useState } from 'react';
import QuizQuestion from './QuizQuestion.jsx';
import QuizResult from './QuizResult.jsx';

export default function Quiz({ questions = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) return null;

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[currentIndex].correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((idx) => idx + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="quiz-box">
      {finished ? (
        <QuizResult score={score} total={questions.length} onRetry={handleRetry} />
      ) : (
        <QuizQuestion
          question={questions[currentIndex]}
          index={currentIndex}
          total={questions.length}
          selectedIndex={selected}
          onSelect={handleSelect}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
