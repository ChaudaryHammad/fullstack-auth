const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const signup = async (req, res,next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);

  
  
  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({data:newUser,message:'user created successfully'});
  } catch (error) {
    next(error);
  }
};

module.exports = { signup };
