export function getValue<T, K extends keyof T>(key: K, dataObject: T): T[K] {
    return dataObject[key];
}

export function isEmptyObject(obj: object | null | undefined) {
    if (obj === null || obj === undefined) {
        return true
    }
    if (Object.keys(obj).length > 0) {
        return false
    }
    return true
}