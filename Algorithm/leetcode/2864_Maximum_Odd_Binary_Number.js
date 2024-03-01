// https://leetcode.com/problems/maximum-odd-binary-number

// You are given a binary string s that contains at least one '1'.
// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
// Return a string representing the maximum odd binary number that can be created from the given combination.
// Note that the resulting string can have leading zeros.

/**
 * @param {string} s
 * @return {string}
 */

const s = "010"; // "001"
// const s = "0101"; // "1001"

const maximumOddBinaryNumber = function (s) {
    const list = s.split("").sort((a, b) => b - a);
    list.push(list.shift());
    return list.join("");
};

console.log(maximumOddBinaryNumber(s));