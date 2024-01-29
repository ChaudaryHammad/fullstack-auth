const express = require("express");
const app = express();
require("dotenv").config({
  path: "./config/.env",
});

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const connectDB = require("./database/connection.js");
//connect to DB
connectDB();

//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//api routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);



//custome middlewares
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode});
})


//server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
