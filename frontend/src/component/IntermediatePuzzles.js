/*import React, { useState } from 'react';
import styles from './IntermediatePuzzles.module.css'; // Import CSS module for styling
import p4 from './Assets/p4.png';

const IntermediatePuzzles = () => {
    const [mcqs, setMcqs] = useState([
        {
            id: 1,
            question: 'How many squares, of any size, can you find on this chessboard that do not contain a rook?',
            options: ['200', '125', '110', '150'],
            answer: '125',
            selected: null,
            image: p4 // URL of the image for this question
        },
        {
            id: 2,
            question: 'What day would tomorrow be if......yesterday was five days before the day after Sundays tomorrow?',
            options: ['tuesday', 'wednesday', 'monday', 'saturday'],
            answer: 'wednesday',
            selected: null,
            //image: 'https://example.com/image2.jpg' // URL of the image for this question
        },
        // Add more MCQs here
    ]);
    const [showPuzzles, setShowPuzzles] = useState(false);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedMcqs = mcqs.map(mcq =>
            mcq.id === questionId ? { ...mcq, selected: selectedOption } : mcq
        );
        setMcqs(updatedMcqs);
    };

    const allAnswersCorrect = mcqs.every(mcq => mcq.selected === mcq.answer);

    const handleViewPuzzlesClick = () => {
        if (allAnswersCorrect) {
            setShowPuzzles(true);
        } else {
            alert('Please answer all questions correctly to view the puzzles.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Intermediate Level Puzzles</h1>
            {!showPuzzles && (
                <div>
                    <h2>Test</h2>
                    <p className="unlock-text">Complete the following questions to unlock the puzzles:</p>
                    {mcqs.map(mcq => (
                        <div key={mcq.id}>
                            {mcq.image && <img src={mcq.image} alt="Question" />}
                            <h3>{mcq.question}</h3>
                            <ul>
                                {mcq.options.map(option => (
                                    <li key={option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${mcq.id}`}
                                                value={option}
                                                checked={mcq.selected === option}
                                                onChange={() => handleAnswerSelect(mcq.id, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button className={styles.button} onClick={handleViewPuzzlesClick}>View Puzzles</button>
                </div>
            )}
            {showPuzzles && (
                <div>
                    <h2>Intermediate Level Puzzles</h2>
                    <p>Content for the intermediate level puzzles...</p>
                </div>
            )}
        </div>
    );
}

export default IntermediatePuzzles;*/

import React, { useState } from 'react';
import styles from './IntermediatePuzzles.module.css'; // Import CSS module for styling
import p4 from './Assets/p4.png'; // Import image from Assets folder
import ip1 from './Assets/ip1.png';
import ip2 from './Assets/ip2.png';
import ip3 from './Assets/ip3.png';
import ip4 from './Assets/ip4.png';

