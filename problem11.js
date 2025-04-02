// Find the Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestUniqueSubstring(s) {
    let charIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charIndex[s[end]] !== undefined && charIndex[s[end]] >= start) {
            start = charIndex[s[end]] + 1;
        }
        
        charIndex[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
console.log(longestUniqueSubstring("bbbbb"));    // 1 ("b")
console.log(longestUniqueSubstring("pwwkew"));   // 3 ("wke")
console.log(longestUniqueSubstring("dvdf"));     // 3 ("vdf")
// Explanation:
// Use a sliding window approach with two pointers (start and end).
// Use a hashmap (charIndex) to store the last seen index of each character.
// If a repeating character is found, move the start pointer to the right of its last seen index.
// Update the max length whenever a longer unique substring is found.
// This algorithm runs in O(n) time complexity, making it efficient.

// another solution
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")
/**
 * Explanation:
Use a Set to store characters in the current window.
Expand the window by adding characters (right pointer).
If a duplicate is found, shrink the window from the left.
Track the maximum length found.
🔹 Time Complexity: 
O(n) (Each character is processed at most twice)
🔹 Space Complexity: 
O(min(n,26)) (Since there are at most 26 lowercase letters)
 */