// https://leetcode.com/problems/chunk-array

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.

const arr = [1, 2, 3, 4, 5];
const size = 1; // [[1], [2], [3], [4], [5]]
// const arr = [1, 9, 6, 3, 2];
// const size = 3; // [[1, 9, 6], [3, 2]]
// const arr = [8, 5, 3, 2, 6];
// const size = 6; // [[8, 5, 3, 2, 6]]

const chunk = function (arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i = i + size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;
};

console.log(chunk(arr, size));