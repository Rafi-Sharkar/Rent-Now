const express=require("express")
const productRouter=express.Router()
const add=require("../Controllers/addProperty.cont")
// const login=require("../Controllers/login.cont")
// const profile=require("../Controllers/profile.cont")

propertyRouter.post("/sign",add)
// userRouter.post("/login",login)
// userRouter.get("/profile/:email",profile)

module.exports=propertyRouter