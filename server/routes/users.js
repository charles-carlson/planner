var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users');

router.post('/signup', UserController.addUser);
router.post('/login', UserController.loginUser);
router.get('/getUser',UserController.getUser);
router.get('/logout',UserController.logout);
module.exports = router;