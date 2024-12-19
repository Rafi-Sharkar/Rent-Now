const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const profile=require("../Controllers/profile.cont")
const delProperty=require("../Controllers/delProperty.cont")


userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:email",profile)
userRouter.delete("/delproperty/:id", delProperty)


module.exports=userRouter