const express = require("express")
const {MobileModel} = require("../Models/Mobile.model")
const mobileRouter = express.Router()

mobileRouter.get("/mobiles",async(req,res) =>{
    try{
        const mobile = await  MobileModel.find({})
        res.send(mobile)
     }
    catch(err){
        res.send({msg:"Somthing Wrong",error:err})
    }
})

module.exports={mobileRouter}