// https://leetcode.com/problems/unique-number-of-occurrences/

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */

let arr = [1, 2, 2, 1, 1, 3]; // true
// let arr = [1, 2]; // false
// let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]; // true

const uniqueOccurrences = function (arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]] = map[arr[i]] + 1;
        } else {
            map[arr[i]] = 1;
        }
    }

    const occurrences = Object.values(map);
    const uniqueOccurrences = new Set(occurrences);

    return occurrences.length === uniqueOccurrences.size;
};

console.log(uniqueOccurrences(arr))