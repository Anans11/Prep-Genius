/*const mongoose=require('mongoose')
const StudentSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const StudentModel=mongoose.model("students",StudentSchema)
module.exports=StudentModel*/

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: String,
    xp: {
        type: Number,
        default: 0
    },
    problems: {
        type: Array,
        default: [{ id: 1, topic: "Array", name: "2Sum Problem", platform: "LeetCode", status: "Pending", platformLink: "https://leetcode.com/problems/two-sum/description/" },

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
        ]
    },
    puzzles: {
        type: Array,
        default: [
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



        ]
    },
    completed: {
        type: Number,
        default: 0
    }
});

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;


