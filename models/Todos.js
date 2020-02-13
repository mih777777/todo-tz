const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({

    title: String,
    text: String

})


module.exports = mongoose.model('todos', todoSchema)