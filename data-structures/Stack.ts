// I could have just imported and re-used already created Linked-List

class ListNode<T> {
  data: T = null;
  next: ListNode<T> = null;
  prev: ListNode<T> = null;
  constructor(data: T) {
    this.data = data;
  }
}

class LList<T> {
  head: ListNode<T> = null;
  tail: ListNode<T> = null;
  length: number = 0;
}

export class Stack<T> {
  list = new LList<T>();

  size() {
    return this.list.length;
  }
  isEmpty() {
    return !this.size();
  }

  peek() {
    return this.list.head;
  }

  push(data: T) {
    // create Node out of data
    const newNode = new ListNode(data);

    // addToFront of LinkedList

    // check if list is empty
    if (this.isEmpty()) {
      this.list = {
        length: 1,
        head: newNode,
        tail: newNode,
      };
    } else {
      const currentHead = this.list.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.list.head = newNode;
      this.list.length++;
    }
  }

  pop(): ListNode<T> {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.list.head;
    const currentTail = this.list.tail;
    currentTail.prev.next = null;
    this.list.tail = currentTail.prev;
    this.list.length--;
  }

  contains(data: T) {
    return this.list.inde(data)
  }

  toString() {
    let current = this.list.head;
    while (current) {
      console.log(current);
      console.log('----');
      current = current.next;
    }
  }

}
