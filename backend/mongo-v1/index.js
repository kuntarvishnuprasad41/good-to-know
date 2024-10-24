const express = require('express');
const { UserModel } = require('./db');
const { default: mongoose } = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken')

const jwtpass = '12312321321321321sdfdsfsf'


app.use(express.json())


mongoose.connect(
    "mongodb://localhost:27017/v1"
);

app.post('/signup', async (req, res) => {

    const { name, email, password } = req.body

    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    return res.json({
        message: 'SignUp Successfull'
    })
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({
        email: email,
        password: password
    })


    if (user) {



        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, jwtpass)

        return res.json({
            token
        })

    } else {
        return res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

})


app.post('/todo', (req, res) => { })

app.get('/todos', (req, res) => { })


app.listen(3000)