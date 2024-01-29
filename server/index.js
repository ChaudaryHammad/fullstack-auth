const express = require('express');
const app = express();
require('dotenv').config({
    path:'./config/.env'
})

const connectDB = require('./database/connection');



//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//connect to DB
connectDB()

//routes






app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    });




