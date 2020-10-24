const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'This is my first creation',
    text: 'I hope this one actually gets to you'
})
