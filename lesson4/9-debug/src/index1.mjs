import express from 'express'

const app = express()
const port = 3000

if (!process.env.DEBUG) {
  throw new Error('Please set DEBUG env variable first')
}

app.get('/', (req, res, next) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

// yarn dev:debug
// yarn dev:router
// yarn dev:app
