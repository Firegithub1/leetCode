class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
    this.prev = null;
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
    newNode.prev = curr;

    curr.next = newNode;
    curr.next.prev = newNode;
  }

  remove(item) {
    const Node = this.findPre(item);

    Node.prev.next = Node.next;
    Node.next.prev = Node.prev;

    Node.next = null;
    Node.prev = null;
  }
}
