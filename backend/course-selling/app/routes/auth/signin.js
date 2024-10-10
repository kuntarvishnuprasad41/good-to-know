const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db');
const { validateSchema, loginValidator } = require('../../middlewares/validators');

const signInRouter = express.Router();

signInRouter.post('/', validateSchema(loginValidator), (req, res) => {
    const { firstName, lastname, email, password } = req.body

    console.log({ firstName, lastname, email, password });




    return formatOutput(res, 200, "Authenticated", reqData);

})


module.exports = signInRouter