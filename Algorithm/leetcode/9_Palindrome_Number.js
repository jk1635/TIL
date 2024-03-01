// https://leetcode.com/problems/palindrome-number

// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

const x = 121; // true
// const x = -121; // false
// const x = 10; // false

const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const original = x.toString();
    const reverse = original.split("").reverse().join("");

    return original === reverse;
};

console.log(isPalindrome(x));
