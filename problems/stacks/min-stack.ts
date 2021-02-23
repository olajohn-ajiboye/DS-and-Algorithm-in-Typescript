interface Data {
  data: number;
  min: number;
}
class MinStack {
  private list: Data[] = [];
  size = 0;
  min = Number.POSITIVE_INFINITY;

  pop(): number {
    this.min = this.peekTop();
    this.size--;
    return this.list.pop().data;
  }

  push(data: number) {
    ++this.size;
    this.list.push({ data, min: this.min });
    this.min = Math.min(this.min, data);
  }

  peekTop(): number {
    return this.list[0].data;
  }

  peekBack(): number {
    return this.list[this.size - 1].data;
  }

  getMin(): number {
    return this.min;
  }
}
