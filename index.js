const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const connectDB = require("./database/connection.js");
const cors = require('cors');
//connect to DB
connectDB();


//middlewars

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/dist")))



//api routes
app.use("/user", userRoute);
app.use("/auth", authRoute);



//custome middlewares
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode});
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"), (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send(err);
    }
  });
});

//server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});