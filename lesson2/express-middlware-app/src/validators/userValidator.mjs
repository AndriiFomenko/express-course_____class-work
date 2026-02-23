import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

const userSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(30)
})

const validateUserPost = celebrate({
  [Segments.BODY]: userSchema
})

const validateUserPut = celebrate({
  [Segments.BODY]: userSchema
})

const validateUserPatch = celebrate({
  [Segments.BODY]: userSchema.fork(['name', 'email', 'password'], (field) =>
    field.optional()
  )
})

const validateUserParams = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().required().min(5).max(10)
  })
})

export {
  validateUserPost,
  validateUserPut,
  validateUserParams,
  validateUserPatch
}
