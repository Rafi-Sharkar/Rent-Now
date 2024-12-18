const user  =require("../models/user.mod")
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const login=async(req,res)=>{
 try{
   const validuser=await user.findOne({email:req.body.email})
   if(validuser===null){
      res.json({
         "request":"not valid user"
      })
   }
   else{
         const passwordvalid= await bcrypt.compare(req.body.pass,validuser.password)
         if(passwordvalid){ 
            
            const payload={
               email: validuser.email,
               usertype: validuser.usertype
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'4hr'})
            res.cookie("token",token)                        
               .json({
                  "request":"Accepted",
                  "data":{
                    "email":validuser.email,
                    "name":validuser.name,
                    "usertype":validuser.usertype,
                    "uid": validuser._id
                }
            })
         }
         else{
            res.json({"request":"Not athurizrd"})
         }
   }
 }catch(e){
    res.json({"error": e.message})
 }
}
module.exports=login