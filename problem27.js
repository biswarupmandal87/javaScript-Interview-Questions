// Find the Shortest Word in a String
// Write a function that takes a string as input and returns the shortest word in that string.
// A word is defined as a sequence of characters separated by spaces. If there are multiple shortest words, return the first one encountered.
// For example, the string "Hello, world!" contains two words: "Hello," and "world!". The shortest word is "world!".

function findShortestWord(str) {
    // Split the string into words using spaces as the delimiter
    const words = str.split(' ');
    
    // Initialize a variable to hold the shortest word
    let shortestWord = words[0];
    
    // Iterate through each word in the array
    for (let i = 1; i < words.length; i++) {
        // If the current word is shorter than the shortest word found so far
        if (words[i].length < shortestWord.length) {
            // Update the shortest word
            shortestWord = words[i];
        }
    }
    
    // Return the shortest word found
    return shortestWord;
}

// Example usage:
console.log(findShortestWord("Hello, world!")); // "world!"
console.log(findShortestWord("This is a test string.")); // "a"

// Another way to find the shortest word in a string
function findShortestWord(str) {
    if (!str.trim()) return ""; // Handle empty or whitespace-only strings

    return str
        .split(/\s+/) // Split by spaces (handles multiple spaces)
        .reduce((shortest, word) => word.length < shortest.length ? word : shortest);
}

// Example usage:
console.log(findShortestWord("JavaScript is awesome")); // "is"
console.log(findShortestWord("Find the shortest word in this sentence")); // "the"
console.log(findShortestWord("One two three")); // "One"
console.log(findShortestWord("  Hello   world   ")); // "world"
console.log(findShortestWord("")); // ""
/**
 * Explanation:
Check for empty input – If the string contains only spaces, return "".

Use .split(/\s+/) to split by one or more spaces.

Use .reduce() to find the shortest word by comparing lengths.

Returns the shortest word, preserving order in case of ties.

This runs in O(n) time complexity, making it efficient.
 */