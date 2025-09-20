import { Router } from 'express'
import {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler,
  patchArticleByIdHandler
} from '../controllers/articles.mjs'

const router = Router()

router.route('/').get(getArticlesHandler).post(postArticlesHandler)

router
  .route('/:id')
  .get(getArticleByIdHandler)
  .delete(deleteArticleByIdHandler)
  .put(putArticleByIdHandler)
  .patch(patchArticleByIdHandler)

export default router
