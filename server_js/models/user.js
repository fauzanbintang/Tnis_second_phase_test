const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  account_number: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'reqiured user email'],
    validate: [{
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
      },
      message: 'invalid email format'
    }, {
      validator: function (v) {
        return new Promise(function (resolve, reject) {
          User
            .findOne({ email: v, _id: { $ne: this._id } })
            .then(user => {
              if (user) {
                throw new Error()
              }
              resolve(true)
            })
            .catch(err => {
              resolve(false)
            })
        })
      },
      message: 'email already used'
    }]
  },
  history: [{ type: Schema.Types.ObjectId, ref: 'Deposit' }]
})

userSchema.post('save', function (doc, next) {
  User
    .findOneAndUpdate({ email: doc.email }, { account_number: doc._id.toString() })
    .then(user => {
      next()
    })
})

const User = mongoose.model('User', userSchema)

module.exports = User