const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect,
  app = require('../app'),
  { clearUser } = require('./clear'),
  { User, Deposit } = require('../models')

chai.use(chaiHttp)

const data = {
  email: 'aji@mail.com',
  amount: 100000
}

let account_number
before(function (done) {
  clearUser(done)
  Deposit.create({ amount: data.amount })
    .then(deposit => {
      return User.create({ email: data.email, history: [deposit._id] })
    })
    .then(user => {
      account_number = user._id.toString()
      return User.create({ email: data.email })
    })
    .then(user2 => {
      console.log(user2);
    })
    .catch(err => console.log('user test err'))
})

after(function (done) {
  clearUser(done)
})

describe('USER TESTS', function () {
  describe('GET /users', function () {
    it('should send object with 200 status code', function (done) {
      chai
        .request(app)
        .get('/users')
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          done()
        })
    })
  })

  describe('GET /users/:account_number', function () {
    it('should send object with 200 status code', function (done) {
      chai
        .request(app)
        .get(`/users/${account_number}`)
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          done()
        })
    })

    it('should send object with 500 status code(wrong account_number)', function (done) {
      chai
        .request(app)
        .get(`/users/${account_number}a`)
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(500)
          expect(res.body).to.be.an('object')
          done()
        })
    })

  })
})