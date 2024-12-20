const property = require("../models/property.mod")

const availabilityUp=async(req, res)=>{
    try {
        const updateAvailable = await property.findByIdAndUpdate(req.params.id, {$set:{available: req.body.New_available}})
    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports=availabilityUp