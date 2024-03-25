// https://leetcode.com/problems/find-all-duplicates-in-an-array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

const nums = [4, 3, 2, 7, 8, 2, 3, 1]; // [2, 3]
// const nums = [1, 1, 2]; // [1]
// const nums = [1]; // []

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function (nums) {
    const duplicate = new Set();
    const array = [];

    for (let i = 0; i < nums.length; i++) {
        if (duplicate.has(nums[i])) {
            array.push(nums[i]);
        } else {
            duplicate.add(nums[i]);
        }
    }

    return array;
};

console.log(findDuplicates(nums));
