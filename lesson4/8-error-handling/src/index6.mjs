import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  const unhandledPromise = Promise.reject(new Error('Can\'t get the data'))

  setTimeout(() => {
    unhandledPromise.catch((err) => {
      console.log('Обіцянка тепер оброблена: ', err.message)
    })
  }, 5000)

  res.send('Hello World')
})

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`)
  res.status(500).json({ message: err.message })
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Неперехоплене відхилення Promise:', reason.message)
})

process.on('rejectionHandled', (promise) => {
  console.log('Відхилена обіцянка тепер оброблена')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
