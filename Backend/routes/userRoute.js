const express = require('express');
const userController = require('../controllers/usercontroller');

const router = express.Router();

router.post('/create', userController.create);
router.post('/register', userController.registation);
router.post('/login', userController.login);



module.exports = router;
