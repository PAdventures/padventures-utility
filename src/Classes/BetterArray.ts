import { ReadOnlyArray } from "../types.js"

export default class BetterArray<T> extends Array {
    /**
     * Creates an array from an array-like object. Creates an array from an iterable object.
     * @param input The array-like object
     * @returns {BetterArray<T>} BetterArray of the given type, T
     */
    static override from<T>(input: T[] | BetterArray<T>): BetterArray<T> {
        return new BetterArray(input)
    }
    
    /**
     * Creates a BetterArray from an input array
     * @param input The input array. If not given, you must manually type the array
     * @example
     * 
     * // Example with `input` using an array of numbers
     * const array = new BetterArray([1, 2, 3, 4, 5])
     * // => BetterArray<number>
     * 
     * // Example without `input` to have items that are of type `number`
     * const array = new BetterArray<number>()
     * // => BetterArray<number>
     */
    constructor(input: T[] = []) {
        super(input.length)
        for (let index = 0; index < input.length; index++) {
            this[index] = input[index]
        }
    }

    /**
     * Checks if the array is empty
     * @returns {boolean} Returns `true` if the array is empty, and `false` if it's not
     */
    public isEmpty(): boolean {
        return this.length === 0
    }

    /**
     * Adds the specified items into the array at the specified index, and returns the new length of the array.
     * If the index in invalid, undefined is returned and the array is not modified
     * @param index Zero-based location of where to insert the items
     * @param items The items to insert in the array
     * @returns {number | undefined} Length of new array or undefined if the index provided is invalid
     */
    public insert(index: number, ...items: T[]): number | undefined {
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
     * @returns {T | undefined} Type T or undefined if the array is empty or if there is no item at the specified index
     */
    public override pop(index?: number): T | undefined {
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
     * @returns {T[] | undefined} An array containing the values or undefined if the array is empty
     */
    public first(count: number = 1): T[] | undefined {
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
     * @returns {T[] | undefined} An array containing the values or undefined if the array is empty
     */
    public last(count: number = 1): T[] | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.length < count) {
            count = this.length
        }
        return this.slice(this.length - count, this.length - 1);
    }

    /**
     * Returns a Read only array
     * @returns {ReadOnlyArray<T>} A read-only array of type T
     */
    public toReadOnly(): ReadOnlyArray<T> {
        return this as ReadOnlyArray<T>
    }
}