const {MobileModel} = require("../Models/Mobile.model")

const mobileData = async (req,res) => {
    try{
        const data = await MobileModel.find({})
        res.send(data)
    }
    catch(err){
        res.send({ msg: "Something went wrong while fetching Cars Data", error: err });
    }  
}

module.exports = {mobileData}