const mongoose =require("mongoose")
const userSchema=mongoose.Schema({
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
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true,
        unique:true
       },
       password:{
        type:String,
        required:true
       },
       usertype:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       },
       profession:{
        type:String,
        default: ''
       },
       Institution:{
        type:String,
        default: ''
       },
       current_address:{
        type:String,
        default: ''
       },
       permanent_address:{
        type:String,
        required:true
       },
       rate:{
        type:String,
        default: ''
       },

})
const user=new mongoose.model("users",userSchema)
module.exports=user
