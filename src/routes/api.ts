import { Router } from 'express'

const router = Router()

import users from './users/users'
import tasks from './tasks/tasks'

router.use('/users', users)
router.use('/tasks', tasks)

export default router
