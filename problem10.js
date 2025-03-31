// Check if Two Strings are Anagrams
// Given two strings, return true if they are anagrams of each other, and false otherwise.

// Example: Input: "anagram", "nagaram", Output: true
// Example: Input: "rat", "car", Output: false
function areAnagrams(str1, str2) {
    const formatString = (str) => 
        str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    
    return formatString(str1) === formatString(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true

// Explanation:
// Convert to lowercase to ignore case differences.
// Remove non-alphanumeric characters to focus only on letters and numbers.
// Sort characters to ensure both strings have the same letters in the same order.
// Compare the processed strings—if they're identical, the original words are anagrams.