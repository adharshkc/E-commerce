const express = require("express");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

module.exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    res.send("user already exist");
    throw new Error('user already exist')
  }

  //create user
  const user = await User.create({ username, email, password })
    // .then(() => {
    //   res.status(201).json({
    //     message: "user added successfully",
    //   });
    // })
    // .catch((error) => {
    //   res.status(500).json({
    //     error: error,
    //   });
    // });
  if(user) {
      res.status(201).json({
          _id: user.id,
          username: user.username,
          email:user.email
      })
  }else{
      res.status(400)
  }
};
