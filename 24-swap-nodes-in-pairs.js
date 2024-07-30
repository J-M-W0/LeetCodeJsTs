function ListNode(val, next) {
    this.val  = (val === undefined)  ? 0    : val;
    this.next = (next === undefined) ? null : next;
}

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
var swapPairs = function(head) {
    if (!head) {
        return head;
    }
    
    // the dummy node for return value.
    const dummy = new ListNode(0, head);
    // the 'next' node of the current points to the 'head'.
    let current = dummy;

    // my suggestion: patiently draw a graph and try to understand it.
    while (current.next !== null && current.next.next !== null) {
        const nodeAfterTwoNodes = current.next.next.next;
        const temp = current.next;
        current.next = temp.next;
        temp.next = nodeAfterTwoNodes;
        current.next.next = temp;
        current = temp;
    }

    return dummy.next;
};
