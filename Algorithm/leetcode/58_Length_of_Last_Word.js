// https://leetcode.com/problems/length-of-last-word

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

const s = "Hello World"; // 5
// const s = "   fly me   to   the moon  "; // 4
// const s = "luffy is still joyboy"; // 6

const lengthOfLastWord = function (s) {
    const array = s.trim().split(" ");
    return array[array.length - 1].length;
};

console.log(lengthOfLastWord(s));
