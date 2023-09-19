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
  }else{

  //create user
  const user = await User.create({ username, email, password })
    .then(() => {
      res.status(201).json({
        message: "user added successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
}
}
//   if(user) {
//       res.status(201).json({
//           _id: user.id,
//           username: user.username,
//           email:user.email
//       })
//   }else{
//       res.status(400)
//   }


//login user
module.exports.loginUser = async(req, res)=>{
  const {email, password} = req.body
  try{
  const userFind = await User.findOne({email, password})

  if(!userFind){
    res.status(400).json({
      message: "login not successfull",
      error: "user not found"
    }) 
  }else{
    res.status(200).json({
      message: 'Login successfull',
      
    })
  }
  }
catch(error){
  res.status(400).json({
    message:"error while login",
    error: error.message
  })
}
}