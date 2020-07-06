var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users');

router.post('/signup', UserController.addUser);
router.post('/login', UserController.loginUser);

module.exports = router;