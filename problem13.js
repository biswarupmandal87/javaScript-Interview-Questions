// Compress a String (Run-Length Encoding)
function runLengthEncode(str) {
    if (str.length === 0) return "";

    let compressed = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

// Example usage:
console.log(runLengthEncode("aaabbcddd")); // "a3b2c1d3"
console.log(runLengthEncode("abcd"));      // "a1b1c1d1" (RLE is longer, so original can be returned)
console.log(runLengthEncode("wwwwaaadexxxxxxywww")); // "w4a3d1e1x6y1w3"

// Explanation:
// Iterate through the string, counting consecutive duplicate characters.
// Append the character and its count to the result.
// Reset the count when a different character is encountered.
// Return the compressed string if it’s shorter than the original; otherwise, return the original string.
// This method is useful for compressing repetitive data efficiently.