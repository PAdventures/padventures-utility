/**
 * Slice values into groups of `size` items
 * @param array The array to chunk
 * @param size The chunk size
 * @returns {T[][]} The chunked array
 * @example
 * 
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
 * // => [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
 */
export default function chunk<T>(array: T[], size: number): T[][] {
    const chunked: T[][] = [];

    if (size === 1 || array.length <= size) {
        return [];
    }

    for (let index = 0; index < array.length; index += size) {
        chunked.push(array.slice(index, index + size))
    }
    return chunked
}