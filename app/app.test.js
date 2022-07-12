// eslint-disable-next-line no-unused-vars
'use strict'

const app = require('./app')
const request = require('request')
const http = require('http')

const port = process.env.PORT || 3001

describe ('app', () => {
  let server

  beforeAll ((done) => {
    server = http.createServer(app).listen(port, done)
  })

  afterAll ((done) => {
    server.close(done)
  })

  describe ('GET /', () => {
    it (`returns Homepage`, (done) => {
      const url = getUrl('/')
      const content = 'Node.js on Azure App Service Demo'
      request.get(url, (error, response, body) => {
        expect(response.statusCode).toBe(200)
        expect(response.body.includes(content)).toBe(true)
        done()
      })
    })
	})

  describe ('GET /health', () => {
    it (`returns 200`, (done) => {
      const url = getUrl('/health')
      request.get(url, (error, response, body) => {
        expect(response.statusCode).toBe(200)
        done()
      })
    })
  })

  describe ('POST /webhooks/test', () => {
    it (`returns 200`, (done) => {
      const url = getUrl('/webhooks/test')
      request.post(url, (error, response, body) => {
        expect(response.statusCode).toBe(200)
        done()
      })
    })
  })
})

function getUrl (path) {
	return `http://localhost:${port}` + path
}