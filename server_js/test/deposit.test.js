const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect,
  app = require('../app'),
  { clearDeposit } = require('./clear'),
  { User, Deposit } = require('../models')

chai.use(chaiHttp)

const data = {
  email: 'obin@mail.com',
  amount: 100000
}

before(function (done) {
  clearDeposit(done)
})

after(function (done) {
  clearDeposit(done)
})

describe('DEPOSIT TESTS', function () {
  describe('POST /deposits', function () {
    it('should send an new user obj with 201 status code', function (done) {
      chai
        .request(app)
        .post('/deposits')
        .send(data)
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('data')
          expect(res.body).to.have.property('message')
          expect(res.body.data).to.have.property('_id')
          expect(res.body.data).to.have.property('email')
          expect(res.body.data).to.have.property('history')
          expect(res.body.data.email).to.equal(data.email)
          done()
        })
    })

    it('should send an new user obj with 201 status code(2)', function (done) {
      chai
        .request(app)
        .post('/deposits')
        .send(data)
        .end(function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('data')
          expect(res.body).to.have.property('message')
          expect(res.body.data).to.have.property('_id')
          expect(res.body.data).to.have.property('email')
          expect(res.body.data).to.have.property('history')
          expect(res.body.data.email).to.equal(data.email)
          done()
        })
    })
  })
})