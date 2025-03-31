// Remove All White Spaces from a String
function removeWhiteSpaces(str) {
    return str.replace(/\s+/g, '');
}

// Example usage:
console.log(removeWhiteSpaces("Hello World")); // "HelloWorld"
console.log(removeWhiteSpaces("  a b c d e f g ")); // "abcdefg"
console.log(removeWhiteSpaces("  a b c d e f g ")); // "abcdefg"
console.log(removeWhiteSpaces("  JavaScript is fun  ")); // "JavaScriptisfun"
/**
 * Explanation:
Use replace(/\s+/g, '') –

\s+ matches one or more whitespace characters (spaces, tabs, newlines).

g flag ensures all spaces are replaced.

Returns the modified string without spaces.

This runs in O(n) time complexity, making it efficient.
 */