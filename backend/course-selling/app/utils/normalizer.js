
const formatOutput = (res, resCode, message, data = [], error = null) => {
    res.status(resCode).json({

        message: resCode < 400 ? "success" : "error",
        data,
        error,
        timestamp: new Date().toISOString(),
    });
};


module.exports = { formatOutput };
