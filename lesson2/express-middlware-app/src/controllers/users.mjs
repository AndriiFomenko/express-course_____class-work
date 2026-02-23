export const getUsersHandler = (req, res) => {
  res.end('GET Response from the users')
}

export const postUsersHandler = (req, res) => {
  res.end('POST Response from the users')
}

export const getUserByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('GET Response from the user by id')
}

export const putUserByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('PUT Response from the user by id')
}

export const patchUserByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('PATCH Response from the user by id')
}

export const deleteUserByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('DELETE Response from the user by id')
}
