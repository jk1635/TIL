// https://leetcode.com/problems/counter-ii

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const init = 5;
const calls = ["increment", "reset", "decrement"]; // [6, 5, 4]
// const init = 0;
// const calls = ["increment", "increment", "decrement", "reset", "reset"]; // [1, 2, 1, 0, 0]

const createCounter = function (init) {
    let count = init;

    function increment() {
        count++;
        return count;
    }
    function decrement() {
        count--;
        return count;
    }
    function reset() {
        count = init;
        return count;
    }
    return {
        increment,
        decrement,
        reset,
    };
};

const counter = createCounter(init);
const results = calls.map(call => counter[call]());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log(results);