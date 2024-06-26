export default class Stack<T> {
    private storage: T[] = []

    /**
     * Creates a stack
     * @param capacity The maximum capacity the stack can hold
     */
    constructor(private capacity: number = Infinity) {}
    
    /**
     * Adds an item to the top of the stack
     * @param item The item to push onto the stack
     * @returns {void} Nothing is returned
     * @throws Error thrown if the stack is full
     */
    public push(item: T): void {
        if (this.isFull()) {
            throw new Error("Stack has reached maximum capacity; stack overflow")
        }
        this.storage.push(item)
    }

    /**
     * Removes the item at the top of the stack
     * @returns {T} The item of type T
     * @throws Error thrown if the stack is empty
     */
    public pop(): T {
        if (this.isEmpty()) {
            throw new Error("Stack has reached minimum capacity; stack underflow")
        }
        return this.storage.pop()!
    }

    /**
     * Returns the item at the top of the stack, and stack is not modified
     * @returns {T | null} The item at the top of the stack of type T, or null if the stack is empty
     */
    public peek(): T | null {
        if (this.isEmpty()) {
            return null
        }
        return this.storage[this.size() - 1]
    }

    /**
     * Checks if the stack is empty
     * @returns {boolean} Returns `true` if the stack is empty and `false` if it's not
     */
    public isEmpty(): boolean {
        return this.size() === 0
    }

    /**
     * Checks if the stack has reached maximum capacity
     * @returns {boolean} Returns `true` if the stack is full and `false` if it's not
     */
    public isFull(): boolean {
        return this.size() === this.capacity
    }

    /**
     * Gives the number of items stored in the stack
     * @returns {number} The number of items
     */
    public size(): number {
        return this.storage.length
    }

    /**
     * Coverts the stack into an array
     * @returns {Array<T>} Array of type T
     */
    public toArray(): Array<T> {
        return this.storage;
    }

    /**
     * Removes all items in the stack
     * @returns {void} Nothing is returned
     */
    public flush(): void {
        this.storage = []
    }
}