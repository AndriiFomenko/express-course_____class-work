import { randomUUID } from 'crypto'

// users
const getUsersHandler = (req, res) => {
  res.end('GET users route')
}

const postUsersHandler = (req, res) => {
  const newUser = {
    id: randomUUID(),
    ...req.body
  }
  console.log(newUser)
  res.status(201).json(newUser)
}

// users/:id
const getUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`GET user by id route ${id}`)
}

const putUserByIdHandler = (req, res) => {
  const { id } = req.params
  const updatedUser = {
    id,
    ...req.body
  }
  res.json(updatedUser)
}

const patchUserByIdHandler = (req, res) => {
  const { id } = req.params
  const updatedUser = {
    id,
    ...req.body
  }
  res.json(updatedUser)
}

const deleteUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`DELETE user by id route ${id}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler,
  deleteUserByIdHandler
}
