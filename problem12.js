// Convert a String to an Integer (atoi Implementation) 
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++ atoi function).
// The algorithm for myAtoi(string s) is as follows:
// 1. Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or reaching the end of the input. The rest of your string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).

function myAtoi(str) {
    str = str.trim(); // Remove leading/trailing spaces
    if (!str) return 0;

    let sign = 1, i = 0, result = 0;
    
    // Check for sign
    if (str[i] === '-' || str[i] === '+') {
        sign = str[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + (str[i] - '0');

        // Handle integer overflow
        if (result * sign > 2147483647) return 2147483647;
        if (result * sign < -2147483648) return -2147483648;

        i++;
    }

    return result * sign;
}

// Example usage:
console.log(myAtoi("42"));            // 42
console.log(myAtoi("   -42"));        // -42
console.log(myAtoi("4193 with words"));// 4193
console.log(myAtoi("words and 987"));  // 0
console.log(myAtoi("-91283472332"));   // -2147483648 (clamped)
console.log(myAtoi("21474836460"));    // 2147483647 (clamped)
// Explanation:
// Trim whitespace using trim().
// Check for a sign (+ or -) and update sign accordingly.
// Extract digits while ignoring non-numeric characters.
// Handle integer overflow by clamping values to INT_MAX (2147483647) and INT_MIN (-2147483648).
// Return the final integer after applying the sign.
// This function follows the rules of atoi as seen in languages like C and Java.