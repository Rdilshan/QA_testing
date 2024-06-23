
const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//routes
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');


app.use('/user', userRoutes); 
app.use('/admin', adminRoutes); 
