import chalk from 'chalk'
import * as util from 'node:util'
import morgan from 'morgan'

// Перевірка наявності флагу NO_COLOR
const useColors = !process.env.NO_COLOR

// Попередньо налаштовані стилі для різних типів повідомлень
export const styles = {
  info: useColors ? chalk.blue : (text) => text,
  success: useColors ? chalk.green : (text) => text,
  warning: useColors ? chalk.yellow : (text) => text,
  error: useColors ? chalk.red : (text) => text,
  debug: useColors ? chalk.magenta : (text) => text,
  highlight: useColors ? chalk.cyan : (text) => text
}

// Розширена функція логування
export const log = (message, type = 'info') => {
  if (!styles[type]) {
    console.error(`Log type '${type}' is not supported`)
    return
  }

  if (message === undefined) {
    console.log(styles[type]('undefined'))
    return
  }

  if (typeof message === 'string') {
    console.log(styles[type](message))
    return
  }

  // Використовуємо util.inspect для виводу об'єктів
  console.log(
    styles[type](util.inspect(message, { depth: null, colors: useColors }))
  )
}

// Налаштований формат Morgan
export const morganFormat =
  ':method :url :status - :response-time ms - :req[content-length] bytes - :res[content-length] bytes'

// Створення middleware Morgan з кастомним форматом
export const requestLogger = morgan(morganFormat, {
  stream: {
    write: (message) => {
      console.log(styles.info(message.trim()))
    }
  }
})
