// write a function that can check whether a string can be arranged as palindrom

// for example: "aabb" can be arranged as "abba" or "baab"
// but "abc" cannot be arranged as palindrome
// "aabb" => true
// "abc" => false
// "aabbcc" => true
function canBeArrangedAsPalindrome(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}

// Test cases
console.log(canBeArrangedAsPalindrome("aabb")); // true
console.log(canBeArrangedAsPalindrome("racecar")); // true
console.log(canBeArrangedAsPalindrome("carrace")); // true