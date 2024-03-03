// https://leetcode.com/problems/squares-of-a-sorted-array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [-4, -1, 0, 3, 10]; // [0, 1, 9, 16, 100]
// const nums = [-7, -3, 2, 3, 11]; // [4, 9, 9, 49, 121]

const sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    return nums.sort((a, b) => a - b);
};

console.log(sortedSquares(nums));
