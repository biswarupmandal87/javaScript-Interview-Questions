// Find the Number of Words in a String
// Write a function that takes a string as input and returns the number of words in that string.
// A word is defined as a sequence of characters separated by spaces.
// For example, the string "Hello, world!" contains two words: "Hello," and "world!".
// You can assume that the input string will not be empty and will not contain any leading or trailing spaces.
// Your function should return the number of words in the string.
// Example input: "Hello, world!"
// Example output: 2
// Example input: "This is a test string."
// Example output: 5
function countWords(str) {
    // Split the string by spaces and filter out any empty strings
    const words = str.split(' ').filter(word => word.length > 0);
    // Return the number of words
    return words.length;
}

// another way to count words in a string
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}

// Example usage:
console.log(wordCount("Hello World")); // 2
console.log(wordCount("JavaScript is fun")); // 3
console.log(wordCount("  This   is   a   test  ")); // 4
console.log(wordCount("")); // 0
console.log(wordCount("OneWord")); // 1
/**
 * Explanation:
Use .trim() to remove leading and trailing spaces.

Use .split(/\s+/) to split the string by one or more spaces.

Return the length of the resulting array, which represents the word count.

This runs in O(n) time complexity, making it efficient.
 */