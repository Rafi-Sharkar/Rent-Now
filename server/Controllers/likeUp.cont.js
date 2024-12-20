const property = require('../models/property.mod')

const likeUp=async(req, res)=>{
    try {
        const updateLike = await property.findByIdAndUpdate(req.params.id, {$set:{rate: req.body.new_Rate}})
    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports=likeUp