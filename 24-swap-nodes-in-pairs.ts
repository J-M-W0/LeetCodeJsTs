/* Leetcode 24: Swap Nodes in Pairs
 *
 * 
 * Objective: 
 *      Given a linked list, swap every two adjacent nodes and return its head. 
 *      You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).
 * Input:
 *      The head of a singly linked list.
 * Output:
 *      The head of the linked list after swapping every two adjacent nodes.
 *
 *
 * Example:
 *      1 -> 2 -> 3 -> 4:
 *      After swapping in pairs, the list becomes 2 -> 1 -> 4 -> 3.
 * */

export {}

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined) ? 0 : val;
        this.next = (next === undefined) ? null : next;
    }
};

const solution = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode(0, head);
    let current = dummy;
    while (current.next && current.next.next) {
        let firstNode = current.next;
        let secondNode = current.next.next;

        // swap.
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;

        // move to the next pair.
        current = firstNode;
    }

    return dummy.next;
};
