const express = require("express")
const {CarModel} = require("../Models/Car.model")
const carsRouter = express.Router()

carsRouter.get("/cars",async(req,res) =>{
    const car = await CarModel.find()
    console.log(res.send(car));
    res.send(car)
   
})

module.exports = {carsRouter}