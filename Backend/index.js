
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//routes
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');
const productRoute = require('./routes/productRoute');


app.use('/user', userRoutes); 
app.use('/admin', adminRoutes); 
app.use('/product', productRoute); 

