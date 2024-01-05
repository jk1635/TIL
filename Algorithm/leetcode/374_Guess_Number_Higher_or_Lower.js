// https://leetcode.com/problems/guess-number-higher-or-lower/description/

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const n = 10; const pick = 6; // 6
// const n = 1; const pick = 1; // 1
// const n = 2; const pick = 1; // 1

const guess = function (num) {
    if (num === pick) return 0;
    return num > pick ? -1 : 1;
};

const guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (guess(mid) <= 0) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(guessNumber(pick))