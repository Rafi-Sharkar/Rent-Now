const booking = require("../models/booking.mod")

const bookedPropertyO=async(req, res)=>{
    try {
        const result = await booking.find({ owner_id: req.params.id})
                                    .populate("renter_id", "name -_id")
                                    .populate("product_id","location pid -_id")
                                    .populate("owner_id", "name -_id")
        res.json(result)


    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports = bookedPropertyO