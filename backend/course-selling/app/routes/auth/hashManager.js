const bcrypt = require("bcrypt");
const { reject } = require("bcrypt/promises");

const generatehash = (password) => {
    const hash = new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, HASH) => {
            if (err) {
                reject(err);
            } else {
                resolve(HASH);
            }
        })
    })

    return hash;
}

const compareHash = (password, hash) => {
    const compare = new Promise((resolve, reject) => {
        bcrypt.compare(password, 10, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });

    return compare;
};

module.exports = { generatehash, compareHash }