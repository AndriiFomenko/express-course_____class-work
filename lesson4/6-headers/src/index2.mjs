import express from 'express'

const app = express()

const person = { name: 'John', age: 25 }
const personJson = JSON.stringify(person)

app.get('/', (req, res) => {
  res.end(personJson)
})

app.get('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(personJson)
})

app.get('/text', (req, res) => {
  // res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.end(personJson)
  res.send(personJson) // ! теж саме що і дві строки вище
})

app.get('/auto', (req, res) => {
  // res.setHeader('Content-Type', 'application/json; charset=utf-8')
  // res.send(personJson)
  res.json(person) // ! теж саме що і дві строки вище
})

app.listen(3000)
