const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db')

const signInRouter = express.Router();

signInRouter.post('/', (req, res) => {
    const { firstName, lastname, email, password } = req.body

    console.log({ firstName, lastname, email, password });




    return formatOutput(res, 200, "Authenticated", reqData);

})


module.exports = signInRouter