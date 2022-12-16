const express = require("express")
const {carsData, searchProduct} = require("../Controllers/cars.controller")

const carsRouter = express.Router()

carsRouter.get("/cars",carsData)
carsRouter.get("/search",searchProduct)





module.exports = {carsRouter}