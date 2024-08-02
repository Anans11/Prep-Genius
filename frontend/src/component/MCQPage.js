import React, { useState } from 'react';
import "./MCQPage.css"

function MCQPage() {
  // Sample MCQ data
  const mcqs = [
    {
      id: 1,
      question: 'Which of the following sorting algorithms typically has the worst-case time complexity of O(n^2)?',
      options: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Insertion Sort'],
      answer: 'Quick Sort'
    },
    {
      id: 2,
      question: 'What is the output of the following C code? #include <stdio.h> int main() { int x = 5; printf("%d\n", x++); printf("%d\n", ++x); return 0; }',
      options: ['5, 6', '5, 7', '6, 6', '6, 7'],
      answer: '6,6'
    },


    // Add more MCQs here
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const isAnswerCorrect = (questionId, selectedOption) => {
    return selectedAnswers[questionId] === selectedOption;
  };

  return (
    <div className="mcq-page">
      <h2>MCQ Questions</h2>
      {mcqs.map(mcq => (
        <div key={mcq.id} className="mcq">
          <h3>{mcq.question}</h3>
          <ul>
            {mcq.options.map(option => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question-${mcq.id}`}
                    value={option}
                    onChange={() => handleAnswerSelection(mcq.id, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {showResults && (
            <div>
              {isAnswerCorrect(mcq.id, mcq.answer) ? (
                <p className="correct">Correct!</p>
              ) : (
                <p className="incorrect">Incorrect. The correct answer is {mcq.answer}.</p>
              )}
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MCQPage;