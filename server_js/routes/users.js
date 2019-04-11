var express = require('express');
var router = express.Router();
const user = require('../controllers/user')

router
  .get('/', user.getAllUsers)
  .get('/:account_number', user.getBalance)

module.exports = router;
