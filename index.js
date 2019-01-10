require('babel-register')({
  presets: [
    'babel-preset-env'
  ],
  plugins: [
    'dynamic-import-node'
  ]
})

require('./api')
require('./server')
