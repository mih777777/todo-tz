const express = require('express')
const controller = require('../controllers/todoController')
const router = express.Router()

router.get('/', controller.getAllTodos)
router.post('/create', controller.create)


module.exports = router