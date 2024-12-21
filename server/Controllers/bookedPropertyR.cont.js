const booking = require("../models/booking.mod")

const bookedPropertyR=async(req, res)=>{
    try {
        const result = await booking.find({ renter_id: req.params.id})
                                    .populate("product_id")
        res.json(result)


    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports = bookedPropertyR