const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({
     name:String,
    price:String,
 distance:String,
 location:String,
    brand:String,
    model:String,
     year:String,
km_driven:String,
    image:String,
     img1:String,
     img2:String
})

const BikeModel = mongoose.model("bike", bikeSchema)

module.exports = {
    BikeModel
}