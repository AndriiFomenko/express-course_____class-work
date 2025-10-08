import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
  const expiresTime = new Date(Date.now() + 10000)
  res.cookie('date', new Date().toISOString(), { httpOnly: false, expires: expiresTime })
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
