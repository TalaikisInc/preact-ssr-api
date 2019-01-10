import { writeFile, close } from 'fs'

export const closeFile = (descriptor, callback) => {
  close(descriptor, (err) => {
    if (!err) {
      callback(false)
    } else {
      callback(`Error closing file: ${err.message}`)
    }
  })
}

export const write = (descriptor, data, callback) => {
  writeFile(descriptor, data, (err) => {
    if (!err) {
      closeFile(descriptor, callback)
    } else {
      callback(`Error writing file: ${err.message}`)
    }
  })
}

export const stringToJson = (msg, cb) => {
  try {
    cb(false, JSON.parse(msg))
  } catch (e) {
    cb(e)
  }
}
