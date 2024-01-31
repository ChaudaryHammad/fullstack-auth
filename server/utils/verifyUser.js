const jwt = require("jsonwebtoken");
const User = require("../model/user");


const verifyUser = async (req, res, next) => {

    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(401).json({message:"Token is not valid"});
        }
        req.user = user;
        next();
    });

};

module.exports = verifyUser;