// Convert a Sentence into an Acronym
// Given a sentence, convert it into an acronym by taking the first letter of each word and converting it to uppercase.
function toAcronym(sentence) {
    return sentence
        .split(' ')       // Split the sentence into words
        .filter(word => word.length > 0) // Remove empty strings (in case of extra spaces)
        .map(word => word[0].toUpperCase()) // Take the first letter of each word & uppercase it
        .join('');        // Join the letters into a single string
}

// Example usage:
console.log(toAcronym("JavaScript Object Notation")); // "JSON"
console.log(toAcronym("HyperText Markup Language")); // "HTML"
console.log(toAcronym("Asynchronous JavaScript and XML")); // "AJAX"
console.log(toAcronym("Portable Network Graphics")); // "PNG"
console.log(toAcronym("  National Aeronautics and Space Administration ")); // "NASA"
/**
 * Explanation:
Split the sentence into words using .split(' ').

Filter out empty words (handles extra spaces).

Extract the first letter of each word and convert it to uppercase.

Join the letters to form the acronym.

This runs in O(n) time complexity, making it very efficient. 
 */