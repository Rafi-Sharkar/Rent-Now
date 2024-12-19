const property = require("../models/property.mod");

const searchProduct = async (req, res) => {
  console.log(req.query.location)
  console.log(req.query.type)

  let result = await property.find({
    "$or": [
      {
          location:{ $regex: req.query.type}
      },
      {
          type: { $regex: req.query.location }        
      }
    ],
  });
  res.send(result)
  };

module.exports = searchProduct
