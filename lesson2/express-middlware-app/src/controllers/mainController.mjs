import { log } from '../config/logger.mjs'

export const mainController = (req, res) => {
  log(req.body, 'highlight')
  res.send('Response from express server')
}
