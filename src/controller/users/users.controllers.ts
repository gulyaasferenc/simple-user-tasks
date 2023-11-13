import { Request, Response } from 'express'

import { User } from '../../db/models/user.model'
import { BaseUser, ParamsWithId, UserResponse } from './users.iterfaces'
import { Task } from '../../db/models'
import { logger } from '../../utils/logger/logger'

export const createUser = async (
  req: Request<undefined, UserResponse, BaseUser>,
  res: Response
) => {
  try {
    const user = await User.create({
      ...req.body,
    })
    console.log(user.getName())
    res.status(201).send(user)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const updateUser = async (
  req: Request<ParamsWithId, UserResponse, BaseUser>,
  res: Response
) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) {
      return res.status(404).send('User not found')
    }

    const updatedUser = await user.update({ ...req.body })

    res.status(201).send(updatedUser)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const listAllUsers = async (req: Request, res: Response) => {
  try {
    const userList = await User.scope('withTasks').findAll()

    res.status(200).send(userList)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const getUser = async (req: Request<ParamsWithId>, res: Response) => {
  try {
    const user = await User.scope('withTasks').findByPk(req.params.id)

    user ? res.status(200).send(user) : res.status(404).send('User not found')
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const getUserTasks = async (
  req: Request<ParamsWithId>,
  res: Response
) => {
  try {
    const taskList = await Task.findAll({ where: { userId: req.params.id } })

    res.status(200).send(taskList)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}
