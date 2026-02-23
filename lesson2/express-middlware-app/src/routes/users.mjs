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
  validateUserParams,
  validateUserPatch
} from '../validators/userValidator.mjs'

console.log('--- users.mjs loaded ---')
const router = Router()

router.route('/').get(getUsersHandler).post(validateUserPost, postUsersHandler)

router
  .route('/:id')
  .get(validateUserParams, getUserByIdHandler)
  .put(validateUserParams, validateUserPut, putUserByIdHandler)
  .patch(validateUserParams, validateUserPatch, patchUserByIdHandler)
  .delete(validateUserParams, deleteUserByIdHandler)

export default router
