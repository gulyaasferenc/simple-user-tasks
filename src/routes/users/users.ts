import { Router } from 'express'
import {
  createUser,
  getUser,
  getUserTasks,
  listAllUsers,
  updateUser,
} from '../../controller/users/users.controllers'
import { validateUser } from '../../middleware/validator'

const router = Router()

router.post('/', validateUser, createUser)
// validation is same as by the post request, as put requires a valid object entry
router.put('/:id', validateUser, updateUser)
router.get('/', listAllUsers)
router.get('/:id', getUser)
router.get('/:id/tasks', getUserTasks)

export default router
