// users
export const getUsersHandler = (req, res) => {
  res.send('Response from USERS route')
}
export const postUsersHandler = (req, res) => {
  res.send('Response from USERS POST route')
}

// user by id
export const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`Response from USER with ID: ${userId}`)
}
export const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`Response from USER PUT with ID: ${userId}`)
}
export const patchUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`Response from USER PATCH with ID: ${userId}`)
}
export const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`Response from USER DELETE with ID: ${userId}`)
}
