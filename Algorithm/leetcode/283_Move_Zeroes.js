// https://leetcode.com/problems/move-zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [0, 1, 0, 3, 12]; // [1, 3, 12, 0, 0]
// const nums = [0]; // [0]

const moveZeroes = function (nums) {
    for (let i = nums.length; i--;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes(nums));