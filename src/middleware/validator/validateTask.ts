import { Request, Response, NextFunction } from 'express'
import { baseTask } from '../../controller/tasks/tasks.entities'

export const validateTask = async <RequestParam, RequestResponse, RequestBody>(
  req: Request<RequestParam, RequestResponse, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    await baseTask.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).send(error)
  }
}
