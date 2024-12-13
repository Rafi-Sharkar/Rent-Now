const mongoose =require("mongoose")
const propertySchema=mongoose.Schema({
       location:{
        type:String,
        required:true
       },
       type:{
        type: String
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
       }


})
const property=new mongoose.model("properties",propertySchema)
module.exports = property
