const express = require('express')
const axios = require('axios')
const app = express()

app.get('/external-post', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(500).send('Error')
  }
})

const server = app.listen(3000, () => {})

module.exports = { app, server }
