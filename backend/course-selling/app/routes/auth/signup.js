const express = require('express');
const { formatOutput } = require('../../utils/normalizer');

const { userModel } = require('../../db/db');
const { validateSchema, userValidator } = require('../../middlewares/validators');

const { isUserExists } = require('../../db/user');
const { generatehash } = require('./hashManager');
const { generateToken } = require('./generateToken');

const signUpRouter = express.Router();

signUpRouter.post('/', validateSchema(userValidator), async (req, res) => {
    const { firstname, lastname, email, password } = req.body



    let isUserFound = await isUserExists(email)

    if (isUserFound) {
        return formatOutput(res, 403, "user Already exists", { firstname, lastname, email, password });
    } else {
        const hash = await generatehash(password);

        const user = new userModel({
            email: email,
            firstname: firstname,
            password: hash,
            lastname: lastname,
        })

        let result = await user.save();




        const token = generateToken(result);

        return formatOutput(res, 200, "User Registered successfully", { user: { firstname: user.firstname, lastname: user.lastname, email: user.email, _id: user._id, role: user.role }, token })


    }




})


module.exports = signUpRouter