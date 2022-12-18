const express = require("express")
const {mobileData,MobileData} = require("../Controllers/mobiles.controller")
const mobileRouter = express.Router()


mobileRouter.get("/mobiles",mobileData)
mobileRouter.post("/mobiles",MobileData)
module.exports={mobileRouter}