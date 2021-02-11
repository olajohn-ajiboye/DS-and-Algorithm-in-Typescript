var grades = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 89],
];
var total = 0;
var average = 0.0;
for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
        total = total + grades[i][j];
        average = total / grades[i].length;
        console.log(`${i}: ${average}`);
    }
}
class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
        this.stack = [];
        this.length = this.stack.length;
    }
    isEmpty() {
        return this.stack.length;
    }
    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        else {
            return this.stack[this.length - 1];
        }
    }
    push(elem) {
        this.stack[this.length - 1] = elem;
    }
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        else {
            return this.stack.splice(0, this.length - 1);
        }
    }
}
//# sourceMappingURL=dynamic-array.js.map