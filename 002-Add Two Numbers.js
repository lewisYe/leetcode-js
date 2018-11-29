/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Difficulty：Medium
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
 * reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var result = new ListNode(0);
  var current = result;
  while( l1  || l2){
      var x = l1 ? l1.val : 0;
      var y = l2 ? l2.val : 0;
      var sum = x + y + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum%10);
      if(l1){
          l1 = l1.next;
      }
      if(l2){
          l2 = l2.next;
      }
      current = current.next;
  }
  if(carry){
      current.next = new ListNode(carry);
  }
  return result.next;
};