const user =require("../models/user.mod")
const bcrypt= require("bcrypt")
const sign = async(req,res)=>{
try{
    const validuser=await user.findOne({email:req.body.email})
    if(validuser===null){
       
            const hashedpassword=await bcrypt.hash(req.body.pass,10)
            const newuser=new user({
                name:req.body.name,
                email:req.body.email,
                password:hashedpassword,
                usertype:req.body.usertype,
                phone:req.body.phone,
                permanent_address:req.body.perloc
            })
            await newuser.save()
            res.json({
                "request":"Accepted",
                "data":{
                    "email":req.body.eamil,
                    "name":req.body.name,
                    "usertype":req.body.usertype
                }
            })
    }
    else{
        res.json({
            "request":"User already exit"
        })
    }
}catch(e){
    res.json({"error": e.message})
}
}
module.exports=sign