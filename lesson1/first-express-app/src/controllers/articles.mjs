export const getArticlesHandler = (req, res) => {
  res.end('GET /articles Response')
}

export const postArticlesHandler = (req, res) => {
  res.end('POST /articles Response')
}

export const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`GET /articles/${articleId} Response`)
}

export const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`PUT /articles/${articleId} Response`)
}

export const patchArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`PATCH /articles/${articleId} Response`)
}

export const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.end(`DELETE /articles/${articleId} Response`)
}
