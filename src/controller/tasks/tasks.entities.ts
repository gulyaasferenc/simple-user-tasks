import joi from 'joi'

export const baseTask = joi.object({
  name: joi.string().required(),
  description: joi.string(),
  status: joi.string().valid('todo', 'pending', 'done'),
  endDate: joi.date().greater('now'),
})
