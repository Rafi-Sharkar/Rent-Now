const getallimgs=(req,res)=>{
  try{
    res.download(`./images/${req.query.name}`)
  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getallimgs