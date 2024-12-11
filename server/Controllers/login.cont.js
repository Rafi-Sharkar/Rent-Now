const user  =require("../models/user.mod")
const bcrypt =require("bcrypt")
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
            
            res.json({
               "request":"Accepted",
               "data":{
                    "email":validuser.email,
                    "name":validuser.name,
                    "usertype":validuser.usertype
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