// https://leetcode.com/problems/to-be-or-not-to-be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". * @param {string} val

/**
 * @param {string} val
 * @return {Object}
 */

const func = () => expect(5).toBe(5); // {"value": true}
// const func = () => expect(5).toBe(null); // {"error": "Not Equal"}
// const func = () => expect(5).notToBe(null); // {"value": true}

const expect = function (val) {
        function toBe(val2) {
            if (val === val2) {
                return true;
            }
            throw new Error("Not Equal");
        }
        function notToBe(val2) {
            if (val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
        return { toBe, notToBe };
    };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(func())