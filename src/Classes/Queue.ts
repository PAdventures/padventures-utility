export default class Queue<T> {
    private storage: T[] = []

    /**
     * Creates a queue
     * @param capacity The maximum capacity the queue can hold
     */
    constructor(private capacity: number = Infinity) {}

    /**
     * Adds an item to the back of the queue
     * @param item The item to add to the queue
     * @throws Error thrown if the queue is full
     */
    enQueue(item: T): void {
        if (this.isFull()) {
            throw new Error("Queue has reached maximum capacity; queue overflow")
        }
        this.storage.push(item)
    }

    /**
     * Removes the item at the front of the queue, and returns it
     * @returns The item, or, if the queue is empty, undefined is returned
     */
    deQueue(): T | undefined {
        return this.storage.shift()
    }

    /**
 * Checks if the queue is empty
 * @returns boolean
 */
    isEmpty(): boolean {
        return this.size() === 0
    }

    /**
     * Checks if the queue has reached maximum capacity
     * @returns boolean
     */
    isFull(): boolean {
        return this.size() === this.capacity
    }

    /**
     * Gives the number of items stored in the queue
     * @returns The number of items
     */
    size(): number {
        return this.storage.length
    }

    /**
     * Coverts the queue into an array
     * @returns Array of type T
     */
    toArray(): Array<T> {
        return this.storage;
    }

    /**
     * Removes all items in the queue
     */
    flush(): void {
        this.storage = []
    }    
}