// https://leetcode.com/problems/house-robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 2, 3, 1]; // 4
// const nums = [2, 7, 9, 3, 1]; // 12

const rob = function (nums) {
    let currentMax = 0;
    let previousMax = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + previousMax, currentMax);
        previousMax = currentMax;
        currentMax = temp;
    }
    return currentMax;
};

console.log(rob(nums));
