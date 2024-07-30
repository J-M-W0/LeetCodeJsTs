/* Leetcode 23: Merge k Sorted Lists
 *
 *
 * Objective: 
 *      Given an array of k sorted linked lists, merge them into one sorted linked list.
 * Input:
 *      An array of k sorted linked lists. Each linked list is sorted in ascending order.
 * Output:
 *      A single sorted linked list that results from merging all the sorted linked lists.
 *
 *
 * Example:
 *      lists = [[1->4->5], [1->3->4], [2->6]]:
 *      The merged list is 1->1->2->3->4->4->5->6.
 * */

export {};

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val  = (val === undefined) ? 0 : val;
        this.next = (next === undefined) ? null : next;
    }
};

const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = merge(l1.next ,l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};

const solution = (lists: Array<ListNode | null>): ListNode | null => {
    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        let a: ListNode | null = lists.shift() ?? null;
        let b: ListNode | null = lists.shift() ?? null;
        const merged = merge(a, b);
        lists.push(merged);
    }

    return lists[0];
};
