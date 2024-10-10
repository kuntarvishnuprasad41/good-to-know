const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const signInRouter = express.Router();

signInRouter.post('/', (req, res) => {
    const reqData = req.body

    console.log(reqData);


    return formatOutput(res, 200, "Authenticated", reqData);

})


module.exports = signInRouter