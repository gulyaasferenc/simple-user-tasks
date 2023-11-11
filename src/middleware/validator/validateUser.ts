import { Request, Response, NextFunction } from 'express'

import { baseUserEntity } from '../../controller/users/users.entities'

export const validateUser = async <RequestParam, RequestResponse, RequestBody>(
  req: Request<RequestParam, RequestResponse, RequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    await baseUserEntity.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(403).send(error)
  }
}
