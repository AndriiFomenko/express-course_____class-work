import { Router } from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler
} from '../controllers/users.mjs'
import {
  validateUserPost,
  validateUserPut,
  validateUserIdParam
} from '../validators/userValidator.mjs'

const router = Router()

router.route('/').get(getUsersHandler).post(validateUserPost, postUsersHandler)

router
  .route('/:id')
  .get(validateUserIdParam, getUserByIdHandler)
  .delete(validateUserIdParam, deleteUserByIdHandler)
  .put(validateUserIdParam, validateUserPut, putUserByIdHandler)
  .patch(validateUserIdParam, patchUserByIdHandler)

export default router
