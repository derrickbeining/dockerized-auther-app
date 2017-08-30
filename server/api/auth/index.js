'use strict'
const User = require('../../db').model('user')

const authRouter = require('express').Router()

module.exports = authRouter
  .get('/me', (req, res, next) => {
    const userId = req.session.userId && Number(req.session.userId)
    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => res.json(user))
      .catch(next)
  })
