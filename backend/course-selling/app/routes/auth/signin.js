const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db');
const { validateSchema, loginValidator } = require('../../middlewares/validators');
const { isUserExists } = require('../../db/user');
const { compareHash } = require('./hashManager');
const { generateToken } = require('./generateToken');

const signInRouter = express.Router();

signInRouter.post('/', validateSchema(loginValidator), async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await isUserExists(email);

        if (user) {



            const isValidPassword = await compareHash(password, user.password);


            if (isValidPassword) {
                const token = generateToken(user);
                return formatOutput(res, 200, "Logged In successfully", {
                    user, token
                })
            } return formatOutput(res, 401, "Invalid password")

        } return formatOutput(res, 404, "No User found")


    } catch (error) {
        console.log(error);

        return formatOutput(res, 520, "Unknown error occured @- SIN", {}, error)
    }





})


module.exports = signInRouter