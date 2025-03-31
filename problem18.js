// Check if a String is a Valid Shuffle of Two Strings
// Given two strings, s1 and s2, and a string s3, check if s3 is a valid shuffle of s1 and s2.
function isValidShuffle(str1, str2, shuffled) {
    if (str1.length + str2.length !== shuffled.length) return false;

    let i = 0, j = 0, k = 0;

    while (k < shuffled.length) {
        if (i < str1.length && str1[i] === shuffled[k]) {
            i++;
        } else if (j < str2.length && str2[j] === shuffled[k]) {
            j++;
        } else {
            return false;
        }
        k++;
    }

    return i === str1.length && j === str2.length;
}

// Example usage:
console.log(isValidShuffle("abc", "def", "adbcef")); // true
console.log(isValidShuffle("abc", "def", "abdecf")); // true
console.log(isValidShuffle("abc", "def", "abcfde")); // false
console.log(isValidShuffle("abc", "def", "abcdefg")); // false
/**
 * Explanation:
Check if the lengths match – If shuffled.length !== str1.length + str2.length, return false.

Use three pointers (i, j, k) to track positions in str1, str2, and shuffled.

Iterate through shuffled, ensuring each character comes from str1 or str2 in order.

Return true if both str1 and str2 are fully used; otherwise, return false.

This method runs in O(n) time complexity, making it efficient.
 */