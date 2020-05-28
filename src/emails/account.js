const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'sonijeet1837@gmail.com',
    from: 'sonijeet1837@gmail.com',
    subject: 'this is my first creation',
    text: 'I hope this one actually get to you'
}).then(() => {
    console.log('Message Sent')
}).catch((e) => {
    console.log(e)
    console.log(e.response.body)
})
