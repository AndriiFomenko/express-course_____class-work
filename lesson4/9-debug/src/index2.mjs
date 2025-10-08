import express from 'express'
import debugLib from 'debug'

const app = express()
const port = 3000
const debug = debugLib('app:main')

app.get('/', (req, res, next) => {
  res.sendStatus(200)
  debug('Sending a 200 OK response')
})

app.listen(port, () => {
  debug(`Server started at http://localhost:${port}`)
  console.log(`Server started at http://localhost:${port}`)
})

// yarn dev:app
