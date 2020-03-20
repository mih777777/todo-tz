const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({

    title: {
        type: String,
        required: 'Enter a name of todo'
    },    
    description: {
        type: String,
        required: 'Enter a description of todo'
    },
    importance: {
        type: String,
        required: 'Enter a impotance of todo'
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('todos', todoSchema)