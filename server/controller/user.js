const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const router = express.Router();

//creating new user

router.post("/create-user", async (req, res, next) => {
  try {
    const userEmail = await User.findOne({ email: req.body.email });

    if (userEmail) {
      return next(new ErrorHandler(`User already exist`, 400));
    } else {
     const user = new User( {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
      res.send(user);
    }
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

module.exports = router;
