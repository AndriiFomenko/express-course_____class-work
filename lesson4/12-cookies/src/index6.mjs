import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('date', new Date().toISOString(), { httpOnly: false, maxAge: 86400000 })
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/settings', (req, res) => {
  res.cookie('language', 'uk', { path: '/settings' })

  const dateCookie = req.cookies['date']
  const languageCookie = req.cookies['language']

  res.status(200).send(`
    <h1>Settings raw cookies: <br>${req.headers.cookie}</h1> <!-- Відображення "сирих" куків -->
    <h2>Settings parsed cookie date: ${dateCookie}</h2> <!-- Відображення розібраного значення куки 'date' -->
    <h2>Settings parsed cookie language: ${languageCookie}</h2> <!-- Відображення розібраного значення куки 'language' -->
  `)
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
