// // /* Methods
// // -  size
// // -  isEmpty
// // -  get
// // -  set
// // -  clear
// // -  pop
// // -  push
// // -  indexOf
// // -  contains
// // -  removeAt

// // */
// // export class DynamicArray<T> {
// //   private array: T[] = new Array<T>();
// //   private length: number = 0;
// //   private capacity: number = 0;

// //   public size() {
// //     return this.length;
// //   }

// //   public isEmpty() {
// //     return !this.size();
// //   }

// //   public get(index: number) {
// //     if (index < 0 || index >= length) {
// //       throw Error('Index is not correct');
// //     }
// //     return this.array[index];
// //   }

// //   public set(index: number, value: T) {
// //     if (index < 0 || index >= length) {
// //       throw Error('Index is not correct');
// //     } else {
// //       this.array[index] = value;
// //     }
// //   }

// //   public clear() {
// //     this.array.forEach((elem) => (elem = null));
// //     this.length = 0;
// //   }

// //   public push(elem: T) {
// //     const lastIndex = this.size() - 1;
// //     // this.array[lastIndex] = elem;

// //     // double the capacity
// //     if(c)

// //     this.length = this.size() * 2;

// //     return [...this.array, elem];
// //   }
// // }

// class Stack<T> {
//   private stack: T[] = [];
//   private length = 0;

//   constructor() {
//     this.stack = [];
//     this.length = this.stack.length;
//   }

//   isEmpty() {
//     return !this.stack.length;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return 'Stack is empty';
//     } else {
//       return this.stack[this.length - 1];

//     }
//   }

//   push(elem: T) {
//     if (this.length === 0) {
//       this.stack[0] = elem;
//     } else {
//       this.stack[this.length] = elem;
//     }
//   }

//   pop(): T[] | string {
//     if (this.isEmpty()) {
//       return 'Stack is empty';
//     }

//   const  []= this.stack
//   }

// }

// const stack = new Stack<number>();
// console.log(stack.isEmpty());
// stack.push(1);
// console.log(stack);

class DynamicArray {
  private innerArray: any[] = [];
  private capacity: number = 0;
  length: number = 0;

  constructor(length: number) {
    this.innerArray = [];
    this.length = length;
  }

  isEmpty = () => {
    return !this.length;
  };

  peek() {
    if (this.isEmpty()) {
      throw Error('Array is Empty');
    } else {
      return this.innerArray[this.length - 1];
    }
  }

  push = (elem: any) => {
    this.capacity = this.length * 2;
    this.innerArray[this.length - 1] = elem;
    this.length++;
  };

  size = () => {
    return this.length;
  };
}

const arr = new DynamicArray(5);

console.log(arr.isEmpty());
