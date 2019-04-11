const { Deposit, User } = require('../models')

module.exports = {
  clearDeposit: function(done) {
    if (process.env.NODE_ENV === 'test') {
      Deposit
        .deleteMany({})
        .then(function() {
          done();
        })
        .catch(function(err) {
          console.log(err);
          done();
        });
    }
  },

  clearUser: function(done) {
    if(process.env.NODE_ENV === 'test') {
      User
        .deleteMany({})
        .then(function() {
          done()
        })
        .catch(function(err) {
          console.log(err);
          done()
        })
    }
  }
}