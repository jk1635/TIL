// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];
// let nums = [3, 2, 4];
// let nums = [3, 3];
const target = 9;
// let target = 6;
// let target = 6;

const twoSum = function (nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const n = target - nums[i];
        if (n in map) {
            return [map[n], i];
        }
        map[nums[i]] = i;
    }
};

console.log(twoSum(nums, target));