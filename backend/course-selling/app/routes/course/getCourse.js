const { formatOutput } = require("../../utils/normalizer")

const express = require('express')
const getCourseRouter = express.Router()


getCourseRouter.get('/', (req, res) => {
    return formatOutput(res, 200, "Got Courses")
})

module.exports = getCourseRouter