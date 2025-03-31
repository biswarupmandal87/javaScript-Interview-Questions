//Write a function to check a given string is palindrom or not
//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string and compare it with the original
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true

// Explanation:
// Remove non-alphanumeric characters using a regex ([^a-zA-Z0-9]).
// Convert to lowercase to make the check case-insensitive.
// Reverse the string and compare it with the original cleaned version.
// If they are the same, the string is a palindrome. 