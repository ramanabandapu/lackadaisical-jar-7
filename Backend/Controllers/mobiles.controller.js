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

// For Post request

const MobileData = async(req,res)=>{
const { name,price,brand,location,description,image,img1} = req.body;
const data = new MobileModel({ name,price,brand,location,description,image,img1})
console.log(data)
try{
  await data.save()
 res.send({ backend_sever_say: "Bike Data added successfully"})
}
catch(err){
  res.send({ msg: "Something went wrong while adding product", error: err });
}
}

module.exports = {mobileData,MobileData}