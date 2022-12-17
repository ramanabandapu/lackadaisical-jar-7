const express = require("express")
const {MixModel} = require("../Models/mixdata.model")
const mixRouter = express.Router()

mixRouter.get("/mixdatas",async(req,res) =>{
    try{
        const mix = await MixModel.find({})
        res.send(mix)
    }
    catch(err){
      console.log(err)
    }
})


module.exports={mixRouter}