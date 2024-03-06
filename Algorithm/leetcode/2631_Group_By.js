// https://leetcode.com/problems/group-by

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.

/**
 * @param {Function} fn
 * @return {Object}
 */

const array = [{"id":"1"}, {"id":"1"}, {"id":"2"}]
const fn = function (item) { return item.id } // {"1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}]}

// const array = [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// const fn = function (list) { return String(list[0])} // {"1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]}

Array.prototype.groupBy = function(fn) {
    let object = {};
    this.forEach(item => {
        const key = fn(item);
        if(!object[key]) {
            object[key] = [];
        }
        object[key].push(item);
    });
    return object;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */