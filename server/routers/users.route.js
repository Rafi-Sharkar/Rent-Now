const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const profile=require("../Controllers/profile.cont")


userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:email",profile)


module.exports=userRouter