/* Leetcode 2. Add Two Numbers
 * 
 * Objective: 
 *      Add two numbers represented by two linked lists, where each node contains a single digit. 
 *      The digits are stored in reverse order, 
 *      and each of their non-empty linked lists does not contain any leading zero, except the number 0 itself.
 * Input:
 *      Two non-empty linked lists representing two non-negative integers.
 * Output:
 *      A linked list representing the sum of the two numbers.
 * Constraints:
 *      The digits are stored in reverse order.
 *      Each node can only store one digit.
 *      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example:
 *      l1: 2 -> 4 -> 3 (represents 342)
 *      l2: 5 -> 6 -> 4 (represents 465)
 *      l1 + l2: 7 -> 0 -> 8 (represents 807)
 * */

const ListNode = (val=0, next=null) => ( {val, next} );

const addTwoNumbers = (l1, l2, carry=0) => {
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
