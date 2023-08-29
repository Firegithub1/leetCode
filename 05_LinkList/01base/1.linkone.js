class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  find(item) {
    let curr = this.head;
    while (curr !== null && curr.el !== item) {
      curr = curr.next;
    }
    return curr;
  }
  insert(el, item) {
    const newNode = new Node(el);
    const curr = this.find(item);
    newNode.next = curr.next;
    curr.next = newNode;
  }
  findPre(item) {
    let curr = this.head;
    while (curr.next !== null && curr.next.el !== item) {
      curr = curr.next;
    }
    return curr;
  }
  remove(item) {
    const preNode = this.findPre(item);
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }
}
