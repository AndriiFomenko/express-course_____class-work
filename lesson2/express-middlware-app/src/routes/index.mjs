import { Router } from 'express'
import infoRouter from './info.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'

const router = Router()

router.use('/users', usersRouter)
router.use('/articles', articlesRouter)
router.use('/', infoRouter)

export default router
