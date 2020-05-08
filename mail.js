var fs = require('fs');
var nodemail = require('nodemailer');

const Transport = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'rishabhmalhotra9211@gmail.com',
        pass: "SyncMasterB1930"
    }
})

let mail = {
    from: 'rishabhmalhotra9211@gmail.com',
    to: '',
    subject: 'Message from {name}',
    text: ''
}

function sendMessage(body) {
    console.log("Message from : " + body.name);
    mail.subject = mail.subject.replace('{name}', body.name);
    mail.to = body.recieve;

    //read data from file
    fs.readFile('statics/format.txt', (err, data) => {
        if (err) throw err;
        mail.text = data.toString();
        mail.text = mail.text.replace('{message}', body.message)
            .replace('{email}', body.email)
            .replace('{name}', body.name);

        Transport.sendMail(mail, (err, info) => {
            if (err) throw err;
            console.log('Message sent ! Value : ' + info.toString());
        })
    })
}

module.exports = {
    sendMessage: sendMessage
}