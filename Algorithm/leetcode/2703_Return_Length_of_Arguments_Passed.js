// https://leetcode.com/problems/return-length-of-arguments-passed

// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

const args = [5]; // 1
// const args = [{}, null, "3"]; // 3

const argumentsLength = function (...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */