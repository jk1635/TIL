// https://leetcode.com/problems/valid-palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */

const s = "A man, a plan, a canal: Panama"; // true
// const s = "race a car"; // false
// const s = " "; // true

const isPalindrome = function (s) {
    const string = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reverseString = string.split("").reverse().join("").toLowerCase();
    return string === reverseString;
};

console.log(isPalindrome(s));