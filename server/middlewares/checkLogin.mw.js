const jwt=require("jsonwebtoken")
require("dotenv").config()
const jwtcheck=(req,res,next)=>{
    try{
        const token=req.cookies.token
        const decode=jwt.verify(token,process.env.JWT)
        req.email=decode.username
        req.usertype=decode.usertype
        next()

    }catch{
        next("token expired")
    }

}
module.exports=jwtcheck