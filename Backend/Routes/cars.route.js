const express = require("express")
const { carsData } = require("../Controllers/cars.controller")

const carsRouter = express.Router()


carsRouter.get("/", carsData)



// const searchProduct = async (req, res) => {
//     let { q } = req.query;
//     try {
//       let cars = await CarModel.find({ $search: { title: q } });
//       console.log(q);
//       res.send(cars);
//     } catch (err) {
//       res.send({ msg: "Something went wrong", error: err });
//     }
//   };


module.exports = {carsRouter}