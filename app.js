const express = require('express');
const app = express();
const cors = require('cors');
const mail = require('./mail.js');
const bodyParser = require('body-parser');

const json = bodyParser.json();

let corsConfig = {
    origin: (origin, callback) => {
        let list = ['http://localhost:4200', 'http://rishabhmalhotra.web.app'];
        //condition to check if url is present in allowed list or nor
        if(list.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.use(cors(corsConfig));

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