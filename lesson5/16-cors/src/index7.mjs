import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import apiRoutes from './routes.mjs'

const app = express()
const PORT = 3000

const __dirname = dirname(fileURLToPath(import.meta.url))

// Список зовнішніх джерел, яким ми явно довіряємо
const whitelist = ['http://localhost:63343', 'http://localhost:4000', 'http://localhost:3000']

const corsOptionsDelegate = (req, callback) => {
  // Поточний origin запиту, може бути відсутній для same-origin викликів (наприклад, fetch з того ж домену)
  const origin = req.get('Origin')
  // Формуємо origin сервера, щоб порівняти з клієнтським
  const serverOrigin = `${req.protocol}://${req.get('host')}`

  console.log('Origin received:', origin)
  console.log('Origin serverOrigin:', serverOrigin)

  // Дозволяємо запит, якщо:
  // 1) Origin відсутній (наприклад, same-origin з браузера)
  // 2) Origin збігається з нашим сервером (same-origin)
  // 3) Origin у білому списку
  if (!origin || origin === serverOrigin || whitelist.includes(origin)) {
    callback(null, {
      origin: true,
      optionsSuccessStatus: 200
    })
  } else {
    callback(new Error('CORS не дозволено для цього джерела'))
  }
}

app.use(cors(corsOptionsDelegate))

app.use(express.static(__dirname + '/public'))

app.use(apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
