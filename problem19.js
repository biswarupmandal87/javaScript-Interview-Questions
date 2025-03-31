// Convert a String to Title Case
// Given a string, convert it to title case (capitalize the first letter of each word).
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
// Example usage:
console.log(toTitleCase("hello world")); // "Hello World"
console.log(toTitleCase("javaScript is fun")); // "Javascript Is Fun"

//  option 2:
function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
// Example usage:
console.log(toTitleCase("hello world")); // "Hello World"
console.log(toTitleCase("this is a test STRING")); // "This Is A Test String"
/**
 * Explanation:
Convert the string to lowercase to standardize case.

Use replace(/\b\w/g, char => char.toUpperCase()):

\b ensures we match only the first letter of each word.

\w matches the first character of each word.

toUpperCase() capitalizes the matched character.

Returns the transformed string in title case.

This runs in O(n) time complexity, making it efficient.
 */