const express = require('express');
const userAuth = require('../controller/userAuth')

const router = express.Router()



router.post('/register', userAuth.registerUser)


module.exports = router