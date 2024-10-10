const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const signUpRouter = express.Router();

signUpRouter.post('/', (req, res) => {
    const reqData = req.body

    console.log(reqData);


    return formatOutput(res, 200, "Use Created", reqData);

})


module.exports = signUpRouter