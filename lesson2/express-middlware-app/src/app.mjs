import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
import { logger } from './middlewares/logger.mjs'
import { errorHandler } from './middlewares/errorHandler.mjs'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(logger)
app.use(router)
app.use(errors())
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
