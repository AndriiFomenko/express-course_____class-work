import { Router } from 'express'
import {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  patchArticleByIdHandler,
  deleteArticleByIdHandler
} from '../controllers/articles.mjs'

const router = Router()

router.route('/').get(getArticlesHandler).post(postArticlesHandler)

router
  .route('/:id')
  .get(getArticleByIdHandler)
  .put(putArticleByIdHandler)
  .patch(patchArticleByIdHandler)
  .delete(deleteArticleByIdHandler)

export default router
