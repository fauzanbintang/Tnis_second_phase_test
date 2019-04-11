var express = require('express');
var router = express.Router();
const userRouter = require('./users')
const depositRouter = require('./deposits')

/* GET home page. */
router
  .use('/users', userRouter)
  .use('/deposits', depositRouter)

module.exports = router;
