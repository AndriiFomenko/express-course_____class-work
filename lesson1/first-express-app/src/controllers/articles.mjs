export const getArticlesHandler = (req, res) => {
  res.end('GET Response from the articles')
}

export const postArticlesHandler = (req, res) => {
  res.end('POST Response from the articles')
}

export const getArticleByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('GET Response from the article by id')
}

export const putArticleByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('PUT Response from the article by id')
}

export const patchArticleByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('PATCH Response from the article by id')
}

export const deleteArticleByIdHandler = (req, res) => {
  console.log(req.params.id)
  res.end('DELETE Response from the article by id')
}
