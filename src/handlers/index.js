import { read } from '../db'
import { join } from 'path'

export const categoriesByParent = (req, res) => {
  const id = typeof req.body.id === 'number' ? req.body.id : 0
  read('meta', 'categories', (err, data) => {
    if (!err && data) {
      res.json(data.filter(el => el.parent === id))
    } else {
      res.end(500)
    }
  })
}

export const categoryById = (req, res) => {
  const id = typeof req.body.id === 'number' ? req.body.id : 0
  const page = typeof req.body.page === 'number' ? req.body.page : 0
  if (id && page) {
    read(join('categories', id), page, (err, data) => {
      if (!err && data) {
        res.end(data)
      } else {
        res.end(500)
      }
    })
  } else {
    res.end(405)
  }
}

export const notFound = (req, res) => {
  res.end(404)
}
