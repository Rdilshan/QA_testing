const express = require('express');
const ordercontroller  = require("../controllers/ordercontroller")
const router = express.Router();
const verifyToken = require("../middlware/adminchecking");



router.get('/getall',verifyToken, ordercontroller.getAllOrders);


module.exports = router;