const IntermediatePuzzles = () => {
    const [mcqs, setMcqs] = useState([
        {
            id: 1,
            question: 'How many squares, of any size, can you find on this chessboard that do not contain a rook?',
            options: ['200', '125', '110', '150'],
            answer: '125',
            selected: null,
            image: p4 // URL of the image for this question
        },
        {
            id: 2,
            question: 'What day would tomorrow be if......yesterday was five days before the day after Sundays tomorrow?',
            options: ['tuesday', 'wednesday', 'monday', 'saturday'],
            answer: 'wednesday',
            selected: null,
            //image: 'https://example.com/image2.jpg' // URL of the image for this question
        },
        // Add more MCQs here
    ]);

    const intermediatePuzzles = [
        {
            id: 1,
            question: ip1,
            content: 'The infamous PrepGenius encyclopedia has been suffering from its usual problems again.Below is a printout of reptiles and amphibians, but they have lost every other letter.Can you replace the missing letters?',
            answer: '',
            reason: '-r-g       = frog, -o-t-i-e   = tortoise, -n-k-      = snake, -e-t       = newt, -i-a-d     = lizard, -r-c-d-l-  = crocodile, -a-a-a-d-r = salamander, -u-t-e     = turtle, -k-n-      = skink, a-l-g-t-r  = alligator',
            showAnswer: false
        },
        {
            id: 2,
            question: ip2,
            content: 'Below you will find ten common 6-letter words, however, every other letter is missing.Can you determine the original words?',
            answer: '',
            reason: '-s-e-d = ascend. -p-a-g = sprang. -r-f-r = prefer, -y-r-d = hybrid, -r-f-e = trifle, -a-b-n = carbon, -a-e-a = camera, -o-d-g = hotdog, -s-f-l = useful, -i-s-e = tissue',
            showAnswer: false
        },
        {
            id: 3,
            question: ip3,
            content: 'What word is missing from this sequence:',
            answer: '',
            reason: 'Ice.Each word begins with the last two letters of the previous word.',
            showAnswer: false
        },
        {
            id: 4,
            question: ip4,
            content: 'Complete this grid of 4 four-letter words written horizontally.Once complete, the first column of the grid forms a word, and the last column forms a word that is related to the first.',
            answer: '',
            reason: 'Hard and soft. H	A	T	S, A	L	S	O, R	O	O	F, D	E	B	T',
            showAnswer: false
        },

        // Add more puzzles here
    ];

    const [showAnswers, setShowAnswers] = useState(false);
    const [showReasonModal, setShowReasonModal] = useState(false);
    const [reason, setReason] = useState('');
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedMcqs = mcqs.map(mcq =>
            mcq.id === questionId ? { ...mcq, selected: selectedOption } : mcq
        );
        setMcqs(updatedMcqs);
    };

    const allAnswersCorrect = mcqs.every(mcq => mcq.selected === mcq.answer);

    const handleViewPuzzlesClick = () => {
        if (allAnswersCorrect) {
            setShowAnswers(true);
        } else {
            alert('Please answer all questions correctly to view the puzzles.');
        }
    };

    const handleShowAnswerClick = (puzzleId) => {
        const puzzle = intermediatePuzzles.find(puzzle => puzzle.id === puzzleId);
        if (puzzle) {
            puzzle.showAnswer = true;
            setSelectedPuzzle(puzzleId);
        }
    };

    const handleShowReasonClick = (puzzleId) => {
        const puzzle = intermediatePuzzles.find(puzzle => puzzle.id === puzzleId);
        if (puzzle) {
            setReason(puzzle.reason);
            setShowReasonModal(true);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Intermediate Level Puzzles</h1>
            {!showAnswers && (
                <div>
                    <h2>Test</h2>
                    <p className="unlock-text">Complete the following questions to unlock the puzzles:</p>
                    {mcqs.map(mcq => (
                        <div key={mcq.id}>

                            <h2>{mcq.question}</h2>
                            {mcq.image && <img src={mcq.image} alt="Question" />}
                            <ul>
                                {mcq.options.map(option => (
                                    <li key={option}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${mcq.id}`}
                                                value={option}
                                                checked={mcq.selected === option}
                                                onChange={() => handleAnswerSelect(mcq.id, option)}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button className={styles.button} onClick={handleViewPuzzlesClick}>View Puzzles</button>
                </div>
            )}
            {showAnswers && (
                <div>
                    <h2>Intermediate Level Puzzles</h2>
                    {intermediatePuzzles.map(puzzle => (
                        <div key={puzzle.id}>
                            <img src={puzzle.question} alt="Question" />
                            <h3>{puzzle.content}</h3>
                            {puzzle.showAnswer && <p><strong>Answer:</strong> {puzzle.answer}</p>}

                            <button onClick={() => handleShowReasonClick(puzzle.id)}>Show answer</button>
                        </div>
                    ))}
                    {showReasonModal && (
                        <div className={styles.reasonModalBackdrop} onClick={() => setShowReasonModal(false)}>
                            <div className={styles.reasonModal}>
                                <h3>Reason:</h3>
                                <p>{reason}</p>
                                <button onClick={() => setShowReasonModal(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default IntermediatePuzzles;