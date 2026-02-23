import { Router } from 'express'
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  putUserByIdHandler,
  patchUserByIdHandler,
  deleteUserByIdHandler
} from '../controllers/users.mjs'

const router = Router()

router.route('/').get(getUsersHandler).post(postUsersHandler)

router
  .route('/:id')
  .get(getUserByIdHandler)
  .put(putUserByIdHandler)
  .patch(patchUserByIdHandler)
  .delete(deleteUserByIdHandler)

export default router
