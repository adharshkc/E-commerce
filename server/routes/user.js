const express = require('express');
const userAuth = require('../controller/userAuth')

const router = express.Router()



router.post('/register', userAuth.registerUser)
router.post('/login', userAuth.loginUser)


module.exports = router