const express=require("express")
const propertyRouter=express.Router()
const add=require("../Controllers/addProperty.cont")
const showAll = require("../Controllers/showAllProperty.cont")
const findProperty = require("../Controllers/findProperty.cont")
const upload = require('../middlewares/uploadimg.mw')
const getproperty=require("../Controllers/getproperty.cont")
const searchProduct = require("../Controllers/searchProduct.cont")
const availabilityUp = require("../Controllers/availabilityUp.cont")
const likeUp = require('../Controllers/likeUp.cont')

// const login=require("../Controllers/login.cont")
// const profile=require("../Controllers/profile.cont")

propertyRouter.post("/add", upload.single('image'),add)
propertyRouter.get("/showall", showAll)
propertyRouter.get("/getproperty/:uid",getproperty)
propertyRouter.get("/search/", searchProduct)
propertyRouter.put("/availabilityup/:id", availabilityUp)
propertyRouter.put("/likeup/:id", likeUp)
// router.put('/availability/:id'

// userRouter.post("/login",login)

module.exports=propertyRouter