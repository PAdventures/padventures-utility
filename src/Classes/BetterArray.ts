import { ReadOnlyArray } from "../types.js"

export default class BetterArray<T> extends Array {
    /**
     * Creates an array from an array-like object. Creates an array from an iterable object.
     * @param input The array-like object
     * @returns BetterArray of type T
     */
    static from<T>(input: T[] | BetterArray<T>): BetterArray<T> {
        return new BetterArray(input)
    }
    
    /**
     * Creates a BetterArray from an input array
     * @param input The input array
     */
    constructor(input: T[] = []) {
        super(input.length)
        for (let index = 0; index < input.length; index++) {
            this[index] = input[index]
        }
    }

    /**
     * Checks if the array is empty
     * @returns boolean
     */
    isEmpty(): boolean {
        return this.length === 0
    }

    /**
     * Adds the specified items into the array at the specified index, and returns the new length of the array.
     * If the index in invalid, undefined is returned and the array is not modified
     * @param index Zero-based location of where to insert the items
     * @param items The items to insert in the array
     * @returns Length of new array or undefined
     */
    insert(index: number, ...items: T[]): number | undefined {
        if (index < 0) {
            return undefined
        }
        this.splice(index, 0, ...items);
        return this.length;
    }

    /**
     * Removes an item from the specified index, or, the last item of the array if no index is provided, and returns the item.
     * If the array is empty, undefined is returned and the array is not modified.
     * @param index Zero-based location of the item to remove
     * @returns Type T or undefined
     */
    pop(index?: number): T | undefined {
        if (index !== 0 && !index) {
            return super.pop()
        }
        if (this.isEmpty() || typeof this[index] === "undefined") {
            return undefined
        }
        return this.splice(index, 1).at(0);
    }

    /**
     * Gets the first value, or values, in the array. If the array is empty, undefined is returned
     * @param count The number of values to get
     * @returns An array containing the values or undefined
     */
    first(count: number = 1): T[] | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.length < count) {
            count = this.length
        }
        return this.slice(0, count - 1);
    }

    /**
     * Gets the last value, or values, in the array. If the array is empty, undefined is returned
     * @param count The number of values to get
     * @returns An array containing the values or undefined
     */
    last(count: number = 1): T[] | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.length < count) {
            count = this.length
        }
        return this.slice(this.length - count, this.length - 1);
    }

    /**
     * Turns the array into a read-only array
     * @returns A read-only array
     */
    toReadOnly(): ReadOnlyArray<T> {
        return this as ReadOnlyArray<T>
    }
}