const {unlink, fstat}=require("fs")
const user=require("../models/user.mod")
const getprofileimg=async(req,res)=>{
    console.log(req.file,req.body.user)
    console.log(__dirname)
  try{
    const validuser = await user.findOne({_id: req.body.user})
    const {path, filename}=req.file
    if(validuser===null){
        res.json({
            "request":"token expired"
        })
    }else{
        if(validuser.file.filename !=""){
            unlink(
                `D:\\Study tool\\Accademy info\\IUB\\Study\\Semesters\\10_th_Semester_Autumn_2024\\CSC455-1_ST_1440-1610_CSELab3\\Main Project\\project\\RentNow\\server\\images\\${validuser.file.filename}`,(err)=>{
                    if(err){
                        res.json({"request": "error found"})
                    }
                }
            )
        }
        const updateuser = await user.findOneAndUpdate({_id: req.body.user},{
            $set:{
                file:{
                    path: path,
                    filename: filename
                }
            }
        }, {new:true})
        await updateuser.save()
        res.json({"request":"Accepted"})
    }
  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getprofileimg