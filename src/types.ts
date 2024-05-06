import BetterArray from "./Classes/BetterArray.js";

export type ReadOnlyArray<T> = Omit<BetterArray<T>, 'push' | 'insert' | 'fill' | 'map' | 'pop' | 'reverse' | 'shift' | 'sort' | 'splice' | 'unshift' | 'toReadOnly'>;