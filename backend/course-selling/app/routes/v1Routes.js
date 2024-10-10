const express = require('express');
const { formatOutput } = require('../utils/normalizer');
const buyCourseRouter = require('./course/buyCourse');
const getCourseRouter = require('./course/getCourse');
const v1Router = express.Router();


v1Router.get('/', (req, res) => {
    return formatOutput(res, 200, "Hello World")
})

v1Router.use('/buy', buyCourseRouter)
v1Router.use('/get', getCourseRouter)




module.exports = v1Router;