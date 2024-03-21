// https://leetcode.com/problems/majority-element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [3, 2, 3]; // 3
// const nums = [2, 2, 1, 1, 1, 2, 2]; // 2

const majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement(nums));