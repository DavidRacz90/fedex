const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/user.controller');

router.get('/', usercontroller.userController);

module.exports = router;
