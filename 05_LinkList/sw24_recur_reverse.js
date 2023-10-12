/*
 * @Author: YiY
 * @Date: 2023-08-29 10:36:32
 * @LastEditTime: 2023-08-29 13:40:14
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @structure recursion
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head.next == null || head == null) {  //初始为空 || 结尾处理
    return head
  }
  const newHead = reverseList(head)
  head.next.next = head
  head.next = null
  return newHead
};