// class LinkedListNode<T>{
//     constructor(  data: T,next: LinkedListNode<T>, prev: LinkedListNode<T>){}
//    }

class SinglyLinkedListNode {
  data: any = null;
  next: SinglyLinkedListNode | null = null;
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  tail: SinglyLinkedListNode | null;
  size: number;
  constructor(private list: any[] = []) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  peek() {
    return this.list[0];
  }

  // pop(){
  //     const last = this.list.pop()
  //     if(last){
  //         return last
  //     }

  //     else if(this.size ===1) return last
  //     this.list[this.size-1].next = null
  //     this.size--
  // }

  push(data: any) {
    const newData: SinglyLinkedListNode = { data, next: null };
    this.list.push(newData);
    if (this.isEmpty()) {
      this.head = newData;
      this.tail = newData;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) console.log(null);
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
}

const linkedListed = new SinglyLinkedList();
linkedListed.peek();
