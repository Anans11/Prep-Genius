/*import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './CodeZone.css';

function CodeZone({ userId }) {
    const [problems, setProblems] = useState([
        { id: 1, topic: "Array", name: "2Sum Problem", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/two-sum/description/" },
    
            { id: 2, topic: "Array", name: "Best time to buy and sell stock", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/" },
    
            { id: 3, topic: "Array", name: "Contains Duplicate", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/contains-duplicate/description/" },
    
            { id: 4, topic: "Array", name: "Product of Array Except Self", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/product-of-array-except-self/description/" },
    
            { id: 5, topic: "Array", name: "Kadane's Algorithm, maximum subarray sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-subarray/solutions/880621/kadanes-algorithm/" },
            
    { id: 6, topic: "Array", name: "Maximum Product Subarray", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-product-subarray/description/" },
            
    { id: 7, topic: "Array", name: "Find minimum in rotated sorted array", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/" },
    
    { id: 8, topic: "Array", name: "Search in Rotated Sorted Array ", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/" },
            
    { id: 9, topic: "Array", name: "3 sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/3sum/description/" },
            
    { id: 10, topic: "Array", name: "Container with most water", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/container-with-most-water/description/" },
    
    { id: 11, topic: "Binary", name: "Sum of Two Integers", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/sum-of-two-integers/description/" },
            
    { id: 12, topic: "Binary", name: "Number of 1 Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-1-bits/description/" },
            
    { id: 13, topic: "Binary", name: "Counting Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/counting-bits/description/" },
            
    { id: 14, topic: "Binary", name: "Find missing number in an array", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/missing-number/description/" },
            
    { id: 15, topic: "Binary", name: "Reverse Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reverse-bits/description/" },
    
    { id: 16, topic: "Dynamic Programming", name: "Climbing Stairs", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/climbing-stairs/description/" },
            
    { id: 17, topic: "Dynamic Programming", name: "Coin change", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/coin-change/description/" },
    
    { id: 18, topic: "Dynamic Programming", name: "Longest Increasing Subsequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-increasing-subsequence/description/" },
            
    { id: 19, topic: "Dynamic Programming", name: "Longest Common Subsequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-common-subsequence/description/" },
    
    { id: 20, topic: "Dynamic Programming", name: "Word Break", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/word-break/description/" },
            
    { id: 21, topic: "Dynamic Programming", name: "Combination Sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/combination-sum/description/" },
            
    { id: 22, topic: "Dynamic Programming", name: "Maximum sum of non- adjacent elements", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/house-robber/solutions/2147875/maximum-sum-non-adjacent-element-in-an-array/" },
            
    { id: 23, topic: "Dynamic Programming", name: "House Robber", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/house-robber/description/" },
            
    { id: 24, topic: "Dynamic Programming", name: "Decode Ways", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/decode-ways/description/" },
            
    { id: 25, topic: "Dynamic Programming", name: "Grid Unique Paths", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/unique-paths/description/" },
            
    { id: 26, topic: "Dynamic Programming", name: "Jump Game", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/jump-game/description/" },
            
    { id: 27, topic: "Graph", name: "Clone Graph", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/clone-graph/description/" },
            
    { id: 28, topic: "Graph", name: "Course Schedule", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/course-schedule/description/" },
    
    { id: 29, topic: "Graph", name: "Pacific Atlantic Water Flow", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/description/" },
            
    { id: 30, topic: "Graph", name: "No. of islands", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-islands/description/" },
            
    { id: 31, topic: "Graph", name: "Longest Consecutive Sequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-consecutive-sequence/description/" },
            
    { id: 32, topic: "Graph", name: "Alien dictionary", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/alien-dictionary/description/" },
            
    { id: 33, topic: "Graph", name: "Graph Valid Tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/graph-valid-tree/description/" },
            
    { id: 34, topic: "Graph", name: "Connected Components", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/" },
            
    { id: 35, topic: "Interval", name: "Insert Interval", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/insert-interval/description/" },
            
    { id: 36, topic: "Interval", name: "Merge Intervals", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-intervals/description/" },
            
    { id: 37, topic: "Interval", name: "Non-overlapping Intervals", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/non-overlapping-intervals/description/" },
            
    { id: 38, topic: "Interval", name: "Repeat and Missing Number", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-missing-and-repeated-values/" },
            
    { id: 39, topic: "Interval", name: "Meeting Rooms", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/meeting-rooms/description/" },
            
    { id: 40, topic: "Interval", name: "Meeting Rooms II", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/meeting-rooms-ii/description/" },
            
    { id: 41, topic: "Linked List", name: "Reverse a Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reverse-linked-list/description/" },
            
    { id: 42, topic: "Linked List", name: "Delete node in Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/delete-node-in-a-linked-list/description/" },
            
    { id: 43, topic: "Linked List", name: "Merge two sorted Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-two-sorted-lists/description/" },
            
    { id: 44, topic: "Linked List", name: "Merge K sorted arrays", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-k-sorted-lists/description/" },
            
    { id: 45, topic: "Linked List", name: "Remove N-th node from back of LinkedList", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/" },
            
    { id: 46, topic: "Linked List", name: "Reorder List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reorder-list/description/" },
            
    { id: 47, topic: "Matrix", name: "Set Matrix Zeros", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/set-matrix-zeroes/description/" },
            
    { id: 48, topic: "Matrix", name: "Print the matrix in spiral manner", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/spiral-matrix/description/" },
            
    { id: 49, topic: "Matrix", name: "Rotate Matrix by 90 degrees", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/rotate-image/description/" },
            
    { id: 50, topic: "Matrix", name: "Word Search", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/word-search/description/" },
            
    { id: 51, topic: "String", name: "Longest Substring without repeating characters", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" },
            
    { id: 52, topic: "String", name: "Longest repeating character replacement", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-repeating-character-replacement/description/" },
            
    { id: 53, topic: "String", name: "Minimum Window Substring", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/minimum-window-substring/description/" },
            
    { id: 54, topic: "String", name: "Check for Anagrams", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-anagram/description/" },
            
    { id: 55, topic: "String", name: "Group Anagrams", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/group-anagrams/description/" },
            
    { id: 56, topic: "String", name: "Check for balanced parentheses", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-parentheses/description/" },
            
    { id: 57, topic: "String", name: "Check Palindrome", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-palindrome/description/" },
            
    { id: 58, topic: "String", name: "Longest Palindrome Substring", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-palindromic-substring/description/" },
            
    { id: 59, topic: "String", name: "Palindromic Substrings", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/palindromic-substrings/description/" },
            
    { id: 60, topic: "String", name: "Encode and Decode Strings", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/encode-and-decode-strings/description/" },
            
    { id: 61, topic: "Tree", name: "Height of a binary tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" },
            
    { id: 62, topic: "Tree", name: "Check if two trees are identical or not", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/same-tree/description/" },
            
    { id: 63, topic: "Tree", name: "Invert/Flip Binary Tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/invert-binary-tree/description/" },
            
    { id: 64, topic: "Tree", name: "Maximum path sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/" },
            
    { id: 65, topic: "Tree", name: "Level order traversal", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/" },
            
    { id: 66, topic: "Tree", name: "serialize and deserialize binary tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/" },
            
    { id: 67, topic: "Tree", name: "Subtree of another tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/subtree-of-another-tree/description/" },
            
    { id: 68, topic: "Tree", name: "Construct the binary tree from Postorder and Inorder Traversal", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/" },
            
    { id: 69, topic: "Tree", name: "Validate BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/validate-binary-search-tree/description/" },
            
    { id: 70, topic: "Tree", name: "Find K-th smallest element in BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/" },
            
    { id: 71, topic: "Tree", name: "Find LCA of two nodes in BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/" },
            
    { id: 72, topic: "Tree", name: "Implement Trie", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/implement-trie-prefix-tree/description/" },
            
    { id: 73, topic: "Tree", name: "Implement Trie-2", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/implement-trie-ii-prefix-tree/description/" },
            
    { id: 74, topic: "Heap", name: "k most frequent elements", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/top-k-frequent-elements/description/" },
            
    { id: 75, topic: "Heap", name: "Find Median from Data Stream", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-median-from-data-stream/description/" },
  
    ]); // Initial state
    const [xp, setXp] = useState(0);

    const updateUserData = async () => {
        try {
            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, xp, problems })
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

    const handleStatusChange = (id, newStatus) => {
        const updatedProblems = problems.map((problem) => {
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

        setProblems(updatedProblems);
        updateUserData(); // Update user data on backend
    };

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

export default CodeZone;*/

