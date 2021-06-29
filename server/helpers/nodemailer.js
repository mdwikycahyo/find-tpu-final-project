const nodemailer = require("nodemailer")

function nodemailerSend(email){
    let transporter = nodemailer.createTransport({
        service: 'Yahoo',
        port: 465,
        secure: true, 
        auth: {
            user: 'finneral.team@yahoo.com',
            pass: '@DmiN123456789'
        }
    });
    let mailOptions = {
        from: 'finneral.team@yahoo.com',
        to: email, 
        subject: 'Renaissance Game',
        text: 'Terima Kasih telah menjadi member Renaissance Game, selamat bermain'
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
        } else {
            console.log('Email sent!!!');
        }
    });
}

module.exports = nodemailerSend