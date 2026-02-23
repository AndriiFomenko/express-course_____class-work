import { Router } from 'express'
import { getRootHandler } from '../controllers/info.mjs'

const router = Router()

router.route('/').get(getRootHandler)

export default router
