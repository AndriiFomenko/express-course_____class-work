import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
  const items = [
    { name: 'Apple', price: 1.99 },
    { name: 'Banana', price: 0.99 },
    { name: 'Cherry', price: 2.99 },
    { name: 'Date', price: 3.99 },
    { name: 'Elderberry', price: 4.99 },
    { name: 'Fig', price: 5.99 }
  ]
  const user = { name: 'John Smith', age: 21 }
  const title = 'Fruits'

  res.render('index', { items, user, title })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
