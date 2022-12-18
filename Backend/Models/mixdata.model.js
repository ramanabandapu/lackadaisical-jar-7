const mongoose = require("mongoose")

const mixSchema = mongoose.Schema({
            name: String,
            price:String,
            brand:String,
            location:String,
            description:String,
            image:String,
            img1:String,
            title: String,
            distance:String,
            postive_date:String,
            owner:String,
            img2:String,
            model:String,
             year:String,
        km_driven:String

})

const MixModel = mongoose.model("mixdata", mixSchema)

module.exports = {
    MixModel
}