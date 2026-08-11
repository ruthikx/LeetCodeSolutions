/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    //middle
    let slow = head;
    let fast = head;
    while(fast!==null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse
    let prev = null
    let curr = slow
    while(curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    //max
    let max = 0
    let first = head;
    let second = prev;
    while(second !== null ){
        let sum = first.val + second.val
        max = Math.max(max,sum)
        first = first.next;
        second = second.next;
    }
    return max;


};