import { Router } from 'express'
import infoRouter from './info.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'

const router = Router()

router.use('/', infoRouter)
router.use('/users', usersRouter)
router.use('/articles', articlesRouter)

export default router
