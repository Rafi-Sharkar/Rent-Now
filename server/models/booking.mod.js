const mongoose = require("mongoose")
const bookingSchema=mongoose.Schema({
    renter_id:{
        // type:String,
        // required: true
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    product_id:{
        // type: String,
        // required: true
        type: mongoose.Types.ObjectId,
        ref: "properties"
    },
    owner_id:{
        // type: String,
        // required: true
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    booking_date: {
        type: Number,
        required: true
    },
    booking_expired: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    }
})

const booking=new mongoose.model("bookings", bookingSchema)

module.exports = booking