const path = require('path');
const express = require('express');
const app = express();

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});