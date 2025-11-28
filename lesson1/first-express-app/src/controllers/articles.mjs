// articles
const getArticlesHandler = (req, res) => {
  res.end('GET articles route')
}

const postArticlesHandler = (req, res) => {
  res.end('POST articles route')
}

// articles/:id
const getArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`GET article by id route ${id}`)
}

const putArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`PUT article by id route ${id}`)
}

const patchArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`PATCH article by id route ${id}`)
}

const deleteArticleByIdHandler = (req, res) => {
  const { id } = req.params
  res.end(`DELETE article by id route ${id}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  putArticleByIdHandler,
  patchArticleByIdHandler,
  deleteArticleByIdHandler
}
