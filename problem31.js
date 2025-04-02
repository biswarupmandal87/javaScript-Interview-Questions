// write a function to flatten an array of arrays
// for example: [[1, 2], [3, 4], [5]] => [1, 2, 3, 4, 5]

function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2], [3, 4], [5]]));

// alternative solution 
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]

//Using Stack (Iterative Approach)
function flattenArray(arr) {
    let stack = [...arr];
    let result = [];

    while (stack.length) {
        let next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse(); // Reverse to maintain order
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
