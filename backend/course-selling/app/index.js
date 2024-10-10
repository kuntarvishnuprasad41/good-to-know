const express = require('express');
const { formatOutput } = require('./utils/normalizer');
const v1Router = require('./routes/v1Routes');
const app = express();





app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true }));





app.get('/', (req, res) => {
    formatOutput(res, 200, "Hello World")
});


app.use('/v1', v1Router);








app.listen(8000, (err) => {
    if (!err) {
        console.log("Running at 8000");

    }
})