// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = "anagram";
const t = "nagaram"; // true
// const s = "rat";
// const t = "car"; // false

// 1.
const isAnagram = function (s, t) {
    const sArray = s.split("").sort();
    const tArray = t.split("").sort();

    return sArray.join("") === tArray.join("");
};

console.log(isAnagram(s, t));

// 2.
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (const char of s) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else if (!charCount[char]) {
            charCount[char] = 1;
        }
    }

    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }
    return true;
};

console.log(isAnagram(s, t));