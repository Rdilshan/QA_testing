const express = require('express');
const userController = require('../controllers/usercontroller');
const userverifyToken = require("../middlware/userlogincheck");

const router = express.Router();

router.post('/create', userController.create);
router.post('/register', userController.registation);
router.post('/login', userController.login);


router.get('/get',userverifyToken, userController.loginuserdetails);
router.post('/update',userverifyToken, userController.updateuser);




module.exports = router;
