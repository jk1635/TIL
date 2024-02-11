// https://leetcode.com/problems/array-reduce-transformation

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) { return accum + curr };
const init = 0; // 10
// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) { return accum + curr * curr };
// const init = 100; // 130
// const nums = [];
// const fn = function sum(accum, curr) { return 0 };
// const init = 25; // 25

const reduce = function (nums, fn, init) {
    let answer = init;
    for (let i = 0; i < nums.length; i++) {
        answer = fn(answer, nums[i]);
    }
    return answer;
};

console.log(reduce(nums, fn, init));