const session = require('express-session')

module.exports = session({
  secret: 'supersecretsecret',
  resave: false,
  saveUninitialized: false,
  cooke: {
    maxAge: 30 * 60 * 1000
  }
})
