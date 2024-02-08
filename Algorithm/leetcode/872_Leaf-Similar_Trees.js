// TODO: Need to solve

// https://leetcode.com/problems/leaf-similar-trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8). Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const { generator872 } = require('../../docs/algorithmUtils');

const array1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
const array2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]; // true
// const array1 = [1, 2, 3];
// const array2 = [1, 3, 2]; // false

const root1 = generator872(array1);
const root2 = generator872(array2);

const leafSimilar  = function(root1, root2) {
    const leaves1 = [];
    const leaves2 = [];

    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);

    const leavesCount = leaves1.length;
    if (leavesCount !== leaves2.length) {
        return false;
    }

    for (let i = 0; i < leavesCount; ++i) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    return true;
};

const getLeaves = function (node, leaves) {
    if (node == null) {
        return;
    }

    if (node.left == null && node.right == null) {
        leaves.push(node.val);
    } else {
        getLeaves(node.left, leaves);
        getLeaves(node.right, leaves);
    }
};

console.log(leafSimilar(root1, root2));
