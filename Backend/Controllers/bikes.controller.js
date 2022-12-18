const {BikeModel} = require("../Models/Bike.model")

const bikeData = async (req,res) => {
    try{
        const data = await BikeModel.find({})
        res.send(data)
    }
    catch(err){
        res.send({ msg: "Something went wrong while fetching Cars Data", error: err });
    }  
}


module.exports = {bikeData,}