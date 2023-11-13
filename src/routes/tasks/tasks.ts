import { Router } from 'express'
import {
  assignTask,
  createTask,
  deleteTask,
  getTask,
  unAssign,
  updateTask,
} from '../../controller/tasks/tasks.controllers'
import { validateTask } from '../../middleware/validator'

const router = Router()

router.post('/', validateTask, createTask)
router.post('/:id/assign-user', assignTask)
router.post('/:id/unassign', unAssign)
// validation is same as by the post request, as put requires a valid object entry
router.put('/:id', validateTask, updateTask)
router.delete('/:id', deleteTask)
router.get('/:id', getTask)

export default router
