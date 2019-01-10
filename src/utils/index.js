import { post } from 'axios'

export const api = (obj, cb) => {
  post('http://localhost:3000/api', obj).then((res) => {
    cb(false, res.data)
  }).catch((err) => {
    cb(err.message)
  })
}

export const toSeo = (url) => {
  return url.toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-*/, '')
    .replace(/-*$/, '')
}
