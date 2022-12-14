const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const {UserModel} = require("../Models/User.model")
const loginRouter = express.Router();

loginRouter.post("/signup", async (req, res) => {
  console.log(req.body)
  const {number, password} = req.body;
  const userPresent = await UserModel.findOne({number})
  if(userPresent?.number){
      res.send("Try loggin in, already exist")
  }
  else{
      try{
          bcrypt.hash(password, 4, async function(err, hash) {
              const user = new UserModel({number,password:hash})
              await user.save()
              res.send("Sign up successfull")
          });
         
      }
     catch(err){
          console.log(err)
          res.send("Something went wrong, pls try again later")
     }
  }
  
})

loginRouter.post("/login", async (req, res) => {
  const {number, password} = req.body;
  try{
      const user = await UserModel.find({number})
       
    if(user.length > 0){
      const hashed_password = user[0].password;
      bcrypt.compare(password, hashed_password, function(err, result) {
          if(result){
              const token = jwt.sign({"userID":user[0]._id}, 'hush');
              res.send({"msg":"Login successfull","token" : token})
          }
          else{
              res.send("Login failed")
          }
    })} 
    else{
      res.send("Login failed")
    }
  }
  catch{
      res.send("Something went wrong, please try again later")
  }
})