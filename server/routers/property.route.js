const express=require("express")
const propertyRouter=express.Router()
const add=require("../Controllers/addProperty.cont")
// const login=require("../Controllers/login.cont")
// const profile=require("../Controllers/profile.cont")

propertyRouter.post("/add",add)
// userRouter.post("/login",login)
// userRouter.get("/profile/:email",profile)

module.exports=propertyRouter