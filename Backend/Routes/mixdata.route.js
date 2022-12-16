const express = require("express")
const {mixData} = require("../Controllers/mix.controller")
const mixRouter = express.Router()

mixRouter.get("/mixdatas",mixData)

module.exports={mixRouter}