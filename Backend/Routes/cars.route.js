const express = require("express")
const {CarModel} = require("../Models/Car.model")
const carsRouter = express.Router()

carsRouter.get("/cars",async(req,res) =>{
    try{
        const car = await CarModel.find({})
        // console.log(res.send(car));
        res.send(car)
    }
    catch(err){
        res.send({msg:"Somthing Wrong",error:err})
    }
    
   
})

module.exports = {carsRouter}