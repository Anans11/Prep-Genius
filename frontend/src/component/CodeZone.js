import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './CodeZone.css';

function CodeZone({ userId }) {
    const [problems, setProblems] = useState([]); // Initial state
    const [xp, setXp] = useState(-1);
    const [targetQuestions, setTargetQuestions] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [badge, setBadge] = useState("Normal");

    const updateUserData = async () => {
        try {
            const response = await fetch('http://localhost:3001/update', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, xp, problems, badge })
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const totalProblems = problems.length;
    const completed = problems.filter((problem) => problem.status === "Done").length;
    const percentageCompleted = (completed / totalProblems) * 100;
    const questionsPerDay = targetQuestions / timePeriod;
    const daysRemaining = timePeriod - (completed / questionsPerDay);


    const getBadge = () => {
        if (percentageCompleted < 30) {
            return "Normal";
        } else if (percentageCompleted >= 30 && percentageCompleted < 75) {
            return "Bronze";
        } else if (percentageCompleted >= 75 && percentageCompleted < 100) {
            return "Silver";
        } else {
            return "Gold";
        }
    };
    const handleStatusChange = async (id, newStatus) => {
        const updatedProblems = await problems.map((problem) => {
            if (problem.id === id) {
                if (problem.status === "Done" && newStatus === "Pending") {

                    setXp((prevXp) => Math.max(0, prevXp - 10));
                } else if (problem.status === "Pending" && newStatus === "Done") {
                    setXp((prevXp) => prevXp + 10);
                }
                return { ...problem, status: newStatus };
            }
            return problem;
        });
        setBadge(getBadge());
        setProblems(updatedProblems);
        // await updateUserData(); // Update user data on backend
    };
    const loadXp = async () => {
        try {
            const response = await fetch('http://localhost:3001/loadxp', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('response from databse: ', data);
            setXp(data.xp);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const loadProblems = async () => {
        try {
            const response = await fetch('http://localhost:3001/loadproblems', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setProblems(data.problems);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        loadProblems();
        loadXp();
    }, [])
    useEffect(() => {
        console.log('xp updated:', xp);
        console.log('problems updated:', problems);
        if (problems.length > 0 && xp != -1)
            updateUserData();
    }, [problems])

    // Render UI
    return (
        <div className="CodeZone">
            <div className="badge-container">
                <p className="badge-label">Your Badge:</p>
                <div className={`badge ${getBadge().toLowerCase()}`}>{getBadge()}</div>
            </div>
            <div className="xp-container">
                <p className="xp-label">Your XP:</p>
                <div className="xp">{xp}</div>
            </div>
            <div className="target-container">
                <label htmlFor="target">Target Questions:</label>
                <input
                    type="number"
                    id="target"
                    value={targetQuestions}
                    onChange={(e) => setTargetQuestions(parseInt(e.target.value))}
                />
            </div>
            <div className="time-container">
                <label htmlFor="time">Time Period (in days):</label>
                <input
                    type="number"
                    id="time"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                />
            </div>
            <div className="progress-analysis">
                <p>Target Completion: {percentageCompleted.toFixed(2)}%</p>
                <p>Questions per Day: {questionsPerDay.toFixed(2)}</p>
                <p>Days Remaining: {daysRemaining.toFixed(2)}</p>
            </div>
            <h2>Top Coding Problems</h2>
            <p>Completed: {completed} out of {totalProblems}</p>
            <table>
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Topic</th>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem) => (
                        <tr key={problem.id}>
                            <td>
                                <select
                                    value={problem.status}
                                    onChange={(e) => handleStatusChange(problem.id, e.target.value)}
                                >
                                    <option value="Done">Done</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </td>
                            <td>{problem.topic}</td>
                            <td>{problem.name}</td>
                            <td>
                                {problem.platform === "LeetCode" && <a href={problem.platformLink} target="_blank" rel="noopener noreferrer">{problem.platform}</a>}
                            </td>
                            <td>
                                {problem.status === "Done" ? <FaCheck className="status-icon done" /> : <FaTimes className="status-icon pending" />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CodeZone;