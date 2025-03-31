// Remove a Given Character from a String
// Write a function that takes a string and a character as input and returns the string with all occurrences of the character removed.
// For example, the string "Hello, world!" with the character 'o' should return "Hell, wrld!".
// You can assume that the input string will not be empty and the character will be a single character.
// Your function should return the modified string.
// Example input: "Hello, world!", 'o'
// Example output: "Hell, wrld!"
// Example input: "JavaScript is fun!", 'a'
// Example output: "JvScript is fun!"

function removeCharacter(str, charToRemove) {
    const regex = new RegExp(charToRemove, 'g'); // Create a regex pattern for global replacement
    return str.replace(regex, '');
}

// Example usage:
console.log(removeCharacter("hello world", "o")); // "hell wrld"
console.log(removeCharacter("JavaScript", "a")); // "JvScript"
console.log(removeCharacter("123-456-789", "-")); // "123456789"
console.log(removeCharacter("banana", "n")); // "baaa"
/**
 * Explanation:
Create a regex dynamically using new RegExp(charToRemove, 'g'):

This ensures all occurrences of the character are removed.

Use .replace(regex, '') to replace matches with an empty string.

Works for any character (letters, numbers, symbols).

This runs in O(n) time complexity, making it efficient.
 */