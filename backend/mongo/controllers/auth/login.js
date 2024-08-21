const { findUser } = require("../user/findUser");
const { compareHash } = require("../utils/generateHash");
const { generateToken } = require("./authUser");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await findUser(username);

    if (!user) {
      res.status(404).send({ message: "User Not found" });
    } else {
      const isValidPassword = await compareHash(password, user.password);
      if (!isValidPassword) {
        return res.status(401).send({ message: "Invalid Password" });
      }
      const token = generateToken(user);

      return res.status(200).send({ user: user, token: token });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = login;
