var express = require('express');
var router = express.Router();
const deposit = require('../controllers/deposit')

router
  .post('/', deposit.create)

module.exports = router;
