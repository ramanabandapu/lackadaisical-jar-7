const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
     number : Number,
     password : String,
   
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}