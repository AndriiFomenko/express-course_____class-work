import { Router } from 'express'
import rootRouter from './root.mjs'
import userRouter from './users.mjs'
import articleRouter from './articles.mjs'

const router = Router()

router.use('/', rootRouter)
router.use('/users', userRouter)
router.use('/articles', articleRouter)

export default router

