/*
 * @Author: YiY
 * @Date: 2023-09-25 21:52:08
 * @LastEditTime: 2023-09-25 22:09:50
 */
import { ListNode, LinkedList } from '../00base.js';

let z = new ListNode(5)
let y = new ListNode(0)

let x = new ListNode(1)
let v = new ListNode(4)
let u = new ListNode(5)

x.next = v
v.next = u

let headA = new LinkedList(z)
z.next = y
y.next = x


let a = new ListNode(4)

let headB = new LinkedList(a)
a.next = x


export {
  headA, headB
}