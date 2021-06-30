const nodemailer = require("nodemailer")

const gmail = {
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'hacktiv8burneremail@gmail.com',
        pass: '12ChairmanFaza'
    }
}

const ymail = {
    service: 'yahoo',
    auth: {
        user: 'finneral.team@yahoo.com',
        pass: '@DmiN123456789'
    }
}

function  nodemailerSendTransaction(transactionData){
    let transporter = nodemailer.createTransport(gmail);
    let mailOptions = {
        from: 'hacktiv8burneremail@gmail.com',
        to: transactionData.email, 
        subject: 'Finneral Pembayaran',
        text: `Terima Kasih telah  menggunakan jasa finneral sebagain layanan pemakaman anda pemakaman atas nama ${transactionData.deceasedName}
        takan segera dikebumikan pada tanggal ${transactionData.burialDate} dan akan dikuburkan secara ${transactionData.religion}, almarhum memiliki nama ayan ${transactionData.fatherName}
        pemakaman akan segera diselenggarakan di ${transactionData.cemetaryName}
        `
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
        } else {
            console.log('Email sent!!!');
        }
    });
}

function  nodemailerSendNotification(transactionData){
    let transporter = nodemailer.createTransport(gmail);
    let mailOptions = {
        from: 'hacktiv8burneremail@gmail.com',
        to: transactionData.email, 
        subject: 'Finneral Pemakaman',
        text: `Halo pemakaman untuk saudara ${transactionData.deceasedName} sudah siap dilaksanakan customer diharapkan untuk segera menuju pemakaman `
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
        } else {
            console.log('Email sent!!!');
        }
    });
}

module.exports = {nodemailerSendNotification, nodemailerSendTransaction }