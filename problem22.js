// Replace Spaces with %20 (URL Encoding)
// Given a string, replace all spaces with %20. The input string is guaranteed to have enough space at the end 
// to hold the additional characters, and the true length of the string is given as a parameter.
function replaceSpaces(str, trueLength) {
    let result = '';
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') {
            result += '%20';
        } else {
            result += str[i];
        }
    }
    return result;
}
// Example usage:
console.log(replaceSpaces("Mr John Smith    ", 13)); // "Mr%20John%20Smith"
console.log(replaceSpaces("Hello World    ", 11)); // "Hello%20World"

// Alternative method using split and join
function encodeSpaces(str) {
    return str.replace(/ /g, '%20');
}

// Example usage:
console.log(encodeSpaces("Hello World"));  // "Hello%20World"
console.log(encodeSpaces("Mr John Smith")); // "Mr%20John%20Smith"
console.log(encodeSpaces(" URL Encoding ")); // "%20URL%20Encoding%20"
console.log(encodeSpaces("NoSpacesHere")); // "NoSpacesHere"
/**
 * Explanation:
Use .replace(/ /g, '%20'):

The regex / /g matches all spaces in the string.

'%20' replaces each space.

Handles multiple spaces, leading, and trailing spaces.

Returns a new string with spaces replaced.

This runs in O(n) time complexity, making it efficient. 
 */