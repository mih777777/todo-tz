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
    
    <body>
        <h1><a href="https://arcane-escarpment-21028.herokuapp.com/api/todos">ToDos</a></h1>
    </body>
    
    
    `)
})

app.use('/api/todos', ToDoRouter)


module.exports = app