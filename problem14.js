// Find the Most Frequent Character
function mostFrequentChar(str) {
    if (str.length === 0) return null;

    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// Example usage:
console.log(mostFrequentChar("hello")); // "l"
console.log(mostFrequentChar("banana")); // "a"
console.log(mostFrequentChar("aabbbcccc")); // "c"
console.log(mostFrequentChar("")); // null
/*
Explanation:
Use an object (charCount) to store character frequencies.
Iterate through the string, updating the count for each character.
Track the most frequent character by comparing counts.
Return the most frequent character, or null if the string is empty.
This runs in O(n) time complexity, making it efficient.
*/