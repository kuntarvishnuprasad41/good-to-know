const jwt = require("jsonwebtoken");

const jwtPass =
  "KUIOY&#(*Ryhfkajshd()_*#_+Q$*IOPKASHNFk,jmasdfkjh(PAW&*ER)(Q#PHJINCSAlk";
const generateToken = (user) => {
  return jwt.sign({ user }, jwtPass);
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtPass);
};
module.exports = { generateToken, verifyToken };
