export declare class DynamicArray<T> {
    private array;
    private length;
    private capacity;
    size(): number;
    isEmpty(): boolean;
    get(index: number): T;
    set(index: number, value: T): void;
    clear(): void;
    push(elem: T): T[];
}
