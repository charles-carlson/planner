var express = require('express');
var router = express.Router();
const TodoController = require('../controllers/todo');

router.post('/addTodo',TodoController.addTodo)

module.exports = router;