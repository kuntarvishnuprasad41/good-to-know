const express = require('express');
const { formatOutput } = require('../utils/normalizer');
const v1Router = express.Router();


v1Router.get('/', (req, res) => {
    return formatOutput(res, 200, "Hello World")
})


module.exports = v1Router;