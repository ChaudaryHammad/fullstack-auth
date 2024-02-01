const bcryptjs = require("bcryptjs");
const User = require("../model/user");
const errorHandler = require("../utils/error");
const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password: hashedPassword, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
    
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUser };
