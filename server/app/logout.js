const logoutRouter = require('express').Router()

module.exports = logoutRouter

  .post('/', (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err)
      res.sendStatus(204)
    })
  })

