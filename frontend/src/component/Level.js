/*import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Level.css"; // Import your CSS file for styling

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    return (
        <div className="level-container">
            <h1>Level Based Puzzles</h1>
            <button onClick={toggleBasicPuzzles}>
                {showBasicPuzzles ? 'Hide Basic Puzzles' : 'Show Basic Puzzles'}
            </button>
            {showBasicPuzzles && (
                <div className="basic-puzzles">
                    <h2>Basic Puzzles</h2>
                    <p>Content for the basic level puzzles...</p>
                    <button className="intermediate-button"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Level.css"; // Import your CSS file for styling

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    // Array of basic puzzles
    const basicPuzzles = [
        { id: 1, question: './Assets/p1.png', answer: '4' },
        { id: 2, question: 'puzzle2.jpg', answer: 'Paris' },
        { id: 3, question: 'puzzle3.jpg', answer: 'William Shakespeare' },
        // Add more puzzles as needed
    ];

    const showPuzzleAnswer = () => {
        const confirmAnswer = window.confirm('Do you really want to see the answer?');
        if (confirmAnswer) {
            setShowAnswer(true);
        }
    }

    return (
        <div className="level-container">
            <h1>Level Based Puzzles</h1>
            <button onClick={toggleBasicPuzzles}>
                {showBasicPuzzles ? 'Hide Basic Puzzles' : 'Show Basic Puzzles'}
            </button>
            {showBasicPuzzles && (
                <div className="basic-puzzles">
                    <h2>Basic Puzzles</h2>
                    {basicPuzzles.map((puzzle) => (
                        <div key={puzzle.id} className="puzzle">
                            <img src={puzzle.question} alt={`Puzzle ${puzzle.id}`} />
                            <button onClick={() => { setSelectedPuzzle(puzzle); showPuzzleAnswer(); }}>
                                Show Answer
                            </button>
                            {showAnswer && selectedPuzzle && selectedPuzzle.id === puzzle.id && (
                                <p>A: {puzzle.answer}</p>
                            )}
                        </div>
                    ))}
                    <button className="intermediate-button"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Level.css";
import ReasonModal from './ReasonModal';
import p1 from './Assets/p1.png';

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);
    const [showReasonModal, setShowReasonModal] = useState(false);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    const basicPuzzles = [
        {
            id: 1,
            content: 'Which of the shapes is identical to the first one? There may be more than one.',
            question: p1,
            answer: 'A,D and E',
            reason: 'Explanation for answer A,D and E'
        },
        {
            id: 2,
            content: 'This is another content before the question.',
            question: 'puzzle2.jpg',
            answer: 'Paris',
            reason: 'Explanation for answer Paris'
        },
        {
            id: 3,
            content: 'Here is some more content before the question.',
            question: 'puzzle3.jpg',
            answer: 'William Shakespeare',
            reason: 'Explanation for answer William Shakespeare'
        },
    ];

    const showPuzzleAnswer = (puzzle) => {
        setSelectedPuzzle(puzzle);
        setShowAnswer(true);
    }

    const toggleReasonModal = () => {
        setShowReasonModal(!showReasonModal);
    }

    return (
        <div className="level-container">
            <h1>Level Based Puzzles</h1>
            <p>Welcome to the Puzzle Challenge! Our puzzle challenge is designed to test and enhance your problem-solving skills through three levels of difficulty: Basic, Intermediate, and Hard. Each level offers a unique set of puzzles that will challenge your mind and creativity.</p>
            <h2>How It Works:</h2>
            <p>Basic Level: This level is open to all users. You can start solving puzzles right away to get a feel for the challenge.</p>
            <p>Intermediate and Hard Levels: To unlock these levels, you must pass a test. The test consists of 2 puzzles from the current level. For example, to move from Basic to Intermediate, you must solve 2 Basic level puzzles.</p>
            <p>Accessing Higher Levels: Once you pass the test, you'll gain access to the next level's puzzles. This ensures that you're prepared for the increased difficulty.</p>
            <h2>Tips for Success:</h2>
            <p>Try It Yourself First: While you can see the answer to a puzzle, we encourage you to attempt solving it on your own first. This will help you improve your problem-solving skills.</p>
            <p>Use the Reasoning: Each puzzle comes with a reasoning section that explains the answer. Use this to understand the logic behind the solution and improve your approach to similar puzzles in the future.</p>
            <button onClick={toggleBasicPuzzles}>
                {showBasicPuzzles ? 'Hide Basic Puzzles' : 'Show Basic Puzzles'}
            </button>
            {showBasicPuzzles && (
                <div className="basic-puzzles">
                    <h2>Basic Puzzles</h2>
                    {basicPuzzles.map((puzzle) => (
                        <div key={puzzle.id} className="puzzle">
                            {puzzle.content && <p className="puzzle-content">{puzzle.content}</p>}
                            <img className="puzzle-image" src={puzzle.question} alt={`Puzzle ${puzzle.id}`} />
                            <button className="button-91 show-answer-button" onClick={() => showPuzzleAnswer(puzzle)}>
                                Show Answer
                            </button>
                            {showAnswer && selectedPuzzle && selectedPuzzle.id === puzzle.id && (
                                <>
                                    <p>{`Answer: ${puzzle.answer}`}</p>
                                    <button className="button-91 show-reason-button" onClick={() => { setSelectedPuzzle(puzzle); toggleReasonModal(); }}>
                                        Show Reason
                                    </button>
                                    {showReasonModal && (
                                        <ReasonModal reason={puzzle.reason} onClose={toggleReasonModal} />
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                    <button className="button-91"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Level.css";
import ReasonModal from './ReasonModal';
import p1 from './Assets/p1.png';
import p2 from './Assets/p2.png';
import p3 from './Assets/p3.png';
import p4 from './Assets/p4.png';

const Level = () => {
    const [showBasicPuzzles, setShowBasicPuzzles] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);
    const [showReasonModal, setShowReasonModal] = useState(false);

    const toggleBasicPuzzles = () => {
        setShowBasicPuzzles(!showBasicPuzzles);
    }

    const basicPuzzles = [
        {
            id: 1,
            content: 'Which of the shapes is identical to the first one? There may be more than one.',
            question: p1,
            answer: 'A,D and E',
            reason: 'Explanation for answer A,D and E'
        },
        {
            id: 2,
            content: 'The first group of trainee astronauts are all sitting around the table, waiting to start their first day of training.From the clues given below, can work out where everyone sits?Seat 1 is next to Seat 2 and Seat 8, etc. Seat 5 is across from Seat 1, and Seat 7 is across from Seat 3, etc. Seat 2 is a higher seat number than Seat 1, etc.',
            question: p2,
            answer: 'Seat 1 = WilliamSeat 2 = NickSeat 3 = EricSeat 4 = SydneySeat 5 = GeorgeSeat 6 = AmandaSeat 7 = SarahSt 8 = Alisa',
            reason: 'Sydney is in Seat 4 and is next to George (Clue 6), so George is in either Seat 3 or Seat 5. But George has a higher seat number than Sydney (Clue 7). Therefore, George is in Seat 5.William is across from George (Clue 2), and therefore is in Seat 1.William is next to Alisa and Nick (Clue 1), so Alisa and Nick are in Seat 2 and Seat 8 (either way around). But Alisa is not in Seat 2 (Clue 8). Therefore, Alisa is in Seat 8 and Nick is in Seat 2.Nick is next to Eric (Clue 5) so can only be in Seat 3.Sarah is across from Eric (Clue 4), and therefore is in Seat 7.Amanda is next to Sarah (Clue 3) and can only be in Seat 6.'
        },
        {
            id: 3,
            content: 'Complete the fifth circle with the correct dots.',
            question: p3,
            answer: 'At each stage, a new dot starts at the top, and then goes either clockwise, or counter-clockwise.',
            reason: 'At each stage, a new dot starts at the top, and then goes either clockwise, or counter-clockwise.'
        },
        {
            id: 4,
            content: 'What day would tomorrow be if......yesterday was five days before the day after Sundays tomorrow?',
            question: 'picture4',
            answer: 'Saturday.',
            reason: 'It  best to work backwards:"Sunday  tomorrow"is Monday."the day after Sunday tomorrow"is therefore Tuesday."five days before the day after Sunday tomorrow is therefore Thursday "yesterday was five days before the day after Sunday tomorrow yesterday was Thursday, making today Friday. Therefore tomorrow is Saturday.'
        },
        {
            id: 5,
            content: 'Three teachers were discussing how long they had been teaching.Alex and Billie had been teaching for a total of 36 years.Charlie and Billie had been teaching for a total of 22 years.Charlie and Alex had been teaching for a total of 28 years.How long had each been teaching?',
            question: 'puzzle3.jpg',
            answer: 'Alex had been teaching for 21 years.Billie had been teaching for 15 years.Charlie had been teaching for 7 years.',
            reason: 'If we look at all of the clues, each person appears exactly twice.So the total of the three clues gives us two lots of Alex + Billie + Charlie = 36 + 22 + 28 = 86.So, Alex + Billie + Charlie = 43 years.In each clue we are given two of the people, so we can use this to find the missing person.Charlie and Billie had been teaching for a total of 22 years, which means that Alex must be: 43 - 22 = 21 years.Charlie and Alex had been teaching for a total of 28 years, which means that Billie must be: 43 - 28 = 15 years.Alex and Billie had been teaching for a total of 36 years, which means that Charlie must be: 43 - 36 = 7 years.'
        },
        {
            id: 6,
            content: 'Imagine a bottle recycling skip, empty other than one lonely bottle.Every hour, on the hour, people come and put bottles into the skip.The first hour, at noon, one person came and put a bottle in.One hour later, two people each placed a bottle into the skip.An hour later, four people each placed a bottle into the skip.This doubling of people continued until 11pm, when the skip was finally full.When was the skip exactly half full?',
            question: 'puzzle3.jpg',
            answer: '10pm.',
            reason: 'The skip started with 1 lonely bottle.At Noon: 1 person came along and added a bottle, making the total 2 bottles.At 1pm: 2 people came along and each added a bottle, making the total 2 + 2 = 4 bottles.At 2pm: 4 people came along and each added a bottle, making the total 4 + 4 = 8 bottles.At 3pm: 8 people came along and each added a bottle, making the total 8 + 8 = 16 bottles.Therefore, the number of bottles in the skip is doubling every hour, as it was full at 11pm, it must have been half full at 10pm.'
        },
        {
            id: 7,
            content: 'What number is......three-quarters of eight-ninths of one-half of 2001?',
            question: 'puzzle3.jpg',
            answer: '667.',
            reason: '4/4 of 8/9 of 1/2 of 2001 which simplifies to:24/71 of 2001.which simplifies to:1/3 of 2001Giving 667.'
        },
        {
            id: 8,
            content: 'Which number, when written as a word, makes this true:Cleverly, there are exactly {?} E in this sentence.',
            question: 'puzzle3.jpg',
            answer: 'Twelve.',
            reason: 'Cleverly, there are exactly twelve E in this sentence.'
        },
        {
            id: 9,
            content: 'Can you find a number such that......its double is fourteen more than its quarter?',
            question: 'puzzle3.jpg',
            answer: '8',
            reason: 'We need a number (N) such that:2 x N = 14 + N—4Multiply throughout by 4 to give:8 x N = 56 + N.So:7 x N = 56.So N = 8'
        },
        {
            id: 10,
            content: 'How many squares, of any size, can you find on this chessboard that do not contain a rook?',
            question: p4,
            answer: '125',
            reason: 'There are 61 squares of size 1x1.There are 39 squares of size 2x2.There are 20 squares of size 3x3.There are 5 squares of size 4x4.A total of 61 + 39 + 20 + 5 = 125.'
        },



    ];

    const showPuzzleAnswer = (puzzle) => {
        setSelectedPuzzle(puzzle);
        setShowAnswer(true);
    }

    const toggleReasonModal = () => {
        setShowReasonModal(!showReasonModal);
    }


    return (
        <div className="level-container">
            <h1>Level Based Puzzles</h1>
            <p>Welcome to the Puzzle Challenge! Our puzzle challenge is designed to test and enhance your problem-solving skills through three levels of difficulty: Basic, Intermediate, and Hard. Each level offers a unique set of puzzles that will challenge your mind and creativity.</p>
            <h2>How It Works:</h2>
            <p>Basic Level: This level is open to all users. You can start solving puzzles right away to get a feel for the challenge.</p>
            <p>Intermediate and Hard Levels: To unlock these levels, you must pass a test. The test consists of 2 puzzles from the current level. For example, to move from Basic to Intermediate, you must solve 2 Basic level puzzles.</p>
            <p>Accessing Higher Levels: Once you pass the test, you'll gain access to the next level's puzzles. This ensures that you're prepared for the increased difficulty.</p>
            <h2>Tips for Success:</h2>
            <p>Try It Yourself First: While you can see the answer to a puzzle, we encourage you to attempt solving it on your own first. This will help you improve your problem-solving skills.</p>
            <p>Use the Reasoning: Each puzzle comes with a reasoning section that explains the answer. Use this to understand the logic behind the solution and improve your approach to similar puzzles in the future.</p>
            <button onClick={toggleBasicPuzzles}>
                {showBasicPuzzles ? 'Hide Basic Puzzles' : 'Show Basic Puzzles'}
            </button>
            {showBasicPuzzles && (
                <div className="basic-puzzles">
                    <h2>Basic Puzzles</h2>
                    {basicPuzzles.map((puzzle, index) => (
                        <div key={puzzle.id} className="puzzle">
                            <p className="puzzle-number"><strong>Puzzle No. {index + 1}</strong></p>
                            {puzzle.content && <p className="puzzle-content">{puzzle.content}</p>}
                            <img className="puzzle-image" src={puzzle.question} alt={`Puzzle ${puzzle.id}`} />
                            <button className="button-91 show-answer-button" onClick={() => showPuzzleAnswer(puzzle)}>
                                Show Answer
                            </button>
                            {showAnswer && selectedPuzzle && selectedPuzzle.id === puzzle.id && (
                                <>
                                    <p>{`Answer: ${puzzle.answer}`}</p>
                                    <button className="button-91 show-reason-button" onClick={() => { setSelectedPuzzle(puzzle); toggleReasonModal(); }}>
                                        Show Reason
                                    </button>

                                    {showReasonModal && (
                                        <ReasonModal reason={puzzle.reason} onClose={toggleReasonModal} />
                                    )}
                                </>
                            )}
                        </div>
                    ))}

                    <button className="button-91"><Link to="/intermediate">Go to Intermediate Level</Link></button>
                </div>
            )}
        </div>
    );
}

export default Level;