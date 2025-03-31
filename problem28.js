// Find the Longest Palindromic Substring
// Write a function that takes a string as input and returns the longest palindromic substring in that string.

function longestPalindromicSubstring(str) {
    if (str.length === 0) return "";

    let longest = "";

    for (let i = 0; i < str.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandAroundCenter(str, i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandAroundCenter(str, i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}

// Example usage:
console.log(longestPalindromicSubstring("babad")); // "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // "bb"
console.log(longestPalindromicSubstring("a")); // "a"
console.log(longestPalindromicSubstring("ac")); // "a" or "c"