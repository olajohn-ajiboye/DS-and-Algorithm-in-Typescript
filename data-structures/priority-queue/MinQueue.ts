const heap = [1, 3, 8, 4, 10, 50, 39];
console.log(heap[5]);

class MinHeap<T> {
  constructor(private heap: T[] = []) {}

  private getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1;
  }
  size(): number {
    return this.heap.length;
  }
  private getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2;
  }

  private getParentIndex(childIndex: number) {
    return (childIndex - 1) / 2;
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) > this.size();
  }

  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) > this.size();
  }

  private hasParent(childIndex: number) {
    return this.getParentIndex(childIndex) >= 0;
  }

  private leftChild(index: number) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number) {
    return this.heap[this.getRightChildIndex(index)];
  }

  private parent(index: number) {
    return this.heap[this.getParentIndex(index)];
  }

  private swap(firstIndex: number, secondIndex: number) {
    [this.heap[firstIndex], this.heap[secondIndex]] = [
      this.heap[secondIndex],
      this.heap[firstIndex],
    ];
  }

  poll(): T {
    const elem = this.heap.length && this.heap.shift();
    this.heapifyDown();
    return elem;
  }

  peek(): T {
    return this.heap.length && this.heap[0];
  }

  add(elem: T) {
    this.heap.push(elem);
    this.heapifyUp();
  }

  heapifyUp() {
    const lastElement = this.heap[this.size() - 1];
    let currentIndex = this.size() - 1;
    while (
      this.hasParent(currentIndex) &&
      this.parent(currentIndex) > lastElement
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(parentIndex, currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.heap[index]
      ) {
        smallerIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[smallerIndex]) {
        this.swap(index, smallerIndex);
      }
      index = smallerIndex;
    }
  }
}
