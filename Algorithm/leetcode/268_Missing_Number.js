// https://leetcode.com/problems/missing-number/

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [3, 0, 1]; // 2
// const nums = [0, 1]; // 2
// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // 8

const missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return expectedSum - actualSum;
};

console.log(missingNumber(nums));