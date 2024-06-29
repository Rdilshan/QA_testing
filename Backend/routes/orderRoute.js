const express = require('express');
const userverifyToken = require("../middlware/userlogincheck");
const ordercontroller = require("../controllers/ordercontroller")
const verifyToken = require("../middlware/adminchecking");



const router = express.Router();


router.post('/create',userverifyToken, ordercontroller.orderplace);
router.get('/get',userverifyToken, ordercontroller.addtocartlistget);
router.get('/count',userverifyToken, ordercontroller.countorder);
router.post('/update',userverifyToken, ordercontroller.updateCartQty);
router.post('/delete',userverifyToken, ordercontroller.deleteOrder);

router.post('/place',userverifyToken, ordercontroller.orderpaymentdon);
router.get('/placeitem',userverifyToken, ordercontroller.paymentdone);
router.get('/adminplaceitem',verifyToken, ordercontroller.paymentdoneadmin);
router.post('/updateorderstaus',verifyToken, ordercontroller.updateorderstaus);


router.get('/get/:id',ordercontroller.getoneorder);


module.exports = router;
