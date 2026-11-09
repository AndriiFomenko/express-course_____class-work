// articles
export const getArticlesHandler = (req, res) => {
  res.send('Response from ARTICLES route')
}
export const postArticlesHandler = (req, res) => {
  res.send('Response from ARTICLES POST route')
}

// article by id
export const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`Response from ARTICLE with ID: ${articleId}`)
}
export const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`Response from ARTICLE PUT with ID: ${articleId}`)
}
export const patchArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`Response from ARTICLE PATCH with ID: ${articleId}`)
}
export const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params
  res.send(`Response from ARTICLE DELETE with ID: ${articleId}`)
}

