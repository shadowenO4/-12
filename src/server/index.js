var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});
  
// Change the port to 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get('/testAPI', function (req, res) {
    res.send(mockAPIResponse);
});
