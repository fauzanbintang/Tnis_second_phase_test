const mongoose = require('mongoose')
const Schema = mongoose.Schema

const depositSchema = new Schema({
  amount: {
    type: Number,
    required: [true, 'required amount of deposit']
  },
  date: {
    type: Date,
    default: new Date
  }
})

const Deposit = mongoose.model('Deposit', depositSchema)

module.exports = Deposit