// Convert a String to a Character Array
// Given a string, convert it to an array of characters.
function stringToCharArray(str) {
    return Array.from(str);
}
// Example usage:
console.log(stringToCharArray("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(stringToCharArray("JavaScript")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

function stringToCharArray(str) {
    return str.split('');
}

// Example usage:
console.log(stringToCharArray("hello"));  // ['h', 'e', 'l', 'l', 'o']
console.log(stringToCharArray("JavaScript")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(stringToCharArray("12345")); // ['1', '2', '3', '4', '5']
console.log(stringToCharArray("")); // []
/**
 * Explanation:
Use .split('') to break the string into an array of individual characters.

Returns an array where each element is a single character.

Handles empty strings, returning an empty array.

This runs in O(n) time complexity, making it very efficient. 
 */