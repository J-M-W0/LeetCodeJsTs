export {}; // an empty export.

type ListNode = {
    val: number;
    next: ListNode | null;
};

// Using linked list algorithm
const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null => {
    if (!l1 && !l2 && carry === 0) {
        return null;
    }

    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    return {
        val: sum % 10,
        next: addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor(sum / 10))
    };
};
