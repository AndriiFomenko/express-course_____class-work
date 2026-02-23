import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'

const PORT = 3000
const app = express()

const logger = (req, res, next) => {
  const { method, url } = req
  const timestamp = new Date().toLocaleString()
  console.log(`[${timestamp}] ${method} ${url}`)
  next()
}

app.use(express.json())
app.use(logger)
app.use(router)
app.use(errors())

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res
      .status(err.status || 500)
      .json({ error: err.message || 'Internal Server Error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
