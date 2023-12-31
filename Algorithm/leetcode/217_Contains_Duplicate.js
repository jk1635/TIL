// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums = [1, 2, 3, 1];

const containsDuplicate = function (nums) {
    return nums.length !== [...new Set(nums)].length;
};

console.log(containsDuplicate(nums)); // true