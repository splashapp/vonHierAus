import { AnimatePresence, motion } from 'framer-motion';

export default function QuizQuestion({ question, index, total, selectedIndex, onSelect, onNext }) {
  const answered = selectedIndex !== null;

  function optionClass(i) {
    if (!answered) return 'quiz-option';
    if (i === question.correctIndex) return 'quiz-option quiz-option--correct';
    if (i === selectedIndex) return 'quiz-option quiz-option--incorrect';
    return 'quiz-option';
  }

  return (
    <div className="quiz-question">
      <div className="quiz-progress">
        Frage {index + 1} von {total}
      </div>
      <h3>{question.question}</h3>
      <div className="quiz-options">
        {question.options.map((option, i) => (
          <motion.button
            key={option}
            type="button"
            className={optionClass(i)}
            disabled={answered}
            onClick={() => onSelect(i)}
            whileTap={!answered ? { scale: 0.97 } : undefined}
          >
            {option}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="quiz-explanation">{question.explanation}</p>
            <button type="button" className="quiz-next" onClick={onNext}>
              Weiter →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
