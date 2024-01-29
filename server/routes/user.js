const express = require('express');
const { test } = require('../controller/user.js');
const router = express.Router();

router.get('/',test); 



module.exports = router;