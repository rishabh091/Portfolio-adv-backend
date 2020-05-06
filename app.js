const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

const server = app.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log('Server running at port : ' + server.address().port);
})