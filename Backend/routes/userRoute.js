const express = require('express');
const userController = require('../controllers/usercontroller');
const userverifyToken = require("../middlware/userlogincheck");

const router = express.Router();

router.post('/create', userController.create);
router.post('/register', userController.registation);
router.post('/login', userController.login);


router.get('/get',userverifyToken, userController.loginuserdetails);
router.post('/update',userverifyToken, userController.updateuser);
router.post('/whishlistadd',userverifyToken, userController.whishlistadd);
router.post('/whishlistdelete',userverifyToken, userController.whishlistdelete);
router.get('/whishlistget',userverifyToken, userController.whishlistget);





module.exports = router;
