// check a number is palindrom or not using javascript
function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();
    // Reverse the string and compare it with the original
    return str === str.split('').reverse().join('');
}
// Example usage:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
// alternative way to check if a number is palindrome
function isPalindromeNumber(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) return false; // Negative numbers & numbers ending with 0 (except 0) are not palindromes

    let reversed = 0, original = num;
    while (num > 0) {
        let digit = num % 10; // Extract last digit
        reversed = reversed * 10 + digit; // Append to reversed number
        num = Math.floor(num / 10); // Remove last digit
    }
    return original === reversed;
}

// Example usage
console.log(isPalindromeNumber(121));  // true
console.log(isPalindromeNumber(123));  // false
console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(-121)); // false
