const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mitesh@internauts.io',
        subject: 'Welcome to the Taskmanager App! We are happy to have you with us.',
        text: `Welcome to the app, ${name}. Let me Know how you get along with an app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mitesh@internauts.io',
        subject: 'Account deleted sucessfully',
        text: `Hello, ${name}, Your account has been deleted and all of your task data also has been deleted. We are sorry that you are leaving us, can you please make some time and tell us about why you are leaving, so we can improve ourself so we want loss our valuable customer. Thank You`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
