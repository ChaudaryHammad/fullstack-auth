const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");

const jwt = require("jsonwebtoken");
const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ message: "please fill all the fields" });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res
      .status(201)
      .json({ data: newUser, message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(errorHandler(400, "please fill all the fields"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "invalid email or password"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, "wrong credentials"));
    }

    const token  = jwt.sign({
      id:validUser._id,

    },process.env.JWT_SECRET,{
      expiresIn:"1d"
    })

    const {password:hashedPassword,...rest} = validUser._doc
const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
    res.cookie("access_token",token,{
      httpOnly:true,
     expires:expiryDate

    }).status(200).json(rest)
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin };
