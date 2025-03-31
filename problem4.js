//You have an array of integer, find the length of longest increasing sub array
function longestIncreasingSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1, currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 1;
        }
    }

    return maxLength;
}

// Test cases
console.log(longestIncreasingSubarray([1, 2, 3, 2, 3, 4, 5])); // Output: 4
console.log(longestIncreasingSubarray([10, 20, 30, 5, 6, 7, 8, 9])); // Output: 5
console.log(longestIncreasingSubarray([5, 4, 3, 2, 1])); // Output: 1
console.log(longestIncreasingSubarray([1, 2, 3, 4, 5])); // Output: 5

// Explanation:
// The function iterates through the array and keeps track of the current length of the increasing subarray.
// If the current element is greater than the previous one, it increments the current length.
// If not, it resets the current length to 1. The maximum length found during the iteration is returned as the result.
// This approach has a time complexity of O(n), where n is the length of the array.

// The space complexity is O(1) since we are using a constant amount of extra space.
// This solution efficiently finds the length of the longest increasing subarray in a single pass through the array.
// This is a common problem in coding interviews and can be solved using a two-pointer technique or dynamic programming.

// alternatively, you can use a dynamic programming approach to solve this problem.
// Here's how you can do it:
function longestIncreasingSubarrayDP(arr) {
    if (arr.length === 0) return 0;

    const dp = new Array(arr.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
}

// Test cases
console.log(longestIncreasingSubarrayDP([1, 2, 3, 2, 3, 4, 5])); // Output: 4
console.log(longestIncreasingSubarrayDP([10, 20, 30, 5, 6, 7, 8, 9])); // Output: 5
console.log(longestIncreasingSubarrayDP([5, 4, 3, 2, 1])); // Output: 1
console.log(longestIncreasingSubarrayDP([1, 2, 3, 4, 5])); // Output: 5
