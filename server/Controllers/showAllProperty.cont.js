const property = require("../models/property.mod")

const showAll = async(req, res)=>{
    const result = await property.find()
    res.json({"data":result})
}

module.exports = showAll