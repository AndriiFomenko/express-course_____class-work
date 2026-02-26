import chalk from 'chalk'
import * as util from 'node:util'

export const log = (...args) => {
  const color = args.pop() // Витягуємо останній аргумент як колір

  // Перевіряємо, чи існує метод в chalk для заданого кольору
  if (typeof chalk[color] !== 'function') {
    console.error(`Color '${color}' is not supported by chalk`)
    return
  }

  // Логуємо кожен аргумент окремо
  args.forEach((arg) => {
    if (arg === undefined) {
      console.log(chalk[color]('undefined')) // Виводимо undefined у вказаному кольорі
      return
    }

    if (typeof arg === 'string') {
      console.log(chalk[color](arg)) // Виводимо рядки у вказаному кольорі
      return
    }

    // Використовуємо util.inspect для виводу об'єктів
    console.log(chalk[color](util.inspect(arg, { depth: null, colors: true })))
  })
}
