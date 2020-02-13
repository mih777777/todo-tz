const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const ToDoRouter = require('./routes/todo')

const app = express()

mongoose.connect('mongodb://mih777:mih777@ds151416.mlab.com:51416/server-tren', 
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
  )
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))  

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/' ,(req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <a href="http://localhost:3000/api/todos/">ToDos</a>
    </body>
    </html>
    
    `)
})

app.use('/api/todos', ToDoRouter)


module.exports = app