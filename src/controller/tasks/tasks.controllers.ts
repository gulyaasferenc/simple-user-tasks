import { Request, Response } from 'express'
import {
  AssignBody,
  BaseTask,
  ParamsWithId,
  TaskResponse,
} from './tasks.interfaces'
import { Task } from '../../db/models'
import { logger } from '../../utils/logger/logger'

export const createTask = async (
  req: Request<null, TaskResponse, BaseTask>,
  res: Response
) => {
  try {
    const task = await Task.create({ ...req.body })

    res.status(201).send(task)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const assignTask = async (
  req: Request<ParamsWithId, TaskResponse, AssignBody>,
  res: Response
) => {
  try {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
      return res.status(404).send('Task not found')
    }

    const updatedTask = await task.update({ userId: req.body.userId })

    res.status(201).send(updatedTask)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const updateTask = async (
  req: Request<ParamsWithId, TaskResponse, Partial<BaseTask>>,
  res: Response
) => {
  try {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
      return res.status(404).send('Task not found')
    }

    if (
      (!task.userId && req.body.status === 'pending') ||
      req.body.status === 'done'
    ) {
      return res.status(400).send('not allowed status for task without user')
    }

    const updatedTask = await task.update({
      ...req.body,
      updatedOn: new Date(),
    })

    res.status(201).send(updatedTask)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const deleteTask = async (
  req: Request<ParamsWithId, TaskResponse, Partial<BaseTask>>,
  res: Response
) => {
  try {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
      return res.status(404).send('Task not found')
    }

    await task.destroy()

    res.status(200).send()
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const getTask = async (
  req: Request<ParamsWithId, TaskResponse, Partial<BaseTask>>,
  res: Response
) => {
  try {
    const task = await Task.findByPk(req.params.id)

    task ? res.status(200).send(task) : res.status(404).send('Task not found')
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}

export const unAssign = async (
  req: Request<ParamsWithId, TaskResponse, AssignBody>,
  res: Response
) => {
  try {
    const task = await Task.findByPk(req.params.id)

    if (!task) {
      return res.status(404).send('Task not found')
    }

    const updatedTask = await task.update({ userId: null })

    res.status(201).send(updatedTask)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error)
  }
}
