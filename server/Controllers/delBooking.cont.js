const booking = require("../models/booking.mod")

const delbooking=async(req, res)=>{
    try {
        const itemId = req.params.id;
        await booking.findByIdAndDelete(itemId);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the item' });
    }
    
}

module.exports = delbooking