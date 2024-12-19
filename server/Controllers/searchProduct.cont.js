const property = require("../models/property.mod");

const searchProduct = async (req, res) => {
  let result = await property.find({
    "$or": [
      {
          type:{ $regex: req.query.type}
      }
    ],
  });
  res.send(result)  
};

module.exports = searchProduct
