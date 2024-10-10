const express = require('express');
const { formatOutput } = require('./utils/normalizer');
const v1Router = require('./routes/v1Routes');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    formatOutput(res, 200, "Hello World")
});

app.use('/v1', v1Router);

async function main() {
    const DB_URL = process.env.DB_URL

    mongoose.connect(DB_URL).then(() => {
        console.log("Connected to MongoDB");
        app.listen(8000, (err) => {
            if (!err) {
                console.log("Running at 8000");

            }
        })
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

main()