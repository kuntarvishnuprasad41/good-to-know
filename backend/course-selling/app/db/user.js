const { default: mongoose } = require("mongoose");

const { userModel } = require('../db/db')

async function isUserExists(username) {
    try {
        return await userModel.findOne({ email: username }).exec()
    } catch (error) {
        return []
    }

}


module.exports = { isUserExists }