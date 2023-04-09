export const getType = (obj: unknown) =>
  Object.prototype.toString.call(obj).slice(8, -1)

export function isObject(obj: unknown): obj is Record<string, any> {
  return getType(obj) === 'Object'
}

export function isArray(obj: unknown): obj is any[] {
  return getType(obj) === 'Array'
}

export function isNumber(obj: unknown): obj is number {
  return getType(obj) === 'Number' && obj === obj
}

export function isString(obj: unknown): obj is string {
  return getType(obj) === 'String'
}

export function isRegExp(obj: unknown): obj is RegExp {
  return getType(obj) === 'RegExp'
}

export function isFile(obj: unknown): obj is File {
  return getType(obj) === 'File'
}

export function isBlob(obj: unknown): obj is Blob {
  return getType(obj) === 'Blob'
}

export function isFunction(obj: unknown): obj is (...args: any[]) => any {
  return typeof obj === 'function'
}

export function isUndefined(obj: unknown): obj is undefined {
  return obj === undefined
}

export function isEmptyObject(obj: unknown): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}
