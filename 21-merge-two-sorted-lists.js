function ListNode(val, next) {
    this.val  = (val === undefined)  ? 0    : val;
    this.next = (next === undefined) ? null : next;
}

var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    const dummy = new ListNode(0, null);
    const val1 = list1.val;
    const val2 = list2.val;

    if (val1 < val2) {
        dummy.val = val1;
        list1 = list1.next;
    } else {
        dummy.val = val2;
        list2 = list2.next;
    }

    dummy.next = mergeTwoLists(list1, list2);

    return dummy;
};

// no big performance difference, just different approach, one recursive, one iterative.
var mergeTwoLists2 = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    const dummy = new ListNode(0, null);
    let current = dummy;

    while (list1 && list2) {
        const val1 = (!list1) ? 0 : list1.val;
        const val2 = (!list2) ? 0 : list2.val;

        if (val1 < val2) {
            current.next = new ListNode(val1, null);
            list1 = (!list1) ? null : list1.next;
        } else {
            current.next = new ListNode(val2, null);
            list2 = (!list2) ? null : list2.next;
        }
        current = current.next;
    }
    current.next = (!l1) ? l2 : l1;

    return dummy.next;
};
