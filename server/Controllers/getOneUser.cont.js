const users = require('../models/user.mod')

const getOneUser=async(req, res)=>{
    try {
        const user = await users.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.json({
            "error": err.message
        })
    }
}

module.exports = getOneUser