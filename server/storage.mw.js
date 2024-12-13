const multer = require('multer')
const path = require('path')
const UPLOADS_FOLDER = './uploads/'

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb)=>{
        const fileExt = path.extname(file.originalname)
        const fileName = file.originalname
                                .replace(fileExt,"")
                                .toLowerCase()
                                .split(" ")
                                .join("-")+"-"+Date.now()
        cb(null, fileName+fileExt)
    }
})

// preapre the final multer upload option
var upload = multer({
    storage: storage,
    limits:{
        fileSize:1000000, // 1MB
    },
    fileFilter:(req, file, cb)=>{
        if(
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"            
        ){
            cb(null, true)
        }else{
            cb(new Error("Only .jpg, .png, .jpeg format allowed!!"))
        }
    }
})

module.exports = upload