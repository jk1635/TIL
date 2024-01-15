// https://leetcode.com/problems/find-players-with-zero-or-one-losses

// You are given an integer array matches where matches[i] = [winner i, loser i] indicates that the player winner i defeated player loser i in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

const matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]; // [[1, 2, 10], [4, 5, 7, 8]]
// const matches = [[2, 3], [1, 3], [5, 4], [6, 4]]; // [[1, 2, 5, 6], []]

const findWinners = function (matches) {
    const lossCount = new Map();
    const winners = new Set();

    for (const [winner, loser] of matches) {
        winners.add(winner);

        if (lossCount.has(loser)) {
            lossCount.set(loser, lossCount.get(loser) + 1);
        } else {
            lossCount.set(loser, 1);
        }
    }

    const noLoss = [];
    const oneLoss = [];

    for (const winner of winners) {
        if (!lossCount.has(winner)) {
            noLoss.push(winner);
        }
    }

    for (const [loser, count] of lossCount) {
        if (count === 1) {
            oneLoss.push(loser);
        }
    }

    return [noLoss.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];

};

console.log(findWinners(matches))