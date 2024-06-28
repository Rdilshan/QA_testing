const express = require('express');
const productcontroller  = require("../controllers/productcontroller")
const router = express.Router();
const verifyToken = require("../middlware/adminchecking");
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
    },
  });
  
  const upload = multer({ storage: storage });



router.get('/getall',verifyToken, productcontroller.getAllOrders);
router.post('/save',verifyToken,upload.array('images', 10), productcontroller.saveNewData);
router.get('/getproducts',verifyToken, productcontroller.getAllproducts);


router.get('/get/:id',productcontroller.getoneproduct);

router.get('/products', productcontroller.getAllproducts);




module.exports = router;
