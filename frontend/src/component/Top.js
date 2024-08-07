import React, { useEffect, useState } from "react";
import { FaGithub, FaHackerrank, FaCodepen } from "react-icons/fa";
import "./Top.css"; // Import the CSS file

const Top = () => {

    const [puzzles, setPuzzles] = useState([]);
    const [completed, setCompleted] = useState(puzzles.filter((puzzle) => puzzle.status === "Done").length);

    const handleStatusChange = (id, newStatus) => {
        const updatedPuzzles = puzzles.map((puzzle) =>
            puzzle.id === id ? { ...puzzle, status: newStatus } : puzzle
        );
        setPuzzles(updatedPuzzles);
        if (newStatus === "Done") {
            setCompleted(completed + 1);
        } else {
            setCompleted(completed - 1);
        }
    };
    const updateTop = async () => {
        try {
            let response = await fetch('http://localhost:3001/updatetop', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ puzzles, completed })
            })
            response = await response.json();
            console.log('response from updateTop: ', response);
        } catch (error) {
            console.error(error);

        }
    }
    const loadPuzzles = async () => {
        try {
            let response = await fetch('http://localhost:3001/loadtop', {
                method: 'GET',
                credentials: 'include',
            })
            response = await response.json();
            console.log('response from loadPuzzles: ', response);
            setPuzzles(response.puzzles);
            setCompleted(response.completed);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadPuzzles();
    }, [])
    useEffect(() => {
        console.log("Puzzles: ", puzzles);
        console.log("Completed: ", completed);
        if (puzzles.length > 0)
            updateTop();
    }, [puzzles]);

    return (
        <div>
            <h2>Top 20 Puzzles</h2>
            <div className="tracker-container">
                <div className="tracker">
                    <p className="tracker-label">Completed</p>
                    <p className="tracker-count">{completed} out of {puzzles.length}</p>
                    <div className="tracker-progress" style={{ width: `${(completed / puzzles.length) * 100}%` }}></div>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Puzzle</th>
                            <th>Platform</th>
                            <th>Video Solution</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {puzzles.map((puzzle) => (
                            <tr key={puzzle.id}>
                                <td>
                                    <select
                                        value={puzzle.status}
                                        onChange={(e) => handleStatusChange(puzzle.id, e.target.value)}
                                    >
                                        <option value="Done">Done</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </td>
                                <td>{puzzle.name}</td>
                                <td>
                                    <a href={puzzle.platformLink} target="_blank" rel="noopener noreferrer">
                                        {puzzle.platform === "GitHub" && <FaGithub />}
                                        {puzzle.platform === "HackerRank" && <FaHackerrank />}
                                        {puzzle.platform === "Codepen" && <FaCodepen />}
                                    </a>
                                </td>
                                <td>
                                    <a href={puzzle.video} target="_blank" rel="noopener noreferrer">
                                        Video Solution
                                    </a>
                                </td>
                                <td>{puzzle.status === "Done" ? "✔️" : "❌"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Top;