class Queue<T> {
  private list: LList<T> = null;

  size(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return !this.size();
  }

  enqueue(data: T) {
    // add to front of list
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.list = {
        length: 1,
        head: newNode,
        tail: newNode,
      };
    } else {
      const currentTail = this.list.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.list.tail = newNode;
      this.list.length++;
    }
  }

  dequeue(): ListNode<T> {
    if (this.isEmpty()) return null;
    if (this.size() === 1) {
      const onlyNode = this.list.head || this.list.tail;
      this.list = undefined;
      return onlyNode;
    }
    // remove front
    let currentHead = this.list.head;
    currentHead.next.prev = null;
    this.list.head = currentHead.next;
    this.list.length--;
    return currentHead;
  }

  contains(data: T): boolean {
    if (this.isEmpty()) throw new Error('List is Empty');
    // start traversing from current head
    let current = this.list.head;
    while (current) {
      current = current.next;
    }
    if (current.data === data) {
      return true;
    } else {
      return false;
    }
  }

  private indexOf(data: T): number {
    let current = this.list.head;
    let i = 0;
    while (current.data !== data) {
      current = current.next;
      i++;
    }
    return i;
  }
}
