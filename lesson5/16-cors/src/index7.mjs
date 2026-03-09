import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import apiRoutes from './routes.mjs'

const app = express()
const PORT = 3000

const __dirname = dirname(fileURLToPath(import.meta.url))

const whitelist = ['http://localhost:63342', 'http://localhost:4000', 'http://localhost:3000']

const corsOptionsDelegate = (req, callback) => {
  const origin = req.get('Origin')
  const serverOrigin = `${req.protocol}://${req.get('host')}`

  console.log('Origin received:', origin)
  console.log('Origin serverOrigin:', serverOrigin)

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