//import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './CodeZone.css';

function CodeZone({ userId }) {
    const [problems, setProblems] = useState([
        { id: 1, topic: "Array", name: "2Sum Problem", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/two-sum/description/" },

        { id: 2, topic: "Array", name: "Best time to buy and sell stock", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/" },

        { id: 3, topic: "Array", name: "Contains Duplicate", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/contains-duplicate/description/" },

        { id: 4, topic: "Array", name: "Product of Array Except Self", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/product-of-array-except-self/description/" },

        { id: 5, topic: "Array", name: "Kadane's Algorithm, maximum subarray sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-subarray/solutions/880621/kadanes-algorithm/" },

        { id: 6, topic: "Array", name: "Maximum Product Subarray", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-product-subarray/description/" },

        { id: 7, topic: "Array", name: "Find minimum in rotated sorted array", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/" },

        { id: 8, topic: "Array", name: "Search in Rotated Sorted Array ", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/" },

        { id: 9, topic: "Array", name: "3 sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/3sum/description/" },

        { id: 10, topic: "Array", name: "Container with most water", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/container-with-most-water/description/" },

        { id: 11, topic: "Binary", name: "Sum of Two Integers", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/sum-of-two-integers/description/" },

        { id: 12, topic: "Binary", name: "Number of 1 Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-1-bits/description/" },

        { id: 13, topic: "Binary", name: "Counting Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/counting-bits/description/" },

        { id: 14, topic: "Binary", name: "Find missing number in an array", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/missing-number/description/" },

        { id: 15, topic: "Binary", name: "Reverse Bits", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reverse-bits/description/" },

        { id: 16, topic: "Dynamic Programming", name: "Climbing Stairs", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/climbing-stairs/description/" },

        { id: 17, topic: "Dynamic Programming", name: "Coin change", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/coin-change/description/" },

        { id: 18, topic: "Dynamic Programming", name: "Longest Increasing Subsequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-increasing-subsequence/description/" },

        { id: 19, topic: "Dynamic Programming", name: "Longest Common Subsequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-common-subsequence/description/" },

        { id: 20, topic: "Dynamic Programming", name: "Word Break", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/word-break/description/" },

        { id: 21, topic: "Dynamic Programming", name: "Combination Sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/combination-sum/description/" },

        { id: 22, topic: "Dynamic Programming", name: "Maximum sum of non- adjacent elements", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/house-robber/solutions/2147875/maximum-sum-non-adjacent-element-in-an-array/" },

        { id: 23, topic: "Dynamic Programming", name: "House Robber", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/house-robber/description/" },

        { id: 24, topic: "Dynamic Programming", name: "Decode Ways", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/decode-ways/description/" },

        { id: 25, topic: "Dynamic Programming", name: "Grid Unique Paths", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/unique-paths/description/" },

        { id: 26, topic: "Dynamic Programming", name: "Jump Game", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/jump-game/description/" },

        { id: 27, topic: "Graph", name: "Clone Graph", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/clone-graph/description/" },

        { id: 28, topic: "Graph", name: "Course Schedule", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/course-schedule/description/" },

        { id: 29, topic: "Graph", name: "Pacific Atlantic Water Flow", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/description/" },

        { id: 30, topic: "Graph", name: "No. of islands", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-islands/description/" },

        { id: 31, topic: "Graph", name: "Longest Consecutive Sequence", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-consecutive-sequence/description/" },

        { id: 32, topic: "Graph", name: "Alien dictionary", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/alien-dictionary/description/" },

        { id: 33, topic: "Graph", name: "Graph Valid Tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/graph-valid-tree/description/" },

        { id: 34, topic: "Graph", name: "Connected Components", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/" },

        { id: 35, topic: "Interval", name: "Insert Interval", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/insert-interval/description/" },

        { id: 36, topic: "Interval", name: "Merge Intervals", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-intervals/description/" },

        { id: 37, topic: "Interval", name: "Non-overlapping Intervals", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/non-overlapping-intervals/description/" },

        { id: 38, topic: "Interval", name: "Repeat and Missing Number", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-missing-and-repeated-values/" },

        { id: 39, topic: "Interval", name: "Meeting Rooms", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/meeting-rooms/description/" },

        { id: 40, topic: "Interval", name: "Meeting Rooms II", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/meeting-rooms-ii/description/" },

        { id: 41, topic: "Linked List", name: "Reverse a Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reverse-linked-list/description/" },

        { id: 42, topic: "Linked List", name: "Delete node in Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/delete-node-in-a-linked-list/description/" },

        { id: 43, topic: "Linked List", name: "Merge two sorted Linked List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-two-sorted-lists/description/" },

        { id: 44, topic: "Linked List", name: "Merge K sorted arrays", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/merge-k-sorted-lists/description/" },

        { id: 45, topic: "Linked List", name: "Remove N-th node from back of LinkedList", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/" },

        { id: 46, topic: "Linked List", name: "Reorder List", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/reorder-list/description/" },

        { id: 47, topic: "Matrix", name: "Set Matrix Zeros", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/set-matrix-zeroes/description/" },

        { id: 48, topic: "Matrix", name: "Print the matrix in spiral manner", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/spiral-matrix/description/" },

        { id: 49, topic: "Matrix", name: "Rotate Matrix by 90 degrees", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/rotate-image/description/" },

        { id: 50, topic: "Matrix", name: "Word Search", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/word-search/description/" },

        { id: 51, topic: "String", name: "Longest Substring without repeating characters", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" },

        { id: 52, topic: "String", name: "Longest repeating character replacement", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-repeating-character-replacement/description/" },

        { id: 53, topic: "String", name: "Minimum Window Substring", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/minimum-window-substring/description/" },

        { id: 54, topic: "String", name: "Check for Anagrams", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-anagram/description/" },

        { id: 55, topic: "String", name: "Group Anagrams", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/group-anagrams/description/" },

        { id: 56, topic: "String", name: "Check for balanced parentheses", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-parentheses/description/" },

        { id: 57, topic: "String", name: "Check Palindrome", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/valid-palindrome/description/" },

        { id: 58, topic: "String", name: "Longest Palindrome Substring", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/longest-palindromic-substring/description/" },

        { id: 59, topic: "String", name: "Palindromic Substrings", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/palindromic-substrings/description/" },

        { id: 60, topic: "String", name: "Encode and Decode Strings", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/encode-and-decode-strings/description/" },

        { id: 61, topic: "Tree", name: "Height of a binary tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" },

        { id: 62, topic: "Tree", name: "Check if two trees are identical or not", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/same-tree/description/" },

        { id: 63, topic: "Tree", name: "Invert/Flip Binary Tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/invert-binary-tree/description/" },

        { id: 64, topic: "Tree", name: "Maximum path sum", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/" },

        { id: 65, topic: "Tree", name: "Level order traversal", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/" },

        { id: 66, topic: "Tree", name: "serialize and deserialize binary tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/" },

        { id: 67, topic: "Tree", name: "Subtree of another tree", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/subtree-of-another-tree/description/" },

        { id: 68, topic: "Tree", name: "Construct the binary tree from Postorder and Inorder Traversal", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/" },

        { id: 69, topic: "Tree", name: "Validate BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/validate-binary-search-tree/description/" },

        { id: 70, topic: "Tree", name: "Find K-th smallest element in BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/" },

        { id: 71, topic: "Tree", name: "Find LCA of two nodes in BST", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/" },

        { id: 72, topic: "Tree", name: "Implement Trie", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/implement-trie-prefix-tree/description/" },

        { id: 73, topic: "Tree", name: "Implement Trie-2", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/implement-trie-ii-prefix-tree/description/" },

        { id: 74, topic: "Heap", name: "k most frequent elements", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/top-k-frequent-elements/description/" },

        { id: 75, topic: "Heap", name: "Find Median from Data Stream", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/find-median-from-data-stream/description/" },

    ]); // Initial state
    const [xp, setXp] = useState(0);
    const [targetQuestions, setTargetQuestions] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);


    const updateUserData = async () => {
        try {
            const response = await fetch('http://localhost:3001/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, xp, problems })
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
    const handleStatusChange = (id, newStatus) => {
        const updatedProblems = problems.map((problem) => {
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

        setProblems(updatedProblems);
        updateUserData(); // Update user data on backend
    };

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