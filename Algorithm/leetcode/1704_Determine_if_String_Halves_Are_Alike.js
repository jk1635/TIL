// https://leetcode.com/problems/determine-if-string-halves-are-alike/

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

/**
 * @param {string} s
 * @return {boolean}
 */

const s = "book"; // true
// const s = "textbook" // false

const halvesAreAlike = function (s) {
    const stringLength = s.length / 2;
    const aArray = s.substring(0, stringLength).split("");
    const bArray = s.substring(stringLength, s.length).split("");
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    const a = aArray.filter(item => vowels.includes(item)).length;
    const b = bArray.filter(item => vowels.includes(item)).length;

    return a === b;
};

console.log(halvesAreAlike(s));