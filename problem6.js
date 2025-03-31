//  write a function that removes duplicates from a string
//  and returns the string with unique characters only.
//  The function should be case-insensitive, meaning that 'A' and 'a' are considered the same character.
//  The order of characters in the output string should be the same as their first appearance in the input string.
//  For example, if the input string is "aAbBcCdD", the output should be "abcd".
//  If the input string is empty, the function should return an empty string.
//  If the input string contains only spaces, the function should return an empty string.
function removeDuplicates1(str) {
  // Convert the string to lowercase to handle case-insensitivity
  str = str.toLowerCase();

  // Create a Set to store unique characters
  const uniqueChars = new Set();

  // Create an array to store the result
  const result = [];

  // Iterate through each character in the string
  for (let char of str) {
    // If the character is not already in the Set, add it to both the Set and the result array
    if (char !== ' ' && !uniqueChars.has(char)) {
      uniqueChars.add(char);
      result.push(char);
    }
  }

  // Join the result array into a string and return it
  return result.join('');
}

// Option 2 :// Using ES6 Set and spread operator
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

// Example usage:
console.log(removeDuplicates("aAbBcCdD")); // Output: "abcd"
console.log(removeDuplicates("hello")); // "helo"
console.log(removeDuplicates("banana")); // "ban"
console.log(removeDuplicates("mississippi")); // "misp"
// Explanation:
// new Set(str) – Creates a Set, which automatically removes duplicates.

// [...new Set(str)] – Converts the Set back into an array.

// .join('') – Joins the array back into a string.

// This method preserves the order of first occurrences of characters.