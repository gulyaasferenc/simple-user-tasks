import { Request, Response } from 'express'

import { User } from '../db/models/user.model'

interface BaseUser {
  firstName: string
  lastName: string
}

interface UserResponse extends BaseUser {
  createdAt: Date
  updatedAt: Date
}

export const createUser = async (
  req: Request<undefined, UserResponse, BaseUser>,
  res: Response
) => {
  const body: BaseUser = req.body

  console.log(body)

  try {
    const user = await User.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}
