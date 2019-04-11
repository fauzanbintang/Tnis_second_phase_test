const { Deposit, User } = require('../models')
const sendEmail = require('../helpers/nodemailer')

module.exports = {
  create(req, res) {
    let depositId
    Deposit
      .create({ amount: req.body.amount })
      .then(deposit => {
        depositId = deposit._id
        return User.findOne({ email: req.body.email })
      })
      .then(async user => {
        if (user) {
          user.history.unshift(depositId)
          await User.findOneAndUpdate({ email: req.body.email }, { history: user.history })
        } else {
          user = await User.create({ email: req.body.email, history: [depositId] })
        }
        let data = {
          email: user.email,
          subject: "Deposit notification",
          text: `Deposit successfully to ${user._id.toString()} with total amount ${req.body.amount}`
        }
        sendEmail(data).catch(err => console.log(err))
        res.status(201).json({
          message: 'successfully deposit',
          data: user
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'internal server err',
          err: err
        })
      })
  }
}