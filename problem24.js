// Check if a String Contains Only Digits
// Given a string, check if it contains only digits (0-9).
function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}
// Example usage:
console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("123a5")); // false
console.log(isOnlyDigits("")); // false
console.log(isOnlyDigits("123 456")); // false
/**
 * Explanation:
Use a regular expression /^\d+$/:

^ asserts the start of the string.

\d+ ensures one or more digits.

$ asserts the end of the string.

.test(str) returns true if the string matches the pattern, otherwise false.

Handles edge cases, like empty strings and spaces.

This runs in O(n) time complexity, making it efficient.
 */