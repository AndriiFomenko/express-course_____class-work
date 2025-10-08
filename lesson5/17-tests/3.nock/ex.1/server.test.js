const request = require('supertest')
const nock = require('nock')
const { app, server } = require('./server')

describe('Test GET /external-post', () => {
  afterAll(() => {
    server.close()
  })

  test('should mock external API response for a post', async () => {
    const mockApiResponse = { id: 1, title: 'Mocked Post', body: 'This is a mocked post.', userId: 1 }

    nock('https://jsonplaceholder.typicode.com').get('/posts/1').reply(200, mockApiResponse)

    const response = await request(app).get('/external-post')
    // console.log(response.body)
    // console.log(response.statusCode)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(mockApiResponse)
  })
})
