import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const options = {
  algorithm: 'HS512',
  expiresIn: '3s'
}

const token = jwt.sign(payload, secretKey, options)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)

setTimeout(() => {
  try {
    const decodedPayload = jwt.verify(token, secretKey)
    logColored('Decoded payload:', 'blue', decodedPayload)
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'bgRedBright')
  }
}, 2500)

setTimeout(() => {
  try {
    const decodedPayload = jwt.verify(token, secretKey)
    logColored('Decoded payload:', 'blue', decodedPayload)
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'bgRedBright')
  }
}, 5000)
