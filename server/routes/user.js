const express = require('express');
const { updateUser } = require('../controller/user.js');
const verifyUser = require('../utils/verifyUser.js');
const router = express.Router();


router.post('/update/:id',verifyUser,updateUser)



module.exports = router;