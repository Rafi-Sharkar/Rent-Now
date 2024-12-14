const property=require("../models/property.mod")
const findProperty=async(req,res)=>{
try{
    // const properties= await user.find({owner_email:req.params.owner_email})
    const result = await property.find({owner_email:req.params.owner_email})
    res.json({result})
}catch(e){
    res.json({"error":e.message})
}
}
module.exports=findProperty