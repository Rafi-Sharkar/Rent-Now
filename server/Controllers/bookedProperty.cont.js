const booking = require("../models/booking.mod")

const bookedProperty=async(req, res)=>{
    try {
        const result = await booking.find()
        res.json(result)
    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports = bookedProperty