// Check if a String is a Rotation of Another String
function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    return (s1 + s1).includes(s2);
}

// Example usage:
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "lohel")); // true
console.log(isRotation("hello", "world")); // false
console.log(isRotation("abc", "acb")); // false
/**
 * Explanation:
Check if lengths are equal – If not, they can't be rotations.

Concatenate s1 with itself – This ensures all possible rotations appear in the new string.

Check if s2 is a substring of s1 + s1 using .includes().

This method runs in O(n) time complexity, making it efficient.
 */