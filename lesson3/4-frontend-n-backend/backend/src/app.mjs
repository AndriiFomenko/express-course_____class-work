import express from 'express'
import morgan from 'morgan'
import { v4 as uuidv4 } from 'uuid'
import { log } from './helpers.mjs'
import cors from 'cors'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, 'users.json')

// --- Функції для бази даних ---
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    log('Файл бази не знайдено, перевірте наявність users.json', 'red')
    return []
  }
}

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    log('Помилка запису в JSON!', 'red')
  }
}

// Ініціалізація бази
let users = readDB()

const PORT = 3000
const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

// --- Middleware ---
app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --- Обробники ---
const getUsers = (req, res) => {
  log('Запит GET: отримання списку користувачів v1', 'blue')
  res.json(users)
}

const postUsers = (req, res) => {
  log('Запит POST: додавання нового користувача v1', 'blue')

  const newUser = {
    ...req.body,
    id: uuidv4()
  }

  users.push(newUser)
  writeDB(users)

  log(`Користувач ${newUser.name} доданий та збережений у JSON`, 'green')

  res.status(201).json({
    message: 'Користувач успішно доданий та збережений!',
    user: newUser
  })
}

// --- Маршрути ---
app.route('/api/v1/users').get(getUsers).post(postUsers)

// --- Обробка 404 ---
app.use((req, res) => {
  res.status(404).json({ error: 'Шлях не знайдено' })
})

// --- Запуск сервера ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
