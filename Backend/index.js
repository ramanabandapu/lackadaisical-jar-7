const express = require("express")
const cors = require("cors")

const {connection} = require("./config/db")
const { carsRouter } = require("./Routes/cars.route")
const { bikesRouter } = require("./Routes/bikes.route")
const { mobileRouter } = require("./Routes/mobiles.route")
const { mixRouter } = require("./Routes/mixdata.route")
const app = express()


app.use(express.json())

app.use(cors({
    origin:"*"
}))




app.get("/", (req, res) => {
    res.send(`msg:Welcome To Dashboard`)
})

  app.use("/",carsRouter)
  app.use("/",bikesRouter)
  app.use("/",mobileRouter)
  app.use("/",mixRouter)




app.listen(6050, async () => {
    try{
        await connection;
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("Listening on PORT 6050")
})