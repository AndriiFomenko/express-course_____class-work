// users
const getUsersHandler = (req, res) => {
  res.end('Get users route')
}

const postUsersHandler = (req, res) => {
  res.end('Post users route')
}

// users/:id
const getUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Get user by id route: ${id}`)
}

const deleteUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Delete user by id route: ${id}`)
}

const putUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Put user by id route: ${id}`)
}

const patchUserByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Patch user by id route: ${id}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler
}
