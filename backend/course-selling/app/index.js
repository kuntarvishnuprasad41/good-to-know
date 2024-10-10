const express = require('express');
const { formatOutput } = require('./utils/normalizer');
const app = express();




app.get('/', (req, res) => {
    formatOutput(res, 200, "Hello World")
})






app.listen(8000, (err) => {
    if (!err) {
        console.log("Running at 8000");

    }
})