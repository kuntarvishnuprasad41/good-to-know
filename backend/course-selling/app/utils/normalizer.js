
const formatOutput = (res, resCode, message, data = [], error = null) => {
    res.status(resCode).json({

        status: resCode < 400 ? "success" : "error",
        message: message,
        data,
        ...(error != null && { error }),
        timestamp: new Date().toISOString(),
    });
};


module.exports = { formatOutput };
