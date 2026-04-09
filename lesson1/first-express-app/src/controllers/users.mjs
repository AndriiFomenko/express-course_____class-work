export const getUsersHandler = (req, res) => {
  res.end('GET /users Response')
}

export const postUsersHandler = (req, res) => {
  const { name, email, age } = req.body

  res.json({
    message: 'POST /users Response',
    data: { name, email, age }
  })
}

export const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`GET /users/${userId} Response`)
}

export const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`PUT /users/${userId} Response`)
}

export const patchUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`PATCH /users/${userId} Response`)
}

export const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.end(`DELETE /users/${userId} Response`)
}
