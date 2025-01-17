const express = require("express");
const { formatOutput } = require("../../utils/normalizer");

const buyCourseRouter = express.Router();

buyCourseRouter.post("/", (req, res) => {
    const reqData = req.body;

    return formatOutput(res, 200, "Success", reqData);
});

module.exports = buyCourseRouter;
