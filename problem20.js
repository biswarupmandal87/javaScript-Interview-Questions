// Find the Longest Common Prefix
// Given an array of strings, find the longest common prefix string amongst them.
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Remove last character
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inter"
console.log(longestCommonPrefix(["throne", "throne"])); // "throne"
console.log(longestCommonPrefix([])); // ""
/**
 * Explanation:
Start with the first string as the prefix.

Compare with each subsequent string and shorten the prefix if necessary.

Use indexOf(prefix) !== 0 to check if the prefix is at the start of the string.

Shrink the prefix character by character (slice(0, -1)) until a match is found.

Return the longest common prefix, or "" if none exists.

This runs in O(n * m) time complexity (where n is the number of strings and m is the length of the prefix), 
making it efficient for small to moderate input sizes.
 */