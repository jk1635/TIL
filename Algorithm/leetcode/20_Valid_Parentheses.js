// https://leetcode.com/problems/valid-parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */

const s = "()"; // true
// const s = "()[]{}"; // true
// const s = "(]"; // false

const isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
            stack.push(currentChar);
        } else {
            if ((currentChar === ")" && stack[stack.length - 1] !== "(") || (currentChar === "}" && stack[stack.length - 1] !== "{") || (currentChar === "]" && stack[stack.length - 1] !== "[")) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid(s));