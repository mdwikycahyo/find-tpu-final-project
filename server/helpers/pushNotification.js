const axios = require('axios')

function pushNotification(customerName){
    axios('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        to: 'ExponentPushToken[kyzQutMLrJvSCZCCoWe967]',
        body: `Pelanggan ${customerName} butuh bantuan, segera check aplikasi anda:)`,
        title: "Ada pesan baru dari Finneral!",
    },
    })

    .then(response => {
    console.log('Success:', response.data);
    })
    .catch((error) => {
    console.error('Error:', error.response.data);
    });
}

module.exports = pushNotification