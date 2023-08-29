class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}
class linkList {
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
  }
  find(item) {
    let curr = this.head;
    while (curr !== null && curr.next !== item) {
      curr = curr.next;
    }
    return curr;
  }
  insert(el, item) {
    let newNode = new Node(el);
    let curr = this.find(item);
    newNode.next = curr.next;
    curr.next = newNode;
  }
  findPre(item) {
    let curr = this.head;
    while (curr !== null && curr.next.el !== item) {
      curr = curr.next;
    }
    return curr;
  }
  remove(item) {
    let curr = this.findPre(item);
    if (curr.next !== null) {
      curr.next = curr.next.next;
    }
  }
}
