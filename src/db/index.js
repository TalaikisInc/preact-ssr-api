import { open, unlink, ftruncate, readdir, readFile } from 'fs'
import { join } from 'path'

import { write, stringToJson } from './utils'
const baseDir = join(__dirname, '../../.data')

export const create = (dir, file, data, callback) => {
  const dataDir = join(baseDir, dir)
  const fileName = join(dataDir, `${file}.json`)
  open(fileName, 'wx', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const dataString = typeof data === 'string' ? data : JSON.stringify(data)
      write(fileDescriptor, dataString, callback)
    } else {
      callback('Cannot create new file, it may exist already.')
    }
  })
}

export const read = (dir, file, callback) => {
  readFile(join(baseDir, dir, `${file}.json`), 'utf8', (err, data) => {
    if (!err && data) {
      stringToJson(data, (err, parsed) => {
        if (!err && parsed) {
          callback(false, parsed)
        } else {
          console.log(err)
          callback(err)
        }
      })
    } else {
      callback(err, data)
    }
  })
}

export const update = (dir, file, data, callback) => {
  open(join(baseDir, dir, `${file}.json`), 'r+', (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const dataString = JSON.stringify(data)
      ftruncate(fileDescriptor, () => {
        if (!err) {
          write(fileDescriptor, dataString, callback)
        } else {
          callback('Error truncating file.')
        }
      })
    } else {
      callback('Cannot open file for updating, file may not exist.')
    }
  })
}

export const del = (dir, file, callback) => {
  unlink(join(baseDir, dir, `${file}.json`), (err) => {
    if (!err) {
      callback(false)
    } else {
      callback('Error deleting file.')
    }
  })
}

export const list = (dir, callback) => {
  readdir(join(baseDir, dir), (err, data) => {
    if (!err && data && data.length > 0) {
      const trimmedFilename = []
      data.forEach((filename) => {
        if (filename.indexOf('.json') > -1) {
          trimmedFilename.push(filename.replace('.json', ''))
        }
      })
      callback(false, trimmedFilename)
    } else {
      callback(err, data)
    }
  })
}
