import joi from 'joi'

export const baseUserEntity = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  username: joi.string().required(),
})
