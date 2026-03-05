import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const token = jwt.sign(payload, secretKey)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)

try {
  const fakeToken = token + '123'
  const payload = jwt.verify(fakeToken, secretKey)
  logColored('Decoded payload 2:', 'bgRed', payload)
} catch (err) {
  log(err.message, 'bgRedBright')
}
