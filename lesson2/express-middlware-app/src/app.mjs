import express from 'express'
import { log, requestLogger } from './config/logger.mjs'
import router from './routes/index.mjs'
import { notFoundHandler, errorHandler } from './middleware/errorHandler.mjs'

const PORT = process.env.PORT || 3000
const app = express()

app.use(requestLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'success')
})
