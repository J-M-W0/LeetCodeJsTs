function ListNode(val, next) {
    this.val  = (val === undefined)  ? 0    : val;
    this.next = (next === undefined) ? null : next;
}

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let current = dummy;
    let end = dummy;
    while (n !== 0) {
        end = end.next;
        n--;
    }

    if (end === null) {
        return null;
    }
    
    // because 'end' node has already moved forward for 'n' steps,
    // so when it reaches the last node (end.next === null),
    // it means that now the 'current.next' is the node we're about to delete.
    while (end.next !== null) {
        current = current.next;
        end = end.next;
    }

    current.next = current.next.next;

    return dummy.next;
};


