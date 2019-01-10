import { categoryById, notFound, categoriesByParent } from './src/handlers'

const express = require('express')
const { json } = require('body-parser')
const compression = require('compression')()
const app = express()

const handlers = {
  categoriesByParent,
  categoryById,
  notFound
}

app.use(json()).use(compression).post('/api', (req, res) => {
  const action = typeof req.body.action === 'string' ? req.body.action : false
  if (action) {
    res.header({ 'Content-Type': 'application/json' })
    const handler = handlers[action] !== undefined ? handlers[action] : handlers['notFound']
    handler(req, res)
  } else {
    res.status(405).end({ error: 'Method not allwed' })
  }
}).listen(3001, (err) => {
  if (err) throw err
  console.log(`> API Running on localhost:3001`)
})
