const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db')

const signUpRouter = express.Router();

signUpRouter.post('/', (req, res) => {
    const { firstName, lastname, email, password } = req.body

    console.log({ firstName, lastname, email, password });





    return formatOutput(res, 200, "Use Created", reqData);

})


module.exports = signUpRouter