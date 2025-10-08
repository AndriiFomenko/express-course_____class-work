import chalk from 'chalk'
import * as util from 'node:util'

export const log = (...args) => {
  const color = args.pop()

  if (typeof chalk[color] !== 'function') {
    console.error(`Color '${color}' is not supported by chalk`)
    return
  }

  args.forEach((arg) => {
    if (arg === undefined) {
      console.log(chalk[color]('undefined'))
      return
    }

    if (typeof arg === 'string') {
      console.log(chalk[color](arg))
      return
    }

    console.log(chalk[color](util.inspect(arg, { depth: null, colors: true })))
  })
}
