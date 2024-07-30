/* Letter 19: Remove nth Node from End of List
 *
 *
 * Objective: 
 *      Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Input:
 *      The head of a linked list.
 *      An integer n indicating the position of the node to remove from the end of the list.
 * Output:
 *      The head of the linked list after the removal.
 *
 *
 * Example:
 *      1 -> 2 -> 3 -> 4 -> 5 and n = 2:
 *      After removing the 2nd node from the end (which is 4), the linked list becomes 1 -> 2 -> 3 -> 5.
 * */

export {};

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?:ListNode | null) {
        this.val = (val === undefined) ? 0 : val;
        this.next = (next === undefined) ? null : next;
    }
};

const solution = (head: ListNode | null, n: number): ListNode | null => {
    let dummy: ListNode | null = new ListNode(0);
    dummy.next = head;
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // move fast ahead by n nodes.
    for (let i = 0; i <= n; i++) {
        if (fast === null) {
            // if the list is not that long enough, just return null.
            return null;
        }
        fast = fast.next;
    }

    // move fast to the end, maining the gap.
    while (fast !== null) {
        
        fast = fast.next;
        
        if (slow === null) {
            // if the list is not that long enough, just return null;
            // but actually this if-block is unneccessary, just to avoid the language server warning.
            return null;
        }
        slow = slow.next;
    }

    if (slow === null || slow.next === null) {
        // check that slow and slow.next could not be null to perform remove,
        // but here also the if-block is not neccessary, just to avoid language server warning.
        return null;
    }
    
    // skip the desired node.
    slow.next = slow.next.next;
    return dummy.next;
};
