const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const connectDB = require("./database/connection.js");

// Connect to DB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, "./client/dist")));

// API routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// Wildcard route for serving React app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Custom middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
