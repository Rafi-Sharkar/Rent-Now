const mongoose =require("mongoose")
const propertySchema=mongoose.Schema({
       location:{
        type:String,
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


})
const property=new mongoose.model("properties",propertySchema)
module.exports = property
