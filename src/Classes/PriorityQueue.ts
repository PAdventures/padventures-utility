import Queue from "./Queue.js";

type PriorityStorageType<T> = {
    priority: 1 | 2 | 3,
    item: T
}

export default class PriorityQueue<T> extends Queue<T> {
    private priorityStorage: PriorityStorageType<T>[] = []
    
    /**
     * Creates a priority queue
     * @param capacity The maximum capacity the priority queue can hold
     */
    constructor(capacity: number = Infinity) {
        super(capacity)
    }

    /**
     * Adds an item to the back of a priority section in the queue
     * @param item The item to add to the queue
     * @param priority The priority of the item, if not provided, defaults to 3 and acts like a normal enQueue
     * @throws Error thrown if the queue is full
     */
    enQueue(item: T, priority: 1 | 2 | 3 = 3): void {
        if (this.isFull()) {
            throw new Error("Queue has reached maximum capacity; queue overflow")
        }

        if (priority === 3) {
            this.priorityStorage.push({ priority, item })
            return;
        }

        for (let index = 0; index < this.priorityStorage.length; index++) {
            if (this.priorityStorage[index].priority === priority) {
                continue
            }
            this.priorityStorage.splice(index, 0, { priority, item })
            break;
        }
    }

    /**
     * Removes the item at the front of the queue, and returns it
     * @returns The item, or, if the queue is empty, undefined is returned
     */
    deQueue(): T | undefined {
        return this.priorityStorage.shift()?.item
    }

    /**
     * Gives the number of items stored in the queue
     * @returns The number of items
     */
    size(): number {
        return this.priorityStorage.length
    }

    /**
     * Coverts the queue into an array
     * @returns Array of type T
     */
    toArray(): Array<T> {
        return this.priorityStorage.map(obj => obj.item);
    }

    /**
     * Removes all items in the queue
     */
    flush(): void {
        this.priorityStorage = []
    }
}