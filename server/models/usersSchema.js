const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const usersModel = mongoose.model('user', schema)
module.exports = usersModel