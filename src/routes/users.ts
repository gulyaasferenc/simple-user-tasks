import { Router } from 'express'
import { createUser } from '../controller/users'

const router = Router()

router.post('/', createUser)

export default router
