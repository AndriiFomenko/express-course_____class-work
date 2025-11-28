import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'

const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errors())

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
