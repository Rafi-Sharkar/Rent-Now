const mongoose =require("mongoose")
const propertySchema=mongoose.Schema({
  file:{
    path:{
        type:String,
        default:""
    }
    ,
    filename:{
            type:String,
            default:""
        }
      },
       pid: {
        type: String,
        required:true
       },
       location:{
        type:String,
        required:true
       },
       type:{
        type: String
       },
       owner_id:{
         type: String,
         required:true
       },
       farea:{
        type:Number,
        required:true,
       },
       price:{
        type:Number,
        required:true
       },
       details:{
        type:String,
        required:true
       },
       rate: {
        type: Number,
        required:false
       },
       available: {
        type: Boolean
       }


})
const property=new mongoose.model("properties",propertySchema)
module.exports = property
