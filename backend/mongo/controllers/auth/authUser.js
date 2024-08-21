const jwt = require("jsonwebtoken");

const jwtPass =
  "KUIOY&#(*Ryhfkajshd()_*#_+Q$*IOPKASHNFk,jmasdfkjh(PAW&*ER)(Q#PHJINCSAlk";
const generateToken = (user) => {
  return jwt.sign({ user }, jwtPass);
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isVerified = jwt.verify(token, jwtPass);

    if (isVerified) {
      return next();
    } else return res.status(403).json({ message: "UnAuthorized acces" });
  } catch (error) {
    return res.status(403).json({ message: "UnAuthorized acces" });
  }
};
module.exports = { generateToken, verifyToken };
