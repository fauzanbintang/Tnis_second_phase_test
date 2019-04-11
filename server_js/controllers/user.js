const { User } = require('../models')

module.exports = {
  getAllUsers(req, res) {
    User
      .find()
      .populate('history')
      .then(users => {
        res.status(200).json({
          message: 'successfully get all users',
          data: users
        })
      })
      .catch(err => {})
  },
  getBalance(req, res) {
    User
      .findOne({ account_number: req.params.account_number })
      .populate('history')
      .then(user => {
        let balance = 0
        if (user) {
          user.history.forEach(e => balance += e.amount)
          res.status(200).json({
            message: 'successfully get balance',
            data: {
              account_number: user.account_number,
              email: user.email,
              history: user.history,
              balance
            }
          })
        } else {
          throw 'user not found'
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'internal server err',
          err: err
        })
      })
  }
}