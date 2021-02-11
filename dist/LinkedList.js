class LinkedListNode {
    constructor() {
        this.next = null;
        this.previous = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(pos) {
    }
    first() {
        return this.head;
    }
    isEmpty() {
        return this.head === null;
    }
}
const list = new LinkedList();
console.log(list.isEmpty());
//# sourceMappingURL=LinkedList.js.map