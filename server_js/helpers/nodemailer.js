"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(data) {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.OFFICER_EMAIL,
      pass: process.env.OFFICER_EMAIL_PASS
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"Fauzan Bank 👻" <${process.env.OFFICER_EMAIL}>`, // sender address
    to: data.email, // list of receivers
    subject: `${data.subject} ✔`, // Subject line
    text: `${data.text}` // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions)
}

module.exports = main