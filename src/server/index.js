const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// Change the default port for testing
const PORT = process.env.PORT || 3024; // Changed to 3024 for testing

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});

app.get('/testAPI', function (req, res) {
    res.send(mockAPIResponse);
});

// Export the app for testing
module.exports = app;
