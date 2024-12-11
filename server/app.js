const express =require("express")
const app=express()
const cors=require('cors')

const userRouter =require("./routers/users.route")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",userRouter)



app.use((errors,req,res,next)=>{
    if(errors.message){
        res.json({"error":errors.message})
    }
    else{
        res.json({"error":errors})
    }

})

module.exports = app;