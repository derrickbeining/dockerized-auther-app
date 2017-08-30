const logoutRouter = require('express').Router()

module.exports = logoutRouter

  .post('/', (req, res, next) => {
    req.session = null
    res.sendStatus(204)
  })

