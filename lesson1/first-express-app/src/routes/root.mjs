import { Router } from 'express'
import { getRootHandler } from '../controllers/root.mjs'

const router = Router()

router.get('/', getRootHandler)

export default router
