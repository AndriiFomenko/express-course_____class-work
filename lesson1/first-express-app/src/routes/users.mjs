import express from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'

const userRouter = express.Router()

userRouter.route('/').get(getUsersHandler).post(postUsersHandler)

userRouter
  .route('/:userId')
  .get(getUserByIdHandler)
  .put(putUserByIdHandler)
  .patch(patchUserByIdHandler)
  .delete(deleteUserByIdHandler)

export default userRouter
