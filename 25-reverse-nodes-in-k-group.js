/* Leetcode 25: Reverse Nodes in k Group
 * 
 * Objective: 
 *      Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. 
 *      k is a positive integer and is less than or equal to the length of the linked list. 
 *      If the number of nodes is not a multiple of k, then left-out nodes in the end should remain as is. 
 *      You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * Input:
 *      The head of a singly linked list and an integer k.
 * Output:
 *      The head of the modified linked list after reversing every k nodes.
 *
 *
 * Example:
 *      1 -> 2 -> 3 -> 4 -> 5 with k = 2:
 *      The modified list would be 2 -> 1 -> 4 -> 3 -> 5.
 *      For k = 3, the modified list would be 3 -> 2 -> 1 -> 4 -> 5.
 * */


function ListNode(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
}


const solution = (head, k) => {
    
    let current = head;
    let count = 0;

    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count === k) {
        current = solution(current, k);
        while (count > 0) {
            count--;
            let temp = head.next;
            head.next = current;
            current = head;
            head = temp;
        }
        head = current;
    }

    return head;
};
