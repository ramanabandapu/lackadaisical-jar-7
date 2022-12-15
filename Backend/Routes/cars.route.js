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
const searchProduct = async (req, res) => {
    let { q } = req.query;
    try {
      let cars = await CarModel.find({ $search: { title: q } });
      console.log(q);
      res.send(cars);
    } catch (err) {
      res.send({ msg: "Something went wrong", error: err });
    }
  };


module.exports = {carsRouter}