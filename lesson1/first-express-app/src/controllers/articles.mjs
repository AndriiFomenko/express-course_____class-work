// articles
const getArticlesHandler = (req, res) => {
  res.end('Get articles route')
}

const postArticlesHandler = (req, res) => {
  res.end('Post articles route')
}

// articles/:id
const getArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Get article by id route: ${id}`)
}

const deleteArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Delete article by id route: ${id}`)
}

const putArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Put article by id route: ${id}`)
}

const patchArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`Patch article by id route: ${id}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler,
  patchArticleByIdHandler
}
