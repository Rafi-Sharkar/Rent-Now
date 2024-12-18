const property=require("../models/property.mod")
const findProperty=async(req,res)=>{
try{
    const result = await property.find({email:req.params.email})
    res.json({result})
}catch(e){
    res.json({"error":e.message})
}
}
module.exports=findProperty