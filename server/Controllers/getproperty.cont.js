const property=require("../models/property.mod")
const getproperty=async(req,res)=>{
    try{
        const properties = await property.find({"owner_id":req.params.uid})
        res.json({
            "request":"Accepted",
            'data':properties
        })
    }catch(e){
        res.json({"error":e.message})
    }

}
module.exports=getproperty