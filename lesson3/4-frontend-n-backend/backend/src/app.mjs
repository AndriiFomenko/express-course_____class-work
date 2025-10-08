import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { log } from './utils/helpers.mjs'

const PORT = 3000
const MOCK_USERS = [
  { id: 1, name: 'John Doe', age: 30, skills: ['JavaScript', 'Python', 'Java'] },
  { id: 2, name: 'Jane Smith', age: 25, skills: ['HTML', 'CSS', 'React'] },
  { id: 3, name: 'Bob Johnson', age: 35, skills: ['Node.js', 'MongoDB', 'Express'] },
  { id: 4, name: 'Alice Williams', age: 28, skills: ['TypeScript', 'Angular', 'RxJS'] },
  { id: 5, name: 'Charlie Brown', age: 32, skills: ['Vue.js', 'Nuxt', 'Vuetify'] }
]

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.use('/api/users', (req, res) => {
  const data = MOCK_USERS
  log('data:', data, 'blue')
  res.json(data)
})

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  log('err:', err, 'red')
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'yellow')
})
