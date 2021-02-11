declare class LinkedListNode<R> {
    private data;
    private next?;
    private previous?;
}
declare class LinkedList<T> {
    private head?;
    insert(pos: number): void;
    first(): LinkedListNode<T>;
    isEmpty(): boolean;
}
declare const list: LinkedList<number>;
