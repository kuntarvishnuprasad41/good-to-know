const bcrypt = require("bcrypt");
const { findUser } = require("../user/findUser");
const User = require("../../schema/User");
const { generateToken } = require("./authUser");
const generateHash = require("../utils/generateHash");

const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let userExists = await findUser(username);

    if (userExists) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    const hash = await generateHash(password);

    const user = new User({
      username,
      password: hash,
    });

    let userAdded = await user.save();

    let token = generateToken(user);

    return res.status(200).json({ userAdded, token: token });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = addUser;
