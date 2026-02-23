import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
import { logger } from './middlewares/logger.mjs'
import { notFoundHtmlHandler } from './middlewares/notFoundHtmlHandler.mjs'
import { errorHandler } from './middlewares/errorHandler.mjs'

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(logger)
app.use(router)
app.use(notFoundHtmlHandler)
app.use(errors())
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
