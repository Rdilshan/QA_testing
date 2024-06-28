const express = require('express');
const userverifyToken = require("../middlware/userlogincheck");
const ordercontroller = require("../controllers/ordercontroller")

const router = express.Router();


router.post('/create',userverifyToken, ordercontroller.orderplace);

module.exports = router;
