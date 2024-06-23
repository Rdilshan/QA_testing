const express = require('express');
const admincontroller  = require("../controllers/admincontroller")
const router = express.Router();

router.post('/create', admincontroller.register);
router.post('/login', admincontroller.login);


module.exports = router;
