const {MixModel} = require("../Models/mixdata.model")

const mixData = async (req,res) => {
    try{
        const data = await MixModel.find({})
        res.send(data)
    }
    catch(err){
        res.send({ msg: "Something went wrong while fetching Cars Data", error: err });
    }  
}

module.exports = {mixData}