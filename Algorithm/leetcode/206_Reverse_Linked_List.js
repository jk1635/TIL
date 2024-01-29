// https://leetcode.com/problems/reverse-linked-list

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const head = [1, 2, 3, 4, 5]; // [5, 4, 3, 2, 1]
// const head = [1, 2]; // [2, 1]
// const head = []; // []

const reverseList = function (head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        const nextTemp = current.next;
        current.next = previous;
        previous = current;
        current = nextTemp;
    }
    return previous;
};