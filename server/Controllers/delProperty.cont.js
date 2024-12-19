const property = require('../models/property.mod')

const delProperty=async(req, res)=>{
    console.log(req.params.id)
    try {
        const itemId = req.params.id;
        await property.findByIdAndDelete(itemId);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the item' });
    }
}

module.exports = delProperty