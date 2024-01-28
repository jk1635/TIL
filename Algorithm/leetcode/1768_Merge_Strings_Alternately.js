// https://leetcode.com/problems/merge-strings-alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

/**
* @param {string} word1
* @param {string} word2
* @return {string}
*/

const word1 = "ab";
const word2 = "pqrs"; // "apbqrs"
// const word1 = "abc";
// const word2 = "pqr"; // "apbqcr"
// const word1 = "abcd";
// const word2 = "pq"; // "apbqcd"

const mergeAlternately = function(word1, word2) {
    let response = "";
    let i = 0;

    while (i < word1.length && i < word2.length) {
        response += word1[i];
        response += word2[i];
        i++;
    }

    if (i < word1.length) {
        response += word1.slice(i);
    }

    if (i < word2.length) {
        response += word2.slice(i);
    }

    return response;
};


console.log(mergeAlternately(word1, word2));
