const { default: mongoose } = require("mongoose");
const User = require("../../schema/User");

async function findUser(userName) {
  try {
    return await User.findOne({ username: userName }).exec();
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

module.exports = { findUser };
