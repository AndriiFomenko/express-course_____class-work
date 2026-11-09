import express from 'express'
import {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  patchArticleByIdHandler,
  deleteArticleByIdHandler
} from '../controllers/articles.mjs'

const articleRouter = express.Router()

articleRouter.route('/').get(getArticlesHandler).post(postArticlesHandler)

articleRouter
  .route('/:articleId')
  .get(getArticleByIdHandler)
  .put(putArticleByIdHandler)
  .patch(patchArticleByIdHandler)
  .delete(deleteArticleByIdHandler)

export default articleRouter

