// https://leetcode.com/problems/sort-by

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

const arr = [5, 4, 1, 2, 3];
const fn = x => x; // [1, 2, 3, 4, 5]
// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
// const fn = d => d.x; // [{"x": -1}, {"x": 0}, {"x": 1}]
// const arr = [[3, 4], [5, 2], [10, 1]];
// const fn = x => x[1]; // [[10, 1], [5, 2], [3, 4]]

const sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy(arr, fn));