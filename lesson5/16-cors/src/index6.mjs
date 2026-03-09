import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import apiRoutes from './routes.mjs'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

const corsOptions = {
  origin: 'http://localhost:63342',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.static(__dirname + '/public'))

app.use(apiRoutes)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})
