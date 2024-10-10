const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db');
const { validateSchema, userValidator } = require('../../middlewares/validators');

const signUpRouter = express.Router();

signUpRouter.post('/', validateSchema(userValidator), (req, res) => {
    const { firstName, lastname, email, password } = req.body
    console.log({ firstName, lastname, email, password });
    return formatOutput(res, 200, "Use Created", reqData);

})


module.exports = signUpRouter