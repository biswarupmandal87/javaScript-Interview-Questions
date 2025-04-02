//write a function to find the largest sum of contiguous sub array of an array
function maxSubArraySum(arr) {
    let maxSum = arr[0]; // Initialize max sum as the first element
    let currentSum = arr[0]; // Initialize current sum

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]); // Extend or start new subarray
        maxSum = Math.max(maxSum, currentSum); // Update max sum if needed
    }

    return maxSum;
}

// Example usage:
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray: [4, -1, 2, 1])
console.log(maxSubArraySum([1, 2, 3, 4])); // Output: 10
console.log(maxSubArraySum([-1, -2, -3, -4])); // Output: -1
console.log(maxSubArraySum([5, -2, 3, 4, -1, 2])); // Output: 11
