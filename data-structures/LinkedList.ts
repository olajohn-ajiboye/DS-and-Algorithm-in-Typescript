class LinkedListNode<R> {
  prev: LinkedListNode<R>;
  next: LinkedListNode<R>;
  constructor(public value: R) {}
}

/**
 * List
 * @template
 * Holds the internal state of the linked list
 * @member head : LinkedListNode<T> head of list
 * @member tail: LinkedListNode<T>
 * @member size: number
 */
class List<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
}

class LinkedList<T> {
  // we set it to undefined because it doesn't exist yet
  private list: List<T> = undefined;

  size(): number {
    return this.list?.size ?? 0;
  }
  isEmpty(): boolean {
    return !this.list;
  }

  addFront(data: T): void {
    const newNode = new LinkedListNode(data);
    if (!this.list) {
      this.list.head = newNode;
      this.list.tail = newNode;
      this.list.size = 1;
    } else {
      // we make the previous node of current head to be the newNode
      this.list.head.prev = newNode;

      // now that the newly created now is the head, we shift the position of the old hed to next of the new Node
      newNode.next = this.list.head;

      // we make the new node the head
      this.list.head = newNode;

      // we increase the size
      this.list.size++;
    }
  }

  addBack(data: T): void {
    const newNode = new LinkedListNode(data);
    if (!this.list) {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    } else {
      // update tail to be new node
      this.list.tail.next = newNode;
      // update the previous of tail(which is now the newNode) to now be current tail
      newNode.prev = this.list.tail;

      this.list.tail = newNode;
      this.list.size++;
    }
  }

  removeFront(): T | null {
    if (!this.list) return null;
    const data = this.list.head.value;
    // if current had has a next pointer
    if (this.list.head.next) {
      // make the new head's previous to be null
      this.list.head.next.prev = null;

      // move the pointer in head forward. The next to previous head is the new head
      this.list.head = this.list.head.prev;
      // decrease size
      this.list.size--;
    } else {
      //BECAUSE we removed the only element
      this.list = undefined;
    }
    return data;
  }
  removeBack(): T | null {
    if (!this.list) return null;
    const data = this.list.tail.value;
    // check if tail has a prev pointer
    if (!this.list.tail.prev) {
      // we have remove the only existing element in the list
      this.list = undefined;
    } else {
      // move the pointer in the tail
      this.list.tail.prev = this.list.tail.prev.prev;
      this.list.tail.next = null;

      // make the updated tail === previous tail
      this.list.tail = this.list.tail.prev;
      this.list.size--;
    }

    return data;
  }
}
