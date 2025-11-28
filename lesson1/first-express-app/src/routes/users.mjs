import { Router } from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'
import {
  validateUserPost,
  validateUserPut,
  validateUserPatch,
  validateUserIdParams
} from '../validators/userValidator.mjs'

const router = Router()

router.route('/').get(getUsersHandler).post(validateUserPost, postUsersHandler)

router
  .route('/:id')
  .get(validateUserIdParams, getUserByIdHandler)
  .put(validateUserIdParams, validateUserPut, putUserByIdHandler)
  .patch(validateUserIdParams, validateUserPatch, patchUserByIdHandler)
  .delete(validateUserIdParams, deleteUserByIdHandler)

export default router
