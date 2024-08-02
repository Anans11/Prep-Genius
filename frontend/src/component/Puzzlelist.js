// PuzzleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PuzzleList = () => {
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    axios.get('/api/puzzles')
      .then(response => {
        setPuzzles(response.data);
      })
      .catch(error => {
        console.error('Error fetching puzzles:', error);
      });
  }, []);

  const checkAnswer = async (puzzleId, userAnswer) => {
    try {
      const response = await axios.post('/api/check-answer', { puzzleId, userAnswer });
      if (response.data.success) {
        alert('Correct answer!'); // Or any other feedback
      } else {
        alert('Incorrect answer!'); // Or any other feedback
      }
    } catch (error) {
      console.error('Error checking answer:', error);
    }
  };

  return (
    <div>
      <h2>Puzzles</h2>
      <ul>
        {puzzles.map(puzzle => (
          <li key={puzzle._id}>
            <strong>{puzzle.title}</strong><br />
            <em>Question:</em> {puzzle.question}<br />
            <form onSubmit={(e) => {
              e.preventDefault();
              const userAnswer = e.target.elements.answer.value;
              checkAnswer(puzzle._id, userAnswer);
            }}>
              <input type="text" name="answer" placeholder="Your answer" />
              <button type="submit">Submit</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PuzzleList;
