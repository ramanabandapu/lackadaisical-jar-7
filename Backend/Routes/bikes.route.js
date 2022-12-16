const express = require("express")
const {BikeModel} = require("../Models/Bike.model")
const bikesRouter = express.Router()

bikesRouter.get("/bikes",async(req,res) =>{
    try{
        const bikedata = await  BikeModel.find({})
        res.send(bikedata)
     }
    catch(err){
        res.send({msg:"Somthing Wrong",error:err})
    }
})

module.exports={bikesRouter}