const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usersModel = require('./models/usersSchema')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://:27017/test-register")

app.post('/register', (req, res) => {
    usersModel.create(req.body)
    .then((users) => {
        res.json(users)
    })
    .catch(err => console.log(err))
})


app.post('/login', (req, res) => {
    const {email, password} = req.body
    usersModel.findOne({email: email})
    .then((user) => {
        if (user) {
            if (user.password === password) {
                res.json('Success')
            } else {
                res.json('Password is incorrect')
            }
        } else {
            res.json('No record existed')
        }
    })
})

app.listen(3001, () => {
    try {
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
})