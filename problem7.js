// write a javascript function to Reverse a String
// Option 1: using recursion
function reverseString(str) {
    // Base case: if the string is empty or has one character, return it
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: reverse the substring and append the first character at the end
    return reverseString(str.slice(1)) + str[0];
}
// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
// option 2: using built-in methods
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
