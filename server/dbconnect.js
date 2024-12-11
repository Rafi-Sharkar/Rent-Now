const mongoose =require("mongoose")
require("dotenv").config()
const dblink=process.env.DBLINK
const dbconnected = async()=>{
    try{

       await mongoose.connect(dblink)
       console.log("Db is connected")

    }catch(e){

        console.log(e)
    }
}
module.exports = dbconnected