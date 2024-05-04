import BetterArray from "./better_array.js";

export type ReadOnlyArray<T> = Omit<BetterArray<T>, 'push' | 'insert' | 'fill' | 'map' | 'pop' | 'reverse' | 'shift' | 'sort' | 'splice' | 'unshift' | 'toReadOnly'>;