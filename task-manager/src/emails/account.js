const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.YAHOO_EMAIL,
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.YAHOO_EMAIL,
        subject: 'Regret seeing you leave!',
        text: `${name}, we're sorry you decided to leave. Hope you reconsider.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
