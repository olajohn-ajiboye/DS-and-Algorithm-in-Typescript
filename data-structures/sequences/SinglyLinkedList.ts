class SinglyNode<T = any> {
  constructor(public data: T, public next: SinglyNode<T> = null) {}
}

class LinkedList {
  constructor(
    public head: SinglyNode = null,
    public tail: SinglyNode = null,
    public size = 0
  ) {}

  isEmpty() {
    return !this.size;
  }

  addFront(data: any) {
    if (this.isEmpty()) {
      this.head = this.tail = new SinglyNode(data);
    } else {
      const newNode = new SinglyNode(data, this.head);
      const head = this.head;
      newNode.next = head;
      this.head = newNode;
    }
    this.size++;
  }

  addBack(data: any) {
    if (this.isEmpty()) {
      this.head = this.tail = new SinglyNode(data);
    } else {
      const newNode = new SinglyNode(data);
      this.tail.next = newNode;
    }
    this.size++;
  }

  addAt(data: any, index: number) {
    if (!index || !data || index < 0 || index > this.size)
      console.log('Error occurred');
    else if (index === 0) this.addFront(data);
    else if (index === this.size) this.addBack(data);
    else {
      // navigate to index and insert
      let curr = this.head;
      let prev = null;
      let i = 0;
      while (i < index) {
        // when we reach this condition we now have access to where to slot
        prev = curr;
        curr = curr.next;
        i++;
      }
      const newNode = new SinglyNode(data, curr);
      prev.next = newNode;
    }
  }

  removeAt(index: number) {
    if (!index || index < 0 || index > this.size || !this.head || !this.tail)
      console.log('Error occurred');
    else {
      let i = 0;
      let curr = this.head;
      let prev = null;
      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      prev.next = curr.next;
      return curr;
    }
  }

  print() {
    //
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }
}
