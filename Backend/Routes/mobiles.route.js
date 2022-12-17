const express = require("express")
const {mobileData} = require("../Controllers/mobiles.controller")
const mobileRouter = express.Router()


mobileRouter.get("/mobiles",mobileData)
module.exports={mobileRouter}