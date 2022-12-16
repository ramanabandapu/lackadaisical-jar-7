const CarModel = require("../Models/Car.model")

const carsData = async(req,res) => {
    const data = await CarModel.find()
    res.send(data)
}

module.exports = {carsData}


