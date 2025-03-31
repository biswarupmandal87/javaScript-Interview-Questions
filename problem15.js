// Find All Substrings of a Given String
// Given a string s, find all unique substrings of length k. Return them in a list.
// Example 1:
// Input: s = "abcabc", k = 3
// Output: ["abc", "bca", "cab"]
// Explanation: The unique substrings of length 3 are "abc", "bca", and "cab".

function findAllSubstrings(str) {
    let substrings = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }

    return substrings;
}

// Example usage:
console.log(findAllSubstrings("abc"));
// Output: ["a", "ab", "abc", "b", "bc", "c"]
console.log(findAllSubstrings("abcd"));
// Output: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
/**
Explanation:
Use two nested loops:
The outer loop (i) marks the starting index.
The inner loop (j) marks the ending index.
Extract substrings using substring(i, j).
Store each substring in an array.
This method generates O(n²) substrings, which is efficient for short strings but may be slow for very long ones. 
 */