const loginRouter = require('express').Router()
const User = require('../db').model('user')

module.exports = loginRouter

  .post('/', (req, res, next) => {
    User.findOne({
      where: req.body
    })
      .then(user => {
        if (user) {
          req.session.userId = user.id
          res.status(200).json(user)
        } else {
          req.session = null
          res.sendStatus(401)
        }
      })
      .catch(next)
  })
