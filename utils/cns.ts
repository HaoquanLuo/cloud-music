import { isArray, isObject, isString } from './is'

type TClassNamesArg =
  | string
  | number
  | boolean
  | null
  | undefined
  | string[]
  | Record<string, any>

export function cns(...args: TClassNamesArg[]): string {
  let classNames: TClassNamesArg[] = []
  for (let i = 0; i < args.length; i++) {
    const value = args[i]
    if (!value) {
      continue
    }
    if (isString(value)) {
      classNames.push(value)
    } else if (isArray(value)) {
      classNames.concat(value)
    } else if (isObject(value)) {
      Object.keys(value).forEach((key) => {
        if (value[key]) {
          classNames.push(key)
        }
      })
    }
  }
  return [...new Set(classNames)].join(' ')
}
