const user = require('../models/user.mod')

const allUser=async(req, res)=>{
    try {
        const result = await user.find()
        res.json({"data":result})
    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports = allUser