const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    res.send("Please login");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.secret_key);
      req.body.userId = decoded.id;
      next();
    } catch (err) {
      res.status(500).send("Please login first to add product" )
    }


  }
};

module.exports = authentication;
