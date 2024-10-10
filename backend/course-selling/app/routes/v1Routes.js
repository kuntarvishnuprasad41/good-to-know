const express = require('express');
const { formatOutput } = require('../utils/normalizer');
const buyCourseRouter = require('./course/buyCourse');
const getCourseRouter = require('./course/getCourse');
const signInRouter = require('./auth/SignIn');
const signUpRouter = require('./auth/signup');
const v1Router = express.Router();


v1Router.get('/', (req, res) => {
    return formatOutput(res, 200, "Hello World")
})

v1Router.use('/courses/buy', buyCourseRouter)
v1Router.use('/courses/get', getCourseRouter)
v1Router.use('/auth/signin', signInRouter)
v1Router.use('/auth/signup', signUpRouter)




module.exports = v1Router;