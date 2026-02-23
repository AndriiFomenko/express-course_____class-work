import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const notFoundHtmlHandler = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../../public/404.html'))
}
