const {CarModel} = require("../Models/Car.model")

const carsData = async (req,res) => {
    try{
        const data = await CarModel.find({})
        res.send(data)
    }
    catch(err){
        res.send({ msg: "Something went wrong while fetching Cars Data", error: err });
    }  
}

const searchProduct = async (req, res) => {
    let { q } = req.query;
    try {
    // ProductModel.createIndexes({ title: "text" });
      let products = await CarModel.find({ $search: { name: q } });
      console.log(q);
      res.send(products);
    } catch (err) {
      res.send({ msg: "Something went wrong", error: err });
    }
  };

module.exports = {carsData,searchProduct}


