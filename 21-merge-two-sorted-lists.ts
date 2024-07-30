/* Leetcode 21: Merge Two Sorted Lists
 *
 *
 * Objective: Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
 * Input:
 * Two sorted linked lists.
 * Output:
 * A new sorted linked list made by splicing together the nodes of the given lists.
 *
 *
 * Example:
 *      For l1 = 1 -> 2 -> 4 and l2 = 1 -> 3 -> 4, the merged list is 1 -> 1 -> 2 -> 3 -> 4 -> 4.
 * */

export {};

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined) ? 0 : val;
        this.next = (next === undefined) ? null : next;
    }
};

const solution = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    let head: ListNode | null = new ListNode(0);
    let current = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
    }

    current.next = l1 || l2;

    return head.next;
};
