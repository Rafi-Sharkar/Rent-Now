const booking = require("../models/booking.mod")

const addBooking=async(req,res)=>{
    try {
        const newBooking = new booking({
            renter_id: req.body.renter_id,
            product_id: req.body.product_id,
            owner_id: req.body.owner_id,
            booking_date: req.body.booking_date,
            booking_expired: req.body.booking_expired,
            total_amount: req.body.total_amount
        })
        await newBooking.save()
        res.json({
            "request":"Accepted"
        })
    } catch (err) {
        res.json({"error":e.message})
    }
}

module.exports = addBooking

