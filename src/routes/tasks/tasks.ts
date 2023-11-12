import { Router } from 'express'
import {
  assignTask,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from '../../controller/tasks/tasks.controllers'
import { validateTask } from '../../middleware/validator/validateTask'

const router = Router()

router.post('/', validateTask, createTask)
router.post('/:id/assign-user', assignTask)
router.put('/:id', validateTask, updateTask)
router.delete('/:id', deleteTask)
router.get('/:id', getTask)

export default router
