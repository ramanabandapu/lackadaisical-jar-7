const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json())


const {LoginModel} = require("../Models/User.model")

app.post("/signup", async (req, res) => {
    const payload = req.body;
    try{
        const user = new LoginModel(payload)
        await user.save()
        res.send("Sign up successfull")
    }
   catch(err){
        console.log(err)
        res.send("Something went wrong, pls try again later")
   }
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try{
      const user = await LoginModel.find({email, password})
      if(user.length > 0){
        const token = jwt.sign({"course":"nxm" }, 'hush');
        res.send({"msg":"Login successfull","token" : token})
      } 
      else{
        res.send("Login failed")
      }
    }
    catch{
        res.send("Something went wrong, please try again later")
    }
    res.send("work in progress")
})
