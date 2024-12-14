const express=require("express")
const propertyRouter=express.Router()
const add=require("../Controllers/addProperty.cont")
const showAll = require("../Controllers/showAllProperty.cont")
const findProperty = require("../Controllers/findProperty.cont")


// const login=require("../Controllers/login.cont")
// const profile=require("../Controllers/profile.cont")

propertyRouter.post("/add",add)
propertyRouter.get("/showall", showAll)
propertyRouter.get("/find/:owner_email", findProperty)

// userRouter.post("/login",login)

module.exports=propertyRouter