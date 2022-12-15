const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
     name:String,
     title: String,
     price: Number,
     distance:String,
     location:String,
     postive_date:String,
     owner:String,
     image:String,
     img1:String,
     img2:String,
     img3:String
})

const CarModel = mongoose.model("cars", carSchema)

module.exports = {
    CarModel
}