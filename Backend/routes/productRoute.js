const express = require('express');
const productcontroller  = require("../controllers/productcontroller")
const router = express.Router();
const verifyToken = require("../middlware/adminchecking");




router.get('/getall',verifyToken, productcontroller.getAllOrders);
router.post('/save',verifyToken, productcontroller.saveNewData);



module.exports = router;
