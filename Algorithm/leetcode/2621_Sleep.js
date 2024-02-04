// https://leetcode.com/problems/sleep

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 * @return {Promise}
 */

const millis = 100; // 100
// const millis = 200; // 200

async function sleep(millis) {
    await new Promise(response => setTimeout(response, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

console.log(sleep(millis));