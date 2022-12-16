const mongoose = require("mongoose")

const mobileSchema = mongoose.Schema({
            name: String,
            price:Number,
            brand:String,
            location:String,
            description:String,
            image:String,
            img1:String
})

const MobileModel = mongoose.model("mobile", mobileSchema)

module.exports = {
    MobileModel
}