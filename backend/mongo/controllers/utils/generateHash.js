const bcrypt = require("bcrypt");
const generateHash = (password) => {
  const hash = new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });

  return hash;
};

const compareHash = (password, hash) => {
  const compare = new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  return compare;
};

module.exports = { generateHash, compareHash };
