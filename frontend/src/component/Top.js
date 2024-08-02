

// Top.js
/*import React, { useState } from "react";
import { FaGithub, FaHackerrank, FaCodepen } from "react-icons/fa";

const Top = () => {
  const puzzlesData = [
    { id: 1, name: "Puzzle 1", status: "Pending", video: "Video Link 1", notes: "", platform: "GitHub", platformLink: "https://github.com" },
    { id: 2, name: "Puzzle 2", status: "Pending", video: "Video Link 2", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
    { id: 3, name: "3 Ants and Triangle", status: "Pending", video: "https://www.youtube.com/watch?v=jflex8UvJzg", notes: "", platform: "GeeksforGeeks", platformLink: "https://www.geeksforgeeks.org/puzzle-21-3-ants-and-triangle/" },
    // Add more puzzles here
  ];

  const [puzzles, setPuzzles] = useState(puzzlesData);
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

  return (
    <div>
      <h2>Top 20 Puzzles</h2>
      <p>Completed: {completed} out of {puzzles.length}</p>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Puzzle</th>
            <th>Platform</th>
            <th>Video Solution</th>
            <th>Notes</th>
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
                  {puzzle.platform === "GeeksforGeeks" && <img src="./Assets/jigsaw.png" alt="" style={{ width: 20, height: 20 }} />}
                </a>
              </td>
              <td>
                <a href={puzzle.video} target="_blank" rel="noopener noreferrer">
                  Video Solution
                </a>
              </td>
              <td>
                <input
                  type="text"
                  value={puzzle.notes}
                  onChange={(e) => console.log("Save notes for puzzle", puzzle.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top;*/

// Top.js

/*import React, { useState } from "react";
import { FaGithub, FaHackerrank, FaCodepen } from "react-icons/fa";
import "./Top.css"; // Import the CSS file

const Top = () => {
    const puzzlesData = [
        { id: 1, name: "3 Ants and Triangle", status: "Pending", video: "https://www.youtube.com/watch?v=jflex8UvJzg", notes: "", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-21-3-ants-and-triangle/" },
        { id: 2, name: "Puzzle 2", status: "Pending", video: "Video Link 2", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 3, name: "Puzzle 3", status: "Pending", video: "Video Link 3", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 4, name: "Puzzle 4", status: "Pending", video: "Video Link 4", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 5, name: "Puzzle 5", status: "Pending", video: "Video Link 5", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 6, name: "Puzzle 6", status: "Pending", video: "Video Link 6", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 7, name: "Puzzle 7", status: "Pending", video: "Video Link 7", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 8, name: "Puzzle 8", status: "Pending", video: "Video Link 8", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 9, name: "Puzzle 9", status: "Pending", video: "Video Link 9", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 10, name: "Puzzle 10", status: "Pending", video: "Video Link 10", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 11, name: "Puzzle 11", status: "Pending", video: "Video Link 11", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 12, name: "Puzzle 12", status: "Pending", video: "Video Link 12", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 13, name: "Puzzle 13", status: "Pending", video: "Video Link 13", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 14, name: "Puzzle 14", status: "Pending", video: "Video Link 14", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 15, name: "Puzzle 15", status: "Pending", video: "Video Link 15", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 16, name: "Puzzle 16", status: "Pending", video: "Video Link 16", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 17, name: "Puzzle 17", status: "Pending", video: "Video Link 17", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 18, name: "Puzzle 18", status: "Pending", video: "Video Link 18", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 19, name: "Puzzle 19", status: "Pending", video: "Video Link 19", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        { id: 20, name: "Puzzle 20", status: "Pending", video: "Video Link 20", notes: "", platform: "HackerRank", platformLink: "https://hackerrank.com" },
        // Add more puzzles here
    ];

    const [puzzles, setPuzzles] = useState(puzzlesData);
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

    const handleNotesChange = (id, newNotes) => {
        const updatedPuzzles = puzzles.map((puzzle) =>
            puzzle.id === id ? { ...puzzle, notes: newNotes } : puzzle
        );
        setPuzzles(updatedPuzzles);
    };


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
                            <th>Notes</th>
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
                                <td>
                                    <input
                                        type="text"
                                        value={puzzle.notes}
                                        onChange={(e) => handleNotesChange(puzzle.id, e.target.value)}
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Top;*/

import React, { useState } from "react";
import { FaGithub, FaHackerrank, FaCodepen } from "react-icons/fa";
import "./Top.css"; // Import the CSS file

