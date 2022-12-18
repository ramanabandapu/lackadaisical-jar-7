const express = require("express")
const {bikeData} = require("../Controllers/bikes.controller")
const bikesRouter = express.Router()




bikesRouter.get("/bikes",bikeData)


module.exports={bikesRouter}