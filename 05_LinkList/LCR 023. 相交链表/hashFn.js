/*
 * @Author: YiY
 * @Date: 2023-09-25 21:29:28
 * @LastEditTime: 2023-09-25 23:05:42
 */

import { headA, headB } from './testData.js';

let a = headA
let b = headB


// 0. 判空
// 1. 将a链表存入集合
// 2. 查询链表b节点是否与集合中相同

var getInterSectionNode = function (headA, headB) {
  let set = new Set()

  let tmp = headA;
  while (tmp !== null) {
    set.add(tmp)
    tmp = tmp.next
  }

  tmp = headBw

  while (tmp !== null) {
    if (set.has(tmp)) {
      return tmp
    }
    tmp = tmp.next
  }

  return null
}

console.log(getInterSectionNode(a.head, b.head));