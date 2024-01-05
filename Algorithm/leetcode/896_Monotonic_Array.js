// https://leetcode.com/problems/monotonic-array/

// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums = [1, 2, 2, 3]; // true
// const nums = [6, 5, 4, 4]; // true
// const nums = [1, 3, 2]; // false

const isMonotonic = function (nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        } else if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
    }
    return increasing || decreasing;
};

console.log(isMonotonic(nums));