const Top = () => {
    const puzzlesData = [
        { id: 1, name: "3 Ants and Triangle", status: "Pending", video: "https://youtu.be/jflex8UvJzg", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-21-3-ants-and-triangle/" },

        { id: 2, name: "Heaven and Hell", status: "Pending", video: "https://www.youtube.com/watch?v=vPAgAPOiNVI&pp=ygUTaGVhdmVuIGFuZCBoZWxsIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-heaven-hell/" },

{ id: 3, name: "10 Coins Puzzle", status: "Pending", video: "https://www.youtube.com/watch?v=rWrqKApgmqE&pp=ygUTMTAgQ29pbnMgUHV6emxlIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/" },

{ id: 4, name: "Mislabeled Jars", status: "Pending", video: "https://www.youtube.com/watch?v=-S2eGQf9QvQ&pp=ygUTTWlzbGFiZWxlZCBKYXJzIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-mislabeled-jars/" },

{ id: 5, name: "50 red marbles and 50 blue marbles", status: "Pending", video: "https://www.youtube.com/watch?v=KY2_Eqp_wmg&pp=ygUmNTAgcmVkIG1hcmJsZXMgYW5kIDUwIGJsdWUgbWFyYmxlcyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-50-red-marbles-and-50-blue-marbles/" },

{ id: 6, name: "Minimum cut Puzzle", status: "Pending", video: "https://www.youtube.com/watch?v=WSTlTEQTmbo&pp=ygUWTWluaW11bSBjdXQgUHV6emxlIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-31-minimum-cut-puzzle/" },

{ id: 7, name: "100 Doors", status: "Pending", video: "https://www.youtube.com/watch?v=WqvSdOCJxaU&pp=ygUNMTAwIGRvb3JzIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-16-100-doors/" },

{ id: 8, name: "Find the fastest 3 horses", status: "Pending", video: "https://www.youtube.com/watch?v=a9Wge7cgRXg&pp=ygUdRmluZCB0aGUgZmFzdGVzdCAzIGhvcnNlcyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-9-find-the-fastest-3-horses/" },

{ id: 9, name: "Calculate total distance traveled by the bee", status: "Pending", video: "https://www.youtube.com/watch?v=0q1U4kDtXWw&pp=ygUwQ2FsY3VsYXRlIHRvdGFsIGRpc3RhbmNlIHRyYXZlbGVkIGJ5IHRoZSBiZWUgZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-3-calculate-total-distance-travelled-by-bee/" },

{ id: 10, name: "3 cuts to cut the round cake into 8 equal pieces", status: "Pending", video: "https://www.youtube.com/watch?v=aIrZPNq4Ufs&pp=ygU0MyBjdXRzIHRvIGN1dCB0aGUgcm91bmQgY2FrZSBpbnRvIDggZXF1YWwgcGllY2VzIGdmZw%3D%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-3-cuts-cut-round-cake-8-equal-pieces/" },

{ id: 11, name: "Find the last ball to remain after the entire process", status: "Pending", video: "https://www.youtube.com/watch?v=S-B0mWK8Fws&pp=ygU5RmluZCB0aGUgbGFzdCBiYWxsIHRvIHJlbWFpbiBhZnRlciB0aGUgZW50aXJlIHByb2Nlc3MgZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-find-last-ball-remain-entire-process/" },

{ id: 12, name: "The Two Water Jug", status: "Pending", video: "https://www.youtube.com/watch?v=u9KMMudAQ6M&pp=ygUVVGhlIFR3byBXYXRlciBKdWcgZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/two-water-jug-puzzle/" },

{ id: 13, name: "3 Bulbs and 3 Switches", status: "Pending", video: "https://www.youtube.com/watch?v=T1tJT_rNJNQ&pp=ygUaMyBCdWxicyBhbmQgMyBTd2l0Y2hlcyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-7-3-bulbs-and-3-switches/" },

{ id: 14, name: "How to Measure 45 minutes using two identical wires?", status: "Pending", video: "https://www.youtube.com/watch?v=J9CVEe48Pr4&pp=ygU4SG93IHRvIE1lYXN1cmUgNDUgbWludXRlcyB1c2luZyB0d28gaWRlbnRpY2FsIHdpcmVzPyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-1-how-to-measure-45-minutes-using-two-identical-wires/" },

{ id: 15, name: "Find ages of daughters", status: "Pending", video: "https://www.youtube.com/watch?v=JSGr0svQaoM&pp=ygUaRmluZCBhZ2VzIG9mIGRhdWdodGVycyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-2-find-ages-of-daughters/" },

{ id: 16, name: "10 Balls in 5 Lines", status: "Pending", video: "https://www.youtube.com/watch?v=BxSQHZGO6mw&pp=ygUXMTAgQmFsbHMgaW4gNSBMaW5lcyBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-10-balls-in-5-lines/" },

{ id: 17, name: "Pay an employee using a gold rod of 7 units?", status: "Pending", video: "https://www.youtube.com/watch?v=PpUB9jxRDTs&pp=ygUwUGF5IGFuIGVtcGxveWVlIHVzaW5nIGEgZ29sZCByb2Qgb2YgNyB1bml0cz8gZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/" },

{ id: 18, name: "Torch and Bridge", status: "Pending", video: "https://www.youtube.com/watch?v=6NKxjgiFDIw&pp=ygUUVG9yY2ggYW5kIEJyaWRnZSBnZmc%3D", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-18-torch-and-bridge/" },

{ id: 19, name: "Poison and Rat", status: "Pending", video: "https://www.youtube.com/watch?v=Xw5LR6WRTz4&pp=ygUSUG9pc29uIGFuZCBSYXQgZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-19-poison-and-rat/" },

{ id: 20, name: "Camel and Banana Puzzle", status: "Pending", video: "https://www.youtube.com/watch?v=pDoar4zh5tI&pp=ygUbQ2FtZWwgYW5kIEJhbmFuYSBQdXp6bGUgZ2Zn", platform: "HackerRank", platformLink: "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/" },


        
    ];

    const [puzzles, setPuzzles] = useState(puzzlesData);
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