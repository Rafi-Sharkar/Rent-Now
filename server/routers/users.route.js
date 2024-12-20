const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const profile=require("../Controllers/profile.cont")
const delProperty=require("../Controllers/delProperty.cont")
const allUser = require("../Controllers/allUser.cont")
const getOneUser = require("../Controllers/getOneUser.cont")


userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:email",profile)
userRouter.delete("/delproperty/:id", delProperty)
userRouter.get("/allUser", allUser)
userRouter.get("/getneuser/:id", getOneUser)


module.exports=userRouter