import { useMemo, useState } from 'react';
import QuizQuestion from './QuizQuestion.jsx';
import QuizResult from './QuizResult.jsx';
import { pickRandomQuestions } from '../../utils/quiz.js';

const QUESTION_COUNT = 8;

export default function Quiz({ questions = [] }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeQuestions = useMemo(() => pickRandomQuestions(questions, QUESTION_COUNT), [questions]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (activeQuestions.length === 0) return null;

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === activeQuestions[currentIndex].correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < activeQuestions.length) {
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
        <QuizResult score={score} total={activeQuestions.length} onRetry={handleRetry} />
      ) : (
        <QuizQuestion
          question={activeQuestions[currentIndex]}
          index={currentIndex}
          total={activeQuestions.length}
          selectedIndex={selected}
          onSelect={handleSelect}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
