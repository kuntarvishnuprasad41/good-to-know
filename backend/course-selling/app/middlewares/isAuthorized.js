const { formatOutput } = require("../utils/normalizer");
const jwt = require('jsonwebtoken');

async function isAuthorized(req, res, next) {



    if (req.headers.authorization) {
        try {
            const decoded = jwt.verify(req.headers.authorization, process.env.JWT_PASS);
            if (decoded.user.email) {
                return next()
            }

        } catch (error) {
            return formatOutput(res, 401, "Unauthorized User", [], 'TIEL')
        }
    }


    return formatOutput(res, 401, "Unauthorized User", [], 'OEL')

}

module.exports = { isAuthorized }