import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

const userSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().required().email(),
  age: Joi.number().required().min(0).max(100)
})

const validateUserPost = celebrate({
  [Segments.BODY]: userSchema
})

const validateUserPut = celebrate({
  [Segments.BODY]: userSchema
})

const validateUserIdParam = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.string().required().min(5).max(30)
  })
})

export { validateUserPost, validateUserPut, validateUserIdParam }
