const path = require('path');
const express = require('express');
const app = express();

const dir = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3001

app.use(express.static(dir));

app.listen(PORT, function () {
    console.log('Listening on http://localhost:3000/');
});