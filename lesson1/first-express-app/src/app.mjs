import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)
app.use(errors())

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.statusCode || 500).json({
      status: 'error',
      statusCode: err.statusCode || 500,
      message: err.message || 'Internal server error'
    })
  }
  next(err)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
