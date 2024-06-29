const express = require('express');
const userverifyToken = require("../middlware/userlogincheck");
const ordercontroller = require("../controllers/ordercontroller")

const router = express.Router();


router.post('/create',userverifyToken, ordercontroller.orderplace);
router.get('/get',userverifyToken, ordercontroller.addtocartlistget);
router.get('/count',userverifyToken, ordercontroller.countorder);
router.post('/update',userverifyToken, ordercontroller.updateCartQty);
router.post('/delete',userverifyToken, ordercontroller.deleteOrder);

router.post('/place',userverifyToken, ordercontroller.orderpaymentdon);




module.exports = router;
