// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4]; // 5
// const prices = [7, 6, 4, 3, 1]; // 0

const maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[0]) {
            prices[0] = prices[i];
        }
        if (prices[i] - prices[0] > profit) {
            profit = prices[i] - prices[0];
        }
    }
    return profit;
};

console.log(maxProfit(prices));