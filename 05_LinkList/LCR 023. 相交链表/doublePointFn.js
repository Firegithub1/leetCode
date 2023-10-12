/*
 * @Author: YiY
 * @Date: 2023-09-25 21:29:28
 * @LastEditTime: 2023-09-25 22:35:09
 */

import { headA, headB } from './testData.js';

let a = headA
let b = headB

// 1. 链表均不为空
// 2. 遍历两个链表
//    2.1 相交
//        2.1.1 相同长度 m,n
//        2.1.2 不同长度 a+c=m a+b=n  a+c+b === b+c+a
//    2.2 不相交
//        2.2.1 相同长度 m === n => null
//        2.2.2 不同长度 m+n => null

var getInterSectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }

  let pA = headA
  let pB = headB

  while (pA != pB) { //相等
    pA = pA === null ? headB : pA.next //移动指针
    pB = pB === null ? headA : pB.next
  }
  return pA
}

console.log(getInterSectionNode(a.head, b.head));