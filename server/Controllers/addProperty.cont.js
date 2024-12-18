const property =require("../models/property.mod")
const add = async(req,res)=>{
    try{      
        const newproperty=new property({
            file: {
                path:req.file.path,
                filename:req.file.filename
            },
            pid: `${Math.round(Date.now()/1000)}`,
            location:req.body.location,
            type: req.body.type,
            owner_id: req.body.owner_id,
            farea:req.body.farea,
            price: req.body.price,
            details: req.body.details,
            rate: 0,
            available: true,
        })
        await newproperty.save()
    res.json({
        "request":"Accepted"
    })

}catch(e){
    res.json({"error": e.message})
}
}
module.exports=add