// https://leetcode.com/problems/set-mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [1, 2, 2, 4]; // [2, 3]
// const nums = [1, 1]; // [1, 2]

const findErrorNums = function (nums) {
    const result = [];
    const setNums = new Set(nums);

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            result[0] = nums[i];
            break;
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!setNums.has(i)) {
            result[1] = i;
            break;
        }
    }

    return result;
};

console.log(findErrorNums(nums));