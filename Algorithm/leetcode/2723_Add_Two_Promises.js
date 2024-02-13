// https://leetcode.com/problems/add-two-promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60)); // 7
// const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
// const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30)); // -2

const addTwoPromises = async function (promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */