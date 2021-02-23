class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// internal list to store value
class List<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  size: number = 0;
}

export class LinkedList<T> {
  constructor(private list: List<T> = undefined) {}

  isEmpty(): boolean {
    return !this.list?.size;
  }

  clear(): void {
    if (this.isEmpty()) {
      throw new Error("List is Empty, can't do");
    } else {
      this.list = undefined;
    }
  }

  addFront(data: T): void {
    const newNode = new LinkedListNode(data);

    if (this.list?.head) {
      const currentHead = this.list.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.list.head = newNode;
      this.list.size++;
    } else {
      this.list = {
        tail: newNode,
        head: newNode,
        size: 1,
      };
    }
  }
  addBack(data: T): void {
    const newNode = new LinkedListNode(data);
    if (this.list?.tail) {
      const currentTail = this.list.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.list.tail = newNode;
      this.list.size++;
    } else {
      this.list = {
        tail: newNode,
        head: newNode,
        size: 1,
      };
    }
  }

  removeFront(): T | null {
    if (this.isEmpty()) return null;
    if (this.list.head.next) {
      const currentHead = this.list.head;
      const newHead = currentHead.next;
      currentHead.prev = null;
      this.list.head = newHead;
      this.list.size--;
    } else {
      this.list = undefined;
    }
  }

  removeBack(): T | null {
    if (this.isEmpty()) return null;
    if (this.list.tail.prev) {
      let currentTail = this.list.tail;
      const newTail = currentTail.prev;
      newTail.next = null;
      this.list.tail = newTail;
      this.list.size--;
    } else {
      this.list = undefined;
    }
  }

  indexOf(val: T): number {
    if (this.isEmpty()) return -1;
    let curr = this.list.head;
    let i = 0;
    while (curr.data !== val) {
      // we reached the end without finding the element
      if (!curr.next) return -1;
      curr = curr.next;
      i++;
    }
    return i;
  }

  toArray(): LinkedListNode<T>[] {
    if (this.isEmpty()) return [];
    const arrayList: LinkedListNode<T>[] = [];
    let curr = this.list.head;
    let i = 0;
    while (curr.next) {
      arrayList.push(curr);
      curr = curr.next;
      i++;
    }
    return [...arrayList, this.list.tail];
  }

  //   reverse(): void {
  //     if (this.isEmpty()) return null;
  //     if (!this.list.head.next || !this.list.tail.prev) return;
  //     let current = this.list.head;
  //     let temp = current.prev;

  //       while (current) {
  //           console.lo
  //       current.prev = current.next;
  //       current = current.prev;
  //     }
  //   }

  addAt(index: number, data: T): void {
    if (this.isEmpty()) throw new Error('Create LinkedList first');
    if (index === 0) {
      this.addFront(data);
    }
    if (index === this.list.size) {
      this.addBack(data);
    }
    if (index > this.list.size || index < 0) throw new Error('Error adding');

    let j = 0;
    let curr = this.list.head;
    while (j < index) {
      curr = curr.next;
    }

    const newNode = new LinkedListNode<T>(data);
    curr.prev = newNode;
    newNode.next = curr;
    newNode.prev = curr.prev.prev;
    curr.next = curr.next.next;
  }
}

const list = new LinkedList<number>();

list.addFront(3);
list.addBack(900);
list.addFront(31);
list.addBack(9001);
console.log(list);
