/*
 * @Author: YiY
 * @Date: 2023-09-25 21:44:58
 * @LastEditTime: 2023-09-25 21:45:25
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  clear() {
    this.head = null
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }
  getFirst() {
    return this.head
  }
}

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)

// node1.next = node2

// let list = new LinkedList(node1)

export {
  ListNode,
  LinkedList
}