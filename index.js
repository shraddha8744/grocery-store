const express = require('express');
const app = express();
require('dotenv').config();
const config = require('./helper/config');
const uploadImageRoute = require('./routes/uploadImageRoute');
const userRouter = require('./routes/userRoute');
const productRoute = require('./routes/productsRoute');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use the upload image route
app.use('/api', uploadImageRoute);
app.use('/user', userRouter);
app.use("/product",productRoute)



app.listen(config.port, (err) => {
    if (!err) {
        console.log('Server started on port', config.port);
    } else {
        console.error('Error starting server:', err);
    }
});
