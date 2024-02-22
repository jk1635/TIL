// https://leetcode.com/problems/is-object-empty

// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

const obj = { x: 5, y: 42 }; // false
// const obj = {}; // true
// const obj = [null, false, 0]; // false

const isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};

console.log(isEmpty(obj));
