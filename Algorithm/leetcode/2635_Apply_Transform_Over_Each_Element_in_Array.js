// https://leetcode.com/problems/apply-transform-over-each-element-in-array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const arr = [1, 2, 3];
const fn = function plusone(n) { return n + 1 }; // [2, 3, 4]

// const arr = [1, 2, 3];
// const fn = function plusI(n, i) { return n + i }; // [1, 3, 5]

// const arr = [1, 2, 3];
// const fn = function plusI(n, i) { return n + i }; // [42, 42, 42]

const map = function (arr, fn) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

console.log(map(arr, fn));