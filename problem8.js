//  Count the Occurrences of Each Character
//  Option 1 : // Using ES6 Map and forEach method
function countOccurrences(str) {
    const charCount = new Map();

    // Count occurrences of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    return charCount;
}

// Example usage:
console.log(countOccurrences("hello")); // Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
console.log(countOccurrences("banana")); // Map { 'b' => 1, 'a' => 3, 'n' => 2 }

//  option 2 : // Using ES6 Object and forEach method
function countOccurrences(str) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}
// Example usage:
console.log(countOccurrences("hello")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countOccurrences("banana")); // { b: 1, a: 3, n: 2 }
// Explanation:
// Loop through the string character by character.
// Use an object (charCount) to store the count of each character.
// Increment the count each time the character appears.
// Return the object with character frequencies.