// Reverse Words in a Sentence
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Example: Input: "Let's take LeetCode contest", Output: "s'teL ekat edoCteeL tsetnoc"
// Example: Input: "Hello World", Output: "olleH dlroW"

function reverseWords(sentence) {
    // Split the string into words, reverse each word, and join them back together
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

//  Example usage:
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Hello World")); // "olleH dlroW"

// Explanation:
// split(' ') – Splits the sentence into an array of words.
// map(word => word.split('').reverse().join('')) – Reverses each word.
// join(' ') – Joins the reversed words back into a sentence.