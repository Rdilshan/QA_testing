const express = require('express');
const userController = require('../controllers/usercontroller');

const router = express.Router();

router.post('/create', userController.create);

module.exports = router;
