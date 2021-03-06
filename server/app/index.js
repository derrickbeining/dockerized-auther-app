'use strict'

var app = require('express')()
var path = require('path')

// "Enhancing" middleware (does not send response, server-side effects only)

app
  .use(require('./logging.middleware'))
  .use(require('./body-parsing.middleware'))
  .use(require('./sessions.middleware'))
  .use(function sessionLogger (req, res, next) {
    console.log('SESSION: ', req.session)
    next()
  })


  // "Responding" middleware (may send a response back to client)

  .use('/api', require('../api/api.router'))
  .use('/login', require('./login'))
  .use('/logout', require('./logout'))
  .use('/signup', require('./signup'))

var validFrontendRoutes = [ '/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login' ]
var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html')
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath)
  })
})

app
  .use(require('./statics.middleware'))

  // "Error" middleware

  .use(require('../utils/HttpError')(404).middleware())
  .use(require('./error.middleware'))

module.exports = app
