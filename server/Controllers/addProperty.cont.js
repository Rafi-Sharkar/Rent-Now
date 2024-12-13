const property =require("../models/property.mod")
const add = async(req,res)=>{
    try{      
        const newproperty=new property({
            location:req.body.location,
            farea:req.body.farea,
            price: req.body.price,
            details: req.body.details
        })
        await newproperty.save()
        console.log("product added")
    res.json({
        "request":"Accepted"
    })

}catch(e){
    res.json({"error": e.message})
}
}
module.exports=add