// First Non-Repeating Character
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
// Example: Input: "leetcode", Output: 0 (the first non-repeating character is 'l')
// Example: Input: "loveleetcode", Output: 2 (the first non-repeating character is 'v')

function firstNonRepeatingCharacter(str) {
  // Create a frequency map to count occurrences of each character
  const charCount = {};

  // Iterate through the string and populate the frequency map
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  return -1; // Return -1 if no non-repeating character is found
}

// Example usage:
console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: -1 (no non-repeating character)

//  Print the First Non-Repeating Character
//  Option 2 : // Using ES6 Map and forEach method
function firstNonRepeatingChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no unique character is found
}

// Example usage:
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("racecar")); // "e"
console.log(firstNonRepeatingChar("aabbcc")); // null
// Explanation:
// Count occurrences of each character in an object (charCount).
// Iterate again to find the first character with a count of 1.
// If no unique character is found, return null.
