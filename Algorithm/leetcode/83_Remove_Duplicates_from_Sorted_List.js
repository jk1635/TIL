// https://leetcode.com/problems/remove-duplicates-from-sorted-list

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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

const head = [1, 1, 2]; // [1, 2]
// const head = [1, 1, 2, 3, 3]; // [1, 2, 3]

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 1.
const deleteDuplicates = function (head) {
    if (!head) {
        return null;
    }
    let current = head;

    while (current && current.next) {
        const { next } = current;
        if (next.val === current.val) {
            current.next = next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

console.log(deleteDuplicates(head));

// 2. Set requires iterable, but head is a ListNode object.
const deleteDuplicates = function (head) {
    const setHead = new Set(head);
    const arrayHead = Array.from(setHead).sort((a, b) => a - b);
    return arrayHead;
};

console.log(deleteDuplicates(head));
