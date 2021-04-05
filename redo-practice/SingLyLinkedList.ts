class ListNodeTest {
  constructor(public data: any = null, public next: ListNodeTest = null) {}
}

// add
// remove
// traverse
// get
// getAt
// addAt
// peekFirst
// peekLast
// size

class SinglyLinkedListTest {
  constructor(
    public size: number = 0,
    public head: ListNodeTest = null,
    public tail: ListNodeTest = null
  ) {}

  peekFirst() {
    return this.head;
  }

  peekLast() {
    return this.tail;
  }

  add(data: any) {
    const newNode = new ListNodeTest(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.size++;
  }

  print(current = this.head): void {
    if (!current) return;
    console.log(current.data);
    this.print(current.next);
  }
}

const sll = new SinglyLinkedList();
sll.size;
