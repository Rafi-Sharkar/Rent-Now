const property =require("../models/property.mod")
const add = async(req,res)=>{
    try{      
        const newproperty=new property({
            pid: `${Math.round(Date.now()/1000)}`,
            location:req.body.location,
            type: req.body.type,
            owner_email: req.body.owner_email,
            farea:req.body.farea,
            price: req.body.price,
            details: req.body.details,
            rate: 0,
            available: true
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