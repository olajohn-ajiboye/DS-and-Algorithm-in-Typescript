declare var grades: number[][];
declare var total: number;
declare var average: number;
declare class Stack<T> {
    private stack;
    private length;
    constructor();
    isEmpty(): number;
    peek(): T | string;
    push(elem: T): void;
    pop(): T[] | string;
}
