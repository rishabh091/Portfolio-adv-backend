const express = require('express');
const app = express();
const mail = require('./mail.js');
const bodyParser = require('body-parser');

const json = bodyParser.json();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/mail', json, (req, res) => {
    res.send(mail.sendMessage(req.body));
})

const server = app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log('Server running at port : ' + server.address().port);
})