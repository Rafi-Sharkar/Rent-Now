const user=require("../models/user.mod")

const profile=async(req,res)=>{
try{
     const validuser = await user.findOne({"email":req.params.email})
      if(validuser===null){
        res.json({"requset":"bad request"})
     }else{
        res.json({"requset":"Accepted",
            "data":{
                "name":validuser.name,
                "email":validuser.email,
                "usertype":validuser.usertype,
                "phone":validuser.phone,
                "permanent_address":validuser.permanent_address,
                "current_address":validuser.current_address,
                "profession":validuser.profession,
                "institution":validuser.Institution,
                "rate":validuser.rate
            }
        })
     }
}catch(e){
    res.json({"error":e.message})
}
}
module.exports=profile