const express = require('express');
const { updateUser,deleteUser } = require('../controller/user.js');
const verifyUser = require('../utils/verifyUser.js');
const router = express.Router();


router.post('/update/:id',verifyUser,updateUser)
router.delete('/delete/:id',verifyUser,deleteUser)





module.exports = router;