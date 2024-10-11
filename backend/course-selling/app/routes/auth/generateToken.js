const jwt = require('jsonwebtoken');
const { formatOutput } = require('../../utils/normalizer');

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_PASS);
}

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const isVerified = jwt.verify(token, process.env.JWT_PASS)

        if (!isVerified) {
            return formatOutput(res, 403, "UnAuthorized access ")
        }
        return next()

    } catch (error) {
        return formatOutput(res, 520, "Unknown error occured @- VT", _, error)
    }
}

module.exports = {
    generateToken,
    verifyToken
}