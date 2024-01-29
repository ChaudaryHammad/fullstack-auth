const express = require('express');
const app = express();
require('dotenv').config({
    path:'./config/.env'
})


const userRoute = require('./routes/user');
const connectDB = require('./database/connection.js');
//connect to DB
connectDB()



//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



//api routes
app.use('/api/user',userRoute);






//server
app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${process.env.PORT}`);
    });




