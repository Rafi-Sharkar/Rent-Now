const express=require("express")
const userRouter=express.Router()
const sign=require("../Controllers/sign.cont")
const login=require("../Controllers/login.cont")
const profile=require("../Controllers/profile.cont")
const delProperty=require("../Controllers/delProperty.cont")
const allUser = require("../Controllers/allUser.cont")
const getOneUser = require("../Controllers/getOneUser.cont")
const addBooking = require("../Controllers/addBooking.cont")
const bookedPropertyO = require("../Controllers/bookedPropertyO.cont")
const bookedPropertyR = require("../Controllers/bookedPropertyR.cont")
const delBooking = require("../Controllers/delBooking.cont")
const upload=require("../middlewares/uploadimg.mw")
const getprofileimg=require("../Controllers/getprofileimg.cont")
const testNow = require("../Controllers/testNow.cont")
userRouter.post("/sign",sign)
userRouter.post("/login",login)
userRouter.get("/profile/:email",profile)
userRouter.delete("/delproperty/:id", delProperty)
userRouter.get("/allUser", allUser)
userRouter.get("/getneuser/:id", getOneUser)
userRouter.post("/booking", addBooking)
userRouter.get("/bookedo/:id", bookedPropertyO)
userRouter.get("/bookedr/:id", bookedPropertyR)
userRouter.delete("/delbooking/:id", delBooking)
userRouter.put("/getprofileimg",upload.single('image'),getprofileimg)
userRouter.get("/test", testNow)





module.exports=userRouter